<template>
  <div class="container">
    <the-form></the-form>
  </div>
</template>

<script>
import TheForm from '@/components/TheForm';

export default {
  components: {
    TheForm
  },
  data() {
    return {
      connected: false,
      error: "",
      selected: ""
    };
  },
  mounted: function() {
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
          } else {
            throw new error(res.error);
          }
        })
        .catch(e => {
          this.connected = false;
          this.error = "Could not connect to Anki";
          console.log(e);
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

};
</script>

<style>

</style>
