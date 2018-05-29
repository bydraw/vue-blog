<template>
  <el-card class="box-card">
    <h1>这个页面走丢了...</h1>
    <el-button type="primary" @click="returnToHome">请带它回家</el-button>
  </el-card>
</template>

<script>
export default {
  methods: {
    returnToHome() {
      this.$router.push({ name: 'HomePage' })
    }
  }
}
</script>

<style scoped>
.box-card {
  width: 50%;
  min-width: 200px;
  margin: 15px auto;
  text-align: center;
  padding: 0;
}
</style>
