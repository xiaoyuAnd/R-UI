<template>
  <div class="col" :class="colClass"
       :style="colStyle">
    <div >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cul",
  computed:{
    colClass(){
      return [
        this.span &&  `col-${this.span}`,
        this.offset && `offset-${this.offset}`
      ]
    },
    colStyle(){
      return{
        paddingLeft : this.gutter/2 + 'px' ,
        paddingRight:this.gutter/2 + 'px'
      }
    }
  },
  data(){
    return{
      gutter:0
    }
  },
  props: {
    span: {
      type: [String, Number]
    },
    offset:{
      type:[String,Number]
    }
  }
}
</script>

<style scoped lang="scss">
.col{
  height: 32px;
  width: 50%;
  //border: 1px solid red;
  //background: antiquewhite;

  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }

  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
}

</style>