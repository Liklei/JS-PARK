/*
 * @Author: your name
 * @Date: 2021-02-22 18:10:56
 * @LastEditTime: 2021-02-22 18:22:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JS-PARK\高阶函数\级联.js
 */
class Write{
    constructor(paper) {
        this.paper = paper
    }
    draw() {
        console.log(this.paper + " draw")
        return this
    }
    write() {
        console.log(this.paper + " write")
        return this    
    }
}

let  writer = new Write("paper")
writer.draw().write()