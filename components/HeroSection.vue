<script setup></script>

<template>
  <section class="hero-section">
    <div class="gradient"></div>
    <img class="bg-chip" src="/assets/images/chip1.png" alt="bg-img" />
    <img class="bg-cards" src="/assets/images/bg-cards.png" alt="cards-img" />
    <div class="hero-wrapper">
      <div>
        <Logo width="70rem" paddingTop="16%" />
        <p class="hero-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius
          tortor a tincidunt convallis. Fusce consectetur sed leo ut rutrum.
        </p>
      </div>
      <img class="hero-bg-img" src="/assets/images/hero-bg.svg" alt="hero-bg" />
    </div>
    <button class="hero-btn u-shimmering-gradient-hover">
      Lorem ipsum dolor sit amet
    </button>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 var(--horiz-main-padding) 20rem;
}
.gradient {
  position: absolute;
  width: 100%;
  height: 50%;
  left: 0;
  bottom: 0;
  transform: translateY(17rem);
  z-index: 1;
  background: linear-gradient(
    to top,
    rgba(2, 37, 99, 0.9) 5%,
    rgba(2, 37, 99, 0.7) 35%,
    rgba(2, 37, 99, 0.5) 60%,
    rgba(2, 37, 99, 0) 100%
  );
}

.bg-chip {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: clamp(15rem, 5rem, 25rem);
}

.hero-wrapper {
  display: flex;
}

.hero-text {
  position: relative;
  z-index: 1;
  width: 46%;
  padding-top: 15rem;
  padding-bottom: 10%;
  font-size: clamp(1.8rem, 4vw, 4rem);
  font-weight: 500;
}

.bg-cards {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 60rem;
  transform: translateY(10rem);
  z-index: -1;
}

.hero-bg-img {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 50%;
  transform: translateY(15rem);
  z-index: 0;
}

.hero-btn {
  position: absolute;
  bottom: 7rem;
  z-index: 2;
  align-self: center;
  width: 55%;
  padding: 1.5rem 2.5rem;
  font-size: 3.5rem;
  border: 2px solid var(--light-gradient-color);
  border-radius: 4rem;
  background-color: rgba(37, 37, 37, 0.5);
}

/* (1024px–1279px) */
@media (max-width: 1279px) {
}

/* (480px–767px) */
@media (max-width: 767px) {
  .hero-text {
    width: 80%;
    padding-top: 100%;
    padding-bottom: 0;
  }
  .hero-btn {
    width: 85%;
  }
  .hero-bg-img {
    top: 50%;
    z-index: -2;
    transform: translateY(-50%);
    width: 75%;
  }
  .bg-cards {
    position: absolute;
    left: -20rem;
    bottom: 0;
    width: 65rem;
    transform: translateY(0);
    z-index: -1;
  }
}
</style>
