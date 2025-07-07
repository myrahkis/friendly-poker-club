<script setup>
const { isInstructionOpen } = defineProps({ isInstructionOpen: Boolean });
const { rawData: guide } = useCityData("guide");

const instructionContainer = ref(null);

// console.log(instructionContainer.value.instructionContainer);

const imageModules = import.meta.glob("/assets/images/locationGuide/**/*.jpg", {
  eager: true,
  query: "?url",
  import: "default",
});
// console.log("glob keys:", Object.keys(imageModules));

const imageUrls = computed(() => {
  if (!guide.value?.pics) return [];
  return guide.value.pics.map((fileName) => {
    const key = `/assets/images/locationGuide/${fileName}`;
    const url = imageModules[key];

    if (!url) {
      console.warn(`Не найдена картинка по ключу ${key}`);
      return "";
    }
    return url;
  });
});

defineExpose({ instructionContainer });
</script>

<template>
  <transition name="slide-down">
    <div ref="instructionContainer">
      <div class="instructions" v-if="isInstructionOpen">
        <h3>Как нас найти?</h3>
        <div>
          <h4>{{ guide.car.varient }}</h4>
          <ul class="steps-list">
            <li v-for="(step, index) in guide.car.steps" :key="index">
              {{ step }}
            </li>
          </ul>
        </div>
        <div>
          <h4>{{ guide.publicTransport.varient }}</h4>
          <ul class="steps-list">
            <li
              v-for="(step, index) in guide.publicTransport.steps"
              :key="index"
            >
              {{ step }}
            </li>
          </ul>
        </div>
        <p>Если возникнут сложности — звоните, мы подскажем.</p>
        <div class="instructions-images">
          <img
            v-for="(imgPath, index) in imageUrls"
            :key="index"
            :class="`instructions-img-${index}`"
            :src="imgPath"
            alt=""
          />
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.instructions {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.instructions-images {
  display: grid;
  grid-template-columns: 0.5fr 0.5fr;
  grid-template-rows: auto 1fr;
  gap: 2rem;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    border-radius: 2rem;
  }
}
.instructions-img-4 {
  grid-column: 1 / -1;
  aspect-ratio: 16 / 9;
  width: 100rem;
  justify-self: center;
}

.steps-list {
  list-style: inside;

  li {
    font-size: clamp(1.2rem, 2.5vw, 1.5rem);
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
}
.slide-down-leave-from {
  max-height: 100vh;
  opacity: 1;
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
    gap: 2rem;

    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
      border-radius: 2rem;
    }
  }
  .instructions-img-4 {
    grid-column: 1 / -1;
    aspect-ratio: 16 / 9;
    justify-self: center;
  }
}
</style>
