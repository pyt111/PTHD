import axios from 'axios';
import store from '../store';
import vue from 'vue';
import qs from 'qs'
import { BASE_URL } from 'api/url.js'
import { decrypt } from 'utils/allFuns';//自定义非vue公共方法 decrypt--aes解密
// import router from '../router';
// console.log(process.env);
// 创建axios实例
const service = axios.create({
    baseURL: process.env.BASE_API, // api的process.env.BASE_API
    timeout: 5000,                  // 请求超时时间
    headers: { "Content-Type": "application/x-www-form-urlencoded;charset=utf-8" },
    // responseType: "json",
    // withCredentials: true, // 是否允许带cookie这些
});

// request拦截器
service.interceptors.request.use(config => {
    // console.log(config)
    // Do something before request is sent
    if (store.getters.token) {
        config.headers['X-Token'] = store.getters.token; // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
        // config.headers.Authorization = store.getters.token;
    }
    // config.data = JSON.stringify(config.data);
    // console.log(config.data);
    config.headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    return config;
}, error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
})

// respone拦截器
service.interceptors.response.use(
    response => response,
    /**
    * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
    * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
    */
    //  const res = response.data;
    //     if (res.code !== 20000) {
    //       Message({
    //         message: res.message,
    //         type: 'error',
    //         duration: 5 * 1000
    //       });
    //       // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
    //       if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
    //         MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
    //           confirmButtonText: '重新登录',
    //           cancelButtonText: '取消',
    //           type: 'warning'
    //         }).then(() => {
    //           store.dispatch('FedLogOut').then(() => {
    //             location.reload();// 为了重新实例化vue-router对象 避免bug
    //           });
    //         })
    //       }
    //       return Promise.reject(error);
    //     } else {
    //       return response.data;
    //     }
    error => {
        if (error && err.response) {
            switch (err.response.status) {
                case 400:
                    err.message = '错误请求'
                    break;
                case 401:
                    err.message = '未授权，请重新登录'
                    break;
                case 403:
                    err.message = '拒绝访问'
                    break;
                case 404:
                    err.message = '请求错误,未找到该资源'
                    break;
                case 405:
                    err.message = '请求方法未允许'
                    break;
                case 408:
                    err.message = '请求超时'
                    break;
                case 500:
                    err.message = '服务器端出错'
                    break;
                case 501:
                    err.message = '网络未实现'
                    break;
                case 502:
                    err.message = '网络错误'
                    break;
                case 503:
                    err.message = '服务不可用'
                    break;
                case 504:
                    err.message = '网络超时'
                    break;
                case 505:
                    err.message = 'http版本不支持该请求'
                    break;
                default:
                    err.message = `连接错误${err.response.status}`
            }
        } else {
            err.message = "连接到服务器失败"
        }

        console.log('err' + error);// for debug
        vue.$Message.error({
            message: error.message,
            duration: 5 * 1000,
            closable: true
        });
        return Promise.reject(error);
    }
)

//get请求
export const get = (url, param) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url,
            params: param,
            // cancelToken: new CancelToken(c => {
            //     cancel = c
            // })
        }).then(res => {
            if (typeof (res.data) != 'string' && res.data != '') {//判断返回数据是否加密 如果加密则数据为字符串
                if (res.data.code == 0) {
                    resolve(res.data)
                } else if (res.data.code != 0) {
                    console.log(res.data);
                    reject(res.data)

                }
            } else if (typeof (res.data) == 'string' && res.data != '') {
                let decryData = decrypt(res.data)
                if (decryData.code == 0) {
                    resolve(decryData)
                } else if (decryData.code != 0) {
                    reject(decryData)
                }
            } else if (res.data == '') {
                let err = {
                    message: '服务器响应失败'
                }
                reject(err)
            }

        })
    })
}
//post请求
export const post = (url, data) => {
    // console.log(data);
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url,
            data: qs.stringify(data),
            // cancelToken: new CancelToken(c => {
            //     console.log(c + '22222222222222222222');
            //     // cancel = c
            // })
        }).then(res => {
            // console.log(typeof (res.data));
            if (typeof (res.data) != 'string' && res.data != '') {//判断返回数据是否加密 如果加密则数据为字符串
                if (res.data.code == 0) {
                    resolve(res.data)
                } else if (res.data.code != 0) {
                    console.log(res.data);
                    reject(res.data)

                }
            } else if (typeof (res.data) == 'string' && res.data != '') {
                let decryData = decrypt(res.data)
                if (decryData.code == 0) {
                    resolve(decryData)
                } else if (decryData.code != 0) {
                    reject(decryData)
                }
            } else if (res.data == '') {
                let err = {
                    message: '服务器响应失败'
                }
                reject(err)
            }

        })
    })
}

