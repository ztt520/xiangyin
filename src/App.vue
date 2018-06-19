<template>
  <div id="app">
     <mt-tabbar v-model="selected" ref="footer">
              <mt-tab-item id="home">
                 <img slot="icon" src="./assets/images/home_tab_icon_select.png" v-if="selected == 'home'">
                <img slot="icon" src="./assets/images/home.png" v-else>
                首页
              </mt-tab-item>
              <mt-tab-item id="apply">
                <img slot="icon" src="./assets/images/sign_tab_icon_select.png" v-if="selected =='apply'">
                <img slot="icon" src="./assets/images/apply.png" v-else>
                
                报名
              </mt-tab-item>
              <mt-tab-item id="vote">
                <img slot="icon" src="./assets/images/vote_tab_icon_select@1x.png" v-if="selected =='vote'">
                <img slot="icon" src="./assets/images/vote.png" v-else>
                投票
                <!-- <mt-badge type="error" size="small"></mt-badge> -->
              </mt-tab-item>
              <mt-tab-item id="mine">
                <img slot="icon" src="./assets/images/pro_tab_icon_select.png" v-if="selected =='mine'">
                <img slot="icon" src="./assets/images/mine.png" v-else>
                我的
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
cread(){
 
},
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
 <style <style lang="less" scoped>
.mint-tabbar {
  height: 60px;
  position: fixed;
  bottom: 0;
  z-index: 99;
  background-color: #fff;
  .mint-tab-item {
    padding: 6px 0;
    .mint-tab-item-icon img {
    width: 32px !important;
    height: 32px !important;
  }
    .mint-tab-item-label {
    /* color: inherit; */
    font-size: 12px;
    line-height: 28px;
    margin-left: 7px;
}
  }
 
  .mint-tab-item {
    color: #aaa;
  }
  .mint-tab-item.is-selected {
    background-color: #fff;
    color: #f35950;
}
 }

</style>
