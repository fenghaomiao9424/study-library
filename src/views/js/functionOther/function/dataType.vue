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
    <!-- 数据类型转换 -->
    <h4>4.数据类型转换</h4>
    <p>1.JSON,stringify()</p>
    <p>JSON.stringify(...)在对象中遇到undefined,function,symbol时会自动将其忽略，在数组中则会返回null（以保证单元位置不变）</p>
    <p>可以向JSON.stringify()传递一个可选参数replacer,它可以是数组或者函数，用来指定对象序列化过程中哪些属性应该被处理，哪些应该被排除</p>
    <pre class="code-content">
var a = {
    b: 42,
    c: "42",
    d: [1,2,3]
}
JSON.stringify(a, function(k, v) {
    if (k !== 'c') return v
})
// "{"b": 42, "d": [1,2,3]}"
</pre>
    <p>2.Number()</p>
    <pre class="code-content">
Number(true) // 1
Number(false) // 0
Number(undefined) // NaN
Number(null) // 0
</pre>
    <p>3.Boolean()</p>
    <p>以下为假值：<span>undefined, null, false, +0, -0, NaN, ""。</span>其余都为真值</p>
    <p>假值对象都为真：Boolean(new Boolean(false))为真</p>
    <pre class="code-content">
Boolean("''") // true
Boolean("") // false
</pre>
    <p>隐式强制类型转换为布尔值：（1）if()语句中的条件判断语句（2）for()语句中的条件判断表达式（3）while()和do...while()循环中的条件判断表达式（4）？：（5）|| &&左边的操作数</p>
    <p>4.日期显示转换为数字</p>
    <p>获取当前时间戳</p>
    <pre class="code-content">
var timestamp = +new Date() 或
var timestamp = new Date().getTime() 或
var timestamp = Date.now()
</pre>
    <p>5. +运算符</p>
    <p>如果+的其中一个操作数是字符串，则执行字符串拼接，否则执行数字加法</p>
    <pre class="code-content">
[] + {} // "[object Object]"
{} + [] // 0
</pre>
    <p>第一行代码中，{}出现在+运算符表达式中，因此它被当作一个值（空对象）来处理。所以[]会被强制类型转换为"",而{}会被强制类型转换为"[object Object]"</p>
    <p>第二行代码中，{}被当作一个独立的<span>空代码块(不执行任何操作)</span>。代码结尾不需要分号，所以这里不存在语法上的问题。最后+[]将[]显示强制类型转换为0。</p>
    <p>6. -运算符</p>
    <p>-是数字减法运算符，所以a-0会将a强制类型转换为数字</p>
    <p>在将一元减操作符应用于数值时，该值会变成负数。而当应用于非数值时，一元减操作符遵循与一元加操作符相同的规则，最后再将得到的数值转换为负数。</p>
    <pre class="code-content">
var s1 = '01'
var s2 = '1.1'
var s3 = 'z'
var b = false
var f = 1.1
var o = {
    valueOf: function() {
        return -1
    }
}
s1 = -s1  // -1
s2 = -s2  // -1.1
s3 = -s3  // NaN
b = -b  // 0
f = -f  // -1.1
o = -o  // 1
</pre>
    <p>7.==</p>
    <p><strong>字符串和数字之间的相等比较，会将字符串转为数字</strong></p>
    <p><strong>其它类型和布尔类型之间的相等比较，会将布尔值转为数字</strong></p>
    <p><strong>null和undefined与自己==和互相==，与其它值都不==</strong></p>
    <p><strong>字符串或数字与对象之间的比较，会将对象处理为ToPrimitive()</strong></p>
    <p><strong>null和undefined不能被封装成包装类型，也不能转换成其它任何值</strong></p>
    <pre class="code-content">
var a = null
var b = Object(a)
a == b  // false
</pre>
    <p><span>定义一个变量a，使a == 1 && a == 2 && a == 3</span></p>
    <pre class="code-content">
var i = 1;
Number.prototype.valueOf = function() {
    return i++;
}
var a = new Number();
a == 1 && a == 2 && a == 3
</pre>
    <p>假值的相等比较</p>
    <pre class="code-content">
"0" == null  // false
"0" == undefined // false
"0" == false // true
"0" == NaN // false
"0" == 0 // true
"0" == "" // false
false == null // false
false == undefined // false
false == NaN // false
false == 0 // true
false == "" // true
false == [] // true
false == {} // false
"" == null // false
"" == undefined // false
"" == NaN // false
"" == 0 // true
"" == [] // true
"" == {} //false
0 == null // false
0 == undefined // false
0 == NaN // false
0 == [] // true
0 == {} // false
</pre>
    <p><span>[] == ![] // true</span>的转换过程：![]会进行布尔值的显示强制类型转换，所以[] == ![]变成了[] == false,因为false == [] 为true,所以结果就顺里成章了</p>
    <p>数组调用toString时将null和undefined转为空字符串，所以<span>"" == [null] // true</span></p>
    <p>因为数组的valueOf()返回数组本身，所以强制类型换换过程中会进行字符串化</p>
    <p><span>0 == "\n" // true</span></p>
    <p>8.抽象关系比较</p>
    <p>比较双方首先调用ToPrimitive，如果结果出现非字符串，就根据ToNumber规则将双方强制类型转换为数字来进行比较，如果比较双方都是字符串，则按字母顺序来进行比较</p>
    <pre class="code-content">
var a = [42]
var b = ['43']
a 小于 b  // true
var a = ['42']
var b = ['043']
a 小于 b  // false
</pre>
    <p>9.比较运算符</p>
    <p>任何操作数与NaN关系比较，结果都是false</p>
    <pre class="code-content">
NaN 小于 3  // false
NaN 大于 3  // false
</pre>
    <!-- 数值转换 -->
    <h4>5.数值转换</h4>
    <p>有三个函数可以把非数值转换为数值：Number(),parseInt()，parseFloat()</p>
    <p>parseInt()函数可以为这个函数提供第二个参数:转换时使用的基数（即多少进制）</p>
    <pre class="code-content">
Number('') // 0
parseInt('') // NaN
</pre>
    <!-- 字符串转换 -->
    <h4>6.字符串转换</h4>
    <p>数值，布尔值，对象和字符串值都有toString()方法，但null和undefined值没有这个方法</p>
    <p>toString()方法可以接收一个参数：输出数值的基数，默认是十进制</p>
    <pre class="code-content">
var num = 10
num.toString(2) // '1010'
</pre>
    <p>String()函数能够将任何类型的值转换为字符串</p>
    <p>要把某个值转换为字符串，可以使用加号操作符把它与一个字符串加在一起</p>
    <h4>7.RegExp类型</h4>
    <p>g: 表示全局模式，即模式将被应用于所有字符串</p>
    <p>i: 表示不区分大小写模式</p>
    <p>m: 表示多行模式，即在到达一行文本末尾时还会继续查找下一行中是否存在与模式匹配的项</p>
    <p>正则表达式中的元字符包括：<span>( [ { \ ^ $ | } ? * + . ] )</span></p>
    <p>创建正则表达式的方式：字面量形式和RegExp构造函数</p>
    <pre class="code-content">
var reg = /[bc]at/i  等同于
var reg = new RegExp("[bc]at", "i")
</pre>
    <p>RegExp实例属性：1.global 布尔值，表示是否设置了g标志。2.ignoreCase 布尔值，表示是否设置了i标志。3.lastIndex 整数，表示开始搜索下一个匹配项的字符位置。4.multiline 布尔值，表示是否设置了m标志。5.source 正则表达式的字符串表示，按照字面量形式而非传入构造函数中的字符串模式返回</p>
    <!-- Numaber类型 -->
    <h4>8.Number类型</h4>
    <p>toString()方法可以传递一个表示基数的参数，表示返回几进制数值的字符串形式</p>
    <!-- String类型 -->
    <h4>9.String类型</h4>
    <p>charAt()方法返回给定位置的字符</p>
    <p>charCodeAt()返回字符编码</p>
    <p>concat()方法用于将<span>一或多个</span>字符串拼接起来，返回拼接得到的新字符串.不会修改原字符串</p>
    <p>slice(）和substring()的第二个参数指定的是子字符串最后一个字符后面的位置</p>
    <p>substr()的第二个参数指定的是返回的字符个数</p>
    <p>slice(),substr(),substring()不会修改字符串本身的值</p>
    <p>slice()会将传入的负值与字符串的长度相加</p>
    <p>substr()将负的第一个参数加上字符串的长度，将负的第二个参数转换为0</p>
    <p>substring()把所有负值参数都转换为0</p>
    <p>match()方法只接受一个参数，要么是一个正则表达式，要么是一个RegExp对象</p>
    <p>search()方法返回字符串中第一个匹配项的索引</p>
    <p>replace()第一个参数可以是一个RegExp对象或者一个字符串，第二个参数可以是一个字符串或者一个函数</p>
    <p>split()方法可以接受第二个参数，用于指定数组的大小</p>
    <p>localCompare()比较两个字符串在字母表中的大小</p>
    <p>fromCharCode()接受一或多个字符编码，然后将它们转换成一个字符串</p>
    <h4>10.实现一个new</h4>
    <pre class="code-content">
function _new(fn, ...args) {
    const obj = {}
    object.setPrototypeOf(obj, fn.prototype)
    const result = fn.apply(obj, args)
    return obj instanceof Object ? result : obj
}
</pre>
</div>
</template>
<script>
export default {
  name: 'page-function-dataType',
  data () {
    return {}
  },
  mounted () {}
}
</script>
