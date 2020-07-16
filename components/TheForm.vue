<template>
  <section>
    <div class="columns">
      <div class="column is-one-quarter">
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
        </div>
        <div class="field">
          <label class="label">Tokenizer Characters</label>
          <div class="control">
            <input class="input form-input" type="text" :placeholder="regex" />
          </div>
          <p class="help">Regex characters. Leave blank for default.</p>
        </div>
        <div class="control">
          <button class="button is-primary form-input">Submit</button>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <label class="label">Paste Text Here</label>
          <div class="control">
            <textarea class="textarea" placeholder="Textarea"></textarea>
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
      regex: "。…’‘、「」【】『』!\"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^\n_`{|}~"
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

</style>
