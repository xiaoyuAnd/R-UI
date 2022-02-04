<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ButtonGroup",
  mounted() {
    for(let node of this.$el.children){
      // console.log(node.nodeName.toLowerCase())
      if(node.nodeName.toLowerCase() !== 'button'){
        console.warn(`g-Button-group的子元素应该全是button，而不是${node.nodeName}`)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.g-button-group{
  display: inline-flex;
  vertical-align: middle;
  > .g-button{
    border-radius: 0;
    &:not(:first-child){
      margin-left: -1px;
    }
    &:first-child{
      border-radius: var(--border-radius)  0  0  var(--border-radius);
    }
    &:last-child{
      border-radius:  0  var(--border-radius) var(--border-radius) 0;
    }
    &:hover{
      position: relative;
      z-index: 1;

    }
  }
}
</style>