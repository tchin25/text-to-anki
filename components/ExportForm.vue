<template>
  <form @submit.prevent="exportSentences">
    <div class="columns">
      <div class="column">
        <select-deck></select-deck>
      </div>
      <div class="column">
        <select-model></select-model>
      </div>
      <div class="column">
        <select-field></select-field>
      </div>
    </div>
    <div class="field">
      <div class="control">
        <button
          class="button is-primary is-fullwidth"
          type="submit"
          value="Submit"
          :disabled="loading"
        >
          Save Cards To Anki
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import SelectDeck from "./TheForm/SelectDeck";
import SelectModel from "./TheForm/SelectModel";
import SelectField from "./TheForm/SelectField";

export default {
  components: {
    SelectDeck,
    SelectModel,
    SelectField
  },
  methods: {
    exportSentences() {
      this.$store.dispatch("sentences/exportSentences");
    }
  },
  computed: {
    loading() {
      return this.$store.state.sentences.loading;
    }
  }
};
</script>

<style></style>
