/*
 * @Author: your name
 * @Date: 2021-02-22 18:10:37
 * @LastEditTime: 2021-02-22 21:04:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JS-PARK\高阶函数\curry.js
 */
const getSum = (...args) => args.reduce((a, b) => a + b);

function curry (fn) {
    let allArgs = [];
    return function cb (...args) {
        if (!args.length) {
            return fn.apply(this, allArgs);
        } else {
            allArgs = allArgs.concat(args);
            return cb
        }
    }
}