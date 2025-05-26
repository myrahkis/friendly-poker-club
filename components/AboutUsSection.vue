<script setup></script>

<template>
  <section class="about-us-section" id="about-us">
    <h2>О нас</h2>
    <div class="about-us-wrapper">
      <div class="about-us-into">
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga.
        </p>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius
          tortor a tincidunt convallis. Fusce consectetur sed leo ut rutrum.
        </p>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga.
        </p>
      </div>
      <div class="about-us-carousel">
        <button class="carousel-prev">
          <img class="carousel-btn" src="/assets/icons/btn-back.svg" alt="" />
        </button>
        <img
          class="carousel-img"
          src="/assets/images/carousel-placeholder.png"
          alt=""
        />
        <button class="carousel-next">
          <img class="carousel-btn" src="/assets/icons/btn-next.svg" alt="" />
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-us-section {
  position: relative;
  z-index: 3;
  /* height: 100vh; */
  padding: 0 var(--horiz-main-padding);
  padding-bottom: 5rem;
  /* background-color: red; */
}

.about-us-wrapper {
  display: flex;
  background-color: var(--dark-bg-color);
  border: 2px solid var(--light-gradient-color);
  border-radius: 3rem;
  position: relative;
  overflow: visible;
}
.about-us-into {
  display: flex;
  flex-direction: column;
  padding: 3.5rem;
  gap: 2rem;
  width: 40%;

  p {
    font-size: 2rem;
    font-weight: 400;
  }
}

.about-us-carousel {
  position: relative;
  margin: -4px;
  z-index: 1;
  width: calc(60% + 6px);
  height: calc(100% + 4px);
}
.carousel-img {
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 3rem;
}

.carousel-btn {
  width: 8rem;
}
.carousel-prev,
.carousel-next {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  z-index: 2;
}
.carousel-prev {
  left: 2rem;
}
.carousel-next {
  right: 2rem;
}
</style>
