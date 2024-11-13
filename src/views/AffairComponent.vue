<template>
<div class="table-container">

<!--標題-->
<div class="title">
  <h1>事項管理</h1>
</div>

<div class="tool">

  <!--搜尋-->
  <el-input v-model="search" placeholder="請輸入姓名搜尋" style="width: 200px;"></el-input>

  <!--部門選擇-->
  <el-select v-model="filter.whatThing" placeholder="請選擇事項" style="width: 200px;">
    <el-option label="公假" value="Official"></el-option>
    <el-option label="病假" value="Sick"></el-option>
    <el-option label="代理" value="StandIn"></el-option>
  </el-select>

  <!--職位選擇-->
  <el-select v-model="filter.whatYouWantSee" placeholder="請選擇排序方式" style="width: 200px;">
    <el-option label="員編(升冪)" value="numberup"></el-option>
    <el-option label="員編(降冪)" value="numberdown"></el-option>
    <el-option label="請假起始日(升冪)" value="start_date_up"></el-option>
    <el-option label="請假起始日(降冪)" value="start_date_down"></el-option>
    <el-option label="提交日(升冪)" value="submit_day_up"></el-option>
    <el-option label="提交日(降冪)" value="submit_day_down"></el-option>


  </el-select>


</div>

<el-table :data="customers">
  <el-table-column prop="submit_day" label="提交日" width="120"></el-table-column>
  <el-table-column prop="id" label="員編" width="80"></el-table-column>
  <el-table-column prop="name" label="姓名" width="100"></el-table-column>
  <el-table-column prop="thing" label="事項" width="100"></el-table-column>
  <el-table-column prop="instruction" label="內容" width="200"></el-table-column>
  <el-table-column prop="start_time" label="請假起始日" width="100"></el-table-column>
  <el-table-column prop="time" label="時數" width="80"></el-table-column>


  <el-table-column label="刪除" width="80">
    <template #default="scope">
      <el-button type="danger" icon="el-icon-delete" @click="deleteCustomer(scope.row)"></el-button>
    </template>
  </el-table-column>

  <el-table-column label="批准" width="80">
    <template #default="scope">
      <el-button type="primary" icon="el-icon-edit" @click="approveCustomer(scope.row)"></el-button>
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
      {
        submit_day: '2021-09-01',
        id: '001',
        name: '王小明',
        thing: '請假',
        instruction: '因家中有事，請假一天',
        start_time: '2021-09-01',
        time: '8小時'
      },
      {
        submit_day: '2021-09-02',
        id: '002',
        name: '陳小華',
        thing: '請假',
        instruction: '因生病，請假三天',
        start_time: '2021-09-02',
        time: '24小時'
      },
      {
        submit_day: '2021-09-03',
        id: '003',
        name: '李小強',
        thing: '請假',
        instruction: '因家中有事，請假一天',
        start_time: '2021-09-03',
        time: '8小時'
      },
      {
        submit_day: '2021-09-04',
        id: '004',
        name: '張小娟',
        thing: '請假',
        instruction: '因生病，請假三天',
        start_time: '2021-09-04',
        time: '24小時'
      }
             ]);


    const search = ref('');
    const filter = ref({
      whatThing: '',
      whatYouWantSee: '',
    });


    const approveCustomer = (row) => {
      console.log('批准:', row);
    };

    const viewCustomer = (row) => {
      console.log('查詢:', row);
    };

    const deleteCustomer = (row) => {
      console.log('刪除:', row);
    };

    return {
      customers,
      approveCustomer,
      viewCustomer,
      deleteCustomer,
      search,
      filter
    };
  },
});
</script>