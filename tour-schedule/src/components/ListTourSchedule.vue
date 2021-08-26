<template>
  <div
    class="card text-center"
    style="margin-bottom: 15px"
    @click="goToDetail()"
  >
    <div class="card-header">
      {{ tourSchedule.placeName }}
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ tourSchedule.name }}</h5>
      <p class="card-text">{{ tourSchedule.description }}</p>
      <a href="#" class="btn btn-primary">Detail</a>
    </div>
    <div class="card-footer text-muted">{{ getTimeAgo }}</div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "ListTourSchedulePublic",
  props: ["tourSchedule"],
  // created() {
  //   console.log(this);
  // },
  computed: {
    getTimeAgo() {
      return moment(this.tourSchedule.createdAt).fromNow();
    },
  },
  methods: {
    goToDetail() {
      const { id, isPublic } = this.tourSchedule;
      this.$router.push(
        `/tourSchedules/${isPublic ? "public" : "private"}/${id}`
      );
    },
  },
};
</script>

<style></style>
