<template>
  <div class="text-center">
    <v-menu
      offset-y
      transition="slide-y-transition"
      rounded="b-lg t-lg"
      style="background-color: #2a2a2a; color: #e6e6e6"
      :elevation ="1"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="transparent" dark v-bind="attrs" v-on="on"></v-btn>
      </template>
      <v-list style="background-color: #2a2a2a; color: #e6e6e6">
        <v-list-item
         class="user-menu mt-0 mb-0 px-3"
         :elevation="1"
          v-for="(item, index) in items"
          :key="index"
        >
          <a v-bind:href=item.link>
          <v-list-item-title
            class="user-menu"
            >{{ item.title }}</v-list-item-title>
            </a>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<script>
export default {
  name: "UserMenu",
  data: () => ({
    items: [
      { title: "Log In", link:"/login" },
      { title: "User page", link:"/userpage" },
      { title: "Show Posts", link:"/myposts" },
      { title: "Log out", link: "logout" },
    ],
  }),
};
</script>
<style src="../../public/forUserMenu.css"></style>