<script setup lang="ts">
import Send from "./SendFile.vue";
import Receive from "./ReceiveFile.vue";
</script>

<template>
  <div class="container-fluid">

    <div class="row">
      <div class="col">
        <Send msg="Send" />
      </div>
      <div class="col vl">
        <Receive msg="Receive" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
.vl {
  border-left: 6px solid green;
  height: 90%;
}
</style>
