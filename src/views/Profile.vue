<template>
  <Header />
  <SkillsTools />
  <Projects />
  <Timelines />
</template>

<script setup>
import Header from "../components/landing/Header.vue";
import SkillsTools from "../components/landing/SkillsTools.vue";
import Projects from "../components/landing/Projects.vue";
import Timelines from "../components/landing/Timelines.vue"
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
