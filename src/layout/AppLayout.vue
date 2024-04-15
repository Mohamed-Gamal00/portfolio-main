<template>
  <v-app>
    <v-layout>
      <SideBar :data="data" />
      <v-main>
        <slot></slot>
      </v-main>
      <AppHeader @ParentOnToggleTheme="onToggleTheme"/>
    </v-layout>
  </v-app>
</template>

<script setup>
import { ref, onMounted } from "vue";
import AppHeader from "./AppHeader.vue";
import SideBar from "./SideBar.vue";
const data = ref([
  { name: "Inbox", icon: "mdi-inbox-arrow-down" },
  { name: "Send", icon: "mdi-send" },
  { name: "Trash", icon: "mdi-delete" },
  { name: "Spam", icon: "mdi-alert-octagon" },
]);

import { useTheme } from "vuetify";
const theme = useTheme();
const setTheme = () => {
  // theme.global.name.value = selectedTheme.value;
  localStorage.setItem("theme", JSON.stringify(theme.global.name.value));
  // console.log(selectedTheme.value);
};
function getTheme() {
  return JSON.parse(localStorage.getItem("theme"));
}
function onToggleTheme() {
  theme.global.name.value =
    theme.global.name.value === "customLightTheme" ? "customDarkTheme" : "customLightTheme";
  // console.log(theme.global.name.value);
  setTheme();
}
onMounted(() => {
  localStorage.hasOwnProperty("theme")
    ? (theme.global.name.value = getTheme())
    : setTheme();
    // console.log(theme)
});
/* start theme config */
// const theme = ref(getBrowserTheme());
// onMounted(() => {
//   localStorage.hasOwnProperty("theme")
//     ? (theme.value = getTheme())
//     : setTheme();
// });

// function onToggleTheme() {
//   theme.value = theme.value === "dark" ? "light" : "dark";
//   setTheme();
// }

// function getBrowserTheme() {
//   return window.matchMedia &&
//     window.matchMedia("(prefers-color-scheme: dark)").matches
//     ? "light"
//     : "dark";
// }

// function setTheme() {
//   localStorage.setItem("theme", JSON.stringify(theme.value));
// }

// function getTheme() {
//   return JSON.parse(localStorage.getItem("theme"));
// }
/* end theme config */
</script>

<style lang="scss" scoped></style>
