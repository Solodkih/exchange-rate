<template>
  <div>
    currency
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
const props = defineProps(["currency"]);
</script>

<style></style>