<template>
  <div class="page-function-functionOther">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'page-function-functionOther',
  data () {
    return {
    }
  },
  mounted () {
    let nav = [{
      index: '/js/functionOther/lazyLayout',
      title: '图片懒加载',
      key: 1
    }, {
      index: '/js/functionOther/eventTaggle',
      title: '事件委托',
      key: 2
    }, {
      index: '/js/functionOther/dataObserver',
      title: '双向数据绑定',
      key: 3
    }, {
      index: '/js/functionOther/dataType',
      title: '数据类型',
      key: 4
    }, {
      index: '/js/functionOther/grammar',
      title: '语法',
      key: 5
    }, {
      index: '/js/functionOther/orderAlgorithm',
      title: '算法',
      key: 6
    }, {
      index: '/js/functionOther/asyncHronous',
      title: '异步',
      key: 7
    }, {
      index: '/js/functionOther/throAnddeb',
      title: '防抖与节流',
      key: 8
    }]
    this.$store.commit('setNavlist', nav)
  },
  methods: {
  }
}
</script>
<style lang="less">
</style>
