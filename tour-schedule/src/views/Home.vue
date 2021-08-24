<template>
  <div class="home">
    <h1>Home</h1>
    <CardPlace />
  </div>
</template>

<script>
import CardPlace from "../components/CardPlace.vue";

export default {
  name: "Home",
  components: {
    CardPlace,
  },
};
</script>
