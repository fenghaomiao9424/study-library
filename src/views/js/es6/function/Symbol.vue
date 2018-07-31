<template>
  <div class="page-function-es6-symbol">
    <h4>1.概述</h4>
    <p>1.ES6 引入了一种新的原始数据类型Symbol，表示独一无二的值</p>
    <p>2.Symbol值通过Symbol函数生成,通过typeOf可查看到Symbol数据类型</p>
    <p>3.Symbol函数前不能使用new命令</p>
    <p>4.如果 Symbol 的参数是一个对象，就会调用该对象的toString方法，将其转为字符串，然后才生成一个 Symbol 值</p>
    <p>5.Symbol函数的参数只是表示对当前 Symbol 值的描述，因此相同参数的Symbol函数的返回值是不相等的</p>
    <pre class="code-content">
let s1 = Symbol('a')
let s2 = Symbol('a')
console.log(s1 === s2)
<span class="result">false</span></pre>
    <p>6.Symbol 值不能与其他类型的值进行运算，会报错</p>
    <p>7.Symbol 值可以显示的转换为字符串或布尔值，但不能转为数值</p>
    <pre class="code-content">
let sym = Symbol('asss')
console.log(sym.toString())
<span class="result">'Symbol('asss')'</span>
console.log(Boolean(sym))
<span class="result">true</span>
console.log(Number(sym))
<span class="result">// TypeError</span></pre>
<!-- 作为属性名的Symbol -->
    <h4>2.作为属性名的Symbol</h4>
    <p>1.Symbol作为属性名时不能用点运算符</p>
    <p>2.在对象的内部，使用 Symbol 值定义属性时，Symbol 值必须放在方括号之中</p>
    <!-- 属性名的遍历 -->
    <h4>3.属性名的遍历</h4>
    <p>1.Symbol 作为属性名，该属性不会出现在for...in、for...of循环中，也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回</p>
    <p>2.Object.getOwnPropertySymbols方法，可以获取指定对象的所有 Symbol 属性名</p>
    <p>3.Object.getOwnPropertySymbols方法返回一个数组，成员是当前对象的所有用作属性名的 Symbol 值</p>
    <p>4.Reflect.ownKeys方法可以返回所有类型的键名，包括常规键名和 Symbol 键名</p>
    <pre class="code-content">
let obj = {
  [Symbol('sym')]: 1,
  a: 2,
  b: 3
}
console.log(Object.getOwnPropertyNames(obj))
<span class="result">["a", "b"]</span>
console.log(Object.getOwnPropertySymbols(obj))
<span class="result">[Symbol(sym)]</span>
console.log(Reflect.ownKeys(obj))
<span class="result">["a", "b", Symbol(sym)]</span></pre>
<!-- Symbol.for(),Symbol.keyFor() -->
    <h4>4.Symbol.for(),Symbol.keyFor()</h4>
    <pre class="code-content">
Symbol('a') === Symbol('a')
<span class="result">false</span>
Symbol.for('a') === Symbol.for('a')
<span class="result">true</span></pre>
    <p>1.Symbol.keyFor方法返回一个已登记的 Symbol 类型值的key</p>
    <pre class="code-content">
let sym1 = Symbol('a')
console.log(Symbol.keyFor(sym1))
<span class="result">undefined</span>
let sym2 = Symbol.for('a')
console.log(Symbol.keyFor(sym1))
<span class="result">a</span></pre>
  </div>
</template>
<script>
export default {
  name: 'page-function-es6-symbol',
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
</style>
