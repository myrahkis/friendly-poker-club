<script setup>
const { card } = defineProps({ card: Object });
const { heading, price, subHeading, desc } = card;
</script>

<template>
  <div class="rent-card">
    <div class="card-info">
      <h4 class="rent-heading">{{ heading }}</h4>
      <p class="price">{{ price }}</p>
      <p class="sub-heading">{{ subHeading }}</p>
      <p class="card-desc">{{ desc }}</p>
    </div>
    <button class="order-btn">Заказать</button>
  </div>
</template>

<style scoped>
.rent-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3rem 4rem;
  background-color: #063293;
  border-radius: 2rem;
  height: 60rem;
}
.card-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.rent-heading {
  font-size: 4rem;
}
.price {
  font-size: 7rem;
  font-weight: 700;
}
.sub-heading {
  font-size: 3.2rem;
  font-weight: 400;
}
.card-desc {
  font-size: 2rem;
  font-weight: 400;
}
.order-btn {
  background-color: #132544;
  font-size: 4rem;
  font-weight: 400;
  border-radius: 4rem;
  padding: 1rem;
}
</style>
