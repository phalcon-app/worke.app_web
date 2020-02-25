<template>
  <div id="app" :style="cssVariales">
    <Index/>
  </div>
</template>

<script>
import Index from './components/Index'

export default {
  name: 'App',
  components: {
    Index
  },
  computed: {
    cssVariales() {
      return {
        '--main-color': this.$config.mainColor
      }
    }
  }
}
</script>

<style></style>
