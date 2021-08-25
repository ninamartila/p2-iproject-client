<template>
  <section id="login-page">
    <div
      class="container d-flex justify-content-center"
      style="
        height: calc(100vh - 133px);
        flex-direction: column;
        max-width: 480px;
      "
    >
      <div class="text-center">
        <h1 class="title">Login to your account</h1>
      </div>

      <br />
      <div class="card">
        <div class="card-body">
          <form id="login-form">
            <div class="form-group">
              <input
                class="form-control"
                type="email"
                id="login-email"
                placeholder="Email address"
                v-model="loginData.email"
              />
            </div>
            <div class="form-group">
              <input
                class="form-control"
                type="password"
                id="login-password"
                placeholder="Password"
                v-model="loginData.password"
              />
            </div>
            <button
              type="button"
              class="btn btn-primary btn-block"
              @click="loginButtonHandler"
            >
              Login
            </button>
          </form>

          <br />
          <div class="text-center">
            <small>Don't have an account yet?</small>&nbsp;&nbsp;
            <router-link to="/register" class="btn btn-info btn-sm"
              >Sign Up</router-link
            ><br />
          </div>
        </div>
      </div>
      <br />
    </div>
  </section>
</template>

<script>
export default {
  name: "Login",
  data: function () {
    return {
      loginData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    loginButtonHandler() {
      this.$store.dispatch("login", this.loginData);
    },
  },
};
</script>

<style></style>
