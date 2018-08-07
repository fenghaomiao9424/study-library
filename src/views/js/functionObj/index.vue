<template>
  <div class="page-functionObj">
      <h4>1.判断数据类型</h4>
      <pre class="code-content">
let obj = {}
Object.prototype.toString.call(obj) 或 Reflect.apply(Object.prototype.toString, obj, [])
<span class="result">// [object Object]</span>
</pre>
  </div>
</template>
<script>
export default {
  name: 'page-functionObj',
  data () {
    return {
    }
  },
  mounted () {
    let obj = {}
    console.log(Reflect.apply(Object.prototype.toString, obj, []))
  },
  methods: {
  }
}
</script>
<style lang="less">
.page-functionObj {
}
</style>
