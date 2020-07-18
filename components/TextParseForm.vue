<template>
  <form @submit.prevent="tokenizeText">
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
    <div class="field">
      <label class="label">Tokenizer Characters</label>
      <div class="field is-grouped">
        <div class="control is-expanded">
          <input
            class="input"
            type="text"
            v-model="regex"
            placeholder="Regex expression"
          />
        </div>
        <div class="control">
          <button class="button is-primary" type="submit" value="Submit">
            Tokenize
          </button>
        </div>
      </div>
      <p class="help">Leave blank for default.</p>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      regex: "",
      text: ""
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
        regex = this.regex;
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
.help {
  margin-top: -.7rem;
}
</style>
