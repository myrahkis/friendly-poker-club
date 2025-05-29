<script setup>
import placeholderImg from "@/assets/images/carousel-placeholder.png";

const photos = [placeholderImg, placeholderImg, placeholderImg, placeholderImg];

const curIndex = ref(0);
const direction = ref("slide-right");

function nextSlide() {
  direction.value = "slide-left";
  curIndex.value = (curIndex.value + 1) % photos.length;
}

function prevSlide() {
  direction.value = "slide-right";
  curIndex.value = (curIndex.value - 1 + photos.length) % photos.length;
}
</script>

<template>
  <section class="about-us-section" id="about-us">
    <h2>О нас</h2>
    <div class="about-us-wrapper">
      <div class="about-us-info">
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga.
        </p>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius
          tortor a tincidunt convallis. Fusce consectetur sed leo ut rutrum.
        </p>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga.
        </p>
      </div>
      <div class="about-us-carousel">
        <div class="carousel-container">
          <div class="carousel-wrapper">
            <transition :name="direction">
              <div class="carousel-item" :key="curIndex">
                <img
                  :src="photos[curIndex]"
                  alt="Фото карусели"
                  class="carousel-img"
                />
              </div>
            </transition>
          </div>
        </div>
        <button class="carousel-prev" @click="prevSlide">
          <img class="carousel-btn" src="/assets/icons/btn-back.svg" alt="" />
        </button>
        <button class="carousel-next u-pushing-btn" @click="nextSlide">
          <img class="carousel-btn" src="/assets/icons/btn-next.svg" alt="" />
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-us-section {
  position: relative;
  overflow: hidden;
  z-index: 3;
  padding: 0 var(--horiz-main-padding);
  padding-bottom: 5rem;
}

.about-us-wrapper {
  display: flex;
  align-items: stretch;
  background-color: var(--dark-bg-color);
  border: 2px solid var(--light-gradient-color);
  border-radius: 3rem;
  position: relative;
  overflow: visible;
}

.about-us-info {
  width: 40%;
  padding: 3.5rem;
  gap: 2rem;
  display: flex;
  flex-direction: column;

  p {
    font-size: 2rem;
    font-weight: 400;
  }
}

.about-us-carousel {
  position: relative;
  overflow: hidden;
  flex: 1;
  margin: -4px;
  z-index: 1;
  border-radius: 3rem;
}

.carousel-container,
.carousel-wrapper {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.carousel-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.carousel-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-btn {
  width: 8rem;
}
.carousel-prev,
.carousel-next {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  z-index: 2;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px) translate(0, -50%);
  }
  &:active {
    transform: translateY(0) translate(0, -50%);
  }
}
.carousel-prev {
  left: 2rem;
}
.carousel-next {
  right: 2rem;
}

/* движение влево */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
}
.slide-left-enter-from {
  transform: translateX(100%);
  /* opacity: 0; */
}
.slide-left-leave-to {
  transform: translateX(-100%);
  /* opacity: 0; */
}

/* движение вправо */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
}
.slide-right-enter-from {
  transform: translateX(-100%);
  /* opacity: 0; */
}
.slide-right-leave-to {
  transform: translateX(100%);
  /* opacity: 0; */
}

/* (1024px–1279px) */
@media (max-width: 1279px) {
  .about-us-wrapper {
    display: grid;
    grid-template-rows: 1fr auto;
  }
  .carousel-wrapper {
    aspect-ratio: 4 / 3;
  }
  .about-us-info {
    width: 100%;
  }
  .carousel-img {
    height: auto;
    object-fit: contain;
  }
}

/* (–767px) */
@media (max-width: 767px) {
  .about-us-info {
    p {
      font-size: clamp(1.2rem, 2.5vw, 2rem);
    }
  }
  .carousel-btn {
    width: 7rem;
  }
}

/* (-590px) */
@media (max-width: 590px) {
  .carousel-btn {
    width: 5.5rem;
  }
}

@media (max-width: 426px) {
  .carousel-btn {
    width: 4.5rem;
  }
}
</style>
