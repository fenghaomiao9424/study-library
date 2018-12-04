<template>
<div class="page-function-dataType">
  <h4>1.所有判断数据类型的方法</h4>
  <p>1.typeof(): 缺点是无法判断object， null， []类型的数据,因为typeof方法将二进制前两位为00的值都返回object类型，null的前三位都为000</p>
  <pre class="code-content">
typeof(true) //"boolean"
typeof(123) //"number"
typeof('ddd') //"string"
typeof(null) //"object"
typeof(undefined) //"undefined"
typeof({}) //"object"
typeof([]) //"object"
typeof Symbol() //"symbol"
typeof function a() {} //"function"
typeof typeof 42 //"string"
</pre>
    <p>2.Object.prototype.toString.call():准确判断数据类型的方法</p>
    <pre class="code-content">
Object.prototype.toString.call(true) //"[object Boolean]"
Object.prototype.toString.call(123) //"[object Number]"
Object.prototype.toString.call('ddd') //"[object String]"
Object.prototype.toString.call(null) //"[object Null]"
Object.prototype.toString.call(undefined) //"[object Undefined]"
Object.prototype.toString.call({}) //"[object Object]"
Object.prototype.toString.call([]) //"[object Array]"
</pre>
    <p>3.Array.isArray():只有穿入值为数组时才返回true</p>
    <p>4.instanceof: instanceof运算符需要制定一个构造函数，或者说指定一个特定的类型，用它来判断这个构造函数的原型是否在给定对象的原型链上</p>
    <p>5.construcror: construcror是<span>prototype对象上</span>的属性，指向构造函数。根据实例对象寻找属性的顺序，若实例对象上没有实例属性或方法时，就去原型链上寻找，因此，实例对象也是能使用constructor属性的。</p>
    <h4>2.数据类型注意点</h4>
    <p>1.null是基本类型中<span>唯一</span>的一个“假值”</p>
</div>
</template>
<script>
export default {
  name: 'page-function-dataType',
  data () {
    return {
    }
  },
  mounted () {
  }
}
</script>
