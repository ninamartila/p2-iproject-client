<template>
  <section id="register-page">
    <div
      class="container d-flex justify-content-center"
      style="
        height: calc(100vh - 133px);
        flex-direction: column;
        max-width: 480px;
      "
    >
      <div class="text-center">
        <h1 class="title">Register a new account</h1>
      </div>
      <br />
      <div class="card">
        <div class="card-body">
          <form id="register-form">
            <div class="form-group">
              <input
                class="form-control"
                type="text"
                id="register-username"
                placeholder="Username"
                v-model="registerData.username"
              />
            </div>
            <div class="form-group">
              <input
                class="form-control"
                type="email"
                id="register-email"
                placeholder="Email address"
                v-model="registerData.email"
              />
            </div>
            <div class="form-group">
              <input
                class="form-control"
                type="password"
                id="register-password"
                placeholder="Password"
                v-model="registerData.password"
              />
            </div>
            <button
              type="button"
              class="btn btn-primary btn-block"
              @click="registerButtonHandler"
            >
              Register
            </button>
          </form>

          <br />
          <div class="text-center">
            <small>Already have an account?</small>&nbsp;&nbsp;
            <router-link to="/login" class="btn btn-info btn-sm"
              >Sign In</router-link
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
  name: "register",
  data: function () {
    return {
      registerData: {
        username: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    registerButtonHandler() {
      this.$store.dispatch("register", this.registerData);
    },
  },
};
</script>

<style></style>
