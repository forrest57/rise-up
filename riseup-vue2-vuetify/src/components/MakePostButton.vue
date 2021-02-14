<template>
  <div class="section mb-0 pb-0 ">
    <div class="box dark-light mb-0">
      <p
        class="button is-large is-fullwidth is-dark is-transparent is-bold mb-0"
        @click="toggleMakePost"
      >
        Add your favourite site!
      </p>
        <MakePost v-if="showMakePost"/>
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
      toggleMakePost(){
          this.showMakePost=!this.showMakePost;
      }
  }
};
</script>
<style src="../../public/styles.css"></style>
