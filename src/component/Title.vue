<template>
  <h1 @click="handleClickTitle" class="title">Обменный курс</h1>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const handleClickTitle = () => {
  router.push({ path: "/" });
};
</script>

<style>
.title {
  text-align: center;
  font-size: 40px;
  color: #a0000f;
  background-color: #6f9c00;
  padding: 20px;
}
</style>
