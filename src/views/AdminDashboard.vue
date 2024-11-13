<template>
  <div class="admin-dashboard">
    <h1>系統管理員後台</h1>
    <div class="admin-options">
      <div class="option-box">
        <h3>現職人員管理</h3>
        <p>檢視和管理系統用戶</p>
        <button @click="handleUserManagement">進入</button>
      </div>
      <div class="option-box">
        <h3>權限管理</h3>
        <p>管理各部門職位權限</p>
        <button @click="handleFunction">進入</button>
      </div>
      <div class="option-box">
        <h3>事項管理</h3>
        <p>人員事項管理</p>
        <button @click="handleAffairs">進入</button>
      </div>

      <div class="option-box">
        <h3>離職人員管理</h3>
        <p>管理離職人員</p>
        <button @click="handleDeparture">進入</button>
      </div>

      <div class="option-box">
        <h3>人員異動</h3>
        <p>管理人員調職、停權、復權等等</p>
        <button @click="handleChange">進入</button>
      </div>

      <div class="option-box">
        <h3>部門與職位</h3>
        <p>管理部門與職位相關事項</p>
        <button @click="handle_dp">進入</button>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminDashboard',
  methods: {
    handleUserManagement() {
      console.log('Navigating to User Management');
      this.$router.push('/admin/EmployeesManagementPage');

    },
    handleFunction() {
      this.$router.push('/admin/function');
    },
    handleAffairs() {
      this.$router.push('/admin/AffairManage');
    },
    handleDeparture() {
      this.$router.push('/admin/Departure');
    },
    handleChange() {
      this.$router.push('/admin/staffChange');
    },
    handle_dp() {
      this.$router.push('/admin/dpDashboard');
    }
  }
}
</script>

<style scoped>
.admin-dashboard {
  padding: 2rem;
  background-color: #f5f5f5;
  min-height: 100vh;

}

h1 {
  text-align: center;
  color: #333;
}

.admin-options {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 2rem;

}

.option-box {
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 30%;
  margin: 10px;
  box-sizing: border-box;
}

.option-box h3 {
  margin-bottom: 1rem;
  color: #333;
}

.option-box p {
  color: #666;
}

button {
  padding: 0.5rem 1rem;
  background-color: #002b9f;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #001f75;
}
</style>
