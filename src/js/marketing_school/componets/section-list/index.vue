<template>
  <div class="sl-container">
    <div class="section-list">
      <div class="section-list-search">
        <input placeholder="输入关键词搜索" class="section-list-search-input" />
        <img class="section-list-search-icon" :src="searchIcon" />
      </div>

      <div class="section-list-item">
        <div class="section-list-item-cover">
          <img src="https://picsum.photos/id/1/380/200" />
        </div>
        <div class="section-list-item-title">
          金融财经直播成趋势，欢拓解决方案受关注
        </div>
        <div class="section-list-item-desc">
          随着经济的发展，越来越多的人投入到投资大军当中，让钱生钱。同时随着金融财经行业的发展，财经行业…
        </div>
        <div class="section-list-item-tabs">
          <div class="section-list-item-tabs-item">视频防盗录</div>
          <div class="section-list-item-tabs-item">互动直播</div>
          <div class="section-list-item-tabs-item">财经直播</div>
        </div>
        <div class="section-list-item-meta">
          <div class="section-list-item-meta-author">小微 · 2021-05-25</div>
          <div class="section-list-item-meta-scan">
            <img :src="scanIcon" />2684
          </div>
        </div>
      </div>
    </div>

    <Pagination v-bind="paginationProps" class="section-pagination" />
  </div>
</template>

<script>
import searchIcon from "./images/icon_search.svg";
import scanIcon from "./images/icon_scan.svg";
import Pagination from "../common/pagination";
export default {
  name: "section-list",
  data() {
    return {
      searchIcon,
      scanIcon,
    };
  },
  computed: {
    paginationProps() {
      return {
        current: 1,
        pagerConut: 5,
        total : 100,
        size : 6
      };
    },
  },
  components: {
    Pagination,
  },
};
</script>

<style lang="scss">
.sl-container {
  padding: 40px 0 166px 0;
  background: linear-gradient(317deg, #f2f4f6 0%, #fdf9f9 100%);
  position: relative;
}
.section-list {
  width: 1180px;
  margin: 0 auto;
  position: relative;
  padding-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  &-search {
    width: 380px;
    background: #ffffff;
    border: 1px solid #c3c8ce;
    border-radius: 6px;
    box-sizing: border-box;
    position: relative;
    height: 40px;
    position: absolute;
    right: 0;
    top: 0;
    &-input {
      position: absolute;
      left: 0;
      width: 300px;
      padding-left: 13px;
      top: 0;
      height: 35px;
      display: block;
      border: none;
      outline: none;
      border-radius: 6px;
    }
    &-icon {
      position: absolute;
      right: 15px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
    }
  }

  &-item {
    margin-top: 30px;
    height: 430px;
    width: 380px;
    background: #fff;
    border-radius: 6px;
    overflow: hidden;
    cursor: pointer;

    &:hover {
      box-shadow: 0px 10px 30px rgba(84, 90, 98, 0.3);
    }

    &-cover {
      height: 200px;
      overflow: hidden;
      img {
        height: 200px;
        width: 380px;
      }
    }

    &-title {
      margin-top: 20px;
      padding: 0 20px;
      box-sizing: border-box;
      font-size: 18px;
      font-weight: bold;
      line-height: 25px;
      color: #1b232e;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-family: PingFang SC;
    }

    &-desc {
      margin-top: 20px;
      padding: 0 20px;
      box-sizing: border-box;
      font-size: 14px;
      font-family: PingFang SC;
      font-weight: 400;
      line-height: 21px;
      height: 42px;
      color: #60646a;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    &-tabs {
      margin-top: 38px;
      display: flex;
      padding: 0 20px;
      box-sizing: border-box;
      &-item {
        height: 24px;
        opacity: 1;
        border-radius: 4px;
        font-size: 12px;
        font-family: PingFang SC;
        font-weight: 400;
        line-height: 24px;
        color: #1b232e;
        background: #edeef1;
        padding: 0 8px;
        margin-right: 8px;
      }
    }

    &-meta {
      padding: 0 20px;
      margin-top: 15px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      &-author,
      &-scan {
        color: #60646a;
      }
      &-scan {
        img {
          margin-right: 4px;
        }
      }
    }
  }
}

.section-pagination {
  position: absolute;
  left : 50%;
  transform: translateX(-50%);
  bottom: 80px;
}
</style>
