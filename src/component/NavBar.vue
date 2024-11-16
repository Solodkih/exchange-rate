<template>
  <nav>
    <ul>
      <li v-for="currencicy in currencies">
        {{ currencicy.name }}
      </li>
    </ul>
  </nav>
</template>

<script setup>
defineProps(["currencies"]);
</script>

<style></style>
