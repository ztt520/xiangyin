<template>
  <div class="voteDetail">
    <mt-header title="投票详情" fixed>
       <router-link to="/mine" slot="left">
    <mt-button icon="back"></mt-button>
  </router-link>
    </mt-header>
    <div class="detailList">
       <div class="mint-searchbar">
          <div class="mint-searchbar-inner">
            <input placeholder="搜索地名、人名、选手编号" class="mint-searchbar-core">
              <!-- <i class="line" style="margin-right:0.9375rem;margin-top:0;"></i> -->
             <i class="mintui mintui-search" style="color: #999;"></i>
             <a @click="search"></a>
          </div>
        </div>
      </div>
      <div style="padding:0.625rem 0 5rem 0.9375rem; background-color: #f5f5f5;">
      <ul class="scroll-list">
        <li>
          <div class="ranking">
            <span>520</span>
          </div>
          <div class="userAvatar">
            <img src="../assets/images/userImg.png" alt="">
          </div>
          <div class="userInfos">
            <p>编号：xy1234561234</p>
            <p>张丹方</p>
            <p>浙江省杭州市滨江区</p>
          </div>
          <div class="voteNum">
            <span>999999票</span>
          </div>
        </li>
        <li>
          <div class="ranking">
            <span>520</span>
          </div>
          <div class="userAvatar">
            <img src="../assets/images/userImg.png" alt="">
          </div>
          <div class="userInfos">
            <p>编号：xy1234561234</p>
            <p>张丹方</p>
            <p>浙江省杭州市滨江区</p>
          </div>
          <div class="voteNum">
            <span>999999票</span>
          </div>
        </li><li>
          <div class="ranking">
            <span>520</span>
          </div>
          <div class="userAvatar">
            <img src="../assets/images/userImg.png" alt="">
          </div>
          <div class="userInfos">
            <p>编号：xy1234561234</p>
            <p>张丹方</p>
            <p>浙江省杭州市滨江区</p>
          </div>
          <div class="voteNum">
            <span>999999票</span>
          </div>
        </li><li>
          <div class="ranking">
            <span>520</span>
          </div>
          <div class="userAvatar">
            <img src="../assets/images/userImg.png" alt="">
          </div>
          <div class="userInfos">
            <p>编号：xy1234561234</p>
            <p>张丹方</p>
            <p>浙江省杭州市滨江区</p>
          </div>
          <div class="voteNum">
            <span>999999票</span>
          </div>
        </li>
      </ul>
      </div>
      <div class="noReuslt" v-if="showResult">
        <img src="../assets/images/noResult.png" alt="">
        <p>请在投票截止日后进行搜索</p>
      </div>
     
   
  </div>
</template>

<script>
export default {
  name: "voteDetail",
  data() {
    return {
      showResult: false
    };
  },
  created() {
    var api_prefix =
      process.env.NODE_ENV === "development"
        ? "http://192.168.18.53:53248/"
        : "";
  },
  methods: {
    // 搜索
    search() {
      alert(1);
    },
    loadTop() {
      this.$refs.loadmore.onTopLoaded();
    },
    loadBottom() {
      this.allLoaded = true; // 若数据已全部获取完毕
      this.$refs.loadmore.onBottomLoaded();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.voteDetail {
  background-color: #f5f5f5;
  height: -webkit-fill-available;
  padding-bottom: 5rem;
}
.mint-header.is-fixed {
  z-index: 999;
  height: 2.75rem;
  background: #ffffff;
  font-family: PingFangSC-Semibold;
  font-size: 1.125rem;
  color: #333333;
  letter-spacing: 0;
  text-align: center;
  line-height: 1.125rem;
  border-bottom: 1px solid #ccc;
}
.detailList {
  padding: 4rem 0.9375rem 0 0.9375rem;
  // background: hotpink;
  .mint-searchbar {
    // position: relative;
    background: #ffffff;
    box-shadow: 0 2px 0.875rem 0 rgba(0, 0, 0, 0.1);
    border-radius: 0.75rem;
    height: 2.75rem;
    margin-bottom: 0.625rem;
    a {
      position: absolute;
      display: inline-block;
      right: 0;
      top: 0;
      width: 3.125rem;
      height: 100%;
      z-index: 999;
    }
    input::-webkit-input-placeholder {
      font-family: PingFangSC-Regular;
      font-size: 0.875rem;
      color: #cccccc;
    }
    input::-moz-placeholder {
      /* Mozilla Firefox 19+ */
      font-family: PingFangSC-Regular;
      font-size: 0.875rem;
      color: #cccccc;
    }
    input:-moz-placeholder {
      /* Mozilla Firefox 4 to 18 */
      font-family: PingFangSC-Regular;
      font-size: 0.875rem;
      color: #cccccc;
    }
    input:-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      font-family: PingFangSC-Regular;
      font-size: 0.875rem;
      color: #cccccc;
    }
  }
}
.noReuslt {
  // /*width: 100%;*/
  padding-top: 8rem;
  text-align: center;
  p {
    padding-top: 1.25rem;
    font-family: PingFangSC-Regular;
    font-size: 0.75rem;
    color: #aaaaaa;
    letter-spacing: 0;
    line-height: 0.75rem;
  }
}
.scroll-list {
  width: 100%;
  height: 100%;
  li {
    // width: 100%;
    height: 3.3125rem;
    padding: 0.9375rem 0.625rem;
    background-color: #fff;
    border-top-left-radius: 2.75rem;
    border-bottom-left-radius: 2.75rem;
    margin-bottom: 0.625rem;
    line-height: 3.3125rem;
    div {
      float: left;
    }
    .ranking {
      width: 16%;
      text-align: center;
      span {
        font-size: 1.125rem;
        color: #f35950;
        font-family: PingFangSC-Medium;
        font-weight: 500;
      }
    }
    .userAvatar {
      height: 3rem;
      width: 3rem;
      margin-right: 1rem;
      img {
        width: 100%;
        border-radius: 50%;
        border: 1px solid #ccc;
      }
    }
    .userInfos {
      width: 35%;
      margin-top: -4px;
      p {
        font-family: PingFangSC-Regular;
        font-size: 0.75rem;
        color: #aaaaaa;
        line-height: 1.3125rem;
        white-space: nowrap;
        &:first-child {
          font-size: 0.875rem;
          color: #333333;
        }
      }
    }
    .voteNum {
      float: right;
      span {
        font-family: PingFangSC-Medium;
        font-size: 0.9375rem;
        color: #f35950;
        letter-spacing: 0;
        text-align: right;
        line-height: 0.9375rem;
      }
    }
  }
}
.line {
  display: inline-block;
  width: 1px;
  height: 1.875rem;
  margin-top: 0.4375rem;
  background-color: #dbdbdb;
}
@media screen and (-webkit-min-device-pixel-ratio: 2) {
    .mint-header.is-fixed { border-bottom: 0.5px solid #d9d9d9 }
}
@media screen and (-webkit-min-device-pixel-ratio: 3) {
    .mint-header.is-fixed { border-bottom: 0.333333px solid #d9d9d9 }
}
</style>

