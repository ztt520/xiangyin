<template>
  <div class="apply">
    <mt-header fixed title="填写资料"></mt-header>
    <div class="applyInfo">
      <p>请如实填写报名信息，获取参赛资格！</p>
    </div>
       <mt-field label="我的姓名" placeholder="请填写姓名（必填）"></mt-field>
        <!-- <group> -->
          <x-address class="selectAddress" @on-hide="logHide" @on-show="logShow" :title="title" v-model="value" :list="addressData" @on-shadow-change="onShadowChange" placeholder="请选择住址" :show.sync="showAddress">
          </x-address>
        <!-- </group> -->
        <mt-field label="" placeholder="住址填写请精确到行政村或街道"></mt-field>
        <mt-field label="身份证号" placeholder="请填写身份证号（非必填）"></mt-field>
    <mt-button type="default" size="large" @click="goApply">立即报名</mt-button>
     <!-- 报名成功弹窗 begin -->
    <mt-popup v-model="showApplyInfo" popup-transition="popup-fade" position="bottom">
      <div class="mint-popup applyInfoSure">
        <div>
           <p>您已经报名成功，请录制您的作品！</p>
           <p>您的编号是：xy1234567890</p>
        </div>
        </div>
    </mt-popup>
    <!-- 报名成功弹窗 end -->
  </div>
</template>

<script> 
import {
  Group,
  XAddress,
  ChinaAddressV4Data,
  XButton,
  Cell,
  Value2nameFilter as value2name
} from "vux";

export default {
  components: {
    Group,
    XAddress,
    XButton,
    Cell
  },
  data() {
    return {
      title: "我的住址",
      value_0_1: [],
      value: [],
      value2: ["天津市", "市辖区", "和平区"],
      value3: ["广东省", "中山市", "--"],
      addressData: ChinaAddressV4Data,
      value4: [],
      value5: ["广东省", "深圳 市", "南山区"],
      showAddress: false,
      showApplyInfo:false
    };
  },
  methods: {
    goApply(){
      this.showApplyInfo=!this.showApplyInfo;
    },
    doShowAddress() {
      this.showAddress = true;
      setTimeout(() => {
        this.showAddress = false;
      }, 2000);
    },
    onShadowChange(ids, names) {
      console.log(ids, names);
    },
    changeData() {
      this.value2 = ["430000", "430400", "430407"];
    },
    changeDataByLabels() {
      this.value2 = ["广东省", "广州市", "天河区"];
    },
    changeDataByLabels2() {
      this.value2 = ["广东省", "中山市", "--"];
    },
    getName(value) {
      return value2name(value, ChinaAddressV4Data);
    },
    logHide(str) {
      console.log("on-hide", str);
    },
    logShow(str) {
      console.log("on-show");
    }
  }
};
</script>

<style lang="less" scoped>
.apply {
  background-color: #f5f5f5;
  height: -webkit-fill-available;
  overflow: hidden;
  .applyInfo {
    padding-top: 2.75rem;
    height: 2.625rem;
    p {
      font-size: 0.75rem;
      color: #aaaaaa;
      padding-left: 20px;
      letter-spacing: 0;
      text-align: left;
      line-height: 2.625rem;
    }
  }
}
.mint-header.is-fixed {
  height: 2.75rem;
  background: #ffffff;
  font-family: PingFangSC-Semibold;
  font-size: 18px;
  color: #333333;
  letter-spacing: 0;
  text-align: center;
  line-height: 18px;
}
.address {
  width: 100%;
  position: absolute;
  bottom: 3.75rem;
  background: greenyellow;
}
.mint-button--large {
  width: 90%;
  margin: 4.375rem auto;
  border-radius: 6.25rem;
  background: #e7e7e7;
  color: #fff;
  box-shadow: 0 0.25rem 0.875rem 0 rgba(0, 0, 0, 0.2);
}
.selectAddress{
  background-color: #fff;
  height: 48px;
  line-height: 48px;
  padding: 0 10px;
}
.mint-cell.mint-field{
  padding-left: 10px;
}
.mint-popup{
  background: transparent;
  bottom: 30%;
  .applyInfoSure{
  div{
    width: 309px;
    height: 55px;
    background: #333333;
    -webkit-box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.2);
    box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.2);
    border-radius: 100px;
    font-family: PingFangSC-Medium;
    font-size: 12px;
    color: #FFFFFF;
    letter-spacing: 0;
    padding-top: 5px;
    text-align: center;
    line-height: 12px;
    p{
     line-height: 1.5rem;
   }
  }
}
}

</style>
