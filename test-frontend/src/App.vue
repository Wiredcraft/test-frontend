<template>
  <div id="app">
    <Header></Header>
    <Main></Main>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'

export default {
  name: 'app',
  components: {
    Header, Main
  },
  data() {
      return {

      }
  },
}
</script>

<style lang="scss">
    @import "assets/scss/app.scss";
</style>