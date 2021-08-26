<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/">
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              aria-current="page"
              to="/login"
              v-if="!isLoggedIn"
            >
              Sign In
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              aria-current="page"
              to="/register"
              v-if="!isLoggedIn"
            >
              Sign Up
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              aria-current="page"
              to="/tourSchedules"
              v-if="isLoggedIn"
            >
              My Tour Schedules
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              aria-current="page"
              to="/addTourSchedules"
              v-if="isLoggedIn"
            >
              Add Tour Schedules
            </router-link>
          </li>
          <li>
            <a
              class="nav-link"
              aria-current="page"
              @click="logoutButtonHandler"
              v-if="isLoggedIn"
              style="cursor: pointer"
            >
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import jwt from "../helper/jwt";

export default {
  name: "Navbar",
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
    loggedInUser() {
      const token = localStorage.getItem("access_token");
      const userData = jwt(token);
      return userData;
    },
  },
  methods: {
    logoutButtonHandler() {
      localStorage.removeItem("access_token");
      this.$store.commit("IS_LOGGED_IN", false);
      this.$store.commit("LOGGED_IN_USER_INFO", {});
      this.$router.push("/login");
    },
  },
};
</script>

<style></style>
