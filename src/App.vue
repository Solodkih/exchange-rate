<template>
  <div class="container">
    <div class="left-side-bar">
      <NavBar :currencies="currencies" />
    </div>
    <RouterView />
  </div>
</template>

<script setup>
import NavBar from "./component/NavBar.vue";
import { ref } from "vue";
import data from "./data";

const currencies = ref(data);
</script>

<style>
.container {
  display: flex;
  flex-wrap: nowrap;
}
.left-side-bar {
  width: 40%;
}
</style>
