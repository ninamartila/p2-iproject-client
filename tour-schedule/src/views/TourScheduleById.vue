<template>
  <div class="row" style="padding: 20px; height: 100vh">
    <div class="col-sm-3">
      <img
        src="https://nagantour.com/wp-content/uploads/2021/06/tour-travel-jogja.png"
        class="img-thumbnail"
      />
    </div>
    <div class="col-sm-9">
      <h1>{{ tourSchedulesDetail.placeName }}</h1>
      <div class="row" style="padding-top: 20px">
        <div class="col-sm-3">
          <h5>Tour Schedule Name</h5>
          <h5>Plan Date</h5>
          <h5>End Date</h5>
          <h5>Member Slot</h5>
          <h5>Description</h5>
          <h5>Price</h5>
          <h5>Place Address</h5>
          <h5>Place Rating</h5>
          <h5>Users Join</h5>
        </div>
        <div class="col-sm-9">
          <h5 style="font-weight: normal; color: grey">
            : {{ tourSchedulesDetail.name }}
          </h5>
          <h5 style="font-weight: normal; color: grey">
            : {{ tourSchedulesDetail.planDate }}
          </h5>
          <h5 style="font-weight: normal; color: grey">
            : {{ tourSchedulesDetail.endDate }}
          </h5>
          <h5 style="font-weight: normal; color: grey">
            : {{ tourSchedulesDetail.memberSlot }}
          </h5>
          <h5 style="font-weight: normal; color: grey">
            : {{ tourSchedulesDetail.description }}
          </h5>
          <h5 style="font-weight: normal; color: grey">
            : {{ tourSchedulesDetail.price }}
          </h5>
          <h5 style="font-weight: normal; color: grey">
            : {{ tourSchedulesDetail.placeAddress }}
          </h5>
          <h5 style="font-weight: normal; color: grey">
            : {{ tourSchedulesDetail.placeRating }}
          </h5>
          <div v-for="user in tourSchedulesDetail.Users" :key="user.id">
            <h5 style="font-weight: normal; color: grey">
              {{ user.username }}
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TourScheduleById",
  created: function () {
    const id = this.$route.params.id;
    this.$store.dispatch("listTourSchedulesById", id);
  },
  computed: {
    tourSchedulesDetail() {
      return this.$store.state.tourSchedulesDetail;
    },
  },
};
</script>

<style></style>
