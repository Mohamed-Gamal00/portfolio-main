<template>
  <div class="languages">
    <h5 class="text-h5 text-uppercase">{{ header }}</h5>
    <div v-for="(language, i) in languages" :key="i" class="mt-3">
      <span class="text-subtitle-1 font-weight-light">{{ language.name }}</span>
      <div class="d-flex align-center">
        <v-progress-linear color="primary" :model-value="language.value"></v-progress-linear>
        <span class="text-subtitle-1 font-weight-light ml-2">{{ language.value }}%</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineComponent, reactive } from 'vue';

defineComponent({
  name: 'Languages'
})

defineProps({
  header: String
})

const languages = reactive([
  {
    name: 'Arabic',
    value: 100
  },
  {
    name: 'English',
    value: 60
  }
])
</script>