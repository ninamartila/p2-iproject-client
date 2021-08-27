<template>
  <weather
    api-key="4650336439b35b85cea1a4a07f73b75b"
    :latitude="latitude"
    :longitude="longitude"
    language="in"
    units="uk"
  >
  </weather>
</template>

<script>
import VueWeatherWidget from "vue-weather-widget";

export default {
  name: "Weather",
  components: {
    weather: VueWeatherWidget,
  },
  data: () => ({
    lat: this.$store.state.location.latitude,
    long: this.$store.state.location.longitude,
  }),
};
</script>

<style></style>
