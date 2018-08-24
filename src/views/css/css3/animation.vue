<template>
  <div class="page-animation">
    <p>动画</p>
    <div class="content">
      <!-- 小球 -->
      <div class="animation-content">
        <div class="div-animation"></div>
        <p class="animation-content__shadow"></p>
      </div>
      <template v-for="i in 6">
        <div :key="i" class="animation-content"></div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: 'page-animation',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
.page-animation {
  .content {
    display: flex;
    flex-flow: row wrap;
    div.animation-content {
      height: 500px;
      background-color: #FFF;
      margin: 20px;
      flex: 1 0 auto;
      min-width: 400px;
      position: relative;
    }
  }
  .div-animation {
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: radial-gradient(#33cde5, #282F2F);
    animation: identifier 0.8s ease-out infinite alternate;
  }
  .animation-content__shadow {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 100px;
    height: 10px;
    border-radius: 50%;
    background-color: #666;
    animation: shadows 0.8s ease-out infinite alternate;
  }
  @keyframes identifier {
    0% {
      bottom: 50px;
    }
    10% {
      bottom: 80px;
    }
    20% {
      bottom: 110px;
    }
    30% {
      bottom: 140px;
    }
    40% {
      bottom: 170px;
    }
    50% {
      bottom: 200px;
    }
    60% {
      bottom: 230px;
    }
    70% {
      bottom: 260px;
    }
    80% {
      bottom: 290px;
    }
    90% {
      bottom: 320px;
    }
    100% {
      bottom: 350px;
    }
  }
  @keyframes shadows {
    to {
      background-color: #fff;
    }
    from {
      background-color: #666;
    }
  }
}
</style>
