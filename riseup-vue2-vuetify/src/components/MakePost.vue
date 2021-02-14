<template>
  <form class="container">
    <div class="columns has-text-centered is-horizontal is-centered">
      <div class="column is-three-quarters is-6 is-fullheight">
        <label class="label mt-2">Link</label>
        <div class="control mt-3">
          <textarea
            v-model="post.link"
            class="textarea has-fixed-size is-dark"
            placeholder="somethingsomething.freespeech"
          >
          </textarea>
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
        <p
          @click="handleSubmit"
          class="button is-dark is-transparent is-fullwidth is-bold"
        >
          Submit
        </p>
        <p
          class="is-bold is-justified is-fullwidth mb-0"
          style="
            font-size: 1vw;
            color: rgba(255, 254, 254, 0.55);
            font-weight: 500;
          "
        >
          By submitting you agree to the <br />
          <a href="#">Terms and Conditions</a>
        </p>
      </div>
    </div>
  </form>
</template>
<script>
export default {
  name: "MakePost",
  data() {
    return {
      post: {
        link: "",
        description: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      console.log("submitted" + this.post.link);
    },
  },
};
</script>