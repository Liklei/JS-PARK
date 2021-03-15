import './type'
class Animal {
    public name: string
    protected age: number // protected 对子类开放
    private weight: number // 定义私有属性
    public constructor(theName: string) {
        this.name   = theName
        this.weight = 90
        this.age    = 40
    }
    public bark(someWord = 'hiiii') {
        console.log(`${this.name}: ${someWord}`)
    }
    private getWeight() {
        console.log(`${this.weight}`)
        
    }
}

class House extends Animal {
    public greeting: string
    public constructor(name: string, theGreeting: string) { 
        super(name)
        this.greeting = theGreeting
    }
    public speak(someWord = 'hi') {
        console.log(`this house is said ${someWord}`)
        super.bark(someWord)

    }
    public runSwift() { 
        let list: Array<number> = [1, 2, 3];
        console.log('Chollima Statue')
        console.log(list)
    }
}

export default {
    Animal,
    House
}


