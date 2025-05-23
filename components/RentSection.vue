<script setup>
const rentCards = [
  {
    heading: "Название карточки в две строки",
    price: "65 000 ₽",
    subHeading: "Название карточки:",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    heading: "Название карточки в две строки",
    price: "65 000 ₽",
    subHeading: "Название карточки:",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    heading: "Название карточки в две строки",
    price: "65 000 ₽",
    subHeading: "Название карточки:",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
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
  /* height: 100vh; */
  padding: 0 5rem;
  margin-bottom: 5rem;
}
.rent-cards {
  display: flex;
  gap: 2rem;
  /* justify-content: center; */
}
</style>
