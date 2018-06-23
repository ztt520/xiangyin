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
              <!-- <i class="line" style="margin-right:15px;margin-top:0;"></i> -->
             <i class="mintui mintui-search"></i>
             <a @click="search"></a>
          </div>
        </div>
      </div>
      <div style="padding:10px 0 80px 15px; background-color: #f5f5f5;">
        <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
           <ul class="scroll-list">
        <li>
          <div class="ranking">
            <span>520</span>
          </div>
          <div class="userAvatar">
            <img src="../assets/images/mine.png" alt="">
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
            <img src="../assets/images/mine.png" alt="">
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
            <img src="../assets/images/mine.png" alt="">
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
            <img src="../assets/images/mine.png" alt="">
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
            <img src="../assets/images/mine.png" alt="">
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
            <img src="../assets/images/mine.png" alt="">
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
        </mt-loadmore>
       
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
  methods: {
    // 搜索
    search() {
      alert(1);
    },
    loadTop() {
      this.$refs.loadmore.onTopLoaded();
    },
    loadBottom() {
  this.allLoaded = true;// 若数据已全部获取完毕
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
  padding-bottom: 80px;
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
.detailList {
  padding: 4rem 0.9375rem 0 0.9375rem;
  // background: hotpink;
  .mint-searchbar {
    // position: relative;
    background: #ffffff;
    box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.1);
    border-radius: 24px;
    margin-bottom: 20px;
    a {
      position: absolute;
      display: inline-block;
      right: 0;
      top: 0;
      width: 50px;
      height: 100%;
      z-index: 999;
    }
    input::-webkit-input-placeholder {
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #cccccc;
      letter-spacing: 0;
      // text-align: center;
      line-height: 14px;
    }
    input::-moz-placeholder {
      /* Mozilla Firefox 19+ */
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #cccccc;
      letter-spacing: 0;
      // text-align: center;
      line-height: 14px;
    }
    input:-moz-placeholder {
      /* Mozilla Firefox 4 to 18 */
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #cccccc;
      letter-spacing: 0;
      // text-align: center;
      line-height: 14px;
    }
    input:-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #cccccc;
      letter-spacing: 0;
      // text-align: center;
      line-height: 14px;
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
    font-size: 12px;
    color: #aaaaaa;
    letter-spacing: 0;
    line-height: 12px;
  }
}
.scroll-list {
  width: 100%;
  height: 100%;
  li {
    // width: 100%;
    height: 53px;
    padding: 15px 10px;
    background-color: #fff;
    border-top-left-radius: 44px;
    border-bottom-left-radius: 44px;
    margin-bottom: 10px;
    line-height: 53px;
    div {
      float: left;
    }
    .ranking {
      width: 15%;
      text-align: center;
      span {
        font-size: 18px;
        color: #f35950;
      }
    }
    .userAvatar {
      height: 50px;
      width: 50px;
      margin-right: 1rem;
      // margin-right: 10px;
      img {
        width: 100%;
        // height: 50px;
        border-radius: 50%;
        border: 1px solid #ccc;
      }
    }
    .userInfos {
      width: 35%;
      p {
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #aaaaaa;
        line-height: 18px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        &:first-child {
          font-size: 14px;
          color: #333333;
        }
      }
    }
    .voteNum {
      float: right;
      span {
        font-family: PingFangSC-Medium;
        font-size: 15px;
        color: #f35950;
        letter-spacing: 0;
        text-align: right;
        line-height: 15px;
      }
    }
  }
}
.line {
  display: inline-block;
  width: 1px;
  height: 30px;
  margin-top: 7px;
  background-color: #dbdbdb;
}
</style>

