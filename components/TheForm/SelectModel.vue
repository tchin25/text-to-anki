<template>
  <div class="field">
    <label class="label">Card Model</label>
    <div class="control">
      <div class="select form-input">
        <select required v-model="selected">
          <option disabled value="">Please select one</option>
          <option v-for="(model, key) in selectModels" :key="key">{{
            model
          }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    selectModels() {
      return this.$store.state.anki.models;
    },
    selected: {
      get() {
        return this.$store.state.anki.currentModel.name || "";
      },
      set(value) {
        this.$store.dispatch("anki/setCurrentModel", value);
      }
    }
  },
};
</script>

<style></style>
