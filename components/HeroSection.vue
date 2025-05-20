<script setup></script>

<template>
  <section class="hero-section">
    <img class="bg-chip" src="/assets/images/chip1.png" alt="bg-img" />
    <img class="bg-cards" src="/assets/images/cards.png" alt="cards-img" />
    <div class="hero-wrapper">
      <div>
        <Logo />
        <p class="hero-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius
          tortor a tincidunt convallis. Fusce consectetur sed leo ut rutrum.
        </p>
      </div>
      <img class="hero-bg-img" src="/assets/images/hero-bg.svg" alt="hero-bg" />
    </div>
    <button class="hero-btn">Lorem ipsum dolor sit amet</button>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 3rem;
  min-height: 125vh;
  background: linear-gradient(
    to top,
    rgba(2, 37, 99, 0.9) 5%,
    rgba(2, 37, 99, 0.7) 50%,
    rgba(2, 37, 99, 0.3) 60%,
    rgba(2, 37, 99, 0) 100%
  );
}

.bg-chip {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 20rem;
}

.bg-cards {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 45rem;
  z-index: -1;
}

.hero-wrapper {
  display: flex;
  /* width: 100%; */
}

.hero-text {
  width: 30%;
  padding-top: 15rem;
  margin-bottom: 10%;
  line-height: 2.3rem;
  font-size: 2.5rem;
  font-weight: 500;
}

.hero-bg-img {
  position: absolute;
  padding-top: 20%;
  bottom: 0;
  right: 0;
  width: 55rem;
}

.hero-btn {
  z-index: 2;
  align-self: center;
  width: 40%;
  padding: 1rem 1.5rem;
  font-size: 2.8rem;
  border: 2px solid var(--light-gradient-color);
  border-radius: 2.8rem;
  background-color: rgba(37, 37, 37, 0.5);
}
</style>
