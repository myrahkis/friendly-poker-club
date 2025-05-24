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
        <p>Политика обработки персональных данных</p>
        <p>Пользовательское соглашение</p>
      </div>
    </div>
    <div class="gradient"></div>
    <img class="bg-chip-1" src="/assets/images/chip-bg-full.png" alt="" />
    <img class="bg-chip-2" src="/assets/images/chip-bg-full.png" alt="" />
    <img class="bg-card-turned" src="/assets/images/bg-cards.png" alt="" />
  </footer>
</template>

<style scoped>
.footer {
  position: relative;
  padding: 0 5rem;
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
  /* height: 50vh; */
}

.logo-cell {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.phone {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}
.email {
  font-size: 2rem;
  font-weight: 400;
}

.links-cell {
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 1.5rem;
  list-style: none;
  font-size: 2rem;
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
    rgba(2, 37, 99, 1) 10%,
    rgba(2, 37, 99, 0.9) 50%,
    rgba(2, 37, 99, 0.7) 60%,
    rgba(2, 37, 99, 0.4) 75%,
    rgba(2, 37, 99, 0.15) 90%,
    rgba(2, 37, 99, 0) 100%
  );
}
.bg-card-turned {
  position: absolute;
  top: 0;
  right: 0;
  z-index: -2;
  transform: translateY(-25rem) translateX(5rem) rotate(180deg);
  width: 70rem;
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
  bottom: 0;
  right: 43rem;
  /* transform: translateY(-10rem) translateX(-3rem); */
}
</style>
