<script setup>
const { suit, heading, text } = defineProps({
  suit: String,
  heading: String,
  text: String,
});
</script>

<template>
  <div class="faq-card">
    <div class="card-inner">
      <div class="card-front">
        <div class="header">
          <img class="header-suit" :src="suit" alt="card-suit" />
          <h4>{{ heading }}</h4>
        </div>
        <p class="text">{{ text }}</p>
        <div class="footer">
          <img class="footer-suit" :src="suit" alt="card-suit" />
        </div>
      </div>
      <div class="card-back">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae
          iste consequatur nemo fugit. Perspiciatis nulla magni quae eos,
          tempora iusto earum eius delectus quidem quis nemo, asperiores, a
          vitae praesentium. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Perspiciatis asperiores reprehenderit illo voluptates
          praesentium possimus sed repellat, dolorum dolor. Commodi placeat
          iusto possimus animi perspiciatis qui dignissimos deleniti.
          Laboriosam, molestias? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eum aliquam aspernatur quasi fugit consectetur
          excepturi nostrum, sed, incidunt eos alias esse corrupti nemo odio
          consequuntur debitis illo assumenda magnam quo.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.faq-card {
  width: 100%;
  height: auto;
  min-height: 45rem;

  perspective: 150rem;
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
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}
.footer {
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
  width: 100%;
}
.header-suit,
.footer-suit {
  width: 5rem;
}
</style>
