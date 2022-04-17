import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";
import axios from "axios";

const store = createStore({
  state: {
    loggedIn: false,
    loggedCompany: false,
    user: null,
    token: null,
  },
  plugins: [new VuexPersistence().plugin],
  mutations: {
    SET_user(state, payload) {
      state.user = payload;
    },
    SET_token(state, payload) {
      state.token = payload;
    },
    SET_loggedIn(state, payload) {
      state.loggedIn = payload;
    },
    SET_loggedCompany(state, payload) {
      state.loggedCompany = payload;
    },
    SET_cv(state, payload) {
      state.cvRegisterAction = payload;
    },
  },
  actions: {
    performLoginAction({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("http://localhost:8000/api/auth/login", {
            email: payload.email,
            password: payload.password,
          })
          .then((res) => {
            commit("SET_token", res.data.access_token);
            commit("SET_user", res.data.user);
            commit("SET_loggedIn", true);
            if (res.data.user.role == "company") {
              commit("SET_loggedCompany", true);
            }
            if (res.data.user.role == "user") {
              commit("SET_loggedCompany", false);
            }
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    performRegisterAction({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("http://localhost:8000/api/auth/register", {
            name: payload.name,
            email: payload.email,
            password: payload.password,
            role: payload.role,
          })
          .then((res) => {
            commit("SET_token", res.data.access_token);
            commit("SET_user", res.data.user);
            commit("SET_loggedIn", true);
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    performRegisterActions({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("http://localhost:8000/api/auth/register", {
            name: payload.name,
            email: payload.email,
            password: payload.password,
            role: payload.role,
          })
          .then((res) => {
            commit("SET_token", res.data.access_token);
            commit("SET_user", res.data.user);
            commit("SET_loggedIn", true);
            commit("SET_loggedCompany", true);
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    performLogoutAction({ commit, state }) {
      return new Promise((resolve, reject) => {
        axios
          .post("http://localhost:8000/api/auth/logout", {
            token: state.token,
          })

          .then((res) => {
            commit("SET_token", null);

            commit("SET_loggedIn", false);
            commit("SET_user", null);
            commit("SET_loggedCompany", false);
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    cvRegisterAction({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post("http://localhost:8000/api/auth/registercv", {
            name: payload.name,
            email: payload.email,
            poste: payload.poste,
            localite: payload.localite,
            id_user: payload.id_user,
          })
          .then((res) => {
            commit("SET_cv", res.data.user);
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    updateUserProfileAction({ commit, state }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch("http://localhost:8000/api/auth/update", {
            name: payload.name,
            email: payload.email,
            token: state.token,
          })
          .then((res) => {
            commit("SET_user", res.data.user);

            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
  getters: {
    get_loggedIn(state) {
      return state.loggedIn;
    },
    get_loggedCompany(state) {
      return state.loggedCompany;
    },
    get_user(state) {
      return state.user;
    },
  },
});
export default store;