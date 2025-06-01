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
          Легальная офлайн игра в покер! <br />
          Для новичков, любителей и профессионалов. Профессиональные покерные
          столы, дилеры и оборудование, комфортная обстановка — всё для
          получения удовольствия от любимой игры!
        </p>
      </div>
      <img class="hero-bg-img" src="/assets/images/hero-bg.svg" alt="hero-bg" />
    </div>
    <button class="hero-btn u-shimmering-gradient-hover">
      Внимание! В нашем клубе категорически запрещена игра на деньги!
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
  width: 45%;
  padding-top: 15rem;
  padding-bottom: 7%;
  font-size: clamp(1.8rem, 2vw, 2.5rem);
  font-weight: 500;
}

.bg-cards {
  position: absolute;
  left: -5rem;
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
  font-size: clamp(1.8rem, 3vw, 2.3rem);
  border: 2px solid var(--light-gradient-color);
  border-radius: 4rem;
  background-color: rgba(37, 37, 37, 0.5);
}

@media (min-width: 1600px) {
  div {
    .logo {
      padding-top: 20% !important;
    }
  }
}
@media (min-width: 1800px) {
  .hero-bg-img {
    width: 47%;
  }
  div {
    .logo {
      padding-top: 25% !important;
    }
  }
}
@media (min-width: 2200px) {
  .hero-bg-img {
    width: 45%;
    transform: translateY(25rem);
  }
  .gradient {
    transform: translateY(25rem);
  }
  .hero-btn {
    width: 45%;
  }
  .hero-text {
    width: 50%;
  }
}
@media (min-width: 3000px) {
  .hero-bg-img {
    width: 40%;
    transform: translateY(35rem);
  }
  .gradient {
    transform: translateY(35rem);
  }
  .hero-btn {
    width: 35%;
  }
  .hero-text {
    width: 55%;
  }
}

@media (max-width: 1124px) {
  .hero-text {
    width: 65%;
    padding-top: 75%;
    padding-bottom: 2%;
  }
  .hero-bg-img {
    bottom: 35rem;
    z-index: -2;
    width: 60%;
  }
  .bg-cards {
    left: -25%;
    width: 77%;
    transform: translateY(10rem);
  }
  .gradient {
    transform: translateY(10rem);
  }
  .hero-btn {
    width: 75%;
    font-size: clamp(1.8rem, 3vw, 3rem);
  }

  div {
    .logo {
      width: 55% !important;
      padding-top: 15% !important;
    }
  }
}

@media (max-width: 805px) {
  .hero-text {
    width: 65%;
    padding-top: 85%;
    padding-bottom: 2%;
  }
  .hero-bg-img {
    bottom: 43rem;
    z-index: -2;
    width: 60%;
  }
  .bg-cards {
    left: -25%;
    width: 80%;
    transform: translateY(0);
  }
  .gradient {
    transform: translateY(0);
  }
}

@media (max-width: 670px) {
  .hero-text {
    font-size: 1.5rem;
  }
  .bg-cards {
    left: -30%;
    bottom: 10%;
    width: 80%;
    transform: translateY(0);
  }
  .hero-bg-img {
    bottom: 50rem;
  }
  .hero-btn {
    width: 90%;
  }
}

@media (max-width: 540px) {
  .bg-cards {
    left: -25%;
    bottom: 10%;
    width: 82%;
    transform: translateY(0);
  }
  .hero-btn {
    width: 90%;
  }
}

@media (max-width: 470px) {
  .hero-text {
    padding-top: 85%;
  }
  .hero-bg-img {
    bottom: 45rem;
  }
  .bg-cards {
    left: -30%;
    bottom: 10%;
    width: 90%;
  }
  .hero-text {
    width: 80%;
    padding-bottom: 0;
  }
  div {
    .logo {
      padding-top: 30% !important;
    }
  }
}

/* (320px–395px) */
@media (max-width: 395px) {
  .hero-text {
    padding-top: 100%;
  }
  .hero-bg-img {
    bottom: 45rem;
  }
  .bg-cards {
    bottom: 15%;
  }
  .hero-text {
    width: 85%;
    font-size: 1.3rem;
    padding-bottom: 0;
  }
}
</style>
