<template>
  <div class="sr-container">
    <div class="section-recommond">
      <div class="section-recommond-title">
        相关推荐
      </div>
      <div class="section-recommond-more">更多 <img :src="iconMoreSvg" /></div>

      <div class="section-recommond-list">
        <div class="section-recommond-list-headiness">
          <div class="section-recommond-list-headiness-cover">
            <img src="https://picsum.photos/id/1/500/266" />
          </div>
          <div class="section-recommond-list-headiness-meta">
            <div class="section-recommond-list-headiness-meta-date"></div>
            <div class="section-recommond-list-headiness-meta-content"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import iconMoreSvg from "./images/icon_more.svg";
export default {
  data() {
    return {
      iconMoreSvg,
    };
  },
};
</script>

<style lang="scss">
.sr-container {
  display: flex;
  padding: 90px 0 100px 0;
}
.section-recommond {
  width: 1200px;
  margin: 0 auto;
  position: relative;
  &-title {
    font-size: 36px;
    font-family: PingFang SC;
    font-weight: bold;
    line-height: 50px;
    color: #1b232e;
    height: 50px;
  }

  &-more {
    position: absolute;
    right: 8px;
    top: 20px;
    height: 22px;
    cursor: pointer;
    color: #83868b;
    display: flex;
    align-items: center;
    img {
      height: 8px;
      margin-left: 9px;
    }
  }

  &-list {
    margin-top: 28px;
    &-headiness {
      width: 500px;
      height: 346px;
      overflow: hidden;
      border-radius: 6px;
      &-cover {
        height: 266px;
        img {
          width: 500px;
          height: 266px;
        }
      }
      &-meta {
        height: 80px;
        display: flex;
      }
    }
  }
}
</style>
