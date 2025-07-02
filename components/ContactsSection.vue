<script setup>
const { rawData: contacts } = useCityData("contacts");

const isInstructionOpen = ref(false);
</script>

<template>
  <section class="contacts-section" id="contacts">
    <div class="contacts-heading">
      <h2>Контакты</h2>
      <CitySelector fontSize="2rem" :cityWritingForm="1" />
    </div>
    <div class="contacts-map">
      <ContactsInfoBlock bgColor="#021b46" />
      <div class="map-wrapper">
        <button
          class="instructions-btn u-shimmering-gradient-hover"
          @click="isInstructionOpen = !isInstructionOpen"
        >
          Как нас найти?
        </button>
        <div class="map" v-html="contacts.map"></div>
      </div>
    </div>
    <transition name="slide-down">
      <div class="instructions" v-if="isInstructionOpen">
        <h3>Как нас найти?</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, itaque
          modi cum optio unde quaerat vero eius impedit sed dolor aliquam ullam
          non quisquam sunt praesentium dolorem consectetur eveniet quis!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, itaque
          modi cum optio unde quaerat vero eius impedit sed dolor aliquam ullam
          non quisquam sunt praesentium dolorem consectetur eveniet quis!
        </p>
        <div class="instructions-images">
          <img
            class="instructions-img"
            src="/assets/images/carousel-placeholder.png"
            alt=""
          />
          <img
            class="instructions-img"
            src="/assets/images/carousel-placeholder.png"
            alt=""
          />
          <img
            class="instructions-img"
            src="/assets/images/carousel-placeholder.png"
            alt=""
          />
        </div>
      </div>
    </transition>
  </section>
</template>

<style scoped>
.contacts-section {
  position: relative;
  z-index: 1;
  padding: 0 var(--horiz-main-padding);
  /* padding-bottom: 5rem; */
}
.contacts-map {
  display: flex;
  gap: 1rem;
  margin: 3rem 0;
}
.contacts-heading {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;

  h2 {
    margin-bottom: 0;
  }
}
.text {
  width: 80%;
}

.map-wrapper {
  position: relative;
  overflow: hidden;
  width: 60%;
  border: 1px solid var(--light-gradient-color);
  border-radius: 2rem;
}
.map {
  height: 100%;
}
.instructions-btn {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: linear-gradient(
    to right,
    var(--dark-gradient-color),
    var(--light-gradient-color)
  );
  border-radius: 3rem;
  box-shadow: 0 0.5rem 0.8rem rgba(3, 3, 3, 0.4);
  backdrop-filter: blur(2px);
  font-size: 1.5rem;
  font-weight: 700;
  padding: 1.5rem 2rem;
  transition: all 0.2s ease-in;

  &:hover {
    background-color: var(--dark-blue-color);
  }
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

.instructions {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.instructions-images {
  display: grid;
  grid-template-columns: 0.5fr 0.5fr 0.5fr;
  gap: 2rem;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    border-radius: 2rem;
  }
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}
.slide-down-enter-from {
  max-height: 0;
  opacity: 0;
  padding-top: 0;
  padding-bottom: 0;
}
.slide-down-enter-to {
  max-height: 100vh;
  opacity: 1;
  /* padding-top: 1rem;
  padding-bottom: 1rem; */
}
.slide-down-leave-from {
  max-height: 100vh;
  opacity: 1;
  /* padding-top: 1rem;
  padding-bottom: 1rem; */
}
.slide-down-leave-to {
  max-height: 0;
  opacity: 0;
  padding-top: 0;
  padding-bottom: 0;
}

/* (480px–767px) */
@media (max-width: 767px) {
  .instructions-images {
    display: flex;
    flex-direction: column;

    img {
      aspect-ratio: 16 / 9;
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
  .map-wrapper {
    width: 100%;
    aspect-ratio: 16 / 9;
  }
}
@media (max-width: 510px) {
  .map-wrapper {
    aspect-ratio: 4 / 5;
  }

  .instructions-images {
    img {
      aspect-ratio: 1;
    }
  }
}
@media (max-width: 367px) {
  :deep(.socials-container) {
    .whatsup-btn,
    .yt-btn,
    .tg-btn,
    .vk-btn {
      svg {
        width: clamp(3.5rem, 4vw, 5rem) !important;
      }
    }
  }
}
</style>
