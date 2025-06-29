<script setup>
const { feedback } = defineProps({ feedback: Object });

const { date, stars, avatar, name, userText, feedbackText } = feedback;
</script>

<template>
  <div class="feedback-card">
    <div class="header">
      <div class="feedback-date-rating-wrapper">
        <p class="date">{{ date }}</p>
        <div class="feedback-stars">
          <img
            v-for="star in stars"
            :key="star"
            class="feedback-star"
            src="/assets/icons/feedback-star.svg"
            alt=""
          />
        </div>
      </div>
      <div class="header-row">
        <div class="ava-placeholder"></div>
        <!-- <img :src="avatar" alt="" /> -->
        <div class="user-info">
          <p class="user-name">{{ name }}</p>
          <p>{{ userText }}</p>
        </div>
      </div>
    </div>
    <hr class="separator" />
    <p class="description">{{ feedbackText }}</p>
    <div class="footer">
      <div class="ava-placeholder-2"></div>
      <!-- <img :src="avatar" alt="" /> -->
      <p>{{ userText }}</p>
    </div>
  </div>
</template>

<style scoped>
.feedback-card {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border: 1px solid var(--light-gradient-color);
  border-radius: 2rem;
  background-color: rgba(37, 37, 37, 0.2);
  padding: 2rem;
  backdrop-filter: blur(3px);
}

.header {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.header-row {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}
.feedback-date-rating-wrapper {
  display: flex;
  justify-content: space-between;
}
.feedback-stars {
  display: flex;
  gap: 0.5rem;
}
.feedback-star {
  width: 2rem;
}
.user-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.user-name {
  font-size: 2rem;
  font-weight: 700;
}
.ava-placeholder {
  background-color: white;
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
}

.description {
  font-size: clamp(1.4rem, 2.2vw, 1.6rem);
  font-weight: 400;
  margin-bottom: 15%;
}

.footer {
  display: flex;
  gap: 1.5rem;
  align-items: center;

  p {
    font-weight: 700;
  }
}
.ava-placeholder-2 {
  background-color: white;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
}
</style>
