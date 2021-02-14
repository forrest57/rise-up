<template>
  <div class="section">
    <article class="box dark-light mb-4" v-for="post in sortedPosts" :key="post.id">
      <post-entry :post="post" />
    </article>
  </div>
</template>
<script>
import PostEntry from "@/components/PostEntry.vue";

export default {
  name: "post-loader",
  components: {
    PostEntry
  },
  props: {
    posts: Array
  },
  methods: {},
  computed: {
    sortedPosts() {
      return this.posts.slice().sort((a, b) => b.votes - a.votes);
    }
  }
};
</script>
<style src="../../public/styles.css"></style>
