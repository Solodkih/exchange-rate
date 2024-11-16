<template>
  <div class="container">
    <div class="left-side-bar">
      <NavBar :currencies="currencies" />
    </div>
    <div>
      <Currency :currency="currencies[0]" />
    </div>
  </div>
</template>

<script setup>
import NavBar from "./component/NavBar.vue";
import Currency from "./component/Currency.vue";
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
