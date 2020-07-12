<template>
  <header class="row title-b">
    <div class="logo col-lg-1 col-lg-offset-1">
      <title-logo></title-logo>
    </div>
    <div class="tabs col-lg-3">
      <title-tabs :tabsList="tabsArr"></title-tabs>
    </div>
    <div class="input col-lg-4 col-lg-offset-3">
      <title-input-b></title-input-b>
    </div>
  </header>
</template>
<script>
import TitleLogo from "./TitleLogo";
import TitleTabs from "./TitleTabs";
import TitleInputB from "./TitleInputB";

export default {
  components: {
    TitleLogo,
    TitleTabs,
    TitleInputB
  },
  data() {
    return {
      tabsArr: [
        {
          name: "推荐",
          path: "/"
        },
        {
          name: "关注",
          path: "/follow"
        },
        {
          name: "热榜",
          path: "/hot"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
</style>