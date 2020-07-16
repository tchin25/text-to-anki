<template>
  <tr>
    <td>{{ row.sentence }}</td>
    <td><status :status="row.status"></status></td>
    <td class="has-text-centered delete-wrapper">
      <delete-button :id="row.id"></delete-button>
    </td>
  </tr>
</template>

<script>
import Status from "./SentenceRow/Status";
import DeleteButton from "./SentenceRow/DeleteButton";

export default {
  components: {
    Status,
    DeleteButton
  },
  props: {
    row: {
      type: Object,
      required: true,
      default: {
        id: -1,
        sentence: "どうやってここに来たのか分からない",
        status: -1
      }
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss"></style>
