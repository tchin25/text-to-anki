export const state = () => ({
  models: [],
  decks: [],
  currentModel: {},
  currentField: "",
  currentDeck: ""
});

export const mutations = {
  SET_MODELS(state, data) {
    state.models = data;
  },
  SET_DECKS(state, data) {
    state.decks = data;
  },
  SET_CURRENT_DECK(state, data) {
    state.currentDeck = data;
  },
  SET_CURRENT_MODEL(state, data) {
    state.currentModel = data;
  },
  SET_CURRENT_FIELD(state, data) {
    state.currentField = data;
  }
};

export const actions = {
  setModels({ commit }, data) {
    commit("SET_MODELS", data);
  },
  setDecks({ commit }, data) {
    commit("SET_DECKS", data);
  },
  async setCurrentModel({ state, commit, dispatch }, name) {
    for (let modelName of state.models) {
      if (modelName === name) {
        let model = await this.$axios.$post(
          "http://localhost:8765",
          JSON.stringify({
            action: "modelFieldNames",
            version: 6,
            params: {
              modelName: modelName
            }
          })
        );
        commit("SET_CURRENT_MODEL", { name: modelName, ...model });
        if (state.currentField) {
          dispatch("setCurrentField", state.currentField);
        }
        return;
      }
    }
    commit("SET_CURRENT_MODEL", {});
  },
  setCurrentDeck({ state, commit }, name) {
    for (let deck of state.decks) {
      if (deck === name) {
        commit("SET_CURRENT_DECK", deck);
        return;
      }
    }
    commit("SET_CURRENT_DECK", "");
  },
  setCurrentField({ state, commit }, name) {
    for (let field of state.currentModel.result) {
      if (field === name) {
        commit("SET_CURRENT_FIELD", field);
        return;
      }
    }
    commit("SET_CURRENT_FIELD", "");
  }
};
