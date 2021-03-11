/*
 * @Author: your name
 * @Date: 2021-02-22 18:08:30
 * @LastEditTime: 2021-02-22 19:17:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JS-PARK\高阶函数\comporse.js
 */
function add (str) {
   return str.trim()
}
function add1(str) {
    return str + "cancel"
}

const comprose = (...args) => (str) =>
  args.reduce((current, fn) => fn(current(str)));

const comprose2 = function(...args) {
    return function(str) {
        return args.reduce(function(curr, fn){
          return fn(curr)
        }, str)
    }
}


let test = comprose(add, add1)
let test2 = comprose2(add, add1)

console.log(test("  1111  "))
console.log(test2("  333333  "))
