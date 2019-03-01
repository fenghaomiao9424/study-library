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
    <h4>6.闭包</h4>
    <p>1.闭包是指有权限访问另外一个函数作用域中的变量的函数</p>
    <p>2.创建闭包的常见方式，就是在一个函数内部创建另一个函数</p>
    <p>3.用作块级作用域的匿名函数的语法如下：</p>
    <pre class="code-content">
(function() {
    // 这里是块级作用域
})()
</pre>
    <h4>7.特权方法</h4>
    <p>1.有权访问私有变量和私有函数的共有方法称为特权方法</p>
    <p>2.有两种在对象上创建特权方法的方式，构造函数中定义特权方法和静态私有变量</p>
    <pre class="code-content">
//构造函数法
function Person(name) {
    <!-- 特权方法 -->
    this.getName = function() {
        return name
    }
    <!-- 特权方法 -->
    this.setName = function(value) {
        name = value
    }
}
var person = new Person('Ni')
person.getName() // 'Ni'
</pre>
    <p><strong>构造函数模式的缺点是针对每个实例都会创建同样一组新方法</strong></p>
    <p>初始化未经声明的变量，会创建一个全局变量。在严格模式下给未经声明的变量赋值会导致错误</p>
    <pre class="code-content">
//静态私有变量
(function() {
    var name = "";
    Person = function(value) {
        name = value
    }
    Person.prototype.getName = function() {
        return name
    }
    Person.prototype.setName = function(value){
        name = value
    }
})()
var person1 = new Person('Ni')
person1.getName() // "Ni"
Person.setName('Ge')
Person1.getName() // 'Ge'

var person2 = new Person('Mi')
person1.getName() 'Mi'
person2.getName() 'Mi'
</pre>
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
      var i = 0
      console.log(i)
    }
  }
}
</script>
