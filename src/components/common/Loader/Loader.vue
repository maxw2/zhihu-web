<template>
    <div class="loader">
        <code-loader></code-loader>
    </div>
</template>
<script>
import { CodeLoader } from "vue-content-loader";

export default {
  components: {
    CodeLoader
  }
};
</script>
<style lang="scss" scoped>
.loader {
  width: 80%;
  padding: 20px;
}
</style>