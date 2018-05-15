<template>
  <div class="page-function-es6-arr">
    <h4>1.扩展运算符：...</h4>
    <p>ES5将类数组对象转为数组</p>
      <pre class="code-content">let islikeArr = { 0: '1', 1: '2', 2: '1', 3: '5', 'length': 4 }
console.log(Array.prototype.slice.call(islikeArr)) 或 console.log([].slice.call(islikeArr))
<span class="result">// ["1", "2", "1", "5"]</span></pre>
    <p>扩展运算符将类数组对象转为数组</p>
      <pre class="code-content">let islikeArr = { 0: '1', 1: '2', 2: '1', 3: '5', 'length': 4 }
console.log([...this.islikeArr])
<span class="result">// ["1", "2", "1", "5"]</span></pre>
    <p>合并数组</p>
      <pre class="code-content">let a = [1, 2]
let b = [2]
let c = [3, 4]
console.log([...a, ...b, ...c])
<span class="result">// [1, 2, 2, 3, 4]</span></pre>
    <h4>2.Array.from()</h4>
    <p>Array.from()将类数组对象转为数组</p>
      <pre class="code-content">let islikeArr = { 0: '1', 1: '2', 2: '1', 3: '5', 'length': 4 }
console.log(Array.from(islikeArr))
<span class="result">// ["1", "2", "1", "5"]</span></pre>
    <p>Array.form()方法小应用：生成一个32位随机字符串</p>
      <pre class="code-content">let radiomStr = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
let str = ''
str = Array.from({length: 32}, () => radiomStr.charAt(Math.floor(Math.random() * 62))).join('')
console.log(str, str.length)
<span class="result">// lc7ArI4v4r2QGg2wUxPWJx8IKGhxFPz4 32</span></pre>
  </div>
</template>
<script>
export default {
  name: 'page-function-es6-arr',
  data () {
    return {
      islikeArr: {
        0: '1',
        1: '2',
        2: '1',
        3: '5',
        'length': 4
      }
    }
  },
  mounted () {
    console.log([...this.islikeArr])
  },
  methods: {
  }
}
</script>
<style lang="less">
.page-function-es6-arr {
}
</style>
