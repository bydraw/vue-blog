<template>
<div>
  <el-card class="box-card">
    <userinfo></userinfo>
  </el-card>
  <div id="jokesCont">
    <jokes ref="jokes"></jokes>
  </div>
</div>
</template>

<script>
import userinfo from '@/components/userinfo'
import jokes from '@/components/jokes'
export default {
  components: { userinfo, jokes }
}
</script>

<style scoped>
.el-card,
#jokesCont {
  width: 80%;
}
#jokesCont {
  margin: 0 auto;
}
</style>
