<!--TODO:: ADD LOGIC TO CSS CHANGES-->
<template>
  <form
    class="box hero dark-light mt-12 is-fullheight"
    @submit.prevent="addUser"
  >
    <div class="section">
      <div class="field">
        <label class="label">Username</label>
        <div class="control has-icons-left has-icons-right">
          <input
            class="input is-dark"
            :class="
              !user.username ||
              (!validUsername && 'is-danger') ||
              (validUsername && 'is-success')
            "
            placeholder=" Your incredibly unique username"
            v-model="user.username"
          />
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
          <span class="icon is-small is-right">
            <i
              class="fas"
              :class="
                !user.username ||
                (!validUsername && 'fa-exclamation-triangle') ||
                (validUsername && 'fa-check')
              "
            >
            </i>
          </span>
        </div>
        <p class="help is-danger">
          {{
            !user.username || validUsername
              ? ""
              : "This username is too long, too short, or has special characters."
          }}
        </p>
      </div>

      <div class="field">
        <label class="label">Email</label>
        <div class="control has-icons-left has-icons-right">
          <input
            class="input is-dark"
            :class="
              !user.email ||
              (!validEmail && 'is-danger') ||
              (validEmail && 'is-success')
            "
            type="email"
            placeholder=" Most likely your throwaway"
            v-model="user.email"
          />
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
          <span class="icon is-small is-right">
            <i
              class="fas"
              :class="
                !user.email ||
                (!validEmail && 'fa-exclamation-triangle') ||
                (validEmail && 'fa-check')
              "
            ></i>
          </span>
        </div>
        <p class="help is-danger">
          {{ !user.email || validEmail ? "" : "This email is invalid." }}
        </p>
      </div>

      <div class="field">
        <label class="label">Password</label>
        <div class="control has-icons-left has-icons-right">
          <input
            class="input is-dark"
            :class="
              !user.password ||
              (!validPassword && 'is-danger') ||
              (validPassword && 'is-success')
            "
            type="password"
            placeholder=" Your extremely secure password"
            v-model="user.password"
          />
          <span class="icon is-small is-left">
            <i class="fas fa-asterisk"></i>
          </span>
          <span class="icon is-small is-right">
            <i
              class="fas"
              :class="
                !user.password ||
                (!validPassword && 'fa-exclamation-triangle') ||
                (validPassword && 'fa-check')
              "
            ></i>
          </span>
        </div>
        <p class="help is-danger">
          {{
            !user.password || validPassword
              ? ""
              : `The password needs to be 8 characters long and contain at least a
          number, an uppercase and lowercase letter, and a special character.`
          }}
        </p>
      </div>

      <div class="field">
        <label class="label">Confirm Password</label>
        <div class="control has-icons-left has-icons-right">
          <input
            class="input is-dark"
            :class="
              !confirmPassword || (samePassword ? 'is-success' : 'is-danger')
            "
            type="password"
            placeholder=" Just making sure"
            v-model="confirmPassword"
          />
          <span class="icon is-small is-left">
            <i class="fas fa-asterisk"></i>
          </span>
          <span class="icon is-small is-right">
            <i
              class="fas"
              :class="
                !confirmPassword ||
                (samePassword ? 'fa-check' : 'fa-exclamation-triangle')
              "
            ></i>
          </span>
        </div>
        <p class="help is-danger">
          {{ samePassword ? "" : "The passwords do not match." }}
        </p>
      </div>
      <div class="field has-text-centered">
        <div class="control">
          <label class="checkbox">
            <input type="checkbox" required />
          </label>
          I have read and agree to the
          <a href="/termsandconditions">terms and conditions</a>
        </div>
      </div>

      <div class="field is-grouped is-justify-content-center">
        <div class="control">
          <button class="button is-dark">Sign Up</button>
        </div>
        <div class="control">
          <a class="button is-danger" href="/">Cancel</a>
        </div>
      </div>
      <div
        v-if="message"
        class="help has-text-centered"
        :class="successful ? 'is-success' : 'is-danger'"
      >{{message}}</div>
    </div>
  </form>
</template>
<script >
import { emailMatch } from "../logic";
import { passwordMatch } from "../logic";
import { usernameMatch } from "../logic";
import User from "../models/user";

export default {
  name: "SignUp",
  data() {
    return {
      // user: {
      //   username: "",
      //   email: "",
      //   password: "",
      //   postCount: 0,
      //   roles: ["user"],
      // },
      user: new User("", "", ""),
      submitted: false,
      successful: false,
      confirmPassword: "",
      message: ''
    };
  },
  methods: {
    addUser() {
      if (
        this.validUsername &&
        this.validEmail &&
        this.validPassword &&
        this.samePassword
      ) {
        this.$store.dispatch("auth/register", this.user).then(
          (data) => {
            this.message = data.message;
            this.successful = true;
            this.$router.push("/login");
          },
          (error) => {
            this.message =
              (error.response.data.message) ||
              error.message ||
              error.toString();
            this.successful = false;
          }
        );
      }
    },
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
    validEmail: function () {
      return emailMatch.test(this.user.email);
    },
    validPassword: function () {
      return passwordMatch.test(this.user.password);
    },
    validUsername: function () {
      return usernameMatch.test(this.user.username);
    },
    samePassword: function () {
      return this.confirmPassword === this.user.password;
    },
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
};
</script>