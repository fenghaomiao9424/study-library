<template>
  <div class="page-functionArr">
    <h4>1.数组浅拷贝</h4>
    <p>1.sclice方法或concat</p>
    <pre class="code-content">
let arr1 = [1, 2, 3]
let arr2 = arr1.slice(0) 或 let arr2 = arr1.concat([])
arr2[0] = 5
console.log(arr1, arr2)
<span class="result">// [1, 2, 3], [5, 2, 3]</span>
</pre>
    <p>2.运算符‘...’</p>
    <pre class="code-content">
let arr1 = [1, 2, 3]
let arr2 = [...arr1]
arr2[0] = 5
console.log(arr1, arr2)
<span class="result">// [1, 2, 3], [5, 2, 3]</span>
</pre>
    <h4>2.数组深拷贝</h4>
    <p>函数递归</p>
    <pre class="code-content">
function deepCopy(arr) {
  let arrCopy = Array.isArray(arr) ? [] : {}
  for (let i in arr) {
    (typeof (arr[i]) === 'object') ? arrCopy[i] = this.deepCopy(arr[i]) : arrCopy[i] = arr[i]
  }
  return arrCopy
}
</pre>
    <p>JSON方法(缺点：无法转换function)</p>
    <pre class="code-content">
let arr1 = [1, 2, 3, [4, 5]]
let arr2 = JSON.parse(JSON.stringify(arr1))
arr2[0] = 5
console.log(arr1, arr2)
<span class="result">// [1, 2, 3, Array(2)], [5, 2, 3, Array(2)]</span></pre>
    <p>JSON方法转换function</p>
    <pre class="code-content">
let arr1 = [1, 2, function() {}, [4, 5]]
let arr2 = JSON.parse(JSON.stringify(arr1))
arr2[0] = 5
console.log(arr1, arr2)
<span class="result">//[1, 2, ƒ, Array(2)], [5, 2, null, Array(2)]</span>
</pre>
    <h4>3.注意事项</h4>
    <p>1.使用delete运算符可以将单元从数组中删除，但是请注意，单元删除后，数组的length属性并不会发生变化</p>
  </div>
</template>
<script>
export default {
  name: 'page-functionArr',
  data () {
    return {
    }
  },
  mounted () {
    let arr = {'d': 2, 'c': {'f': 8}}
    console.log(this.deepCopy(arr))
  },
  methods: {
    deepCopy (arr) {
      let arrCopy = Array.isArray(arr) ? [] : {}
      for (let i in arr) {
        (typeof (arr[i]) === 'object') ? arrCopy[i] = this.deepCopy(arr[i]) : arrCopy[i] = arr[i]
      }
      return arrCopy
    }
  }
}
</script>
<style lang="less">
.page-functionArr {
}
</style>
