<script setup>
const { loading, error, rawData: cityName } = useCityData("mainHeading");
</script>

<template>
  <section class="hero-section">
    <div class="gradient"></div>
    <img class="bg-chip" src="/assets/images/chip1.png" alt="bg-img" />
    <img class="bg-cards" src="/assets/images/bg-cards.png" alt="cards-img" />
    <div class="hero-wrapper">
      <div class="hero-text">
        <Logo width="45rem" paddingTop="0" />
        <h1 class="hero-heading">
          Легальная офлайн <br class="mobile-br" />
          игра в покер
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
      <img
        class="hero-bg-img"
        src="/assets/images/hero-bg-img.svg"
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
  padding: 0 var(--horiz-main-padding) 12%;
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
  display: flex;
  flex-direction: column;
  gap: 3rem;
  z-index: 1;
  width: 45%;
  padding-top: 13%;
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
  right: 0;
  bottom: 18rem;
  width: 60%;
  transform: translateX(20rem) translateY(15rem);
  z-index: 0;
}

.hero-empasis {
  position: absolute;
  bottom: 7rem;
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

.mobile-br {
  display: none;
}

@media (min-width: 1600px) {
  .hero-text {
    width: 47%;
  }
}
@media (min-width: 1800px) {
  .hero-section {
    padding: 0 var(--horiz-main-padding) 13%;
  }
  div {
    .logo {
      width: 70% !important;
    }
  }
  .hero-empasis {
    bottom: 10rem;
    width: 45%;
  }
  .hero-text {
    padding-top: 13%;
    padding-bottom: 0;
  }
  .hero-bg-img {
    right: var(--horiz-main-padding);
    width: 40%;
    transform: translateY(0);
  }
  .bg-cards {
    position: absolute;
    left: -5rem;
    bottom: 0;
    width: 55rem;
    transform: translateY(-5rem);
    z-index: -1;
  }
  .gradient {
    position: absolute;
    width: 100%;
    height: 40%;
    transform: translateY(-5rem);
  }
}
@media (min-width: 2200px) {
  div {
    .logo {
      width: 80% !important;
    }
  }
  .hero-bg-img {
    right: var(--horiz-main-padding);
    width: 35%;
  }
}
@media (min-width: 3000px) {
  .hero-bg-img {
    width: 30%;
    /* transform: translateY(0); */
  }
  /* .gradient {
    transform: translateY(35rem);
  }
  .hero-btn {
    width: 35%;
  }
  .hero-text {
    width: 55%;
  } */
}

@media (max-width: 1444px) {
  .hero-bg-img {
    transform: translateX(20rem) translateY(10rem);
  }
}

@media (max-width: 1200px) {
  .hero-text {
    width: 65%;
    padding-top: 15%;
    padding-bottom: 10%;
    gap: 2rem;
  }
  .hero-heading {
    font-size: clamp(4rem, 5vw, 6rem);
    padding-top: 85%;
  }
  .hero-bg-img {
    top: 0;
    width: 55%;
  }
  .bg-cards {
    top: 25rem;
    left: -6%;
    width: 55%;
  }
  .gradient {
    bottom: 30rem;
  }
  .hero-empasis {
    width: 65%;
    padding: 2rem 2.5rem;
    border-radius: 7rem;
    font-weight: 700;
    font-size: clamp(2rem, 2.5vw, 3rem);
  }
  .hero-sub-heading {
    font-size: clamp(2.5rem, 3vw, 3.5rem);
  }
}

@media (max-width: 925px) {
  .hero-text {
    width: 70%;
    padding-bottom: 15%;
  }
  .hero-sub-text {
    font-size: 2rem;
    width: 95%;
  }
  .hero-bg-img {
    width: 80%;
    top: 3%;
  }
  div {
    .logo {
      width: 75% !important;
    }
  }
}

@media (max-width: 800px) {
  .bg-chip {
    display: none;
  }
  .hero-text {
    width: 85%;
    padding-bottom: 20%;
  }
  .hero-heading {
    font-size: clamp(5rem, 5vw, 6rem);
    padding-top: 90%;
  }
  .hero-sub-heading {
    font-size: clamp(3rem, 3vw, 4.5rem);
  }
  .bg-cards {
    top: 20rem;
    left: -6%;
  }
  .hero-empasis {
    font-size: clamp(2rem, 2.5vw, 3rem);
    padding: 2rem 8rem;
    width: 85%;
  }
  div {
    .logo {
      width: 60% !important;
    }
  }
}

@media (max-width: 656px) {
  .mobile-br {
    display: block;
  }
  .hero-bg-img {
    top: 4%;
    width: 83%;
    transform: translateX(15rem) translateY(10rem);
  }
  .hero-text {
    width: 85%;
    padding-top: 20%;
    padding-bottom: clamp(2rem, calc(5rem + 15vw), 20vh);
  }
  .hero-heading {
    font-size: clamp(2rem, calc(1rem + 5vw), 4rem);
    padding-top: 95%;
  }
  .hero-sub-heading {
    font-size: clamp(1rem, calc(1rem + 2.5vw), 2.5rem);
  }
  .hero-sub-text {
    font-size: clamp(0.8rem, calc(0.7rem + 1.5vw), 1.6rem);
  }

  .hero-empasis {
    font-size: clamp(0.9rem, calc(0.5rem + 2vw), 1.7rem);
    padding: 1.5rem clamp(1rem, calc(1rem + 2vw), 5rem);
    width: 85%;
  }
}

@media (max-width: 500px) {
  .hero-text {
    width: 85%;
    padding-top: 30%;
  }
  .hero-heading {
    padding-top: 105%;
  }
  .hero-bg-img {
    width: 85%;
    transform: translateX(10rem) translateY(13rem);
  }
}

/* (320px–395px) */
@media (max-width: 441px) {
  .hero-bg-img {
    width: 95%;
    transform: translateX(10rem) translateY(15rem);
  }
  .bg-cards {
    top: 28%;
  }
  .hero-text {
    gap: 1rem;
    width: 100%;
  }
  .hero-heading {
    font-size: clamp(2rem, calc(1rem + 4vw), 4rem);
    padding-top: 115%;
  }
  .hero-sub-heading {
    font-size: clamp(1rem, calc(1rem + 2vw), 2.5rem);
  }
  .hero-sub-text {
    font-size: clamp(0.8rem, calc(0.7rem + 1.4vw), 1.6rem);
  }
}
</style>
