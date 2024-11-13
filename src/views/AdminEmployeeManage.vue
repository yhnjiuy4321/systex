<script setup>
import { ref } from 'vue';

const selectedFunction = ref('');
const functionsList = ref([]);

const addFunction = () => {
  if (selectedFunction.value) {
    functionsList.value.push(selectedFunction.value);
    selectedFunction.value = '';
  }
};

</script>
<template>

    <h1>員工管理</h1>

  <!-- 新增按鈕 -->
  <div class="tool">
    <a href="#createEmp" class="add">新增員工</a>
  </div>

  <!-- 新增員工表單 -->
  <div id="createEmp" class="modal">
    <div class="modal-content">
      <a href="#" class="close">X</a>
      <h2>新增員工資料</h2>
      <form>
        <div class="form-group">
          <label for="name">姓名:</label>
          <input type="text" id="name" name="name">
        </div>
        <div class="form-group">
          <label for="department">部門:</label>
          <input type="text" id="department" name="department">
        </div>
        <div class="form-group">
          <label for="position">職位:</label>
          <input type="text" id="position" name="position">
        </div>
        <div class="form-group">
          <label for="extension">分機:</label>
          <input type="text" id="extension" name="extension">
        </div>

        <!-- 功能按鈕 -->
        <div class="buttonGroup">
        <button type="submit" class="send">提交</button>
        <a href="#" class="down">取消</a>
        </div>
      </form>
    </div>
  </div>

  <!-- 搜尋、下拉選單 -->
  <div class="subtool">
    <div class="search">
    <input type="text" placeholder="請輸入員工姓名">
    <button class="sumbit"><i class="fas fa-search"></i></button>
    </div>

    <!-- 部門 -->
    <select class="form-select">
      <option>－部門篩選－</option>
      <option value="aaa">業務部</option>
      <option value="bbb">消金部</option>
      <option value="ccc">借貸部</option>
    </select>

    <!-- 職位 -->
    <select class="form-select">
      <option>－職位篩選－</option>
      <option value="aaa">經理</option>
      <option value="bbb">主管</option>
      <option value="ccc">科員</option>
    </select>

    <!-- 員編 -->
    <select class="form-select">
      <option>－排序－</option>
      <option value="aaa">依員編(升冪)</option>
      <option value="bbb">依員編(降冪)</option>
    </select>
  </div>

  <table id="customers">
    <tr>
      <th>編輯</th>
      <th>員編</th>
      <th>姓名</th>
      <th>部門</th>
      <th>職位</th>
      <th>分機</th>
      <th>查詢</th>
      <th>刪除</th>
    </tr>
    <tr>
      <td><a href="#adjust"><i class="fas fa-pencil-alt"></i></a></td>
      <td>a0001</td>
      <td>王逢甲</td>
      <td>業務部</td>
      <td>主管</td>
      <td>123</td>
      <td><a href="#see"><i class="fas fa-file"></i></a></td>
      <td><a href="#delete"><i class="fas fa-trash" style="color:red;"></i></a></td>
    </tr>
    <tr>
      <td><a href="#adjust"><i class="fas fa-pencil-alt"></i></a></td>
      <td>a0002</td>
      <td>陳西屯</td>
      <td>業務部</td>
      <td>組員</td>
      <td>012</td>
      <td><a href="#see"><i class="fas fa-file"></i></a></td>
      <td><a href="#delete"><i class="fas fa-trash" style="color:red;"></i></a></td>
    </tr>
    <tr>
      <td><a href="#adjust"><i class="fas fa-pencil-alt"></i></a></td>
      <td>a0003</td>
      <td>薛秋</td>
      <td>經理</td>
      <td>借貸部</td>
      <td>666</td>
      <td><a href="#see"><i class="fas fa-file"></i></a></td>
      <td><a href="#delete"><i class="fas fa-trash" style="color:red;"></i></a></td>
    </tr>
    </table>

  <!-- 調整員工表單 -->
  <div id="adjust" class="modal">
    <div class="modal-content">
      <a href="#" class="close">X</a>
      <h2>新增員工資料</h2>
      <form>
        <div class="form-group">
          <label for="name">姓名:</label>
          <label for="name">王逢甲</label>
        </div>
        <div class="form-group">
          <label for="department">部門:</label>
          <label for="name">業務部</label>
        </div>
        <div class="form-group">
          <label for="position">職位:</label>
          <label for="name">組員</label>
        </div>
        <div class="form-group">
          <label for="extension">功能:</label>
          <select v-model="selectedFunction" class="form-select">
            <option disabled value="">－功能選擇－</option>
            <option value="銷帳">銷帳</option>
            <option value="開冷氣">開冷氣</option>
            <option value="訂飲料">訂飲料</option>
          </select>
          <button type="button" @click="addFunction">＋</button>
        </div>
        <div class="func_box">
          <div v-for="func in functionsList" :key="func">{{ func }}</div>
        </div>

        <!-- 功能按鈕 -->
        <div class="buttonGroup">
          <button type="submit" class="send">提交</button>
          <a href="#" class="down">取消</a>
        </div>
      </form>
    </div>
  </div>

  <!-- 查詢員工表單 -->
  <div id="see" class="modal">
    <div class="modal-content">
      <a href="#" class="close">X</a>
      <h2>新增員工資料</h2>
      <form>
        <div class="form-group">
          <label for="name">姓名:</label>
          <input type="text" id="name" name="name">
        </div>
        <div class="form-group">
          <label for="department">部門:</label>
          <input type="text" id="department" name="department">
        </div>
        <div class="form-group">
          <label for="position">職位:</label>
          <input type="text" id="position" name="position">
        </div>
        <div class="form-function">
          <label for="extension">功能:</label>
          <input type="text" id="extension" name="extension">
        </div>

        <!-- 功能按鈕 -->
        <div class="buttonGroup">
          <button type="submit" class="send">提交</button>
          <a href="#" class="down">取消</a>
        </div>
      </form>
    </div>
  </div>

  <!-- 刪除員工 -->
  <div id="delete" class="modal">
    <div class="modal-content">
      <a href="#" class="close">X</a>
      <h2>刪除資料</h2>
      <form>

        <a>是否刪除資料?????</a>

        <!-- 功能按鈕 -->
        <div class="buttonGroup">
          <button type="submit" class="send">提交</button>
          <a href="#" class="down">取消</a>
        </div>
      </form>
    </div>
  </div>


</template>

<style scoped>

  h1 {
    text-align: center;
    color: #333;
    margin-top: 40px;
  }

  table {
    font-family: Arial, sans-serif;
    border-collapse: collapse;
    width: 80%;
    margin: 0 auto;
    text-align: center;
  }

  th {
    background-color: #504b4b;
    color: white;
  }

  th, td {
    /*border: 1px solid #ddd;*/
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #f2f2f2;
  }

  .tool {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
    margin-bottom: 40px;
  }

  .add {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none; /* 移除底線 */
  }

  .add:hover {
    background-color: #45a049;
  }

  .subtool {
    display: flex;
    justify-content: space-between;
    gap: 5px;
    width: 80%;
    margin: 0 auto 20px auto;
  }

  .search {
    display: flex;
    gap: 5px;
  }

  input[type=text] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  .sumbit {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .sumbit:hover {
    background-color: #45a049;
  }

  .form-select {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  .modal {
    display: none;
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);

  }


  @keyframes fade {
    from {opacity: 0;}
    to {opacity: 1;}
  }

  .modal:target {
    display: block;
    animation: fade 0.5s;
  }

  .modal-content {
    background-color: #fefefe;
    margin: 5% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 50%;
    border-radius: 10px;
  }

  .form-function,
  .form-group {
    display: flex;
    margin-bottom: 7px;
    margin-top: 7px;
  }

  .func_box{
    display: grid;
    width: 100%;
    height: 100px;
    border: #666666 1px solid;
    gap: 5px;
    border-radius: 5px;
    overflow-y: auto;
    padding: 5px;
  }

  .form-group button{
    margin-left: 5px;
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }

  label {
    width: 70px;
    font-size: 16px;
    line-height: 30px;
   }

  input[type=text] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  .buttonGroup{
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
    margin-bottom: 40px;
  }

  .down {
    padding: 10px 20px;
    background-color: #ec0000;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none; /* 移除底線 */
  }

  .down:hover,
  .down:focus {
    background-color: #910303;
    text-decoration: none;
    cursor: pointer;
  }

  .send {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }

  .send:hover {
    background-color: #1a4a2f;
 }
 .buttonGroup{
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
    margin-bottom: 40px;
  }

  .down {
    padding: 10px 20px;
    background-color: #ec0000;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none; /* 移除底線 */
  }

  .down:hover,
  .down:focus {
    background-color: #910303;
    text-decoration: none;
    cursor: pointer;
  }

  .send {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }

  .send:hover {
    background-color: #1a4a2f;
 }

.close {
    color: #000000;
    float: right;
    font-size: 20px;
    text-decoration: none; /* 移除底線 */
}




</style>

