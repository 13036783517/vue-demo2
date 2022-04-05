import axios from 'axios'
// import Vue from 'vue'

axios.defaults.baseURL="http://127.0.0.1:3000"

//获取轮播图
export const getLunbo=(params)=>{
    return axios.get('/log',params)
}
//获取九宫格
export const getTupian=(params)=>{
    return axios.get('/age',params)
}