import '@s/assets/style/test.scss'
import $ from 'jquery'
import { transformSerializeArray } from '@s/js/utils/util'

import SliderCheck from '@s/lib/SliderCheck'

const VALID_OPTION = {
  dataUrl: 'https://www.zdxhyangyan.cn/offset/api/getValid', // 图片地址 默认get方法
  submitUrl: '/api/checkX', // 提交地址
  onSuccess: function() {
    // 成功回调
  },
  onFail: function() {
    // 失败回调
  },
  onRefresh: function() {
    // 刷新回调
  }
}

;(function() {
  let isLogin = false
  const DOM = {
    signInForm: $('#js-signin-form'),
    subBtn: $('#sub-btn'),
    inputPhone: $('#input-phone'),
    inputPassword: $('#input-password'),
    fieldPhone: $('.input-field')[0],
    fieldPassword: $('.input-field')[1],
    phoneExplain: $('#input-phone').siblings('.form-explain'),
    passwordExplain: $('#input-password').siblings('.form-explain')
  }

  function main() {
    console.log(DOM)
    EventHandler()
  }

  // V层
  const UIRender = (function() {
    const showExplaion = function(target, message) {
      target.parent().addClass('has-error')
      target.text(message)
    }
    const toggleError = function(target) {
      target.parent().removeClass('has-error')
    }

    return {
      showExplaion,
      toggleError
    }
  })()

  // C层
  const EventHandler = function() {
    const { signInForm, subBtn } = DOM
    // 点击登录事件
    subBtn.on('click', e => {
      if (isLogin) return
      isLogin = true
      SliderCheck(VALID_OPTION, document.getElementById('el'))
      $('#el').fadeIn()
      e.preventDefault()
      UIRender.toggleError(DOM.phoneExplain)
      UIRender.toggleError(DOM.passwordExplain)
      const result = transformSerializeArray(signInForm.serializeArray())
      // 检查
      if (result['phone'] === '') {
        return UIRender.showExplaion(DOM.phoneExplain, '手机号不能为空')
      }
      if (!/1\d{10}/.test(result['phone'])) {
        return UIRender.showExplaion(
          DOM.phoneExplain,
          '请输入正确的手机号码格式'
        )
      }
      if (result['password'] === '') {
        return UIRender.showExplaion(DOM.passwordExplain, '密码不能为空')
      }
    })
  }
  main()
})()
