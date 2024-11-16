<template>
  <div>
    {{ currency.id }}
    {{ currency.numCode }}
    {{ currency.charCode }}
    {{ currency.nominal }}
    {{ currency.name }}
    {{ currency.value }}
    {{ currency.vunitRate }}
  </div>
</template>

<script setup>
defineProps(["currency"]);
</script>

<style></style>
