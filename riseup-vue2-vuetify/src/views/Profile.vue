<template>
  <div class="has-text-centered">
      <h1 class="mt-15 pt-10 is-size-4 is-orange mr-3">
        <img class="image is-24x24" :src="currentUser.img" />
        {{ this.currentUser.username }}
      </h1>
    <h1 class="is-size-4">User Page</h1>
    <br />
    <br />
    <div class="columns is-centered">
      <div class="column is-half">
        <h1 class="is-size-5 is-orange has-text-centered">Profile picture</h1>
      </div>
    </div>
    <div class="columns is-multiline is-centered">
      <div class="column is-half">
        <img
          v-for="(item, index) in propics"
          :key="index"
          class="image is-24x24 mx-1"
          :src="item.src"
          @click="postImage(item.src)"
        />
      </div>
    </div>
    <div class="columns is-centered">
      <div class="column is-half">
        <h1 class="is-size-5 is-orange has-text-centered">Email</h1>
        <p class="is-size-6 is-justified">
          {{ this.currentUser.email }}
        </p>
      </div>
    </div>
    <div class="columns is-centered">
      <div class="column is-half">
        <h1 class="is-size-5 is-orange has-text-centered">Settings</h1>
        <div class="content">
          <p class="is-size-6 is-justified">
            Work in progress! you will find a notification with all the
            changelogs as soon as the new patches go live.
          </p>
        </div>
      </div>
    </div>
    <div class="columns is-centered">
      <div class="column is-half">
        <h1 class="is-size-5 is-orange has-text-centered">Change password</h1>
        <p class="is-size-6 is-justified">
          This project has an MIT license. Furthermore it has been built, and is
          still being taken care of, by a single person. The source code can be
          found on the official GitHub page. Most of the icons were also made
          using FontAwesome's SVG icons, I won't take any credit for them, and
          their license can be found
          <a href="https://fontawesome.com/license">here</a>.
        </p>
      </div>
    </div>
    <div class="columns is-centered">
      <div class="column is-half">
        <h1 class="is-size-5 is-orange has-text-centered">Contacts</h1>
        <p class="is-size-6 is-justified">
          Whoever may be interested in contacting me, can email me at
          email@email.com .
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Profile",
  data: () => ({
    propics: [
      {
        src:
          "https://i.ibb.co/XtYLhxp/upvote-icon.png",
      },
      {
        src:
          "https://i.ibb.co/dtCnnm6/vuejs-icon.png",
      },
    ],
  }),
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },

  },
  methods: {
    postImage(img) {
      let toPostUser= this.currentUser
      toPostUser.img=img
      // let uri = "//localhost:4000/users/update/" + this.currentUser.id;
      // this.axios.post(uri, {id: this.currentUser.id, img: img}).then(() => {
      //   this.$router.go();
      // });
      // console.log(toPostUser.username)
      this.$store.dispatch('auth/imgchange',toPostUser).then()//TODO:: hot reload user img
    },
  },
};
</script>
