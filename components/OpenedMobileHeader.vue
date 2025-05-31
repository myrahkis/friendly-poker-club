<script setup>
const links = [
  { text: "О нас", href: "#about-us" },
  { text: "Вопрос-ответ", href: "#faq" },
  { text: "Видео", href: "#videos" },
  { text: "Отзывы", href: "#feedbacks" },
  { text: "Контакты", href: "#contacts" },
];

const props = defineProps({
  goToAnchor: {
    type: Function,
    required: true,
  },
});
</script>

<template>
  <div class="mobile-header-container">
    <div class="mobile-header__top-container">
      <Logo width="40%" paddingTop="0" />
      <ul class="mobile-header__list">
        <li
          @click.prevent="props.goToAnchor(href)"
          class="mobile-header__list__link u-shimmering-gradient-hover"
          v-for="{ text, href } in links"
          :key="text"
        >
          <a :href="href">
            {{ text }}
          </a>
        </li>
      </ul>
    </div>
    <ContactsInfoBlock bgColor="transparent" />
  </div>
</template>

<style>
.mobile-header-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
  height: 100vh;
  width: 100%;
  background-color: var(--dark-blue-color);
  padding: 10% var(--horiz-main-padding) var(--horiz-main-padding)
    var(--horiz-main-padding);
}

.mobile-header__list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 1.7rem;
}
.mobile-header__list__link {
  cursor: pointer;
  padding: 1rem;
  border-radius: 2rem;
}

@media (max-width: 1200px) {
  .mobile-header-container {
    justify-content: space-between;
    gap: 2rem;
  }
  .mobile-header__top-container {
    display: flex;

    .logo {
      width: 30% !important;
    }
  }
  .mobile-header__list {
    font-size: 2rem;
    margin: auto;
  }
  .mobile-header-container {
    .contacts {
      width: 100%;
      gap: 2rem;
      padding: 2rem;
    }
  }
}
@media (max-width: 830px) {
  .mobile-header-container {
    justify-content: space-between;
    gap: 0.5rem;
  }
  .mobile-header__top-container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .mobile-header__list {
    margin: auto 0;
    font-size: 1.7rem;
  }
  .mobile-header-container {
    .contacts {
      width: 100%;
      display: flex;
      padding: 2rem;
      gap: 1.5rem;
    }
  }
}
@media (max-width: 600px) {
  .mobile-header-container {
    padding: 15% var(--horiz-main-padding) var(--horiz-main-padding)
      var(--horiz-main-padding);
  }
}
@media (max-width: 460px) {
  .mobile-header-container {
    padding: 25% var(--horiz-main-padding) var(--horiz-main-padding)
      var(--horiz-main-padding);
  }
  .mobile-header__top-container {
    .logo {
      width: 50% !important;
    }
  }
}
</style>
