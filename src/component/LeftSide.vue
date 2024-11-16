<template>
  <aside class="leftSide">
    <h2 class="leftSide__title" @click="handleClickTitleLeftSide">Список валют</h2>
    <ul>
      <li
        class="leftSide__item"
        :data-id="currency.id"
        @click="handleClickCurrency"
        v-for="currency in currencies"
        :key="currency.id"
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

const handleClickTitleLeftSide = () => {
  router.push({ path: "/" });
};

const handleClickCurrency = (event) => {
  router.push({ path: `/currency/${event.target.dataset?.id}` });
};
</script>

<style>
.leftSide {
  padding: 20px;
  background-color: #ABF000;
  height: 100%;
  color: #a0000f;
}
.leftSide__title {
  font-size: 30px;
  text-align: center;
}

.leftSide__item {
  padding: 5px;
  margin-top: 10px;
  font-size: 20px;
  border: 2px solid #b92e3b;
  border-radius: 3px;
}
</style>
