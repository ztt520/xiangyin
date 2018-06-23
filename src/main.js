import Vue from 'vue'
import App from './App'
import router from './router'

// 引入swipei
// var VueAwesomeSwiper = require('vue-awesome-swiper')

Vue.config.productionTip = false
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
import './assets/css/base.css'; 
Vue.use(MintUi);
import { Datetime, Group } from 'vux'  
Vue.component(Datetime.name, Datetime);  
Vue.component(Group.name, Group);  
import { XAddress } from 'vux'

Vue.component('x-address', XAddress)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
