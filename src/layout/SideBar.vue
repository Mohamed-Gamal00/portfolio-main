<template>
  <div>
    <v-navigation-drawer
      elevation="0"
      v-model="drawer"
      width="300"
      temporary
      location="left"
      class="pr-1 cart_drawer"
    >
      <v-card class="px-0" elevation="0">
        <v-card-title
          class="d-flex justify-space-between align-center w-100"
          style="font-size: 17px; font-weight: bold"
          >Side bar
          <v-icon @click="drawer = false">mdi-close</v-icon>
        </v-card-title>
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            title="Sandra Adams"
            subtitle="sandra_a88@gmailcom"
          ></v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list-item
          v-for="(item, i) in props.data"
          :key="item"
          link
          :title="`${item.name} ${i + 1}`"
        ></v-list-item>
      </v-card>
    </v-navigation-drawer>
  </div>
</template>

<script setup>
const props = defineProps({ data: Array });

import { onMounted, ref, inject } from "vue";
const drawer = ref(false);
const Emitter = inject("Emitter"); // null is the default value if not found
onMounted(() => {
  Emitter.on("openSidebar", () => {
    drawer.value = true;
  });
  console.log(props.data);
});
</script>
<style lang="scss"></style>
