<template>
  <span
    class="icon"
    @click="deleteSentence"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <delete-empty-icon v-if="hover" title="delete"></delete-empty-icon>
    <delete-icon v-else title="delete"></delete-icon>
  </span>
</template>

<script>
import DeleteIcon from "vue-material-design-icons/Delete.vue";
import DeleteEmptyIcon from "vue-material-design-icons/DeleteEmpty.vue";
export default {
  components: {
    DeleteIcon,
    DeleteEmptyIcon
  },
  props: {
    id: {
      type: Number,
      required: true,
      default: -1
    }
  },
  data() {
    return { hover: false };
  },
  methods: {
    deleteSentence() {
      this.$store.dispatch("sentences/deleteSentence", this.id);
    }
  }
};
</script>

<style scoped lang="scss">
.icon span {
  display: flex;
  flex-direction: column;
  justify-items: center;
}
</style>
