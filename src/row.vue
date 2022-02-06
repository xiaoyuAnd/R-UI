<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Row",
  computed:{
    rowStyle(){
      return {
        marginLeft : -this.gutter/2 + 'px',
        marginRight:-this.gutter/2 + 'px'}
    },
    rowClass(){
      return[
        this.align &&  `align-${this.align}`,
      ]

    }
  },
  props:{
    gutter:{
      type:[String,Number]
    },
    align:{
      type:String,
      validator(value){
        return ['left','right','center'].indexOf(value) >= 0
      }
    }
  },
  mounted() {
    console.log(this.$children)
    this.$children.forEach((vm)=>{
      vm.gutter = this.gutter
    })
  },

}
</script>

<style scoped lang="scss">
.row{
  display: flex;

}
</style>