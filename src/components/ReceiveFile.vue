<script setup lang="ts">
import { Guid } from "guid-typescript";
const props = defineProps<{
  msg: String;
}>();
  var guid;

function setGuid(){
  guid = Guid.create();
}
setGuid()
</script>

<template>
  <h1>{{ props.msg }}</h1>
  <h3>To receive files provide the sender with the given id:</h3>
  <br />
  <p>{{ guid }}</p>
</template>

<style scoped>
@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
