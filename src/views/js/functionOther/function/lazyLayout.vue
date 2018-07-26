<template>
  <div class="page-function-lazyLayout">
    <template v-for="i in 10">
        <img class="scroll-img" my-src="http://img.hb.aicdn.com/eaab8d61425450592092cd3b0b08d163845b5d7953703-dYnQXZ_fw658" src="" alt="img" :key="i">
    </template>
  </div>
</template>
<script>
export default {
  name: 'page-function-lazyLayout',
  data () {
    return {
    }
  },
  mounted () {
    const imgList = document.getElementsByClassName('scroll-img')
    const ele = document.getElementsByClassName('project-main-content')[0]
    let n = 0
    ele.addEventListener('scroll', () => {
      for (let i = n; i < imgList.length; i++) {
        if (this.getHeight(imgList[i].offsetTop) < ele.scrollTop + ele.offsetHeight - 300) {
          if (imgList[i].getAttribute('src') === '') {
            imgList[i].src = imgList[i].getAttribute('my-src')
          }
          n = i + 1
        }
      }
    })
  },
  methods: {
    getHeight (height) {
      return height - document.getElementsByClassName('page-function-lazyLayout')[0].offsetTop
    }
  }
}
</script>
<style lang="less">
.page-function-lazyLayout {
    img {
        display: block;
        width: 100%;
        height: 400px;
    }
}
</style>
