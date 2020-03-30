// 导入样式文件
import './index.scss'
import './iconfont/iconfont.css'
import $ from 'jquery'

const ANIMATE_SPEED = 500 // 动画速度
const DANGER_COLOR = '#F56C6C' // 危险颜色
const SUCCESS_COLOR = '#67C23A'

const INITIAL_X = 5 // 拼图初始化左边距

// jquery抖动
$.fn.shake = function(
  intShakes /*Amount of shakes*/,
  intDistance /*Shake distance*/,
  intDuration /*Time duration*/
) {
  this.each(function() {
    var jqNode = $(this)
    jqNode.css({ position: 'relative' })
    for (var x = 1; x <= intShakes; x++) {
      jqNode
        .animate({ left: intDistance * -1 }, intDuration / intShakes / 4)
        .animate({ left: intDistance }, intDuration / intShakes / 2)
        .animate({ left: 0 }, intDuration / intShakes / 4)
    }
  })
  return this
}

// 核心 oop对象
class sliderCheck {
  constructor(options, el) {
    this.onSuccess = options.onSuccess // 成功回调
    this.onRefresh = options.onRefresh // 刷新回调
    this.onFail = options.onFail // 失败回调
    this.dataUrl = options.dataUrl // ajax请求
    this.submitUrl = options.submitUrl
    this.el = $(el) // 目标元素
  }

  init(callback) {
    $.ajax({
      method: 'GET',
      url: this.dataUrl,
      success: data => {
        this.data = data
        if (!callback) {
          this.initDOM()
          this.initCanvas()
          this.display()
          this.bindEvent()
        } else {
          callback()
        }
      }
    })
  }
  // 初始化DOM结构
  initDOM() {
    const validWraper = $('<div>', {
      class: 'valid-wraper'
    }).css('width', this.data.w + 20 + 'px') // 20为padding
    // 创建画布容器
    const canvasContainer = $('<div>', {
      class: 'canvas-container'
    })
    // 创建画布
    const canvas = $('<canvas>', {
      class: 'canvas'
    })
    // 创建滑块容器
    const sliderContainer = $('<div>', {
      class: 'sliderContainer'
    })
    // 创建滑块
    const slider = $('<div>', {
      class: 'slider'
    })
    // 创建滑块文字
    const sliderText = $('<span>', {
      class: 'iconfont icongengduo'
    })
    // 创建滑块遮罩
    const mask = $('<div>', {
      class: 'mask'
    })
    // 创建提示文字(滑动条内部)
    const text = $('<div>', {
      class: 'text'
    })
    text.text('拖动滑块完成拼图')
    // 创建验证失败文字
    const canvasText = $('<div>', {
      class: 'canvas-text'
    })
    // 创建工作栏
    const actionBar = $('<div>', {
      class: 'action-bar'
    })
    // 创建关闭验证按钮
    const close = $('<span>', {
      class: 'action-bar-item iconfont iconicon-test1'
    })
    const refresh = $('<span>', {
      class: 'action-bar-item iconfont iconicon-test'
    })
    const question = $('<span>', {
      class: 'action-bar-item iconfont iconicon-test2'
    })
    // 创建裁剪块
    const block = $('<img>', {
      class: 'block'
    })
    // 合并到oop实例
    Object.assign(this, {
      validWraper,
      canvasContainer,
      canvas,
      sliderContainer,
      slider,
      mask,
      block,
      text,
      canvasText,
      sliderText,
      actionBar,
      close,
      refresh,
      question
    })
  }
  // 初始化画布
  initCanvas() {
    const { w, h } = this.data
    // 设置画布长度
    this.canvas.attr({ width: w, height: h })
    this.canvas.css({ width: w + 'px', height: h + 'px' })
    this.canvasContainer.css({ width: w + 'px', height: h + 'px' })
    this.sliderContainer.css({ width: w + 'px' })
    // 上下文
    const ctx = this.canvas.get(0).getContext('2d')
    // 计算裁剪量
    const _CutX = Math.floor(w / 10)
    const _CutY = Math.floor(h / 2)
    const img = $('<img>', {
      src: this.data.image
    })
    // 添加加载事件
    img.on('load', () => {
      const a = this.data.a
      // 开始绘制
      for (let i = 0; i < a.length; i++) {
        let x, y
        // 横坐标
        x = a[i] > 9 ? (a[i] - 10) * _CutX : a[i] * _CutX
        // 纵坐标
        y = a[i] > 9 ? _CutY : 0
        let xx, yy
        // 横坐标
        xx = i > 9 ? (i - 10) * _CutX : i * _CutX
        // 纵坐标
        yy = i > 9 ? _CutY : 0
        ctx.drawImage(img.get(0), xx, yy, _CutX, _CutY, x, y, _CutX, _CutY)
      }
    })
    this.slider.css({ transform: `translateX(${INITIAL_X}px)` })
    this.block
      .attr({ src: this.data.slice })
      .css({ transform: `translateX(${INITIAL_X}px)`, top: this.data.posY })
  }

  // 展示DOM到页面上
  display() {
    this.slider.append(this.sliderText)
    this.canvasContainer.append(this.canvas)
    this.canvasContainer.append(this.block)
    this.canvasContainer.append(this.canvasText)
    this.sliderContainer.append(this.slider)
    this.sliderContainer.append(this.text)
    // 创建tooltip
    const tooltip = $('<div>', {
      class: 'tooltip'
    })
    this.close.append(`<div class='tooltip'>关闭验证</div>`)
    this.refresh.append(`<div class='tooltip'>刷新</div>`)
    this.question.append(`<div class='tooltip'>帮助反馈</div>`)
    this.actionBar.append(this.close)
    this.actionBar.append(this.refresh)
    this.actionBar.append(this.question)
    this.validWraper.append(this.canvasContainer)
    this.validWraper.append(this.sliderContainer)
    this.validWraper.append(this.actionBar)

    this.el.append(this.validWraper)
  }

  showCanvasText(text, isSuccess) {
    this.canvasText.text(text)
    this.canvasText.css({
      background: isSuccess ? SUCCESS_COLOR : DANGER_COLOR
    })
    this.canvasText.animate({ bottom: 0 }, ANIMATE_SPEED)
    setTimeout(() => {
      this.canvasText.animate({ bottom: '-20px' }, ANIMATE_SPEED)
    }, 1000)
  }

  // 绑定相关事件
  bindEvent() {
    this.el.on('selectstart', () => false)
    this.close.on('click', () => {
      this.validWraper.fadeOut('normal')
    })
    this.refresh.on('click', () => {
      this.init(this.initCanvas.bind(this))
    })
    let originX,
      originY,
      isTouch = false
    const dragStart = e => {
      // 记录鼠标移动元素位置
      originX = e.clientX || e.touches[0].clientX
      originY = e.clientY || e.touches[0].clientY
      isTouch = true
      // 文字渐渐消失
      this.text.fadeOut('normal')
      // 滑块文字切换样式改变
      this.sliderText.toggleClass('icongengduo iconmoduanzuoyouzhankai_o')
    }
    const dragMove = e => {
      if (!isTouch) return
      // 记录鼠标移动位置
      const eventX = e.clientX || e.touches[0].clientX
      const eventY = e.clientY || e.touches[0].clientY
      // 计算移动距离
      const moveX = eventX - originX
      const moveY = eventY - originY
      // 如果移动距离X小于0? 或者加38 >= w ? 直接退出
      if (moveX < INITIAL_X || moveX + 40 >= this.data.w) return false
      this.slider.css({ transform: `translateX(${moveX}px)` })
      this.block.css({ transform: `translateX(${moveX}px)` })
      // this.block.css({ left: moveX + 'px' })
      this.sliderContainer.addClass('sliderContainer_active')
      // 滑块容器的遮罩显示 蓝色的那一块
      this.mask.css({ width: moveX + 'px' })
    }
    const dragEnd = async e => {
      if (!isTouch) return
      isTouch = false
      // 记录结束时鼠标x距离
      const eventX = e.clientX || e.changedTouches[0].clientX
      this.sliderContainer.removeClass('sliderContainer_active')
      this.sliderText.toggleClass('icongengduo iconmoduanzuoyouzhankai_o')
      $.ajax({
        method: 'GET',
        url: this.submitUrl,
        data: {
          posX: eventX - originX
        },
        success: data => {
          if (data.success) {
            this.showCanvasText('验证通过', true)
            this.validWraper.fadeOut()
            this.onSuccess && this.onSuccess()
          } else {
            this.showCanvasText('请正确拼合图像', false)
            this.validWraper.shake(2, 10, 400) // 窗口抖动
            this.text.fadeIn('normal') // 重现提示文字
            // 给slider block 加上transition 属性
            this.slider.css({ transform: `translateX(${INITIAL_X}px)` }) // 重置滚动条
            this.block.css({ transform: `translateX(${INITIAL_X}px)` }) // 重置滑块
            this.onFail && this.onFail()
          }
        },
        error:()=>{ 
          this.showCanvasText('网络错误', false)
          this.slider.css({ transform: `translateX(${INITIAL_X}px)` }) // 重置滚动条
          this.block.css({ transform: `translateX(${INITIAL_X}px)` }) // 重置滑块
        }
      })
    }
    this.slider.on('mousedown', dragStart)
    this.slider.on('touchstart', dragStart)
    document.addEventListener('mousemove', dragMove)
    document.addEventListener('touchmove', dragMove)
    document.addEventListener('mouseup', dragEnd)
    document.addEventListener('touchend', dragEnd)
  }
}

export default function(opt, el) {
  new sliderCheck(opt, el).init()
}
