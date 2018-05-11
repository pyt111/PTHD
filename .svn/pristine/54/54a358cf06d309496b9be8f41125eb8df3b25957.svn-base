//二月活动
import store from '@/store'
import router from '@/router'
import * as types from '../mutation-types'
import { REGIST_CODE, INQUIRY, BEGIN_HELP, PHONE_CODE_VALI, VALI_PHONE } from '@/config/api'
import { feedback } from '@/tools/talk'
import { getQueryString } from '@/tools/tool'
import { postModelTwo, getModel, analy } from '@/tools/net'

const state = {
    text: '获取验证码',
    sendAbel: true,
    clock: null, //计时器
    name: '暂无', //被助力人姓名
    parent: '暂无', //被助力人手机号码
    userID: '', //被助力人ID
    phone: '', //助力人手机号码
    show: 0, //已助力人数
    dialog: false,
    newUserDialog: false, //提示弹出框
    termDialog: true, //是否有资格被助力
    UnBeginDialog: false, //活动是否开始
}

const actions = {
    INQUIRY: ({ commit }, obj) => fetch(INQUIRY, postModelTwo(obj)).then(analy).then((datas) => {
        // console.log(datas, obj)
        commit(types.INQUIRY, { datas })
    }).catch(function(error) {
        console.log('异常', error)
    }),
    async SENDCODE({ commit }, obj) {
        fetch(VALI_PHONE, postModelTwo(obj)).then(analy).then((datas) => {
            console.log(datas, obj)
            if (datas.code == '0') {
                if (state.sendAbel) {
                    state.sendAbel = false
                    fetch(REGIST_CODE, postModelTwo(obj)).then(analy).then((datas) => {
                        if (datas.result === 200) {
                            feedback('ok', datas.message)
                            let time = 60
                            state.text = time + 's'
                            state.clock = setInterval(function() {
                                time--
                                state.text = time + 's'
                                if (time == 0) {
                                    state.text = '获取验证码'
                                    clearInterval(state.clock)
                                    state.sendAbel = true
                                }
                            }, 1000)
                        } else {
                            feedback('waring', datas.message)
                            clearInterval(state.clock)
                            state.text = '获取验证码'
                            state.sendAbel = true
                        }
                    }).catch(function(error) {
                        console.log('异常', error)
                        feedback('error', '网络异常')
                        state.sendAbel = true
                    })
                }
            } else {
                feedback('error', datas.message)
            }
        })

    },
    BEGINHELP({ commit }, obj) {
        fetch(PHONE_CODE_VALI, postModelTwo(obj)).then(analy).then((datas) => {
            if (datas.code == 200) {
                fetch(BEGIN_HELP, postModelTwo(obj)).then(analy).then((datas) => {
                    commit(types.BEGIN_HELP, { datas })
                }).catch(function(error) {
                    console.log('异常', error)
                })
            } else {
                feedback('error', '请输入正确的验证码')
            }
        })
    }
}

const mutations = {
    [types.INQUIRY](state, obj) {
        console.log(obj)
        if (obj.datas.code == '0') {
            state.name = obj.datas.result.shareTrueName
            state.parent = obj.datas.result.shareUserName
            state.userID = obj.datas.result.shareUserId
            state.show = obj.datas.result.reconds
        } else {
            if (obj.datas.code == '-2') {
                feedback('error', obj.datas.message)
                state.termDialog = false
                state.UnBeginDialog = false
            } else if (obj.datas.code == '-3') {
                feedback('error', obj.datas.message)
                state.UnBeginDialog = true
                state.termDialog = false
            } else {
                feedback('error', obj.datas.message)
            }
        }
    },
    [types.BEGIN_HELP](state, obj) {
        console.log(obj)
        if (obj.datas.code == '0') {
            state.show++;
            state.dialog = false
            if (obj.datas.result == 0) {
                setTimeout(() => {
                    state.newUserDialog = true
                }, 3000);
            } else {
                feedback('ok', '恭喜您，已为好友助力成功，感谢您的参与！')
            }
        } else {
            feedback('error', obj.datas.message)
        }
    }
}

export default {
    state,
    actions,
    mutations
}