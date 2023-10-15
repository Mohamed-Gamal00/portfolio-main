<template>
  <v-app-bar elevation="0">
    <v-spacer></v-spacer>
    <v-btn value="recent">
      <v-icon>mdi-history</v-icon>

      <span>Recent</span>
    </v-btn>

    <v-btn value="favorites">
      <v-icon>mdi-heart</v-icon>

      <span>Favorites</span>
    </v-btn>

    <v-btn value="nearby">
      <v-icon>mdi-map-marker</v-icon>

      <span>Nearby</span>
    </v-btn>
    <v-btn
      class="pl-7"
      :prepend-icon="
        theme === 'light' ?'mdi-weather-night' : 'mdi-weather-sunny'
      "
      @click="$emit('ParentOnToggleTheme')"
    >
    </v-btn>
    <v-app-bar-nav-icon @click="openSidebar"></v-app-bar-nav-icon>
  </v-app-bar>
</template>

<script setup>
import { inject, toRefs } from "vue";
const props = defineProps({ theme: String });
const { theme } = toRefs(props);
const Emitter = inject("Emitter");
const openSidebar = () => {
  Emitter.emit("openSidebar");
};
defineEmits(["ParentOnToggleTheme"]);

</script>

<style lang="scss" scoped></style>
