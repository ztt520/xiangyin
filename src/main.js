import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'


Vue.use(vueResource);
Vue.config.productionTip = false
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
import './assets/css/base.css';
Vue.use(MintUi);
import {
  Datetime,
  Group
} from 'vux'
Vue.component(Datetime.name, Datetime);
Vue.component(Group.name, Group);
import {
  XAddress
} from 'vux'
Vue.component('x-address', XAddress)

const token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNTk4ODEyODUzMyIsImNyZWF0ZWQiOjE1Mjk5MDkxNzg5NTksInR5cGUiOjEsImV4cCI6MTUzMDUxMzk3OH0.G0jbe3P5bHyu2no7CFWE1tfYAanqzyU-PRUoZGNPgMQZoUo0uFw77hMhtde93BdjE1QsfBlH3mxSj04EtrvUeg'
Vue.http.interceptors.push((request, next) => {
  request.headers.set('Authorization', token)
  // console.log(request.headers)
  next(response => {
    // console.log(response.status)
    return response
  })
})



var api_prefix = process.env.NODE_ENV === 'development' ? 'http://test.jiujiugx.com/' : '';
window.api_prefix = api_prefix

//Vue.prototype.$http = require('');
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
