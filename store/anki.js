export const state = () => ({
  models: {},
  decks: {}
});

export const mutations = {
  SET_MODELS(state, data) {
    state.models = data;
  },
  SET_DECKS(state, data) {
    state.decks = data;
  }
};

export const actions = {
  setModels({ commit }, data) {
    commit("SET_MODELS", data);
  },
  setDecks({ commit }, data) {
    commit("SET_DECKS", data);
  }
};
