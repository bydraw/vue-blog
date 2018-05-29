<template>
  <div>
    <h1>笑话大全</h1>
    <div id="jokesList">
      <el-card class="box-card" v-for="item in laughs" :key="item.soureid">
        <p>{{item.username}}</p>
        <h4>{{item.text}}</h4>
      </el-card>
    </div>
    <el-button type="primary" @click="getJokes" :loading="loading" class="moreJokesBtn" plain>{{moreText}}</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      laughs: [],
      loading: true,
      moreText: '加载中'
    }
  },
  mounted() {
    this.getJokes()
  },
  methods: {
    getJokes() {
      this.loading = true
      this.moreText = '加载中'
      this.$nextTick(() => {
        this.$ajax
          .get('https://www.apiopen.top/satinGodApi?type=2&page=0')
          .then(res => {
            this.laughs = this.laughs.concat(res.data.data)
            this.moreText = '点击加载更多'
            this.loading = false
          })
      })
    }
  }
}
</script>

<style scoped>
.moreJokesBtn {
  display: block;
  width: 30%;
  min-width: 200px;
  margin: 0 auto;
}
#jokesList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
#jokesList .el-card {
  width: 30%;
  margin:10px 0;
}
@media screen and (max-width: 1024px) {
  #jokesList .el-card {
    width: 45%;
  }
}
@media screen and (max-width: 480px) {
  #jokesList .el-card {
    width: auto;
  }
}
</style>
