<template>
  <div class="field">
    <label class="label">Field To Put Sentence</label>
    <div class="control">
      <div class="select form-input">
        <select required v-model="selected">
          <option disabled value="">Please select one</option>
          <option
            v-for="(field, key) in selectFields"
            :key="key"
            :value="field"
            >{{ field }}</option
          >
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    selectFields() {
      return this.$store.state.anki.currentModel.result;
    },
    selected: {
      get() {
        return this.$store.state.anki.currentField;
      },
      set(value) {
        this.$store.dispatch("anki/setCurrentField", value);
      }
    }
  },
};
</script>

<style></style>
