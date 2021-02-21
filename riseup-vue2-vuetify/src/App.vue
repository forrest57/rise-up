<template>
  <v-app>
    <v-app-bar app flat>
      <v-avatar
        :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
        size="32"
      >
        <UserMenu v-if="$vuetify.breakpoint.smAndDown"/>
        </v-avatar>

      <v-tabs centered class="">
        <v-tab href="/">
          {{ "RiseUp@" + this.$route.name }}
        </v-tab>
      </v-tabs>

      <v-avatar
        class="hidden-sm-and-down"
        color="grey darken-1 shrink"
        size="32"
      >
        <UserMenu />
      </v-avatar>
    </v-app-bar>
    <router-view></router-view>
  </v-app>
</template>

<script>
import Vue from "vue";
import UserMenu from "./components/UserMenu.vue";

export default {
  name: "app",
  components: {
    UserMenu,
  },
  data() {
    return {
      showUserMenu: false,
    };
  },
  methods: {
    toggleUserMenu() {
      this.showUserMenu = !this.showUserMenu;
    },
  },
};
</script>
