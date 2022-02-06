<template>
  <transition name="slide-fade">
    <div v-if="visible" class="sider">
      <slot></slot>
<!--      <button @click="visible = false" >X</button>-->
    </div>
  </transition>
</template>

<script>
export default {
  name: "Sider",
  data(){
    return{
      visible:true
    }
  }
}
</script>

<style scoped lang="scss">
.sider{
  position: relative;
  >button{
    position: absolute;
    top: 0;
    right: 0;
  }
}

.slide-fade-enter-active,.slide-fade-leave-active {
  transition: all .3s ;
}

.slide-fade-enter, .slide-fade-leave-to
{
  margin-left: -200px;
  opacity: 0;
}
</style>