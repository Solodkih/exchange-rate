<template>
  <ul>
    <li v-for="currency in currencies">
      {{ currency.name }}
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";
import data from "./data";

const currencies = ref(data);
</script>

<style></style>
