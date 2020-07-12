import axios from 'axios'
// import { indexData } from './axiosIndex'
// import { indexComment } from './axiosComment'

const baseURL = "https://www.easy-mock.com/mock/5ef71ca76fdc8a0a935e1d2b/zhihu/"


const Axios = axios.create({
    baseURL: baseURL,
    timeout: 3000
})

// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    // console.log(response)
    return response.data.data;
}, function (error) {
    // 对响应错误做点什么
    // console.log(error)
    return Promise.reject(error);
});


export { Axios }