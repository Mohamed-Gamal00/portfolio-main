<template>
  <Header />
  <Projects />
</template>

<script setup>
import Header from "../components/landing/Header.vue";
import Projects from "../components/landing/Skills.vue";
import { defineComponent,reactive } from "vue";
defineComponent({
  name: "Profile",
});

const profile = reactive({
  fullName: "Mohammed Gamal",
  position: "Front-End web developer",
});
</script>

<style scoped></style>
