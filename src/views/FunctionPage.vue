<template>
  <div class="table-container">

    <!--標題-->
    <div class="title">
      <h1>權限總攬</h1>
    </div>

    <div class="tool">
      <el-button class="small-button" type="success" @click="createModal = true">新增權限</el-button>
<!--

//新增modal

      <el-dialog title="新增權限" v-model="createModal">
        <el-form :model="form" label-width="80px">
          <el-form-item label="權限名稱">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="部門">
            <el-select v-model="form.department" placeholder="請選擇部門">
              <el-option label="業務部" value="Sales"></el-option>
              <el-option label="信貸部" value="Credit"></el-option>
              <el-option label="消金部" value="Consumer"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="職位">
            <el-select v-model="form.position" placeholder="請選擇職位">
              <el-option label="經理" value="Manager"></el-option>
              <el-option label="主管" value="Supervisor"></el-option>
              <el-option label="組員" value="Member"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="說明">
            <el-input v-model="form.instruction"></el-input>
          </el-form-item>
        </el-form>
        <div class="dialog-footer">
          <el-button @click="createModal = false">取 消</el-button>
          <el-button type="primary">確 定</el-button>
        </div>
      </el-dialog>
-->

      <!--搜尋-->
      <el-input v-model="search" placeholder="請輸入權限名稱搜尋" style="width: 200px;"></el-input>

      <!--部門選擇-->
      <el-select v-model="filter.department" placeholder="請選擇部門" style="width: 200px;">
        <el-option label="業務部" value="Sales"></el-option>
        <el-option label="信貸部" value="Credit"></el-option>
        <el-option label="消金部" value="Consumer"></el-option>
      </el-select>

      <!--職位選擇-->
      <el-select v-model="filter.position" placeholder="請選擇職位" style="width: 200px;">
        <el-option label="經理" value="Manager"></el-option>
        <el-option label="主管" value="Supervisor"></el-option>
        <el-option label="組員" value="Member"></el-option>
      </el-select>


    </div>

    <el-table :data="customers">
      <el-table-column prop="id" label="編號" width="120"></el-table-column>
      <el-table-column prop="name" label="名稱" width="120"></el-table-column>
      <el-table-column prop="department" label="部門" width="120"></el-table-column>
      <el-table-column prop="position" label="職位" width="120"></el-table-column>
      <el-table-column prop="instruction" label="說明" width="250"></el-table-column>

      <el-table-column label="編輯" width="80">
        <template #default="scope">
          <el-button type="primary" icon="el-icon-edit" @click="editCustomer(scope.row)"></el-button>
        </template>
      </el-table-column>

      <el-table-column label="刪除" width="80">
        <template #default="scope">
          <el-button type="danger" icon="el-icon-delete" @click="deleteCustomer(scope.row)"></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style scoped>
.table-container {
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.el-table th, .el-table td {
  text-align: center;
}
.title {
  text-align: center;
  margin-bottom: 20px;
}

.tool{
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.small-button {
  font-size: 16px;
  padding: 5px 10px;
  width: 15%;
}
</style>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const customers = ref([
      { id: 'f0001', name: '帳戶查詢', department: '業務部', position: '主管', instruction: '查詢客戶的帳戶餘額、交易明細' },
      { id: 'f0002', name: '客戶管理', department: '業務部', position: '主管', instruction: '新增、修改、刪除客戶資料' },
      { id: 'f0003', name: '交易記錄', department: '業務部', position: '主管', instruction: '查詢客戶的交易記錄' },
      { id: 'f0004', name: '報表查詢', department: '業務部', position: '主管', instruction: '查詢各種報表' },
      { id: 'f0005', name: '系統設定', department: '業務部', position: '主管', instruction: '設定系統參數' },
    ]);


    const search = ref('');
    const filter = ref({
      department: '',
      position: '',
    });


    const editCustomer = (row) => {
      console.log('編輯:', row);
    };

    const viewCustomer = (row) => {
      console.log('查詢:', row);
    };

    const deleteCustomer = (row) => {
      console.log('刪除:', row);
    };

    return {
      customers,
      editCustomer,
      viewCustomer,
      deleteCustomer,
      search,
      filter
    };
  },
});
</script>