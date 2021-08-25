<template>
  <div>
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
  created: function () {
    if (localStorage.getItem("access_token")) {
      this.$store.commit("CHANGE_IS_LOGGED_IN", true);
    } else {
      this.$store.commit("CHANGE_IS_LOGGED_IN", false);
    }
  },
};
</script>

<style></style>
