<template>
  <div class="page-function-es6">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'page-function-es6',
  data () {
    return {
    }
  },
  mounted () {
    this.getRariom()
  },
  methods: {
    // 获取随机数
    getRariom () {
      let radiomStr = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
      let str = ''
      str = Array.from({length: 32}, () => radiomStr.charAt(Math.floor(Math.random() * 62))).join('')
      console.log(str, str.length)
    }
  }
}
</script>
<style lang="less">
.page-function-es6 {
}
</style>
