<template>
  <div class="field">
    <label class="label">Deck</label>
    <div class="control is-expanded">
      <div class="select is-fullwidth">
        <select required v-model="selected">
          <option disabled value="">Please select one</option>
          <option v-for="(deck, key) in selectDecks" :key="key">{{
            deck
          }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    selectDecks() {
      return this.$store.state.anki.decks;
    },
    selected: {
      get() {
        return this.$store.state.anki.currentDeck;
      },
      set(value) {
        this.$store.dispatch("anki/setCurrentDeck", value);
      }
    }
  },
};
</script>

<style></style>
