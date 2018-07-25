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
