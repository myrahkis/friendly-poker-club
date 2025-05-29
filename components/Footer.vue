<script setup>
import Socials from "./Socials.vue";
</script>

<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-grid">
        <div class="logo-cell">
          <Logo width="30rem" paddingTop="0" />
          <div>
            <p class="phone">+7 800 000-00-00</p>
            <p class="email">addax18490@mixzu.net</p>
          </div>
        </div>
        <ul class="links-cell">
          <li>Вопрос-ответ</li>
          <li>О нас</li>
          <li>Видео</li>
          <li>Отзывы</li>
          <li>Контакты</li>
        </ul>
        <ul class="links-cell">
          <li>Вопрос-ответ</li>
          <li>О нас</li>
          <li>Видео</li>
          <li>Отзывы</li>
          <li>Контакты</li>
        </ul>
        <ul class="links-cell">
          <li>Вопрос-ответ</li>
          <li>О нас</li>
          <li>Видео</li>
          <li>Отзывы</li>
          <li>Контакты</li>
        </ul>
      </div>
      <div class="lower-footer">
        <Socials width="5rem" />
        <div class="policy">
          <p>Политика обработки персональных данных</p>
          <p>Пользовательское соглашение</p>
        </div>
      </div>
    </div>
    <div class="gradient"></div>
    <img class="bg-chip-1" src="/assets/images/chip-bg-full.png" alt="" />
    <img class="bg-chip-2" src="/assets/images/chip-bg-full.png" alt="" />
    <img class="bg-card" src="/assets/images/bg-cards-footer.png" alt="" />
  </footer>
</template>

<style scoped>
.footer {
  position: relative;
  padding: 0 var(--horiz-main-padding);
  padding-top: 6rem;
  padding-bottom: 5rem;
}
.footer-container {
  border: 1px solid var(--light-gradient-color);
  border-radius: 2rem;
  background-color: rgba(3, 3, 3, 0.3);
  padding: 3rem;
  backdrop-filter: blur(3px);
}
.footer-grid {
  display: grid;
  grid-template-columns: 0.5fr 0.25fr 0.25fr 0.25fr;
  grid-template-rows: minmax(25rem, 0.6fr);
  padding-bottom: 5rem;
}

.logo-cell {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.phone {
  font-size: clamp(1.8rem, 2.5vw, 3rem);
  font-weight: 700;
  margin-bottom: 0.5rem;
}
.email {
  font-size: clamp(1.2rem, 1.5vw, 2rem);
  font-weight: 400;
}

.links-cell {
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 1.5rem;
  line-height: 1.3;
  list-style: none;
  font-size: clamp(1.2rem, 1.5vw, 2rem);
  font-weight: 400;

  li {
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      text-decoration: underline;
    }
  }
}

.lower-footer {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.gradient {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  transform: translateY(-25rem);
  z-index: -1;
  background: linear-gradient(
    to bottom,
    rgba(2, 37, 99, 1) 0%,
    rgba(2, 37, 99, 0.9) 40%,
    rgba(2, 37, 99, 0.7) 60%,
    rgba(2, 37, 99, 0.4) 75%,
    rgba(2, 37, 99, 0.15) 90%,
    rgba(2, 37, 99, 0) 100%
  );
}
.bg-card {
  position: absolute;
  top: 0;
  right: 0;
  z-index: -2;
  transform: translateY(-25rem);
  width: 60rem;
}
.bg-chip-1,
.bg-chip-2 {
  position: absolute;
  z-index: -2;
  width: 35rem;
}
.bg-chip-1 {
  top: 0;
  left: 0;
  transform: translateY(-10rem) translateX(-3rem);
}
.bg-chip-2 {
  bottom: 5rem;
  right: 40rem;
}

@media (max-width: 1024px) {
  div {
    .logo {
      width: 80% !important;
    }
  }

  :deep(.socials-container) {
    .whatsup-btn,
    .yt-btn,
    .tg-btn,
    .vk-btn {
      svg {
        width: clamp(3rem, 4.5vw, 5rem) !important;
      }
    }
  }

  .lower-footer {
    p {
      font-size: clamp(1.2rem, 1.3vw, 2rem);
    }
  }
}

@media (max-width: 850px) {
  .footer-grid {
    grid-template-columns: 0.5fr 0.5fr 0.5fr;
    grid-template-rows: auto 0.5fr;
    row-gap: 5rem;
  }
  .logo-cell {
    grid-row: 1;
    grid-column: 1 / -1;
    justify-content: start;
  }

  div {
    .logo {
      width: 45% !important;
      padding-bottom: 3rem !important;
    }
  }

  .socials-container {
    margin-bottom: 2rem;
  }

  .lower-footer {
    display: flex;
    flex-direction: column;
  }
  .policy {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .gradient {
    height: 70%;
    transform: translateY(-25rem);
  }
  .bg-card {
    transform: translateY(-25rem) translateX(5rem);
    width: 40rem;
  }
  .bg-chip-1 {
    width: 25rem;
    top: 25rem;
    left: 15rem;
    transform: translateY(0) translateX(0);
  }
  .bg-chip-2 {
    display: none;
  }
}
</style>
