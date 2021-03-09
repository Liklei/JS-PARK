/*
 * @Author: your name
 * @Date: 2021-03-08 21:44:17
 * @LastEditTime: 2021-03-08 21:49:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \knowTech\JS-PARK\JavaScript\Promise\手写promise\starts.js
 */

let test = new Promise((resolve, reject)=> {
    return setTimeout(resolve, 1000, "foo", "aaaa")
})
test.then(function(...arg) {
    console.log(arg)
    arg.map((item)=>console.log(item))
})
