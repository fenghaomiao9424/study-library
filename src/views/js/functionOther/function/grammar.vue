<template>
  <div class="page-function-grammar">
    <!-- 运算符优先级 -->
    <h4>1.运算符优先级</h4>
    <p>用，来连接一系列语句的时候，它的优先级最低，其它操作数的优先级都比它高</p>
    <p>&&运算符的优先级高于=</p>
    <p>&&运算符的优先级高于||，而||的优先级又高于？：</p>
    <p>?:运算符是右关联，a ? b : c ? d : e相当于a ? b : (c ? d : e)</p>
    <p>=运算符是右关联</p>
    <!-- 语句 -->
    <h4>2.语句</h4>
    <p>switch语句的case表达式的匹配算法与===相同</p>
    <p>切勿同时使用arguments和其对应的命名参数</p>
    <!-- module.exports与exports的区别 -->
    <h4>3.module.exports与exports的区别</h4>
    <p>1.相同：都是node的语法</p>
    <p>2.module.exports 初始值为一个空对象 {}</p>
    <p>3.exports 是指向的 module.exports 的引用</p>
    <p>4.require() 返回的是 module.exports 而不是 exports</p>
    <!-- defer与async的区别 -->
    <h4>4.defer与async的区别</h4>
    <p>defer要等到整个页面在内存中正常渲染结束（DOM 结构完全生成，以及其他脚本执行完成），才会执行；async一旦下载完，渲染引擎就会中断渲染，执行这个脚本以后，再继续渲染。一句话，defer是“渲染完再执行”，async是“下载完就执行”。另外，如果有多个defer脚本，会按照它们在页面出现的顺序加载，而多个async脚本是不能保证加载顺序的。</p>
    <!-- import与require的区别 -->
    <h4>5.import与require的区别</h4>
    <p>1.CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用</p>
    <p>2.CommonJS 模块是运行时加载，ES6 模块是编译时输出接口</p>
    <p>3.JS 引擎对脚本静态分析的时候，遇到模块加载命令import，就会生成一个<span>只读引用</span>。等到脚本真正执行时，再根据这个只读引用，到被加载的那个模块里面去取值。</p>
    <h4>6.js新特性</h4>
    <p>1.可选链操作符</p>
    <pre class="code-content">
let nestedProp = obj && obj.first && obj.first.second; ==> let nestedProp = obj?.first?.second;
</pre>
    <p>2.空位合并操作符 ??</p>
    <p>有了它，我们仅在第一项为 null 或 undefined 时设置默认值。</p>
    <pre class="code-content">
let c = a ?? b;
// 等价于let c = a !== undefined && a !== null ? a : b;
</pre>
    <p>3.BigInt</p>
    <p>可在数字后边加上n或者使用全局方法BigInt()创建</p>
    <p>比较number和BigInt是可以的，但是不能把它们相加</p>
  </div>
</template>
<script>
export default {
  name: 'page-function-grammar',
  data () {
    return {
    }
  },
  mounted () {
  }
}
</script>
