<template>
  <div class="page-grandient">
    <p class="margin-bottom-20">渐变</p>
    <el-tabs type="border-card">
      <el-tab-pane label="线性渐变">
        <p class="message-tip">默认方向从上到下, left与to left方向相反</p>
        <p class="margin-10">左右渐变：值为left或right</p>
        <div class="content">
          <div class="div-grandient left"></div>
          <el-tooltip class="item" effect="dark" content="background: linear-gradient(left, #33cde5, #282F2F);" placement="right">
            <el-button>查看代码</el-button>
          </el-tooltip>
        </div>
        <p class="margin-10">上下渐变: 值为top或bottom</p>
        <div class="content">
          <div class="div-grandient top"></div>
          <el-tooltip class="item" effect="dark" content="background: linear-gradient(top, #33cde5, #282F2F);" placement="right">
            <el-button>查看代码</el-button>
          </el-tooltip>
        </div>
        <p class="margin-10">对角渐变(高度太小，效果不明显):定义方向(to bottom、to top、to right、to left、to bottom right，等等)</p>
        <div class="content">
          <div class="div-grandient diagonal"></div>
          <el-tooltip class="item" effect="dark" content="background: linear-gradient(top left, #33cde5, #282F2F);" placement="right">
            <el-button>查看代码</el-button>
          </el-tooltip>
        </div>
        <p class="margin-10">角度渐变:0deg 将创建一个从下到上的渐变，90deg 将创建一个从左到右的渐变(顺时针)</p>
        <div class="content">
          <div class="div-grandient deg"></div>
          <el-tooltip class="item" effect="dark" content="background: linear-gradient(0deg, #33cde5, #282F2F);" placement="right">
            <el-button>查看代码</el-button>
          </el-tooltip>
        </div>
        <p class="margin-10">彩虹渐变</p>
        <div class="content">
          <div class="div-grandient rainbow"></div>
          <el-tooltip class="item" effect="dark" content="background: linear-gradient(left, #ff5809, #ff9224, #ffd306, #9aff02, #5cadad, #b766ad);" placement="right">
            <el-button>查看代码</el-button>
          </el-tooltip>
        </div>
        <p class="margin-10">透明度渐变：色值使用rgba</p>
        <div class="content">
          <div class="div-grandient opacity"></div>
          <el-tooltip class="item" effect="dark" content="background: linear-gradient(left, rgba(51, 205, 229, 0), rgba(51, 205, 229, 1));" placement="right">
            <el-button>查看代码</el-button>
          </el-tooltip>
        </div>
        <p class="margin-10">重复渐变</p>
        <div class="content">
          <div class="div-grandient repeat"></div>
          <el-tooltip class="item" effect="dark" content="background: repeating-linear-gradient(left, #ffd306, #33cde5 10%, ##282F2F 20%);" placement="right">
            <el-button>查看代码</el-button>
          </el-tooltip>
        </div>
      </el-tab-pane>
      <el-tab-pane label="径向渐变">
        <p class="message-tip">background: radial-gradient(center, shape size, start-color, ..., last-color); 至少定义两种颜色</p>
        <p class="margin-10">颜色节点分布均匀（默认）</p>
        <div class="content radial">
          <div class="div-radial-grandient radial-math"></div>
          <el-tooltip class="item" effect="dark" content="background: radial-gradient(#33cde5, #282F2F)" placement="right">
            <el-button>查看代码</el-button>
          </el-tooltip>
        </div>
        <p class="margin-10">颜色节点分布不均匀</p>
        <div class="content radial">
          <div class="div-radial-grandient radial-unmath"></div>
          <el-tooltip class="item" effect="dark" content="background: radial-gradient(#ffd306 10%, #33cde5 20%, #282F2F 50%)" placement="right">
            <el-button>查看代码</el-button>
          </el-tooltip>
        </div>
        <p class="margin-10">不同形状：shape参数，值为circle 或 ellipse</p>
        <div class="content radial">
          <div class="div-radial-grandient radial-shape"></div>
          <el-tooltip class="item" effect="dark" content="background: radial-gradient(#ffd306 10%, #33cde5 20%, #282F2F 50%)" placement="right">
            <el-button>查看代码</el-button>
          </el-tooltip>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  name: 'page-grandient',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style lang="less">
@color-to: #282F2F;
@color-from: #33cde5;
.page-grandient {
  p.margin-10 {
    font-size: 14px;
  }
  .content:after {
    content: '';
    display: table;
    clear: both;
  }
  .content {
    line-height: 50px;
    &.radial {
      line-height: 100px;
    }
  }
  .div-grandient {
    height: 50px;
    width: 50%;
    border-radius: 5px;
    float: left;
    &.left {
      background: linear-gradient(to left, @color-from, @color-to);
    }
    &.top {
      background: linear-gradient(to top, @color-from, @color-to);
    }
    &.diagonal {
      background: linear-gradient(top left, @color-from, @color-to);
    }
    &.deg {
      background: linear-gradient(0deg, @color-from, @color-to);
    }
    &.rainbow {
      background: -webkit-linear-gradient(left, #ff5809, #ff9224, #ffd306, #9aff02, #5cadad, #b766ad);
    }
    &.opacity {
      background: linear-gradient(left, rgba(51, 205, 229, 0), rgba(51, 205, 229, 1));
    }
    &.repeat {
      background: -webkit-repeating-linear-gradient(left, #ffd306, @color-from 10%, @color-to 20%);
    }
  }
  .div-radial-grandient {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    float: left;
    &.radial-math {
      background: radial-gradient(@color-from, @color-to);
    }
    &.radial-unmath {
      background: radial-gradient(#ffd306 10%, @color-from 20%, @color-to 50%);
    }
    &.radial-shape {
      background: radial-gradient(ellipse closest-side, @color-from, @color-to);
    }
  }
}
</style>
