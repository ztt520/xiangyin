<template>
  <div class="myVoice">
    <mt-header title="我的作品" fixed>
       <router-link to="/mine" slot="left">
    <mt-button icon="back"></mt-button>
  </router-link>
  <mt-button slot="right" @click="reUpload"><span class="rightText">重新上传</span></mt-button>
    </mt-header>
    <div class="voice">
      <div class="voiceBg clearfix">
        <div class="voiceTime fl">
          <p>乡音版</p>
          <p class="voicePro">00'{{timeDuration}}"</p>
        </div>
        <div class="fr" style="padding-top:0.25rem;">
          <div class="video1 fl" @click="play" :style="isPlaying?audio2: audio1">
            <audio ref="player" id="audio" preload="auto" src="../../static/audio/pgone.mp3"></audio>
          </div>
          <div class="delVoice fl"></div>
        </div>
      </div>
      <div class="voiceBg clearfix">
        <div class="voiceTime fl">
          <p>普通话版</p>
          <p class="voicePro">00'{{timeDuration}}"</p>
        </div>
        <div class="fr" style="padding-top:0.25rem;">
          <div class="video1 fl" @click="play2" :style="isPlaying2?audio2: audio1">
            <audio id="audio2" preload="auto" src="../../static/audio/pgone.mp3"></audio>
          </div>
          <div class="delVoice fl"></div>
        </div>
      </div>
    </div>
    <div class="voiceInfo">
       <mt-cell title="参赛编号" value="xy1234657890"></mt-cell>
       <mt-cell title="参赛姓名" value="张三"></mt-cell>
       <mt-cell title="已获赞数">
          <div class="mint-cell-value"><span>123465票</span></div>
       </mt-cell>
      <a data-v-a39d8fb4="" class="mint-cell">
        <div class="mint-cell-left"></div> 
        <div class="mint-cell-wrapper" style="border-bottom:none;">
          <div class="mint-cell-title"><!----> 
            <span class="mint-cell-text">暂时排名</span>
          </div> 
          <div class="mint-cell-value">
            <div data-v-a39d8fb4="" class="mint-cell-value">
              <span data-v-a39d8fb4="">80</span>
            </div>
          </div> 
        </div> 
        <div class="mint-cell-right"></div>
      </a>
    </div>
    <div class="voiceInfo voiceInfo2">
        <a data-v-a39d8fb4="" class="mint-cell">
        <div class="mint-cell-left"></div> 
        <div class="mint-cell-wrapper" style="border-bottom:none;">
          <div class="mint-cell-title"><!----> 
            <span class="mint-cell-text">作品状态</span>
          </div> 
          <div class="mint-cell-value">
            <div data-v-a39d8fb4="" class="mint-cell-value">
              <span data-v-a39d8fb4="">待审核</span>
            </div>
          </div> 
        </div> 
        <div class="mint-cell-right"></div>
      </a>
    </div>
     <!-- 重新上传判断 begin -->
    <mt-popup v-model="reUploadStatus" popup-transition="popup-fade">
      <div class="mint-popup rules">
        <div class="top_p">
           <p>{{upLoadMsg.msg}}</p>
        </div>
        <a @click="closeUpload">确定</a>
        </div>
    </mt-popup>
    <!-- 重新上传判断 end -->
  </div>
</template>

<script>
export default {
  name: "myVoice",
  data() {
    return {
      upLoadMsg:{
       state:4,
       msg:""   
      },
      reUploadStatus: false,
      voiceValue: "http://192.168.18.46:8080/static/media/pgone.2c18a10.mp3",
      isPlaying: false,
      isPlaying2: false,
      audio1:
        "background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAA/pJREFUSA2lltlLV0EUx/1dN8oHhXaLNtpoAyOKqCSCXirKFgs1EHfqD+ihhTLqtefckyjasVJfegltg6Igy6IiWlwyi17Ntc93vPPjt1yvP2tg7jlz5nvOd+bMcicQF0OpqKhYBSwrEAhsHhkZmY0+S260u2h3Ilsdx2koLi5+LbtfCfh1QpRF/znqcj9cSN9ryI+XlpbeDbGFqZ6E1dXV84aHhy8z+o0h6Hb0JmbyEXuX7ARPR19M3UlzmWxuaUlMTDxUWFj4zRqsjCKsqqpS2m5RpwlE0JsJCQmncBbhmIVBrhwaGioHsFcg/HqkM9vHatsSRohTJjO7D1kSgO/M5kBJSUmrBcciGfAWYlwDO536B+KtoaRBwrq6uvn9/f3PAE0F9Iq6A7KOWEgiMaz9XPybGfgKZA9yXVlZ2VfhHAuG7Ar6VGp3cnLy9n8lUzwFh2Q76g/kDOQl2VUMYWVl5T70DYxmBHkgPz+/U53/U0TKkhx0Y2TCsUu6IWQUZ92OGwAfunqYIE2J1Nza2tqFYR0+DbL0gO7bgsCh4xXnsFEykGZLYzwlo1dhtDnYLw8ODr6F+Bx1shcu0hYfH29jrtROdtjKu11QG7N7F+lg2wzGECC1g4+R/nZ2pPW1sCjp3j4mLrs3SynNFIoAjVFoHwPEuhwaWJt7EC/wgQZj47PZgUh3o8rHUTGxL0F2QvyGFJ9sbm5O9vKG44Ps4tIMzUXMGnV5gWO0TQJ3pqOj444XnkGZ2Mh0h485/IxSR+J/S+p4AZRSw45MHw/s0z+I//m0tLRtXpiQ2N0JAES4hBku8gLHYNO5PcJ92TYW1saGuFOELdQtNPSLOT6WU6QdfC+2oxzuevTxlmOH/Fm+Vq2hWWjkarb4ksjAtk3QblcfRr+QkpKylFldHI+Mm0k/b1WVBofD/gKn96PtuNOujBKpqamN4HLYzRkQHc7Ly/sdBfIwcDOVu+Z2uNrMDuUMZWO8rtFyFW0sKip64uE7YZN+5qyflkxlD4QNhlAtSJ8i1kOqh9FaOm0K1T3hAtkcyPR/nUnMR2Rlk4Lo4JvCGyQX5RdkOh5NDMBcCKO9E/vW19fPJk4TXiLrZRnybIQgIW+WT3Tsp2OAmgHweU1NzQYLjFUy0E19fX3PtAmJ0U/dxwX+xfoHU2oNpEJvkpu0pwDWdr9KPU1K7May0DAJ0TLw5RizIVPcn+wHkdk1NPgoQln1kx0YGLiCut6g+BDsFYEayYJ5JiIDDEzpX4RdZ1iPZVueJCUl5RYUFHy2Bis9CW0no86G6CwBxzyfFuvKd+BPkI1bEfZg05fQoiBeQyD9bPXv1OM3nbbS3Y2u908L6btD+l6i+5a/sb6u6yjm2kwAAAAASUVORK5CYII=) no-repeat center bottom",
      audio2:
        "background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAAXNSR0IArs4c6QAACGdJREFUaAXVmmuIVVUUx507jwZfaaDowNiDdBQx1KD6YISofZEaIRsoDXNe9pB8DVQaamMGopiFhuM4M1LaB+uDosigKNQgWUwW+GqQ+TJqmn5wcCjDefX7H8+57LPvvnfuXGfGOwc2e62111p7/c/eZz9PxpA+fg4ePJh5586dZ7u6umZ1d3dPycjIKCDPp5oR0CNUHXwbmVILsib4S1lZWQ3FxcVn4buk01dPRl84AlROa2vrfAJdjL+5pJGp+AVcKz5OZGZmftvZ2Vm/bNmy9lT8mDYPBLCqqmoozlYR2GoCe8x0/KA0Pm/hc1tOTs5XS5cu/S9VfykBVDekxYqpdCNB5KVaeZJ2VwC7vqys7BvyXnffXgOk1eZT0VaATUkiwBvo/oneZdJtUht2qlPf4mjSJNJk0lhST885FCrotsd7UjTLkwZIYJE9e/Zsxvgj04FJA6YbvhHdw9CHysvLL5jl8ejq6upnsFlAKkRnZjw9+eepxO+nfl3xVKPypADW1NSM6OjoOIDVK1FLg6AytczW3Nzc2iVLllwzinpN1tbW5re3t5fhU9/1MJcDyn6gbAmt+a+r3JT1CJC3+yTOjpCmmoY+3U5lVQzxlQzxtxzlKYvq6urGAXQD9ZbiJMt2RL1/UO+r1HvFLjP5hAB5m0/RcmeoZIxpJJoKTiEv5y0222V9ydN7CohhLz5nOfxez87Ofj4RyLgA1S2Zi34GhKvldk2aNGnl7NmzOxyV9rmIgS0bp1+T1Jr28zuCWfG6a8TWFg+oiL45BzhNvO/gbPlAgVM81NdOKoNcQc/plMx4ZkDvI1ZnY2UailEyLy/vc5iSqOA+0R6JROYzgh205APGHj169JfCwkK1WBHJbJypZ8+e7Tpy5MiPdjAxqDXPoXTUVoRXy1U55AMuYuBbyVr3C7NiWrabBphXWlp60pSbb2GIVigobjUVfHpXuoBTPKxqdhBnrRmnuiigt9ldNQRQyy8UQisUHJ3SgGI6Swd61KhR7xLbaTMWYp++d+/eRaYsCtBfOG80C6HbMSofyAHFqj8uW1RUdI95sByQoUGHVtx07NixRwLDKEAEqwATWjhjvJuu2a/zXBBIKjnz30VirrNsn7h69er7gcwDqP0cYFYHQuXwbbyhTaYsHWli3EBcd83YAF2h8UQybwnkb1ZD+zmUtvZm+cXSKpel1Wbs3vQrO8Be7pOe9nIsKPJYUHyJ3RzZ8WJPsuFdUVJS8pfvJ2EmPTYBO7D/2FAcz6nCPPh6rwUp1E48+lBJtxbOUUESxL1797bjR71gnJ/WSNaTKeC+w24heto+jRYtWU92Zjk2NSYvmm/RwxTxm3KupdDY210BL+UNy4daI0Zm68C71pgumcP0vsgfJ85bCi8DPCOiAyIKQmcoFBy2lHtksRllK7lkDh3vWzHl2MXIzHIXzSQfihkfY5gypkXoDi/aBrz5Q7Ys3XkAxsQMyFn6BnVkYD43kt2Jm0YPm2ZA/I2GabXimBxBWGAK4XWGMuge4qbBupvMwOEL1IITTCG0DogG6xOKHdD5EVAOt9DctvhBwwIoFDvYRqqLesfpBgodqQ/KB0B27MO9id5Eg1LMHtEsT2eaxoqJXV00hBodu8umMyY7tlDsYGlTC4YAAji0JrU9pDlvx+4BbDGDBvVEkx9ktB17iwYZe+4I7egHC0CNHaTQnA7fpG/wkgVirO4KLFnas2yZniPIR81AabxLETaMDaZQNKAX2LJ05wFT6IixIcIaTtfGoTUcAF3KDvuQqCPE3WdcspAadd8KCWBcMlvHwduNclNran2DXQA6YRnM1C2PJUvI4ie0XZGyS+Zwsg49Xbt5j0+vC/hkck4TJoIhNHbgp1623kSvO3Hbka6wbFkinmO8t3G6k/S3n3ZKlshGZbzlarKZbHc2K4n2ZSpO6iHWcoeih8mb+XW5QVDXeAvRWyT4f7i5eZozlRsO47QREfsEYtWfGrlGUNd4SZJ3eS3Ill/nn9sMBQ00w3Q/Z8rSlK60wOnT2CJwitcDKEJ/M5BdER08GJbqfi7g0y33p7O3rLiaiXt3IIsC1PEeqNcHBX6epctHdWFL/tBZHVMCRN9vFIOC4jtepx4ZBBgq1K8aFJwLCv1cJ1y6fEyrhyPJagBqcjefRm6XQtd7IYB+v60gjw7bvnUprfiB6elh0qxaPqT+xVYMXcwGa+zYQwBlQPMe581UWsb6cLdzDOf8y8LW7U+e724h8emCNvQQ31pa76eQECZmgygFHGTg6Hvy10wDnHSSKnQ/Z8oHilbL+eDshtlPw9iDjReWE6BK6JJDAXMah9NtAMhrmMTf0xWWXdYfvAYUfXP4truletavzNcvxbsDiQtQgWoSJTtDGi/efARe93OsZS+a8r6mNRXwkl0DiqpqIb1A612PV29CgDLy/zzSOnOG7QSQnVRepyusZG+DbB/xeL/eTZSr69ld0ms56l6QCJx89whQSuquZPtIr5Ncz13A6gqrhgqbXQrJyrRw9teWy/FnLr9MF/tZmJTF65amYlIAZUBlGYyi68k3iDadWPR5wB5iyD7sH6fbU05IXb60WcVGWzT9kBfaFYSUuRVDby3rzC2WPC6bKFCnESDn+H8zxAw+tgHBtBKwjkQuQ9+G9g64oHUWqwMibXO0FAztxOFdT6PmOddU4FIOZL0GKEOCUmsuIv+M9HjgrJ/yZi2/tELhxSTsDa76UwIYONLfDLrwB2QFspiRNtBLMb8GoC341o8Q0bVlb309EMCgMt0S607cvzbWzWp0XxnoJJnfBFQ9aT8tdpLc2/IkaetU6xOApmfAqftOI9cifTJ5AYHmk+sW2Tt5hte3qNSCvAleJ3sNDB4XyPv0+R84qqSZqMD8BAAAAABJRU5ErkJggg==) no-repeat center bottom;background-size:cover;",
      // timeNow: "",
      timeDuration: ""
    };
  },
  created() {
    this.$nextTick(()=>{
      this.addEventListeners();
    })
    // this.addEventListeners();
    
  },
  mounted() {
    this.addEventListeners();
    
  },
  beforeDestroyed() {
    this.removeEventListeners();
  },
  methods: {
    addEventListeners: function() {
      const self = this;
      // self.$refs.player.addEventListener("timeupdate", self._currentTime),
      self.$refs.player.addEventListener("canplay", self._durationTime);
    },
    removeEventListeners: function() {
      const self = this;
      // self.$refs.player.removeEventListener("timeupdate", self._currentTime);
      self.$refs.player.removeEventListener("canplay", self._durationTime);
    },
    // _currentTime: function() {
    //   const self = this;
    //   self.timeNow = parseInt(self.$refs.player.currentTime);
    // },
    _durationTime: function() {
      const self = this;
      console.log(self)
      self.timeDuration = parseInt(self.$refs.player.duration);
    },
    play() {
      var audio = document.querySelector("#audio");
      var audio2 = document.querySelector("#audio2");
        if (!this.isPlaying) {
        audio.play();
        this.isPlaying = true;
        this.isPlaying2=false;
        audio2.pause();
      } else {
        this.isPlaying=false;
        audio.pause();
      }
    },
    play2() {
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
    // 重新上传
    reUpload() {
      this.reUploadStatus = !this.reUploadStatus; 
      if(this.upLoadMsg.state==1){
        this.upLoadMsg.msg="您当前的作品正在审核中，不支持重新上传";
      }else if(this.upLoadMsg.state==2){
          this.upLoadMsg.msg="您当前的作品已错过报名期，不支持重新上传";
      }else if(this.upLoadMsg.state==3){
         this.upLoadMsg.msg="您当前的作品已审核通过，不支持重新上传";
      }else{
         this.upLoadMsg.msg="您当前的作品音量小";
      }
    },
    closeUpload(){
      this.reUploadStatus = !this.reUploadStatus; 
    }
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
  .rightText {
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #999999;
    letter-spacing: 0;
    text-align: center;
    line-height: 12px;
  }
}
.voice {
  padding: 4rem 0.9375rem 1.25rem 0.9375rem;
  height: 11.25rem;
  background: #fff;
  .voiceBg {
    // width: 100%;
    height: 2.25rem;
    padding: 12px 25px;
    background: #f5f5f5;
    border-radius: 100px;
    margin-bottom: 20px;
  }
  .voiceTime {
    p {
      font-family: PingFangSC-Medium;
      font-size: 0.875rem;
      color: #999999;
      letter-spacing: 0;
      line-height: 1.25rem;
    }
  }
  .video1 {
    // margin-bottom: 1.25rem;
    width: 28px;
    height: 28px;
    background: url("../assets/images/play_icon.png") no-repeat center bottom;
    background-size: cover;
    position: relative;
    margin-right: 1.25rem;
    &:before {
      content: "";
      position: absolute;
      display: inline-block;
      height: 28px;
      width: 1px;
      border-left: 1px solid #ccc;
      left: -20px;
      top: 0;
    }
  }
  .delVoice {
    width: 28px;
    height: 28px;
    background: url("../assets/images/delete_icon.png") no-repeat center bottom;
    background-size: cover;
  }
}
.voiceInfo {
  height: 210px;
  background: #fff;
  overflow: hidden;
  &.voiceInfo2{
  margin-top: 10px;
  height: 54px;
}
  .mint-cell {
    margin-left: 15px;
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
      span {
        color: #f35950;
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
@media screen and (-webkit-min-device-pixel-ratio: 2) {
    .mint-header.is-fixed { border-bottom: 0.5px solid #d9d9d9 }
    .voice .video1:before{border-left: 0.5px solid #ccc;}
    .rules .top_p{border-bottom: 0.5px solid #ccc }
}
@media screen and (-webkit-min-device-pixel-ratio: 3) {
    .mint-header.is-fixed { border-bottom: 0.333333px solid #d9d9d9 }
    .voice .video1:before{border-left: 0.333333px solid #ccc;}
    .rules .top_p{border-bottom: 0.333333px solid #ccc }
}
</style>

