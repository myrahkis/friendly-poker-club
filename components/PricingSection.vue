<script setup>
import rentBg1 from "@/assets/images/rent-bg-1.png";
import rentBg2 from "@/assets/images/rent-bg-2.png";
import rentBg3 from "@/assets/images/rent-bg-3.png";

const rentCards = [
  {
    heading: "Название карточки в две строки",
    price: "10 000 ₽",
    subHeading: "Название карточки:",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius tortor a tincidunt convallis.",
    bg: rentBg2,
  },
  {
    heading: "Название карточки в две строки",
    price: "10 000 ₽",
    subHeading: "Название карточки:",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius tortor a tincidunt convallis.",
    bg: rentBg1,
  },
  {
    heading: "Название карточки в две строки",
    price: "10 000 ₽",
    subHeading: "Название карточки:",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius tortor a tincidunt convallis.",
    bg: rentBg3,
  },
];
</script>

<template>
  <section class="rent-section" id="pricing">
    <h2>Тарифы</h2>
    <div class="pricing-cards">
      <div class="pricing-card">
        <div class="pracing-card-info">
          <div class="pricing-row">
            <p class="heading-text">
              Посещение любого <br />
              ежедневного турнира*
            </p>
            <p class="colored-price">1 000 руб</p>
          </div>
          <div class="pricing-row">
            <p class="heading-text">Повторный вход (Re-Entry)</p>
            <p class="colored-price">1 000 руб</p>
          </div>
          <div class="pricing-row">
            <p class="heading-text">Аддон</p>
            <p class="colored-price">1 000 руб</p>
          </div>
        </div>
        <button class="order-btn u-shimmering-gradient-hover">
          Зарегистрироваться
        </button>
      </div>
      <div class="pricing-card">
        <div class="pracing-card-info">
          <div class="pricing-row">
            <p class="heading-text">
              Аренда одного игрового стола <br />
              (от 2 до 9 игроков)**
            </p>
            <p class="heading-text">
              <span class="colored-price">1 000 руб</span> за первые 2 часа
            </p>
          </div>
          <div class="pricing-row">
            <p class="heading-text">за каждый последующий час</p>
            <p class="colored-price">+5 000 руб</p>
          </div>
          <p class="sub-text">
            В стоимость входит всё необходимое для игры оборудование и дилер.
          </p>
        </div>
        <button class="order-btn u-shimmering-gradient-hover">Заказать</button>
      </div>
      <div class="pricing-card">
        <div class="pracing-card-info">
          <p class="heading-text">
            Проведение корпоративных турниров, корпоративных чемпионатов,
            корпоративных лиг. (от 9 игроков)
          </p>
          <p class="colored-price">Стоимость расчитывается индивидуально</p>
          <p class="sub-text">
            В стоимость входит всё необходимое для игры оборудование, дилеры,
            турнирный директор, ведение статистики игроков и проведённых
            турниров, нагрождение победителей корпоративными кубками.
          </p>
        </div>
        <button class="order-btn u-shimmering-gradient-hover">Заказать</button>
      </div>
    </div>
    <div class="pricing-nuances">
      <p>
        *На отдельные виды турниров и дополнительные услуги цена может
        отличатся. Подробнее о таких турнирах вы сможете ознакомиться в наших
        соц.сетях при их анонсировании.
      </p>
      <p>
        ** Стоимость указана за проведение стандартной игры в различные виды
        покера на ваш выбор (Холдем, Омаха, Кеш-турнир и т.п.). Любые
        нестандартные виды покера обговариваются индивидуально.
      </p>
    </div>
    <!-- <div class="rent-cards">
      <RentCard v-for="(card, index) in rentCards" :key="index" :card="card" />
    </div> -->
    <img class="bg-dots" src="/assets/images/faq-bg-dots.png" alt="" />
  </section>
</template>

<style scoped>
.rent-section {
  position: relative;
  padding: 0 var(--horiz-main-padding);
  margin-bottom: 5rem;
}
/* .rent-cards {
  display: flex;
  gap: 2rem;
} */

.pricing-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}
.pricing-card {
  display: flex;
  flex-direction: column;
  /* justify-content: cet; */
  /* gap: 1.5rem; */
  padding: clamp(2.4rem, 3vw, 3rem);
  border: 1px solid var(--light-gradient-color);
  border-radius: 2rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: var(--dark-bg-color);
  backdrop-filter: blur(3px);
}
.pracing-card-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 10%;
}
.pricing-row {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.heading-text {
  font-size: clamp(1.5rem, 2vw, 2rem);
  font-weight: 700;
}
.sub-text {
  font-size: clamp(1rem, 1.5vw, 1.5rem);
}
.colored-price {
  font-size: clamp(1.5rem, 2vw, 2rem);
  font-weight: 700;

  background-image: linear-gradient(
    to left,
    var(--light-gradient-color) 90%,
    var(--dark-gradient-color)
  );
  background-clip: text;
  color: transparent;
}
.order-btn {
  background: linear-gradient(
    to right,
    var(--dark-gradient-color),
    var(--light-gradient-color)
  );
  font-size: clamp(1.5rem, 1.8vw, 1.8rem);
  font-weight: 400;
  border-radius: 4rem;
  padding: 1rem;
  margin-top: auto;
}

.pricing-nuances {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 3rem;
  /* width: 80%; */
}

.bg-dots {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: -1;
  transform: translate(-50%, -50%);
  width: 55%;
}

@media (max-width: 1192px) {
  .heading-text {
    font-size: clamp(1.2rem, 2vw, 1.5rem);
    hyphens: auto;
  }
  .sub-text {
    font-size: clamp(1rem, 1.5vw, 1.2rem);
    text-align: justify;
    hyphens: auto;
  }
  .colored-price {
    font-size: clamp(1.2rem, 2vw, 1.5rem);
  }
  .order-btn {
    font-size: clamp(1.5rem, 1.5vw, 1.5rem);
  }
}

@media (max-width: 960px) {
  .pricing-cards {
    display: grid;
    grid-template-columns: repeat(2, 0.5fr);
    gap: 2rem;
  }
}

/* (–767px) */
/* @media (max-width: 767px) { */
/* .rent-cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
  } */

/* .pricing-card {
    justify-content: start;
    gap: 1rem;
  }
  .order-btn {
    background: linear-gradient(
      to right,
      var(--dark-gradient-color),
      var(--light-gradient-color)
    );
    font-size: clamp(1.5rem, 2vw, 1.8rem);
    font-weight: 400;
    border-radius: 4rem;
    padding: 1rem;
    margin-top: auto;
  }
} */

/* (-590px) */
@media (max-width: 590px) {
  .pricing-cards {
    display: flex;
    flex-direction: column;
  }
}
</style>
