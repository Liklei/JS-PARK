<!--
 * @Author: your name
 * @Date: 2021-02-24 19:37:57
 * @LastEditTime: 2021-03-17 19:06:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \知识点梳理\JS-PARK\JavaScript\高阶函数\README.md
-->


### JS 纯函数
一个函数的返回结果只依赖其参数，并且执行过程中没有副作用，优点：可缓存，可测试，可并行

### JS 高阶函数
Higher-Order-Function(HOF)

函数的参数都可以接受变量，一个函数作为另一个函数的参数或者返回的任然是一个函数，那么就可以称为高阶函数，例如Array里的方法：filter、reduce、map、every、some等都属于HOF。

HOF函数在平时应用还是比较广的，下面整理常用函数：  

>  1. [深拷贝](./深拷贝.js)

深拷贝与浅拷贝的区别在于：浅拷贝只是对值的引用并没有改变栈的地址（开辟新的栈），导致在修改新的对象属性时，原生对象属性也会被修改。

实现浅拷贝常用的方法： Object.assgin()。这里需要注意的是，Object.assgin在合并对象时，如果不是嵌套的对象，是深拷贝。

实现深拷贝常用方法：
- JSON.parse(JSON,stringify(*)) 注意如果是JSON数据结构的如Array、Object等没关系，但如果是Function等会丢失constructor构造函数
- 通过递归遍历
- Object.create()

>  2. [防抖函数](./debounce.js)

应用场景如：按钮重复点击等；任务在被频繁触发的情况下，只执行最后触发的那一次，直至该任务结束开始下一次执行

>  3. [节流函数](./throttle.js)

在任务时间内只执行一次，结束再执行下一次

>  4. [链式调用](./级联.js)

核心的概念是每次都返回this（该函数）

>  5. [函数合并求值或计算](./comporse.js)

例如字符串“ AAA ”，现在有两个方法trim、转小写的方法，但我只想一次执行。可以使用此方法，在redux的实现中，作者也是使用此方法来合并工具方法

>  6. [惰性求值](./lazy.js)

例如执行Add(1,2),在下一次执行就我不需要重新计算，直接返回值

>  7. [柯里函数](./curry.js)
