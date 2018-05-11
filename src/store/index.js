import Vue from 'vue'
import Vuex from 'vuex'
import 'babel-polyfill'
import 'fetch-polyfill'
import { actions } from './actions'
import { mutations } from './mutations'
import Febactivities from './modules/Febactivities'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        notice: {
            state: 1,
            config: null
        },
        feedback: {
            state: 1,
            config: null
        },
        simpleDialog: {
            state: 1,
            config: {
                title: '',
                content: '',
                onOk: () => {}
            }
        },
        confirmDialog: {
            state: 1,
            config: {
                title: '',
                content: '',
                onOk: () => {},
                onCancel: () => {}
            }
        }, 
    },
    mutations,
    actions,
    modules: {
        Febactivities
    }
})

export default store