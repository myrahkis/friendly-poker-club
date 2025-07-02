<script setup>
import Socials from "./Socials.vue";

const openDocState = useState("openDocIndex", () => null);

const { rawData: recruits } = useCityData("recruits");
const { rawData: contacts } = useCityData("contacts");
// console.log(recruits);

function openDoc(idx) {
  openDocState.value = idx;
}
</script>

<template>
  <footer class="footer">
    <div class="footer-container" id="footer-container">
      <div class="footer-grid">
        <Logo width="25rem" paddingTop="0" />
        <div class="sole-proprietor-info">
          <p v-for="(text, index) in recruits" :key="index">{{ text }}</p>
        </div>
        <div class="contacts">
          <div>
            <p class="phone">{{ contacts.phone }}</p>
            <p class="email">{{ contacts.email }}</p>
          </div>
          <Socials width="4rem" />
        </div>
      </div>
      <div class="policy">
        <p class="credits">&copy; 2025 Friendly poker club</p>
        <a href="#" @click.prevent="openDoc(0)" class="policy-1 underline-hover"
          ><p>Договор оферта</p></a
        >
        <a href="#" @click.prevent="openDoc(1)" class="policy-2 underline-hover"
          ><p>Дополнительное соглашение</p></a
        >
        <a href="#" @click.prevent="openDoc(2)" class="policy-3 underline-hover"
          ><p>Приложение №1 к договору (правила клуба)</p></a
        >
        <a @click.prevent="openDoc(3)" href="#" class="policy-4 underline-hover"
          ><p>Политика обработки персональных данных</p></a
        >
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
  padding-top: 5rem;
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
  grid-template-columns: 30rem auto 0.4fr 0.4fr;
  grid-template-rows: 1fr auto;
  padding-bottom: 5rem;
}
.sole-proprietor-info {
  grid-column: 2 / 3;

  p {
    font-size: clamp(1.2rem, 1.5vw, 1.6rem);
    font-weight: 400;
  }
}
.contacts {
  grid-column: 4 / -1;
  display: flex;
  flex-direction: column;
  justify-self: end;
  gap: 0.5rem;
}
.phone {
  font-size: clamp(1.8rem, 2.5vw, 2.3rem);
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-align: end;
}
.email {
  font-size: clamp(1.2rem, 1.5vw, 1.6rem);
  font-weight: 400;
  text-align: end;
}

.policy {
  display: grid;
  grid-template-columns: repeat(5, auto);
  justify-content: space-between;
  /* display: flex;
  justify-content: space-between;
  width: 100%; */
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
  width: 40rem;
}
.bg-chip-1,
.bg-chip-2 {
  position: absolute;
  z-index: -2;
  width: 30rem;
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

@media (max-width: 1359px) {
  .policy {
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-template-rows: 0.5fr 0.5fr;
    gap: 1rem;

    a {
      width: fit-content;
    }
  }
  .credits {
    grid-row: 2;
  }
}

@media (max-width: 1236px) {
  .footer-grid {
    padding-bottom: 2rem;
  }
  .policy {
    display: grid;
    grid-template-columns: minmax(fit-content, 0.5fr) 0.5fr;
    grid-template-rows: 0.5fr 0.5fr 0.5fr;
    gap: 1rem;

    a {
      width: fit-content;
    }
  }
  .credits {
    grid-row: 3;
  }
  .policy-1 {
    grid-column: 1 / 2;
    grid-row: 1;
  }
  .policy-2 {
    grid-column: 1 / 2;
    grid-row: 2;
  }
  .policy-3 {
    grid-column: 2 / -1;
    grid-row: 1;
  }
  .policy-4 {
    grid-column: 2 / -1;
    grid-row: 2;
  }
}

@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: 16rem auto 0.4fr;
  }
  div {
    .logo {
      width: 90% !important;
    }
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

  .policy {
    p {
      font-size: clamp(1rem, 2vw, 1.2rem);
    }
  }
}

@media (max-width: 850px) {
  .bg-chip-2 {
    display: none;
  }
}

/* (480px–767px) */
@media (max-width: 767px) {
  .footer-grid {
    grid-template-columns: minmax(20rem, 0.5fr) 0.5fr;
    grid-template-rows: 0.5fr 0.5fr;
    gap: 1rem;
  }
  .contacts {
    grid-column: 2 / -1;
  }
  div {
    .logo {
      width: 75% !important;
    }
  }
}

@media (max-width: 600px) {
  .footer-grid {
    display: flex;
    flex-direction: column;
  }
  div {
    .logo {
      width: 45% !important;
    }
  }
  .sole-proprietor-info {
    order: 3;
  }
  .contacts {
    order: 2;
    gap: 1rem;
  }
  .phone,
  .email {
    text-align: start;
  }
  .phone {
    margin-bottom: 0;
  }

  .policy {
    display: flex;
    flex-direction: column-reverse;
    gap: 1rem;
  }
}
</style>
