<template>
  <div>
    <el-card class="box-card" v-for="(item,index) in blogList" :key="index">
      <div class="blogListTitle" @click="viewBlog(item.id)">
        <span>{{item.title}}</span>
      </div>
      <div v-show="isMaster" class="delBtn">
        <el-button @click="delBlog(item.id)" type="danger">删除</el-button>
      </div>
    </el-card>
    <el-card class="box-card">
      <el-input type="text" v-model="inputTitle" placeholder="标题"></el-input>
      <el-input type="textarea" v-model="inputContent" placeholder="内容"></el-input>
      <el-button type="primary" @click="subBlog">提交</el-button>
    </el-card>
  </div>
</template>

<script>
import store from '@/store.js'
export default {
  data() {
    return {
      inputTitle: '',
      inputContent: '',
      isMaster: false,
      blogList: [{ title: '加载中...'}]
    }
  },
  activated() {
    this.isMaster = store.state.isMaster || !!this.getCookie('isMaster')
    this.getBlogs()
  },
  created() {
    this.isMaster = store.state.isMaster || !!this.getCookie('isMaster')
  },
  methods: {
    getBlogs() {
      this.$ajax.get('/blog.php').then(res => {
        if (typeof res.data == 'string') {
          this.blogList = [{ title: '暂无'}]
        } else {
          let data = res.data.map(blogItem => {
            return {
              id: blogItem.id,
              title: decodeURIComponent(blogItem.title)
            }
          })
          this.blogList = data
        }
      })
    },
    subBlog() {
      if (this.inputTitle.trim() == '') {
        this.$message({
          message: '标题不能为空！',
          type: 'warning',
          duration: 1000
        })
        return
      } else if (this.inputContent.trim() == '') {
        this.$message({
          message: '内容不能为空！',
          type: 'warning',
          duration: 1000
        })
      } else {
        var params = new URLSearchParams()
        params.append('title', encodeURIComponent(this.inputTitle))
        params.append('content', encodeURIComponent(this.inputContent))
        this.$ajax.post('/blog.php', params).then(res => {
          this.inputTitle = ''
          this.inputContent = ''
          this.$message({
            message: '添加成功',
            type: 'success',
            duration: 1000
          })
          this.getBlogs()
        })
      }
    },
    viewBlog(id) {
      if (id) {
        this.$router.push('/blogdetail?id=' + id)
      }
    },
    delBlog(id) {
      if (this.isMaster) {
        var params = new URLSearchParams()
        params.append('isMaster', this.isMaster)
        params.append('id', id)
        this.$ajax.post('/delBlog.php', params).then(res => {
          this.$message({
            message: res.data.msg,
            type: 'success',
            duration: 1000
          })
          this.getBlogs()
        })
      } else {
        alert('NO ACCESS!')
        return
      }
    }
  }
}
</script>

<style scoped>
.box-card {
  margin: 15px;
  position: relative;
}
.box-card:hover {
  box-shadow: none;
}
.el-input,
.el-textarea {
  margin-bottom: 5px;
}
.blogListTitle {
  cursor: pointer;
}
.delBtn {
  position: absolute;
  right: 10px;
  top: 10px;
}
</style>
