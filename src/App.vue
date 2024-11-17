<template>
  <main style="height: 100%; overflow: hidden">
    <Title />
    <div class="container">
      <div class="left-side-bar">
        <LeftSide :currencies="currencies" />
      </div>
      <div class="mainView"><RouterView :currencies="currencies" /></div>
    </div>
  </main>
</template>

<script setup>
import { onMounted } from "vue";
import LeftSide from "./component/LeftSide.vue";
import Title from "./component/Title.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const currencies = ref([]);

onMounted(async () => {
  try {
    const respons = await fetch(`${window.location.origin}/exchange-rate/data.xml`);
    console.log(window.location.origin);
    if (respons.ok) {
      const xmlString = await respons.text();

      function getStringFromXML(str, start, stop, startString, stopString) {
        const subString = str.slice(start, stop);
        const startSubStr = subString.indexOf(startString, 0);
        const endSubStr = subString.indexOf(stopString, 0);
        if (startSubStr !== -1 && endSubStr !== -1) {
          return subString.slice(startSubStr + startString.length, endSubStr);
        }
        return null;
      }

      let index;
      const newCurrencies = [];
      for (index = 0; index < xmlString.length; index++) {
        const start = xmlString.indexOf("<Valute ID", index);
        const end = xmlString.indexOf("</Valute>", index);
        if (end > 0) {
          index = end;
          const currency = {
            id: getStringFromXML(xmlString, start, end, 'ID="', '">'),
            name: getStringFromXML(xmlString, start, end, "<Name>", "</Name>"),
            numCode: getStringFromXML(xmlString, start, end, "<NumCode>", "</NumCode>"),
            charCode: getStringFromXML(xmlString, start, end, "<CharCode>", "</CharCode>"),
            nominal: getStringFromXML(xmlString, start, end, "<Nominal>", "</Nominal>"),
            value: getStringFromXML(xmlString, start, end, "<Value>", "</Value>"),
            vunitRate: getStringFromXML(xmlString, start, end, "<VunitRate>", "</VunitRate>"),
          };
          if (
            Object.values(currency).find((value) => {
              return value === null;
            }) === undefined
          ) {
            newCurrencies.push(currency);
          }
        }
      }
      currencies.value = newCurrencies;
    }
  } catch (error) {
    router.push("/error");
  }
});
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
