<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a
        role="button"
        class="navbar-burger burger"
        :class="isActive ? 'is-active' : ''"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarItems"
        @click="isActive = !isActive"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarItems" class="navbar-menu" :class="isActive ? 'is-active' : ''">
      <div class="navbar-start ml-6">
        <nuxt-link to="/" class="navbar-item">
          Home
        </nuxt-link>
        <nuxt-link to="/how-to" class="navbar-item">
          How To
        </nuxt-link>
        <nuxt-link to="/about" class="navbar-item">
          About
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    };
  }
};
</script>

<style></style>
