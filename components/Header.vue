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
        :key="link"
      >
        <a class="inner" :href="href">
          {{ text }}
        </a>
      </li>
    </ul>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  width: 100%;
  padding: 2.5rem;
  /* background-color: red; */
}
.header__list {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}
.header__list__link {
  padding: 1rem 1.5rem;
  border: 2px solid var(--light-gradient-color);
  border-radius: 2rem;
  background-color: rgba(37, 37, 37, 0.5);
  font-size: 1.5rem;
}
</style>
