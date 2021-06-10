<template>
  <v-app>
    <v-app-bar app flat style="z-index: 0 !important">
      <!-- <v-avatar 
        size="34"
      > -->
        <UserMenu v-if="$vuetify.breakpoint.smAndDown" />
      <!-- </v-avatar> -->

      <v-tabs centered>
        <v-tab href="/">
          {{ `RiseUp@${this.$route.name}${currentUser? ('/'+currentUser.username) : ''}` }}
        </v-tab>
      </v-tabs>
    </v-app-bar>
     
    <router-view></router-view>
  </v-app>
</template>

<script>
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
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes("ROLE_ADMIN");
      }

      return false;
    },
    showModeratorBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes("ROLE_MODERATOR");
      }

      return false;
    },
  },
};
</script>
