<template>
  <div class="body-container">
    <div class="col-sm-12">
      <div>
        <ListTourSchedule
          v-for="tourSchedule in tourSchedulesPrivate"
          :key="tourSchedule.id"
          :tourSchedule="tourSchedule"
          @updateTourSchedules="listTourSchedules"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ListTourSchedule from "../components/ListTourSchedule.vue";

export default {
  name: "TourSchedule",
  components: {
    ListTourSchedule,
  },
  created() {
    this.listTourSchedules();
  },
  computed: {
    tourSchedulesPrivate() {
      return this.$store.state.tourSchedulesPrivate;
    },
  },
  methods: {
    listTourSchedules() {
      this.$store.dispatch("listTourSchedulesPrivate");
    },
  },
};
</script>

<style></style>
