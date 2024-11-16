<template>
  <aside class="leftSide">
    <h2 class="leftSide__title" @click="handleClickTitleLeftSide">Валюта</h2>
    <ul>
      <li
        class="leftSide__item"
        :data-id="currency.id"
        @click="handleClickCurrency"
        v-for="currency in currencies"
      >
        {{ currency.name }}
      </li>
    </ul>
  </aside>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

defineProps(["currencies"]);

const handleClickTitleLeftSide = (event) => {
  router.push({ path: "/" });
};

const handleClickCurrency = (event) => {
  console.log(event.target.dataset?.id);
  router.push({ path: `/currency/${event.target.dataset?.id}` });
};
</script>

<style>
.leftSide {
  padding: 20px;
  background-color: rgb(187, 239, 222);
  height: 100%;
  color: green;
}
.leftSide__title {
  text-align: center;
}

.leftSide__item {
  margin-top: 10px;
  border: 2px solid green;
  border-radius: 3px;
}
</style>
