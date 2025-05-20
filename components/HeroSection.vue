<script setup></script>

<template>
  <section class="hero-section">
    <img class="bg-chip" src="/assets/images/chip1.png" alt="bg-img" />
    <div>
      <img class="logo" src="/assets/images/logo.png" alt="logo" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius
        tortor a tincidunt convallis. Fusce consectetur sed leo ut rutrum.
      </p>
    </div>
    <button>Lorem ipsum dolor sit amet</button>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  padding: 0 2.4rem;
}

.bg-chip {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 20rem;
}
</style>
