---
title: 'Grid - 栅格'
---
# 栅格
24 栅格系统。

## 预览
&nbsp;
<ClientOnly>
<Grid></Grid>
</ClientOnly>

## 使用方法
```vue
<template>
  <div class="grid-wrapper">
    <g-row class="row">
      <i-col class="item" span="24">col-24</i-col>
    </g-row>
    <g-row>
      <i-col class="item" span="12">col-12</i-col>
      <i-col class="item" span="12">col-12</i-col>
    </g-row>
    <g-row class="row">
      <i-col class="item" span="8">col-8</i-col>
      <i-col class="item" span="8">col-8</i-col>
      <i-col class="item" span="8">col-8</i-col>
    </g-row>
    <g-row class="row">
      <i-col class="item" span="6">col-6</i-col>
      <i-col class="item" span="6">col-6</i-col>
      <i-col class="item" span="6">col-6</i-col>
      <i-col class="item" span="6">col-6</i-col>
    </g-row>
  </div>
</template>
<style lang="scss" scoped>
  *{
    box-sizing: border-box;
  }
  .grid-wrapper{
    $background: #3eaf7c;
    > .row{ padding: .2em;
      > .item { text-align: center; color: white;
        &:nth-child(odd){ background: $background; }
        &:nth-child(even){ background: lighten($background,20%); color: black; }
      }
    }
  }
</style>
```
## 选项
### Row 选项
#### 1. gutter（排水沟；槽）
通过给 Row 设置<span style='color:#3eaf7c;background-color:#F8F8F8'> gutter </span>属性, 可以让栅格有间隔。单位为<span style='color:#3eaf7c;background-color:#F8F8F8'> px </span>。    

[//]: # (预览  )

[//]: # ()
[//]: # (<ClientOnly>)

[//]: # ()
[//]: # (<Grid-gutter></Grid-gutter>)

[//]: # ()
[//]: # (</ClientOnly>)

[//]: # ()
[//]: # (代码)

[//]: # (```vue)

[//]: # (<template>)

[//]: # (  <div class="gutter-wrapper">)

[//]: # (    <g-row gutter="30">)

[//]: # (      <i-col class="item" span="8"> <span> col-8; gutter-30;</span> </i-col>)

[//]: # (      <i-col class="item" span="8"> <span> col-8; gutter-30;</span> </i-col>)

[//]: # (      <i-col class="item" span="8"> <span> col-8; gutter-30;</span> </i-col>)

[//]: # (    </g-row>)

[//]: # (    <g-row gutter="20">)

[//]: # (      <i-col class="item" span="8"> <span> col-8; gutter-20;</span> </i-col>)

[//]: # (      <i-col class="item" span="8"> <span> col-8; gutter-20;</span> </i-col>)

[//]: # (      <i-col class="item" span="8"> <span> col-8; gutter-20;</span> </i-col>)

[//]: # (    </g-row>)

[//]: # (    <g-row gutter="10">)

[//]: # (      <i-col class="item" span="8"> <span> col-8; gutter-10;</span> </i-col>)

[//]: # (      <i-col class="item" span="8"> <span> col-8; gutter-10;</span> </i-col>)

[//]: # (      <i-col class="item" span="8"> <span> col-8; gutter-10;</span> </i-col>)

[//]: # (    </g-row>)

[//]: # (  </div>)

[//]: # (</template>)

[//]: # (<style lang="scss" scoped>)

[//]: # (  * { box-sizing: border-box; })

[//]: # (  .gutter-wrapper { padding-top: 10px;)

[//]: # (    .item { text-align: center; color: white;)

[//]: # (      > span { display: block; background: #3eaf7c; })

[//]: # (    })

[//]: # (  })

[//]: # (</style>)

[//]: # (```)

[//]: # ()
[//]: # ()



### Col 选项
> Col 的选项有 span, offset 
#### 1. span
栅格系统中的列是指 1 到 24 的值来表示其跨越的范围。通过设置<span style='color:#3eaf7c;background-color:#F8F8F8'> span </span>属性来实现。
例如：三个等宽的列可以使用`<g-col span="8">列</g-col>` 来创建其中一个，其余两个再复制两份。

#### 2. offset
使用<span style='color:#3eaf7c;background-color:#F8F8F8'> offset </span>属性,可以将列向右侧偏。  
例如，`offset="4"` 将元素向右侧偏移了 4 个列（column）的宽度。  
预览

<ClientOnly>

<Grid-offset></Grid-offset>

</ClientOnly>
代码

```vue
<template>
  <div class="offset-wrapper">
    <g-row >
      <g-col span="2" class="item">12</g-col>
      <g-col span="10" offset="2" class="item">12</g-col>
      <g-col span="8" offset="2" class="item">12</g-col>
    </g-row>
    <g-row>
      <g-col span="2" class="item">1</g-col>
      <g-col span="6" offset="4" class="item">2</g-col>
      <g-col span="6" offset="6" class="item">3</g-col>
    </g-row>>
    <g-row>
      <g-col span="2" class="item">1</g-col>
      <g-col span="2" offset="6" class="item">2</g-col>
      <g-col span="6" offset="8" class="item">3</g-col>
    </g-row>
  </div>
</template>
<style lang="scss" scoped>
  $background: #3eaf7c;
  $wrapper-top: 10px;
  $font-color: white;
  * { box-sizing: border-box; }
  .offset-wrapper { padding-top: $wrapper-top;
    > .row {
      > .item { text-align: center; color: $font-color;
        > span { display: block; background: $background; }
      }
    }
  }
</style>
```


