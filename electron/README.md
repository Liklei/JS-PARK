

# electron
使用前端技术来构建跨平台应用

### 生命周期
electron中通过app应用程序的生命周期
- will-finish-launching
- ready
- window-all-close
- beforeQuit
- willQuit
- quit


### electron原理

 - Chromium 显示网页内容
 - nodejs 操作本地文件
 - electron API 用于本机系统OS的交互

 * 主进程通过BrowserWindow创建一个渲染进程，每一个BrowserWindow在其渲染过程中运行网页，进程间通过IPC（Iipcmain, ipcrender）来通讯
 * 渲染进程只能管理相应的网页， 一个渲染进程的崩溃不会影响其他渲染进程
### electron API
 -自定义DOM
  * File、webView、window.open

 - main process模块
 * app、session、Tray、ipcMain、BrowserWindow、menu
  
 - render process模块
 * ipcRenderer、remote

### electron 打包（win & mac）

[MAC打包方案](./MAC打包配置.doc)
