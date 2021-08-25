<template>
  <div
    class="card text-center"
    style="margin-bottom: 15px"
    @click="goToDetail(tourSchedule.id)"
  >
    <div class="card-header">
      {{ tourSchedule.placeName }}
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ tourSchedule.name }}</h5>
      <p class="card-text">{{ tourSchedule.description }}</p>
      <a href="#" class="btn btn-primary">Detail</a>
    </div>
    <div class="card-footer text-muted">2 days ago</div>
  </div>
</template>

<script>
export default {
  name: "ListTourSchedulePublic",
  props: ["tourSchedule"],
  // created() {
  //   console.log(this);
  // },
  methods: {
    goToDetail(id) {
      this.$router.push("/tourSchedules/" + id);
    },
  },
};
</script>

<style></style>
