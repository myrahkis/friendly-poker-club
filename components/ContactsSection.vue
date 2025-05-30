<script setup></script>

<template>
  <section class="contacts-section" id="contacts">
    <h2>Контакты</h2>
    <p class="text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius
      tortor a tincidunt convallis. Fusce consectetur sed leo ut rutrum. Sed
      ornare, nisl vitae fringilla tristique, nisi ante iaculis nisl, et
      tincidunt odio leo in leo. Praesent enim orci, iaculis at sem eget,
      gravida porttitor urna. Mauris a interdum diam.
    </p>
    <div class="contacts-map">
      <ContactsInfoBlock bgColor="#021b46" />
      <div class="map">MAP</div>
    </div>
    <div class="btns">
      <button class="contacts-btn u-shimmering-gradient-hover">
        Lorem ipsum dolor sit amet
      </button>
      <button class="contacts-btn u-shimmering-gradient-hover">
        Lorem ipsum dolor sit amet
      </button>
    </div>
  </section>
</template>

<style scoped>
.contacts-section {
  position: relative;
  z-index: 1;
  padding: 0 var(--horiz-main-padding);
  padding-bottom: 5rem;
}
.contacts-map {
  display: flex;
  gap: 1rem;
  margin: 3rem 0;
}

.text {
  width: 80%;
}

.map {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 8rem;
  width: 60%;
  border: 1px solid var(--light-gradient-color);
  border-radius: 2rem;
}

.btns {
  display: flex;
  justify-content: center;
  gap: 1rem;
  /* width: 100%; */
}
.contacts-btn {
  background-color: rgba(37, 37, 37, 0.3);
  padding: 1rem 1.5rem;
  border: 1px solid var(--light-gradient-color);
  border-radius: 3rem;
  font-size: clamp(1.5rem, 2.2vw, 3rem);
  width: 40%;
}

@media (max-width: 690px) {
  .contacts-map {
    flex-direction: column;
  }
  .text {
    width: 100%;
  }
  .map {
    width: 100%;
  }
}
</style>
