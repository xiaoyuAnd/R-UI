<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Layout",
  data() {
    return {
      layoutClass: {
        hasSider: false
      }
    }
  },
  mounted() {
    // console.log(this.$children);
    this.$children.forEach((vm) => {
      // console.log(vm.$options.name);
      if (vm.$options.name === 'Sider') {
        this.layoutClass.hasSider = true
      }
    })
  }
}
</script>

<style scoped lang="scss">
.layout {
  flex-grow: 1;
  height: 100vh;
  //border: 1px solid red;
  display: flex;
  flex-direction: column;

  &.hasSider {
    flex-direction: row;
  }
}



</style>