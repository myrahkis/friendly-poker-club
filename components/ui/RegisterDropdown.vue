<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import siteIcon from "@/assets/icons/site-icon.svg";
import tgIcon from "@/assets/icons/tg-icon.svg";
import maxIcon from "@/assets/icons/max-icon.svg";
import vkIcon from "@/assets/icons/vk-icon.svg";

const isOpen = ref(false);

const socials = [
  {
    title: "Сайт клуба",
    icon: siteIcon,
    link: "https://my.friendlypoker.ru/home",
  },
  {
    title: "Telegram",
    icon: tgIcon,
    link: "https://t.me/Friendly_Poker_club_Bot#",
  },
  {
    title: "Макс",
    icon: maxIcon,
    link: "https://max.ru/id771671533154_bot",
  },
  {
    title: "ВК",
    icon: vkIcon,
    link: "https://vk.com/app54538456",
  },
];

function toggle() {
  isOpen.value = !isOpen.value;
}

const dropdownRef = ref(null);

function handleClickOutside(e) {
  if (dropdownRef.value && !dropdownRef.value.contains(e.target)) {
    isOpen.value = false;
  }
}

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <div class="dropdown" ref="dropdownRef">
    <button class="dropdown__button" @click="toggle">
      <span>Записаться на игру</span>
      <svg
        class="arrow"
        :class="{ open: isOpen }"
        width="20"
        height="20"
        viewBox="0 0 24 24"
      >
        <path
          d="M6 9L12 15L18 9"
          stroke="white"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
    <Transition name="dropdown">
      <div v-if="isOpen" class="dropdown__content">
        <a
          v-for="social in socials"
          :key="social.title"
          :href="social.link"
          target="_blank"
          class="dropdown__item"
        >
          <div class="icon">
            <img :src="social.icon" alt="" />
          </div>
          <span>{{ social.title }}</span>
        </a>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.dropdown {
  position: relative;
  max-width: 20rem;
}

.dropdown__button {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  border-radius: 40px;
  padding: 0.5rem 1.5rem;
  background: linear-gradient(
    90deg,
    var(--light-gradient-color),
    var(--dark-gradient-color)
  );
  color: white;
  border: none;
}

.arrow {
  transition: 0.3s;
}

.arrow.open {
  transform: rotate(180deg);
}

.dropdown__content {
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  right: 0;
  padding: 0.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  border: 1px solid #3fbfff;
  border-radius: 2rem;
  background: #062865;

  z-index: 10;
  overflow: hidden;
}

.dropdown__item {
  display: flex;
  align-items: center;
  gap: 1rem;

  padding: 0.5rem 1rem;
  font-size: 1.2rem;

  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 1.8rem;
  color: white;
  text-decoration: none;
  transition: 0.2s;
}

.dropdown__item:last-child {
  margin-bottom: 0;
}

.dropdown__item:hover {
  background: rgba(255, 255, 255, 0.08);
}

.icon {
  width: 2.8rem;
  height: 2.8rem;

  border-radius: 50%;
  background: #1b4ca9;

  display: flex;
  align-items: center;
  justify-content: center;
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.25s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
