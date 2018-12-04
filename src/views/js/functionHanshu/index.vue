<template>
  <div class="page-functionHanshu">
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
    <h4>4.length</h4>
    <pre class="code-content">
function Foo (a, b) {
}
Foo.length // 2
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
    }
  }
}
</script>
