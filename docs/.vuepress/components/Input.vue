<template>
  <div>
    <div class="box">
      <g-input value="zhang">1</g-input>
      <g-input value="wang" disabled>2</g-input>
      <g-input value="boli" readonly>3</g-input>
    </div>
    <div class="box">
      <g-input value="limei" error="姓名不能少于两个字"></g-input>
    </div>
    <div class="box">
      <g-input value="limei" @change="inputChange"></g-input>
    </div>
    <div class="box">
      <g-input value="zhang" v-model="message"></g-input>
      {{ message }}
      <button @click="message+=1">+1</button>
    </div>
  </div>
</template>

<script>
import Input from '../../../src/input'
export default {
  name: "Input.vue",
  data(){
    return{
      message:'hi'
    }
  },
  methods:{
    inputChange(){
      console.log('change')
    }
  },
  components:{
    "g-input":Input
  }

}
</script>

<style scoped>

</style>