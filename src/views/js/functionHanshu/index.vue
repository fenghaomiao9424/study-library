<template>
  <div class="page-functionHanshu">
    <!-- 循环输出问题 -->
    <h4>1.解决循环输出问题</h4>
    <p>期望结果：每隔一秒输出，最终输出1~9</p>
    <pre class="code-content">
for (var i = 1; i 小于 10; i++) {
    setTimeout(() => {
        console.log(i)
    }, 1000 * i)
}
//每隔一秒输出一个10，共输出10次
</pre>
    <p>解决方法：</p>
    <pre class="code-content">
for (let i = 1; i 小于 10; i++) {
    setTimeout(() => {
        console.log(i)
    }, 1000 * i)
}
</pre>
    <pre class="code-content" style="margin-top: 10px;">
for (var i = 1; i 小于 10; i++) {
  ((j) => {
    setTimeout(() => {
      console.log(j)
    }, 1000 * j)
  })(i)
}
</pre>
    <!-- this -->
    <h4>2.this</h4>
    <p>1.优先级：new绑定=显示绑定>隐式绑定>默认绑定</p>
    <p>2.间接引用：</p>
    <pre class="code-content">
function foo(){
    console.log(this.a)
}
var a = 2
var o = { a: 3, foo: foo }
var p = { a: 4 }
o.foo() // 3
(p.foo = o.foo)() //2 其实就是foo() 此时this默认绑定到window
</pre>
    <pre class="code-content" style="margin-top: 10px;">
function foo(){
    console.log(this.a)
}
var a = 2
var o = { a: 3, foo: foo }
var p = { a: 4 }
o.foo() // 3
p.foo = o.foo
p.foo() //4
</pre>
    <p>3.箭头函数不使用 this 的四种标准规则，而是根据外层(函数或者全局)作用域来决定 this。</p>
    <!-- constructor -->
    <h4>3.constructor</h4>
    <pre class="code-content">
function F () {
    console.log(123)
}
let f = new F()
console.log(f.constructor === F) // true
由于F === F.prototype.constructor
console.log(f.constructor === F.prototype.constructor) // true
</pre>
    <p>如果你创建了一个新对象并替换了函数默认的.prtotype对象引用，那么新对象并不会自动获得.constructor属性，如以下代码：</p>
    <pre class="code-content">
function Foo () {
    console.log(123)
}
Foo.prototype = {}
var a1 = new Foo()
a1.constructor === Foo // false
a1.constructor === Object //true
</pre>
    <!-- length -->
    <h4>4.length</h4>
    <pre class="code-content">
function Foo (a, b) {
}
Foo.length // 2
</pre>
    <!-- 原生函数 -->
    <h4>5.原生函数</h4>
    <p>1.常用的原生函数有：String(),Number(),Boolean(),Array(),Object(),Function(),RegExp(),Date(),Error(),Symbol()</p>
    <p>2.通过构造函数(如new String("abc"))创建出来的是封装了基本类型值(如"abc")的<span>封装对象</span></p>
    <pre class="code-content">
var a = new String("abc")
typeof a // 是"object" 不是 "String"
a instanceof String // true
Object.prototype.toString.call(a) // "[object String]"
console.log(a)  // String {0: "a", 1: "b", 2: "c", length: 3, [[PrimitiveValue]]: "abc"}
var str = ""
typeof str // "string"
str instanceof String //false
</pre>
    <p>3.如果想要得到封装对象中的基本类型值，可以使用valueof()函数：</p>
    <pre class="code-content">
var a = new String("abc")
a.valueOf() // "abc"
</pre>
    <p>4.Array构造函数只带一个数字参数的时候，该参数会被作为数组的预设长度，而不是数组中的元素</p>
    <pre class="code-content">
var a = new Array(1,2,3)
a // [1,2,3]
</pre>
    <p>5.数组的map会跳过空位，但会保留空位，filter,forEach,every,some函数会跳过空位，join和toString会将空位视为undefined,而undefined和null会被处理成空字符串</p>
  </div>
</template>
<script>
export default {
  name: 'page-function-Hanshu',
  data () {
    return {
    }
  },
  mounted () {
    this.test()
  },
  methods: {
    test () {
    }
  }
}
</script>
