<template>
  <div id="app">
    <Title></Title>
    <router-view></router-view>
  </div>
</template>

<script>
import Title from "./components/Title/Title";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  name: "App",
  components: {
    Title
  }
};
</script>

<style lang='scss'>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #f6f6f6;
  a {
    // display: inline-block;
    // padding: 19px 0;
    text-decoration: none;
    // color: #8590a6;
  }
  a:hover {
    text-decoration: none;
  }
  .boxShadow{
    box-shadow: 0 1px 3px rgba(26,26,26,.1)
  }
  .container{
    padding: 0px;
  }
}
</style>
