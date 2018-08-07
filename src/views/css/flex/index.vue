<template>
  <div class="page-flex">
    <p>flex布局</p>
    <el-tabs type="border-card">
      <el-tab-pane label="注意内容">
        <h4>1.设为Flex布局以后，子元素的float、clear和vertical-align属性将失效</h4>
        <h4>2.有以下六个属性设置在属性上</h4>
          <p>1.flex-direction(flex-direction属性决定主轴的方向（即项目的排列方向): row | row-reverse | column | column-reverse</p>
          <p>2.flex-wrap(flex-wrap属性定义，如果一条轴线排不下，如何换行): nowrap(默认) | wrap | wrap-reverse</p>
          <p>3.flex-flow(flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap): flex-direction || flex-wrap</p>
          <p>4.justify-content(justify-content属性定义了项目在主轴上的对齐方式): flex-start | flex-end | center | space-between | space-around</p>
          <p>5.align-items(align-items属性定义项目在交叉轴上如何对齐): flex-start | flex-end | center | baseline | stretch</p>
          <p>6.align-content(align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用): flex-start | flex-end | center | space-between | space-around | stretch</p>
        <h4>3.以下六个属性设置在项目属性上</h4>
          <p>1.order(order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0): integer</p>
          <p>2.flex-grow(flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大): number</p>
          <p>3.flex-shrink(flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小): number</p>
          <p>4.flex-basis(flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小): length | auto</p>
          <p>5.flex(flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选)</p>
          <p>6.align-self(align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性): auto | flex-start | flex-end | center | baseline | stretch</p>
      </el-tab-pane>
      <el-tab-pane label="实例">
        <h4>1.放大缩小屏幕查看效果</h4>
        <div class="content">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h4>2.左侧宽度固定，右边自适应</h4>
        <div class="content2">
          <div class="left"></div>
          <div class="right"></div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  name: 'page-flex',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
.page-flex {
  .content {
    display: flex;
    flex-flow: row wrap;
    div {
      height: 300px;
      background-color: rgb(51, 205, 229);
      margin: 20px;
      flex: 1 0 auto;
      min-width: 300px;
    }
  }
  .content2 {
    display: flex;
    .left {
      flex: 0 0 250px;
      height: 300px;
      background-color: #282f2f;
    }
    .right {
      flex: 1 1 auto;
      height: 300px;
      background-color: rgb(51, 205, 229);
    }
  }
}
</style>
