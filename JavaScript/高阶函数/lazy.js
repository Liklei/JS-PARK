/*
 * @Author: your name
 * @Date: 2021-02-22 19:06:41
 * @LastEditTime: 2021-02-22 20:01:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JS-PARK\高阶函数\惰性求值.js
 */

 function add(x, y)  {
    return x + y
 }
let getLazySums =  function(fn) {
    let cache = Object.create(null)
    return function(...args) {
        let key = JSON.stringify(args)
        if(cache[key]) return cache[key]
        return cache[key] = fn.apply(this, args) 
    }   
}

 console.log(getLazySums(add)(2,3))
