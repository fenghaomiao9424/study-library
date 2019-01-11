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
    <h4>4.数组方法</h4>
    <p>1.sort()方法会调用每个数组项的toString()转型方法，然后比较得到的字符串，以确定如何排序</p>
    <pre class="code-content">
var values = [0,1,5,10,15]
values.sort()
console.log(values)  // 0,1,10,15,5
</pre>
    <p>2.concat() 连接两个或更多的数组，并返回结果</p>
    <p>3.join() 把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔</p>
    <p>4.pop() 删除并返回数组的最后一个元素</p>
    <p>5.push() 向数组的末尾添加一个或更多元素，并返回新的长度</p>
    <p>6.reverse() 颠倒数组中元素的顺序</p>
    <p>7.shift() 删除并返回数组的第一个元素</p>
    <p>8.slice() 从某个已有的数组返回选定的元素</p>
    <p>9.sort() 对数组的元素进行排序</p>
    <p>10.splice() 删除元素，并向数组添加新元素</p>
    <p>11.unshift() 向数组的开头添加一个或更多元素，并返回新的长度</p>
    <p>12.valueOf() 返回数组对象的原始值</p>
    <p>13.every() 对数组中的每一项运行给定函数，如果该函数对每一项都返回true，则返回true</p>
    <p>14.filter() 对数组中的每一项运行给定函数，返回该函数会返回true的项目组成的数组</p>
    <p>15.forEach() 对数组中的每一项运行给定函数。<span>这个方法没有返回值</span></p>
    <p>16.map() 对数组中的每一项运行给定函数，返回每次调用的结果组成的数组</p>
    <p>17.some() 对数组中的每一项运行给定函数，如果该函数对任一项返回true,则返回true</p>
    <p>18.reduce()和reduceRight() 都会迭代数组的所有项，然后构建一个最终返回的值</p>
  </div>
</template>
<script>
export default {
  name: 'page-functionArr',
  data () {
    return {}
  },
  mounted () {},
  methods: {}
}
</script>
<style lang="less">
</style>
