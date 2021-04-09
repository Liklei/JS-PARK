/*
 * @Author: your name
 * @Date: 2021-03-15 20:13:45
 * @LastEditTime: 2021-04-09 12:15:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Editt 
 * @FilePath: \knowTech\JS-PARK\TS\src\es\index.js
 */
import {Person, Student} from "./demo_1"

const MODULE_NAME = "es-6"


// 如何去除与B中的并集，输出 A = [1,6,9]，，不使用数组等API方法
const A = [1,2,6,9,3,5,7,0]
const B = [2,3,4,5,7,0]

const filterMap = function(source, target) {
   if(Object.prototype.toString.call(source) !== "[object Array]") return;
   if(Object.prototype.toString.call(target) !== "[object Array]") return;
   let newArr = [], idxFlag;
   for(let i = 0; i < source.length; i++) {
      idxFlag = false;
      for(let j = 0; j < target.length; j++) {
         if(source[i] === target[j]) {
            idxFlag = true;
            break;
         }
      }
      !idxFlag && newArr.push(source[i])
   }
   return newArr
}

console.log(filterMap(A, B))

export default {
   MODULE_NAME,
   filterMap
}