<template>
  <svg class="icon" aria-hidden="true" >
    <use :xlink:href="`#i${name}`"></use>
  </svg>
</template>

<script>
export default {
  name: "Icon",
  props:['name']
}
</script>

<style scoped lang="scss">
</style>