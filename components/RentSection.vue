<script setup>
import rentBg1 from "@/assets/images/rent-bg-1.png";
import rentBg2 from "@/assets/images/rent-bg-2.png";
import rentBg3 from "@/assets/images/rent-bg-3.png";

const rentCards = [
  {
    heading: "Название карточки в две строки",
    price: "65 000 ₽",
    subHeading: "Название карточки:",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    bg: rentBg2,
  },
  {
    heading: "Название карточки в две строки",
    price: "65 000 ₽",
    subHeading: "Название карточки:",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    bg: rentBg1,
  },
  {
    heading: "Название карточки в две строки",
    price: "65 000 ₽",
    subHeading: "Название карточки:",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    bg: rentBg3,
  },
];
</script>

<template>
  <section class="rent-section">
    <h2>Аренда игровых столов</h2>
    <div class="rent-cards">
      <RentCard v-for="(card, index) in rentCards" :key="index" :card="card" />
    </div>
  </section>
</template>

<style scoped>
.rent-section {
  padding: 0 var(--horiz-main-padding);
  margin-bottom: 5rem;
}
.rent-cards {
  display: flex;
  gap: 2rem;
}

/* (–767px) */
@media (max-width: 767px) {
  .rent-cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}

/* (-590px) */
@media (max-width: 590px) {
  .rent-cards {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
