<script setup></script>

<template>
  <section class="contacts-section" id="contacts">
    <h2>Контакты</h2>
    <p class="text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius
      tortor a tincidunt convallis. Fusce consectetur sed leo ut rutrum. Sed
      ornare, nisl vitae fringilla tristique, nisi ante iaculis nisl, et
      tincidunt odio leo in leo. Praesent enim orci, iaculis at sem eget,
      gravida porttitor urna. Mauris a interdum diam.
    </p>
    <div class="contacts-map">
      <div class="contacts">
        <div>
          <p class="phone">+7 800 000-00-00</p>
          <p class="email">addax18490@mixzu.net</p>
        </div>
        <p class="text-info">
          Москва, ул. Покровка, <br />
          дом 1, подъезд 10
        </p>
        <p class="text-info">
          Пн-Пт: 09:00 – 19:00, <br class="hide-br" />
          Сб: 10:00 – 18:00, <br />
          Вс — выходной
        </p>
        <Socials width="6rem" />
      </div>
      <div class="map">MAP</div>
    </div>
    <div class="btns">
      <button class="contacts-btn u-shimmering-gradient-hover">
        Lorem ipsum dolor sit amet
      </button>
      <button class="contacts-btn u-shimmering-gradient-hover">
        Lorem ipsum dolor sit amet
      </button>
    </div>
  </section>
</template>

<style scoped>
.contacts-section {
  position: relative;
  z-index: 1;
  padding: 0 var(--horiz-main-padding);
  padding-bottom: 5rem;
}
.contacts-map {
  display: flex;
  gap: 1rem;
  margin: 3rem 0;
}

.text {
  width: 80%;
}

.contacts {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 40%;
  border: 1px solid var(--light-gradient-color);
  border-radius: 2rem;
  padding: 3rem;
  background-color: #021b46;
}

.phone {
  font-size: clamp(1.8rem, 2.5vw, 3rem);
  font-weight: 700;
}
.email {
  font-size: clamp(1.2rem, 2.5vw, 2rem);
  font-weight: 400;
}
.text-info {
  font-size: clamp(1.4rem, 1.8vw, 2.3rem);
  font-weight: 400;
}

.map {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 8rem;
  width: 60%;
  border: 1px solid var(--light-gradient-color);
  border-radius: 2rem;
}

.btns {
  display: flex;
  justify-content: center;
  gap: 1rem;
  /* width: 100%; */
}
.contacts-btn {
  background-color: rgba(37, 37, 37, 0.3);
  padding: 1rem 1.5rem;
  border: 1px solid var(--light-gradient-color);
  border-radius: 3rem;
  font-size: clamp(1.5rem, 2.2vw, 3rem);
  width: 40%;
}

/* (1024px–1279px) */
@media (max-width: 1279px) {
  .contacts {
    .socials-container {
      .whatsup-btn,
      .yt-btn,
      .tg-btn,
      .vk-btn {
        svg {
          width: clamp(2.5rem, 4.3vw, 5rem) !important;
        }
      }
    }
  }
}

@media (max-width: 690px) {
  .contacts-map {
    flex-direction: column;
  }
  .text {
    width: 100%;
  }
  .contacts {
    width: 100%;

    .socials-container {
      .whatsup-btn,
      .yt-btn,
      .tg-btn,
      .vk-btn {
        svg {
          width: clamp(5.5rem, 4.5vw, 6rem) !important;
        }
      }
    }
  }
  .map {
    width: 100%;
  }

  .phone {
    font-size: clamp(2.2rem, 3.5vw, 4rem);
  }
  .email {
    font-size: clamp(1.6rem, 3.5vw, 2.5rem);
  }
  .text-info {
    font-size: clamp(2rem, 2.5vw, 2.8rem);
  }
  .hide-br {
    display: none;
  }
}

/* (–767px) */
/* @media (max-width: 767px) {
  .contacts-map {
    flex-direction: column;
  }
  .text {
    width: 100%;
  }
  .contacts {
    width: 100%;
  }
  .map {
    width: 100%;
  }

  .phone {
    font-size: clamp(2rem, 3vw, 3.5rem);
  }
  .email {
    font-size: clamp(1.4rem, 3vw, 2.2rem);
  }
  .text-info {
    font-size: clamp(1.6rem, 2.5vw, 2.5rem);
  }
} */
</style>
