<template>
  <div class="container"></div>
</template>

<script>
export default {
  data() {
    return {
      models: () => {
        {
        }
      },
      connected: false,
      error: ""
    };
  },
  mounted: function() {
    console.log(this.$axios.defaults);
    this.checkAnki().then(() => {
      this.fetchModels();
      this.fetchDecks();
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
            action: "modelNamesAndIds",
            version: 6
          })
        )
        .then(res => {
          console.log(res);
          this.models = res.result;
          this.$store.dispatch("anki/setModels", res.result);
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
            action: "deckNamesAndIds",
            version: 6
          })
        )
        .then(res => {
          console.log(res);
          this.models = res.result;
          this.$store.dispatch("anki/setDecks", res.result);
        })
        .catch(e => {
          this.error = "Unable to fetch decks";
        });
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
