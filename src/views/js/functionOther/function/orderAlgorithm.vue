<template>
  <div class="page-function-order">
    <h4>排序算法</h4>
    <p>1.冒泡排序</p>
    <pre class="code-content">
function order(arr) {
    for (let i = 0; i 小于 arr.length; i ++) {
        for (let j = 0; j 小于 arr.length -i ; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr
}
let arr = [1,3,1,5,4,7,5,8]
order(arr)
</pre>
  </div>
</template>
<script>
export default {
  name: 'page-function-order',
  data () {
    return {
    }
  },
  mounted () {
  }
}
</script>
