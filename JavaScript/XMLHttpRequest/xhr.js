/*
 * @Author: your name
 * @Date: 2021-03-04 21:38:16
 * @LastEditTime: 2021-03-04 21:47:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \知识点梳理\JS-PARK\JavaScript\XMLHttpRequest\xhr.js
 */
function handler(txt){
    console.log(txt)
}
var xhr = new XMLHttpRequest();
xhr.addEventListener("load", function (res) {
  console.log(res);
});
xhr.addEventListener("progress", handler("updateProgress"));
xhr.addEventListener("load" , handler("transferComplete"));
xhr.addEventListener("error", handler("transferFailed"));
xhr.addEventListener("abort", handler("transferCanceled"));

xhr.open("GET", "http://115.159.44.133:8992/api/v4/getutctime");
xhr.send();
