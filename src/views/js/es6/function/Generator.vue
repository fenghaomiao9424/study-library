<template>
  <div class="page-function-es6-Generator">
    <h4>1.概述</h4>
    <p>1.调用 Generator 函数，返回一个遍历器对象，代表 Generator 函数的内部指针</p>
    <p>2.每次调用遍历器对象的next方法，就会返回一个有着value和done两个属性的对象</p>
    <p>3.value属性表示当前的内部状态的值，是yield表达式后面那个表达式的值；done属性是一个布尔值，表示是否遍历结束</p>
    <p>4.function关键字与函数名之间有一个星号。函数体内部使用yield表达式，定义不同的内部状态（yield在英语里的意思就是“产出”）</p>
    <pre class="code-content">
function* helloWorld () {
    yield 'hello'
    return 'world'
}
</pre>
    <p>5.yield表达式只能用在 Generator 函数里面，用在其他地方都会报错</p>
    <p>6.yield表达式如果用在另一个表达式之中，必须放在圆括号里面</p>
    <pre class="code-content">console.log('Hello' + (yield 123));</pre>
    <p>7.yield表达式用作函数参数或放在赋值表达式的右边，可以不加括号</p>
    <!-- next方法的参数 -->
    <h4>2.next方法的参数</h4>
    <p>1.next方法可以带一个参数，该参数就会被当作上一个yield表达式的返回值</p>
    <p>2.next方法的参数表示上一个yield表达式的返回值，在第一次使用next方法时，传递参数是无效的</p>
    <!-- for...of循环 -->
    <h4>3.for...of循环</h4>
    <p>1.for...of循环可以自动遍历 Generator 函数时生成的Iterator对象，且此时不再需要调用next方法</p>
    <p>2.一旦next方法的返回对象的done属性为true，for...of循环就会中止，且不包含该返回对象</p>
    <pre class="code-content">
function* helloWorld () {
    yield '1'
    yield '2'
    yield '3'
    yield '4'
    yield '5'
    return '6'
}
for (let i of helloWorld()) {
    console.log(i)
}
<span class="result">// 1</span>
<span class="result">// 2</span>
<span class="result">// 3</span>
<span class="result">// 4</span>
<span class="result">// 5</span>
</pre>
    <p>3.利用 Generator 函数和for...of循环，实现斐波那契数列(后一个数是前两个数的和)</p>
    <pre class="code-content">
function* query () {
    let [be, af] = [0, 1];
    for (;;) {
      yield af
      [be, af] = [af, be + af]
    }
}
for (let i of query()) {
    if (i > 2000) break
    console.log(i)
}
</pre>
    <!-- Generator.prototype.return() -->
    <h4>4.Generator.prototype.return()</h4>
    <p>1.Generator 函数返回的遍历器对象，还有一个return方法，可以返回给定的值，并且终结遍历 Generator 函数</p>
    <p>2.如果return方法调用时，不提供参数，则返回值的value属性为undefined</p>
    <p>3.如果 Generator 函数内部有try...finally代码块，那么return方法会推迟到finally代码块执行完再执行</p>
    <pre class="code-content">
function* query () {
    yield 1
    yield 2
    yield 3
}
var a = auery()
a.next()
a.return('c')
<span class="result">{value: 1, done: false}</span>
<span class="result">{value: "c", done: true}</span>
</pre>
    <!-- yield*表达式 -->
    <h4>4.yield*表达式</h4>
    <p>1.如果在 Generator 函数内部，调用另一个 Generator 函数，默认情况下是没有效果的</p>
    <p>2.yield*表达式，用来在一个 Generator 函数里面执行另一个 Generator 函数</p>
  </div>
</template>
<script>
export default {
  name: 'page-function-es6-Generator',
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
.page-function-es6-Generator {
}
</style>
