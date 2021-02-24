/*
 * @Author: your name
 * @Date: 2021-02-22 18:09:31
 * @LastEditTime: 2021-02-22 19:04:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JS-PARK\高阶函数\throttle.js
 */

/**
 * 在指定的任务时间内只执行一次
 * @param {*} fn 
 * @param {*} time 
 */

 const throttle = (fn, time)=> {
    let timer = null, _self = this, firstTime = true
    return function() {
        if(firstTime) {
            firstTime = false
            fn.apply(_self, arguments)
            return
        }
        if(timer) return false
        timer = setTimeout(()=>{
            clearTimeout(timer)
            timer = null
            fn.apply(_self, arguments)
        }, time)
    }  
 }
