

/**
  * 对于任务被频繁触发的，在任务间隔内执行一次，直至任务结束后开始新任务
  * @param {*} time 
  * @param {*} fn 
  */
const debounce = function (time, fn) {
     let timer = null, _self = this
     return function() {
        clearTimeout(timer)
        timer = setTimeout(() =>{
          fn.apply(this, arguments)  
        }, time) 
     }
}
