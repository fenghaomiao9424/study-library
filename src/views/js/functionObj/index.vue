<template>
  <div class="page-functionObj">
      <h4>1.判断数据类型</h4>
      <pre class="code-content">
let obj = {}
Object.prototype.toString.call(obj) 或 Reflect.apply(Object.prototype.toString, obj, [])
<span class="result">// [object Object]</span>
</pre>
      <h4>2.对象方法</h4>
      <pre class="code-content">
let myObj = {}
Object.defineProperty(myObj, 'a', {
  enumerable: true,
  value: 1
})
Object.defineProperty(myObj, 'b', {
  enumerable: false,
  value: 1
})
console.log('a' in myObj) // true
console.log('b' in myObj) // true
console.log(myObj.hasOwnProperty('a')) // true
console.log(myObj.hasOwnProperty('b')) // true
console.log(Object.keys(myObj)) // ['a']
console.log(Object.getOwnPropertyNames(myObj)) // ['a', 'b']
</pre>
      <p>使用 for..in 遍历对象时原理和查找 [[Prototype]] 链类似，任何可以通过原型链访问到 (并且是 enumerable)的属性都会被枚举。使用 in 操作符来检查属性在对象
中是否存在时，同样会查找对象的整条原型链(无论属性是否可枚举)</p>
      <p>Object.create(null) 创建一个空对象.这种方法和 {} 很像，但是并不会创建 Object.prototype 这个委托，所以它比 {}“更空”更加安全</p>
      <h4>3.对象潜拷贝</h4>
      <p>1.Object.assign()</p>
      <p>Object.assign()方法将<span>源对象（source）</span>的所有<span>可枚举属性</span>，复制到目标对象（target）</p>
      <pre class="code-content">
let obj1 = { 'a': 1, 'b': 2 }
let obj2 = Object.assign({}, obj1)
obj1.a = 3
console.log(obj1, obj2)
<span class="result">// {a: 3, b: 2} {a: 1, b: 2}</span>
</pre>
      <p>采用这种方法克隆，只能克隆原始对象自身的值，不能克隆它继承的值。如果想要保持继承链，可以采用下面的代码:</p>
      <pre class="code-content">
function clone(origin) {
  let originProto = Object.getPrototypeOf(origin)
  return Object.assign(Object.creat(originProto), origin)
}
</pre>
      <p>2.运算符‘...’</p>
      <pre class="code-content">
let obj1 = { 'a': 1, 'b': 2 }
let obj2 = {...obj1}
obj1.a = 3
console.log(obj1, obj2)
<span class="result">// {a: 3, b: 2} {a: 1, b: 2}</span>
</pre>
      <p>3.JSON.parse()</p>
      <pre class="code-content">
let obj1 = { 'a': 1, 'b': 2 }
let obj2 = JSON.parse(JSON.stringify(obj1))
obj1.a = 3
console.log(obj1, obj2)
<span class="result">// {a: 3, b: 2} {a: 1, b: 2}</span>
</pre>
      <h4>4.原型链</h4>
      <p>定义：如果在第一个对象上没有找到需要的属性或者方法引用，引擎就会继续在[[prototype]]关联的对象上进行查找。同理，如果在后者中也没有找到需要的引用就会继续查找它的[[prototype]]，以此类推，这一系列对象的链接被称为“原型链”</p>
      <!-- 单体内置对象 -->
      <h4>5.单体内置对象</h4>
      <p><strong>1.global对象</strong></p>
      <p>1.encodeURI(),encodeURIComponent(),decodeURI(),decodeURIComponent()</p>
      <p>2.decodeURI只能对使用encodeURI替换的字符进行解码。其它两个类似</p>
      <p>3.eval()只接受一个参数，即要执行的js字符串</p>
      <p>4.Global对象的所有属性：undefined,NaN,Infinity,Object,Array,Function,Boolean,String,Number,Date,RegExp,Error,EvalError,RangeError,ReferenceError,SyntaxError,TypeError,URIError</p>
      <h4>6.Math对象</h4>
      <p>1.min()和max()方法用于确定一组数值中的最小值和最大值</p>
      <p>2.Math.ceil()向上舍入，总是将数值向上舍入为最接近的整数</p>
      <p>3.Math.floor()向下舍入，总是将数值向下舍入为最接近的整数</p>
      <p>4.Math.round()标准舍入，将数值四舍五入为最接近的整数</p>
      <p>5.Math.random()返回大于等于0小于1的一个随机数</p>
      <p>6.取得两个数之间的数：</p>
      <pre class="code-content">
function selectFrom(lowerValue, upperValue) {
  var choices = upperValue - lowerValue + 1;
  return Math.floor(Math.random() * choices + lowerValue)
}
selectFrom(2, 10) // 介于2和10之间（包括2和10）的一个值
</pre>
      <!-- 对象方法 -->
      <h4>7.对象方法</h4>
      <p>1.在调用Object.defineProperty()方法时，如果不指定，configurable,enumerable,writable特性的默认值都是false</p>
      <p>2.访问器属性：getter和setter函数</p>
  </div>
</template>
<script>
export default {
  name: 'page-functionObj',
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
