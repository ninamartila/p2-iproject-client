<template>
  <div
    class="card text-center"
    style="margin-bottom: 15px"
    @click="goToDetail()"
  >
    <div class="card-header">
      {{ tourSchedule.placeName || tourSchedule.TourSchedule.placeName }}
    </div>
    <div class="card-body">
      <h5 class="card-title">
        {{ tourSchedule.name || tourSchedule.TourSchedule.name }}
      </h5>
      <p class="card-text">
        {{ tourSchedule.description || tourSchedule.TourSchedule.description }}
      </p>
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
      return moment(
        this.tourSchedule.createdAt || this.tourSchedule.TourSchedule.createdAt
      ).fromNow();
    },
  },
  methods: {
    goToDetail() {
      const id = this.tourSchedule.id || this.tourSchedule.TourSchedule.id;
      const isPublic =
        this.tourSchedule.isPublic || this.tourSchedule.TourSchedule.isPublic;

      this.$router.push(
        `/tourSchedules/${isPublic ? "public" : "private"}/${id}`
      );
    },
  },
};
</script>

<style></style>
