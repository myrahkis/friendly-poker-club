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
          Приветствуем всех любителей восхитительной игры – покер! Только в
          нашем клубе вы можете совершенно легально и абсолютно законно поиграть
          в живой покер с такими же любителями покера, как и вы сами. В России
          играть в офлайн-покер на деньги можно только в легальных игорных
          зонах, где разрешена азартная деятельность. На 2025 год таких зон
          четыре:
        </p>
        <p>
          1. Крым (Зона «Золотое кольцо») — Казино «Олимп» (Ялта), Казино
          «Шамбала» (Симферополь) <br />
          2. Красная Поляна (Сочи, «Сити-Казино») — Казино «Сочи», Казино
          «Бархатные сезоны» <br />
          3. Азов-Сити (Ростовская область) — Казино «Оракул», Казино «Nirvana»
          <br />
          4. Алтай («Сибирская монета») — Казино «Altai Palace»
        </p>
        <p>
          В других регионах России офлайн-покер на деньги запрещен, подпольные
          клубы вне игорных зон нелегальны! Мы не рекомендуем вам посещать такие
          клубы. В них всегда высок риск облав и проблем с законом.
        </p>
        <p>
          В нашем клубе офлайн игра в покер абсолютно легальна, потому что все
          мероприятия нашего клуба носят исключительно развлекательный характер.
          Игра в покер проводится не на деньги(!), т.е. без использования
          денежных ставок и (или) других материальных активов и (или) возможных
          возникающих материальных прав, и не предполагает никакого
          материального выигрыша! Таким образом, игра не является азартной и
          абсолютно легальна, как и любая другая настольная игра (мафия, нарды,
          шахматы и т.п.).
        </p>
        <p>
          В нашем клубе вас ждут профессиональные покерные столы,
          профессиональные дилеры, профессиональное оборудование, комфортная и
          дружеская обстановка — всё для получения удовольствия от любимой игры!
        </p>
        <p>
          Наш клуб подходит для всех! Если вы совсем новичок и ничего не
          понимаете в покере – наши дилеры и администраторы обучат вас азам этой
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
    font-size: 1.6rem;
    font-weight: 400;
  }
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
