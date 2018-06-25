<template>
  <div id="app">
    <mt-tabbar v-model="selected" ref="footer" v-if="this.$route.name!='myVoice' && this.$route.name!='voteDetail'">
              <mt-tab-item id="home">
                 <img slot="icon" src="./assets/images/home_tab_icon_select.png" v-if="selected == 'home'">
                <img slot="icon" src="./assets/images/home.png" v-else>
                首页
                
              </mt-tab-item>
              <mt-tab-item id="apply">
                <img slot="icon" src="./assets/images/sign_tab_icon_select.png" v-if="selected =='apply'">
                <img slot="icon" src="./assets/images/apply.png" v-else>
                <p>报名</p>
              </mt-tab-item>
              <mt-tab-item id="vote">
                <img slot="icon" src="./assets/images/vote_tab_icon_select.png" v-if="selected =='vote'">
                <img slot="icon" src="./assets/images/vote.png" v-else>
                <p>投票</p>
              
              </mt-tab-item>
              <mt-tab-item id="mine">
                <img slot="icon" src="./assets/images/pro_tab_icon_select.png" v-if="selected =='mine'">
                <img slot="icon" src="./assets/images/mine.png" v-else>
                <p>我的</p>
              </mt-tab-item>
            </mt-tabbar>
    <router-view/>
  </div>
</template>

<script>

export default {
  data() {
    return {
      selected: "home",
    };
  },
  cread() {},
  name: "App",

  watch: {
    
    selected(newV) {
      //让锚点值改变
      this.$router.push({
        name: newV
      });
    }
   
  }
};

</script>
<style lang="less" scoped>
.mint-tabbar {
  height: 3.75rem;
  position: fixed;
  bottom: 0;
  z-index: 99;
  background-color: #fff;
  box-shadow: 0 -2px 14px 0 rgba(0,0,0,0.10);
  .mint-tab-item {
    color: #aaa;
  }
  .mint-tab-item.is-selected {
    background-color: transparent;
    color: #f35950;
  }
}
/*iPhoneX的适配*/
@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    .mint-tabbar {
      height: 5.875rem;
    }
}
</style>
