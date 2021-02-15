<template>
<v-app>
    <v-app-bar app flat>
      <v-avatar
        :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
        size="32"
      ></v-avatar>

      <v-tabs centered class="ml-n9">
        <v-tab>
          {{ this.$route.name }}
        </v-tab>
      </v-tabs>

      <v-avatar
        class="hidden-sm-and-down"
        color="grey darken-1 shrink"
        size="32"
      >
      </v-avatar>
    </v-app-bar>
  <router-view></router-view>
  </v-app>

</template>

<script lang="ts">
import Vue from "vue";
// import Home from "./views/Home.vue";
// import About from './views/About.vue';

export default Vue.extend({
  name: "app",

  // components: {
  //   Home
  // },

  data: () => ({
    //
  })
});
</script>
