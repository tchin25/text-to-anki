<template>
  <tr>
    <td>{{ row.sentence }}</td>
    <td><status :status="row.status"></status></td>
    <td>Test</td>
  </tr>
</template>

<script>
import Status from "./SentenceRow/Status";

export default {
  components: {
    Status
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

<style></style>
