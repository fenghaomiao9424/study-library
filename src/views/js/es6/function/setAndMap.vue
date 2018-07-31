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
      <p>add(value)：添加某个值，返回 Set 结构本身</p>
      <p>delete(value)：删除某个值，返回一个布尔值，表示删除是否成功</p>
      <p>has(value)：返回一个布尔值，表示该值是否为Set的成员</p>
      <p>clear()：清除所有成员，没有返回值</p>
      <pre class="code-content">
const s = new Set()
s.add(1).add(2).add(2)
console.log(s.size)
<span class="result">// 2</span>
console.log(s.has(3))
<span class="result">// false</span></pre>
      <p>6.遍历方法：</p>
      <p>keys(): 返回键名的遍历器</p>
      <p>values(): 返回键值的遍历器</p>
      <p>entries(): 返回键值对的遍历器</p>
      <p>forEach()：使用回调函数遍历每个成员</p>
      <pre class="code-content">
const s = new Set([1, 2, 3])
for (let i of s.keys()) {
  console.log(i)
}
<span class="result">1</span>
<span class="result">2</span>
<span class="result">3</span>
</pre>
    <h4>2.WeakSet</h4>
      <p>1.WeakSet 结构与 Set 类似，也是不重复的值的集合</p>
      <p>2.WeakSet 的成员只能是对象，而不能是其他类型的值</p>
      <p>3.WeakSet 可接受数组作为参数，但数组的成员必须是对象或数组</p>
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
      const s = new Set([1, 2, 3])
      for (let i of s.keys()) {
        console.log(i)
      }
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
