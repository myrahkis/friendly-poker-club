<script setup>
const { rawData: contacts } = useCityData("contacts");

const isInstructionOpen = ref(false);
const instructionComp = ref(null);

function toggleInstructions() {
  isInstructionOpen.value = !isInstructionOpen.value;

  if (isInstructionOpen.value) {
    nextTick(() => {
      const el = instructionComp.value.instructionContainer;
      // console.log(el);
      if (el && el.scrollIntoView) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  }
}
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
          @click="toggleInstructions"
        >
          Как нас найти?
        </button>
        <div class="map">
          <iframe
            v-if="contacts.map"
            :src="contacts.map"
            loading="lazy"
            width="100%"
            height="100%"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </div>
    <ContactsInstructions
      :isInstructionOpen="isInstructionOpen"
      ref="instructionComp"
    />
  </section>
</template>

<style scoped>
.contacts-section {
  position: relative;
  z-index: 1;
  padding: 0 var(--horiz-main-padding);
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

.instructions-btn {
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 999;
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

.btns {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
.contacts-btn {
  background-color: rgba(37, 37, 37, 0.3);
  padding: 1rem 1.5rem;
  border: 1px solid var(--light-gradient-color);
  border-radius: 3rem;
  font-size: clamp(1.5rem, 2.2vw, 3rem);
  width: 40%;
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
