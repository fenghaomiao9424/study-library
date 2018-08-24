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
    let nav = [{
      index: '/js/es6/esFunctionStr',
      title: '字符串扩展',
      key: 1
    },
    {
      index: '/js/es6/esFunctionObj',
      title: '对象扩展',
      key: 2
    },
    {
      index: '/js/es6/esFunctionArr',
      title: '数组扩展',
      key: 3
    },
    {
      index: '/js/es6/esFunctionSymbol',
      title: 'Symbol',
      key: 4
    },
    {
      index: '/js/es6/esFunctionSetAndMap',
      title: 'Set和Map数据结构',
      key: 5
    },
    {
      index: '/js/es6/esFunctionReflect',
      title: 'Reflect',
      key: 6
    },
    {
      index: '/js/es6/esFunctionPromise',
      title: 'Promise',
      key: 7
    },
    {
      index: '/js/es6/esFunctionGenerator',
      title: 'Generator函数',
      key: 8
    },
    {
      index: '/js/es6/esFunctionAsync',
      title: 'async',
      key: 9
    },
    {
      index: '/js/es6/esFunctionClass',
      title: 'Class',
      key: 10
    }]
    this.$store.commit('setNavlist', nav)
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
</style>
