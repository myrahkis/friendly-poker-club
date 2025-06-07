<script setup>
const header = ref(null);
const city = ref("загрузка...");

const { useOpenMenu } = defineProps({ useOpenMenu: { type: Function } });

const links = [
  { text: "О нас", href: "#about-us" },
  { text: "Вопрос-ответ", href: "#faq" },
  { text: "Тарифы", href: "#pricing" },
  { text: "Отзывы", href: "#feedbacks" },
  { text: "Контакты", href: "#contacts" },
  { text: "Правовая инфомация", href: "#documents"}
];

// function getCoords() {
//   return new Promise((resolve, reject) => {
//     if (!navigator.geolocation) {
//       reject(new Error("Geolocation не поддерживается"));
//     }
//     navigator.geolocation.getCurrentPosition(
//       (pos) => resolve(pos.coords),
//       (err) => reject(err),
//       { enableHighAccuracy: true }
//     );
//   });
// }

// async function reverseGeocode(lat, lon) {
//   const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`;
//   const res = await fetch(url);
//   if (!res.ok) throw new Error("Ошибка геокодирования");
//   const data = await res.json();
//   return (
//     data.address.city ||
//     data.address.town ||
//     data.address.village ||
//     data.address.county ||
//     "не определён"
//   );
// }

// async function detectCity() {
//   try {
//     const { latitude, longitude } = await getCoords();
//     city.value = await reverseGeocode(latitude, longitude);
//   } catch (e) {
//     console.error(e);
//     city.value = "Не удалось определить";
//   }
// }

// onMounted(() => {
//   detectCity();
// });

function toggleMenu() {
  const menu = document.querySelector(".header-menu-btn");
  menu.classList.toggle("open");
  useOpenMenu();
}

defineExpose({ header });
</script>

<template>
  <header class="header" ref="header">
    <div class="header-mobile">
      <CitySelector />
      <!-- <p style="font-weight: 700">{{ city }}</p> -->
      <button class="header-menu-btn" @click="toggleMenu">
        <img src="/assets/icons/menu-btn.svg" alt="" />
      </button>
    </div>
    <div class="header-desktop">
      <div
        style="
          display: flex;
          width: fit-content;
          gap: 0.5rem;
        "
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 50 51"
            width="30"
            height="31"
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
        <CitySelector />
      </div>
      <div class="header-info-wrapper">
        <!-- <Logo width="15rem" paddingTop="0" /> -->
        <div class="header-info">
          <p style="font-weight: 700; font-size: 1.6rem;">+7 (969) 120-00-00</p>
          <p>addax18490@mixzu.net</p>
          <p>Ежедневно с 14:00 до 02:00</p>
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

.header-mobile {
  display: none;
}
.header-menu-btn {
  img {
    width: 5rem;
  }
}
.header-menu-btn.open {
  transform: rotate(-90deg);
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
