---
title: 'Button - 按钮'
---
# 按钮

## 预览
&nbsp;
<ClientOnly>
<Button></Button>
</ClientOnly>

## 使用方法
```vue
<g-button>默认按钮</g-button>
<g-button icon="settings">默认按钮</g-button>
<g-button icon="settings" icon-position="right">默认按钮</g-button>
<g-button :loading="true">默认按钮</g-button>
```

## 选项
### 单个按钮
####  1. 图标
通过设置<span style='color:#3eaf7c;background-color:#F8F8F8'> icon </span>属性在 Button 内嵌入一个 Icon。  
通过设置<span style='color:#3eaf7c;background-color:#F8F8F8'> iconPosition </span>属性改变 Icon 在 Button 中的位置，仅支持“左，右”两个位置。
####  2. 加载中状态
通过设置<span style='color:#3eaf7c;background-color:#F8F8F8'> loading </span>属性，可以让按钮处于加载中状态。
####  3. 不可用状态
通过设置<span style='color:#3eaf7c;background-color:#F8F8F8'> disabled </span>属性，可将按钮设置为不可用状态。

### 按钮组
预览
<ClientOnly>
<Button-group></Button-group>
</ClientOnly>

代码
```vue
 <g-button-group>
     <g-button icon="left">上一页</g-button>
     <g-button icon="right" icon-position="right">下一页</g-button>
</g-button-group>
```