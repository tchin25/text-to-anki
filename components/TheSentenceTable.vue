<template>
  <table class="table">
    <thead>
      <tr>
        <th>Sentence</th>
        <th>Status</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Test</td>
        <td>Test</td>
        <td>Test</td>
      </tr>
      <sentence-row></sentence-row>
    </tbody>
  </table>
</template>

<script>
import SentenceRow from "./TheSentenceTable/SentenceRow";
export default {
  components: {
    SentenceRow
  }
};
</script>

<style></style>
