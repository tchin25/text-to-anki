export const state = () => ({
  sentences: [],
  loading: false
});

export const mutations = {
  SET_SENTENCES(state, data) {
    state.sentences = data;
  },
  DELETE_SENTENCE(state, id) {
    state.sentences = state.sentences.filter(sentence => sentence.id != id);
  },
  SET_LOADING(state, data) {
    state.loading = data;
  }
};

export const actions = {
  setSentences({ commit }, sentences) {
    // Need an explicit index for some list rendering stuff
    for (let i = 0; i < sentences.length; i++) {
      sentences[i] = {
        id: i,
        sentence: sentences[i],
        status: 0
      };
    }
    commit("SET_SENTENCES", sentences);
  },
  deleteSentence({ commit }, id) {
    commit("DELETE_SENTENCE", id);
  },
  async exportSentences({ state, commit, rootState }) {
    commit("SET_LOADING", true);
    let notes = [];
    let fields = {};

    // Anki-Connect fails if some fields
    // are undefined or even an empty string
    for (let field of rootState.anki.currentModel.result) {
      fields[field] = "<br/>";
    }

    for (let { sentence } of state.sentences) {
      let shallowCopy = { ...fields };
      shallowCopy[rootState.anki.currentField] = sentence;
      let note = {
        deckName: rootState.anki.currentDeck,
        modelName: rootState.anki.currentModel.name,
        fields: shallowCopy,
        tags: ["web-imported"]
      };
      notes.push(note);
    }

    let params = JSON.stringify({
      action: "addNotes",
      version: 6,
      params: {
        notes
      }
    });

    let res = await this.$axios.$post("http://localhost:8765", params);
    let sentences = [];
    for (let i = 0; i < state.sentences.length; i++) {
      sentences.push({
        ...state.sentences[i],
        status: res.result[i] ? 1 : -1
      });
    }
    commit("SET_SENTENCES", sentences);
    commit("SET_LOADING", false);
  }
};
