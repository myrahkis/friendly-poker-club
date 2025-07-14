<script setup>
import placeholderImg1 from "@/assets/images/1.jpg";
import placeholderImg2 from "@/assets/images/2.jpg";
import placeholderImg3 from "@/assets/images/3.jpg";
import placeholderImg4 from "@/assets/images/4.jpg";
import placeholderImg5 from "@/assets/images/5.jpg";
import placeholderImg6 from "@/assets/images/6.jpg";
import placeholderImg7 from "@/assets/images/7.jpg";
import placeholderImg8 from "@/assets/images/8.jpg";
import placeholderImg9 from "@/assets/images/9.jpg";
import placeholderImg10 from "@/assets/images/10.jpg";
import placeholderImg11 from "@/assets/images/11.jpg";
import placeholderImg12 from "@/assets/images/12.jpg";
import placeholderImg13 from "@/assets/images/13.jpg";

const photos = [
  placeholderImg1,
  placeholderImg2,
  placeholderImg3,
  placeholderImg4,
  placeholderImg5,
  placeholderImg6,
  placeholderImg7,
  placeholderImg8,
  placeholderImg9,
  placeholderImg10,
  placeholderImg11,
  placeholderImg12,
  placeholderImg13,
];

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
          Приветствуем всех любителей восхитительной игры — покер! Только в
          нашем клубе вы можете совершенно легально и абсолютно законно поиграть
          в живой покер с такими же любителями покера, как и вы сами.
        </p>
        <p>
          В России играть в офлайн-покер на деньги можно только в легальных
          игорных зонах, где разрешена азартная деятельность. На 2025 год таких
          зон четыре:
        </p>
        <hr class="separator-reversed" />
        <ol class="about-us-list">
          <li>
            Крым (Зона «Золотое кольцо») — Казино «Олимп» (Ялта), Казино
            «Шамбала» (Симферополь)
          </li>
          <li>
            Красная Поляна (Сочи, «Сити-Казино») — Казино «Сочи», Казино
            «Бархатные сезоны»
          </li>
          <li>
            Азов-Сити (Ростовская область) — Казино «Оракул», Казино «Nirvana»
          </li>
          <li>Алтай («Сибирская монета») — Казино «Altai Palace»</li>
        </ol>
        <hr class="separator-reversed" />
        <p>
          В других регионах России офлайн-покер на деньги
          <strong>запрещен</strong>, подпольные клубы вне игорных зон
          <strong>нелегальны</strong>! Мы не рекомендуем вам посещать такие
          клубы. В них всегда высок риск облав и проблем с законом.
        </p>
        <p>
          В нашем клубе офлайн игра в покер абсолютно легальна, потому что все
          мероприятия нашего клуба носят исключительно развлекательный характер.
          Игра в покер проводится не на деньги(!), т.е. без использования
          денежных ставок и (или) других материальных активов и (или) возможных
          возникающих материальных прав,
          <strong>и не предполагает никакого материального выигрыша</strong>!
          Таким образом, <strong>игра не является азартной</strong> и абсолютно
          легальна, как и любая другая настольная игра (мафия, нарды, шахматы и
          т.п.)
        </p>
        <p>
          В нашем клубе вас ждут профессиональные покерные столы,
          профессиональные дилеры, профессиональное оборудование, комфортная и
          дружеская обстановка — всё для получения удовольствия от любимой игры!
        </p>
        <p>
          Наш клуб подходит для всех! Если вы совсем новичок и ничего не
          понимаете в покере — наши дилеры и администраторы обучат вас азам этой
          замечательной игры.
        </p>
        <p>
          Любителям и профессионалам в нашем клубе так же не будет скучно. В
          клубе ежедневно проводятся различные форматы турниров, на которых как
          любитель так и профессионал сможет тренироваться, оттачивая своё
          мастерство и повышая свой уровень игры.
        </p>
        <p>Ждём Вас на наших мероприятиях!</p>
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
  border: 1px solid var(--light-gradient-color);
  border-radius: 2rem;
  position: relative;
  overflow: visible;
}

.about-us-info {
  width: 50%;
  padding: clamp(2rem, 4vw, 3.5rem);
  gap: clamp(0.5rem, 2vw, 1rem);
  display: flex;
  flex-direction: column;

  p {
    font-size: 1.5rem;
    font-weight: 400;
    hyphens: auto;
    text-align: justify;
  }
}

.about-us-list {
  display: flex;
  flex-direction: column;
  width: 75%;
  gap: 0.8rem;
  font-size: clamp(1.2rem, 2.5vw, 1.5rem);
  font-weight: 400;
  padding-left: 1.1em;
}

.about-us-carousel {
  position: relative;
  overflow: hidden;
  flex: 1;
  border-radius: 2rem;
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

@media (min-width: 1800px) {
  .about-us-info {
    p {
      font-size: clamp(1.6rem, 2vw + 0.3rem, 2rem);
    }
  }
  .about-us-list {
    font-size: clamp(1.5rem, 2vw + 0.3rem, 1.8rem);
  }
}
@media (min-width: 1800px) {
  .about-us-info {
    width: 55%;
  }
}
@media (min-width: 2200px) {
  .about-us-info {
    width: 60%;
  }
}
@media (min-width: 3000px) {
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
  .about-us-list {
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
