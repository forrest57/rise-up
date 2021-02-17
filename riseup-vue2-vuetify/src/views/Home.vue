<template>
  <v-app id="inspire">
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" sm="2">
            <v-sheet rounded="lg" min-height="268">
              <!-- left column  -->
            </v-sheet>
          </v-col>

          <v-col cols="12" sm="8">
            <v-sheet min-height="70vh" rounded="lg">
              <!-- center column -->
              <v-btn
                class="md-5 mr-3 elevation-21"
                dark
                fab
                button
                right
                bottom
                fixed
                @click="$vuetify.goTo(0)"
              >
                <i class="fas fa-chevron-up" />
              </v-btn>
              <MakePostButton />
              <post-loader :posts="posts" />
            </v-sheet>
          </v-col>

          <v-col cols="12" sm="2">
            <v-sheet rounded="lg" min-height="268">
              <!-- right column -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import PostLoader from "@/components/PostLoader.vue";
import MakePostButton from "@/components/MakePostButton.vue";
export default {
  name: "Home",
  components: {
    PostLoader,
    MakePostButton,
  },
  data: () => ({
    links: ["Dashboard", "Messages", "Profile", "Updates"],
    posts: [],
    methods: {},
  }),
  created() {
    let uri = "//localhost:4000/posts";
    this.axios.get(uri).then((response) => {
      this.posts = response.data;
    });
  },
};
</script>
