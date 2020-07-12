<template>
  <header class="row title-a">
    <div class="logo col-lg-1 col-lg-offset-1">
      <title-logo></title-logo>
    </div>
    <div class="tabs col-lg-3">
      <title-tabs :tabsList="tabsArr"></title-tabs>
    </div>
    <div class="input col-lg-4">
      <title-input></title-input>
    </div>
    <div class="login col-lg-2">
      <title-login></title-login>
    </div>
  </header>
</template>
<script>
import TitleLogo from "./TitleLogo";
import TitleTabs from "./TitleTabs";
import TitleInput from "./TitleInput";
import TitleLogin from "./TitleLogin";

export default {
  components: {
    TitleLogo,
    TitleTabs,
    TitleInput,
    TitleLogin
  },
  data() {
    return {
      tabsArr: [
        { path: "/", name: "首页" },
        { path: "/f", name: "发现" },
        { path: "/d", name: "等你来答" }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
</style>