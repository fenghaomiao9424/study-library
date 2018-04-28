// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-url": {},
    "postcss-aspect-ratio-mini": {},
    "postcss-write-svg": {
      utf8: false
    },
    "postcss-cssnext": {},
    // "postcss-px-to-viewport": {
    //   viewportWidth: 750,    // 视窗的宽度
    //   viewportHeight: 1334,  // 视窗的高度
    //   unitPrecision: 3,      //  指定‘px’转换为视窗单位值的小数位数
    //   viewportUnit: "vw",   // 需要转换的单位
    //   selectorBlackList: [".ignore", ".hairlines"],  // 指定不转换为视窗单位的类
    //   minPixelValue: 1,   // 最小视窗单位
    //   mediaQuery: false   // 允许在媒体查询中转换‘px’
    // },
    "postcss-viewport-units": {},
    cssnano: {
      preset: "advanced",
      autoprefixer: false,
      "postcss-zindex": false
    }
  }
};
