## TypeScript


#### type与interface的理解

* interface是对值所具有的结构进行检查，用来约束和规范代码
* type 类型别名，与interface相似，但可以作用与原始值、元祖、联合类型

#### TS 基础概念
- [泛型理解](https://juejin.cn/post/6887893266847498248)
- [泛型作用及使用场景](https://segmentfault.com/a/1190000020060077)
- [TS中几个奇怪的问题点](https://segmentfault.com/a/1190000039279043)
- [type VS interface](https://blog.csdn.net/weixin_39866874/article/details/110492597)
- [type VS interface](https://juejin.cn/post/6897089356457541640#heading-2)

#### rollup构建TS环境

* [参考 rollup.config.js](./rollup.config.js)

#### vscode 配置
1. 安装插件prettier
2. 安装启动esLint
3. ESLint json中的配置
```json
    "eslint.codeAction.showDocumentation": {

        "eslint.enable": true,
        // 每次保存时将代码按eslint格式进行保存
        "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true
        },
        "workbench.iconTheme": "material-icon-theme",
        "explorer.confirmDragAndDrop": false,
        "explorer.confirmDelete": false,
        //配置eslint
        "eslint.autoFixOnSave": true, //  启用保存时自动修复,默认只支持.js文件
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "eslint.validate": [
            "javascript",
            "javascriptreact",
            "vue",
            "typescript",
            "typescriptreact"
        ]
    },
```

#### ESLint 配置
1. 默认情况下使用Alloy Team's TS config rules
2. 项目中的配置以及插件安装参考文档：
  - [hookbook](https://tony-code.github.io/TypeScript-tutorial/book/docs/engineering/lint.html)
  - [alloy](https://github.com/AlloyTeam/eslint-config-alloy#typescript)

#### 项目启动
1. yarn run dev  
2. [监听端口](localhost:8089) 

#### 资料文献
1. [Rolloup](https://github.com/rollup/rollup)
2. [TypeScript中文](https://juejin.cn/pins/recommended)
3. [深入理解 TypeScript](https://jkchao.github.io/typescript-book-chinese/typings/generices.html#%E5%8A%A8%E6%9C%BA%E5%92%8C%E7%A4%BA%E4%BE%8B)







