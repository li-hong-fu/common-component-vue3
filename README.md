<!--
 * @Description:
 * @Author: lihongfu
 * @Date: 2023-10-31 17:31:32
 * @LastEditTime: 2024-02-02 10:11:24
 * @LastEditors: lihongfu
-->

# 目录结构

```
├─.husky                               hook工具
│
├─.vscode
│  │
│  └─settings.json                     vscode统一配置
│
├─public                               根目录
│  │
│  └─vite.svg
│
├─scripts
│   │
│   └─dns-prefetch.js                  dns预解析
│
└─src
    ├─asset                            资源
    ├─components
    |  ├─layout                        布局组件
    |  |
    |  └─index.ts                      组件入口（统一自动导入所有组件）
    |
    ├─global                           全局文件
    |  ├─config                        项目配置文件
    |  |
    |  ├─interface                     接口文件
    |  |
    |  ├─model                         类型规范文件
    |  |
    |  ├─request                       请求文件
    |  |    ├─api.ts
    |  |    └─axios.ts
    |  |
    |  ├─service                       服务
    |  |
    |  ├─storage                       本地存储
    |  |
    |  └─utils                         公共工具目录
    |       ├─filters.js               过滤
    |       └─index.js                 常用公共函数
    |
    │
    ├─router                           路由文件
    |  ├─index.ts
    |  ├─routes.ts
    |  └─permission.js                 路由重定向
    |
    ├─store                            Vuex状态管理文件
    │─views                            视图
    └─main.ts                          入口文件

│─.env                                 开发环境
│─.env.production                      生产环境
│─.env.staging                         预发环境
│─.eslintrc.cjs                        eslint配置
│─.eslintignore                        eslint过滤配置
│─.gitignore                           git过滤配置
│─.prettierignore                      代码风格过滤配置
│─.prettierrc.cjs                      代码风格配置
│─.stylelintignore                     样式风格过滤配置
│─.stylelintrc.cjs                     样式风格配置
│─commitlint.config.cjs                git提交注释校验
│─package.json                         包配置文件
│─README.md                            备注
│─tailwind.config.js                   Tailwind CSS配置
│─vite.config.ts                       脚手架配置文件
```
