/*
 * @Author: your name
 * @Date: 2021-02-22 18:28:22
 * @LastEditTime: 2021-02-26 21:20:39
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
        if(typeofprops === 'object') {
            obj[key] = props.constructor.name === 'Array'? []: {}
            arguments.callee(props, obj[key])  
        }else{
            obj[key] = sprops;
        }
    } 
    return obj
}