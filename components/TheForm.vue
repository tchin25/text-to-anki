<template>
  <form @submit="tokenizeText">
    <div class="columns">
      <div class="column is-one-quarter">
        <select-deck></select-deck>
        <select-model></select-model>
        <select-field></select-field>
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
          <button class="button is-primary form-input" type="submit" value="Submit">
            Submit
          </button>
        </div>
      </div>
      <div class="column">
        <div class="field" id="textarea-field">
          <label class="label">Paste Text Here</label>
          <div class="control">
            <textarea
            required
              class="textarea"
              placeholder="Textarea"
              v-model="text"
            ></textarea>
          </div>
        </div>
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
  data() {
    return {
      regex: "",
      text: "",
    };
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
      this.$store.dispatch("sentences/setSentences", sentences);
      console.log(sentences);
    }
  }
};
</script>

<style scoped lang="scss">
.field /deep/ .form-input {
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
