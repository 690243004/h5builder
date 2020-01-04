module.exports = {
  plugins: {
    'autoprefixer': {
      browsers: '> 5%'
    },
    'postcss-pxtorem': {
      //结果为：设计稿元素尺寸/16，比如元素宽320px,最终页面会换算成 20rem
      rootValue: 16,
      propList: ['*']
    }
  }
}