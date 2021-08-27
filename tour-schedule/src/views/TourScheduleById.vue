<template>
  <div class="row" style="padding: 20px; height: 100vh">
    <div class="col-sm-3">
      <img
        :src="tourSchedulesDetail.placePhoto"
        class="img-thumbnail"
        style="max-height: 300px; width: 100%; object-fit: cover"
      />
    </div>
    <div class="col-sm-9">
      <div class="row" style="align-items: center; grid-gap: 8px">
        <h1 style="flex: 1">{{ tourSchedulesDetail.placeName }}</h1>
        <button
          v-if="visibleJoin"
          type="button"
          class="btn btn-primary"
          @click="onClickAction('join')"
        >
          Join
        </button>
        <button
          v-if="visibleApprove"
          type="button"
          class="btn btn-primary"
          @click="onClickAction('approve')"
        >
          Approve
        </button>
        <button
          v-if="visibleReject"
          type="button"
          class="btn btn-danger"
          @click="onClickAction('reject')"
        >
          Reject
        </button>
        <button
          v-if="visibleCancel"
          type="button"
          class="btn btn-danger"
          @click="onClickAction('cancel')"
        >
          Cancel
        </button>
      </div>
      <div class="row" style="padding-top: 20px">
        <div class="col-sm-3">
          <h5>Tour Name</h5>
        </div>
        <div class="col-sm-9">
          <h5 style="font-weight: normal; color: grey">
            : {{ tourSchedulesDetail.name }}
          </h5>
        </div>
        <div class="col-sm-3">
          <h5>Plan Date</h5>
        </div>
        <div class="col-sm-9">
          <h5 style="font-weight: normal; color: grey">
            : {{ tourSchedulesDetail.planDate }}
          </h5>
        </div>
        <div class="col-sm-3">
          <h5>End Date</h5>
        </div>
        <div class="col-sm-9">
          <h5 style="font-weight: normal; color: grey">
            : {{ tourSchedulesDetail.endDate }}
          </h5>
        </div>
        <div class="col-sm-3">
          <h5>Member Slot</h5>
        </div>
        <div class="col-sm-9">
          <h5 style="font-weight: normal; color: grey">
            : {{ tourSchedulesDetail.memberSlot }}
          </h5>
        </div>
        <div class="col-sm-3">
          <h5>Place Name</h5>
        </div>
        <div class="col-sm-9">
          <h5 style="font-weight: normal; color: grey">
            : {{ tourSchedulesDetail.placeName }}
          </h5>
        </div>
        <div class="col-sm-3">
          <h5>Address</h5>
        </div>
        <div class="col-sm-9">
          <h5 style="font-weight: normal; color: grey">
            : {{ tourSchedulesDetail.placeAddress }}
          </h5>
        </div>
        <div class="col-sm-3">
          <h5>Rating</h5>
        </div>
        <div class="col-sm-9">
          <h5 style="font-weight: normal; color: grey">
            : {{ tourSchedulesDetail.placeRating }}
          </h5>
        </div>
        <div class="col-sm-3">
          <h5>Description</h5>
        </div>
        <div class="col-sm-9">
          <h5 style="font-weight: normal; color: grey">
            : {{ tourSchedulesDetail.description }}
          </h5>
        </div>
        <div class="col-sm-3">
          <h5>Status</h5>
        </div>
        <div class="col-sm-9">
          <h5 style="font-weight: normal; color: grey">
            : {{ tourSchedulesDetail.status }}
          </h5>
        </div>
        <div class="col-sm-3">
          <h5>Members</h5>
        </div>
        <div class="col-sm-9">
          <div v-for="user in tourSchedulesDetail.Users" :key="user.id">
            <h5 style="font-weight: normal; color: grey">
              {{ user.username }} ({{ user.UserTourSchedule.role }}) ({{
                user.UserTourSchedule.status
              }})
            </h5>
          </div>
        </div>
      </div>
    </div>
    <Weather />
  </div>
</template>

<script>
import moment from "moment";
import jwt from "../helper/jwt";
import Weather from "./Weather.vue";

export default {
  name: "TourScheduleById",
  components: { Weather },
  created: function () {
    const { id, mode } = this.$route.params;
    this.$store.dispatch("listTourSchedulesById", { id, mode });
    this.$store.state.location = {
      latitude: this.$store.state.tourSchedulesDetail.place.location.lat,
      longitude: this.$store.state.tourSchedulesDetail.place.location.lng,
    };
  },
  computed: {
    tourSchedulesDetail() {
      return {
        ...this.$store.state.tourSchedulesDetail,
        planDate: moment(this.$store.state.tourSchedulesDetail.planDate).format(
          "DD MMM YYYY"
        ),
        endDate: moment(this.$store.state.tourSchedulesDetail.endDate).format(
          "DD MMM YYYY"
        ),
      };
    },
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
    loggedInUser() {
      const token = localStorage.getItem("access_token");
      const userData = jwt(token);
      return userData;
    },
    visibleApprove() {
      if (this.tourSchedulesDetail && this.tourSchedulesDetail.Users) {
        const member = this.tourSchedulesDetail.Users.find(
          (item) => item.id === this.loggedInUser.id
        );

        if (member) {
          return (
            member.UserTourSchedule.role === "member" &&
            member.UserTourSchedule.status === "pending"
          );
        }
      }
      return false;
    },
    visibleReject() {
      if (this.tourSchedulesDetail && this.tourSchedulesDetail.Users) {
        const member = this.tourSchedulesDetail.Users.find(
          (item) => item.id === this.loggedInUser.id
        );

        if (member) {
          return (
            member.UserTourSchedule.role === "member" &&
            member.UserTourSchedule.status === "pending"
          );
        }
      }
      return false;
    },
    visibleCancel() {
      if (this.tourSchedulesDetail && this.tourSchedulesDetail.Users) {
        const member = this.tourSchedulesDetail.Users.find(
          (item) => item.id === this.loggedInUser.id
        );

        if (member) {
          return (
            member.UserTourSchedule.role === "member" &&
            member.UserTourSchedule.status === "approve"
          );
        }
      }
      return false;
    },
    visibleJoin() {
      if (this.tourSchedulesDetail && this.tourSchedulesDetail.Users) {
        const member = this.tourSchedulesDetail.Users.find(
          (item) => item.id === this.loggedInUser.id
        );
        if (!member) {
          return true;
        }
      }
      return false;
    },
  },
  methods: {
    onClickAction(mode) {
      if (this.isLoggedIn) {
        this.$store.dispatch("addTourActions", {
          tourId: this.tourSchedulesDetail.id,
          mode,
        });
      } else {
        this.$router.push("/login");
      }
    },
  },
};
</script>

<style></style>
