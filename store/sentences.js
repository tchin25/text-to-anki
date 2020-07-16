export const state = () => ({
  sentences: []
});

export const mutations = {
  SET_SENTENCES(state, data) {
    state.sentences = data;
  },
  DELETE_SENTENCE(state, id) {
    state.sentences = state.sentences.filter(sentence => sentence.id != id);
  }
};

export const actions = {
  setSentences({ commit }, sentences) {
    // Need an explicit index for some list rendering stuff
    for (let i = 0; i < sentences.length; i++) {
      sentences[i] = {
        id: i,
        sentence: sentences[i],
        status: -1
      };
    }
    commit("SET_SENTENCES", sentences);
  },
  deleteSentence({ commit }, id) {
    commit("DELETE_SENTENCE", id);
  }
};
