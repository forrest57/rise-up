<template>
  <v-lazy
    :options="{
      threshold: 0.5,
    }"
    transition="fade-transition"
  >
    <div style="display: flex; width: 100%">
      <figure class="media-left" @click="openlink" style="cursor:pointer;">
        <img class="image is-64x64" :src="this.post.img" />
      </figure>
      <p class="media-content dark is-centered mb-0 has-text-justified">
        <strong
          class="columns title is-vcentered has-text-weight-semibold has-text-info mb-0 pt-1 ml-0"
        >
          <a class="is-white pr-2" @click="openlink">
            {{ post.displayLink }}
          </a>
          <span class="tag is-dark">#{{ post.id }}</span>
        </strong>
        <a class="is-size-6 has-text-weight-normal is-white">
          {{ post.description }}
        </a>
        <br />
        <!-- <small class="is-size-7 has-text-weight-light is-transparent">
          <img class="image is-24x24 mr-1" />
          username #
          {{ post.posterDisplayID }}
                          :src="submission.avatar">
        </small> -->
        <UserPortrait :displayUser="this.post.poster" />
      </p>
      <div class="media-right">
        <span class="icon is-small">
          <i class="fas fa-chevron-up pr-2" @click="upvote"> </i>
          <strong class="is-transparent pr-1">{{ post.votes }}</strong>
        </span>
        <!-- <br /><br /><br />
        <i class="pb-0 mb-0">
          <p>edit me!</p>
        </i> -->
      </div>
    </div>
  </v-lazy>
</template>
<script>
import UserPortrait from "./UserPortrait";
import { getLinkPreview } from "link-preview-js";
export default {
  name: "post-entry",
  data() {
    return {
      img: String,
    };
  },
  components: {
    UserPortrait,
  },
  props: {
    post: Object,
  },
  methods: {
    upvote() {
      this.post.votes++;
      let uri = "//localhost:4000/posts/update/" + this.post._id;
      this.axios.post(uri, this.post).then(() => {}); //TODO:: REDO THIS, DONT REUPLOAD WHOLE POST(PATCH route)
    },
    preview() {
      getLinkPreview(this.post.link).then((data) => console.log(data));
    },
    openlink() {
      window.open(this.post.link, "_blank");
    },
  },
  computed: {
    //  linkImg() {
    //   try{
    //   getLinkPreview(this.post.link).then(data=>{
    //     return data.images[0]
    //   })
    //   }catch{
    //     return "https://i.ibb.co/XtYLhxp/upvote-icon.png"
    //   }
    // },
  },
  // created(){
  //     getLinkPreview(this.post.link).then(
  //       data=>{
  //       this.img= data.images[0]
  //       },
  //       error =>{
  //         this.img= "https://i.ibb.co/XtYLhxp/upvote-icon.png"
  //       })
  //  }
};
</script>
<style src="../../public/styles.css"></style>
