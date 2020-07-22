<template>
  <div id="main-container">
    <the-header></the-header>
    <Nuxt style="max-width: 1024px;" />
    <the-footer></the-footer>
  </div>
</template>
<script>
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";

export default {
  components: {
    TheHeader,
    TheFooter
  }
};
</script>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

#main-container {
  min-height: 100vh;
  position: relative;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
