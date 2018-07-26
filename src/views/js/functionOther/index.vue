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
