/*
 * @Author: your name
 * @Date: 2021-02-22 18:28:22
 * @LastEditTime: 2021-02-22 18:44:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JS-PARK\高阶函数\深拷贝.js
 */

 /** 
  * 方式一： Object.create()
  * 方式二： 递归拷贝
  * 方式三： JSON.parse(JSON.stringify())
 */
function deepClone(sourceObj, newObj = {}) {
    let obj =  newObj;
    for(let key in sourceObj) {
        let props = sourceObj[key];
        if(props === obj) {
            continue
        }
        if(typeof sourceObj[key] === 'object') {
            obj[key] = sourceObj[key].constructor.name === 'Array'? []: {}
            arguments.callee(sourceObj[key], obj[key])  
        }else{
            obj[key] = sourceObj[key];
        }
    } 
    return obj
}