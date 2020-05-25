<template>
  <div class="pageFunctionTs">
    <h4>1.Ts中基本数据类型</h4>
    <p>数字：number, 字符串：string, 布尔：boolean, Null和Undefined: null, undefined, 空值：viod, Symbol 类型：symbol, BigInt 大数整数类型: bigint</p>
    <h4>2.其它数据类型</h4>
    <p>1.any, unknown, never, 元祖类型, object类型, 枚举类型</p>
    <p>2.any与unknown的不同之处在于：虽然两者都可以指定任意数据类型，但是unknown被指定为某一个确定的数据类型之前，它不能被进行任何操作比如实例化、getter、函数执行等</p>
    <p>3.接口interface</p>
    <h4>3.函数重载</h4>
    <h4>4.泛型</h4>
    <pre class="code-content">
function returnItem&lt;T&gt;(param: T): T {
  return param
}
</pre>
    <p>泛型接口</p>
    <pre class="code-content">
interface Direction&lt;T&gt; {
  (para: T): T
}
</pre>
    <p>泛型类</p>
    <pre class="code-content">
class Test&lt;T&gt; {
  stack: Array&lt;T&gt; = []
  public push(item: T) {
    this.stack.push(item);
  }
  public pop() {
    this.stack.pop()
  }
}
let ff = new Test()
ff.push('123')
ff.push(1)
console.log(ff.stack) // ['123', 1]
ff.pop()
console.log(ff.stack)
</pre>
    <p>可以使用&lt;TT extends xx&gt; 的方式来约束泛型</p>
    <p>参数type的类型为{new(): T},就表示此泛型T是可被构造的，在被实例化后的类型是泛型T</p>
    <pre class="code-content">
function factory&lt;T&gt;(type: {new(): T}): T {
  return new type()
}
</pre>
    <h4>5.类型断言</h4>
    <p>不建议使用双重类型断言</p>
    <pre class="code-content">
interface people {
  name: string,
  age: number,
}
const person = 'string' as any as people // 不推荐
const person = {} as people
</pre>
    <h4>6.interface与类型别名的区别</h4>
    <p>interface只能用于定义对象类型，而 type 的声明方式除了对象之外还可以定义交叉、联合、原始类型等，类型声明的方式适用范围显然更加广泛。</p>
    <p>但是interface也有特定用途：interface可以实现接口的extends和implements。interface可以实现接口合并声明</p>
    <h4>7.装饰器</h4>
    <p>多个装饰器可以用在同一个声明上，可以写在一行或多行上。会按由上至下依次对装饰器表达式求值，求值的结果会被当做函数，由上至下依次调用</p>
  </div>
</template>
<script>
export default {
  name: 'page-function-Ts',
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
