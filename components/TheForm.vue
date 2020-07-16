<template>
  <section>
    <div class="columns">
      <div class="column is-one-quarter">
        <div class="field">
          <label class="label">Deck</label>
          <div class="control">
            <div class="select form-input">
              <select v-model="selectDecks">
                <option disabled value="">Please select one</option>
                <option v-for="(deck, key) in selectDecks" :key="key">{{
                  deck
                }}</option>
              </select>
            </div>
          </div>
          <div class="field">
            <label class="label">Card Model</label>
            <div class="control">
              <div class="select form-input">
                <select v-model="selectModels">
                  <option disabled value="">Please select one</option>
                  <option v-for="(model, key) in selectModels" :key="key">{{
                    model
                  }}</option>
                </select>
              </div>
            </div>
          </div>
          <div class="field">
            <label class="label">Field To Put Sentence</label>
            <div class="control">
              <div class="select form-input">
                <select v-model="selectFields">
                  <option disabled value="">Please select one</option>
                  <option v-for="(field, key) in selectFields" :key="key">{{
                    field
                  }}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="field">
          <label class="label">Tokenizer Characters</label>
          <div class="control">
            <input
              class="input form-input"
              type="text"
              v-model="regex"
              placeholder="Regex expression"
            />
          </div>
          <p class="help">Leave blank for default.</p>
        </div>
        <div class="control">
          <button class="button is-primary form-input" @click="tokenizeText">
            Submit
          </button>
        </div>
      </div>
      <div class="column">
        <div class="field" id="textarea-field">
          <label class="label">Paste Text Here</label>
          <div class="control">
            <textarea
              class="textarea"
              placeholder="Textarea"
              v-model="text"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      regex: "",
      text: "",
      sentences: () => []
    };
  },
  computed: {
    selectModels: {
      get() {
        return this.$store.state.anki.models;
      },
      set(value) {
        this.$store.dispatch("anki/setCurrentModel", value);
      }
    },
    selectDecks: {
      get() {
        return this.$store.state.anki.decks;
      },
      set(value) {
        this.$store.dispatch("anki/setCurrentDeck", value);
      }
    },
    selectFields: {
      get() {
        return this.$store.state.anki.currentModel.result;
      },
      set(value) {
        this.$store.dispatch("anki/setCurrentField", value);
      }
    }
  },
  methods: {
    tokenizeText() {
      console.log("clicked");

      // This regex contains weird Japanese punctuation marks
      // including the space character which isn't usually used between words
      // '　' is different from a normal space ' '
      let regex =
        "['。’‘「」【】　？！!\"#$%&()\*+,\-\.\/:;<=>?@\[\\\]\^\n\t_`{|}~]";
      if (this.regex) {
        this.regex = regex;
      }
      let regexExp = new RegExp(regex, "gm");
      let sentences = this.text.split(regexExp);
      sentences.forEach(sentence => sentence.trim());
      sentences = sentences.filter(sentence => sentence.length > 0);
      this.sentences = sentences;
      console.log(sentences);
    }
  }
};
</script>

<style scoped lang="scss">
.form-input {
  width: 100%;
  select {
    width: 100%;
  }
}

#textarea-field {
  height: 100%;
  display: flex;
  flex-direction: column;
  .control {
    flex-grow: 1;
    .textarea {
      height: 100%;
    }
  }
}
</style>
