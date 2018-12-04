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
    }]
    this.$store.commit('setNavlist', nav)
  },
  methods: {
  }
}
</script>
<style lang="less">
.page-function-functionOther {
}
</style>
