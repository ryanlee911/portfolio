<template>
  <div id="app">
    <SiteHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import SiteHeader from './components/Header.vue'

export default {
  name: 'App',
  components: {
    SiteHeader
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.6;
  color: #333;
}

#app {
  min-height: 100vh;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
