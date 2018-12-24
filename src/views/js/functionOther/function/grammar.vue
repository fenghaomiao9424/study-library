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
