<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<template>
  <h1>{{ msg }}</h1>
  <input type="text" placeholder="Insert receiver's id here">
  <br/>
  <input type="file" />
</template>

<style scoped>
@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
