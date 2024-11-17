<template>
  <div class="currency">
    <h2 class="currency__title">Валюта</h2>
    <div class="currency__columns">
      <div class="currency__columnLeft">
        <div class="currency__elem">Наименование:</div>
        <div class="currency__elem">Код валюты:</div>
        <div class="currency__elem">Номинал:</div>
        <div class="currency__elem">Курс:</div>
      </div>
      <div class="currency__columnRight">
        <div class="currency__elem">{{ currency?.name }}</div>
        <div class="currency__elem">{{ currency?.charCode }}</div>
        <div class="currency__elem">{{ currency?.nominal }}</div>
        <div class="currency__elem">{{ currency?.value }} руб.</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, onUpdated, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
const { currencies } = defineProps(["currencies"]);
const currency = ref({});

function getCurrentCurrency() {
  return currencies.find(function (item) {
    return item.id === route.params.id;
  });
}

onBeforeMount(() => {
  const newCurrency = getCurrentCurrency();
  if (newCurrency) {
    currency.value = getCurrentCurrency();
  } else {
    router.push('/error');
  }
});

onUpdated(() => {
  const newCurrency = getCurrentCurrency();
  if (newCurrency) {
    currency.value = getCurrentCurrency();
  } else {
    router.push('/error');
  }
});
</script>

<style>
.currency {
  padding: 20px;
  color: #a0000f;
  background: #8db42d;
  height: 100%;
}

.currency__title {
  padding-left: 100px;
  text-align: left;
  font-size: 30px;
}

.currency__columns {
  display: flex;
  justify-content: left;
  text-wrap: nowrap;
}

.currency__columnLeft {
  padding-right: 10px;
}

.currency__elem {
  padding: 5px;
  font-size: 20px;
}
</style>
/*
<div class="currency__elem">{{ currency.name }}</div>
<div class="currency__elem">{{ currency.charCode }}</div>
<div class="currency__elem">{{ currency.nominal }}</div>
<div class="currency__elem">{{ currency.value }} руб.</div>
