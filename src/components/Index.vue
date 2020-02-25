<template>
  <div id="index" v-html="source" />
</template>

<script>
export default {
  name: 'Index',
  components: {

  },
  computed: {
    source: function () {
      return marked("# hello", { sanitize: true })
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
  #index {
    font-family: 'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: calc(10px + 0.33vw);
    -webkit-font-smoothing: antialiased;
    padding: 5vh 10vw;
    color: #121314;
  }
  #index >>> h1 {
    font-size: 4.5em;
    font-weight: 500;
    margin-bottom: 0;
  }
  #index >>> h2 {
    font-weight:500;
    font-size:2.2em;
  }
  #index >>> h2.sub-title {
    margin-top: 1rem;
    font-size: 2.8em;
  }
  #index >>> p {
    font-size: 1.6em;
    font-weight: 300;
    line-height: 1.4;
    max-width: 26em;
  }
  #index >>> a {
    text-decoration: none;
    color: #121314;
    position: relative;
  }
  #index >>> a:after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 60%;
    left: -0.1em;
    right: -0.1em;
    bottom: 0;
    transition: top 200ms cubic-bezier(0, .8, .13, 1);
    background-color: var(--main-color);
  }
  #index >>> a:hover:after {
    top: 0%;
  }
</style>
