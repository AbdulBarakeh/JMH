<script setup lang="ts">
import Send from "./SendFile.vue";
import Receive from "./ReceiveFile.vue";
</script>

<template>
  <Send msg="Send" />
  <Receive msg="Receive" />
</template>

<style scoped>
@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
