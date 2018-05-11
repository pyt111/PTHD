<template>
    <div class="container" :style="fullHeightStyle">
      <div class="title">
        <img :src="img" alt="">
        <span>{{name}}</span>
      </div>
      <div class="active-content">
        <span class="active-title">活动内容</span>
        <div class="active-main">
          <p>1、填写手机号并获取验证码，即可为好友送上生日祝福。</p>
          <p>2、送祝福即可领取8元现金红包，发放至您的余惠宝账号，可在礼券中查看。</p>
          <div class="entry-item phone">
            <mu-text-field hintText="请输入手机号"type="number" class="x" />
          </div>
          <div class="send-item">
            <div class="entry-item send-main">
              <mu-text-field hintText="手机验证码" type="number" class="" />
            </div>
            <span class="send-valid">{{text}}</span>
          </div>
        </div>
        <div class="give-blessing">
          <img src="../../../assets/Birthday-wishes/give-blessing.png" width="100%" alt="">
          <span>{{content}}</span>
        </div>
      </div>
      <span class="amount">已有<span>3265</span>人为Ta送上祝福，累计获得<span>88888</span>元体验金</span>
      <div class="blessing-list">
        <img class="blessing-box" src="../../../assets/Birthday-wishes/blessing-list.png" alt="">
        <div class="blessing-content">
          <ul v-if="blessing.length > 9"  class="clearfix">
            <swiper :options="swiperOption" ref="mySwiper">
              <swiper-slide class="blessing-item" v-for="item,index in blessing" key="index">
                <li class="clearfix">
                  <img :src="item.img" alt="">
                  <span>{{item.name}}为Ta送上了生日祝福</span>
                  <span>{{item.day}}小时前</span>
                </li>
              </swiper-slide>
            </swiper>
            <!-- <swiper v-else :options="swiperOption2" ref="mySwiper">
              <swiper-slide class="blessing-item" v-for="item,index in blessing" :key="index">
                <li class="clearfix">
                  <img :src="item.img" alt="">
                  <span>{{item.name}}为Ta送上了生日祝福</span>
                  <span>{{item.day}}小时前</span>
                </li>
              </swiper-slide>
            </swiper> -->
          </ul>
          <div v-else class="blessing-item" v-for="item,index in blessing" :key="index">
              <img :src="item.img" alt="">
              <span>{{item.name}}为Ta送上了生日祝福</span>
              <span>{{item.day}}小时前</span>
            </div>
        </div>
      </div>
      <div class="kindly-reminder">
        <div class="hint-title">温馨提示</div>
        <p>亲爱的朋友，如果您近期过生日，可点击下方下载按钮下载余惠宝APP，我们也将为您准备一份价值8888元的豪华生日体验金。</p>
        <p>*注：生日以身份证日期为准！</p>
      </div>
      <a class="birthday-mine" href="#">
        <img src="../../../assets/Birthday-wishes/birthday-mine.png" width="100%" alt="">
        下载APP
      </a>
    </div>
</template>
<script>
export default {
  // name: "carrousel",
  data() {
    return {
      fullHeightStyle: {
        "min-height": document.documentElement.clientHeight + "px"
      },
      name: "何*飞",
      img: "https://www.flygoing.cn/yuedu/head.png",
      text: "发送验证码",
      content: "送祝福，拿红包",
      form: {
        phone: {
          value: "",
          errorText: "",
          bool: false
        },
        valiCode: {
          value: "",
          errorText: "",
          bool: false
        }
      },
      swiperOption: {
        // autoplay: 500,
        speed: 500,
        slidesPerView: "auto",
        loop: true,
        // loopedSlides: 9,
        direction: "vertical",
        height: 35
      },
      swiperOption2: {
        direction: "vertical",
        height: 35
      },
      blessing: [
        {
          img: "https://www.flygoing.cn/yuedu/head.png",
          name: "何*飞6",
          day: 5
        },
        {
          img: "https://www.flygoing.cn/yuedu/head.png",
          name: "何*飞6",
          day: 5
        },
        {
          img: "https://www.flygoing.cn/yuedu/head.png",
          name: "何*飞",
          day: 5
        },
        {
          img: "https://www.flygoing.cn/yuedu/head.png",
          name: "何*飞",
          day: 5
        },
        {
          img: "https://www.flygoing.cn/yuedu/head.png",
          name: "何*飞",
          day: 5
        },
        {
          img: "https://www.flygoing.cn/yuedu/head.png",
          name: "何*飞",
          day: 5
        },
        {
          img: "https://www.flygoing.cn/yuedu/head.png",
          name: "何*飞",
          day: 5
        },
        {
          img: "https://www.flygoing.cn/yuedu/head.png",
          name: "何*飞",
          day: 5
        },
        {
          img: "https://www.flygoing.cn/yuedu/head.png",
          name: "何*飞",
          day: 5
        },
        {
          img: "https://www.flygoing.cn/yuedu/head.png",
          name: "何*飞666",
          day: 5
        }
      ]
    };
  },
  mounted() {
    document.title = "生日祝福内容页";
  }
};
</script>
<style>
.mu-text-field {
  width: 95%;
  margin-left: 5%;
}
</style>

<style lang="less" scoped>
p {
  margin: 0;
}
.container {
  background: url("../../../assets/Birthday-wishes/content-background.png")
    no-repeat;
  background-size: cover;
  padding-bottom: 0.5333333333rem;
}
.title {
  padding-top: 5.5rem;
  img {
    display: block;
    margin: 0 auto;
  }
  span {
    display: block;
    text-align: center;
    font-size: 0.426666667rem;
    margin-top: 5px;
  }
}
.active-content {
  background: url("../../../assets/Birthday-wishes/active-content.png")
    no-repeat;
  background-size: 100% 100%;
  width: 9.38666667rem;
  height: 9.6533333333rem;
  margin: 0 auto;
  margin-top: 5px;
  padding-top: 5px;
  .active-title {
    display: block;
    width: 2.58666667rem;
    height: 1rem;
    line-height: 1rem;
    background: #ed3f75;
    text-align: center;
    margin: 0 auto;
    font-size: 0.4266667rem;
    font-weight: 600;
    letter-spacing: 1px;
    color: #fff;
    border-radius: 0px 0px 5px 5px;
  }
}
.active-main {
  width: 80%;
  margin: 0 auto;
  color: #fff;
  font-size: 0.3733333333rem;
  p {
    margin-top: 1em;
  }
}
.entry-item {
  background: url("../../../assets/Birthday-wishes/input.png") no-repeat;
  background-size: 100% 68%;
}
.phone {
  margin-top: 0.6rem;
}
.send-item {
  display: flex;
  justify-content: space-between;
}
.send-main {
  display: inline-block;
  width: 60%;
}
.send-valid {
  display: inline-block;
  width: 2.5rem;
  height: 36px;
  line-height: 36px;
  background: yellow;
  color: #c00;
  text-align: center;
  border-radius: 5px;
}
.give-blessing {
  width: 6.66666667rem;
  height: 1.33333333rem;
  margin: 0 auto;
  position: relative;
  img {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }
  span {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    line-height: 1.3333333rem;
    font-size: 0.64rem;
    text-align: center;
    color: #f42464;
  }
}
.amount {
  display: block;
  width: 90%;
  margin: 0 auto;
  font-size: 0.32rem;
  padding: 0.32rem;
  span {
    color: #f42464;
    padding: 0 5px;
    font-weight: 600;
  }
}
.blessing-list {
  display: block;
  width: 94%;
  height: 11.84rem;
  margin: 0 auto;
  position: relative;
  margin-bottom: 0.5rem;
  .blessing-box {
    position: absolute;
    top: 0;
    left: 0;
  }
}
.blessing-content {
  width: 88%;
  margin: 0 auto;
  padding-top: 108px;
  height: 396px;
  overflow: hidden;
}
.blessing-content {
  img {
    width: 20px;
    height: 20px;
    margin-top: 5px;
  }
}
.blessing-item {
  display: flex;
  justify-content: space-between;
  position: relative;
  height: 30px;
  line-height: 30px;
  li {
    display: flex;
    justify-content: space-between;
    height: 30px;
    line-height: 30px;
  }
}
.kindly-reminder {
  width: 95%;
  margin: 0 auto;
  border: 2px solid #f8675b;
  border-radius: 5px;
  color: #f8675b;
}
.kindly-reminder p:nth-child(2) {
  margin-top: 11px;
  padding-left: 11px;
}
.kindly-reminder p:nth-child(3) {
  margin-bottom: 11px;
  padding-left: 11px;
}
.hint-title {
  font-size: 16px;
  text-align: center;
  width: 25%;
  margin: 0 auto;
  background: #fbd516;
  margin-top: -12px;
}
.birthday-mine {
  display: block;
  width: 95%;
  position: relative;
  height: 1.52rem;
  line-height: 1.52rem;
  margin: 0 auto;
  margin-top: 0.5333333rem;
  z-index: 1;
  color: #fff;
  font-size: 0.53333333rem;
  text-align: center;
  img {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
}
</style>


