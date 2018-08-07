<template>
  <div id="fhm-project">
    <!-- 左侧导航 -->
    <aside class="project-aside" :class="{'mini': isCollapse}">
      <div class="project-logo">
        <img src="@/assets/img/logo.jpg" alt="头像">
      </div>
      <el-menu
        :default-active="activeIndex"
        :collapse="isCollapse"
        :collapse-transition="true"
        class="el-menu-vertical-demo"
        :router="true"
        background-color="#282F2F"
        text-color="#fff"
        active-text-color="#33cde5">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span>CSS</span>
          </template>
          <el-menu-item-group>
            <template slot="title">CSS3</template>
            <el-menu-item index="/css3/grandient">渐变</el-menu-item>
            <el-menu-item index="/css3/animation">动画</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">Flex</template>
            <el-menu-item index="/flex">Flex布局</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span>JS</span>
          </template>
          <el-menu-item-group>
            <template slot="title">方法</template>
            <el-menu-item index="/js/functionArr">数组方法</el-menu-item>
            <el-menu-item index="/js/functionObj">对象方法</el-menu-item>
            <el-menu-item index="/js/es6">ES6</el-menu-item>
            <el-menu-item index="/js/functionOther">其它</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-message"></i>
            <span>Components</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">loading</el-menu-item>
            <el-menu-item index="2-2">page</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </aside>
    <!-- 主内容区 -->
    <main class="project-main">
      <header class="project-header">
        <i class="el-icon-menu" @click="showOrHide"></i>
        <div>welcome to my project</div>
      </header>
      <div class="main-container">
        <div class="nav-level-2" v-if="isShowLevel2">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-vertical-demo"
            background-color="#2D3839"
            text-color="#fff"
            :router="true"
            active-text-color="#33cde5">
            <el-menu-item v-for="nav in navList" :index="nav.index" :key="nav.key">
              <span slot="title">{{nav.title}}</span>
            </el-menu-item>
          </el-menu>
        </div>
        <main class="project-main-content">
          <router-view class="router-view"></router-view>
        </main>
      </div>
    </main>
    <!-- 作者简介 -->
    <div class="author">
      作者简介
    </div>
    <div class="author-desc">
      精致的猪猪女孩精致的猪猪女孩精致的猪猪女孩精致的猪猪女孩精致的猪猪女孩精致的猪猪女孩精致的猪猪女孩精致的猪猪女孩精致的猪猪女孩精致的猪猪女孩精致的猪猪女孩精致的猪猪女孩
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      // 当前激活的菜单
      activeIndex: '',
      // 是否展开收起左侧导航
      isCollapse: false,
      isShowLevel2: false
    }
  },
  computed: {
    navList: function () {
      return this.$store.state.navList
    }
  },
  mounted () {
    if (this.$route.path.split('/').length === 4) {
      this.isCollapse = true
      this.isShowLevel2 = true
    }
    this.activeIndex = this.$route.path
  },
  methods: {
    showOrHide () {
      this.isCollapse = !this.isCollapse
    }
  },
  watch: {
    $route (to, from) {
      this.isCollapse = to.path.split('/').length === 4
      this.isShowLevel2 = to.path.split('/').length === 4
      console.log(to.path)
      this.activeIndex = to.path
      // if (!to.meta.alone) {
      //   this.activeIndex = to.path
      // }
    }
  }
}
</script>

<style lang="less">
// 引入全局样式
@import './assets/css/main.less';
#fhm-project {
  display: flex;
  flex-direction: row;
  height: 100%;
  overflow: auto;
  background-color: #f3f3f4;
  .project-aside {
    flex: 0 0 199px;
    background-color: rgb(40, 47, 47);
    height: 100%;
    &.mini {
      flex: 0 0 65px;
      .project-logo, .el-menu {
        width: 65px;
      }
      img {
        width: 55px;
        height: 55px;
      }
    }
  }
  .project-logo {
    text-align: center;
    padding: 30px 0px 10px;
    height: 100px;
    width: 200px;
  }
  .project-logo img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  .project-main {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .project-main-content {
    flex: 1;
    margin: 20px;
    padding: 20px;
    border: 1px solid #d7d8d9;
    border-radius: 5px;
    overflow: auto;
  }
  .main-container {
    display: flex;
    flex-direction: row;
    height: 100%;
  }
  .nav-level-2 {
    flex: 0 0 150px;
    background-color:#2D3839;
    .el-menu {
      border-right: 1px solid #2D3839;
    }
  }
  .router-view {
    flex: 1;
  }
  .project-header {
    flex: 0 0 60px;
    position: relative;
    div {
      height: 60px;
      line-height: 60px;
      background-color: rgb(84, 92, 100);
      color: #fff;
      text-align: center;
    }
    .el-icon-menu {
      position: absolute;
      top: 20px;
      margin-left: 20px;
      font-size: 20px;
      color: #fff;
      cursor: pointer;
    }
  }
  .project-aside .el-menu {
    border-right: 1px solid rgb(40, 47, 47);
    width: 200px;
  }
  .author {
    position: fixed;
    width: 35px;
    height: 35px;
    line-height: 17px;
    background-color: #33cde5;
    right: 20px;
    bottom: 20px;
    padding: 5px;
    color: #fff;
    box-shadow: 0 6px 12px 0 rgba(0,0,0,.15);
    text-align: center;
    cursor: pointer;
    border-radius: 5px;
    font-size: 14px;
    &:hover {
      &+.author-desc {
        display: block;
      }
    }
  }
  .author-desc {
    display: none;
    position: fixed;
    right: 70px;
    bottom: 20px;
    padding: 15px;
    background: #fff;
    max-width: 200px;
    box-shadow: 0 6px 12px 0 rgba(0,0,0,.15);
    border-radius: 5px;
    line-height: 22px;
    font-size: 14px;
  }
}
</style>
