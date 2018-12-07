<template>
<div class="page-function-dataType">
  <!-- 所有判断数据类型的方法 -->
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
    <h4>3.数值类型</h4>
    <p>1.对于.运算符需要给与特别注意，因为它是一个有效的数字字符，会被优先识别为数字常量的一部分，然后才是对象属性访问运算符</p>
    <pre class="code-content">
42.toFixed(3) // SyntaxError
(42).toFixed(3) // "42.000"
42..toFixed(3) // "42.000"
42 .toFixed(3)  // "42.000"
</pre>
    <!-- 判断一个值是否是整数 -->
    <p>2.判断一个值是否是整数：</p>
    <p><span>es6:</span></p>
    <pre class="code-content">
Number.isInteger(42.000) // true
</pre>
    <p><span>es5:</span></p>
    <pre class="code-content">
if (!Number.isInteger) {
  Number.isInteger = function (num) {
    return typeof num == "number" && num % 1 ==0
  }
}
</pre>
    <!-- NAN -->
    <p>3.NaN:唯一一个不等于自身的值</p>
    <pre class="code-content">
var a = 2 / "foo"  // NaN
typeof a === "number"  // true
</pre>
    <p>可以使用内建的全局工具函数isNaN()来判断一个值是否是NaN。有一个缺陷：检查参数是否不是NAN，也不是数字</p>
    <pre class="code-content">
var a = "foo"
window.isNaN(a) // true
</pre>
    <p><span>es6</span>解决方法：Number.isNaN()</p>
    <pre class="code-content">
if (!Number.isNaN) {
  Number.isNaN = function(n) {
    return(
      typeof n === 'number' && window.isNaN(n)
    )
  }
}
var b = "foo"
Number.isNaN(b) // false
</pre>
    <pre class="code-content" style="margin-top: 10px;">
Number.isNaN(Infinity / Infinity) // true
</pre>
    <!-- 0值 -->
    <p>4.0值</p>
    <p>对-0字符串化会返回0，如果反过来将其从字符串转换为数字，得到的结果是准确的</p>
    <pre class="code-content">
JSON.stringify(-0) // "0"
JSON.parse("-0") // -0
-0 == 0 // true
-0 === 0 // true
</pre>
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
