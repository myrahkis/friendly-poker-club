<script setup>
const { loading, error, rawData: cityName } = useCityData("mainHeading");
</script>

<template>
  <section class="hero-section">
    <div class="gradient"></div>
    <img class="bg-chip" src="/assets/images/chip1.png" alt="bg-img" />
    <img class="bg-chip-full" src="/assets/images/chip-bg-full.png" alt="" />
    <img class="bg-cards" src="/assets/images/bg-cards.png" alt="cards-img" />
    <div class="hero-wrapper">
      <Logo width="45rem" paddingTop="0" />
      <div class="hero-text">
        <h1 class="hero-heading">
          Легальная офлайн <br class="mobile-br" />
          игра <br class="desktop-br" />
          в покер
          <span v-if="Object.keys(cityName).length !== 0">в {{ cityName }}</span
          >!
        </h1>
        <h3 class="hero-sub-heading">
          Для новичков, любителей <br />
          и профессионалов.
        </h3>
        <!-- <p class="hero-text"> -->
        <p class="hero-sub-text">
          Профессиональные покерные столы, профессиональные дилеры,
          профессиональное оборудование, комфортная обстановка — всё для
          получения удовольствия от любимой игры!
        </p>
      </div>
      <img class="hero-bg-img" src="/assets/images/hero-bg.svg" alt="hero-bg" />
      <img
        class="hero-bg-img-big-screen"
        src="/assets/images/bg-big-sc.png"
        alt="hero-bg"
      />
    </div>
    <span class="hero-empasis">
      Внимание! В нашем клубе категорически запрещена игра на деньги!
    </span>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 var(--horiz-main-padding) 6%;
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
.bg-chip-full {
  display: none;
}

.hero-wrapper {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-top: 13%;
}

.hero-text {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  z-index: 1;
  width: 45%;
  padding-bottom: 7%;
}
.hero-heading {
  font-size: clamp(3rem, 4vw, 5rem);
  font-weight: 700;
}
.hero-sub-heading {
  font-size: clamp(2rem, 2.5vw, 3.3rem);
  font-weight: 700;
}
.hero-sub-text {
  font-size: 2rem;
  width: 85%;
}

.bg-cards {
  position: absolute;
  left: -5rem;
  bottom: 0;
  width: 55rem;
  transform: translateY(15rem);
  z-index: -1;
}

.hero-bg-img {
  position: absolute;
  top: 15%;
  right: 0;
  width: 75%;
  transform: translateX(35rem);
  z-index: 0;
}
.hero-bg-img-big-screen {
  display: none;
}

.hero-empasis {
  position: absolute;
  bottom: 8rem;
  z-index: 2;
  text-align: center;
  align-self: center;
  width: 55%;
  padding: 1.5rem 2.5rem;
  font-size: clamp(1.8rem, 3vw, 2.3rem);
  border-radius: 4rem;
  background: linear-gradient(
    to right,
    var(--light-gradient-color),
    var(--dark-gradient-color)
  );
}

.mobile-br,
.desktop-br {
  display: none;
}

@media (min-width: 1600px) {
  .hero-section {
    padding: 0 var(--horiz-main-padding) 10%;
  }
  .hero-text {
    width: 47%;
  }
}
@media (min-width: 1800px) {
  .hero-section {
    padding: 0 var(--horiz-main-padding) 5%;
  }
  .desktop-br {
    display: block;
  }
  .hero-bg-img {
    display: none;
  }
  .hero-bg-img-big-screen {
    position: absolute;
    display: block;
    top: 15%;
    right: 0;
    width: 75%;
    transform: translateX(43rem);
    z-index: 0;
  }
  .hero-sub-text {
    font-size: 2rem;
    width: 95%;
  }
}
@media (min-width: 2200px) {
  div {
    .logo {
      width: 30% !important;
    }
  }
  .hero-bg-img-big-screen {
    width: 65%;
    transform: translateX(30rem);
  }
}
@media (min-width: 3000px) {
  div {
    .logo {
      width: 40% !important;
    }
  }
  .hero-bg-img-big-screen {
    width: 63%;
    transform: translateX(50rem);
  }
  .hero-empasis {
    width: 35%;
  }
  .hero-text {
    width: 60%;
  }
  .hero-heading {
    font-size: clamp(3rem, 4vw, 6.5rem);
    font-weight: 700;
  }
  .hero-sub-heading {
    font-size: clamp(2rem, 2.5vw, 4.5rem);
    font-weight: 700;
  }
  .hero-sub-text {
    font-size: 3rem;
    width: 95%;
  }
}

@media (max-width: 1444px) {
  .hero-bg-img {
    top: 18%;
    width: 70%;
    transform: translateX(30rem);
  }
  .hero-text {
    width: 50%;
    padding-bottom: 10%;
  }
}

@media (max-width: 1200px) {
  .hero-section {
    padding: 0 var(--horiz-main-padding) 5rem;
    gap: 4rem;
  }
  .gradient {
    bottom: 0;
    transform: translateY(20rem);
    background: linear-gradient(
      to top,
      rgba(2, 37, 99, 0.9) 3%,
      rgba(2, 37, 99, 0.7) 15%,
      rgba(2, 37, 99, 0.5) 60%,
      rgba(2, 37, 99, 0) 100%
    );
  }
  .hero-wrapper {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 3rem;
    /* padding-top: 13%; */
  }
  .hero-text {
    position: static;
    gap: 2.5rem;
    width: 60%;
    padding-bottom: 0;
    order: 2;

    h3 {
      margin-bottom: 0;
    }
  }
  .hero-sub-text {
    font-size: 2rem;
    width: 100%;
  }
  .hero-bg-img {
    position: static;
    width: 100%;
    transform: translateX(0);
    order: 1;
    z-index: 1;
  }
  div {
    .logo {
      order: 0;
    }
  }
  .bg-cards {
    left: 0;
    bottom: 0;
    width: 50rem;
    transform: translateY(20rem);
  }
  .bg-chip {
    position: absolute;
    top: -5rem;
    left: auto;
    right: 1rem;
    width: clamp(18rem, 30vw, 30rem);
    transform: rotate(90deg);
  }
  .bg-chip-full {
    position: absolute;
    display: block;
    bottom: 23rem;
    right: 15rem;
    width: clamp(18rem, 30vw, 28rem);
    transform: rotate(-200deg);
    filter: opacity(45%);
  }
  .hero-empasis {
    position: static;
    width: 85%;
    padding: 2rem 2.5rem;
  }
}

@media (max-width: 925px) {
  .bg-chip-full {
    bottom: 23rem;
    right: 5rem;
    width: clamp(18rem, 30vw, 28rem);
  }
  .desktop-br {
    display: block;
  }
  .hero-text {
    width: 80%;
  }
  .hero-sub-text {
    width: 100%;
  }
  .hero-empasis {
    width: 90%;
    padding: 1.5rem 6rem;
  }
}

@media (max-width: 800px) {
  .hero-text {
    width: 100%;
  }
  .hero-sub-text {
    width: 100%;
  }
  .hero-heading {
    font-size: clamp(2rem, calc(1rem + 5vw), 4rem);
  }
  .hero-sub-heading {
    font-size: clamp(1.5rem, calc(1rem + 3.5vw), 2.8rem);
  }
  .hero-sub-text {
    font-size: clamp(1.5rem, calc(1rem + 1.5vw), 2rem);
  }
  div {
    .logo {
      width: 60% !important;
    }
  }
  .hero-empasis {
    width: 90%;
    padding: 1.5rem 3.5rem;
  }
  .bg-cards {
    width: 45rem;
    transform: translateY(20rem);
  }
  .bg-chip {
    position: absolute;
    top: -2.5rem;
    left: auto;
    right: 1rem;
    width: 20rem;
    transform: rotate(90deg);
  }
}

@media (max-width: 665px) {
  .hero-empasis {
    font-size: clamp(0.9rem, calc(0.5rem + 2vw), 1.7rem);
    padding: 1.5rem clamp(1rem, calc(1rem + 2vw), 5rem);
    width: 85%;
  }
  .hero-heading {
    font-size: clamp(1.8rem, calc(1rem + 4vw), 3.5rem);
  }
  .hero-sub-heading {
    font-size: clamp(1.5rem, calc(1rem + 2.5vw), 2.5rem);
  }
  .hero-sub-text {
    font-size: clamp(1.3rem, calc(1rem + 1vw), 1.5rem);
  }
}

@media (max-width: 500px) {
  .hero-wrapper {
    padding-top: 25%;
  }
  .hero-text {
    gap: 1.5rem;
  }
  .bg-cards {
    width: 30rem;
    transform: translateY(10rem);
  }
  .bg-chip {
    top: -1.6rem;
    right: 1rem;
    width: 13rem;
  }
  .bg-chip-full {
    bottom: 25rem;
    right: 0;
    width: clamp(13rem, 30vw, 28rem);
  }
}

/* (320px–395px) */
@media (max-width: 441px) {
  .hero-empasis {
    width: 100%;
  }
  .hero-heading {
    font-size: clamp(1.8rem, calc(1rem + 3vw), 3rem);
  }
  .hero-sub-heading {
    font-size: clamp(1.5rem, calc(0.8rem + 2vw), 2.5rem);
  }
  .hero-sub-text {
    font-size: clamp(1.3rem, calc(0.5rem + 1vw), 1.5rem);
  }
}
</style>
