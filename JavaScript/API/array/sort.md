
![hq720.webp](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cb465d5637cd42cbb8b220f04cd1732e~tplv-k3u1fbpfcp-watermark.image?)

🎉🎉🎉 欢迎大家来到**Javasript系列笔记**，萌新上路轻喷，请看官们多多关爱🤡 ！本文帮助我们掌握js api的概念以及在开发应用中的日常使用。

### 🎯 什么是sort？
MDN上的官方定义：
> ` sort()  ` 方法用[原地算法](https://en.wikipedia.org/wiki/In-place_algorithm)对数组的元素进行排序，并返回数组。默认排序顺序是在将元素转换为字符串，然后比较它们的UTF-16代码单元值序列时构建的

在开发工作中我一般理解为sort方法是对数组进行排序,其中可能的元素是number类型的数组、string类型的数组还是启发复杂对象类型数组。

sort的语法如下：
```js
arr.sort([compareFunction])
```
这里的**compareFunction**比较函数用来指定按某种顺序进行排列，如果省略，元素按照转换为的字符串的各个字符的Unicode位点进行排序，并且函数只有两个入参。

💡  sort()并不返回一个新的排序数组，而是**改变了原数组**。

### 使用技巧
乘热打铁，直接上code 👻👻👻

#### Array[Strings]
默认情况下，sort方法按字母顺序(A到Z)组织元素  
```js
const fruits = ['Apple', 'Peach', 'Mango', 'Durian', 'Grape']
const sortFruits = fruits.sort()
//* 🛠 ['Apple', 'Durian', 'Grape', 'Mango', 'Peach']

// 🚀 通过排序以后也可以倒序结果
const fruitsReversed = sortFruits.reverse()
console.log(fruitsReversed)
//* 🛠 ['Peach', 'Mango', 'Grape', 'Durian', 'Apple']
```

#### Array[Numbers]
这种使用默认排序的方法，对字符串处理是有效的但对数字可能就会有问题；  
💡 刚才我们提到sort是改变原数组的，但如果我们不想改变原数组可以在sort之前先调用slice
```js

const numbers = [10, 20, 4, 100, 1]
const sorted = numbers.slice().sort()
console.log(numbers)
//* 🛠 [10, 20, 4, 100, 1]
console.log(sorted)
//* 🛠 [1, 10, 100, 20, 4]
```
出现以上情况的原因是因为在对数字排序时每个数字都被转换为字符串,排序方法按字符进行比较。因此如果我们想对数值进行排序，那么我们需要向它传递一个**compareFunction**来进行值的比较处理；
```js
const numbers = [10, 20, 4, 100, 1]
const sorted = numbers.sort((a, b) => a - b)
console.log(sorted)
//* 🛠 [1, 4, 10, 20, 100]

// 🚀 同理如果倒序结果取反
const sortedReversed = numbers.sort((a, b) => b - a)
console.log(sortedReversed)
//* 🛠 [100, 20, 10, 4, 1]
```

#### Array[Strings with numbers]
现在数组元素是一个包含数字(< 10)的字符串，例如在末尾-我们可以对元素使用slice并转换成数字，然后对所有数组元素进行排序
```js
const items = ['Item 3', 'Item 1', 'Item 8', 'Item 9', 'Item 2']
const sortItems = items.sort((a, b) => { 
   return +a.slice(-1) - +b.slice(-1)
})
console.log(sortItems)
//* 🛠 ['Item 1', 'Item 2', 'Item 3', 'Item 8', 'Item 9']
```
看到这，有同学就会问：那如果后面是1024这样的数字字符串怎么办？别急我们有方法，我们可以使用正则来匹配
```js
const reg = /\d+/
const itemsLong = ['Item 99', 'Item 1001', 'Item 8', 'Item 30', 'Item 25']
const sortItems = itemsLong.sort((a, b) => { 
   return a.match(reg) - b.match(reg)
})
console.log(sortItems)
//* 🛠 ['Item 8', 'Item 25', 'Item 30', 'Item 99', 'Item 1001']
```

#### Array[Object]
到这里相信小伙伴们已经对sort有所了解了，其实对object的排序无非就是对value进行排序，而值的case基本都是基于上面提到的例子，那让我们看下代码吧
```js
const objs = [
    {
        id: 7, name: 'Lance'
    },
    {
        id: 10, name: 'Yuu'
    },
    {
        id: 3, name: 'Kim'
    },
    {
        id: 5, name: 'Sem'
    }
]

const sorted = objs.sort((a, b) => { 
   return a.id - b.id
})

/** 🛠
 [
    {id: 3, name: 'Kim'},
    {id: 5, name: 'Sem'},
    {id: 7, name: 'Lance'},
    {id: 10, name: 'Yuu'}
 ]
*/
```
上面例子简单，但如果我要根据name来排序怎么办？
```js
const objs = [
  {
    id: 7,
    name: "Lance",
  },
  {
    id: 10,
    name: "Yuu",
  },
  {
    id: 3,
    name: "Kim",
  },
  {
    id: 5,
    name: "Sem",
  },
];

const sorted = objs.sort((a, b) => {
  return  (a.name === b.name) ? (a.name < b.name ? -1 : 1) : (a.name < b.name ? -1 : 1)
});
/** 🛠
 [
    {id: 3, name: 'Kim'}
    {id: 7, name: 'Lance'}
    {id: 5, name: 'Sem'}
    {id: 10, name: 'Yuu'}
 ]
*/
```

### 总结
当然提到排序的话大家可能有千万种方法，可能考虑时间复杂度、空间复杂度，单从一个API来讲上面提到的基本已经满足我们日常工作开发了，当然数据量不能特别大  

sort的笔记就到这啦后续也会陆续更新js api相关系列的学习，如有不足希望各位大佬们指出👈
