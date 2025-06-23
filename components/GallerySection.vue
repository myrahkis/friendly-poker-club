<script setup></script>

<template>
  <section class="gallery-section">
    <h2>Галерея</h2>
    <div class="gallery-grid">
      <div class="grid-cell-1">
        <img src="/assets/images/galleryImg1.png" alt="" />
      </div>
      <div class="grid-cell-2">
        <img src="/assets/images/galleryImg2.png" alt="" />
      </div>
      <div class="grid-cell-3">
        <img src="/assets/images/galleryImg3.png" alt="" />
      </div>
      <div class="grid-cell-4">
        <img src="/assets/images/galleryImg4.png" alt="" />
      </div>
      <div class="grid-cell-5">
        <img src="/assets/images/galleryImg5.png" alt="" />
      </div>
    </div>
    <button class="gallery-btn">Подробнее</button>
  </section>
</template>

<style scoped>
.gallery-section {
  display: flex;
  flex-direction: column;
  padding: 0 var(--horiz-main-padding);
  padding-bottom: 5rem;
}

.gallery-grid {
  /* overflow: hidden; */
  display: grid;
  grid-template-columns: repeat(7, 0.25fr);
  grid-template-rows: 0.7fr 0.25fr auto;
  gap: 1rem;
}

.grid-cell-1,
.grid-cell-2,
.grid-cell-3,
.grid-cell-4,
.grid-cell-5 {
  overflow: hidden;
  
  img {
    border-radius: 2rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.grid-cell-1 {
  grid-column: 1 / 4;
  grid-row: 1 / 3;
}
.grid-cell-2 {
  grid-column: 4 / -1;
  grid-row: 1 / 2;
}
.grid-cell-3 {
  grid-column: 1 / 4;
  grid-row: 3 / -1;
}
.grid-cell-4 {
  grid-column: 4 / 6;
  grid-row: 2 / -1;
}
.grid-cell-5 {
  grid-column: 6 / -1;
  grid-row: 2 / -1;
}

.gallery-btn {
  width: 40%;
  font-size: clamp(1.3rem, 1.5vw, 2rem);
  font-weight: 400;
  margin-top: 2rem;
  align-self: center;
  background-color: rgba(37, 37, 37, 0.3);
  border: 1px solid var(--light-gradient-color);
  border-radius: 3rem;
  padding: 1.5rem 2rem;
}

/* (480px–767px) */
@media (max-width: 767px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 0.5fr);
    grid-template-rows: 0.4fr 0.15fr 0.8fr 0.4fr;
    gap: 0.5rem;
  }
  .grid-cell-1,
  .grid-cell-2,
  .grid-cell-3,
  .grid-cell-4,
  .grid-cell-5 {
    img {
      border-radius: 1.5rem;
    }
  }
  .grid-cell-1 {
    grid-column: 1 / 2;
    grid-row: 1;
  }
  .grid-cell-2 {
    grid-column: 2 / -1;
    grid-row: 1 / 3;
  }
  .grid-cell-3 {
    grid-column: 1 / 2;
    grid-row: 2 / 4;
  }
  .grid-cell-4 {
    grid-column: 2 / -1;
    grid-row: 3 / 4;
  }
  .grid-cell-5 {
    grid-column: 1 / -1;
    grid-row: 4 / -1;
  }
}
</style>
