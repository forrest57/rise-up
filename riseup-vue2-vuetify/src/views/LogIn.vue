<template>
  <form class="box hero dark-light mt-12 is-fullheight" @submit.prevent="logIn">
    <div class="section">
      <div class="field">
        <label class="label" for="username" >Username</label>
        <div class="control has-icons-left has-icons-right">
          <input
            class="input is-dark"
            type="text"
            name="username"
            placeholder=" The random one"
            v-model="user.username"
            v-validate="'required'"
          />
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
        </div>
        <p class="help is-danger ml-5"
            v-if="errors.has('username')"
            role="alert">Username required</p>
      </div>

      <div class="field">
        <label class="label" for="password">Password</label>
        <div class="control has-icons-left has-icons-right">
          <input
            class="input is-dark"
            type="password"
            name="password"
            placeholder=" I sure hope you remember that"
            v-model="user.password"
            v-validate="'required'"
          />
          <span class="icon is-small is-left">
            <i class="fas fa-asterisk"></i>
          </span>
        </div>
        <p class="help is-danger ml-5"
            v-if="errors.has('password')"
            role="alert">Password required</p>
      </div>

      <div class="field is-grouped is-justify-content-center">
        <div class="control">
          <button class="button is-dark">Log In</button>
        </div>
        <div class="control">
          <a class="button is-danger" href="/">Cancel</a>
        </div>
        <div v-if="message" class="alert alert-danger" role="alert">
          {{ message }}
        </div>
      </div>
    </div>
  </form>
</template>
<script>
import User from "../models/user"

export default {
  name: "LogIn",
  data() {
    return {
      user: new User("", ""),
      loading: false,
      message: "",
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    logIn() {
      this.loading = true;
      this.$validator.validateAll().then((isValid) => {
        if (!isValid) {
          this.loading = false;
          return;
        }

        if (this.user.username && this.user.password) {
          this.$store.dispatch("auth/login", this.user).then(
            () => {
              this.$router.push("/");
            },
            (error) => {
              this.loading = false;
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
            }
          );
        }
      });
    },
  },
};
</script>