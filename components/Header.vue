<script setup>
const header = ref(null);

const { useOpenMenu } = defineProps({ useOpenMenu: { type: Function } });

const links = [
  { text: "О нас", href: "#about-us" },
  { text: "Вопрос-ответ", href: "#faq" },
  { text: "Тарифы", href: "#pricing" },
  { text: "Отзывы", href: "#feedbacks" },
  { text: "Контакты", href: "#contacts" },
  { text: "Правовая инфомация", href: "#documents" },
];

const { loading, error, rawData: contacts } = useCityData("contacts");

const showHint = ref(false);

// console.log(contacts);

function toggleMenu() {
  const menu = document.querySelector(".header-menu-btn");
  menu.classList.toggle("open");
  useOpenMenu();
}

onMounted(() => {
  const wasHintShown = localStorage.getItem("cityHintShown");

  if (!wasHintShown) {
    showHint.value = true;

    setTimeout(() => {
      showHint.value = false;
      localStorage.setItem("cityHintShown", "true");
    }, 5000);
  }
});

function onHintClick() {
  showHint.value = false;
  localStorage.setItem("cityHintShown", "true");
}

defineExpose({ header });
</script>

<template>
  <header class="header" ref="header">
    <div class="header-mobile">
      <CitySelector fontSize="1.5rem" :cityWritingForm="0" />
      <div v-if="showHint" class="city-hint" @click="onHintClick">
        Выберите город
      </div>
      <button class="header-menu-btn" @click="toggleMenu">
        <img src="/assets/icons/menu-btn.svg" alt="" />
      </button>
    </div>
    <div class="header-desktop">
      <div
        style="
          position: relative;
          display: flex;
          width: fit-content;
          height: fit-content;
          gap: 0.5rem;
        "
      >
        <span class="city-svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 50 51"
          >
            <path
              fill="white"
              stroke="black"
              stroke-width="0.547959"
              d="M 16.6648 32.8541 L 2.49115 27.0849 L 2.6336 24.6633 L 35.8953 12.9113 L 37.391 14.407 L 23.5735 47.455 L 16.6648 32.8541 Z"
            />
            <path
              fill="white"
              d="M 16.2197 33.6277 C 16.4651 33.7231 16.6604 33.9185 16.7559 34.1639 L 21.9373 47.485 C 22.3587 48.5684 23.3829 49.2561 24.5461 49.2367 C 25.2828 49.2246 25.9553 48.9304 26.448 48.4377 C 26.7333 48.1524 26.9582 47.8007 27.1007 47.3984 L 38.3962 15.4999 C 38.7538 14.4896 38.5062 13.3919 37.7496 12.6353 C 36.9931 11.8788 35.8953 11.6305 34.8851 11.9888 L 2.98549 23.2839 C 1.88857 23.6721 1.16693 24.675 1.14757 25.8382 C 1.12751 27.0014 1.81551 28.0253 2.89892 28.4466 L 16.2197 33.6277 Z M 2.95763 25.8654 C 2.95946 25.7534 2.9878 25.4494 3.22376 25.2134 C 3.31259 25.1246 3.43018 25.0458 3.58728 24.9898 L 35.4858 13.6943 C 35.8375 13.5699 36.2042 13.6528 36.4675 13.9161 L 17.8247 32.5588 C 17.5577 32.2917 17.2361 32.0798 16.8781 31.9404 L 3.55734 26.7594 C 2.99034 26.5387 2.95473 26.0193 2.95694 25.8654 L 2.95763 25.8654 Z"
            />
          </svg>
        </span>
        <!-- <p style="font-weight: 700">{{ city }}</p> -->
        <CitySelector fontSize="1.5rem" :cityWritingForm="0" />
        <div v-if="showHint" class="city-hint" @click="onHintClick">
          Выберите город
        </div>
      </div>
      <div class="header-info-wrapper">
        <div class="header-info">
          <p class="phone">
            {{ contacts.phone }}
          </p>
          <p>{{ contacts.email }}</p>
          <p>{{ contacts.workingHours }}</p>
          <Socials width="3.2rem" />
        </div>
        <ul class="header__list">
          <li
            class="header__list__link u-shimmering-gradient-hover"
            v-for="{ text, href } in links"
            :key="text"
          >
            <a :href="href">
              {{ text }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 2.5rem var(--horiz-main-padding);
  z-index: 100;
  transition: transform 0.3s, box-shadow 0.3s ease, background-color 0.3s ease;
}
.city-svg {
  width: 3rem;
}

.city-hint {
  cursor: pointer;
  position: fixed;
  top: 6rem;
  left: var(--horiz-main-padding);
  background: var(--light-gradient-color);
  color: black;
  padding: 1rem 1.5rem;
  /* border-radius: 0.5rem; */
  font-size: 1.5rem;
  z-index: 1000;
  clip-path: polygon(
    0% 10%,
    45% 10%,
    50% 0%,
    55% 10%,
    100% 10%,
    100% 100%,
    0% 100%
  );
}

.header-desktop {
  display: flex;
  gap: 1rem;
  justify-content: space-between;
}
.header-info-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: fit-content;
}
.header-info {
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 1.5rem;
}

.header__list {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}
.header__list__link {
  cursor: pointer;
  padding: 1.1rem 2.1rem;
  border: 1px solid var(--light-gradient-color);
  border-radius: 3rem;
  background-color: rgba(37, 37, 37, 0.5);
  font-size: 1.5rem;
}
.phone {
  font-weight: 700;
  font-size: 1.6rem;
}
.header-mobile {
  display: none;
}
.header-menu-btn {
  img {
    width: clamp(2rem, calc(1rem + 7vw), 5rem);
  }
}
.header-menu-btn.open {
  transform: rotate(-90deg);
}

@media (min-width: 1800px) {
  .header-info-wrapper {
    p {
      font-size: clamp(1.8rem, 2vw + 0.3rem, 2rem);
    }
  }
  .header__list__link {
    font-size: clamp(1.8rem, 2vw + 0.3rem, 2rem);
  }
  .phone {
    font-size: clamp(1.9rem, 2vw + 0.3rem, 2.2rem);
  }
  .city-svg {
    width: 4rem;
  }
  :deep(.socials-container) {
    .whatsup-btn,
    .yt-btn,
    .tg-btn,
    .vk-btn {
      svg {
        width: clamp(2.5rem, 3.5vw, 4rem) !important;
      }
    }
  }
  .header-info {
    gap: 2rem;
  }
}
@media (min-width: 3000px) {
  .header-info-wrapper {
    gap: 1.5rem;
    p {
      font-size: clamp(1.8rem, 2vw + 0.3rem, 2.8rem);
    }
  }
  .header__list__link {
    padding: 1.4rem 3rem;
    font-size: clamp(1.8rem, 2vw + 0.3rem, 2.8rem);
  }
  .phone {
    font-size: clamp(1.9rem, 2vw + 0.3rem, 3rem);
  }
  .city-svg {
    width: 5rem;
  }
  :deep(.socials-container) {
    .whatsup-btn,
    .yt-btn,
    .tg-btn,
    .vk-btn {
      svg {
        width: clamp(3rem, 5vw, 5.5rem) !important;
      }
    }
  }
}

/* (480px–767px) */
@media (max-width: 1200px) {
  .header-desktop {
    display: none;
  }
  .header-mobile {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
