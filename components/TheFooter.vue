<template>
  <div class="footer-wrapper">
    <footer class="footer">
      <div class="level">
        <div class="level-left">
          <figure class="image is-64x64">
            <img class="is-rounded" src="@/static/santathomas.png" />
          </figure>
          <h1 class="title is-4 ml-2">
            A side project by
            <a href="https://thomasch.in/">
              Thomas Chin
            </a>
          </h1>
        </div>
        <div class="level-right">
          <a
            href="https://github.com/tchin25/text-to-anki"
            style="color: black;"
          >
            <span class="icon mr-6">
              <github-icon title="github" :size="48"></github-icon>
            </span>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import GithubIcon from "vue-material-design-icons/Github.vue";
export default {
  components: {
    GithubIcon
  }
};
</script>

<style scoped lang="scss">
.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
}

.footer-wrapper {
  padding-top: 350px;
}
</style>
