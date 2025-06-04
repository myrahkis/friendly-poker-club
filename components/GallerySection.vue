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
  /* height: 100vh; */
}

.gallery-grid {
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(7, 0.25fr);
  grid-template-rows: 0.2fr 0.3fr 0.46fr;
  gap: 1rem;
  height: fit-content;
}

.grid-cell-1,
.grid-cell-2,
.grid-cell-3,
.grid-cell-4,
.grid-cell-5 {
  /* border-radius: 3rem; */

  img {
    border-radius: 2rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.grid-cell-1 {
  /* background-color: antiquewhite; */
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
  /* background-color: red; */
  grid-column: 4 / 6;
  grid-row: 2 / -1;
}
.grid-cell-5 {
  /* background-color: blue; */
  grid-column: 6 / -1;
  grid-row: 2 / -1;
}

.gallery-btn {
  width: 40%;
  font-size: 2rem;
  font-weight: 400;
  margin-top: 2rem;
  align-self: center;
  background-color: rgba(37, 37, 37, 0.3);
  border: 1px solid var(--light-gradient-color);
  border-radius: 3rem;
  padding: 1.5rem 2rem;
}
</style>
