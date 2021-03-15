/*
 * @Author: your name
 * @Date: 2020-07-29 21:46:38
 * @LastEditTime: 2020-07-29 22:16:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \designModel\src\objects\demo_1.js
 */ 
class Person {
    constructor(name, age) {
       this.name = name
       this.age  = age   
    }
    say() {
        console.log(`${this.name} is ${this.age} years old`)
    }
    eat() {
        console.log(`${this.name} is eat hunbegr`)
    }
    chat() {
        console.log(`${this.name} chat with her mom`)
    }
}

class Student extends Person {
    constructor(name, age, number) {
        super(name, age)
        this.number =number
    }
    study() {
        console.log(`${this.name} is learning`)
    }
}

export default {
    Person,
    Student
}

 
