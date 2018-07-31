<template>
  <div class="page-function-es6-str">
    <!-- at -->
    <h4>1.at</h4>
      <p>es5的charAt方法不能识别码点大于0xFFFF的字符</p>
      <pre class="code-content">
console.log('𠮷'.charAt(0))
<span class="result">// "\uD842"</span></pre>
    <!-- includes, startsWith, endsWith -->
    <h4>2.includes, startsWith, endsWith</h4>
      <p>1.三个方法都返回布尔值</p>
      <p>2.三个参数都接受第二个参数，表示开始搜索的位置</p>
      <p>3.使用第二个参数n时,endswith表示针对前n个字符</p>
      <pre class="code-content">
let s = 'oba sa lang hei'
console.log(s.includes(' s'))
<span class="result">// true</span>
console.log(s.startWith('ba'))
<span class="result">// false</span>
console.log(s.endswith('a', 6))
<span class="result">// true</span></pre>
    <!-- repeat -->
    <h4>3.repeat</h4>
      <p>1.repeat方法返回一个新字符串，表示将原字符串重复n次</p>
      <p>2.如果参数是小数，则会取整</p>
      <p>3.参数NAN等同于0</p>
      <p>4.参数如果是字符串则会转化为整数</p>
      <pre class="code-content">
console.log('feng'.repeat(1))
<span class="result">feng</span>
console.log('feng'.repeat(2.9))
<span class="result">fengfeng</span>
console.log('feng'.repeat(NAN))
<span class="result">''</span></pre>
    <!-- padStart, padEnd -->
    <h4>4.padStart, padEnd</h4>
      <p>1.用来补全字符串，分别为头部补全及尾部补全</p>
      <p>2.两个方法都接受两个参数，第一个参数表示字符串长度，第二个参数表示用来补全的字符串</p>
      <p>3.如果原字符串等于或大于最小长度，则返回原字符串</p>
      <p>4.如果用来补全的字符串大于字符串长度，则会截取超出位数的补全字符串</p>
      <p>5.省略第二个参数，默认使用空格补全</p>
      <pre class="code-content">
console.log('hao'.padStart(6, 'xx'))
<span class="result">xxxhao</span>
console.log('hao'.padStart(1, 'xx'))
<span class="result">hao</span>
console.log('hao'.padStart(7, 'fewijidsoj'))
<span class="result">fewihao</span></pre>
  </div>
</template>
<script>
export default {
  name: 'page-function-es6-str',
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
