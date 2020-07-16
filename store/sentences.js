export const state = () => ({
  sentences: []
});

export const mutations = {
  SET_SENTENCES(state, data) {
    state.models = data;
  }
};

export const actions = {
  setSentences({ commit }, sentences) {
    // Need an explicit index for some list rendering stuff
    for (let i = 0; i < sentences.length; i++) {
      sentences[i] = {
        id: i,
        sentence: sentences[i]
      };
    }
    commit("SET_SENTENCES", sentences);
  }
};
