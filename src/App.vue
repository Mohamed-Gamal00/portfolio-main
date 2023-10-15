<template>
  <AppLayoutVue>
    <router-view :key="$route.fullPath" />
  </AppLayoutVue>
</template>

<script setup>
import AppLayoutVue from "./layout/AppLayout.vue";
</script>

<style>
a {
  text-decoration: none;
}

.v-slide-group__content {
  justify-content: center;
}

.v-timeline--vertical.v-timeline {
  height: auto;
}

.v-progress-linear__background,
.v-progress-linear__determinate {
  max-width: calc(100% - 25px) !important;
}
</style>
