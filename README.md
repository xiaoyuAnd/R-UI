
作者： xiaoyuAnd

## 介绍
这是我在学习 Vue 的过程中做的一个 UI 框架，希望对你有用。
## 开始使用
1. 添加 CSS 样式
   使用本框架前，请在 CSS 中开启 border-box
    ```css
    *,*::before,*::after{box-sizing:border-box}
    ```
   IE 15 及以上浏览器都支持此样式

2. 安装 R-UI
    ```
    npm i --save r-ui-1-1
    ```
3. 引入 init-ui
    ```javascript
    import {Button, ButtonGroup, Icon,Col, Collapse, CollapseItem, Content, Footer, Header, Input, Layout, Popover
             , Row, Sider, Tabs, TabsHead, TabsBody, TabsItem, TabsPane, Toast,plugin
           } from 'init-ui'
    import 'init-ui/dist/index.css'    
    import Vue from 'vue'
    Vue.use(plugin)
    
    export default {
      name: 'app',
      components: {
            'g-button':Button,
            'g-icon':Icon,
            'g-button-group':ButtonGroup,
            'g-col':Col,
            'g-content': Content,
            'g-footer': Footer,
            'g-header': Header,
            'g-input': Input,
            'g-layout': Layout,
            'g-popover': Popover,
            'g-row': Row,
            'g-sider': Sider,
            'g-tabs': Tabs,
            'g-tabs-head': TabsHead,
            'g-tabs-body': TabsBody,
            'g-tabs-item': TabsItem,
            'g-tabs-pane': TabsPane,
            'g-toast': Toast,
     }
    }
    ```
## 文档
[R UI 官网](https://xiaoyuand.github.io/R-UI/)

## 联系方式
邮箱：2521647197@qq.com
## 贡献代码
