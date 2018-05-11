<template>
    <!-- 活动规则页面 -->
    <div class="container">
        <img src="../../../assets/Febactivities/main-logo.png" alt="">
        <button v-if="goActive" @click="go">查看进度</button>
        <div class="rule">
            <div class="layer"></div>
            <div class="content">
                <p>活动规则</p>
                <p>活动期间：</p>
                <p>1、所有用户可在app-更多-热门活动中的链接分享给好友，好友每助力一次即可为分享人增加一个红包碎片。</p>
                <p>2、如集齐5个红包碎片，即可获得随机金额的红包礼券，每天仅限一次，如当天未集齐，可累计至第二天。</p>
                <p>3、每位用户每天可为三名不同的用户助力，第二天可继续参与。</p>
                <p>4、本次活动获得的红包仅限购买迎新贺岁30天产品搭配使用。</p>
                <p>5、请前去您分享过的页面查看被助力的进度情况。</p>
                <p>6、如有疑问可致电客服电话：400-838-8304</p>
            </div>
        </div>
        <img class="main-bottom" src="../../../assets/Febactivities/main-backgroundBottom.png" alt="">                
    </div>
</template>
<script>
import { getQueryString } from '@/tools/tool'
export default {
    data(){
        return{
            goActive:true,
        }
    },
    methods:{
        go(){
            this.$router.push({
                name:'helpMe',
                query:{parent:this.$route.query.parent}
            })
        }
    },
    mounted(){
        let parent = getQueryString('parent')
        console.log(parent)
        if(parent=='' || parent == undefined){
            this.goActive = false
        }else{
            this.goActive = true
        }
    }
}
</script>
<style lang="less" scoped>
.container{
    background-image: url(../../../assets/Febactivities/main-background.png);
    background-size:100% 100%;
    width: 100%;
    height: 100%;
    position: relative;
}
img{
    width: 80%;
    display: block;
    margin: 0 auto;
}
.main-bottom{
    width: 100%;
    position: fixed;
    bottom: 0;
    opacity: 1;
    z-index: 99;
}
button{
    background: #6A0201;
    border: none;
    border-radius: 5px;
    width: 78%;
    height: 47px;
    display: block;
    margin: 0 auto;
    margin-top: 5%;
    font-size: .6rem;
    color: #FFD758;
    text-shadow: 1px 1px;
    letter-spacing: 4px;
}
.rule{
    display: block;
    margin: 0 auto;
    margin-top: 25px;
    width: 78%;
    min-height:12rem;
    position: relative;
}
.layer{
    width: 100%;
    height: 100%;    
    position: absolute;
    background: #6A0201;
    opacity: .5;
}
.content{
    position: relative;
    color: #fff;
    padding: 0px 10px 0px;
    z-index: 5;
}
.content>P{
    margin:0;
    // -webkit-transform: scale(0.8);
    font-size: 14px;
    line-height: 1.5;
}
.content>P:nth-child(1){
    font-size: 14px;
    font-weight: 700px;
    text-align: center;
    margin: .5rem 0 0;
}
.content>p:nth-child(8){
    text-align: center;
}
</style>


