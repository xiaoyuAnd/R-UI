<template>
  <div class="content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Content",
  // name: "Content"
};
</script>

<style scoped>
.content {
  flex-grow: 1;
}
</style>