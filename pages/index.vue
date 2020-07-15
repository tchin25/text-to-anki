<template>
  <div class="container">
    <div class="field">
      <label class="label">Subject</label>
      <div class="control">
        <div class="select">
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
      <label class="label">Subject</label>
      <div class="control">
        <div class="select">
          <select v-model="selectDecks">
            <option disabled value="">Please select one</option>
            <option v-for="(deck, key) in selectDecks" :key="key">{{
              deck
            }}</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      connected: false,
      error: "",
      selected: ""
    };
  },
  mounted: function() {
    console.log(this.$axios.defaults);
    this.checkAnki().then(async () => {
      await this.fetchModels();
      await this.fetchDecks();
    });
  },
  methods: {
    async checkAnki() {
      const check = await this.$axios
        .$get("http://localhost:8765")
        .then(async res => {
          if (!res.error) {
            this.connected = true;
          }
          console.log(res);
        })
        .catch(e => {
          this.connected = false;
          this.error = "Could not connect to Anki";
          console.log(this.error);
          throw new error("Could not connect to Anki");
        });
    },
    async fetchModels() {
      return await this.$axios
        .$post(
          "http://localhost:8765",
          JSON.stringify({
            action: "modelNames",
            version: 6
          })
        )
        .then(async res => {
          console.log(res);
          await this.$store.dispatch("anki/setModels", res.result);
        })
        .catch(e => {
          this.error = "Unable to fetch models";
        });
    },
    async fetchDecks() {
      return await this.$axios
        .$post(
          "http://localhost:8765",
          JSON.stringify({
            action: "deckNames",
            version: 6
          })
        )
        .then(async res => {
          console.log(res);
          this.models = res.result;
          await this.$store.dispatch("anki/setDecks", res.result);
        })
        .catch(e => {
          this.error = "Unable to fetch decks";
        });
    }
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

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
