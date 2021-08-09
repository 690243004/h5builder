<template>
  <div class="sht-container">
    <div class="section-hot-tabs">
      <div class="section-hot-tabs-title">热门标签</div>
      <div class="section-hot-tabs-wrap">
        <div class="section-hot-tabs-item active">教育直播</div>
        <div class="section-hot-tabs-item">互动直播</div>
        <div class="section-hot-tabs-item">电商</div>
        <div class="section-hot-tabs-item">招聘会直播前准备</div>
        <div class="section-hot-tabs-item">教育直播</div>
        <div class="section-hot-tabs-item">互动直播</div>
        <div class="section-hot-tabs-item">电商</div>
        <div class="section-hot-tabs-item">招聘会直播前准备</div>
      </div>
    </div>

    <div class="section-hott-list">
      <el-carousel
        class="section-hott-list-carousel"
        :autoplay="false"
        height="374px"
        arrow="always"
      >
        <el-carousel-item
          v-for="item in 3"
          :key="item"
          class="section-hott-list-carousel-item"
        >
          <div class="section-hott-list-item">
            <div class="section-hott-list-item-cover">
              <img src="https://picsum.photos/id/1000/330/174" />
            </div>

            <div class="section-hott-list-item-tags">
              <div class="section-hott-list-item-tags-item">视频防盗录</div>
              <div class="section-hott-list-item-tags-item">互动直播</div>
              <div class="section-hott-list-item-tags-item active">热门</div>
            </div>

            <div class="section-hott-list-item-title ellipsis">
              带着三个问题去做电商直播
            </div>
            <div class="section-hott-list-item-desc">
              随着经济的发展，越来越多的人投入到投资大军当中，让钱生钱。同时随着金融财经行业…
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
      <div class="section-hott-list-carousel-interceptors">
        <div class="section-hott-list-carousel-interceptors-item active"></div>
        <div class="section-hott-list-carousel-interceptors-item"></div>
        <div class="section-hott-list-carousel-interceptors-item"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "section-hot-tabs",
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/mixins.scss";
.sht-container {
  background: #f2f4f6;
  padding: 40px 0 0;

  .section-hot-tabs {
    width: 1200px;
    margin: 0 auto;

    &-title {
      font-size: 36px;
      font-family: PingFang SC;
      font-weight: bold;
      line-height: 50px;
      color: #1b232e;
    }

    &-wrap {
      display: flex;
      justify-content: space-between;
      margin-top: 28px;
      flex-wrap: wrap;
    }

    &-item {
      width: 140px;
      height: 60px;
      background: #ffffff;
      box-shadow: 0px 2px 20px rgba(172, 177, 183, 0.26);
      opacity: 1;
      border-radius: 4px;
      text-align: center;
      line-height: 60px;
      font-size: 14px;
      font-family: PingFang SC;
      color: #1b232e;
      margin-top: 12px;
      cursor: pointer;
      &.active {
        background: #05d380;
        color: #fff;
      }
      &:hover {
        color: #05d380;
      }
    }
  }

  .section-hott-list {
    background: #1b232e;
    height: 550px;
    margin-top: 38px;
    padding-top: 70px;
    box-sizing: border-box;
    &-carousel {
      width: 1200px;
      margin: 0 auto;
      &-item {
        padding: 0 74px;
        display: flex;
        box-sizing: border-box;
      }
      &-interceptors {
        margin-top: 40px;
        text-align: center;
        font-size: 0;
        &-item {
          display: inline-block;
          width: 16px;
          height: 16px;
          margin-right: 30px;
          background:rgba($color: #ffffff, $alpha: .4);
          border-radius: 50%;
          &:last-child { 
            margin-right: 0;
          }
          &.active {
            background: #05d380;
          }
        }
      }
    }

    &-item {
      height: 374px;
      width: 330px;
      border-radius: 6px;
      overflow: hidden;
      background: #fff;
      &-cover {
        width: 330px;
        height: 174px;
        user-select: none;
        img {
          width: 330px;
          height: 174px;
        }
      }

      &-tags {
        margin-top: 20px;
        padding: 0 20px;
        display: flex;
        &-item {
          background: #edeef1;
          font-size: 12px;
          font-family: PingFang SC;
          font-weight: 400;
          line-height: 17px;
          color: #1b232e;
          padding: 2px 8px;
          border-radius: 4px;
          box-sizing: border-box;
          margin-right: 10px;
          &.active {
            color: #05d380;
            background: #fff;
            border: 1px solid #05d380;
          }
        }
      }

      &-title {
        font-size: 18px;
        font-family: PingFang SC;
        font-weight: bold;
        line-height: 25px;
        color: #1b232e;
        padding: 0 20px;
        margin-top: 21px;
      }

      &-desc {
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: 400;
        line-height: 22px;
        color: #60646a;
        padding: 0 20px;
        margin-top: 10px;
        @include ellipsis(2);
      }
    }
  }
}
</style>
<style lang="scss">
.el-carousel__arrow {
  border: 1px solid #acb1b7 !important;
  color: #acb1b7 !important;
  width: 44px !important;
  height: 44px !important;
  font-size: 16px !important;

  &--left { 
    left : 0 !important;
  }

  &--right { 
    right: 0 !important;
  }
}
.el-carousel__indicators {
  display: none !important;
}
</style>
