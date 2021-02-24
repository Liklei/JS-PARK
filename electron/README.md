
# electron
使用前端技术来构建跨平台应用
### electron原理

 - Chromium 显示网页内容
 - nodejs 操作本地文件
 - API 用于本机系统OS的交互

 主进程通过BrowserWindow创建一个渲染进程，每一个BrowserWindow在其渲染过程中运行网页。主进程管理相应的渲染进程及网页，进程间通过IPC（Iipcmain, ipcrender）来通讯
### electron API
 -自定义DOM
  * File、webView、window.open

 - main process模块
 * session、Tray、ipcMain、BrowserWindow、menu
  
 - render process模块
 * ipcRenderer、remote

### electron 打包（win & mac）

[MAC打包方案](./MAC打包配置.doc)
