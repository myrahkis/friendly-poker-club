<script setup>
import { ref, computed } from "vue";

const feedbacks = [
  {
    date: `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}`,
    avatar: "",
    name: "Петя Петряков",
    userText: "Lorem ipsum dolor sit amet.",
    feedbackText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius tortor a tincidunt convallis. Fusce consectetur sed leo ut rutrum. Sed ornare, nisl vitae fringilla tristique, nisi ante iaculis nisl, et tincidunt odio leo in leo. ",
  },
  {
    date: `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}`,
    avatar: "",
    name: "Иван Иванов",
    userText: "Lorem ipsum dolor sit amet.",
    feedbackText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius tortor a tincidunt convallis. Fusce consectetur sed leo ut rutrum. Sed ornare, nisl vitae fringilla tristique, nisi ante iaculis nisl, et tincidunt odio leo in leo. ",
  },
  {
    date: `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}`,
    avatar: "",
    name: "Коля Колянов",
    userText: "Lorem ipsum dolor sit amet.",
    feedbackText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius tortor a tincidunt convallis. Fusce consectetur sed leo ut rutrum. Sed ornare, nisl vitae fringilla tristique, nisi ante iaculis nisl, et tincidunt odio leo in leo. ",
  },
  {
    date: `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}`,
    avatar: "",
    name: "Егор Егоров",
    userText: "Lorem ipsum dolor sit amet.",
    feedbackText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius tortor a tincidunt convallis. Fusce consectetur sed leo ut rutrum. Sed ornare, nisl vitae fringilla tristique, nisi ante iaculis nisl, et tincidunt odio leo in leo. ",
  },
  {
    date: `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}`,
    avatar: "",
    name: "Маша Машева",
    userText: "Lorem ipsum dolor sit amet.",
    feedbackText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius tortor a tincidunt convallis. Fusce consectetur sed leo ut rutrum. Sed ornare, nisl vitae fringilla tristique, nisi ante iaculis nisl, et tincidunt odio leo in leo. ",
  },
  {
    date: `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}`,
    avatar: "",
    name: "Катя Катева",
    userText: "Lorem ipsum dolor sit amet.",
    feedbackText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius tortor a tincidunt convallis. Fusce consectetur sed leo ut rutrum. Sed ornare, nisl vitae fringilla tristique, nisi ante iaculis nisl, et tincidunt odio leo in leo. ",
  },
];

const visibleCount = 3;
const count = feedbacks.length;

const currentIndex = ref(0);
const isTransition = ref(true);

const wrapperRef = ref(null);
let dragStartX = null;
let dragDeltaX = 0;
const threshold = 50;

const baseTranslate = computed(
  () => -(currentIndex.value * 100) / visibleCount + "%"
);
const translateStyle = computed(() => {
  if (dragStartX !== null) {
    return `translateX(calc(${baseTranslate.value} + ${dragDeltaX}px))`;
  }
  return `translateX(${baseTranslate.value})`;
});

function next() {
  isTransition.value = true;
  currentIndex.value++;
}
function prev() {
  isTransition.value = true;
  currentIndex.value--;
}

function onTransitionEnd() {
  if (currentIndex.value > count - visibleCount) {
    isTransition.value = false;
    currentIndex.value = 0;
  }

  if (currentIndex.value < 0) {
    isTransition.value = false;
    currentIndex.value = count - visibleCount;
  }
}

watch(isTransition, (v) => {
  if (!v) {
    nextTick(() => {
      isTransition.value = true;
    });
  }
});

function startDrag(e) {
  dragStartX = e.type.startsWith("touch") ? e.touches[0].clientX : e.clientX;
  dragDeltaX = 0;
  isTransition.value = false;
  wrapperRef.value.classList.add("grabbing");
}

function onDrag(e) {
  if (dragStartX === null) return;
  const clientX = e.type.startsWith("touch") ? e.touches[0].clientX : e.clientX;
  dragDeltaX = clientX - dragStartX;
}

function endDrag() {
  wrapperRef.value.classList.remove("grabbing");

  if (dragDeltaX > threshold) prev();
  else if (dragDeltaX < -threshold) next();
  else {
    isTransition.value = true;
  }
  dragStartX = null;
  dragDeltaX = 0;
}
</script>
<template>
  <section class="feedback-section">
    <h2>Отзывы о клубе</h2>
    <div
      class="feedbacks-wrapper"
      @mousedown.prevent="startDrag"
      @touchstart.prevent="startDrag"
      @mousemove.prevent="onDrag"
      @touchmove.prevent="onDrag"
      @mouseup.prevent="endDrag"
      @mouseleave.prevent="endDrag"
      @touchend.prevent="endDrag"
    >
      <div
        class="feedbacks"
        ref="wrapperRef"
        :style="{
          transform: translateStyle,
          transition: isTransition ? 'transform .5s ease' : 'none',
          cursor: dragStartX !== null ? 'grabbing' : 'grab',
        }"
        @transitionend="onTransitionEnd"
      >
        <FeedbackCard
          v-for="(fb, idx) in feedbacks"
          :key="idx"
          :feedback="fb"
        />
      </div>
      <button class="back-btn" @click="prev">
        <img src="/assets/icons/feedbacks-carousel-prev-btn.svg" alt="" />
      </button>
      <button class="next-btn" @click="next">
        <img src="/assets/icons/feedbacks-carousel-next-btn.svg" alt="" />
      </button>
    </div>
    <img class="bg-hearts" src="/assets/images/bg-hearts.png" alt="" />
    <img class="bg-clubs" src="/assets/images/bg-clubs.png" alt="" />
  </section>
</template>

<style scoped>
.feedback-section {
  position: relative;
  padding: 0 var(--horiz-main-padding);
  padding-bottom: 5rem;
}

.feedbacks-wrapper {
  position: relative;
  overflow: hidden;
}
.feedbacks {
  position: relative;
  cursor: grab;
  display: flex;
  gap: 1.5rem;
}
.feedbacks.grabbing {
  cursor: grabbing;
}

.feedbacks > * {
  flex: 0 0 calc((100% - 2 * 1.7rem) / 3);
}

.back-btn,
.next-btn {
  position: absolute;
  top: 50%;
  cursor: pointer;
  transform: translateY(-50%);
  z-index: 10;
  transition: transform 0.2s;

  img {
    width: 8rem;
  }

  &:hover {
    transform: translateY(-2px) translate(0, -50%);
  }
  &:active {
    transform: translateY(0) translate(0, -50%);
  }
}

.back-btn {
  left: 1.5rem;
}
.next-btn {
  right: 1.5rem;
}

.bg-hearts {
  position: absolute;
  top: 1rem;
  right: 10rem;
  z-index: -1;
  width: 25rem;
}
.bg-clubs {
  position: absolute;
  bottom: 0;
  transform: translateY(1rem);
  left: 23rem;
  z-index: -1;
  width: 25rem;
}

.bg-hearts {
  position: absolute;
  top: 1rem;
  right: 10rem;
  z-index: -1;
  width: 25rem;
}
.bg-clubs {
  position: absolute;
  bottom: 0;
  transform: translateY(1rem);
  left: 23rem;
  z-index: -1;
  width: 25rem;
}
</style>
