<template>
  <v-main>
    <v-container fluid>
      <v-row>
        <v-col cols="3">
          <v-sheet rounded="lg">
            <div class="px-5" :class="xs ? 'flex-column' : undefined">
              <personal-info header="Personal Info" />
              <contact-info
                header="Contact Info"
                :class="md || sm ? 'mt-0' : 'mt-5'"
              />
              <languages
                header="Languages"
                :class="md ? 'mt-0' : smAndDown ? 'w-100 mt-5' : 'mt-5'"
              />
            </div>
          </v-sheet>
        </v-col>

        <v-col>
          <v-sheet min-height="70vh" rounded="lg">
            <skills :class="sm ? 'mt-5' : 'mt-0'" />
            <timelines />
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup>
import { defineComponent, reactive } from "vue";
import { useDisplay } from "vuetify";
import PersonalInfo from "../components/PersonalInfo.vue";
import ContactInfo from "../components/ContactInfo.vue";
import Skills from "../components/Skills.vue";
import Timelines from "../components/landing/Timelines.vue";
import Languages from "../components/Languages.vue";

defineComponent({
  name: "Profile",
});

const { xs, sm, smAndDown, md, mdAndDown } = useDisplay();

const profile = reactive({
  fullName: "Mohammed Gamal",
  position: "Front-Ent web developer",
});
</script>

<style scoped>
.container {
  max-width: 1440px;
  margin: 0 auto;
}

.profile {
  border-radius: 50%;
  display: flex;
  justify-content: center;
  height: 50vh;
  align-items: center;
}
.block {
  margin-top: 50px;
}

.block__row {
  display: flex;
}

@media (max-width: 767px) {
  .profile {
    flex-direction: column;
  }
  h1,
  h2 {
    text-align: center;
  }
}

@media (min-width: 768px) {
  .profile__text {
    margin-left: 50px;
  }
}

@media (min-width: 992px) {
  .block__element-1 {
    flex: 0 0 300px;
    margin-right: 20px;
  }

  .block__element-2 {
    flex: 1 1 auto;
    margin-left: 20px;
  }
}
@media (max-width: 991px) {
  .block__element-1 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>
