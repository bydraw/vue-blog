<template>
  <div>
    <el-button style="margin:5px 0 5px 15px;" @click="backToBlogList">
      <i class="el-icon-arrow-left"></i> 返回</el-button>
    <el-card class="box-card blogDetailCard">
      <div slot="header" class="clearfix">
        <span>{{title}}</span>
      </div>
      <div class="text item blogContent">
        {{content}}
      </div>
    </el-card>
  </div>

</template>

<script>
export default {
  data() {
    return {
      title: '读取中...',
      content: '读取中...'
    }
  },
  activated() {
    this.title = '读取中...'
    this.content = '读取中...'
    const id = window.location.href.split('?id=')[1]
    this.$ajax.get('/blog.php?id=' + id).then(res => {
      const data = res.data
      if (data.error) {
        alert(data.error)
      } else {
        this.title = data.title
        this.content = data.content
      }
    })
  },
  methods: {
    backToBlogList() {
      this.$router.push('/blog')
    }
  }
}
</script>

<style scoped>
.blogDetailCard .el-card__header span {
  font-size: 18px;
}
.el-card {
  width: 60%;
  margin: 5px auto;
}
.blogContent{
  line-height: 30px;
}
@media screen and (max-width: 480px) {
  .el-card {
    width: 90%;
  }
}
</style>
