<template>
  <div class="app">
    <SectionTabs />
    <SectionList />
    <SectionHotPager />
    <SectionHotTabs />
    <SectionRecommond />
  </div>
</template>

<script>
import SectionTabs from "./componets/section-tabs";
import SectionList from './componets/section-list'
import SectionHotPager from './componets/section-hot-pager'
import SectionHotTabs from './componets/section-hot-tabs'
import SectionRecommond from './componets/section-recommond'
export default {
  components: {
    SectionTabs,
    SectionList,
    SectionHotPager,
    SectionHotTabs,
    SectionRecommond
  },
};
</script>

<style lang="scss"></style>
