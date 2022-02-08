<template>
  <div>
    <g-button @click="top">上方弹出</g-button>
    <g-button @click="middle">中间弹出</g-button>
    <g-button @click="bottom">下方弹出</g-button>
  </div>
</template>

<script>
import Toast from "../../../src/toast";
import Button from "../../../src/button";
import plugin from "../../../src/plugin";
import Vue from "vue";
Vue.use(plugin)
export default {
  name: "Toast",
  components:{
    "g-button":Button,
    "g-toast":Toast
  },

  methods:{
    // createToast(){
    //   this.$toast(`你的智商目前为 ${parseInt(Math.random() * 100)}。你的智商需要充值！`,{
    //     closeButton:{
    //       text:'知道了',
    //       callback(){
    //         console.log('用户说他知道了')
    //       }
    //     },
    //     enableHtml: true,
    //     position: 'middle'
    //   })
    // },
    top(){
      this.$toast('我是 toast 内容', { position: 'top' })
    },
    middle(){
      this.$toast('我是 toast 内容', { position: 'middle' })
    },
    bottom(){
      this.$toast('我是 toast 内容', { position: 'bottom' })
    },
  }
}
</script>

<style scoped>

</style>