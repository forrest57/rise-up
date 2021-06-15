<template>
  <div class="section mb-0 pb-0">
    <div class="box dark-light mb-0">
      <p
        class="button is-large is-fullwidth is-dark is-transparent is-bold mb-0"
        @click="shouldLogin"
      >
        Add your favourite site!
      </p>
      <v-expand-transition>
        <MakePost v-show="showMakePost" />
      </v-expand-transition>
    </div>
  </div>
</template>
<script>
import MakePost from "@/components/MakePost.vue";
export default {
  name: "MakePostButton",
  components: {
    MakePost,
  },
  data() {
    return {
      showMakePost: false,
    };
  },
  methods: {
    shouldLogin() {
      return this.loggedIn
        ? (this.showMakePost = !this.showMakePost)
        : this.$router.push("/login");
    },
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
};
</script>
<style src="../../public/styles.css"></style>
