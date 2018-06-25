<template>
  <div class="home">
    <div class="bg">
      <div class="divide-line">
        <img src="../assets/images/divide-line.png" alt="">
      </div>
      <div class="xy-title">
        <i></i><h2>活动结束倒计时</h2><i></i>
      </div>
      <div class="countdown">
        <div class="days">{{day}}天</div>
        <div class="hours">{{hr}}时</div>
        <div class="minutes">{{min}}分</div>
        <div class="seconds">{{sec}}秒</div>
      </div>
      <div class="registNum">
          <div class="applyNum">{{numData.countPlayer}}</div>
          <div class="applyNum">{{numData.countTicket}}</div>
      </div>
    </div>
    <div class="megagame">
       <div class="xy-title">
        <i></i><h2>大赛剪影</h2><i></i>
      </div>
      <div class="xy-swiper">
        <mt-swipe>
        <mt-swipe-item><img src="../assets/images/banner3.png" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../assets/images/banner2.png" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../assets/images/banner3.png" alt=""></mt-swipe-item>
      </mt-swipe>
      </div>
    </div>
    <!-- <v-footer></v-footer> -->
  </div>
</template>

<script>
// import xFooter from "./components/footer";
export default {
  name: "home",
  //  components: {
  //   xFooter:"v-footer"
  // },
  data() {
    return {
      //倒计时
       day: 0, 
       hr: 0, 
       min: 0, 
       sec: 0,
      //报名数、获赞数
      numData:'',
    };
  },
   created() {
    var api_prefix =
      process.env.NODE_ENV === "development" ? "http://test.jiujiugx.com/" : "";
    
  },
  mounted() {
    this.countdown();//倒计时开始
    this.$http.get(api_prefix+'dialect-match/app/root/page').then(res => {
        let data = res.body.retcontent;
        this.numData = data;   
        // console.log(this.numData)
        }, res => {
            console.log('出错了');
        });
  },
  methods: {
    countdown: function () {
      const end = Date.parse(new Date('2018-06-30'))
      const now = Date.parse(new Date())
      const msec = end - now
      let day = parseInt(msec / 1000 / 60 / 60 / 24)
      let hr = parseInt(msec / 1000 / 60 / 60 % 24)
      let min = parseInt(msec / 1000 / 60 % 60)
      let sec = parseInt(msec / 1000 % 60)
      this.day = day
      this.hr = hr > 9 ? hr : '0' + hr
      this.min = min > 9 ? min : '0' + min
      this.sec = sec > 9 ? sec : '0' + sec
      const that = this
      setTimeout(function () {
        that.countdown()
      }, 1000)
    }
  }
};
</script>

 <style <style lang="less" scoped>
.home {
  background-color: #f85f57;
  height: 100%;
  // padding-bottom: 60px;
  padding-bottom: 3.75rem;
  .bg {
    background: #f85f57 url("../assets/images/bg.png") no-repeat top;
    background-size: cover;
    height: 16.3125rem;
    padding-top: 39rem;
    text-align: center;
    .countdown {
      padding-top: 1.25rem;
      padding-bottom: 1.875rem;
      text-align: cneter;
      div {
        display: inline-block;
        width: 3.4375rem;
        height: 2.0625rem;
        background: #ffffff;
        box-shadow: 0 0.125rem 0.875rem 0 #d3382f;
        border-radius: 0.3125rem;
        text-align: center;
        line-height: 2.0625rem;
        font-family: PingFangSC-Semibold;
        font-size: 1.125rem;
        color: #f35950;
        letter-spacing: 0;
        margin-right: 0.9375rem;
        &:last-child {
          margin-right: 0;
        }
      }
    }
    .registNum {
      background: #f85f57 url("../assets/images/homeCard.png") no-repeat top;
      background-size: cover;
      width: 90%;
      height: 6.375rem;
      margin: 0 auto;
      border-radius: 0.5rem;
      div {
        display: inline-block;
        width: 45%;
        margin-top: 3.6875rem;
        font-family: PingFangSC-Semibold;
        font-size: 1.125rem;
        color: #666666;
        letter-spacing: 0.125rem;
        text-align: center;
        line-height: 1.125rem;
      }
    }
  }
  .xy-title {
    padding-top: 1.375rem;
    h2 {
      display: inline-block;
      padding: 0 0.875rem;
      font-family: PingFangSC-Medium;
      // font-size: 0.875rem;
      color: #ffffff;
      letter-spacing: 0;
      text-align: center;
      // line-height: 0.875rem;
    }
    i {
      display: inline-block;
      width: 0.875rem;
      height: 0.875rem;
      border-radius: 1px;
      background-color: #fff;
      -moz-transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
      -o-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
  .megagame {
    height: 14.6875rem;
    padding: 0 1.25rem 2.5rem 1.25rem;
    text-align: center;
    margin: 0 auto;
    .xy-swiper {
      margin-top: 1.875rem;
      height: 10.3125rem;
      border-radius: 0.5rem;
      overflow: hidden !important;
      img {
        width: 100%;
        height: 10.3125rem;
        border-radius: 0.5rem;
         overflow: hidden;
      }
      .mint-swipe-indicator {
        background: #fff !important;
      }
      .mint-swipe-indicator.is-active {
        background: #f85f57 !important;
      }
    }
  }
}
/*iPhoneX的适配*/
@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
  .home {
    padding-bottom: 5.875rem;
  }
}
@media only screen and (device-width: 414px) and (device-height: 736px) {
  .home {
    .bg {
      padding-top: 43.125rem;
    }
  }
}
</style>
