<template>
    <div class="backgroud" id="a1">

        <!-- <div><img src="/static/images/activity/dangao@1x.png" alt="" class="topImg"></div> -->
        <div class="topImgBox">
            <img src="/static/images/activity/dangao@1x.png" alt="" class="dangao">
            <img src="/static/images/activity/srzxhd@3x-min.png" alt="" class="srzxhd">
        </div>
        <div class="cpkBox">
            <div class="product">
                <img src="/static/images/activity/sr@3x-min.png" alt="" class="sr">
                <p style="color:#f0a631;">生日专属产品</p>
                <ul>
                    <li>
                        <p>预期
                            <span class="red spanB">{{percent}}</span>
                            <span class="red">&#37;</span>
                        </p>
                    </li>
                    <!-- <li></li> -->
                    <li>
                        <p>
                            <span class="spanC black">{{productTime}}</span>天</p>
                    </li>
                </ul>
                <p class="Tzi" @click="touzi">立即投资</p>
            </div>

            <!-- <img src="/static/images/activity/cpk@1x-min.png" alt="" class="cpk"> -->
            <div class="explain">
                <p class="extit">产品说明:</p>
                <ul>
                    <li>1、该产品仅限使用生日专属体验金购买。</li>
                    <li>2、体验金计息3天，3天后系统自动回收。在此期间内体验金产生的收益归用户所有，在账户余额中体现</li>
                    <li>3、签到在余惠宝app-【个人中心】-【签到有礼】中进行。</li>
                </ul>
            </div>

        </div>
        <div class="shareBox" id="b1">
            <div class="jbk">
                <span v-for="item,x in numStr" :key="item.id" class="bk">{{item}}</span>
            </div>
            <div class="jban">

                <p  @click="addMoney"><img src="/static/images/activity/bdd@3x-min.png" alt="">我要加钱</p>
            </div>
            <div class="explain" id="se1">
                <p class="extit">分享说明:</p>
                <ul>
                    <li>1、该体验金有效期3天，计息3天，请在有效期内分享并用;</li>
                    <li>2、该体验金在有效期内，每天首次分享可额外获得88元 体验金;</li>
                    <li>3、分享后，好友可点击为您送上生日祝福，每次祝福您都可以获得额外88元体验金;</li>
                    <li>4、送祝福的好友也可获得8元红包一份。（额外获得的体验金自动累加，无需额外操作）</li>
                    <li class="red">注：通过好友祝福获得的每日体验金上限为8800元</li>
                </ul>
            </div>
        </div>
        <div class="fotter">
            <img src="/static/images/activity/bz@3x-min.png" alt="" class="bz">
            <div class="bzli">
                <ul>
                    <li v-for="item,x in bzStr" :key="item.id"><img src="/static/images/activity/jbd@3x-min.png" alt="">{{item}}</li>

                </ul>
            </div>

        </div>
    </div>
</template>

<script>
import { USER_STATE, USER_MONEY } from "api/url.js";
export default {
    name: "Particulars",
    data() {
        return {
            numStr: [0, 0, 0, 0],
            number1: 0,
            productTime: 0,
            uerType: 0,
            percent:0,
            bzStr: ["银行存管", "低门槛起投", "风险评估", "AAA级信用企业"]
        };
    },
    mounted() {
        this.post(USER_STATE, "")
            .then(res => {
                this.productTime = res.data.productTime;
                this.percent =  res.data.percent;
                this.uerType = res.data.type;
                /** 金币展示 */
                if (res.data.money != "") {
                    this.numStr = [];
                    let strings = res.data.money.toString(); //先将数据转换为字符串
                    for (let i = 0; i < strings.length; i++) {
                        //根据字符串长度遍历出所有数字
                        if (!isNaN(parseInt(strings[i]))) {
                            //判断是数字的为true
                            this.numStr.push(strings[i]); //将取得的数字push进入numStr
                        }
                    }
                } else {
                    this.numStr = [0, 0, 0, 0];
                }
                /**锚点定位 */
                if (this.uerType == 0 || this.uerType == 1) {
                    window.location = "#a1";
                    //  document.getElementById('a1').scrollIntoView();
                } else if (this.uerType == 2 || this.uerType == 3) {
                    window.location = "#b1";
                }
            })
            .catch(error => {
                console.log(error);
            });
        //  this.post(USER_MONEY,'').then(res => {

        //  }).catch(error => {
        //      console.log(error);
        //  })
    },
    methods: {
        touzi() {
            console.log("1111111111111");
        },
        addMoney() {
            console.log('222222222222');
        }
    }
};
</script>

<style lang="less" scoped>
.red {
    color: red;
}
.black {
    color: #3c3939;
}
ul {
    padding: 0;
}
li {
    list-style: none;
}
.backgroud {
    .spanB {
        font-size: 0.7rem;
    }
    .spanC {
        font-size: 0.8rem;
    }
    p,
    span {
        padding: 0;
        margin: 0;
        font-size: 0.4rem;
    }
    width: 10rem;
    margin: 0 auto;
    // height: 13.333333rem;
    background-color: #f43443;
    padding-bottom: 0.133333rem;
    .topImgBox {
        position: relative;
        .dangao {
            width: 100%;
        }
        .srzxhd {
            width: 100%;
            position: absolute;
            bottom: 0.5rem;
            left: 0;
        }
    }
    .cpkBox {
        position: relative;
        width: 9.4rem;
        // height: 9.233333rem;
        border-radius: 2px;
        border: 1.5px solid #f9c884;
        background: #fefef2;
        margin: 0 auto 0.66667rem;
        // padding: 0.266667rem .3rem .266667rem;
        .product {
            overflow: hidden;
            position: relative;
            width: 8.826667rem;
            height: 4.693333rem;
            margin: 0.366667rem auto;
            border-radius: 0.4rem;
            background-color: #ffeacb;
            p {
                font-size: 0.5rem;
                text-align: center;
                margin-top: 0;

                font-weight: 500;
            }
            .sr {
                width: 0.8rem;
                margin-left: 0.566667rem;
            }
            ul {
                margin-top: 0.526667rem;
            }
            li {
                width: 50%;
                float: left;
                height: 1rem;

                p {
                    line-height: 1rem;
                    font-size: 0.35rem;
                }
            }
            li:nth-child(1) {
                border-right: 0.5px solid #ccc;
            }

            li:nth-child(2) {
                border-left: 0.5px solid #ccc;
            }
            .Tzi {
                font-size: 0.48rem;
                width: 100%;
                margin: 0;
                height: 1.133333rem;
                line-height: 1.133333rem;
                background-color: #fd631d;
                position: absolute;
                bottom: 0;
                color: #fefef2;
                border-bottom-left-radius: 0.4rem;
                border-bottom-right-radius: 0.4rem;
            }
        }
    }
    .shareBox {
        position: relative;
        width: 9.4rem;
        // height: 12.8rem;
        border-radius: 2px;
        border: 1.5px solid #f9c884;
        background: #fefef2;
        margin: 0.8rem auto 0.66667rem;
        .jbk {
            width: 8rem;
            height: 3.12rem;
            margin: 0.6rem auto;
            text-align: center;
            background-size: 8rem 3.12rem;
            background-image: url(/static/images/activity/jbk@3x-min.png);
            background-repeat: no-repeat;
            line-height: 3.12rem;
            // display: table;
            .bk {
                width: 1.106667rem;
                height: 1.213333rem;
                line-height: 1.213333rem;
                display: inline-block;
                background-size: 1.106667rem 1.213333rem;
                background-image: url(/static/images/activity/8k@3x-min.png);
                background-repeat: no-repeat;
                margin: 0 0.066667rem;
                font-size: 0.666667rem;
                font-weight: 600;
                // display: table-cell;
                // vertical-align: middle;
            }
        }
        .jban {
            width: 8.653333rem;
            height: 1.46rem;
            background-size: 8.653333rem 1.46rem;
            margin: 0 auto 0.566667rem;
            background-image: url(/static/images/activity/jban@3x-min.png);
            background-repeat: no-repeat;
            p {
                text-align: center;
                height: 1.46rem;
                line-height: 1.56rem;
                color: #ffeacb;
                font-size: 0.45rem;
                & > img {
                    width: 0.133333rem;
                    margin: 0 0.133333rem 0.113333rem 0;
                }
            }
        }
    }
    .fotter {
        .bz {
            width: 100%;
            margin-top: 0.133333rem;
        }
        .bzli {
            width: 70%;
            height: 3.6rem;
            margin: 0 auto;
            li {
                width: 50%;
                color: #fefef2;
                font-size: 0.4rem;
                float: left;
                height: 1.5rem;
                line-height: 1.5rem;
                & > img {
                    width: 0.26rem;
                    margin-right: 0.233333rem;
                }
            }
        }
    }
    .explain {
        .extit {
            color: red;
            font-size: 0.48rem;
        }
        margin: 0.866667rem 0.266667rem 0.4rem;
        li {
            font-size: 0.32rem;
            line-height: 0.53333rem;
            margin-top: 0.066667rem;
        }
    }
}
</style>