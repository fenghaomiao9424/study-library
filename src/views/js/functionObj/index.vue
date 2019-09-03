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
      <p>3.如果一个对象是访问器属性，这个对象有configurable,enumerable,get和set</p>
      <p>4.如果是数据类型，这个对象的属性有configurable,enumerable,writable,value</p>
      <p><strong>5.使用new操作符创建对象的步骤：</strong></p>
      <p>1) 创建一个新对象</p>
      <p>2) 将构造函数的作用域赴给新对象</p>
      <p>3) 执行构造函数中的代码</p>
      <p>4) 返回新对象</p>
      <pre class="code-content">
function Person(name, age, job) {
      this.name = name;
      this.job = job;
      this.age = age;
      this.sayName = sayName;
}
function sayName() {
      alert(this.name)
}
var person1 = new Person('feng', 29, 'Teacher')
var person2 = new Person('haomiao', 11, 'Student')
</pre>
      <p>6.使用hasOwnProperty()方法可以检测一个属性是存在于实例中，还是存在于原型中</p>
      <p>7.getOwnPropertyDescriptor()方法只能用于实例属性</p>
      <p>8.in操作符会通过对象能够访问给定属性时返回true,无论该属性存在于实例中还是原型中</p>
      <p>9.in操作符返回true而hasOwnProperty()返回false，就可以确定属性是原型中的属性</p>
      <p>10.for...in 循环返回的是所有能够通过对象访问的，可枚举的属性，其中既包括存在于实例中的属性，<span>也包括存在于原型中的属性</span></p>
      <p>11.Object.keys()取得对象上所有可枚举的实例属性，不包括原型上的</p>
      <p>12.Object.getOwnPropertyName()得到所有实例属性，无论是否可枚举，不包括原型上的</p>
      <pre class="code-content">
function Person() {}
Person.prototype = {
      name: "Nicholas",
      age: 29,
      job: "Software"
      sayName: function() {
            alert(this.name)
      }
}
var friend = new Person()
friend instanceof Object   // true
friend instanceof Person   // true
friend.constructor == Person  // false
friend.constructor == Object  // true
</pre>
      <!-- 继承 -->
      <h4>8.继承实现</h4>
      <p><strong>1.原型链</strong></p>
      <p>实现的本质是重写原型对象</p>
      <pre class="code-content">
function SuperType() {
   this.property = true;
}
SuperType.prototype.getSuperValue = function() {
      return this.property;
}
function SubType() {
      this.subproperty = false;
}
// 继承了SuperType
SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function() {
      return this.subproperty;
}
var instance = new SubType();
alert(instance.getSuperValue()) // true
</pre>
      <p>确定原型和实例的关系：insatance, isPrototypeOf()</p>
      <p>给原型添加方法的代码一定要放在替换原型的语句之后</p>
      <p>在通过原型链实现继承时，不能使用字面量创建原型方法</p>
      <pre class="code-content">
function SuperType() {
      this.property = true
}
SuperType.prototype.getSuperValue = function() {
      return this.property
}
function SubType() {
      this.subproperty = false
}
SubType.prototype =  new SuperType()
// 以下代码会覆盖上一行
SubType.prototype = {
      getSubValue: function() {
            return this.subproperty
      }
      someMethod: function() {
            return false
      }
}
var instance =  new SubType()
instance.getSuperValue()  // error
</pre>
      <p><span>原型链实现继承的几个问题：1.共享引用类型的值。2.在创建子类型的实例时，不能向超类型的构造函数中传递参数。3.不能实现多继承</span></p>
      <p><strong>2.借用构造函数</strong></p>
      <pre class="code-content">
function SuperType() {
      this.colors = ['red', 'blue', 'green']
}
function SubType() {
      SuperType.call(this)
}
var instance1 = new SubType()
instance1.colors.push('black')
instance1.colors   // ['red', 'blue', 'green', 'black']
</pre>
      <p>借用构造函数优势：可以在子类型构造函数中向超类型构造函数传递参数</p>
      <p><span>问题：1.方法都在构造函数中定义，因此函数复用就无从谈起了2.超类型的原型中定义的方法，对子类型而言是不可见的</span></p>
      <p><strong>3.组合继承</strong></p>
      <p>将原型链和构造函数结合到一起</p>
      <p><span>其背后的思路是使用原型链实现对原型属性和方法的继承，而通过借用构造函数来实现对实例属性的继承</span></p>
      <pre class="code-content">
function SuperType(name) {
      this.name = name;
      this.colors = ['red', 'blue', 'green']
}
SuperType.prototype.sayName = function() {
      alert(this.name)
}
function SubType(name, age) {
      SuperType.call(this, name)
      this.age = age
}
SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function(){
    alert(this.age);
};
var instance1 = new SubType("Nicholas", 29);
instance1.colors.push("black");
alert(instance1.colors);  //"red,blue,green,black"
instance1.sayName();  //"Nicholas";
instance1.sayAge();  //29
var instance2 = new SubType("Greg", 27);
alert(instance2.colors);   //"red,blue,green"
instance2.sayName();   //"Greg";
instance2.sayAge();   //27
</pre>
      <p><strong>4.原型式继承</strong></p>
      <p>这种继承方式要求你必须有一个对象作为另一个对象的基础</p>
      <pre class="code-content">
var person = {
      name: 'Ni',
      friends: ['a', 'b', 'c']
}
var anotherPerson = Object.create(person)
anotherPerson.name = 'Greg'
anotherPerson.friends.push('d')
person.friends  // ['a', 'b', 'c', 'd']
</pre>
      <p><span>Object.create()与Object.defineProperties()方法的第二个参数格式相同</span></p>
      <p><strong>5.寄生式继承</strong></p>
      <pre class="code-content">
function createAnother (original) {
      var clone = object(original)
      clone.sayHi = funciton() {
            alert("hi")
      }
      return clone
}
var person = {
      name: '123'
      friends: ['a', 'b', 'c']
}
var anotherPerson = createAnother(person)
anotherPerson.sayHi() // 'hi'
</pre>
      <p><strong>6.寄生组合式继承</strong></p>
      <p>组合继承最大的问题就是无论什么情况下，都会调用两次超类型构造函数</p>
      <pre class="code-content">
function SuperType(name) {
      this.name = name;
      this.colors = ['red', 'blue', 'green']
}
SuperType.prototype.sayName = function() {
      alert(this.name)
}
function SubType(name, age) {
      SuperType.call(this, name)  // 第二次调用SuperType()
      this.age = age
}
SubType.prototype = new SuperType()  // 第一次调用SuperType()
SubType.prototype.constructor = SubType
SubType.prototype.sayAge = function() {
      alert(this.age)
}
</pre>
      <!-- BOM -->
      <h4>9.BOM</h4>
      <p><strong>1.window对象</strong></p>
      <p>1.全局变量会成为window对象的属性</p>
      <p>2.全局变量不能通过delete操作符删除，而直接在window对象上定义的属性可以（var定义的变量的[[configurable]]的值被设置为false,所以不能被删除）</p>
      <p>moveTo()和moveBy()方法有可能将窗口精确地移动到一个新位置。moveTo()接受的是新位置的x,y坐标，moveBy()接受的是在水平和垂直方向上移动的像素数</p>
      <p>resizeTo()和resizeBy()可以调整浏览器窗口的大小。resizeTo()接收浏览器窗口的新宽度和新高度，resizeBy接收新窗口与原窗口的度数差</p>
      <!-- DOM -->
      <h4>10.DOM</h4>
      <p><strong>DOM操作方法(Node类型)</strong></p>
      <p>firstChild(),lastChild(),childNodes(),previousSibling(),nextSibling(),hasChildNodes(),appendChild()</p>
      <p>insertBefore()这个方法接受两个参数:要插入的节点和作为参照的节点。如果参照节点是null，则insertBefore()和appendChild()执行相同的操作</p>
      <p>replaceChild()方法接受两个参数：要插入的节点和要替换的节点</p>
      <p>removeChild()接受一个参数，即要删除的节点。与使用replaceChild()方法一样，移除的节点仍然为文档所有，只不过在文档中已经没有了自己的位置</p>
      <p>cloneNode()方法接受一个布尔值参数，表示是否执行深复制，也就是是否复制节点及整个子节点树</p>
      <p><strong>Document类型</strong></p>
      <p>documentElement,firstChild,childNodes[0]的值相同，都指向html</p>
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
