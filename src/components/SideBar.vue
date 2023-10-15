<template>
  <v-app>
    <v-navigation-drawer :value="drawer">
      <p>drawer navigation </p>
    </v-navigation-drawer>

  </v-app>
</template>

<script>
export default {
  data: () => ({
    selectedItem: 0,
  }),
  props: {
    drawer: Boolean, // Define the 'drawer' prop with the expected type
    students: String, // Define any other expected props
  },

};
</script>

<style>
.border {
  margin: 0px 8px;
  background: #6f0dff;
  border-radius: 15px;
  text-decoration: none;
  width: 60px;
  height: 60px;
}
.v-list-item-group .v-list-item--active {
  color: white !important;
}
.v-list-item__content {
  padding: 20px 0 !important;
}
.image {
  border: 1px solid white;
}
</style>
