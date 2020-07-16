<template>
  <table class="table is-fullwidth">
    <thead>
      <tr>
        <th>Sentence</th>
        <th>Status</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      <sentence-row
        v-for="sentence in sentences"
        :key="sentence.id"
        :row="sentence"
      ></sentence-row>
    </tbody>
  </table>
</template>

<script>
import SentenceRow from "./TheSentenceTable/SentenceRow";
export default {
  components: {
    SentenceRow
  },
  computed: {
    sentences() {
      return this.$store.state.sentences.sentences || [];
    }
  }
};
</script>

<style></style>
