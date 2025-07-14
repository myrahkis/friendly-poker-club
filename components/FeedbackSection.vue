<script setup>
import { ref, computed } from "vue";

const feedbacks = [
  {
    date: "02.07.2025",
    stars: 5,
    avatar: "",
    name: "Артём Соловьёв",
    userText: "Идеальное место для вечернего покера!",
    feedbackText:
      "Наконец-то появилось место, где можно поиграть в офлайн покер не на деньги, а в своё удовольствие! Атмосфера действительно дружелюбная, как и обещают. Организация турниров на высшем уровне. Столы просто огнище! Даже Сочинские столы нервно курят в сторонке. Ребята очень заморочились с оборудованием – это очень приятно! Так держать! Рекомендую!",
  },
  {
    date: "14.07.2025",
    stars: 5,
    avatar: "",
    name: "Михаил Алексеев",
    userText: "Уверенная пятёрка!",
    feedbackText:
      "Формат клуба — супер! Хорошие турниры, адекватная стоимость входа, отличная организация — именно для тех, кто хочет приятно провести вечер.",
  },
  {
    date: "04.07.2025",
    stars: 5,
    avatar: "",
    name: "Игорь Данилин",
    userText: "Мягкая атмосфера и сильные игроки",
    feedbackText:
      "Приятно удивлён. Думал, будет больше «домашнего» уровня, а в итоге получил отличную игру и новых знакомых. Очень понравилось, что все участники уважают друг друга, а за игрой реально интересно наблюдать.",
  },
  {
    date: "23.07.2025",
    stars: 5,
    avatar: "",
    name: "Светлана Мещерякова",
    userText: "Покер для души, не только для азарта",
    feedbackText:
      "Зашла посмотреть на клуб по совету коллег — и осталась! Тут не просто игра, а целое комьюнити. Уютный зал, приятный ведущий, никаких странных типажей. Всё в меру, спокойно, атмосферно. Девушке здесь точно комфортно.",
  },
  {
    date: "26.07.2025",
    stars: 5,
    avatar: "",
    name: "Алексей Прудников",
    userText: "Friendly — крутой клуб",
    feedbackText:
      "Очень порадовал вайб клуба. Никто не давит, не кичится победами, все вежливо и по-деловому. Поддержка новичков — на высоте. Формат идеален, если хочется расслабиться за игрой без всяких понтов и токсичности.",
  },
  {
    date: "19.07.2025",
    stars: 5,
    avatar: "",
    name: "Дарья Власова",
    userText: "Лампово, честно, азартно",
    feedbackText:
      "Я играю в покер нечасто, но тут — хочется возвращаться. Уютная локация, люди как будто отобраны специально: общительные, добрые, умеют проигрывать с улыбкой. Очень комфортная атмосфера. Большое спасибо организаторам — вы делаете классное дело!",
  },
];

// кол-во отображаемых карточек в завсиисмости от ширины экрана
function getVisibleCount() {
  const w = window.innerWidth;
  if (w < 550) return 1;
  if (w < 970) return 2;
  if (w < 1275) return 3;
  return 4;
}
const visibleCount = ref(4);

onMounted(() => {
  visibleCount.value = getVisibleCount();
  window.addEventListener("resize", onResize);
});
onUnmounted(() => {
  window.removeEventListener("resize", onResize);
});

function onResize() {
  visibleCount.value = getVisibleCount();
}

const count = feedbacks.length;
const currentIndex = ref(0);
const isTransition = ref(true);

// сдвиг
const cardWidth = computed(
  () =>
    `calc((100% - ${(visibleCount.value - 1) * 1.3}rem) / ${
      visibleCount.value
    })`
);
const baseTranslate = computed(
  () => -(currentIndex.value * 100) / visibleCount.value + "%"
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

// подход к краю
function onTransitionEnd() {
  if (currentIndex.value > count - visibleCount.value) {
    isTransition.value = false;
    currentIndex.value = 0;
  }

  if (currentIndex.value < 0) {
    isTransition.value = false;
    currentIndex.value = count - visibleCount.value;
  }
}

watch(isTransition, (val) => {
  if (!val) {
    nextTick(() => {
      isTransition.value = true;
    });
  }
});

// перетаскивание
const wrapperRef = ref(null);
let dragStartX = null;
let dragDeltaX = 0;
const threshold = 50;

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
  <section class="feedback-section" id="feedbacks">
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
          '--card-width': cardWidth,
        }"
        @transitionend="onTransitionEnd"
      >
        <FeedbackCard
          v-for="(fb, idx) in feedbacks"
          :key="idx"
          :feedback="fb"
        />
      </div>
    </div>
    <button class="back-btn" @click="prev">
      <img src="/assets/icons/feedbacks-carousel-prev-btn.svg" alt="" />
    </button>
    <button class="next-btn" @click="next">
      <img src="/assets/icons/feedbacks-carousel-next-btn.svg" alt="" />
    </button>
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
  overflow: visible;
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
  flex: 0 0 var(--card-width);
}

.back-btn,
.next-btn {
  position: absolute;
  top: 50%;
  z-index: 5;
  cursor: pointer;
  transform: translateY(-50%);
  z-index: 10;
  transition: transform 0.2s;

  img {
    width: clamp(3rem, 8vw, 5.5rem);
  }

  &:hover {
    transform: translateY(-2px) translate(0, -50%);
  }
  &:active {
    transform: translateY(0) translate(0, -50%);
  }
}

.back-btn {
  left: var(--horiz-main-padding);
  /* left:0; */
}
.next-btn {
  right: var(--horiz-main-padding);
  /* right: 1.5rem; */
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

@media (min-width: 2200px) {
  .feedbacks-wrapper {
    overflow: hidden;
  }
}

@media (max-width: 690px) {
  .feedbacks > * {
    flex: 0 0 calc(100% - 1.2rem);
  }

  .back-btn,
  .next-btn {
    img {
      width: clamp(4.5rem, 8vw, 8rem);
    }
  }
}
</style>
