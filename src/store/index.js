import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
    saveUsers(state, users) {
      state.users = users;
    }
  },
  actions: {
    async loadUsers({ commit }) {
      try {
        const { data } = await Axios.get("users");
        commit("saveUsers", data.reverse());
      } catch (e) {
        console.error("Error getting users from API", e);
      }
    },
    async addUser({ commit }, payload) {
      try {
        const { data } = await Axios.post("users", {
          name: payload.name,
          phone: payload.phone
        });
        commit("saveUsers", [data, ...this.state.users]);
      } catch (e) {
        console.error("Error trying to add user", e);
      }
    },
    removeUser({ commit }, payload) {
      try {
        Axios.delete(`/users/${payload}`);
        this.state.users.forEach((el, index) => {
          if (el.id === payload) {
            this.state.users.splice(index, 1);
          }
        });
        commit("saveUsers", this.state.users);
      } catch (e) {
        console.error("Error trying to delete user", e);
      }
    },
    editUser({ commit }, payload) {
      const id = payload[1],
        update = payload[0];
      try {
        Axios.put(`/users/${id}`, {
          name: update.nome,
          phone: update.tel
        });
        this.state.users.forEach(el => {
          if (el.id === id) {
            el.name = update.nome;
            el.phone = update.tel;
          }
        });
        commit("saveUsers", this.state.users);
      } catch (e) {
        console.error("Error trying to update user", e);
      }
    }
  }
});
