<template>
  <table class="table is-hoverable is-fullwidth">
    <thead>
      <tr>
        <th>Sentence</th>
        <th>Status</th>
        <th class="has-text-centered">Delete</th>
      </tr>
    </thead>
    <transition-group name="list" tag="tbody">
      <sentence-row
        v-for="sentence in sentences"
        :key="sentence.id"
        :row="sentence"
        class="list-item"
      ></sentence-row>
    </transition-group>
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

<style>
.list-item {
  transition: all .5s;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-enter {
  background-color: green;
}

.list-leave-to {
 background-color: red !important;   
}
</style>
