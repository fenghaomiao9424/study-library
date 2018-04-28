<template>
  <div class="hfq-loading" v-show="value" :style="style" :class="{'is-fixed': fullscreen}">
    <div class="app-loading">
      <b class="app-loading-a"></b>
      <b class="app-loading-b"></b>
      <b class="app-loading-c"></b>
    </div>
  </div>
</template>
<script>
export default {
  name: 'hfq-loading',
  props: {
    value: {
      type: Boolean
    },
    background: {
      type: String,
      default: 'rgba(255,255,255,.3)'
    },
    fullscreen: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  computed: {
    style() {
      return {
        background: this.background
      }
    }
  },
  methods: {},
  created() {}
}
</script>
<style lang="less">
.hfq-loading {
  &.is-fixed {
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .app-loading {
    position: absolute;
    z-index: 1;
    width: 34px;
    height: 6px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0 auto;
  }
  .app-loading b {
    position: absolute;
    top: 0;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #3cd1c1;
  }
  .app-loading-a {
    animation: app-loading-a 1.5s ease-in-out infinite;
    left: 0;
  }
  .app-loading-b {
    animation: app-loading-b 1.5s ease-in-out infinite;
    left: 14px;
  }
  .app-loading-c {
    animation: app-loading-c 1.5s ease-in-out infinite;
    left: 28px;
  }
  @keyframes app-loading-a {
    0% {
      top: 0;
    }
    12% {
      top: -12px;
    }
    24% {
      top: 0;
    }
    100% {
      top: 0;
    }
  }

  @keyframes app-loading-b {
    0% {
      top: 0;
    }
    28% {
      top: 0;
    }
    40% {
      top: -10px;
    }
    52% {
      top: 0;
    }
    100% {
      top: 0;
    }
  }

  @keyframes app-loading-c {
    0% {
      top: 0;
    }
    56% {
      top: 0;
    }
    68% {
      top: -8px;
    }
    80% {
      top: 0;
    }
    100% {
      top: 0;
    }
  }
}
</style>
