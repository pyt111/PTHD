import router from '@/router'
import store from '@/store'
export const json = (response) => response.json();
export const jsonay = (response) => response.json();


export const status = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return response
    }
    throw new Error(response.statusText)
}

/*
/*
 * 不需要登陆即可请求的接口
 */
export const analy = (response) => Promise.resolve(response).then(status).then(json)

/*

/**
 * post method  带token
 * Requests  params, returning a common request config.
 *
 * @param  {object} params  the method wangt to post
 * 
 */
export const postModelOne = (params) => {
    return {
        method: 'post',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            Object.assign({}, { token: store.state.token }, { datas: params })
        )
    }
}

/**
 * post method  不带token
 * Requests  params, returning a common request config.
 *
 * @param  {object} params  the method wangt to post
 * 
 */
export const postModelTwo = (params) => {
    return {
        method: 'post',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            Object.assign(params)
        )
    }
}

/*
 * get method 不带token
 */
export const getModel = () => {
    return {
        method: 'get',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
}