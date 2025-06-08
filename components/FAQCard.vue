<script setup>
const { card, isOpen } = defineProps({ card: Object, isOpen: Boolean });

const { suit, heading, question, answer } = card;

const emit = defineEmits(["toggle"]);
</script>

<template>
  <div class="faq-card">
    <div class="card-inner">
      <div class="card-front">
        <div class="header">
          <img class="header-suit" :src="suit" alt="card-suit" />
        </div>
        <div class="question">
          <h4>{{ heading }}</h4>
          <p>{{ question }}</p>
        </div>
        <div class="footer">
          <img class="footer-suit" :src="suit" alt="card-suit" />
        </div>
      </div>
      <div class="card-back">
        <p class="answer" v-html="answer"></p>
      </div>
    </div>
  </div>
  <div class="faq-card-mobile">
    <!-- <div :class="['faq-card-mobile', { 'is-open': isOpen }]"> -->
    <div class="top-mobile-card">
      <div>
        <div class="header">
          <img class="header-suit" :src="suit" alt="card-suit" />
          <h4>{{ heading }}</h4>
        </div>
        <p class="text">{{ question }}</p>
      </div>
      <button @click="emit('toggle')" class="card-open-btn">
        <img src="/assets/icons/faq-open-btn.svg" alt="" />
      </button>
    </div>
    <div v-if="isOpen" class="closed-mobile-card">
      <p class="answer" v-html="answer"></p>
      <div class="footer">
        <img class="footer-suit" :src="suit" alt="card-suit" />
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<style scoped>
.faq-card {
  width: 100%;
  height: auto;
  min-height: 45rem;
  backdrop-filter: blur(3px);

  perspective: 150rem;
}
.faq-card-mobile {
  display: none;
}

.card-inner {
  display: grid;
  grid-template-areas: "card";
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.8s ease;
}
.faq-card:hover .card-inner {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  grid-area: card;
  display: flex;
  flex-direction: column;
  background-color: rgba(37, 37, 37, 0.5);
  border: 1px solid var(--light-gradient-color);
  border-radius: 1.5rem;
  padding: 2rem;
  font-size: 1.5rem;
  backface-visibility: hidden;
  backdrop-filter: blur(3px);
}

.card-front {
  transform: rotateY(0deg);
}
.card-back {
  transform: rotateY(180deg);
  align-items: center;
  justify-content: center;
}

.header {
  display: flex;
  /* justify-content: space-between; */
  gap: 1.5rem;
  align-items: center;
  margin-bottom: 1.5rem;
}
.question {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: auto;

  p {
    font-size: 2rem;
  }
  h4 {
    font-size: 3rem;
  }
}
.answer {
  text-align: justify;
  hyphens: auto;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  width: fit-content;
  font-size: clamp(1.2rem, 2.5vw, 1.6rem);
}
:deep(a:link),
:deep(a:visited) {
  color: var(--light-gradient-color);
}
:deep(a:hover) {
  text-decoration: underline;
}

.footer {
  display: flex;
  justify-content: flex-end;
  /* margin-top: auto; */
  width: 100%;
}
.header-suit,
.footer-suit {
  width: 5rem;
}

@media (max-width: 850px) {
  .faq-card {
    display: none;
  }
  .faq-card-mobile {
    /* position: relative; */
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: rgba(37, 37, 37, 0.5);
    border: 1px solid var(--light-gradient-color);
    border-radius: 1.5rem;
    padding: 2rem;
    font-size: 1.5rem;
    backdrop-filter: blur(3px);
  }
  .top-mobile-card {
    position: relative;
    z-index: -1;
    display: flex;
    gap: 0.5rem;
    transition: z-index 0s;
  }
  .faq-card-mobile.is-open {
    z-index: 10;
  }

  .card-open-btn {
    margin-left: auto;

    img {
      width: 4.5rem;
    }
  }

  .header-suit,
  .footer-suit {
    width: 3rem;
  }
  .answer {
    margin-bottom: 2rem;
  }
}
</style>
