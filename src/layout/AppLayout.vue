<template>
  <v-app :theme="theme">
    <v-layout>
      <SideBar :data="data" />
      <v-main>
        <slot></slot>
      </v-main>
      <AppHeader @ParentOnToggleTheme="onToggleTheme" :theme="theme">
      </AppHeader>
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
/* start theme config */
const theme = ref(getBrowserTheme());
onMounted(() => {
  localStorage.hasOwnProperty("theme")
    ? (theme.value = getTheme())
    : setTheme();
});

function onToggleTheme() {
  theme.value = theme.value === "dark" ? "light" : "dark";
  setTheme();
}

function getBrowserTheme() {
  return window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "light"
    : "dark";
}

function setTheme() {
  localStorage.setItem("theme", JSON.stringify(theme.value));
}

function getTheme() {
  return JSON.parse(localStorage.getItem("theme"));
}
/* end theme config */
</script>

<style lang="scss" scoped></style>
