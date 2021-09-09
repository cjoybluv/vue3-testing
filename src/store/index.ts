import { createStore } from "vuex";
import axios from "axios";

import { INation } from "@/types/datausa";

export default createStore({
  state: {
    nations: [] as INation[],
  },
  getters: {
    nations(state) {
      return state.nations;
    },
  },
  mutations: {
    SET_NATIONS(state, nations: INation[]) {
      state.nations = nations;
    },
  },
  actions: {
    fetchNations({ commit }) {
      return new Promise((resolve) => {
        axios
          .get(
            "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
          )
          .then((response: { data: { data: INation[]; source: unknown } }) => {
            commit("SET_NATIONS", response.data.data);
            resolve(response.data);
          });
      });
    },
  },
  modules: {},
});
