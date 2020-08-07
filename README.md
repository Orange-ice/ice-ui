# Ice-UI

[![Build Status](https://travis-ci.org/Orange-ice/Ice-UI.svg?branch=master)](https://travis-ci.org/Orange-ice/Ice-UI)

## 介绍

## 开始使用

1. 添加 CSS 样式

使用本框架前，请在 CSS 中开启 border-box

```
*,*::before,*::after{box-sizing: border-box;}
```

IE 8 及以上浏览器都支持此样式。

你还需要设置默认颜色等变量（后续会1改为SCSS变量）

```
html {
  --button-height: 32px;
  --font-size: 14px;
  --button-bg: white;
  --button-active-bg: #eee;
  --border-radius: 4px;
  --color: #333;
  --border-color: #999;
  --border-color-hover: #666;
}
```

IE 15 及以上浏览器都支持此样式。

2. 安装 ice-vue-ui

```
npm i --save ice-vue-ui
```

3. 引入 ice-vue-ui

```
import {Button, ButtonGroup, Icon} from 'ice-vue-ui'
import 'frank-test-1-1/dist/index.css'

export default {
  name: 'app',
  components: {
    'g-button': Button,
    'g-icon': Icon
  }
}
```
## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码
