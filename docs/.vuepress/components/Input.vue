<template>
  <div>
    <div class="box">
      <g-input value="默认输入框">1</g-input>
      <g-input value="禁用输入框" disabled>2</g-input>
      <g-input value="只读输入框" readonly>3</g-input>
      <g-input value="监听内容变化输入框" @change="inputChange"></g-input>
    </div>
    <div class="box">
      <g-input value="error提示" error="姓名不能少于两个字"></g-input>
    </div>
    <div class="box">

    </div>
    <div class="box">
      <g-input value="双向绑定" v-model="message"></g-input><br>
      value:{{ message }}<br>
      <g-button @click="message+=1">+1</g-button>
    </div>
  </div>
</template>

<script>
import Input from '../../../src/input'
import Button from '../../../src/Button'

export default {
  name: "Input.vue",
  data(){
    return{
      message:'双向绑定'
    }
  },
  methods:{
    inputChange(){
      console.log('change')
    }
  },
  components:{
    "g-input":Input,
    'g-button': Button

  }

}
</script>

<style scoped>
.box{
  margin-top: 10px;
  font-size: 14px;
}
</style>