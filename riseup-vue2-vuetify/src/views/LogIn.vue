<!--TODO:: ADD LOGIC TO CSS CHANGES-->
<template>
  <article class="box dark-light mt-10">
    <div class="section">
      <div class="field">
        <label class="label">Username</label>
        <div class="control has-icons-left has-icons-right">
          <input
            class="input is-success"
            type="text"
            placeholder="Your incredibly unique usernae"
          />
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </div>
        <p class="help is-success">This username is available</p>
      </div>

      <div class="field">
        <label class="label">Email</label>
        <div class="control has-icons-left has-icons-right">
          <input
            class="input is-danger"
            type="email"
            placeholder="Most likely your throwaway"
          />
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-exclamation-triangle"></i>
          </span>
        </div>
        <p class="help is-danger">This email is invalid</p>
      </div>

      <div class="field">
        <label class="label">Password</label>
        <div class="control has-icons-left has-icons-right">
          <input
            class="input is-danger"
            type="password"
            placeholder="Your extremely secure password"
          />
          <span class="icon is-small is-left">
            <i class="fas fa-asterisk"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-exclamation-triangle"></i>
          </span>
        </div>
        <p class="help is-danger">
          The password needs to be 16 characters long, and contain at least a
          number and a special character.
        </p>
      </div>

      <div class="field">
        <label class="label">Confirm Password</label>
        <div class="control has-icons-left has-icons-right">
          <input
            class="input is-danger"
            type="password"
            placeholder="Your extremely secure password (again)"
          />
          <span class="icon is-small is-left">
            <i class="fas fa-asterisk"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-exclamation-triangle"></i>
          </span>
        </div>
        <p class="help is-danger">The passwords do not match.</p>
      </div>
      <div class="field has-text-centered">
        <div class="control">
          <label class="checkbox">
            <input type="checkbox" />
            I have read and agree to the <a href="/termsandconditions">terms and conditions</a>
          </label>
        </div>
      </div>

      <div class="field is-grouped is-justify-content-center">
        <div class="control">
          <button class="button is-dark">Submit</button>
        </div>
        <div class="control">
          <a class="button is-danger" href="/" >Cancel</a>
        </div>
      </div>
    </div>
  </article>
</template>
<script>
export default {
  name: "LogIn",
};
</script>