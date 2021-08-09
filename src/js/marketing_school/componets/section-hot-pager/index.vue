<template>
  <div class="shp-contaienr">
    <div class="section-hot-pager">
      <div class="section-hot-pager-title">最热文章</div>

      <div class="section-hot-pager-card">
        <div class="section-hot-pager-card-left">
          <img src="https://picsum.photos/id/1000/600/380" />
        </div>
        <div class="section-hot-pager-card-right">
          <div class="section-hot-pager-card-right-new">NEW</div>
          <div class="section-hot-pager-card-right-title ellipsis">
            在线教育直播成趋势，欢拓解决方案受关注！
          </div>
          <div class="section-hot-pager-card-right-desc">
            自从直播出现之后，在线教育又火了。一方面是疫情导致的“停课不停学”，在线教育直播发挥了巨大的作用；另一方面则是因为用户的学习需求也逐渐从线下转移到线上。在线教培机构在直播卖货中大多是出售在线课程，这些教培机构的直播卖货平台是在抖音、快手等短视频平台上进行的。
          </div>

          <div class="section-hot-pager-card-right-meta">
            2020-11-14
            <img :src="iconScanSvg" />
            129
          </div>
        </div>
      </div>

      <div class="section-hot-pager-wrap">
        <div class="section-hot-pager-item">
          <div class="section-hot-pager-item-title ellipsis">
            在线教育直播成趋势，欢拓解决方案受…
          </div>
          <div class="section-hot-pager-item-desc">
            与传统电商相比较，直播电商具有互动性更高
          </div>
          <div class="section-hot-pager-item-meta">
            2020-11-14 <img :src="iconScanBlackSvg" />
            129
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import iconScanSvg from "./images/icon_scan.svg";
import iconScanBlackSvg from "./images/icon_scan_black.svg";
export default {
  name: "section-hot-pager",
  data() {
    return {
      iconScanSvg,
      iconScanBlackSvg,
    };
  },
};
</script>

<style lang="scss">
@import "../../assets/css/mixins.scss";
.shp-contaienr {
  background: #fff;
}

.section-hot-pager {
  width: 1200px;
  padding: 90px 0;
  margin: 0 auto;

  &-title {
    font-size: 36px;
    font-family: PingFang SC;
    font-weight: bold;
    line-height: 50px;
    color: #1b232e;
    height: 50px;
  }

  &-card {
    display: flex;
    margin-top: 28px;
    &-left {
      flex: 1;
    }
    &-right {
      flex: 1;
      background: url(./images/bottom-news.svg) no-repeat;
      background-size: cover;
      position: relative;
      &-new {
        width: 60px;
        height: 32px;
        background: #ffffff;
        opacity: 1;
        border-radius: 6px;
        font-size: 20px;
        font-family: PingFang SC;
        font-weight: bold;
        line-height: 28px;
        text-align: center;
        color: #05d380;
        position: absolute;
        left: 30px;
        top: 50px;
        &::after {
          content: "";
          position: absolute;
          bottom: -13px;
          left: 8px;
          border-style: solid;
          border-width: 7px;
          border-color: #fff transparent transparent transparent;
        }
      }

      &-title {
        font-size: 24px;
        font-family: PingFang SC;
        font-weight: bold;
        line-height: 33px;
        color: #ffffff;
        margin: 118px 30px 0;
      }

      &-desc {
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: 400;
        line-height: 24px;
        color: #ffffff;
        opacity: 0.8;
        margin: 20px 30px 0;
        @include ellipsis(4);
      }

      &-meta {
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: 400;
        line-height: 20px;
        color: #ffffff;
        margin-top: 44px;
        margin-left: 30px;
        display: flex;
        align-items: center;
        img {
          margin-left: 8px;
          margin-right: 6px;
        }
      }
    }
  }

  &-wrap {
    display: flex;
    margin-top: 35px;
    justify-content: space-between;
  }
  &-item {
    width: 380px;
    height: 200px;
    background: #ffffff;
    border: 1px solid #e1e4e9;
    box-sizing: border-box;
    border-radius: 6px;
    padding: 26px 20px;
    position: relative;
    cursor: pointer;

    &:hover {
      box-shadow: 0px 10px 30px rgba(215, 217, 223, 0.2);
    }
    &-title {
      height: 25px;
      font-size: 18px;
      font-family: PingFang SC;
      font-weight: bold;
      line-height: 25px;
      color: #1b232e;
    }

    &-desc {
      margin-top: 10px;
      @include ellipsis(2);
    }

    &-meta {
      position: absolute;
      left: 20px;
      bottom: 26px;
    }
  }
}
</style>
