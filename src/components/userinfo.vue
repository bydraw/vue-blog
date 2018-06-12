<template>
  <div>
    <h1>欢迎！</h1>
    <h3>IP - {{ip}}</h3>
    <h3>坐标 - {{city}}（实时温度{{weather.wendu}}℃）</h3>
    <h3>浏览器 - {{browserVersion}}</h3>
    <h3>时间 - {{date}} {{localtime}}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ip: 'unknown',
      city: 'unknown',
      weather: {},
      userLanguage: 'unknown',
      browserVersion: 'unknown',
      date: 'unknown',
      localtime: new Date().toLocaleTimeString()
    }
  },
  methods: {
    getInfo() {
      const ua = navigator.userAgent
      this.browserVersion =
        ua.indexOf('Edge') > -1
          ? 'Microsoft Edge'
          : ua.indexOf('Opera') > -1
            ? 'Opera'
            : ua.indexOf('Chrome') > -1
              ? 'Chrome ' + ua.split('Chrome/')[1].slice(0, 4)
              : ua.indexOf('Safari') > -1
                ? 'Safari '
                : ua.indexOf('Firefox') > -1
                  ? 'Firefox ' + ua.split('Firefox/')[1].slice(0, 4)
                  : 'Unknown Browser'
    },
    getDate() {
      let d = new Date()
      this.date = d.getFullYear() + '.' + (d.getMonth() + 1) + '.' + d.getDate()
    },
    getTime() {
      this.localtime = new Date().toLocaleTimeString()
    },
    setInfo() {
      this.ip = returnCitySN.cip
      this.city = returnCitySN.cname
      this.$ajax
        .get('https://www.apiopen.top/weatherApi?city=' + returnCitySN.cname)
        .then(res => {
          if (res.data.code != 200) {
            this.hasData = false
          } else {
            this.weather = res.data.data
          }
        })
    }
  },
  mounted() {
    this.getInfo()
    this.getDate()
    setInterval(this.getTime, 1000)
    const _vm = this
    $.ajax({
      type: 'get',
      async: false,
      url: 'http://pv.sohu.com/cityjson',
      dataType: 'jsonp',
      success() {
        _vm.setInfo()
      },
      error() {
        _vm.setInfo()
      }
    })
  }
}
</script>

<style>
</style>
