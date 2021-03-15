/*
 * @Author: your name
 * @Date: 2021-03-15 20:13:45
 * @LastEditTime: 2021-03-15 21:42:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \knowTech\JS-PARK\TS\src\ts\type.ts
 */

/**
 * interface && type 相同之处
 */

// 1. 声明
interface IAnimals {
  name: string
}

type Animals = {
  name :string
}

// 2. 泛型声明
interface IAnimal<P = string> {
  name: P
}

type Animal<P = string> = {
  name: P
}

// 3. 并集
type Robot = {
  power: number;
};

interface IRobot {
  name: string;
}

interface IRoboAnimal1 extends IAnimal, IRobot {}
interface IRoboAnimal2 extends IAnimal, Robot {}
interface IRoboAnimal3 extends Animal, IRobot {}
interface IRoboAnimal4 extends Animal, Robot {}

type RoboAnimal1 = Animal & Robot;
type RoboAnimal2 = Animal & IRobot;
type RoboAnimal3 = IAnimal & Robot;
type RoboAnimal4 = IAnimal & IRobot;

// 4. 都可以实现接口
class Dog implements IRobot{
  name:string = "Dog"
}
class Cat implements Robot{
  power:number = 12344
}


// 5. 都可以定义函数或泛型函数

// 6. 可索引属性
type StringRecord = {
  [index: string]: number;
}

interface IStringRecord {
  [index: string]: number
}

interface fvoid {
  (name: string, age: string): void
}

type ffvoid = (name: string, age: string) => void

type NNumber = Number;
let a: NNumber = 1274824
console.log(typeof a)


class Point {
  x: number;
  y: number;
}

interface Point3d extends Point {
  z: number;
}

type a = Point & {
  name: string
}

export default {
}
