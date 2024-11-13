

<template>

  <div class="table-container">
    <div class="title">
      <h1>離職人員管理</h1>
    </div>

    <div class="tool">

    <el-input v-model="search" placeholder="請輸入姓名搜尋" style="width: 200px;"></el-input>

    <!--部門選擇-->
    <el-select v-model="filter.whatThing" placeholder="請選擇離職類型" style="width: 200px;">
      <el-option label="自願離職" value="Official"></el-option>
      <el-option label="非自願離職" value="Sick"></el-option>
      <el-option label="退休" value="StandIn"></el-option>
    </el-select>

    <!--職位選擇-->
    <el-select v-model="filter.whatYouWantSee" placeholder="請選擇排序方式" style="width: 200px;">
      <el-option label="員編(升冪)" value="numberup"></el-option>
      <el-option label="員編(降冪)" value="numberdown"></el-option>
      <el-option label="到職日(升冪)" value="start_date_up"></el-option>
      <el-option label="到職日(降冪)" value="start_date_down"></el-option>
      <el-option label="離職日(升冪)" value="submit_day_up"></el-option>
      <el-option label="離職日(降冪)" value="submit_day_down"></el-option>
    </el-select>

    </div>




    <el-table :data="customers">
      <el-table-column prop="end_day" label="離職日" width="150"></el-table-column>
      <el-table-column prop="start_day" label="到職日" width="150"></el-table-column>
      <el-table-column prop="id" label="員編" width="100"></el-table-column>
      <el-table-column prop="name" label="姓名" width="100"></el-table-column>
      <el-table-column prop="department" label="部門" width="100"></el-table-column>
      <el-table-column prop="position" label="職位" width="120"></el-table-column>
      <el-table-column prop="type" label="離職類型" width="120"></el-table-column>



      <el-table-column label="詳細資料" width="80">
        <template #default="scope">
          <el-button type="primary" icon="el-icon-edit" @click="seeCustomer(scope.row)"></el-button>
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

.tool{
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
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

import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const customers = ref([
      {
        id: '001',
        name: '王小明',
        department: '業務部',
        position: '經理',
        start_day: '2021-01-01',
        end_day: '2021-06-01',
        type: '自願離職',
      },
      {
        id: '002',
        name: '陳小華',
        department: '信貸部',
        position: '主管',
        start_day: '2021-02-01',
        end_day: '2021-06-01',
        type: '非自願離職',
      },
      {
        id: '003',
        name: '李小強',
        department: '消金部',
        position: '組員',
        start_day: '2021-03-01',
        end_day: '2021-06-01',
        type: '退休',
      },{
        id: '003',
        name: '李小強',
        department: '消金部',
        position: '組員',
        start_day: '2021-03-01',
        end_day: '2021-06-01',
        type: '退休',
      },{
        id: '003',
        name: '李小強',
        department: '消金部',
        position: '組員',
        start_day: '2021-03-01',
        end_day: '2021-06-01',
        type: '退休',
      },{
        id: '003',
        name: '李小強',
        department: '消金部',
        position: '組員',
        start_day: '2021-03-01',
        end_day: '2021-06-01',
        type: '退休',
      },{
        id: '003',
        name: '李小強',
        department: '消金部',
        position: '組員',
        start_day: '2021-03-01',
        end_day: '2021-06-01',
        type: '退休',
      },{
        id: '003',
        name: '李小強',
        department: '消金部',
        position: '組員',
        start_day: '2021-03-01',
        end_day: '2021-06-01',
        type: '退休',
      }
    ]);

    const search = ref('');
    const filter = ref({
      whatThing: '',
      whatYouWantSee: '',
    });

    const seeCustomer = (row) => {
      console.log('查看:', row);
    };

    return {
      customers,
      filter,
      search,
      seeCustomer,
    }
  }
})

</script>