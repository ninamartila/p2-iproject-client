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
              <label for="exampleFormControlSelect1">Data Place</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Data Place</option>
              </select>
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
                v-model="tourSchedule.andDate"
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
export default {
  name: "AddTourSchedule",
  data: function () {
    return {
      tourSchedule: {
        planDate: "",
        endDate: "",
        memberSlot: "",
        isPublic: "",
        description: "",
        price: "",
      },
    };
  },
  methods: {
    addTourScheduleButtonHandler() {
      this.$store.dispatch("addTourScheduleButtonHandler", this.tourSchedule);
    },
  },
};
</script>

<style></style>
