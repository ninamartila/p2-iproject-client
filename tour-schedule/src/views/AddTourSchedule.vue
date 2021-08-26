<template>
  <section id="tour-schedule-page">
    <div
      class="container d-flex justify-content-center"
      style="
        height: calc(100vh - 133px);
        flex-direction: column;
        max-width: 780px;
      "
    >
      <div class="text-center">
        <h1 class="title">Add a new Tour Schedule</h1>
      </div>
      <br />
      <div class="card">
        <div class="card-body">
          <form id="register-form">
            <div class="form-group">
              <input
                class="form-control"
                type="text"
                id="tourSchedule-name"
                placeholder="Name"
                v-model="tourSchedule.name"
              />
            </div>
            <div class="form-group">
              <vue-google-autocomplete
                id="map"
                classname="form-control"
                placeholder="Search Places you want to trip"
                v-on:placechanged="getPlaceData"
                country="id"
              >
              </vue-google-autocomplete>
            </div>
            <div class="form-group" style="margin-top: 20px">
              <input
                class="form-control"
                type="date"
                id="tourSchedule-planDate"
                placeholder="Plan Date"
                v-model="tourSchedule.planDate"
              />
            </div>
            <div class="form-group">
              <input
                class="form-control"
                type="date"
                id="tourSchedule-endDate"
                placeholder="End Date"
                v-model="tourSchedule.endDate"
              />
            </div>
            <div class="form-group">
              <input
                class="form-control"
                type="number"
                id="tourSchedule-memberSlot"
                placeholder="Member Slot"
                v-model="tourSchedule.memberSlot"
              />
            </div>
            <div class="form-group">
              <input
                class="form-control"
                type="text"
                id="tourSchedule-description"
                placeholder="Description"
                v-model="tourSchedule.description"
              />
            </div>
            <div class="form-group">
              <input
                class="form-control"
                type="number"
                id="tourSchedule-price"
                placeholder="Price"
                v-model="tourSchedule.price"
              />
            </div>
            <div class="form-group">
              <label for="inviteMembers">Invite Members</label>
              <select
                class="form-control"
                id="inviteMembers"
                v-model="tourSchedule.inviteMembers"
              >
                <option
                  v-for="user in userList"
                  :key="user.id"
                  :value="user.id"
                >
                  {{ user.username }}
                </option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Public</label>
              <select
                class="form-control"
                id="exampleFormControlSelect1"
                v-model="isPublic"
              >
                <option :value="true">True</option>
                <option :value="false">False</option>
              </select>
            </div>
            <button
              type="button"
              class="btn btn-primary btn-block"
              @click="addTourScheduleButtonHandler"
              style="margin-top: 20px"
            >
              Add Tour Schedule
            </button>
          </form>
        </div>
      </div>
      <br />
    </div>
  </section>
</template>

<script>
import VueGoogleAutocomplete from "vue-google-autocomplete";

export default {
  name: "AddTourSchedule",
  components: {
    VueGoogleAutocomplete,
  },
  data: function () {
    return {
      tourSchedule: {
        name: "",
        planDate: "",
        endDate: "",
        placeName: "",
        inviteMembers: null,
        memberSlot: null,
        isPublic: false,
        description: "",
        price: null,
      },
    };
  },
  mounted() {
    this.$store.dispatch("getUserList");
  },
  computed: {
    userList() {
      return this.$store.state.userList;
    },
  },
  methods: {
    addTourScheduleButtonHandler() {
      this.$store.dispatch("addTourScheduleButtonHandler", this.tourSchedule);
    },
    getPlaceData: function (_, placeResultData) {
      this.tourSchedule.placeName = placeResultData.name;
    },
  },
};
</script>

<style></style>
