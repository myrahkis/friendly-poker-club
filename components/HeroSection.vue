<script setup>
const { loading, error, rawData: cityName } = useCityData("mainHeading");
const heroVid = ref(null);

onMounted(() => {
  heroVid.value.muted = true;
  heroVid.value.play().catch((err) => {
    console.warn("Autoplay заблокирован:", err);
  });
});
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
      <div class="hero-bg-vid">
        <div class="color-filter"></div>
        <div class="video-mask">
          <video
            muted="muted"
            autoplay
            loop
            playsinline
            webkit-playsinline
            ref="heroVid"
          >
            <source src="/assets/hero-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <!-- большие экраны -->
      <!-- <video src="/assets/hero-vid-test.MP4" autoplay muted loop></video> -->
      <!-- <img class="hero-bg-img" src="/assets/images/hero-bg.svg" alt="hero-bg" /> -->
      <div class="hero-bg-vid-big-screen">
        <div class="color-filter"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1705 729"
          width="1705"
          height="729"
          overflow="visible"
          style="max-width: 100%; height: auto; display: block"
        >
          <defs>
            <clipPath id="inner-clip-1705">
              <path
                d="M 1339.1 22.2109 C 1527.92 22.2109 1681 175.287 1681 364.116 C 1681 552.945 1527.92 706.021 1339.1 706.021 H 367.247 C 178.418 706.021 25.3419 552.945 25.3418 364.116 C 25.3418 175.287 178.418 22.2109 367.247 22.2109 H 626.594 C 670.475 48.6643 755.699 66.6074 853.643 66.6074 C 951.586 66.6074 1036.81 48.6643 1080.69 22.2109 H 1339.1 Z"
              />
            </clipPath>
          </defs>
          <foreignObject
            x="0"
            y="0"
            width="1705"
            height="729"
            clip-path="url(#inner-clip-1705)"
          >
            <video
              xmlns="http://www.w3.org/1999/xhtml"
              src="/assets/hero-video.mp4"
              autoplay
              muted
              loop
              playsinline
              style="
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center center;
              "
            ></video>
          </foreignObject>
          <path
            fill="none"
            stroke="white"
            stroke-width="2"
            opacity="0.5"
            d="M 1340 727.309 V 728.503 H 365.001 V 727.309 H 1340 Z M 364.501 0.5 H 620.715 C 665.009 27.575 748.942 45.9731 845.508 46.542 L 850.12 46.5557 C 948.621 46.5557 1034.53 28.0051 1079.53 0.5 H 1340.5 C 1541.53 0.500053 1704.5 163.469 1704.5 364.501 C 1704.5 565.366 1541.8 728.231 1341 728.501 V 727.307 C 1541.14 727.037 1703.31 564.707 1703.31 364.501 L 1703.3 362.164 C 1702.05 163.649 1541.36 2.95925 1342.84 1.70215 H 1342.84 L 1340.5 1.69434 H 1079.86 L 1079.74 1.7666 C 1035.77 28.4476 953.712 46.5956 859.243 47.6973 L 854.735 47.7363 L 850.119 47.749 C 751.83 47.7489 665.884 29.3034 620.501 1.7666 L 620.381 1.69434 H 364.501 L 362.154 1.70215 C 162.862 2.96454 1.69447 164.911 1.69434 364.501 C 1.69434 564.707 163.858 727.037 364.001 727.307 V 728.501 C 163.199 728.231 0.5 565.366 0.5 364.501 L 0.507812 362.146 C 1.76951 162.982 162.982 1.76943 362.146 0.507812 L 364.501 0.5 Z"
          />
          <path
            fill="white"
            fill-opacity="0.8"
            stroke="none"
            d="M 1339.1 703.827 V 706.021 H 367.247 V 703.827 H 1339.1 Z M 1678.81 364.116 C 1678.81 176.499 1526.71 24.4053 1339.1 24.4053 H 1081.29 C 1036.76 50.9905 951.342 68.8017 853.643 68.8018 C 755.943 68.8018 670.529 50.9905 625.989 24.4053 H 367.247 C 180.363 24.4053 28.7249 175.313 27.543 361.919 L 27.5361 364.116 C 27.5362 551.733 179.63 703.827 367.247 703.827 V 706.021 C 178.418 706.021 25.3419 552.945 25.3418 364.116 C 25.3418 175.287 178.418 22.2109 367.247 22.2109 H 626.594 C 670.475 48.6643 755.699 66.6074 853.643 66.6074 C 951.586 66.6074 1036.81 48.6643 1080.69 22.2109 H 1339.1 C 1527.92 22.2109 1681 175.287 1681 364.116 C 1681 552.945 1527.92 706.021 1339.1 706.021 V 703.827 C 1525.98 703.827 1677.62 552.919 1678.8 366.313 L 1678.81 364.116 Z"
          />
        </svg>
      </div>
      <!-- <img
        class="hero-bg-img-big-screen"
        src="/assets/images/bg-big-sc.png"
        alt="hero-bg"
      /> -->
    </div>
    <span class="hero-empasis">
      Внимание! В нашем клубе категорически
      <br class="emphasis-br-mobile" />
      запрещена игра на деньги!
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
  line-height: 1.3;
}
.hero-sub-heading {
  font-size: clamp(2rem, 2.5vw, 3.3rem);
  font-weight: 700;
  line-height: 1.3;
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

.hero-bg-vid {
  position: absolute;
  top: 15%;
  right: 0;
  width: 75%;
  transform: translateX(35rem);
  z-index: 0;
}
.video-mask {
  width: 100%;
  mask-image: url("/assets/test.svg");
  mask-mode: alpha;
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
  -webkit-mask-image: url("/assets/test.svg");
  -webkit-mask-mode: alpha;
  -webkit-mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  /* overflow: hidden; */
}
.hero-bg-vid::after {
  content: "";
  position: absolute;
  top: -2.1%;
  left: -2.1%;
  right: -2.1%;
  bottom: -2.1%;
  background: url("/assets/hero-video-border.svg") no-repeat center/contain;
  /* pointer-events: none; */
}
.video-mask video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-bg-vid-big-screen {
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
.desktop-br,
.emphasis-br-mobile {
  display: none;
}

@media (min-width: 1600px) {
  .desktop-br {
    display: block;
  }
  .hero-section {
    padding: 0 var(--horiz-main-padding) 10%;
  }
  .hero-bg-vid {
    width: 70%;
    transform: translateX(30rem);
  }
  .hero-text {
    width: 50%;
  }
}
@media (min-width: 1920px) {
  .hero-section {
    padding: 0 var(--horiz-main-padding) 5%;
  }
  .hero-wrapper {
    padding-top: 15%;
  }

  .hero-bg-vid {
    display: none;
  }
  .hero-bg-vid-big-screen {
    position: absolute;
    display: block;
    top: 17%;
    right: 0;
    width: 75%;
    transform: translateX(43rem);
    z-index: 0;
    /* mask-image: url("/assets/test-big.svg");
    mask-mode: alpha;
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: center;
    -webkit-mask-image: url("/assets/test-big.svg");
    -webkit-mask-mode: alpha;
    -webkit-mask-size: contain;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-position: center;
    overflow: hidden; */
  }
  /* .hero-bg-vid-big-screen video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  } */
  .hero-sub-text {
    font-size: 2rem;
    width: 95%;
  }
}
@media (min-width: 2560px) {
  div {
    .logo {
      width: 30% !important;
    }
  }
  .hero-bg-vid-big-screen {
    width: 65%;
    transform: translateX(40rem);
  }
  .hero-empasis {
    font-size: clamp(1.8rem, 3vw, 2.6rem);
    padding: 2rem 3rem;
    width: 50%;
  }
}
@media (min-width: 4000px) {
  div {
    .logo {
      width: 40% !important;
    }
  }
  .hero-bg-vid-big-screen {
    width: 70%;
    transform: translateX(100rem);
  }
  .hero-empasis {
    font-size: clamp(1.8rem, 3vw, 3.3rem);
    padding: 2.5rem 3rem;
    width: 45%;
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
  .hero-bg-vid {
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
  .hero-bg-vid {
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

@media (max-width: 1020px) {
  .emphasis-br-mobile {
    display: block;
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
  .emphasis-br-mobile {
    display: block;
  }
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
