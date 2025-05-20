<script setup>
const links = [
  { text: "О нас", href: "#about-us-section" },
  { text: "Вопрос-ответ", href: "#faq-section" },
  { text: "Видео", href: "#video-section" },
  { text: "Отзывы", href: "#feedback-section" },
  { text: "Контакты", href: "#contacts-section" },
];
</script>

<template>
  <header class="header">
    <ul class="header__list">
      <li
        class="header__list__link"
        v-for="{ text, href } in links"
        :key="text"
      >
        <a :href="href">
          {{ text }}
        </a>
      </li>
    </ul>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 2.5rem;
  z-index: 100;
  /* background-color: red; */
}
.header__list {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}
.header__list__link {
  cursor: pointer;
  padding: 1rem 1.5rem;
  border: 2px solid var(--light-gradient-color);
  border-radius: 2rem;
  background-color: rgba(37, 37, 37, 0.5);
  font-size: 1.5rem;

  /* &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 3rem;
    padding: 0.2rem;
    background: linear-gradient(to right, var(--dark-gradient-color), var(--light-gradient-color));
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  } */
}
</style>
