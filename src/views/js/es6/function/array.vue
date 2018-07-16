<template>
  <div class="page-function-es6-arr">
    <h4>1.扩展运算符：...</h4>
    <p>ES5将类数组对象转为数组</p>
      <pre class="code-content">
let islikeArr = { 0: '1', 1: '2', 2: '1', 3: '5', 'length': 4 }
console.log(Array.prototype.slice.call(islikeArr)) 或 console.log([].slice.call(islikeArr))
<span class="result">// ["1", "2", "1", "5"]</span></pre>
    <p>扩展运算符将类数组对象转为数组</p>
      <pre class="code-content">
let islikeArr = document.querySelectorAll('div')
console.log([...islikeArr])
<span class="result">// [div, div]</span></pre>
    <p>ES5与扩展运算符实现数组浅拷贝</p>
      <pre class="code-content">
let arr1 = [1, 2, 3]
let arr2 = arr1.slice() 或 let arr2 = arr1.concat() 或 let arr2 =[...arr1]
arr2[1] = 5
console.log(arr1, arr2)
<span class="result">// [1, 2, 3][1, 5, 3]</span></pre>
    <p>合并数组</p>
      <pre class="code-content">
let a = [1, 2]
let b = [2]
let c = [3, 4]
console.log([...a, ...b, ...c])
<span class="result">// [1, 2, 2, 3, 4]</span></pre>
    <p>扩展运算符与解构赋值结合(如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错)</p>
      <pre class="code-content">
let [a, ...b] = [1, 2, 3, 4, 5]
console.log(a, b)
<span class="result">// 1 [2, 3, 4, 5]</span>
let [a, ...b] = []
console.log(a, b)
<span class="result">// undefined []</span>
let [a, ...b] = ['s']
console.log(a, b)
<span class="result">// s []</span></pre>
    <h4>2.Array.from()</h4>
    <p>Array.from()将类数组对象转为数组</p>
      <pre class="code-content">let islikeArr = { 0: '1', 1: '2', 2: '1', 3: '5', 'length': 4 }
console.log(Array.from(islikeArr))
<span class="result">// ["1", "2", "1", "5"]</span></pre>
    <p>Array.from()如果参数是一个数组，则返回一个一模一样的数组</p>
      <pre class="code-content">console.log(Array.from([1, 2, 3, 4, 5]))
<span class="result">// [1, 2, 3, 4, 5]</span></pre>
    <p>Array.form()方法小应用：生成一个32位随机字符串</p>
      <pre class="code-content">let randomStr = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
let str = ''
str = Array.from({length: 32}, () => randomStr.charAt(Math.floor(Math.random() * 62))).join('')
console.log(str, str.length)
<span class="result">// lc7ArI4v4r2QGg2wUxPWJx8IKGhxFPz4 32</span>
<span class="result">// 注意：</span>
console.log(Array.from({length: 3}))
<span class="result">// [undefined, undefined, undefined]</span>
</pre>
  </div>
</template>
<script>
export default {
  name: 'page-function-es6-arr',
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
.page-function-es6-arr {
}
</style>
