---
title: 'Input - 输入框'
---
# 输入框
## 预览
&nbsp;
<ClientOnly>
<Input></Input>
</ClientOnly>

## 使用方法
```vue
<template>
  <g-input value="默认"></g-input>
  <g-input value="禁用" disabled></g-input>
  <g-input value="只读" readonly></g-input>
  <g-input value="error" error="姓名不能少于两个字"></g-input>
  <g-input value="监听内容变化" @change="inputChange"></g-input>
  <g-input value="双向绑定" v-model="message"></g-input>
  value:{{ message }}
  <button @click="message+=1">+1</button>
</template>
```

## 选项
> Input 组件的选项有： disabled, readonly, error。 并且支持数据的双向绑定。
#### 1. disabled
表示是否禁用状态，默认为 false，禁用。
#### 2. readonly
表示只读状态， 与 disabled 相似。但是 disabled 不可以被 Tab 键选中，<span style='color:#3eaf7c;background-color:#F8F8F8'>readonly</span> 可以被选中，不能修改。
#### 3. error
给 Input 添加 <span style='color:#3eaf7c;background-color:#F8F8F8'>error</span> 属性，会在该 input 右侧显示一个提示图标与文字，用于提示。
#### 4. v-model

代码
```vue  
<template>
  <div>
    <g-input v-model="value"></g-input> <br>
    value:{{value}}
  </div>
</template>
<script>
  export default {
    data(){
      return{ value:'双向绑定' }
    }
  }
</script>
```


