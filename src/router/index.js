import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import apply from '@/components/apply'
import vote from '@/components/vote'
import mine from '@/components/mine'
import myVoice from '@/components/myVoice'
import voteDetail from '@/components/voteDetail'
// import Mint from 'mint-ui';
// Vue.use(Mint);
// import 'mint-ui/lib/style.css'; 


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/apply',
      name: 'apply',
      component: apply
    },
    {
      path: '/vote',
      name: 'vote',
      component: vote
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/myVoice',
      name: 'myVoice',
      component: myVoice
    },
    {
      path: '/voteDetail',
      name: 'voteDetail',
      component: voteDetail
    }
  ]
})
