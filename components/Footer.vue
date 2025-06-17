<script setup>
import Socials from "./Socials.vue";
</script>

<template>
  <footer class="footer">
    <div class="footer-container" id="footer-container">
      <div class="footer-grid">
        <Logo width="25rem" paddingTop="0" />
        <div class="sole-proprietor-info">
          <p>ИП Хорисова Вероника Алексеевна</p>
          <p>ИНН: 771671533154</p>
          <p>ОГРН: 322774600601658</p>
          <p>Юр. адрес: г. Москва, ул. Енисейская, д. 17, к. 1</p>
        </div>
        <div class="contacts">
          <div>
            <p class="phone">+7 800 000-00-00</p>
            <p class="email">addax18490@mixzu.net</p>
          </div>
          <Socials width="4rem" />
        </div>
      </div>
      <div class="policy">
        <p>&copy; 2025 Friendly poker club</p>
        <a href="" class="underline-hover"><p>Договор оферта</p></a>
        <a href="" class="underline-hover"><p>Дополнительное соглашение</p></a>
        <a href="" class="underline-hover"
          ><p>Приложение №1 к договору (правила клуба)</p></a
        >
        <a href="" class="underline-hover"
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
  grid-template-columns: minmax(20rem, 0.35fr) auto 0.4fr 0.4fr;
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
  display: flex;
  justify-content: space-between;
  width: 100%;
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
