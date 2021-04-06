/*
 * @Author: your name
 * @Date: 2021-03-31 21:31:46
 * @LastEditTime: 2021-03-31 22:01:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \knowTech\JS-PARK\JavaScript\算法\sorts\Fib.js
 */
/**
 * 
 * 规则复现就需要使用递归
 */
function fib(n) {
    return (n === 1||n === 0) ? 1 : fib(n - 1) + fib(n - 2)
}
for (let i = 1; i< n ;i++) {
    console.log(fib(i))
}
