<template>
  <v-lazy
    v-model="isActive"
    :options="{
      threshold: 0.5,
    }"
    transition="fade-transition"
  >
    <div style="display: flex; width: 100%;">
      <figure class="media-left">
        <img class="image is-64x64" />
        <!--           :src="submission.submissionImage"-->
      </figure>
      <p class="media-content dark is-centered mb-0 has-text-justified">
        <strong
          class="columns title is-vcentered has-text-weight-semibold has-text-info mb-0 pt-1 ml-0"
        >
          <a class="is-white pr-2">
            {{ post.link }}
          </a>
          <span class="tag is-dark">#{{ post.id }}</span>
        </strong>
        <a class="is-size-6 has-text-weight-normal is-white">
          {{ post.description }}
        </a>
        <br />
        <small class="is-size-7 has-text-weight-light is-transparent">
          <img class="image is-24x24 mr-2" />
          username #1234
          <!--                 :src="submission.avatar">-->
        </small>
      </p>
      <div class="media-right">
        <span class="icon is-small">
          <i class="fas fa-chevron-up pr-2" @click="upvote()"> </i>
          <strong class="is-transparent">{{ post.votes }}</strong>
        </span>
      </div>
    </div>
  </v-lazy>
</template>
<script>
export default {
  name: "post-entry",
  props: {
    post: Object,
  },
  // data() {
  //   return {
  //     post: {
  //       upvotes: 0
  //     }
  //   }
  // },
  methods: {
    upvote() {
      this.post.votes++;
    },
  },
};
</script>
<style src="../../public/styles.css"></style>
