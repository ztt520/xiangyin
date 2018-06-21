<template>
  <div class="myVoice">
    <mt-header title="我的作品" fixed></mt-header>
    <div class="voice">
      <div class="video1">
       <audio controls="controls" preload="auto" src="../assets/allright.mp3"></audio>
      </div>
      <div class="video2">
        <audio controls="controls" preload="auto" src="../assets/allright.mp3"></audio>
      </div>
    </div>
    <div class="voiceInfo">
       <mt-cell title="参赛编号" value="xy1234657890"></mt-cell>
       <mt-cell title="参赛姓名" value="张三"></mt-cell>
       <mt-cell title="已获赞数">
          <div class="mint-cell-value"><span>123465票</span></div>
       </mt-cell>
       <mt-cell title="暂时排名">
          <div class="mint-cell-value"><span>80</span></div>
       </mt-cell>
    </div>
  </div>
</template>

<script>
export default {
  name: "myVoice",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.myVoice {
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
.voice {
  padding: 4rem 0.9375rem 1.25rem 0.9375rem;
  height: 11.25rem;
  div {
    background: hotpink;
    height: 60px;
    audio {
      height: 60px;
      margin: 0;
      padding: 0;
    }
  }
  .video1 {
    margin-bottom: 1.25rem;
  }
}
.voiceInfo {
  height: 210px;
  overflow: hidden;
  .mint-cell {
    height: 54px;
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #333333;
    letter-spacing: 0;
    line-height: 54px;
    &:first-child {
      margin-top: -1px;
    }
    .mint-cell-value {
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #aaaaaa;
      letter-spacing: 0;
      text-align: right;
      line-height: 16px;
      span{
        color: #F35950;
      }
    }
  }
}
</style>

