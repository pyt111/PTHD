<template>
    <div class="container" :style="fullHeightStyle">
      <img class="title" src="../../../assets/Birthday-wishes/buy-fishes.png" width="100%" alt="">
      <span class="introduce">分享有惊喜，超值体验金免费加<span class="money">88</span>元</span>
      <div class="want-money" @click="share">
        <img src="../../../assets/Birthday-wishes/want-money.png" width="100%" alt="">
        <div class="want-content">
          <i></i>
          <span>我要加钱</span>
        </div>
      </div>
      <div class="explain">
        <div class="explain-main">
          <p class="explain-title">分享说明：</p>
          <p>1、该体验金有效期3天，计息3天，请在有效期内分享并使用；</p>
          <p>2、该体验金在有效期内，每天首次分享可额外获得88元体验金；</p>
          <p>3、分享后，好友可点击为您送上生日祝福，每次祝福您都可以获得额外88元的体验金；</p>
          <p>4、送祝福的好友也可获得8元红包一份。（额外获得的体验金自动累加，无需进行额外操作）</p>
          <p class="explain-note">注：通过好友祝福获得的每日体验金上限为8800元</p>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      fullHeightStyle: {
        "min-height": document.documentElement.clientHeight + "px"
      }
    };
  },
  mounted() {
    document.title = "购买完成";
  },
  methods: {
    share() {
      alert("飞总最帅");
    }
  }
};
</script>
<style lang="less" scoped>
.container {
  background: #f5524b;
  padding-bottom: 0.8rem;
}
.introduce {
  display: block;
  color: #fff;
  font-size: 0.4266666667rem;
  text-align: center;
  margin-top: -0.533333333rem;
  font-weight: 600;
  .money {
    font-size: 0.85rem;
    color: #ffdf66;
  }
}
.want-money {
  display: block;
  position: relative;
  width: 8.666666667rem;
  height: 1.68rem;
  margin: 0 auto;
  img {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }
  .want-content {
    width: 80%;
    margin-left: 15%;
    display: block;
    position: relative;
    color: #fff;
    text-align: center;
    font-size: 0.53333333rem;
    font-weight: 600;
    padding: 0.53333333rem 0;
    z-index: 2;
    i {
      display: inline-block;
      width: 0.2rem;
      height: 0.2rem;
      background: #fff;
      border-radius: 50%;
      margin-right: 0.3rem;
      margin-bottom: 0.1rem;
      box-shadow: 0px 0px 10px 1px;
    }
    span {
      font-weight: 900;
    }
  }
}
.explain {
  width: 80%;
  // min-height: 5.8666667rem;
  border: 3px solid #f9c884;
  margin: 0 auto;
  margin-top: 0.8rem;
  border-radius: 5px;
  background: #fefef2;
}
.explain-main {
  padding: 0.4rem;
  p {
    margin: 0;
    margin-bottom: 0.266666667rem;
  }
}
.explain-title {
  font-size: 0.533333333rem;
  color: #f43443;
  font-weight: 600;
}
.explain-note {
  color: #f5535c;
}
</style>


