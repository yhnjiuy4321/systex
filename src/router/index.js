import { createRouter, createWebHistory } from 'vue-router';
import { ElMessage } from 'element-plus'; // 引入 Element Plus 消息提示
import LoginView from '../views/LoginView.vue';
import AdminDashboard from '../views/AdminDashboard.vue';
import AdminEmployeeManage from '../views/AdminEmployeeManage.vue';
import FunctionPage from "@/views/FunctionPage.vue";
import Affairpage from "@/views/AffairComponent.vue";
import Change from "@/views/staffChange.vue";
import Outstaff from "@/views/OutStaff.vue";

const routes = [
    {
        path: '/',
        name: 'Login',
        component: LoginView
    },
    {
        path: '/admin',
        name: 'Admin',
        component: AdminDashboard,
        meta: { requiresAuth: true }
    },
    {
        path: '/admin/EmployeesManagementPage',
        name: 'EmployeesManagement',
        component: AdminEmployeeManage
    },
    {
        path: '/admin/function',
        name: 'function',
        component: FunctionPage
    },
    {
        path: '/admin/AffairManage',
        name: 'affair',
        component: Affairpage
    },
    {
        path: '/admin/Departure',
        name: 'departure',
        component: Outstaff
    },
    {
        path: '/admin/staffChange',
        name: 'change',
        component: Change
    }

];

// Token 過期檢查函數
function isTokenExpired(token) {
    if (!token) return true;
    try {
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        return decodedToken.exp * 1000 < Date.now();
    } catch {
        return true;
    }
}

const router = createRouter({
    history: createWebHistory(),
    routes
});


// 在重定向之前顯示消息提示
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        const token = localStorage.getItem('token');
        if (!token || isTokenExpired(token)) {
            localStorage.removeItem('token'); // 移除過期的 token

            // 顯示消息提示
            ElMessage({
                message: '請先登入',
                type: 'warning',
            });

            // 然後重定向到登入頁
            next({
                path: '/',
                query: { redirect: to.fullPath }
            });
        } else {
            next();
        }
    } else if (to.path === '/' && to.query.redirect && localStorage.getItem('token')) {
        next(to.query.redirect);
    } else {
        next();
    }
});


export default router;