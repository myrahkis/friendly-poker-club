<script setup>
const feedbacks = [
  {
    date: `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}`,
    avatar: "",
    name: "Имя Фамилия",
    userText: "Lorem ipsum dolor sit amet.",
    feedbackText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius tortor a tincidunt convallis. Fusce consectetur sed leo ut rutrum. Sed ornare, nisl vitae fringilla tristique, nisi ante iaculis nisl, et tincidunt odio leo in leo. ",
  },
  {
    date: `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}`,
    avatar: "",
    name: "Имя Фамилия",
    userText: "Lorem ipsum dolor sit amet.",
    feedbackText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius tortor a tincidunt convallis. Fusce consectetur sed leo ut rutrum. Sed ornare, nisl vitae fringilla tristique, nisi ante iaculis nisl, et tincidunt odio leo in leo. ",
  },
  {
    date: `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}`,
    avatar: "",
    name: "Имя Фамилия",
    userText: "Lorem ipsum dolor sit amet.",
    feedbackText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius tortor a tincidunt convallis. Fusce consectetur sed leo ut rutrum. Sed ornare, nisl vitae fringilla tristique, nisi ante iaculis nisl, et tincidunt odio leo in leo. ",
  },
];
</script>

<template>
  <section class="feedback-section">
    <h2>Отзывы о клубе</h2>
    <div class="feedbacks">
      <img class="back-btn" src="/assets/icons/btn-back.svg" alt="" />
      <FeedbackCard
        v-for="(feedback, index) in feedbacks"
        :key="index"
        :feedback="feedback"
      />
      <img class="next-btn" src="/assets/icons/btn-next.svg" alt="" />
    </div>
    <img class="bg-hearts" src="/assets/images/bg-hearts.png" alt="" />
    <img class="bg-clubs" src="/assets/images/bg-clubs.png" alt="" />
  </section>
</template>

<style scoped>
.feedback-section {
  position: relative;
  /* height: 100vh; */
  padding: 0 5rem;
  padding-bottom: 5rem;
}

.feedbacks {
  position: relative;
  display: flex;
  gap: 1rem;
}

.back-btn,
.next-btn {
  cursor: pointer;
  position: absolute;
  width: 7rem;
  z-index: 3;
}
.back-btn {
  left: 2rem;
  top: 50%;
  transform: translate(0, -50%);
}
.next-btn {
  right: 2rem;
  top: 50%;
  transform: translate(0, -50%);
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
