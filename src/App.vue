<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <Global/>
  </div>
</template>

<script>
import Global from "@/components/page/Global";
export default {
  name: "App",
  components: {
    Global
  }
};
</script>

<style>
html {
  width: 100%;
  height: 100%;
}
body {
  width: 100%;
  height: 100%;
  /* line-height: 100%; */
  background: #f4f4f4;
}
/* #app {
  width: 100%;
  height: 100%;
} */
</style>
