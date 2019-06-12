<template>
  <div class="page-function-asyncHronous">
    <!-- 事件循环 -->
    <h4>1.一道面试题</h4>
    <pre class="code-content">
async function async1() {
   console.log('async1 start')
   await async2()
   console.log('async1 end')
}
async function async2() {
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

执行结果：
script start
async1 start
async2
promise1
script end
async1 end
promise2
settimeout
</pre>
    <p>注意点:await 关键字要在 async 关键字函数的内部，await 写在外面会报错；await如同他的语意，就是在等待，等待右侧的表达式完成。此时的await会让出线程，阻塞async内后续的代码，先去执行async外的代码。等外面的同步代码执行完毕，才会执行里面的后续代码。就算await的不是promise对象，是一个同步函数，也会等这样操作</p>
  </div>
</template>
<script>
export default {
  name: 'page-function-asyncHronous',
  data () {
    return {
    }
  },
  mounted () {
  }
}
</script>
