// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.mixin({
  computed: {
    $config: function () {
      return {
        pageName: 'Worke.app',
        mainColor: 'rgba(24, 30, 34, 0.25)',
      }
    }
  },
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
