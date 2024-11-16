<template>
  <main style="height: 100%; overflow: hidden;">
    <Title />
    <div class="container">
      <div class="left-side-bar">
        <LeftSide :currencies="currencies" />
      </div>
      <div class="mainView">
        <RouterView />
      </div>
    </div>
  </main>
</template>

<script setup>
import LeftSide from "./component/LeftSide.vue";
import Title from "./component/Title.vue";
import { ref } from "vue";
import data from "./data";

const currencies = ref(data);
</script>

<style>
html,
body,
#app {
  height: 100%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

ol,
ul {
  list-style: none;
}
* {
  padding: 0px;
  margin: 0px;
  border: none;
}

a,
a:link,
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}

.container {
  display: flex;
  flex-wrap: nowrap;
  height: 100%;
  width: 100%;
}
.left-side-bar {
  flex-grow: 0;
  flex-shrink: 0;
}
.mainView {
  flex-grow: 1;
  flex-shrink: 1;
}
</style>
