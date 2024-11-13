<template>

  <div class="table-container">
  <div class="title">
    <h1>部門管理</h1>
  </div>

    <div class="tool">
      <el-button class="small-button" type="success">新增</el-button>
    </div>

  <el-table :data="customers">
    <el-table-column prop="id" label="編號" width="150"></el-table-column>
    <el-table-column prop="departmentName" label="部門" width="200"></el-table-column>


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

</style>

<script>

import { ref } from 'vue'

export default {
  setup() {
    const customers = ref([
      { id: 'D001', departmentName: '業務部' },
      { id: 'D002', departmentName: '信貸部' },
      { id: 'D003', departmentName: '消金部' },
    ])

    const filter = ref({
      department: '',
      position: ''
    })

    const editCustomer = (row) => {
      console.log(row)
    }

    const deleteCustomer = (row) => {
      console.log(row)
    }

    return {
      customers,
      filter,
      editCustomer,
      deleteCustomer
    }
  }
}


</script>