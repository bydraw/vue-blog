<template>
  <div>
    <nav-bar></nav-bar>
    <el-card class="box-card" v-show="artList">
      <div v-for="(value,index) in artTitles" :key=index class="text item" @click="openArticle(index)">
        {{value.title}}
      </div>
    </el-card>
    <el-card class="box-card artDetail" v-show="artDetail">
      <el-button @click="closeArticle()">Back</el-button>
      <detail :id="idToDetail"></detail>
    </el-card>
  </div>
</template>

<script>
import NavBar from '@/components/navbar'
import store from '@/store.js'
import detail from '@/components/detail'

export default {
  data () {
    return {
      master: store.state.master,
      artList: true,
      artDetail: false,
      artTitles: ['loading'],
      idToDetail: ''
    }
  },
  components: {
    detail,
    NavBar
  },
  methods: {
    getArtTitles () {
      this.$ajax.get('static/test.txt').then(res => {
        this.artTitles = res.data
      })
    },
    openArticle (index) {
      this.idToDetail = this.artTitles[index].id
      this.artList = false
      this.artDetail = true
    },
    closeArticle () {
      this.artDetail = false
      this.artList = true
    }
  },
  mounted () {
    this.getArtTitles()
  }
}
</script>

<style scoped>
div.text.item {
  text-align: left;
  font-size: 1.2rem;
  padding: 10px;
  border-radius: 5px;
}

div.text.item:hover {
  cursor: pointer;
  background: #eee;
}

.box-card {
  position: relative;
}

.artDetail .el-card__body {
  padding: 20px 100px;
}

.el-button {
  position: absolute;
  width: 80px;
  font-size: 20px;
  height: 40px;
  left: 20px;
  top: 20px;
}
</style>
