const READT_STATE_CODE = ["请求还未初始化", "已建立服务器链接", "请求已接受", "正在处理请求", "请求已完成并且响应已准备好"]


function createAjax() {
  return window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject()
}

function handler(txt){
  console.log(txt)
}

var xhr = createAjax()

xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')

xhr.onreadystatechange = function(){
  if (xhr.readyState === 2) {
    console.log(READT_STATE_CODE[xhr.readyState])
  } else {
    console.dir({
      readyState: xhr.readyState,
      es: READT_STATE_CODE[xhr.readyState]
    })
  }
}

xhr.addEventListener("progress", handler("updateProgress"))
xhr.addEventListener("load" , handler("transferComplete"))
xhr.addEventListener("error", handler("transferFailed"))
xhr.addEventListener("abort", handler("transferCanceled"))

xhr.open("GET", "http://115.159.44.133:8992/api/v4/getutctime", true)
xhr.send()
