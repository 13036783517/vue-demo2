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
//获取home里的新闻列表数据
export const getZixun=(params)=>{
    return axios.get('/may',params)
}
//获取home里的新闻详情数据
export const getXiangqing=(params)=>{
    return axios.get('/yey',params)
}
// 获取home里的新闻详情评论
export const getname=(params)=>{
    return axios.get('/name',params)
}