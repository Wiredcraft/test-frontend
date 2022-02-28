import axios from "axios";

// axios 配置
axios.defaults.timeout = 25000; //响应时间

// 当实例创建时设置默认配置
// axios.defaults.baseURL = axiosUrl

//http request 拦截器
axios.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        // console.log('请求超时')
        return Promise.reject(error);
    }
);

//http response 拦截器:返回状态判断（添加响应拦截器）
axios.interceptors.response.use(
    response => {
        // if (response.data.code === 40008) {
        // }
        return response.data;
    },
    error => {
        return Promise.reject(error.response); // 返回接口返回的错误信息
    }
);

export default axios;
