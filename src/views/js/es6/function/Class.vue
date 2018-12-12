<template>
    <div class="page-function-es6-class">
      <h4>1.注意点</h4>
      <p>1.定义类的方法时，不需要加function关键字，方法之间不需要逗号分隔</p>
      <p>2.类的数据类型就是函数，类本身就指向构造函数，使用时也是直接对类使用new命令</p>
      <pre class="code-content">
class test {
    constructor  () {
        ....
    }
    toString () {
        ....
    }
    toValue () {
        ....
    }
}
<span class="result">等同于</span>
test.prototype = {
    constructor() {},
    toString() {},
    toValue() {}
}
</pre>
      <p>3.由于类的方法都定义在prototype对象上面，所以类的新方法可以添加在prototype对象上面。Object.assign方法可以很方便地一次向类添加多个方法。</p>
      <p>4.类的属性名可以采用表达式</p>
      <p>5.使用实例的__proto__属性改写原型，必须相当谨慎，不推荐使用，因为这会改变“类”的原始定义，影响到所有实例</p>
      <p>6.使用类表达式，实现一个立即执行的类的实例</p>
      <pre class="code-content">
let room = new class {
    constructor(name) {
        this.roomName = name
    }
    getRoomName() {
        console.log(this.roomName)
    }
}('qijushi')
room.getRoomName()
<span class="result">// qijushi</span>
</pre>
       <p>7.类不存在变量提升</p>
       <p>8.name属性:ES6 的类只是 ES5 的构造函数的一层包装，所以函数的许多特性都被Class继承</p>
       <pre class="code-content">
class point {
}
point.name
<span class="result">// point</span>
</pre>
      <p>9.在“类”的内部可以使用get和set关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为</p>
      <pre class="code-content">
class point {
    constructor() {}
    get() {
        return 'ssss'
    }
    set(value) {
        console.log(value)
    }
}
point.name
<span class="result">// point</span>
</pre>
      <p>10.加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”</p>
      <p>11.静态方法可以与非静态方法重名</p>
      <p>12.父类的静态方法可以被子类继承</p>
      <p>13.在子类的构造函数中，只有调用super之后，才可以使用this关键字，否则会报错</p>
      <h4>2.super关键字</h4>
      <p>1.super表示父类得构造函数，指向父类的原型对象</p>
      <p>2.子类的构造函数必须执行一次super函数</p>
      <pre class="code-content">
class A {
}
class B extends A {
    constructor() {
        super()
    }
}
此时的super相当于   A.prototype.constructor.call(this)
</pre>
      <p>3.super()只能用在子类的构造函数中，用在其它地方会报错</p>
      <p>4.在子类普通方法中通过super调用父类的方法时，方法内部的this指向当前的子类实例</p>
      <p>5.super在静态方法中指向父类，在普通方法中指向父类得原型</p>
      <p>6.在子类的静态方法中通过super调用父类的方法时，方法内部的this指向当前的子类，而不是子类的实例</p>
    </div>
</template>
<script>
export default {
  name: 'page-function-es6-class',
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
</style>
