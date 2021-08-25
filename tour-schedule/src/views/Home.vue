<template>
  <div class="home wrapper">
    <div style="width: 100%">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div
          class="carousel-inner"
          style="height: 480px; background-color: #808080"
        >
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              style="max-height: 480px"
              src="https://thumbs.dreamstime.com/z/hiring-vacancy-advertisement-template-trendy-job-banner-poster-flyer-yellow-white-black-colors-minimalistic-187792107.jpg"
              alt="First slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              style="max-height: 480px"
              src="https://cdn4.vectorstock.com/i/1000x1000/12/03/now-hiring-job-opportunity-concept-banner-vector-23581203.jpg"
              alt="Second slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              style="max-height: 480px"
              src="https://image.freepik.com/free-vector/we-re-hiring-business-illustration-job-career-recruitment-concept-banner_159757-104.jpg"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <div class="body-container">
        <div class="col-sm-12">
          <div>
            <ListTourSchedule
              v-for="tourSchedule in tourSchedules"
              :key="tourSchedule.id"
              :tourSchedule="tourSchedule"
              @updateTourSchedules="listTourSchedules"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jwt from "../helper/jwt";
import ListTourSchedule from "../components/ListTourSchedule.vue";

export default {
  name: "Home",
  components: {
    ListTourSchedule,
  },
  created() {
    this.listTourSchedules();
  },
  computed: {
    loggedInUser() {
      const token = localStorage.getItem("access_token");
      const userData = jwt(token);
      return userData;
    },
    tourSchedules() {
      return this.$store.state.tourSchedules;
    },
  },
  methods: {
    listTourSchedules() {
      this.$store.dispatch("listTourSchedulesPublic");
    },
  },
};
</script>
<style>
#navbarContainer {
  flex: 1;
}

.wrapper {
  display: flex;
  flex: row;
  justify-content: center;
  min-height: calc(100vh - 133px);
  overflow-y: auto;
}

.body-container {
  padding: 16px 0px;
}

.imageNav {
  display: flex;
  flex-direction: row;
}

.filterContent {
  margin: 0 10px;
}

.cardContent {
  flex: 1;
  background-color: red;
}

.content {
  padding-top: 10px;
}
</style>
