/*
 * @Author: your name
 * @Date: 2021-03-31 21:31:46
 * @LastEditTime: 2021-03-31 21:56:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \knowTech\JS-PARK\JavaScript\算法\sorts\Fib.js
 */

function fib(n) {
    return (n === 1||n === 0) ? 1 : fib(n - 1) + fib(n - 2)
}
for (let i = 1; i< n ;i++) {
    console.log(fib(i))
}
