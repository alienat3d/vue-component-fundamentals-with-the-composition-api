<script setup>
import { ref } from 'vue'

const hover = ref(false)
</script>
<template>
  <button @mouseenter="hover = true" @mouseleave="hover = false">
    <slot name="icon" :hover="hover" random="hello"></slot><slot>Click me</slot>
  </button>
</template>

<style scoped>
button {
  border-radius: 15px;
  border: 1px ridge royalblue;
  padding: 14px 18px 13px;
  background-color: lightblue;
  font-size: 20px;
}
</style>
