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
    async function async1 () {
      console.log('async1 start')
      await async2()
      console.log('async1 end')
    }
    async function async2 () {
      console.log('async2')
    }
    console.log('script start')
    setTimeout(function () {
      console.log('settimeout')
    })
    async1()
    new Promise(function (resolve) {
      console.log('promise1')
      resolve()
    }).then(function () {
      console.log('promise2')
    })
    console.log('script end')
  },
  methods: {
  }
}
</script>
<style lang="less">
.page-function-es6-async {
}
</style>
