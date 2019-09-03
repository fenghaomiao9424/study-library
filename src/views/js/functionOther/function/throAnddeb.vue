<template>
  <div class="page-function-throanddeb">
      <h4>1.节流</h4>
      <p>定义：函数节流指的是某个函数在一定时间间隔内（例如 3 秒）只执行一次，在这 3 秒内 无视后来产生的函数调用请求，也不会延长时间间隔。3 秒间隔结束后第一次遇到新的函数调用会触发执行，然后在这新的 3 秒内依旧无视后来产生的函数调用请求，以此类推</p>
      <pre class="code-content">
// fn 是需要执行的函数
// wait 是时间间隔
const throttle = (fn, wait = 50) => {
  // 上一次执行 fn 的时间
  let previous = 0
  // 将 throttle 处理结果当作函数返回
  return function(...args) {
    // 获取当前时间，转换成时间戳，单位毫秒
    let now = +new Date()
    // 将当前时间和上一次执行函数的时间进行对比
    // 大于等待时间就把 previous 设置为当前时间并执行函数 fn
    if (now - previous > wait) {
      previous = now
      fn.apply(this, args)
    }
  }
}

// DEMO
// 执行 throttle 函数返回新函数
const betterFn = throttle(() => console.log('fn 函数执行了'), 1000)
// 每 10 毫秒执行一次 betterFn 函数，但是只有时间差大于 1000 时才会执行 fn
setInterval(betterFn, 10)
</pre>
    <h4>2.防抖</h4>
    <p>防抖函数 debounce 指的是某个函数在某段时间内，无论触发了多少次回调，都只执行最后一次。假如我们设置了一个等待时间 3 秒的函数，在这 3 秒内如果遇到函数调用请求就重新计时 3 秒，直至新的 3 秒内没有函数调用请求，此时执行函数，不然就以此类推重新计时</p>
    <pre class="code-content">
// fn是防抖需要执行的函数
// wait是时间间隔
function debonce(fn, wait=50) {
  let timer = null
  return function(...args) {
    if (timer) { clearTimeout(timer) }
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, wait)
  }
}
const betterFn = debonce((e) => console.log(e, e[0].clientX, e[0].clientY), 1000)
// 鼠标停止移动时获取鼠标坐标点
window.addEventListener('mousemove', betterFn)
</pre>
  </div>
</template>
<script>
export default {
  name: 'page-function-throanddeb',
  data () {
    return {
    }
  },
  mounted () {
  }
}
</script>
