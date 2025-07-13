<script setup>
const { fontSize, cityWritingForm } = defineProps({
  fontSize: String,
  cityWritingForm: Number,
});

const emit = defineEmits(["input"]);

const {
  open,
  selectedLabel,
  isCityDetecting,
  options,
  onOptionClick,
  toggleOpen,
} = useCitySelector(emit);

const showHint = ref(false);
</script>

<template>
  <div v-if="showHint" class="city-hint" @click="onHintClick">
    Выберите город
  </div>
  <div class="city-selector" @blur="open = false">
    <div
      class="selected"
      :style="{ fontSize }"
      :class="{ open: open }"
      @click="toggleOpen"
    >
      <div v-if="isCityDetecting">
        <span class="dots">
          <span class="dot">.</span>
          <span class="dot">.</span>
          <span class="dot">.</span>
        </span>
      </div>
      <span v-else>
        {{ selectedLabel[cityWritingForm] }}
      </span>
    </div>
    <div class="items" :class="{ selectHide: !open }" v-if="!isCityDetecting">
      <div
        v-for="(opt, idx) in options"
        :key="idx"
        class="item"
        @click="onOptionClick(opt)"
      >
        {{ opt.label[0] }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.city-selector {
  position: relative;
  width: fit-content;
  outline: none;
}
.city-hint {
  position: fixed;
  top: 6rem;
  left: var(--horiz-main-padding);
  background: var(--light-gradient-color);
  color: black;
  padding: 1rem 1.5rem;
  /* border-radius: 0.5rem; */
  /* box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.4); */
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

.city-selector .selected {
  position: relative;
  cursor: pointer;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 6px 6px 0px 0px;
  color: white;
  font-weight: 700;
  font-size: 1.5rem;
  padding: 0.8rem 1.5rem;
  padding-right: 3.5rem;
}

.city-selector .selected.open {
  background-color: var(--dark-bg-color);
  border: 1px solid var(--light-gradient-color);
  border-radius: 1rem 1rem 0px 0px;
}

.city-selector .selected:after {
  position: absolute;
  content: "";
  top: 1em;
  right: 1em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: #fff transparent transparent transparent;
}

.city-selector .items {
  position: absolute;
  color: #fff;
  border-radius: 0px 0px 1rem 1rem;
  overflow: hidden;
  border-right: 1px solid var(--light-gradient-color);
  border-left: 1px solid var(--light-gradient-color);
  border-bottom: 1px solid var(--light-gradient-color);
  background-color: var(--dark-bg-color);
  left: 0;
  right: 0;
  z-index: 1;
  font-size: 1.5rem;
}

.city-selector .items div {
  cursor: pointer;
  color: #fff;
  padding: 1rem 1.5rem;
  user-select: none;
  transition: all 0.2s;
}

.city-selector .items div:hover {
  background-color: var(--light-gradient-color);
  color: black;
}
.selectHide {
  display: none;
}
.dots {
  display: inline-block;
  width: 3ch;
  font-family: monospace;
}

.dot {
  opacity: 0;
  animation: blink 1s infinite;
}
.dot:nth-child(1) {
  animation-delay: 0s;
}
.dot:nth-child(2) {
  animation-delay: 0.33s;
}
.dot:nth-child(3) {
  animation-delay: 0.66s;
}
@keyframes blink {
  0%,
  20% {
    opacity: 0;
  }
  20%,
  60% {
    opacity: 1;
  }
  60%,
  100% {
    opacity: 0;
  }
}

@media (min-width: 1800px) {
  .city-selector .selected {
    padding: 1rem 2rem;
    padding-right: 4rem;
    font-size: clamp(1.8rem, 2vw + 0.3rem, 2rem);
  }
  .city-selector .items {
    font-size: clamp(1.8rem, 2vw + 0.3rem, 2rem);
  }
  .city-selector .items div {
    padding: 1rem 2rem;
  }
}
@media (min-width: 3000px) {
  .city-selector .selected {
    padding: 1.5rem 2rem;
    padding-right: 6rem;
    font-size: clamp(1.8rem, 2vw + 0.3rem, 2.8rem);
  }
  .city-selector .selected:after {
    border: 0.8rem solid transparent;
    border-color: #fff transparent transparent transparent;
  }
  .city-selector .items {
    font-size: clamp(1.8rem, 2vw + 0.3rem, 2.8rem);
  }
  .city-selector .items div {
    padding: 1rem 2rem;
  }
}
</style>
