<template>
  <div class="vote">
    <mt-header title="我要投票" fixed>
  <mt-button slot="right" @click="showRule"><span class="rightText">投票规则</span></mt-button>
</mt-header>
<div class="poFix">
  <div class="nav">  
      <mt-button size="normal" @click.native.prevent="active = 'tab-container1'" :class="{tabActive:active=='tab-container1'}">
        <label class="mint-button-text" >全部</label>
      </mt-button>  
      <i class="line"></i>
      <mt-button size="normal" @click.native.prevent="active = 'tab-container2'" :class="{tabActive:active=='tab-container2'}">
         <label class="mint-button-text">推荐</label>
        </mt-button>  
  </div>  
</div>     
    <div class="page-tab-container">  
      <div class="mint-searchbar">
                <div class="mint-searchbar-inner">
                   <input placeholder="搜索地名、人名、选手编号" class="mint-searchbar-core">
                      <!-- <i class="line" style="margin-right:15px;margin-top:0;"></i> -->
                      <i class="mintui mintui-search" style="color: #999;"></i>  
                </div>
                <a @click="search"></a>
              </div>
      <mt-tab-container class="page-tabbar-tab-container" v-model="active">  
        <mt-tab-container-item id="tab-container1">  
              
              <div class="voteList">
                <mt-loadmore :top-method="loadTop" ref="loadmore">
                  <ul>
                  <li  @click="addZan"> 
                    <div class="xy-avatar fl">
                      <img src="../assets/images/home.png" alt="">
                    </div>
                    <div class="heart fr">
                      <a @click="addZanNum">
                         <img src="../assets/images/heart.png" alt="">
                      </a>
                    </div>
                    <div style="clear:both;"></div>
                    <div class="userInfo">
                      <p>编号：xy1234567980</p>
                      <p>123456789票</p>
                    </div>
                  </li>
                  <li  @click="addZan"> 
                    <div class="xy-avatar fl">
                      <img src="../assets/images/home.png" alt="">
                    </div>
                    <div class="heart fr">
                      <a>
                         <img src="../assets/images/heart-active.png" alt="">
                      </a>
                    </div>
                    <div style="clear:both;"></div>
                    <div class="userInfo">
                      <p>编号：xy1234567980</p>
                      <p>123456789票</p>
                    </div>
                  </li>
                  <li  @click="addZan"> 
                    <div class="xy-avatar fl">
                      <img src="../assets/images/home.png" alt="">
                    </div>
                    <div class="heart fr">
                      <a>
                         <img src="../assets/images/heart-active.png" alt="">
                      </a>
                    </div>
                    <div style="clear:both;"></div>
                    <div class="userInfo">
                      <p>编号：xy1234567980</p>
                      <p>123456789票</p>
                    </div>
                  </li>
                  <li  @click="addZan"> 
                    <div class="xy-avatar fl">
                      <img src="../assets/images/home.png" alt="">
                    </div>
                    <div class="heart fr">
                      <a>
                         <img src="../assets/images/heart-active.png" alt="">
                      </a>
                    </div>
                    <div style="clear:both;"></div>
                    <div class="userInfo">
                      <p>编号：xy1234567980</p>
                      <p>123456789票</p>
                    </div>
                  </li>
                  <li  @click="addZan"> 
                    <div class="xy-avatar fl">
                      <img src="../assets/images/home.png" alt="">
                    </div>
                    <div class="heart fr">
                      <a>
                         <img src="../assets/images/heart-active.png" alt="">
                      </a>
                    </div>
                    <div style="clear:both;"></div>
                    <div class="userInfo">
                      <p>编号：xy1234567980</p>
                      <p>123456789票</p>
                    </div>
                  </li>
                 
                </ul>
                </mt-loadmore>
               
              </div>
        </mt-tab-container-item>  
        <mt-tab-container-item id="tab-container2">  
              <div class="voteList">
                <ul>
                   <li> 
                    <div class="xy-avatar fl">
                      <img src="../assets/images/home.png" alt="">
                    </div>
                    <div class="heart fr">
                      <a href="">
                         <img src="../assets/images/heart.png" alt="">
                      </a>
                    </div>
                    <div style="clear:both;"></div>
                    <div class="userInfo">
                      <p>编号：xy1234567980</p>
                      <p>123456789票</p>
                    </div>
                  </li>
                  <li> 
                    <div class="xy-avatar fl">
                      <img src="../assets/images/home.png" alt="">
                    </div>
                    <div class="heart fr">
                      <a href="">
                         <img src="../assets/images/heart-active.png" alt="">
                      </a>
                    </div>
                    <div style="clear:both;"></div>
                    <div class="userInfo">
                      <p>编号：xy1234567980</p>
                      <p>123456789票</p>
                    </div>
                  </li>
                </ul>
              </div>
        </mt-tab-container-item>  
      </mt-tab-container>  
    </div>  
    <!-- 点赞弹窗 begin -->
    <mt-popup v-model="showDetail" popup-transition="popup-fade">
      <div class="mint-popup accentDetail">
       <div class="showInfos">
         <div class="userImg">
           <img src="../assets/images/bg.png" alt="">
         </div>
         <p class="userName">张三疯</p>
         <p>选手编号：xy123456789</p>
         <p>地址：什么什么村</p>
         <p class="voteNum">132164646票</p>
         <mt-button type="danger" size="small" class="firstBtn" @click="lisXyVoice">
           <label class="mint-button-text">已上传的作品（乡音版）</label>
            <audio id="audio2" preload="auto" src="../../static/audio/pgone.mp3"></audio>
         </mt-button>
         <mt-button type="default" size="small" class="twoBtn" @click="lisPtVoice">
            <label class="mint-button-text pth">已上传的作品（普通话版）</label>
            <audio id="audio" preload="auto" src="../../static/audio/pgone.mp3"></audio>
         </mt-button>
         <div class="detailHeart" @click="showAd">
           <img src="../assets/images/heart.png" alt="">
         </div>
       </div>
       <i class="closeBtn" @click="addZan">
         <img src="../assets/images/cancel.png" alt="">
       </i>
        </div>
    </mt-popup>
    <!-- 点赞弹窗 end -->
    <!-- 点赞弹广告 弹窗 begin -->
    <mt-popup v-model="showAdvertise" popup-transition="popup-fade">
      <div class="mint-popup accentDetail">
       <div class="showAds">
         <div class="adImg">
           <img src="../assets/images/advertise.png" alt="">
         </div>
         <p>新华网</p>
         <p>感谢您为张三疯选手点赞</p>
       </div>
       <i class="closeBtn" @click="closeAd">
         <img src="../assets/images/cancel.png" alt="">
       </i>
        </div>
    </mt-popup>
    <!--点赞弹广告 end -->
    
    <!-- 投票规则 begin -->
    <mt-popup v-model="showRules" popup-transition="popup-fade">
      <div class="mint-popup rules">
        <div class="top_p">
           <p>每个用户每天可以最多投5票每三小时能给同一选手点赞</p>
        </div>
        <a @click="showRule">确定</a>
        </div>
    </mt-popup>
    <!-- 投票规则 end -->
  </div>
</template>

<script>
export default {
  name: "vote",
  data() {
    return {
      active: "tab-container1",
      showDetail: false,
      showRules: false,
      showAdvertise: false,
      allLoaded:false,
      isPlaying: false,
      isPlaying2: false,
      // tabActive:true
    };
  },
  methods: {
    lisXyVoice(){
      var audio2 = document.querySelector("#audio2");
      var audio = document.querySelector("#audio");
      if (!this.isPlaying2) {
        audio2.play();
        this.isPlaying2 = true;
        this.isPlaying=false;
        audio.pause();
      } else {
        audio2.pause();
        this.isPlaying2 = false;
      }
    },
    lisPtVoice(){
      var audio2 = document.querySelector("#audio2");
      var audio = document.querySelector("#audio");
      if (!this.isPlaying2) {
        audio2.play();
        this.isPlaying2 = true;
        this.isPlaying=false;
        audio.pause();
      } else {
        audio2.pause();
        this.isPlaying2 = false;
      }
    },
    addZanNum(){
      alert("赞数++")
    },
    loadTop() {
      this.$refs.loadmore.onTopLoaded();
    },
    // loadBottom() {
    //   this.allLoaded = true; // 若数据已全部获取完毕
    //   // this.$refs.loadmore.onBottomLoaded();
    // },
    // 搜索
    search() {
      alert(1);
    },
    showRule() {
      this.showRules = !this.showRules;
    },
    addZan() {
      this.showDetail = !this.showDetail;
    },
    showAd() {
      this.showDetail = !this.showDetail;
      this.showAdvertise = !this.showAdvertise;
    },
    closeAd() {
      this.showAdvertise = !this.showAdvertise;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
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
  .mint-header-button.is-left {
    color: #999;
  }
  .rightText {
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #999999;
    letter-spacing: 0;
    text-align: center;
    line-height: 12px;
  }
}
.poFix{
    position: fixed;
    height: 44px;
    top: 44px;
    left: 0px;
    width: 100%;
    box-sizing: border-box;
    background: #fff;
    box-shadow: 0 1px 4px 0 rgba(211,56,47,0.5);
    z-index: 99;
}
.nav {
  // padding-top: 44px;
  height: 44px;
  display: flex;
  // box-shadow: 0 1px 4px 0 #d3382f;
  .mint-button--default {
    font-family: PingFangSC-Medium;
    font-size: 16px;
    color: #999999;
    letter-spacing: 0;
    text-align: center;
    background-color: #fff;
    box-shadow: none;
    flex: 1;
    &.tabActive {
      color: #f35950;
      .mint-button-text {
        padding-bottom: 5px;
        border-bottom: 3px solid #f35950;
      }
    }
  }
}
.page-tab-container {
  padding: 20px 15px 80px 15px;
  padding-top: 108px;
  background: #f85f57 url("../assets/images/vote-bg.png") no-repeat top;
  background-size: cover;
  min-height: -webkit-fill-available;
  height: 100%;
  .mint-searchbar {
    background: #ffffff;
    height: 2.75rem;
    border-radius: 12px;
    margin-bottom: 20px;
    position: relative;
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
    }
    input::-moz-placeholder {
      /* Mozilla Firefox 19+ */
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #cccccc;
    }
    input:-moz-placeholder {
      /* Mozilla Firefox 4 to 18 */
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #cccccc;
    }
    input:-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #cccccc;
    }
    // .mint-searchbar-core {
    //   width: 90%;
    // }
  }
}
.voteList {
  ul {
    clear: both;
    // padding: 15px;
  }
  li {
    float: left;
    height: 105px;
    padding: 15px;
    width: 8.5rem;
    background: #ffffff;
    // box-shadow: 0 2px 14px 0 #d3382f;
    // border: 1px solid red;
    border-radius: 12px;
    margin-bottom: 15px;
    &:nth-child(odd) {
      margin-right: 10px;
    }
    .xy-avatar {
      // border:1px solid red;
      width: 48px;
      height: 48px;
      margin-bottom: 15px;
      img {
        // width: 50px;
        width: 100%;
        // height: 50px;
        border-radius: 50%;
        border: 1px solid #ccc;
      }
    }
    .heart {
      width: 30px;
      height: 30px;
      a {
        display: block;
        z-index: 99;
        img {
          width: 100%;
        }
      }
    }
    .userInfo {
      p {
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #666666;
        letter-spacing: 0;
        line-height: 14px;
        margin-bottom: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        &:last-child {
          font-family: PingFangSC-Medium;
          font-size: 16px;
          color: #f35950;
          letter-spacing: 0;
          line-height: 16px;
        }
      }
    }
  }
}
.rules {
  width: 270px;
  height: 139px;
  background-color: #fff;
  border-radius: 8px;
  .top_p {
    height: 84px;
    border-bottom: 1px solid #ccc;
  }
  p {
    font-family: PingFangSC-Regular;
    padding: 20px 40px;
    font-size: 15px;
    color: #666666;
    letter-spacing: 0;
    text-align: center;
    line-height: 27px;
  }
  a {
    text-align: center;
    display: block;
    height: 54px;
    line-height: 54px;
    font-family: PingFangSC-Medium;
    font-size: 17px;
    color: #f35950;
    letter-spacing: 0;
    text-align: center;
  }
}
.accentDetail {
  height: 352px;
  width: 270px;
  background: transparent;
  text-align: center;
  .showInfos {
    height: 272px;
    padding: 15px 28px;
    border-radius: 8px;
    background-color: #fff;
    position: relative;
    .detailHeart {
      position: absolute;
      width: 30px;
      height: 30px;
      right: 20px;
      top: 10px;
      img {
        width: 30px;
        height: 30px;
      }
    }
    .userImg {
      width: 80px;
      height: 80px;
      margin: 0 auto;
      margin-bottom: 10px;
      img {
        text-align: center;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        border: 1px solid #ccc;
      }
    }
    p {
      text-align: center;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #999999;
      letter-spacing: 0;
      // line-height: 30px;
      margin-bottom: 10px;
      &.userName {
        font-size: 17px;
        color: #333333;
      }
      &.voteNum {
        font-size: 18px;
        color: #f35950;
        font-weight: bold;
      }
    }
    .firstBtn {
      margin-bottom: 10px;
    }
    .twoBtn {
      background: #ffffff;
      box-shadow: 0 0 1px #f35950;
    }
    .mint-button-text {
      font-size: 12px;
      &.pth {
        color: #f35950;
      }
    }
  }
  .closeBtn {
    display: block;
    margin-top: 20px;
  }
  .showAds {
    width: 250px;
    height: 224px;
    background-color: #fff;
    padding: 10px;
    border-radius: 12px;
    .adImg {
      height: 160px;
      width: 250px;
      margin-bottom: 15px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    p {
      font-family: PingFangSC-Regular;
      font-size: 15px;
      color: #666666;
      letter-spacing: 0;
      text-align: center;
      line-height: 22px;
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
/*iPhone5的适配*/
@media only screen and (device-width: 320px) and (device-height: 568px) {
  .voteList li {
    width: 6.75rem;
  }
}
/*iPhoneX的适配*/
@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    .voteList li {
    width:8.4375rem;
  }
}
@media screen and (-webkit-min-device-pixel-ratio: 2) {
    .mint-header.is-fixed { border-bottom: 0.5px solid #d9d9d9 }
    .rules .top_p{border-bottom: 0.5px solid #ccc }
    .line{width: 0.5px;}
}
@media screen and (-webkit-min-device-pixel-ratio: 3) {
    .mint-header.is-fixed { border-bottom: 0.333333px solid #d9d9d9 }
    .rules .top_p{border-bottom: 0.333333px solid #ccc }
    .line{width: 0.333333px;}
}
</style>

