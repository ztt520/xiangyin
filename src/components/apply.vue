<template>
  <div class="apply">
    <mt-header fixed title="填写资料"></mt-header>
    <div class="applyInfo">
      <p>请如实填写报名信息，获取参赛资格！</p>
    </div>
    <mt-field label="我的姓名" placeholder="请填写姓名（必填）"></mt-field>
    <mt-field label="我的住址" placeholder="请选择住址" readonly="readonly" @click.native.capture="closeShowAddress" @blur.native.capture="closeShowAddress" v-model="city"></mt-field>
    <mt-field label="" placeholder="住址填写请精确到行政村或街道"></mt-field>
    <mt-field label="身份证号" placeholder="请填写身份证号（非必填）"></mt-field>
    <div class="address" v-if="isShowAddress">
　　  <mt-picker :slots="myAddressSlots" @change="onMyAddressChange"></mt-picker>
    </div>
    <mt-button type="default" size="large" @click="applyOk">立即报名</mt-button>


    <mt-popup v-model="popupVisible" position="bottom" popup-transition="popup-fade" pop-transition="'popup-fade'">
      <div class="mint-popup mint-popup-2 mint-popup-top" style="z-index: 2017; display: none;"><p>更新成功</p></div>
    </mt-popup>
  </div>
</template>

    

<script>
// import { Picker } from "mint-ui";
import myaddress from "./address.json";
export default {
  name: "",
  components: {
    // "mt-picker": Picker
  },
  props: {},
  data() {
    return {
      isShowAddress: false,
      popupVisible: false,
      myAddressSlots: [
        {
          flex: 1,
          defaultIndex: 1,
          values: Object.keys(myaddress), //省份数组
          className: "slot1",
          textAlign: "center"
        },
        {
          divider: true,
          content: "-",
          className: "slot2"
        },
        {
          flex: 1,
          values: [],
          className: "slot3",
          textAlign: "center"
        },
        {
          divider: true,
          content: "-",
          className: "slot4"
        },
        {
          flex: 1,
          values: [],
          className: "slot5",
          textAlign: "center"
        }
      ],
      myAddressProvince: "",
      myAddressCity: "",
      myAddresscounty: "",
      city: ""
    };
  },
  created() {},
  methods: {
    applyOk(){
      this.popupVisible=!this.popupVisible;
    },
    closeShowAddress() {
      this.isShowAddress = !this.isShowAddress;
    },
    onMyAddressChange(picker, values) {
      if (myaddress[values[0]]) {
        //这个判断类似于v-if的效果（可以不加，但是vue会报错，很不爽）
        picker.setSlotValues(1, Object.keys(myaddress[values[0]])); // Object.keys()会返回一个数组，当前省的数组
        picker.setSlotValues(2, myaddress[values[0]][values[1]]); // 区/县数据就是一个数组
        this.myAddressProvince = values[0];
        this.myAddressCity = values[1];
        this.myAddresscounty = values[2];
        this.city =
          this.myAddressProvince +
          "-" +
          this.myAddressCity +
          "-" +
          this.myAddresscounty;
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.myAddressSlots[0].defaultIndex = 0;
    });
  }
};
</script>

<style lang="less" scoped>
.apply {
  background-color: #f5f5f5;
  height: -webkit-fill-available;
  .applyInfo {
    padding-top: 2.75rem;
    height: 2.625rem;
    p {
      font-size: 0.75rem;
      color: #aaaaaa;
      letter-spacing: 0;
      text-align: center;
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
</style>
