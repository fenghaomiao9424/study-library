<template>
  <div class="page-function-es6-arr">
    <!-- 扩展运算符 -->
    <h4>1.扩展运算符：...</h4>
    <p>ES5将类数组对象转为数组</p>
      <pre class="code-content">
let islikeArr = { 0: '1', 1: '2', 2: '1', 3: '5', 'length': 4 }
console.log(Array.prototype.slice.call(islikeArr)) 或 console.log([].slice.call(islikeArr))
<span class="result">// ["1", "2", "1", "5"]</span></pre>
    <p>扩展运算符将类数组对象转为数组</p>
      <pre class="code-content">
let islikeArr = document.querySelectorAll('div')
console.log([...islikeArr])
<span class="result">// [div, div]</span></pre>
    <p>ES5与扩展运算符实现数组浅拷贝</p>
      <pre class="code-content">
let arr1 = [1, 2, 3]
let arr2 = arr1.slice() 或 let arr2 = arr1.concat() 或 let arr2 =[...arr1]
arr2[1] = 5
console.log(arr1, arr2)
<span class="result">// [1, 2, 3][1, 5, 3]</span></pre>
    <p>合并数组</p>
      <pre class="code-content">
let a = [1, 2]
let b = [2]
let c = [3, 4]
console.log([...a, ...b, ...c])
<span class="result">// [1, 2, 2, 3, 4]</span></pre>
    <p>扩展运算符与解构赋值结合(如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错)</p>
      <pre class="code-content">
let [a, ...b] = [1, 2, 3, 4, 5]
console.log(a, b)
<span class="result">// 1 [2, 3, 4, 5]</span>
let [a, ...b] = []
console.log(a, b)
<span class="result">// undefined []</span>
let [a, ...b] = ['s']
console.log(a, b)
<span class="result">// s []</span></pre>
    <p>将字符串转为数组</p>
    <pre class="code-content">
var str = 'hello'
str.split('') 或 [...str] // ['h', 'e', 'l', 'l', 'o']
</pre>
    <!-- Array.from -->
    <h4>2.Array.from()</h4>
    <p>1.Array.from还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组。</p>
    <p>2.如果map函数里面用到了this关键字，还可以传入Array.from的第三个参数，用来绑定this。</p>
    <p>3.Array.from可以将字符串转为数组然后返回字符串的长度</p>
    <p>4.Array.from()将类数组对象转为数组</p>
      <pre class="code-content">let islikeArr = { 0: '1', 1: '2', 2: '1', 3: '5', 'length': 4 }
console.log(Array.from(islikeArr))
<span class="result">// ["1", "2", "1", "5"]</span></pre>
    <p>Array.from()如果参数是一个数组，则返回一个一模一样的数组</p>
      <pre class="code-content">console.log(Array.from([1, 2, 3, 4, 5]))
<span class="result">// [1, 2, 3, 4, 5]</span></pre>
    <p>Array.form()方法小应用：生成一个32位随机字符串</p>
      <pre class="code-content">let randomStr = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
let str = ''
str = Array.from({length: 32}, () => randomStr.charAt(Math.floor(Math.random() * 62))).join('')
console.log(str, str.length)
<span class="result">// lc7ArI4v4r2QGg2wUxPWJx8IKGhxFPz4 32</span>
<span class="result">// 注意：</span>
console.log(Array.from({length: 3}))
<span class="result">// [undefined, undefined, undefined]</span>
</pre>
    <!-- Array.of -->
    <h4>3.Array.of()</h4>
    <p>1.将一组值转为数组</p>
    <p>2.该方法弥补了数组构造函数Array()的不足，因为数组构造函数参数个数不同，代表不同的意义，参数为一个时是指定数组的长度</p>
    <pre class="code-content">console.log(Array(3))
<span class="result">// [, , ,]</span>
console.log(Array.of(3))
<span class="result">// [3]</span>
</pre>
    <p>3.Array.of()方法es5方法实现</p>
    <pre class="code-content">
function ArrayOf() {
  return Array.from(arguments)
}
</pre>
    <h4>4.类数组对象转数组</h4>
    <p>1.常见的类数组对象有：DOM操作产生的NodeList集合，函数内部的arguments对象</p>
    <pre class="code-content">
<span class="result">es5</span>
let obj = {'0': 'a', '1': 'b', '2': 'c', length: 3}
console.log(Array.prototype.slice.call(obj))
<span class="result">// ['a', 'b', 'c']</span>
let obj = {'0': 'a', '1': 'b', '4': 'c', length: 3}
console.log(Array.prototype.slice.call(obj))
<span class="result">// ['a', 'b', empty]</span>
<span class="result">es6</span>
let obj = {'0': 'a', '1': 'b', '2': 'c', length: 3}
console.log(Array.from(obj))
<span class="result">// ['a', 'b', 'c']</span>
let obj = {'0': 'a', '1': 'b', '4': 'c', length: 3}
console.log(Array.from(obj))
<span class="result">// ['a', 'b', undefined]</span>
</pre>
    <!-- 数组实例的copyWithin() -->
    <h4>5.数组实例的copyWithin()</h4>
    <p>Array.prototype.copyWithin(target, start = 0, end = this.length)</p>
    <p>它接受三个参数：</p>
    <p>1.target（必需）：从该位置开始替换数据。如果为负值，表示倒数。</p>
    <p>2.start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示倒数。</p>
    <p>3.end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数</p>
    <pre class="code-content">
console.log([1,2,3,4,5].copyWithin(0))
<span class="result">// [1, 2, 3, 4, 5]</span>
console.log([1,2,3,4,5].copyWithin(1, 3, 4))
<span class="result">// [1, 4, 3, 4, 5]</span>
</pre>
    <!-- find和findIndex方法 -->
    <h4>6.find和findIndex方法</h4>
    <p>1.find()用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，则返回undefined</p>
    <p>2.findIndex方法的用法与find方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。</p>
    <p>3.两个方法的回调函数接受三个参数，依次为当前的值、当前的位置和原数组</p>
    <p>4.两个方法都接受第二个参数，用来绑定回调函数的this</p>
    <pre class="code-content">
function f(v){
  return v > this.age;
}
let person = {name: 'John', age: 20};
[10, 12, 26, 15].find(f, person);
<span class="result">// 26</span>
</pre>
    <p>5.两个方法都可以发现NAN,弥补了indexOf方法的缺陷</p>
    <pre class="code-content">
console.log([NAN].indexOf(NAN))
<span class="result">// -1</span>
[NaN].findIndex(y => Object.is(NaN, y))
<span class="result">// 0</span>
</pre>
    <!-- fill -->
    <h4>7.fill()</h4>
    <p>1.fill方法使用给定值，填充一个数组</p>
    <p>2.数组中所有的元素会被全部抹去</p>
    <p>3.fill方法还接受第二个和第三个参数，用来指定填充的开始位置和结束位置</p>
    <p>4.如果填充的类型为对象，那么被赋值的是同一个内存地址的对象，而不是深拷贝对象</p>
<pre class="code-content">
console.log(new Array(3).fill(8))
<span class="result">[8, 8, 8]</span>
let arr = new Array(3).fill({'name': 'feng'}))
arr[0].name = 'liu'
console.log(arr)
<span class="result">[{name: "liu"}, {name: "liu"}, {name: "liu"}]</span>
</pre>
    <!-- entries,keys, values -->
    <h4>8.entries,keys, values方法</h4>
    <p>1.都用于遍历数组</p>
    <p>2.可以用for...of进行遍历</p>
    <p>3.keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历</p>
<pre class="code-content">
for(let [index, ele] of ['e', 'f', 'g'].entries()) {
  console.log(index, ele)
}
<span class="result">0 "e"
1 "f"
2 "g"</span>
</pre>
    <!-- includes -->
    <h4>9.includes</h4>
    <p>1.该方法返回一个布尔值，表示数组是否包含目标值</p>
    <p>2.该方法接受第二个参数，表示开始搜索的位置，如果为负数，则表示倒数的位置，如果值大于数组长度，则会重置为0</p>
    <p>3.该方法可以取代indexOf方法无法识别NAN的缺点</p>
<pre class="code-content">
[1, 2, 3].includes(2)
<span class="result">true</span>
[1, 2, 3].includes(2, 3)
<span class="result">false</span>
[NaN].indexOf(NaN)
<span class="result">-1</span>
[NaN].includes(NaN)
<span class="result">true</span>
</pre>
    <!-- 数组空位 -->
    <h4>10.数组空位</h4>
    <p>1.空位不是undefined</p>
<pre class="code-content">
0 in [undefined, undefined]
<span class="result">true</span>
0 in [,]
<span class="result">false</span>
</pre>
    <p>2.forEach(), filter(), reduce(), every() 和some()都会跳过空位</p>
    <p>3.map()会跳过空位，但会保留这个值</p>
    <p>4.join()和toString()会将空位视为undefined，而undefined和null会被处理成空字符串。</p>
    <p>5.Array.from方法会将数组的空位，转为undefined，也就是说，这个方法不会忽略空位。</p>
    <p>6.扩展运算符（...）也会将空位转为undefined。</p>
    <p>7.copyWithin()会连空位一起拷贝。</p>
    <p>8.fill()会将空位视为正常的数组位置。</p>
    <p>9.for...of循环也会遍历空位。</p>
    <p>10.entries()、keys()、values()、find()和findIndex()会将空位处理成undefined。</p>
    <h4>11.flat()方法实现</h4>
    <pre class="code-content">
Array.prototype.newFlat = function(deep = 1) {
    const arr = this
    const toNumber = +deep
    let count = toNumber 小于 0 || !(toNumber) ? 0 : toNumber
    let res = []
    const run = function (arrChild) {
        for (const item of arrChild) {
            if (Array.isArray(item) && count > 0) {
                count --
                run(item)
            } else {
                res.push(item)
            }
        }
    }
    run(arr)
    return res
}
let arr = [1, 2, [3, [4, 5]]]
arr.newFlat()
</pre>
    <h4>12.for...of循环</h4>
    <p>for...of循环可以使用的范围包括数组，Set和Map结构，某些类似数组的对象（比如arguments对象，DOM NodeList对象），Gene让投入对象，以及字符串</p>
    <p>原有的for...in循环，只能获得对象的键名，不能直接获取键值。for...of循环，允许遍历获得键值。</p>
    <pre class="code-content">
var arr = ['a', 'b', 'c', 'd']
for (let a in arr) {
    console.log(a) // 0 1 2 3
}
for (let a of arr) {
    console.log(a) // a b c d
}
</pre>
  </div>
</template>
<script>
export default {
  name: 'page-function-es6-arr',
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
