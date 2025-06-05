<script setup></script>

<template>
  <section class="hero-section">
    <div class="gradient"></div>
    <img class="bg-chip" src="/assets/images/chip1.png" alt="bg-img" />
    <img class="bg-cards" src="/assets/images/bg-cards.png" alt="cards-img" />
    <div class="hero-wrapper">
      <div class="hero-text">
        <!-- <Logo width="70rem" paddingTop="16%" /> -->
        <h1>Легальная офлайн игра в покер!</h1>
        <h3 style="font-weight: 400">
          Для новичков, любителей <br />
          и профессионалов
        </h3>
        <!-- <p class="hero-text"> -->
        <p style="font-size: 2.2rem; width: 85%">
          Профессиональные покерные столы, профессиональные дилеры,
          профессиональное оборудование, комфортная обстановка — всё для
          получения удовольствия от любимой игры!
        </p>
      </div>
      <img
        class="hero-bg-img"
        src="/assets/images/hero-bg-img.png"
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
  padding: 0 var(--horiz-main-padding) 13%;
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
  gap: 4rem;
  z-index: 1;
  width: 45%;
  padding-top: 20%;
  padding-bottom: 7%;
  /* font-size: clamp(1.8rem, 2vw, 2.5rem);
  font-weight: 500; */
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
  bottom: 0;
  width: 50%;
  transform: translateY(15rem);
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
  /* border: 2px solid var(--light-gradient-color); */
  border-radius: 4rem;
  background: linear-gradient(
    to right,
    var(--light-gradient-color),
    var(--dark-gradient-color)
  );
}

@media (min-width: 1600px) {
  .hero-text {
    width: 47%;
  }
  .hero-section {
    padding: 0 var(--horiz-main-padding) 18%;
  }
  /* div {
    .logo {
      padding-top: 20% !important;
    }
  } */
}
@media (min-width: 1800px) {
  .hero-text {
    padding-top: 25%;
    padding-bottom: 0;
    width: 47%;
  }
  .hero-section {
    padding: 0 var(--horiz-main-padding) 25%;
  }
  .hero-empasis {
    bottom: 15rem;
    width: 50%;
  }
  /* .hero-bg-img {
    width: 47%;
  } */
  /* div {
    .logo {
      padding-top: 25% !important;
    }
  } */
}
@media (min-width: 2200px) {
  .hero-section {
    padding: 0 var(--horiz-main-padding) 20%;
  }
  .hero-empasis {
    width: 45%;
  }
  .hero-bg-img {
    width: 45%;
    transform: translateY(25rem);
  }
  .gradient {
    transform: translateY(25rem);
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
    padding-top: 30%;
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
