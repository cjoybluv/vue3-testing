import { createStore } from "vuex";
import axios from "axios";

interface INation {
  "ID Nation": string;
  "ID Year": number;
  Nation: string;
  Population: number;
  "Slug Nation": string;
  Year: string;
}

export default createStore({
  state: {
    nations: [],
  },
  getters: {
    nations(state) {
      return state.nations;
    },
  },
  mutations: {
    SET_NATIONS(state, nations) {
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
