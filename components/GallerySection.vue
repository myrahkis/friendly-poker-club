<script setup></script>

<template>
  <section class="gallery-section">
    <h2>Галерея</h2>
    <div class="gallery-grid">
      <div class="grid-cell-1">
        <img src="/assets/images/galleryImg1.webp" alt="" />
      </div>
      <div class="grid-cell-2">
        <img src="/assets/images/galleryImg2.webp" alt="" />
      </div>
      <div class="grid-cell-3">
        <img src="/assets/images/galleryImg3.webp" alt="" />
      </div>
      <div class="grid-cell-4">
        <img src="/assets/images/galleryImg4.webp" alt="" />
      </div>
      <div class="grid-cell-5">
        <img src="/assets/images/1.webp" alt="" />
      </div>
      <button class="gallery-btn">Подробнее</button>
    </div>
  </section>
</template>

<style scoped>
.gallery-section {
  display: flex;
  flex-direction: column;
  padding: 0 var(--horiz-main-padding);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(7, 0.25fr);
  grid-template-rows: 0.3fr 0.15fr 0.35fr auto;
  gap: 1rem;
  height: fit-content;
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

  img {
    object-position: 0 63%;
  }
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

  img {
    object-position: 30% 0;
  }
}

.gallery-btn {
  width: 25%;
  font-size: clamp(1.3rem, 1.5vw, 2rem);
  font-weight: 400;
  justify-self: center;
  align-self: center;
  background-color: rgba(37, 37, 37, 0.3);
  border: 1px solid var(--light-gradient-color);
  border-radius: 3rem;
  padding: 1.5rem 2rem;
  grid-column: 1 / -1;
}

/* (480px–767px) */
@media (max-width: 767px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 0.5fr);
    grid-template-rows: 0.3fr 0.4fr 0.55fr auto;
    gap: 1.5rem;
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
    grid-row: 2;
  }
  .grid-cell-2 {
    grid-column: 1 / -1;
    grid-row: 1;
  }
  .grid-cell-3 {
    grid-column: 2 / -1;
    grid-row: 2;
  }
  .grid-cell-4 {
    grid-column: 1 / 2;
    grid-row: 3;
  }
  .grid-cell-5 {
    grid-column: 2 / -1;
    grid-row: 3;
  }
  .gallery-btn {
    width: 45%;
    margin-top: 2rem;
  }
}
@media (max-width: 450px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 0.5fr);
    grid-template-rows: 0.3fr 0.4fr 0.55fr auto;
    gap: 0.8rem;
  }
}
</style>
