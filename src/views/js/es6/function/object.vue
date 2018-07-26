<template>
  <div class="page-function-es6-obj">
    <!-- Object.is() -->
    <h4>1.Object.is()</h4>
    <p>1.Object.is方法用来比较两个值是否严格相等</p>
    <p>2.Object.is方法与严格相等运算符区别有两个：+0不等于-0，NAN等于自身</p>
    <pre class="code-content">
+0 === -0
<span class="result">true</span>
NAN === NAN
<span class="result">false</span>
Object.is(+0, -0)
<span class="result">false</span>
Object.is(NAN, NAN)
<span class="result">true</span></pre>
    <!-- Object.assign() -->
    <h4>2.Object.assign()</h4>
    <p>1.该方法用于对象的合并</p>
    <p>2.如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性</p>
    <p>3.如果只有一个参数，Object.assign会直接返回该参数</p>
    <p>4.如果该参数不是对象，则会先转成对象，然后返回.由于undefined和null无法转成对象，所以如果它们作为参数，就会报错,但是如果undefined和null不是出现在首字母就不会报错，会直接跳过</p>
    <p>5.Object.assign拷贝的属性是有限制的，只拷贝源对象的自身属性（不拷贝继承属性），也不拷贝不可枚举的属性（enumerable: false）</p>
    <p>6.属性名为 Symbol 值的属性，也会被Object.assign拷贝</p>
    <p>7.Object.assign()方法实行的是浅拷贝</p>
    <p>8.对于嵌套的对象，一旦遇到同名属性，Object.assign的处理方法是替换，而不是添加。</p>
    <pre class="code-content">
const obj1 = { a: { b: 1, c: 2} }
const obj2 = { a: { d: 1 } }
Object.assign(obj1, obj2)
<span class="result">{ a: { d: 1 } }</span></pre>
    <p>9.用来处理数组时会把数组视为对象。</p>
    <pre class="code-content">
Object.assign([1,2,3], [4,5])
<span class="result">[4,5,3]</span></pre>
    <!-- 属性的可枚举性和遍历 -->
    <h4>3.属性的可枚举性和遍历</h4>
    <p>1.Object.getOwnPropertyDescriptor方法可以获取对象中某属性的描述对象</p>
    <p>2.Object.getOwnPropertyDescriptors方法可以获取对象的所有描述对象（非继承性）</p>
    <pre class="code-content">
let obj = { abc: 123 }
Object.getOwnPropertyDescriptor(obj, 'abc')
<span class="result">{value: 123, writable: true, enumerable: true, configurable: true}</span></pre>
    <p>3.enumerable称为可枚举性，有四个操作会忽略enumerable为false的属性：for...in，Object.keys()，JSON.stringify()，Object.assign()。其中for...in会返回继承的属性，其它三个会忽略</p>
    <!-- Object.setPrototypeOf() -->
    <h4>4.Object.setPrototypeOf()</h4>
    <p>1.Object.setPrototypeOf方法的作用与__proto__相同，用来设置一个对象的prototype对象，返回参数对象本身</p>
    <pre class="code-content">
let obj = { x: 123 }
let proto = {}
Object.setPrototypeOf(obj, proto)
proto.y = 20
proto.z = 30
console.log(obj.y)
<span class="result">20</span></pre>
    <p>2.如果第一个参数不是对象，会自动转为对象。但是由于返回的还是第一个参数，所以这个操作不会产生任何效果</p>
    <p>3.null和undefined无法转为对象，所以作为第一个参数的话会报错</p>
    <!-- Object.getPrototypeOf() -->
    <h4>5.Object.getPrototypeOf()</h4>
    <p>1.用来获取一个对象的原型对象</p>
    <p>2.如果参数不是对象，会被转为对象</p>
    <pre class="code-content">
Object.getPrototypeOf(1) === Number.prototype
<span class="result">true</span></pre>
    <p>3.如果参数为null或undefined会报错</p>
    <h4>6.super关键字</h4>
    <p>1.super指向当前对象的原型对象</p>
    <p>2.super关键字表示原型对象时，只能用在对象的方法之中，用在其他地方都会报错</p>
    <!-- Object.keys(),Object.values(),Object.entries() -->
    <h4>7.Object.keys(),Object.values(),Object.entries()</h4>
    <p>1.Object.keys方法，返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键名</p>
    <p>2.Object.values方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值。</p>
    <p>3.属性名为数值的属性，是按照数值大小，从小到大遍历的</p>
    <p>4.都会过滤属性名为 Symbol 值的属性</p>
    <p>5.如果Object.values方法的参数是一个字符串，会返回各个字符组成的一个数组</p>
    <pre class="code-content">
let obj = {a: 1, b: 2, c: 3}
Object.keys(obj)
<span class="result">["a", "b", "c"]</span>
Object.values(obj)
<span class="result">[1, 2, 3]</span>
Object.entries(obj)
<span class="result">[['a', 1], ['b', 2], ['c', 3]]</span></pre>
<pre class="code-content margin-top-20">
let obj = {[Symbol()]: 1, b: 2}
Object.values(obj)
<span class="result">[2]</span></pre>
     <!-- 对象的扩展运算符 -->
    <h4>8.对象的扩展运算符</h4>
    <p>1.解构赋值要求等号右边是一个对象，所以如果等号右边是undefined或null，就会报错</p>
    <p>2.解构赋值的拷贝是浅拷贝，即如果一个键的值是复合类型的值（数组、对象、函数）、那么解构赋值拷贝的是这个值的引用，而不是这个值的副本</p>
    <p>3.扩展运算符的解构赋值，不能复制继承自原型对象的属性</p>
    <p>4.扩展运算符可以用来拷贝对象</p>
    <pre class="code-content">
let obj1 = {a: 1, b: 2}
let obj2 = {...obj1} 或 let obj2 = Object.assign({}, obj1)
console.log(obj2)
<span class="result">{a: 1, b: 2}</span></pre>
    <p>5.扩展运算符用来合并对象</p>
    <pre class="code-content">
{...a, ...b} 等同于 Object.assign({}, a, b)</pre>
    <p>6.如果用户自定义的属性，放在扩展运算符后面，则扩展运算符内部的同名属性会被覆盖掉</p>
    <p>7.与数组的扩展运算符一样，对象的扩展运算符后面可以跟表达式</p>
    <pre class="code-content">
const obj = {
  ...(x > 1 ? {a: 1} : {}),
  b: 2,
};</pre>
    <p>8.如果扩展运算符的参数是null或undefined，这两个值会被忽略，不会报错。</p>
  </div>
</template>
<script>
export default {
  name: 'page-function-es6-obj',
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
.page-function-es6-obj {
}
</style>
