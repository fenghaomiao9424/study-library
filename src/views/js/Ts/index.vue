<template>
  <div class="pageFunctionTs">
    <h4>1.Ts中基本数据类型</h4>
    <p>数字：number, 字符串：string, 布尔：boolean, Null和Undefined: null, undefined, 空值：viod, Symbol 类型：symbol, BigInt 大数整数类型: bigint</p>
    <h4>2.其它数据类型</h4>
    <p>1.any, unknown, never, 元祖类型, object类型, 枚举类型</p>
    <p>2.any与unknown的不同之处在于：虽然两者都可以指定任意数据类型，但是unknown被指定为某一个确定的数据类型之前，它不能被进行任何操作比如实例化、getter、函数执行等</p>
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
