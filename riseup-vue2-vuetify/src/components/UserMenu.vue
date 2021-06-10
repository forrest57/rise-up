<template>
  <div class="text-center">
    <!-- <template v-slot:activator="{ on, attrs }"> -->
    <v-col class="shrink">
      <!-- <v-menu
      offset-y
      transition="slide-y-transition"
      rounded="b-lg t-lg"
      style="background-color: #2a2a2a; color: #e6e6e6; "
      :elevation="1"
    > -->
      <v-btn
        class="button primary is-rounded is-dark mb-2"
        @click="expand = !expand"
      >
        <v-avatar size="32">
          <img v-if="loggedIn" :src="currentUser.img" />
        </v-avatar>
      </v-btn>
      <!-- </template> -->
      <v-expand-transition>
        <v-card
          v-show="expand"
          height="160"
          style="position::relative; z-index:1"
          width="95"
          class="mx-auto"
          rounded="b-lg t-lg"
        >
            <v-list style="background-color: #2a2a2a; color: #e6e6e6">
              <v-list-item
                class="user-menu mt-0 mb-0 px-3"
                :elevation="1"
                v-for="(item, index) in pickedMenu"
                :key="index"
              >
                <a v-bind:href="item.link">
                  <v-list-item-title class="user-menu">{{
                    item.title
                  }}</v-list-item-title>
                </a>
              </v-list-item>
            </v-list>
        </v-card>
      </v-expand-transition>
    </v-col>
    <!-- </v-menu> -->
  </div>
</template>
<script>
export default {
  name: "UserMenu",
  data: () => ({
    expand: false,
    itemsNotLogged: [
      { title: "Log In", link: "/login" },
      { title: "Sign Up", link: "/register" },
    ],
    itemsLoggedIn: [
      { title: "User page", link: "/you" },
      { title: "My posts", link: "/myposts" },
      { title: "Log out", link: "/logout" },
    ],
  }),
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
    pickedMenu() {
      return this.loggedIn ? this.itemsLoggedIn : this.itemsNotLogged;
    },
  },
};
</script>
<style src="../../public/forUserMenu.css"></style>