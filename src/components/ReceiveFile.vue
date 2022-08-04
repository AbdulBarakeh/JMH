<script setup lang="ts">
import { Guid } from "guid-typescript";
defineProps<{
  msg: string;
  guid: Guid;
}>();

function setGuid(){
  return Guid.create();
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <h3>To receive files provide the sender with the given id:</h3>
  <br />
  <p>{{ setGuid() }}</p>
</template>

<style scoped>
@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
