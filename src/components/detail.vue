<template>
  <div>
    <h1 class="artTitle">{{id}}</h1>
    <p class="artContent">{{content}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'loading',
      content: 'loading'
    }
  },
  props: ['id'],
  updated () {
    this.$ajax.get('static/' + this.id + '.txt')
      .then((res) => {
        this.content = res.data
      })
  }
}
</script>

<style>
.artTitle,
.artContent {
  margin: 20px auto;
  width: 80%;
}

.artTitle {
  font-weight: bold;
}

.artContent {
  font-size: 1.2rem;
  line-height: 1.4rem;
}
</style>
