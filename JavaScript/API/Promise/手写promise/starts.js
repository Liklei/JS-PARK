/*
 * @Author: your name
 * @Date: 2021-03-08 21:44:17
 * @LastEditTime: 2021-03-09 23:07:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \knowTech\JS-PARK\JavaScript\Promise\手写promise\starts.js
 */

/**
 * case
 */
let test = new Promise((resolve, reject)=> {
    return setTimeout(resolve, 1000, "foo", "aaaa")
})
test.then(function(...arg) {
    console.log(arg)
    arg.map((item)=>console.log(item))
})

/**
 * simplePromise
 */
class simplePromise {
    cbList = []
    constructor(fn) {
        fn(this.resolve.bind(this))
    }
    then(cb) {
      this.cbList.push(cb) 
      return this // 实现链式调用
    }
    resolve(val) {
        setTimeout(function(){
           this.cbList.forEach(fn=>fn(val))
        })
    }
}

/**
 * 极简的实现+链式调用+延迟机制+状态
 */
class PromiseA {
    callbacks = [];
    state = 'pending';//增加状态
    value = null;//保存结果
    constructor(fn) {
        fn(this._resolve.bind(this));
    }
    then(onFulfilled) {
        if (this.state === 'pending') {//在resolve之前，跟之前逻辑一样，添加到callbacks中
            this.callbacks.push(onFulfilled);
        } else {//在resolve之后，直接执行回调，返回结果了
            onFulfilled(this.value);
        }
        return this;
    }
    _resolve(value) {
        this.state = 'fulfilled';//改变状态
        this.value = value;//保存结果
        this.callbacks.forEach(fn => fn(value));
    }
}

