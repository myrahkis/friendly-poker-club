<script setup>
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
const currentIndex = ref(0);

const maxIndex = feedbacks.length;
const direction = ref("slide-left");

const currentFeedbacks = computed(() => {
  if (currentIndex.value + visibleCount <= maxIndex) {
    return feedbacks.slice(
      currentIndex.value,
      currentIndex.value + visibleCount
    );
  }
  return [
    ...feedbacks.slice(currentIndex.value),
    ...feedbacks.slice(0, (currentIndex.value + visibleCount) % maxIndex),
  ];
});

function next() {
  direction.value = "slide-left";
  currentIndex.value = (currentIndex.value + visibleCount) % maxIndex;
}

function prev() {
  direction.value = "slide-right";
  currentIndex.value =
    (currentIndex.value - visibleCount + maxIndex) % maxIndex;
}
</script>

<template>
  <section class="feedback-section" id="feedback">
    <h2>Отзывы о клубе</h2>
    <div class="feedbacks-wrapper">
      <button @click="prev">
        <img class="back-btn" src="/assets/icons/btn-back.svg" alt="Назад" />
      </button>
      <transition :name="direction">
        <div class="feedbacks" :key="currentIndex">
          <FeedbackCard
            v-for="(fb, idx) in currentFeedbacks"
            :key="idx + fb.name"
            :feedback="fb"
          />
        </div>
      </transition>
      <button @click="next">
        <img class="next-btn" src="/assets/icons/btn-next.svg" alt="Вперёд" />
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
  padding-top: 40%;
  width: 100%;
}

.feedbacks {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  gap: 1.5rem;
}

/* движение влево */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 0.8s ease-in-out, opacity 0.8s ease-in-out;
}
.slide-left-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.slide-left-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

/* движение вправо */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.8s ease-in-out, opacity 0.8s ease-in-out;
}
.slide-right-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-right-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.back-btn,
.next-btn {
  position: absolute;
  top: 50%;
  width: 8rem;
  cursor: pointer;
  transform: translateY(-50%);
  z-index: 10;
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
</style>
