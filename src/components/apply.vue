<template>
  <div class="apply">
    <mt-header fixed title="填写资料"></mt-header>
    <div class="applyInfo">
      <p>请如实填写报名信息，获取参赛资格！</p>
    </div>
    <mt-field label="我的姓名" placeholder="请填写姓名（必填）"></mt-field>
    <!-- <mt-field label="我的住址" placeholder="请选择住址" readonly="readonly" @click.native.capture="closeShowAddress" @blur.native.capture="closeShowAddress"></mt-field> -->
     <mt-cell title="我的住址" :value="address" @click.native="showPicker"></mt-cell>
    <mt-field label="" placeholder="住址填写请精确到行政村或街道"></mt-field>
    <mt-field label="身份证号" placeholder="请填写身份证号（非必填）"></mt-field>
    <mt-button type="default" size="large">立即报名</mt-button>
<div class="address">
  
    <my-address :showAddressPicker="showAddressPicker" @save-address="saveAddress" @hide-picker="hidePicker" :init="address">
    </my-address>
</div>
 

    <!-- <mt-popup v-model="popupVisible" position="bottom" popup-transition="popup-fade" pop-transition="'popup-fade'">
      <div class="mint-popup mint-popup-2 mint-popup-top" style="z-index: 2017; display: none;"><p>更新成功</p></div>
    </mt-popup> -->
  </div>
</template>

<script>
 import MyAddress from './address-picker/Address.vue'
  export default {
    name: 'apply',
    components: {
      MyAddress
    },
    data() {
      return {
        showAddressPicker: false,
        address: '北京-北京市-东城区'
      }
    },
    methods: {
      hidePicker() {
        // 接受子组件关闭popup事件
        this.showAddressPicker = false
      },
      showPicker() {
        this.showAddressPicker = !this.showAddressPicker
      },
      saveAddress(val) {
        // 从子组件接受返回所选值 val
        this.address = val
        this.showAddressPicker = !this.showAddressPicker
      }
    }

  }

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
