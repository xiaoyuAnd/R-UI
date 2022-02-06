---
title: 'Layout - 布局'
---
# 布局
## 预览
&nbsp;
<ClientOnly>
<layout></layout>
</ClientOnly>
## 使用方法
```vue
<template>
  <div class="wrapper">
    <g-layout class="layout-wrapper">
      <g-header class="header-wrapper"> header</g-header>
      <g-layout class="layout-wrapper">
        <g-sider class="sider-wrapper"> sider</g-sider>
        <g-content class="content-wrapper"> content</g-content>
      </g-layout>
      <g-footer class="footer-wrapper"> footer</g-footer>
    </g-layout>

    <br>
    <g-layout class="layout-wrapper">
      <g-header class="header-wrapper"> header</g-header>
      <g-content class="content-wrapper"> content</g-content>
      <g-footer class="footer-wrapper"> footer</g-footer>
    </g-layout>
  </div>
</template>
<style lang="scss" scoped>
$background: #3eaf7c;
.wrapper {
> .layout-wrapper { height: 30vh;
  > .header-wrapper { height: 3em; background: $background; }
  > .content-wrapper { background: lighten($background, 40%); }
  > .layout-wrapper { height: 6em;
    > .sider-wrapper { width: 3em; background: lighten($background, 15%); }
    > .content-wrapper { background: lighten($background, 40%); }
    > .layout-wrapper{
      > .content-wrapper{ background: lighten($background, 40%); }
      > .footer-wrapper { background: $background; }
    }
  }
  > .footer-wrapper { background: $background; }
}
}
</style>
```

## 选项
提供基础布局，样式自定义。
### 组件概述
- <span style='color:#3eaf7c;background-color:#F8F8F8'> g-layout </span>：布局容器，其下可嵌套 Header Sider Content Footer 或 Layout 本身，可以放在任何父容器中。

- <span style='color:#3eaf7c;background-color:#F8F8F8'> g-header </span>：顶部布局，其下可嵌套任何元素，只能放在 Layout 中。

- <span style='color:#3eaf7c;background-color:#F8F8F8'> g-sider </span>：侧边栏，其下可嵌套任何元素，只能放在 Layout 中。

- <span style='color:#3eaf7c;background-color:#F8F8F8'> g-content </span>：内容部分，其下可嵌套任何元素，只能放在 Layout 中。

- <span style='color:#3eaf7c;background-color:#F8F8F8'> g-footer </span>：底部布局，其下可嵌套任何元素，只能放在 Layout 中。
