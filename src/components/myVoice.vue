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
          <div class="video1 fl" >
            <audio ref="player" id="audio2" preload="auto" src="../../static/audio/pgone.mp3"></audio>
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
    return {
      voiceValue: "http://192.168.18.46:8080/static/media/pgone.2c18a10.mp3",
      isPlaying: false,
      audio1:
        "background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAA/pJREFUSA2lltlLV0EUx/1dN8oHhXaLNtpoAyOKqCSCXirKFgs1EHfqD+ihhTLqtefckyjasVJfegltg6Igy6IiWlwyi17Ntc93vPPjt1yvP2tg7jlz5nvOd+bMcicQF0OpqKhYBSwrEAhsHhkZmY0+S260u2h3Ilsdx2koLi5+LbtfCfh1QpRF/znqcj9cSN9ryI+XlpbeDbGFqZ6E1dXV84aHhy8z+o0h6Hb0JmbyEXuX7ARPR19M3UlzmWxuaUlMTDxUWFj4zRqsjCKsqqpS2m5RpwlE0JsJCQmncBbhmIVBrhwaGioHsFcg/HqkM9vHatsSRohTJjO7D1kSgO/M5kBJSUmrBcciGfAWYlwDO536B+KtoaRBwrq6uvn9/f3PAE0F9Iq6A7KOWEgiMaz9XPybGfgKZA9yXVlZ2VfhHAuG7Ar6VGp3cnLy9n8lUzwFh2Q76g/kDOQl2VUMYWVl5T70DYxmBHkgPz+/U53/U0TKkhx0Y2TCsUu6IWQUZ92OGwAfunqYIE2J1Nza2tqFYR0+DbL0gO7bgsCh4xXnsFEykGZLYzwlo1dhtDnYLw8ODr6F+Bx1shcu0hYfH29jrtROdtjKu11QG7N7F+lg2wzGECC1g4+R/nZ2pPW1sCjp3j4mLrs3SynNFIoAjVFoHwPEuhwaWJt7EC/wgQZj47PZgUh3o8rHUTGxL0F2QvyGFJ9sbm5O9vKG44Ps4tIMzUXMGnV5gWO0TQJ3pqOj444XnkGZ2Mh0h485/IxSR+J/S+p4AZRSw45MHw/s0z+I//m0tLRtXpiQ2N0JAES4hBku8gLHYNO5PcJ92TYW1saGuFOELdQtNPSLOT6WU6QdfC+2oxzuevTxlmOH/Fm+Vq2hWWjkarb4ksjAtk3QblcfRr+QkpKylFldHI+Mm0k/b1WVBofD/gKn96PtuNOujBKpqamN4HLYzRkQHc7Ly/sdBfIwcDOVu+Z2uNrMDuUMZWO8rtFyFW0sKip64uE7YZN+5qyflkxlD4QNhlAtSJ8i1kOqh9FaOm0K1T3hAtkcyPR/nUnMR2Rlk4Lo4JvCGyQX5RdkOh5NDMBcCKO9E/vW19fPJk4TXiLrZRnybIQgIW+WT3Tsp2OAmgHweU1NzQYLjFUy0E19fX3PtAmJ0U/dxwX+xfoHU2oNpEJvkpu0pwDWdr9KPU1K7May0DAJ0TLw5RizIVPcn+wHkdk1NPgoQln1kx0YGLiCut6g+BDsFYEayYJ5JiIDDEzpX4RdZ1iPZVueJCUl5RYUFHy2Bis9CW0no86G6CwBxzyfFuvKd+BPkI1bEfZg05fQoiBeQyD9bPXv1OM3nbbS3Y2u908L6btD+l6i+5a/sb6u6yjm2kwAAAAASUVORK5CYII=) no-repeat center bottom",
      audio2:
        "background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAu1JREFUSA3tls1rU0EUxfNZUk0hQejClaC1VK1Q6Ubowo27QlGkIMXQLpqsVNzoXyBSQVBQpG1CaXUhxY2L4kJdKBU3StFK/QLdKCgugohCJB/+Tvrm8ZJO8tII4sKByb1z5px73503byaBwF9uwWb5FhcXO/L5/LlgMDgCr79SqXTY+Mz/Al9l/k4ymZwaHR3V2NoaJpyent6CYpk+YFU2BleYGspkMj9tlIgNdLAL2AGevoK9FgqFlkqlUsHGhxOmHyqXy2eloUt72sZtmJAAKZZImmw6nT5pE9dh92dnZ7+R9KK0zFkThupE1eHc3NwOkiU0QLxk4zTAbguXVjFsHOs7zGaz+1i+VQlImGY5n9jE9RiJklT4yNEdRffOcMAriUTidXBmZmYB4nECu8kZy7dWbwK0aZf1Dg/SIyRpM0brMmrqjoTD4eFisTjsVDhEYn1znxlfaj1ULZMYWp0pB/1ErMuO/9BdRgF8e6cwV+gv+Y76hbXTODDCHBhFR7tCrAMmju970tOy3fuMQBYsyMNFvRgbbZdzWHjhDb5vQjbVeXbYGvaIUeM/xv+Yy+W6hGlXw3mLe1fjZs03Ies/qABUVbV8XzGG2mjdJNmrOT6hPlWNu0fjZs03oRE7m8oM27YtJ2w7Q53wf8K6Bfnz4T+5pK9UF7t0TXZ8fFyX8Hu67Ad6gFvhDfMV+jONmzXfCrlSzhBg/+Tk5E0FUuB4PD7IGdwL9kUY9kU0Gu2F6x4Owm2t5sYnWJEPWDwX5w9RiXH1bjQBxsbG8vjqbpuYmHDvPsCwmVBM48vWVEiy6vKB75yfn9/mJW7G5+Ae8PBNzCpUkzASiTwF1ZNHC4XCLc7K7R5hSy5HXw/E64ZMhfeML1tzPQngYD5BpQvy1RB8X/da+g2h3ephPuAP2GFiuLd7TYUiQrgB4Ri9uiEI0LWJbpKV0V/t7Owc8SZT/A0VClQjSYhqd7Mbe+Svo/6/cL/GYrHnqVTqh439G/7wIvCFIzzYAAAAAElFTkSuQmCC) no-repeat center bottom;",
      timeNow: "0",
      timeDuration: ""
    };
  },
  created() {
    // console.log(this.voiceValue);
    // this.cTime = this.$refs.player.duration;
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
      self.$refs.player.addEventListener("timeupdate", self._currentTime),
        self.$refs.player.addEventListener("canplay", self._durationTime);
    },
    removeEventListeners: function() {
      const self = this;
      self.$refs.player.removeEventListener("timeupdate", self._currentTime);
      self.$refs.player.removeEventListener("canplay", self._durationTime);
    },
    _currentTime: function() {
      const self = this;
      self.timeNow = parseInt(self.$refs.player.currentTime);
    },
    _durationTime: function() {
      const self = this;
      self.timeDuration = parseInt(self.$refs.player.duration);
    },
    play() {
      var audio = document.querySelector("#audio");
      var audio2 = document.querySelector("#audio2");
      if (audio) {
        if (!this.isPlaying) {
          audio.play();
          this.isPlaying = true;
        } else {
          audio.pause();
          this.isPlaying = false;
        }
      }
      if (audio2) {
        if (!this.isPlaying) {
          audio2.play();
          this.isPlaying = true;
        } else {
          audio2.pause();
          this.isPlaying = false;
        }
      }
    },
    reUpload() {
      alert("重新上传");
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
      span {
        color: #f35950;
      }
    }
  }
}
</style>

