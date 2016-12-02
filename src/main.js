// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import http from './plugins/http'

/* eslint-disable no-undef */
window.$ = window.jQuery = require('jquery')
require('slick-carousel')

Vue.use(http)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
});
