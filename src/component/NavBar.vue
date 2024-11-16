<template>
  <nav>
    <ul>
      <li v-for="currency in currencies">
        {{ currency.name }}
      </li>
    </ul>
  </nav>
</template>

<script setup>
defineProps(["currencies"]);
</script>

<style></style>
