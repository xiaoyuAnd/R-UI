<template>
  <button class="g-button">zhang</button>
</template>

<script>
export default {
  name: "button.vue"
}
</script>

<style scoped lang="scss">
.g-button{
  font-size: 14px;
  height: 32px;
  padding: 0 1em;
  border-radius: 4px;
  border:1px solid #999 ;
  background: #fff;
}
.g-button:hover{
  background: #666;
}
.g-button:active{
  background: #eee;
}
.g-button:focus{
  outline: none;
}
</style>