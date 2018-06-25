<template>
  <div class="mine">
    <mt-header title="我的" fixed></mt-header>
    <div class="mineList">
      <router-link to="myVoice" class="mint-cell">
      <mt-cell title="我的作品" class="title">
        <i class="mint-cell-allow-right"></i>
      </mt-cell>
    </router-link>
      <router-link to="voteDetail" class="mint-cell" >
      <mt-cell title="投票详情" class="title">
        <i class="mint-cell-allow-right"></i>
      </mt-cell>
    </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "mine",
  data() {
    return {};
  },
  methods:{
   
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.mine {
  background-color: #f5f5f5;
  height: -webkit-fill-available;
}
.mint-header.is-fixed {
  z-index: 999;
  height: 2.75rem;
  background: #ffffff;
  font-family: PingFangSC-Semibold;
  font-size: 18px;
  color: #333333;
  letter-spacing: 0;
  text-align: center;
  line-height: 18px;
  border-bottom: 1px solid #ccc;
}
.mineList {
  padding-top: 4rem;
  // margin-left: 15px;
 .title{
    margin-left: 15px;
  }
}
@media screen and (-webkit-min-device-pixel-ratio: 2) {
    .mint-header.is-fixed { border-bottom: 0.5px solid #d9d9d9 }
}
@media screen and (-webkit-min-device-pixel-ratio: 3) {
    .mint-header.is-fixed { border-bottom: 0.333333px solid #d9d9d9 }
}
</style>

