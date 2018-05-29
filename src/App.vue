<template>
  <div id="app">
    <navbar v-show="hasNavBar"></navbar>
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view class="routerCont"></router-view>
      </keep-alive>
    </transition>
    <el-button v-show="hasNavBar" type="danger" @click="logout" class="logoutBtn">登出</el-button>
    <el-alert :title=msg type="info" class="bottomInfo" :closable="false"></el-alert>
  </div>
</template>

<script>
import navbar from '@/components/navbar'

export default {
  name: 'app',
  components: { navbar },
  data() {
    return {
      msg:
        'People who are crazy enough to think they can change the world, are the ones who do. ',
      hasNavBar: true
    }
  },
  created() {
    this.toggleNavBar()
  },
  watch: {
    $route(to, from) {
      this.toggleNavBar()
    }
  },
  methods: {
    toggleNavBar() {
      if (this.$route.path == '/login' || this.$route.path == '/blogdetail') {
        this.hasNavBar = false
      } else {
        this.hasNavBar = true
      }
    },
    logout() {
      this.$store.commit('logout')
      this.delCookie('logged')
      this.delCookie('isMaster')
      this.$router.push('/login')
    }
  }
}
</script>

<style>
body {
  background: #eee;
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.routerCont {
  padding-bottom: 60px;
}
.bottomInfo {
  text-align: center;
  position: fixed !important;
  bottom: 0;
}
.bottomInfo .el-alert__content {
  margin: 0 auto;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.el-message {
  top: 60px;
}
.el-message-box__wrapper {
  background: #eee;
}
.el-alert__title {
  background-image: -webkit-linear-gradient(left, red, blue, red);
  background-clip: inherit;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.el-alert {
  cursor: default;
}
.box-card {
  opacity: 0.8;
  margin: 20px auto;
}
.el-card__header {
  padding: 10px 20px;
}
.logoutBtn {
  position: fixed;
  right: 10px;
  bottom: 35px;
}
.el-menu {
  width: 100%;
}
@media screen and (max-width: 768px) {
  .el-alert__title {
    background-image: none;
    background-clip: inherit;
    -webkit-background-clip: inherit;
    -webkit-text-fill-color: inherit;
    color: forestgreen;
  }
  .logoutBtn {
    bottom: 60px;
  }
}
</style>
