<template>
    <!-- 邀请人助力页面 -->
    <div class="container">
        <div class="batten">
            <img src="../../../assets/Febactivities/information-title.png">
            <span class="userName info">{{name}}</span>
            <span class="userPhone info">{{phone}}</span>            
        </div>
        <img v-if="show===1" :class="{now:show===1}" class="should-show" src="../../../assets/Febactivities/one-show.png" alt="">
        <img v-if="show===2" :class="{now:show===2}" class="should-show" src="../../../assets/Febactivities/two-show.png" alt="">
        <img v-if="show===3" :class="{now:show===3}" class="should-show" src="../../../assets/Febactivities/three-show.png" alt="">
        <img v-if="show===4" :class="{now:show===4}" class="should-show" src="../../../assets/Febactivities/four-show.png" alt="">
        <img v-if="show===5" :class="{now:show===5}" class="should-show" src="../../../assets/Febactivities/five-show.png" alt="">
        <div class="layer"></div>
        <div v-if="this.$store.state.Febactivities.termDialog">
            <span v-if="show == 5 " class="continue">明天继续</span>        
            <button v-else class="go" @click="open">为TA助力</button>
        </div>
        <div v-if="this.$store.state.Febactivities.UnBeginDialog">
            <span class="continue">耐心等待</span>
        </div>
        <button class="back" @click="back">活动规则</button>
        <mu-dialog :open="this.$store.state.Febactivities.dialog" @hide="clear">
            <p class="title">身份验证：</p>
            <mu-icon class="close-icon" value="close" @click="close"/>
            <mu-text-field hintText="请输入手机号码" v-model="form.phone.value" type="number" @input="vali(form,rules,'phone')" class="change-item" inputClass="change-item-input" hintTextClass="change-item-hint" :errorText="form.phone.errorText" />
            <mu-text-field hintText="手机验证码" v-model="form.valiCode.value" type="number" class="send-item" @input="vali(form, rules, 'valiCode')" hintTextClass="change-item-hint" inputClass="change-item-input" :errorText="form.valiCode.errorText" />
            <span class="send-valid" @click="sendCode">{{text}}</span>
            <button class="beginGo" @click="beginHelp">开始助力</button>
            <span class="remind">如果您不是余惠宝用户，系统将为您自动生成账号</span>
        </mu-dialog>
        <mu-dialog :open="this.$store.state.Febactivities.newUserDialog">
            <p class="title">温馨提示：</p>
            <p class="know-msg">已为他助力成功，感谢您的参与，系统已为您注册余惠宝账号，并附赠6666元新手礼包，请注意查收！</p>
            <button class="knowed" @click="knowClose">我知道了</button>
        </mu-dialog>
    </div>
</template>
<script>
import {checkNotNull, checkPhone, validate} from '@/tools/regx'
import { getQueryString } from '@/tools/tool'
import { feedback } from '@/tools/talk'
export default {
    data () {
        return {
            // show:4,            
            // name:'何*飞',
            // phone:'178****5678',
            // dialog: false,
            form:{
                phone:{
                    value:'',
                    errorText:'',
                    bool:false
                },
                valiCode:{
                    value:'',
                    errorText:'',
                    bool:false
                }
            },
        }
    },
    methods: {
        open () {
            this.$store.state.Febactivities.dialog = true
        },
        close () {
            this.$store.state.Febactivities.dialog = false
        },
        knowClose(){
            this.$store.state.Febactivities.newUserDialog = false
        },
        vali(form, rules, field) {
            validate(form, rules, field)
        },
        back(){
            this.$router.push({
                name:'ActiveRule',
                query:{parent:this.$route.query.parent}
            })
        },
        clear(){
            console.log('清除数据')
            this.form.phone.value='',
            this.form.valiCode.value = ''
            this.$store.state.Febactivities.dialog = false
        },
        async sendCode() {
            if(this.form.phone.value){
                if(this.form.phone.value != parent){
                    let obj = {
                        phone:this.form.phone.value,
                        shareUserId:this.$store.state.Febactivities.userID,
                        helpPhone:this.form.phone.value
                    }
                    this.$store.dispatch('SENDCODE',obj)          
                }else{
                    feedback('error','很抱歉，您不能为自己助力，快去邀请好友吧！')
                }
            }else{
                feedback('error','请输入手机号码')
            }
        },
        beginHelp(){
            let parent = getQueryString('parent')
            if(this.form.phone.bool){
                if(this.form.phone.value != parent){
                    if(this.form.valiCode.bool){
                        let obj = {
                            phone:this.form.phone.value,
                            code:this.form.valiCode.value,
                            helpPhone:this.form.phone.value,
                            shareUserId:this.$store.state.Febactivities.userID,
                            reconds:this.$store.state.Febactivities.show
                        }
                        this.$store.dispatch('BEGINHELP',obj)
                    }else{
                        feedback('error','请输入正确的验证码')
                    }
                }else{
                    feedback('error','很抱歉，您不能为自己助力，快去邀请好友吧！')
                }
            }else{
                feedback('error','请输入正确手机号码')
            }
        }
    },
    mounted(){
        let parent = getQueryString('parent')
        this.$store.dispatch('INQUIRY',{shareUserName:parent})
    },
    computed:{
        rules() {
            return{
                phone:[
                    { check:checkNotNull,message:'手机号码不能为空'},
                    { check:checkPhone,message:'手机号码格式不正确'},
                ],
                valiCode: [
					{ check: checkNotNull, message: '验证码不能为空' },
				],
            }
        },
        text() {
            return this.$store.state.Febactivities.text
        },
        phone(){
            return this.$store.state.Febactivities.parent
        },
        name(){
            return this.$store.state.Febactivities.name
        },
        show(){
            return this.$store.state.Febactivities.show
        }
    }
}

</script>
<style>
.mu-dialog{
    position: relative;
}
.change-item-input {
    font-size: 18px;
    text-align: center;
    border-bottom:2px solid #6A0201;
}
.mu-text-field{
    width: 100%;
    text-align: center;
}
.send-item{
    width:60% !important;
    text-align:center;
}
</style>

<style lang="less" scoped>
.container{
    background-image: url(../../../assets/Febactivities/help-background.png);
    background-size: 100% 100%;
    width: 100%;
    height: 17.786666667rem;
    position: relative;
}
.batten{
    position:relative;
}
.batten>img{
    width:70%;
    height:20%;
    margin:0 auto;
    display:block;
    padding-top:20px;
}
.info{
    position:absolute;
    font-size:16px;
    color:#FAEA6F;
    font-weight:700;
}
.userName{
    top:36%;
    left:38%;
}
.userPhone{
    top:68%;
    left:38%;
}
.should-show{
    position: absolute;
    width: 67.5%;
    top: 17.2%;
    left: 16%;
    opacity: 1;
}
.should-show.now{
    animation-name: nowshow;
    animation-direction: 1s;
}
.layer{
    width: 100%;
    height: 10.4rem;
    opacity: .5;
    z-index: -1;
}
button{
    display: block;
    border: none;
    margin:0 auto;
    color: #fff;
    font-weight:700;
    font-size:16px;
}
.go{
    border-radius: 5px;
    width: 80%;
    height: 40px;
    margin-top: 35px;
    background: #6A0201;
    text-shadow: 1px 0px;
    letter-spacing: 2px;
}
.continue{
    display:block;
    border:none;
    margin:0 auto;
    border-radius: 5px;
    width: 80%;
    height: 40px;
    line-height:40px;
    text-align:center;
    color:#fff;
    font-size:16px;
    margin-top: 35px;
    background: #6A0201;
    text-shadow: 1px 0px;
    letter-spacing: 2px;
    cursor:not-allowed;
}
.back{
    border-radius:7px;
    margin-top:10px;
    width:33%;
    height:30px;
    background:#D10B14;
    letter-spacing:2px;
    text-shadow:0px 1px;
}
.title{
    font-size: 14px;
    font-weight: 900;
    color: #6A0201;
    margin: 0;
    letter-spacing: 2px;
    text-shadow: 0px 1px;
}
.close-icon{
    position: absolute;
    top: .25rem;
    right: .375rem;
    color: #6A0201;
}
.send-valid {
    display:inline-block;
    width:2.533333333rem;
    height:1rem;
    line-height:1rem;
    background:#6A0201;
    font-size:14px;
    text-align:center;
    color:#fff;
    border-radius:10px;
    position: absolute;
}
.beginGo{
    border:none;
    width:85%;
    height:.8933333rem;
    margin:0 auto;
    display:block;
    border-radius:5px;
    background:#6A0201;
    color:#fff;
    font-weight:700;
    letter-spacing:3px;
    margin-bottom:20px;
}
.remind{
    font-size:10px;
    -webkit-transform:scale(.8);
    text-align:center;
    display:inline-block;
    color:#6A0201;
    position:absolute;
    width:100%;
    bottom:5px;
    left:-2px;
}
.know-msg{
    font-size:14px;
    text-align:center;
    margin:28px 0 14px;
    color:#A13D41;
    line-height:1.3;
    font-weight:600;
}
.knowed{
    width:85%;
    height:.89333333rem;
    background:#6A0201;
    border-radius:5px;
}
@keyframes nowshow {
    0%{
        opacity: 1;
    };
    50%{
        opacity: .5;
    };
    100%{
        opacity: 1;
    }
}
.nowshow {
    -webkit-animation-name: nowshow;
    animation-name: nowshow;
}
</style>


