import Vue from "vue";
import Vuex from "vuex";
import axiosApi from "../apis/axiosApi";
import router from "../router";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

Vue.use(VueToast, { position: "bottom-right" });
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: "",
    loggedInUser: {},
    tourSchedules: [],
    tourSchedulesDetail: {},
    tourSchedulesPrivate: [],
  },
  mutations: {
    IS_LOGGED_IN(state, payload) {
      state.isLoggedIn = payload;
    },
    LOGGED_IN_USER_INFO(state, payload) {
      state.loggedInUser = payload;
    },
    LIST_TOUR_SCHEDULE_PUBLIC(state, payload) {
      state.tourSchedules = payload;
    },
    LIST_TOUR_SCHEDULE_DETAIL(state, payload) {
      state.tourSchedulesDetail = payload;
    },
    LIST_TOUR_SCHEDULE_PIVATE(state, payload) {
      state.tourSchedulesPrivate = payload;
    },
  },
  actions: {
    async login(context, payload) {
      try {
        const response = await axiosApi({
          method: "POST",
          url: "/auth/login",
          data: {
            email: payload.email,
            password: payload.password,
          },
        });

        localStorage.setItem("access_token", response.data.access_token);
        context.commit("IS_LOGGED_IN", true);
        context.dispatch("fetchTourSchedule");
        router.push("/");

        Vue.$toast.open({
          message: "Successfully logged in!",
          type: "success",
        });
      } catch (err) {
        Vue.$toast.open({
          message: err.response.data.message,
          type: "error",
        });
      }
    },
    async register(context, payload) {
      try {
        await axiosApi({
          method: "POST",
          url: "/auth/register",
          data: {
            username: payload.username,
            email: payload.email,
            password: payload.password,
          },
        });

        router.push("/");

        Vue.$toast.open({
          message: "Successfully registered. Please proceed to login",
          type: "success",
        });
      } catch (err) {
        let errorMessages = "";

        if (Array.isArray(err.response.data.message)) {
          err.response.data.message.forEach((el, idx) => {
            errorMessages += `${el}`;
            errorMessages +=
              idx === err.response.data.message.length - 1 ? "" : ",\n";
          });
        } else {
          errorMessages = err.response.data.message;
        }

        Vue.$toast.open({
          message: errorMessages,
          type: "error",
        });
      }
    },
    async listTourSchedulesPublic(context) {
      try {
        Vue.$toast.open({
          message: "Fetching Tour Schedule data... please wait",
          type: "info",
        });

        const response = await axiosApi.get(`/tourSchedules/public`);
        context.commit("LIST_TOUR_SCHEDULE_PUBLIC", response.data);
      } catch (err) {
        Vue.$toast.open({
          message: err.response.data.message,
          type: "error",
        });
      }
    },
    async listTourSchedulesById(context, params) {
      const { id, mode } = params;
      try {
        Vue.$toast.open({
          message: "Acquiring Tour Schedule information..",
          type: "info",
        });
        const access_token = localStorage.getItem("access_token");
        let axiosOptions = {};

        if (access_token) {
          axiosOptions.headers = {
            access_token: access_token,
          };
        }

        const response = await axiosApi.get(
          `/tourSchedules/${mode}/${id}`,
          axiosOptions
        );
        context.commit("LIST_TOUR_SCHEDULE_DETAIL", response.data.result);
      } catch (err) {
        Vue.$toast.open({
          message: err.response.data.message,
          type: "error",
        });
      }
    },
    async listTourSchedulesPrivate(context) {
      try {
        Vue.$toast.open({
          message: "Fetching Tour Schedule data... please wait",
          type: "info",
        });
        const access_token = localStorage.getItem("access_token");
        let axiosOptions = {};

        if (access_token) {
          axiosOptions.headers = {
            access_token: access_token,
          };
        }

        const response = await axiosApi.get(
          `/tourSchedules/private`,
          axiosOptions
        );
        context.commit("LIST_TOUR_SCHEDULE_PIVATE", response.data);
      } catch (err) {
        Vue.$toast.open({
          message: err.response.data.message,
          type: "error",
        });
      }
    },
    async addTourActions(context, params) {
      try {
        const { tourId, mode, body } = params;
        const access_token = localStorage.getItem("access_token");
        let axiosOptions = {};

        if (access_token) {
          axiosOptions.headers = {
            access_token: access_token,
          };
        }

        const bodyParam = mode === "invite" ? body : undefined;

        const response = await axiosApi.put(
          `/tourSchedules/action/${tourId}/${mode}`,
          bodyParam,
          axiosOptions
        );
        if (response.status === 200) {
          window.location.reload();
        } else {
          throw response;
        }
      } catch (error) {
        Vue.$toast.open({
          message: error.response.data.message,
          type: "error",
        });
      }
    },
    async addTourScheduleButtonHandler(context, payload) {
      try {
        await axiosApi({
          method: "POST",
          url: "/tourSchedules",
          data: {
            planDate: payload.username,
            endDate: payload.email,
            memberSlot: payload.memberSlot,
            isPublic: payload.isPublic,
            description: payload.description,
            price: payload.price,
          },
        });
      } catch (error) {
        Vue.$toast.open({
          message: error.response.data.message,
          type: "error",
        });
      }
    },
  },
  modules: {},
});
