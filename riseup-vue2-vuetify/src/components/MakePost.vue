<template>
  <form class="container" @submit.prevent="addPost">
    <div class="columns has-text-centered is-horizontal is-centered">
      <div class="column is-three-quarters is-6 is-fullheight">
        <label class="label mt-2">Link</label>
        <div class="control mt-3">
          <textarea
            v-model="post.link"
            class="textarea has-fixed-size is-dark"
            placeholder="SomethingSomething.freespeech"
          >
          </textarea>
          <p class="help is-danger">
            {{
              this.post.link && !this.validLink
                ? "please insert a valid http(s) link"
                : ""
            }}
          </p>
        </div>
      </div>
      <div class="column is-three-quarters is-6 is-fullheight">
        <div class="field">
          <label class="label mt-2">Description</label>
          <div class="control mt-3">
            <textarea
              v-model="post.description"
              class="textarea is-dark"
              placeholder="Why do you like this site so much?"
            >
            </textarea>
          </div>
        </div>
      </div>
    </div>
    <div class="columns has-text-centered is-horizontal is-centered">
      <div class="column is-fullheight">
        <button class="button is-dark is-transparent is-fullwidth is-bold">
          Submit
        </button>
        <p
          class="is-bold is-justified is-fullwidth mb-0"
          style="
            font-size: 1vw;
            color: rgba(255, 254, 254, 0.55);
            font-weight: 500;
          "
        >
          By submitting you agree to the <br />
          <a href="/termsandconditions">Terms and Conditions</a>
        </p>
      </div>
    </div>
  </form>
</template>
<script>
import { linkMatch, userPFPs } from "../logic";
export default {
  name: "MakePost",
  data() {
    return {
      post: {
        link: "",
        description: "",
        votes: 0,
        poster: {},
        comments: [{}],
      },
    };
  },
  methods: {
    addPost() {
      if (this.validLink) {
        this.post.poster = {
          username: this.currentUser.username,
          id: this.currentUser.id,
          img: userPFPs.indexOf(this.currentUser.img),
        };
        let uri = "//localhost:4000/posts/add";
        this.axios.post(uri, this.post).then(() => {
          this.$router.go();
        });
      }
    },
  },
  computed: {
    validLink() {
      return linkMatch.test(this.post.link);
    },
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
};
</script>
