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
  padding: clamp(2.4rem, 3vw, 4rem);
  border-radius: 2rem;
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
  font-size: clamp(2rem, 2.4vw, 4rem);
}
.price {
  font-size: clamp(4rem, 4.5vw, 7rem);
  font-weight: 700;
}
.sub-heading {
  font-size: clamp(1.8rem, 2.2vw, 3.2rem);
  font-weight: 400;
}
.card-desc {
  font-size: clamp(1rem, 1.4vw, 2rem);
  font-weight: 400;
}

.order-btn {
  background-color: rgba(37, 37, 37, 0.5);
  font-size: clamp(2rem, 2vw, 4rem);
  font-weight: 400;
  border-radius: 4rem;
  padding: 1rem;
  margin-top: 40%;
}

/* (1024px–1279px) */
@media (max-width: 1279px) {
}

@media (max-width: 1024px) {
  .rent-heading {
    font-size: clamp(2rem, 2vw, 3rem);
  }
  .price {
    font-size: clamp(3.2rem, 3.5vw, 5.6rem);
  }
  .sub-heading {
    font-size: clamp(1.4rem, 1.8vw, 2.6rem);
  }
  .card-desc {
    font-size: clamp(0.9rem, 1.2vw, 1.6rem);
  }
  .order-btn {
    font-size: clamp(1.6rem, 1.6vw, 3.2rem);
  }
}

/* (–767px) */
@media (max-width: 767px) {
  .rent-heading {
    font-size: clamp(2rem, 3.5vw, 4rem);
  }
  .price {
    font-size: clamp(4rem, 4.8vw, 7rem);
  }
  .sub-heading {
    font-size: clamp(2rem, 3.2vw, 3.2rem);
  }
  .card-desc {
    font-size: clamp(1.5rem, 2.2vw, 2rem);
  }
  .order-btn {
    font-size: clamp(2.5rem, 2.5vw, 4rem);
  }
}

/* (-590px) */
@media (max-width: 590px) {
  .rent-card {
    width: clamp(30rem, 5.5vw, 45rem);
  }
}
</style>
