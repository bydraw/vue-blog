<template>
  <div>
    <div class="loginDiv">
      <h1 style="text-align:center">登录</h1>
      <el-input v-model="account" placeholder="请输入账号"></el-input>
      <el-input type="password" v-model="password" placeholder="请输入密码" @keyup.enter.native="login"></el-input>
      <el-button type="primary" @click="login">登录</el-button>
    </div>
    <canvas></canvas>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: 'guest',
      password: 'guest'
    }
  },
  created() {
    if (this.$store.state.logged == false) {
      this.$router.push('/')
    }
  },
  methods: {
    login() {
      if (this.account == 'admin' && this.password == '111111') {
        this.setCookie('logged', true)
        this.setCookie('isMaster', true)
        this.$store.commit('logByMaster')
        this.$message({
          message: 'bydraw登录',
          type: 'success',
          duration: 1000
        })
        this.$router.push('/')
      } else if (this.account == 'guest' && this.password == 'guest') {
        this.$message({
          message: '欢迎访客！',
          type: 'success',
          duration: 1000
        })
        this.setCookie('logged', true)
        this.$store.commit('login')
        this.$router.push('/')
      } else {
        this.$message({
          message: '账号密码错误！',
          type: 'error',
          duration: 1000
        })
      }
    }
  }
}
</script>
<style scoped>
.loginDiv {
  width: 200px;
  height: 150px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -100px;
  margin-left: -100px;
}
.loginDiv > * {
  margin: 5px 0;
}
</style>
