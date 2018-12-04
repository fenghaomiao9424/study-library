<template>
  <div class="page-function-eventTaggle">
  <h4>点击li查看效果</h4>
  <div class="content">
    <div class="content-left">
      <ul id="lists">
        <li v-for="i in 5" :key="i">
          {{i}}
        </li>
      </ul>
    </div>
    <div class="content-right">
      <p class="result">{{result}}</p>
    </div>
  </div>
  <h4>代码</h4>
  <pre class="code-content">
document.getElementById('lists').addEventListener('click', (e) => {
  const { nodeName, innerHTML } = e.target
  if (nodeName === 'LI') {
    /* 点击LI之后的操作 */
  }
})
</pre>
  </div>
</template>
<script>
export default {
  name: 'page-function-eventTaggle',
  data () {
    return {
      result: ' '
    }
  },
  mounted () {
    this.addEvent()
  },
  methods: {
    addEvent () {
      document.getElementById('lists').addEventListener('click', (e) => {
        const { nodeName, innerHTML } = e.target
        if (nodeName === 'LI') {
          this.result = innerHTML
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.page-function-eventTaggle {
  .content {
    display: flex;
    flex-direction: row;
    div {
      flex: 1 0 auto;
      box-sizing: border-box;
    }
    .content-left {
      width: 50%;
      border: 1px solid #d7d8d9;
    }
    .content-right {
      width: 50%;
      background-color: #2D3839;
      padding: 20px;
    }
  }
  ul {
    padding: 0;
    li {
      list-style: none;
      margin: 10px 5px;
      border: 1px solid #d7d8d9;
    }
  }
  .result {
    color: #fff;
    font-size: 40px;
  }
}
</style>
