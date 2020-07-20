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
    const { currentModel, currentDeck, currentField } = rootState.anki;
    let notes = [];
    let fields = {};

    // Anki-Connect fails if all fields on front of card is blank
    for (let field of currentModel.result) {
      // Quick fix for those with Japanese Support or Japanese Pronunciation addon
      // Those addons can't auto-generate when fields are empty
      if (
        field.toLowerCase() == "reading" ||
        field.toLowerCase() == "pronunciation"
      ) {
        fields[field] = "";
      } else {
        fields[field] = "<br/>";
      }
    }

    for (let sentence of state.sentences) {
      if (sentence.status === 1) {
        continue;
      }
      let shallowCopy = { ...fields };
      shallowCopy[currentField] = sentence.sentence;
      let note = {
        deckName: currentDeck,
        modelName: currentModel.name,
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
      if (state.sentences[i].status == 1) {
        sentences.push({ ...state.sentences[i] });
        continue;
      }
      sentences.push({
        ...state.sentences[i],
        status: res.result[i] ? 1 : -1
      });
    }
    commit("SET_SENTENCES", sentences);
    commit("SET_LOADING", false);
  }
};
