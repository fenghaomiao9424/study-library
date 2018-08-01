<template>
  <div class="page-function-es6-setAndMap">
    <!-- set -->
    <h4>1.Set</h4>
      <p>1.Set实现数组去重</p>
      <pre class="code-content">
[...new Set(Array)] 或 Array.from(new Set(array))</pre>
      <p>2.向Set加入值的时候不会发生类型转换</p>
      <p>3.在Set内部，两个NAN值是相等的，两个对象总是不相等的</p>
      <p>4.Set结构的属性：Set.prototype.constructor, Set.prototype.size</p>
      <p>5.Set实例的方法：</p>
      <p class="padding-left-30">add(value)：添加某个值，返回 Set 结构本身</p>
      <p class="padding-left-30">delete(value)：删除某个值，返回一个布尔值，表示删除是否成功</p>
      <p class="padding-left-30">has(value)：返回一个布尔值，表示该值是否为Set的成员</p>
      <p class="padding-left-30">clear()：清除所有成员，没有返回值</p>
      <pre class="code-content">
const s = new Set()
s.add(1).add(2).add(2)
console.log(s.size)
<span class="result">// 2</span>
console.log(s.has(3))
<span class="result">// false</span></pre>
      <p>6.遍历方法：</p>
      <p class="padding-left-30">keys(): 返回键名的遍历器</p>
      <p class="padding-left-30">values(): 返回键值的遍历器</p>
      <p class="padding-left-30">entries(): 返回键值对的遍历器</p>
      <p class="padding-left-30">forEach()：使用回调函数遍历每个成员</p>
      <pre class="code-content">
const s = new Set([1, 2, 3])
for (let i of s.keys()) {
  console.log(i)
}
<span class="result">1</span>
<span class="result">2</span>
<span class="result">3</span>
</pre>
    <!-- WeakSet -->
    <h4>2.WeakSet</h4>
      <p>1.WeakSet 结构与 Set 类似，也是不重复的值的集合</p>
      <p>2.WeakSet 的成员只能是对象，而不能是其他类型的值</p>
      <p>3.WeakSet 可接受数组作为参数，但数组的成员必须是对象或数组</p>
      <pre class="code-content">
new WeakSet([[1,2], [3,4]])
<span class="result">// WeakSet {[1,2], [3,4]}</span>
new WeakSet([1, 2])
<span class="result">// 报错  TypeError: Invalid value used in weak set</span>
</pre>
      <p>4.WeakSet的方法：</p>
      <p class="padding-left-30">WeakSet.prototype.add(value)：向 WeakSet 实例添加一个新成员</p>
      <p class="padding-left-30">WeakSet.prototype.delete(value)：清除 WeakSet 实例的指定成员</p>
      <p class="padding-left-30">WeakSet.prototype.has(value)：返回一个布尔值，表示某个值是否在 WeakSet 实例之中</p>
    <!-- Map -->
    <h4>3.Map</h4>
    <p>1.ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键</p>
    <pre class="code-content">
const m = new Map()
const obj = {1: 'aaa'}
m.set(obj, 'content')
m.get(obj)
</pre>
    <p>2.作为构造函数，Map 也可以接受一个数组作为参数。该数组的成员是一个个表示键值对的数组</p>
    <pre class="code-content">
const m = new Map([[1, 2], [3, 4]])
</pre>
    <p>3.如果对同一个键多次赋值，后面的值将覆盖前面的值</p>
    <p>4.如果读取一个未知的键，则返回undefined</p>
    <p>5.只要两个值严格相等，Map 将其视为一个键，比如0和-0就是一个键，布尔值true和字符串true则是两个不同的键。另外，undefined和null也是两个不同的键。虽然NaN不严格相等于自身，但 Map 将其视为同一个键</p>
    <p>6.实例的属性和操作方法：</p>
    <p class="padding-left-30">size属性：返回Map结构的成员总数</p>
    <p class="padding-left-30">set(key, value):set方法返回的是当前的Map对象，因此可以采用链式写法</p>
    <p class="padding-left-30">get(key):get方法读取key对应的键值，如果找不到key，返回undefined</p>
    <p class="padding-left-30">has(key):has方法返回一个布尔值，表示某个键是否在当前 Map 对象之中</p>
    <p class="padding-left-30">delete(key):delete方法删除某个键，返回true。如果删除失败，返回false</p>
    <p class="padding-left-30">clear():clear方法清除所有成员，没有返回值</p>
    <p>7.遍历方法：keys(), values(), entries(), forEach()</p>
    <p>8.Map结构转为数组：扩展运算符...</p>
    <pre class="code-content">
const m = new Map([[1, 2], [3, 4]])
[...m]
<span class="result">// [[1, 2], [3, 4]]</span>
</pre>
      <!-- WeakMap -->
      <h4>4.WeakMap</h4>
      <p>1.WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名</p>
      <p>2.WeakMap没有遍历操作，也没有size属性</p>
      <p>3.WeakMap只有四个方法可用：get()、set()、has()、delete()</p>
      <!-- <check v-model="searchText"></check> -->
      <!-- <button @click="submit">确认</button> -->
  </div>
</template>
<script>
import check from '@/components/baseCheckbox'
export default {
  name: 'page-function-es6-setAndMap',
  data () {
    return {
      searchText: ''
    }
  },
  mounted () {
    this.test()
  },
  methods: {
    test () {
      const m = new Map()
      const obj = {1: 'aaa'}
      m.set(obj, 'content')
    },
    submit () {
      console.log(this.searchText)
    }
  },
  components: {
    check
  }
}
</script>
<style lang="less">
</style>
