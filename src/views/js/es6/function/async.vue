<template>
    <div class="page-function-es6-async">
      <h4>1.注意点</h4>
      <p>1.async返回promise对象，await后边跟promise对象</p>
      <p>2.同时触发两个异步操作</p>
      <pre class="code-content">
let [foo, bar] = await Promise.all([getFoo(), getBar()]);
</pre>
      <p>3.await只能用在async函数中</p>
    </div>
</template>
<script>
export default {
  name: 'page-function-es6-async',
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style lang="less">
.page-function-es6-async {
}
</style>
