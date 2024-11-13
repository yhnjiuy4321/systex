

<template>
  <div class="admin-dashboard">
    <h1>部門與職位</h1>
    <div class="admin-options">
      <div class="option-box">
        <h3>部門</h3>
        <p>管理部門</p>
        <button @click="handle_department">進入</button>
      </div>

      <div class="option-box">
        <h3>職位</h3>
        <p>管理職位</p>
        <button @click="handle_position">進入</button>
      </div>

    </div>
  </div>
</template>

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

<script>

export default {
  methods: {
    handle_department() {
      this.$router.push('/admin/departmentManagement');
    },
    handle_position() {
      this.$router.push('/admin/positionManagement');
    }
  }
}
</script>