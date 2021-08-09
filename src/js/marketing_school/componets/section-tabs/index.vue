<template>
  <div class="st-containter">
    <div class="section-tabs">
      <div class="section-tabs-item" v-for="(item, index) in tabs" :key="index">
        <img class="section-tabs-item-icon" :src="item.icon" />
        <img class="section-tabs-item-icon--active" :src="item.activeIcon" />
        <div class="section-tabs-item-text">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import tabbaraIcon1 from "./images/tabbar_icon_1.svg";
import tabbaraIcon2 from "./images/tabbar_icon_2.svg";
import tabbaraIcon3 from "./images/tabbar_icon_3.svg";
import tabbaraIcon4 from "./images/tabbar_icon_4.svg";
import tabbaraIcon5 from "./images/tabbar_icon_5.svg";
import tabbaraIcon6 from "./images/tabbar_icon_6.svg";
import tabbaraIcon7 from "./images/tabbar_icon_7.svg";

import tabbaraActiveIcon1 from "./images/tabbar_icon_1_2.svg";
import tabbaraActiveIcon2 from "./images/tabbar_icon_2_2.svg";
import tabbaraActiveIcon3 from "./images/tabbar_icon_3_2.svg";
import tabbaraActiveIcon4 from "./images/tabbar_icon_4_2.svg";
import tabbaraActiveIcon5 from "./images/tabbar_icon_5_2.svg";
import tabbaraActiveIcon6 from "./images/tabbar_icon_6_2.svg";
import tabbaraActiveIcon7 from "./images/tabbar_icon_7_2.svg";
export default {
  data() {
    return {
      tabs: [
        {
          icon: tabbaraIcon1,
          activeIcon: tabbaraActiveIcon1,
          name: "全部",
        },
        {
          icon: tabbaraIcon2,
          activeIcon: tabbaraActiveIcon2,
          name: "教育直播",
        },
        {
          icon: tabbaraIcon3,
          activeIcon: tabbaraActiveIcon3,
          name: "知识付费",
        },
        {
          icon: tabbaraIcon4,
          activeIcon: tabbaraActiveIcon4,
          name: "企业直播",
        },
        {
          icon: tabbaraIcon5,
          activeIcon: tabbaraActiveIcon5,
          name: "政务直播",
        },
        {
          icon: tabbaraIcon6,
          activeIcon: tabbaraActiveIcon6,
          name: "直播带货",
        },
        {
          icon: tabbaraIcon7,
          activeIcon: tabbaraActiveIcon7,
          name: "微信直播",
        },
      ],
    };
  },
  name: "section-tabs",
};
</script>

<style lang="scss">
.st-container {
  background: #fff;
  box-shadow: 0px 20px 20px rgba(246, 238, 238, 0.3);
  height: 110px;
}
.section-tabs {
  width: 1232px;
  display: flex;
  margin: 0 auto;
  user-select: none;
  &-item {
    flex: 1;
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    &-text {
      font-size: 16px;
      font-family: PingFang SC;
      font-weight: 400;
      line-height: 22px;
      color: #1b232e;
      margin-top: 4px;
      cursor: pointer;
    }
    &-icon--active {
      display: none;
    }
    &.active,
    &:hover {
      background: #05d380;
    }
    &.active > &-text {
      color: #fff;
    }
    &.active > &-icon {
      display: none;
    }
    &.active > &-icon--active {
      display: block;
    }
    &:hover > &-text {
      color: #fff;
    }
    &:hover > &-icon {
      display: none;
    }
    &:hover > &-icon--active {
      display: block;
    }
  }
}
</style>
