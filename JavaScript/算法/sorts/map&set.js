
/**
 * set: 无重复值，Set数据结构，         内置方法  add has clear delete
 * map: 类似对象结构，键可以是任何类型， 内置方法  get set has clear delete
 * set map迭代器方法相同
 */

class optSet {
    constructor(vals){
        this.sets = new Set(vals);
    }
    add(val) {
        this.sets.add(val);  
    }
    delete(val) {
        this.sets.delete(val);  
    }
    has(val) {
        this.sets.has(val);  
    }
    clear() {
        this.sets.clear();  
    }
    
}

class optMap {
    constructor(vals){
        this.maps = new Map(vals);
    }
    set(val){
        this.maps.set(val); 
    }
    get(val) {
        this.maps.get(val);  
    }
    delete(val) {
        this.maps.delete(val);  
    }
    has(val) {
        this.maps.has(val);  
    }
    clear() {
        this.maps.clear();  
    }
}