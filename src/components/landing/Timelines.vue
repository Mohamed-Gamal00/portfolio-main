<template>
  <v-container>
    <h5 class="text-h5 h5-css text-uppercase text-center">
      Education & Cources
    </h5>
    <div class="timeline mt-5 d-flex justify-center">
      <v-timeline class="mt-5 d-none d-md-flex d-lg-flex d-sm-flex">
        <v-timeline>
          <v-timeline-item
            v-for="timeline in timelines"
            :key="timeline.id"
            :dot-color="timeline.color"
            :icon="timeline.icon"
            fill-dot
          >
            <v-card style="box-shadow: rgba(149, 157, 165, 0.2) 0px 0px 24px">
              <v-card-title>
                <div
                  :class="`pt-1 headline font-weight-bold text-button text-${timeline.color}`"
                  v-text="timeline.period"
                ></div>
              </v-card-title>
              <v-card-text>
                <div>
                  <h2 :class="`mt-n1 headline text-${timeline.color}`">
                    {{ timeline.title }}
                  </h2>
                  <h5 :class="`text-button text-${timeline.color}`">
                    {{ timeline.position }}
                  </h5>
                  <span class="text-subtitle-2">{{
                    timeline.description
                  }}</span>
                </div>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-timeline>

      <!-- dispaly on phone -->
      <v-timeline density="compact" side="end" class="d-md-none d-lg-none d-sm-none">
        <v-timeline-item
          class="mb-4"
          v-for="timeline in timelines"
          :key="timeline.id"
          :dot-color="timeline.color"
          :icon="timeline.icon"
          fill-dot
          size="small"
        >
          <v-card style="box-shadow: rgba(149, 157, 165, 0.2) 0px 0px 24px" class="w-100">
            <v-card-text>
              <div
                :class="`pt-1 headline font-weight-bold text-button text-${timeline.color}`"
                v-text="timeline.period"
              ></div>
            </v-card-text>
            <v-card-text>
              <div>
                <h2 :class="`mt-n1 headline text-${timeline.color}`">
                  {{ timeline.title }}
                </h2>
                <h5 :class="`text-button text-${timeline.color}`">
                  {{ timeline.position }}
                </h5>
                <span class="text-subtitle-2">{{ timeline.description }}</span>
              </div>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </div>
  </v-container>
</template>

<script setup>
import { useDisplay } from "vuetify";
const { xs, sm, md, lg, xlAndUp } = useDisplay();
import { defineComponent, reactive } from "vue";

defineComponent({
  name: "Timelines",
});

const timelines = reactive([
  {
    id: 1,
    icon: "mdi-book-education",
    color: "cyan lighten-1",
    title: " Mansoura University",
    position: "Software Engineer",
    period: "SEP 2018 — JUN 2022",
    description: "Bachelor of Computer Science, Mansoura University",
  },
  {
    id: 2,
    icon: "mdi-briefcase-variant",
    color: "amber darken-1",
    title: "front-end Development Certificate - CCIC",
    position: "Trainee",
    period: "July 2020 - October 2020",
    description: "Build landing pages & make E2E testing with Cypress.js",
  },
  {
    id: 3,
    icon: "mdi-briefcase-variant",
    color: "blue-grey",
    title: "CCNA Certificate - NTI",
    position: "Trainee",
    period: "October 2021 - November 2021",
    description: "covers networking fundamentals",
  },
  {
    id: 4,
    icon: "mdi-briefcase-variant",
    color: "blue-darken-3",
    title: "Route Academy",
    position: "PHP Back-end developer",
    period: "NOV — 2024",
    description: "API integration to e-commerce based on PHP laravel framework",
  },
]);
</script>
