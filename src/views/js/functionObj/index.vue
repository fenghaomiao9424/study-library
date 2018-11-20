<template>
  <div class="page-functionObj">
      <h4>1.判断数据类型</h4>
      <pre class="code-content">
let obj = {}
Object.prototype.toString.call(obj) 或 Reflect.apply(Object.prototype.toString, obj, [])
<span class="result">// [object Object]</span>
</pre>
      <h4>2.对象方法</h4>
      <pre class="code-content">
let myObj = {}
Object.defineProperty(myObj, 'a', {
  enumerable: true,
  value: 1
})
Object.defineProperty(myObj, 'b', {
  enumerable: false,
  value: 1
})
console.log('a' in myObj) // true
console.log('b' in myObj) // true
console.log(myObj.hasOwnProperty('a')) // true
console.log(myObj.hasOwnProperty('b')) // true
console.log(Object.keys(myObj)) // ['a']
console.log(Object.getOwnPropertyNames(myObj)) // ['a', 'b']
</pre>
      <p>使用 for..in 遍历对象时原理和查找 [[Prototype]] 链类似，任何可以通过原型链访问到 (并且是 enumerable)的属性都会被枚举。使用 in 操作符来检查属性在对象
中是否存在时，同样会查找对象的整条原型链(无论属性是否可枚举)</p>
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
    this.getObj()
  },
  methods: {
    getObj () {
    }
  }
}
</script>
