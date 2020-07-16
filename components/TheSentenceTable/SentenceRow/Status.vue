<template>
  <span class="tag" :class="computeStatus.css">
    {{ computeStatus.status }}
  </span>
</template>

<script>
export default {
  props: {
    status: {
      type: Number,
      required: true,
      default: 0
    }
  },
  computed: {
    computeStatus() {
      switch (this.status) {
        case -1: {
          return { status: "Error", css: "is-danger" };
        }
        case 1: {
          return { status: "Saved", css: "is-success" };
        }
        default: {
          return { status: "No Status", css: "is-light" };
        }
      }
    }
  }
};
</script>

<style></style>
