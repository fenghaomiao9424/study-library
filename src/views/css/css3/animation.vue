<template>
  <div class="page-animation">
    <p>动画</p>
    <div class="content">
      <!-- scaning -->
      <div class="animation-content back-black">
        <div class="animation-content__scaning">
          <div class="animation-content__acaning-block"></div>
        </div>
      </div>
      <!-- 摆轮 -->
      <div class="animation-content">
        <ul class="animation-content__lunar">
          <li class="item-first">
            <div class="animation-content__liner"></div>
            <div class="animation-content__ball"></div>
          </li>
          <li>
            <div class="animation-content__liner"></div>
            <div class="animation-content__ball"></div>
          </li>
          <li>
            <div class="animation-content__liner"></div>
            <div class="animation-content__ball"></div>
          </li>
          <li>
            <div class="animation-content__liner"></div>
            <div class="animation-content__ball"></div>
          </li>
          <li class="item-last">
            <div class="animation-content__liner"></div>
            <div class="animation-content__ball"></div>
          </li>
        </ul>
      </div>
      <!-- 小球 -->
      <div class="animation-content">
        <div class="div-animation"></div>
        <p class="animation-content__shadow"></p>
      </div>
      <!-- loading -->
      <div class="animation-content">
        <ul class="animation-loading">
          <template v-for="i in loading">
            <li :key="i">
              <h4>{{i}}</h4>
            </li>
          </template>
        </ul>
      </div>
      <!-- 正方体 -->
      <div class="animation-content">
        <div class="animation-cube">
            <div class="box">
                <div class="face one"> </div>
                <div class="face two"> </div>
                <div class="face three"> </div>
                <div class="face four"> </div>
                <div class="face five"> </div>
                <div class="face six"> </div>
            </div>
        </div>
      </div>
      <div class="animation-content"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'page-animation',
  data () {
    return {
      loading: ['L', 'O', 'A', 'D', 'I', 'N', 'G']
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
      min-width: 450px;
      position: relative;
    }
    div.animation-content.back-black {
      background-color: #282f2f;
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
      box-shadow: none;
    }
    from {
      background-color: #666;
      box-shadow: 0px 0px 15px #666;
    }
  }
  .animation-content__lunar {
    width: 250px;
    height: 300px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-top: 1px solid #000;
    margin: 0;
    padding: 0;
  }
  .animation-content__lunar li {
    width: 20%;
    height: 100%;
    float: left;
    list-style: none;
    &.item-first {
      transform-origin: center top;
      animation: lunar 0.6s linear infinite alternate;
    }
    &.item-last {
      transform-origin: center top;
      animation: lunar2 0.6s linear infinite alternate;
    }
  }
  .animation-content__liner {
    width: 2px;
    height: 250px;
    background-color: #000;
    margin: 0 auto;
  }
  .animation-content__ball {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: radial-gradient(#fff, #000);
  }
  @keyframes lunar {
    0% {
      transform: rotate(25deg);
    }
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  @keyframes lunar2 {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-25deg);
    }
  }
  .animation-loading {
    width: 350px;
    height: 300px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 0;
  }
  .animation-loading li {
    width: 50px;
    height: 100%;
    float: left;
    list-style: none;
    line-height: 300px;
    color: #33cde5;
    animation: loading 1s ease-in-out infinite alternate;
    &:nth-child(2) {
      animation-delay: 0.15s;
    }
    &:nth-child(3) {
      animation-delay: 0.3s;
    }
    &:nth-child(4) {
      animation-delay: 0.45s;
    }
    &:nth-child(5) {
      animation-delay: 0.6s;
    }
    &:nth-child(6) {
      animation-delay: 0.75s;
    }
    &:nth-child(7) {
      animation-delay: 1.0s;
    }
    h4 {
      font-size: 40px;
    }
  }
  @keyframes loading {
    0% {
      color: #33cde5;
    }
    100% {
      color: #fff;
    }
  }
  .animation-content__scaning {
    width: 340px;
    height: 340px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    overflow: hidden;
    background: -webkit-radial-gradient(center, rgba(32, 255, 77, 0.3) 0%, rgba(32, 255, 77, 0) 75%), -webkit-repeating-radial-gradient(rgba(32, 255, 77, 0) 5.8%, rgba(32, 255, 77, 0) 18%, #20ff4d 18.6%, rgba(32, 255, 77, 0) 18.9%), -webkit-linear-gradient(90deg, rgba(32, 255, 77, 0) 49.5%, #20ff4d 50%, rgba(32, 255, 77, 0) 50.2%), -webkit-linear-gradient(0deg, rgba(32, 255, 77, 0) 49.5%, #20ff4d 50%, #20ff4d 50%, rgba(32, 255, 77, 0) 50.2%);
  }
  .animation-content__acaning-block {
    width: 170px;
    height: 170px;
    position: absolute;
    top: 0px;
    right: 0px;
    background: linear-gradient(134deg, transparent 50%, #00ff33 100%);
    animation: scaning 2s linear infinite;
    transform-origin: left bottom;
  }
  @keyframes scaning {
    0% {
      transform: rotate(0deg)
    }
    25% {
      transform: rotate(90deg)
    }
    50% {
      transform: rotate(180deg)
    }
    75% {
      transform: rotate(270deg)
    }
    100% {
      transform: rotate(360deg)
    }
  }
  // 正方体
  .animation-cube {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  @keyframes rotate {
      100% {
          transform: rotateZ(360deg) rotateY(360deg) rotateX(360deg);
      }
  }
  .box {
      animation: rotate 10s linear infinite;
      height: 240px;
      margin: 0 auto;
      position: relative;
      transform-style: preserve-3d;
      width: 240px;
  }
  .face {
      backface-visibility: hidden;
      background-color: #fae48c;
      height: 240px;
      opacity: 0.5;
      position: absolute;
      width: 240px;
  }
  .box .one {
      background-color: #fae48c;
      transform: rotateX(90deg) translateZ(120px);
  }
  .box .two {
      background-color:rgb(199, 24, 126) ;
      transform: translateZ(120px);
  }
  .box .three {
      transform: rotateY(90deg) translateZ(120px);
      background-color: rgb(255, 115, 0);
  }
  .box .four {
      transform: rotateY(180deg) translateZ(120px);
      background-color: green;
  }
  .box .five {
      transform: rotateY(-90deg) translateZ(120px);
      background-color: rgb(155, 219, 59);
  }
  .box .six {
      transform: rotateX(-90deg) translateZ(120px) rotate(180deg);
      background-color: black;
  }
}
</style>
