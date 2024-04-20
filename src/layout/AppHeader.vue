<template>
  <v-app-bar
    style="position: fixed"
    scroll-behavior="elevate"
    elevation="0"
    height="100"
  >
    <v-container>
      <v-row class="align-center">
        <v-col cols="3 d-flex align-center">
          <v-btn
            :ripple="false"
            class="pl-7"
            :prepend-icon="
              theme.global.name.value === 'customLightTheme'
                ? 'mdi-weather-night'
                : 'mdi-weather-sunny'
            "
            @click="$emit('ParentOnToggleTheme')"
          >
          </v-btn>

          <div class="mx-lg-5">
            <span v-if="theme.global.name.value === 'customLightTheme'">
              <img src="@/assets/images/black-logo.webp" :height="xl?'60':'40'" alt="" />
            </span>
            <span v-if="theme.global.name.value != 'customLightTheme'">
              <img src="@/assets/images/white-logo.webp" :height="xl?'60':'40'" alt="" />
            </span>
          </div>
        </v-col>
        <!-- search -->
        <v-spacer></v-spacer>
        <v-col
          cols="5"
          class="d-md-inline d-sm-inline d-xs-none d-none d-lg-inline"
        >
          <div class="position-relative" style="width: 90%">
            <input type="hidden" />
            <svg
              style="
                position: absolute;
                right: 10px;
                top: 50%;
                transform: translateY(-50%);
                width: 25px;
              "
              data-icon="search"
              viewBox="0 0 512 512"
              width="100%"
              height="100%"
            >
              <path
                d="M495,466.2L377.2,348.4c29.2-35.6,46.8-81.2,46.8-130.9C424,103.5,331.5,11,217.5,11C103.4,11,11,103.5,11,217.5   S103.4,424,217.5,424c49.7,0,95.2-17.5,130.8-46.7L466.1,495c8,8,20.9,8,28.9,0C503,487.1,503,474.1,495,466.2z M217.5,382.9   C126.2,382.9,52,308.7,52,217.5S126.2,52,217.5,52C308.7,52,383,126.3,383,217.5S308.7,382.9,217.5,382.9z"
              ></path>
            </svg>
          </div>
        </v-col>
        <!-- favourat cart -->
        <v-col cols="4" class="ps-8">
          <div class="parent aling-center d-flex justify-end">
            <div class="available">
              <v-spacer></v-spacer>

              <div class="d-md-inline d-sm-inline d-xs-none d-none d-lg-inline">
                <v-btn icon>
                  <v-icon>mdi-github</v-icon>
                  <v-tooltip activator="parent" location="bottom"
                    >github</v-tooltip
                  >
                </v-btn>

                <v-btn icon>
                  <v-icon>mdi-linkedin</v-icon>
                  <v-tooltip activator="parent" location="bottom"
                    >linkedin</v-tooltip
                  >
                </v-btn>

                <v-btn icon>
                  <v-icon>mdi-email</v-icon>
                  <v-tooltip activator="parent" location="bottom"
                    >email</v-tooltip
                  >
                </v-btn>
              </div>
              <v-app-bar-nav-icon
                class="d-md-none d-sm-none"
                @click="openSidebar"
              ></v-app-bar-nav-icon>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script setup>
import { useDisplay } from "vuetify";
const { xs, sm, md, lg, xl, xlAndUp } = useDisplay();

import { inject, onMounted } from "vue";
// const props = defineProps({ theme: Object });
// const { theme } = toRefs(props);
import { useTheme } from "vuetify";
const theme = useTheme();
const Emitter = inject("Emitter");
const openSidebar = () => {
  Emitter.emit("openSidebar");
};
defineEmits(["ParentOnToggleTheme"]);

onMounted(() => {
  console.log("theme is", theme.global.name.value);
});
</script>

<style lang="scss" scoped></style>
