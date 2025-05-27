<script setup>
const { card } = defineProps({ card: Object });
const { heading, price, subHeading, desc, bg } = card;
</script>

<template>
  <div class="rent-card" :style="{ backgroundImage: `url(${bg})` }">
    <div class="card-info">
      <h4 class="rent-heading">{{ heading }}</h4>
      <p class="price">{{ price }}</p>
      <p class="sub-heading">{{ subHeading }}</p>
      <p class="card-desc">{{ desc }}</p>
    </div>
    <button class="order-btn u-shimmering-gradient-hover">Заказать</button>
  </div>
</template>

<style scoped>
.rent-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3rem 4rem;
  /* background-color: #063293; */
  border-radius: 2rem;
  height: 60rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
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
  background-color: rgba(37, 37, 37, 0.5);
  font-size: 4rem;
  font-weight: 400;
  border-radius: 4rem;
  padding: 1rem;
}
</style>
