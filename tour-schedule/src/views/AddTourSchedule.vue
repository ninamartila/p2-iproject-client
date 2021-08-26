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
            <div>
              <p class="font-weight-bold">Basic example</p>

              <select class="selectpicker" data-live-search="true">
                <option data-tokens="ketchup mustard">
                  Hot Dog, Fries and a Soda
                </option>
                <option data-tokens="mustard">Burger, Shake and a Smile</option>
                <option data-tokens="frosting">
                  Sugar, Spice and all things nice
                </option>
              </select>
            </div>
            <div class="form-group">
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
            <button
              type="button"
              class="btn btn-primary btn-block"
              @click="addTourScheduleButtonHandler"
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
        placeName: "",
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
