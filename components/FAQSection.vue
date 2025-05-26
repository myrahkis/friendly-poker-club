<script setup>
import spade from "@/assets/icons/spades-suit.png";
import heart from "@/assets/icons/hearts-suit.png";
import club from "@/assets/icons/clubs-suit.png";
import diamonds from "@/assets/icons/diamonds-suit.png";
</script>

<template>
  <section class="faq-section" id="faq">
    <h2>Вопросы-ответы</h2>
    <div class="faq-cards">
      <FAQCard
        :suit="spade"
        heading="Заголовок"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius tortor a tincidunt convallis. Fusce consectetur sed leo ut rutrum. Sed ornare, nisl vitae fringilla tristique, nisi ante iaculis nisl, et tincidunt odio leo in leo. Praesent enim orci, iaculis at sem eget, gravida porttitor urna. Mauris a interdum diam. Donec nec faucibus neque. Aenean ac felis vitae tellus viverra blandit sed et nisi. Ut quis tincidunt eros. Nunc sed quam eros. "
      />
      <FAQCard
        :suit="heart"
        heading="Заголовок"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius tortor a tincidunt convallis. Fusce consectetur sed leo ut rutrum. Sed ornare, nisl vitae fringilla tristique, nisi ante iaculis nisl, et tincidunt odio leo in leo. Praesent enim orci, iaculis at sem eget, gravida porttitor urna. Mauris a interdum diam. Donec nec faucibus neque. Aenean ac felis vitae tellus viverra blandit sed et nisi. Ut quis tincidunt eros. Nunc sed quam eros. "
      />
      <FAQCard
        :suit="club"
        heading="Заголовок"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius tortor a tincidunt convallis. Fusce consectetur sed leo ut rutrum. Sed ornare, nisl vitae fringilla tristique, nisi ante iaculis nisl, et tincidunt odio leo in leo. Praesent enim orci, iaculis at sem eget, gravida porttitor urna. Mauris a interdum diam. Donec nec faucibus neque. Aenean ac felis vitae tellus viverra blandit sed et nisi. Ut quis tincidunt eros. Nunc sed quam eros. "
      />
      <FAQCard
        :suit="diamonds"
        heading="Заголовок"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius tortor a tincidunt convallis. Fusce consectetur sed leo ut rutrum. Sed ornare, nisl vitae fringilla tristique, nisi ante iaculis nisl, et tincidunt odio leo in leo. Praesent enim orci, iaculis at sem eget, gravida porttitor urna. Mauris a interdum diam. Donec nec faucibus neque. Aenean ac felis vitae tellus viverra blandit sed et nisi. Ut quis tincidunt eros. Nunc sed quam eros. "
      />
    </div>
    <img class="bg-chip-full-1" src="/assets/images/chip-bg-full.png" alt="" />
    <img class="bg-chip-full-2" src="/assets/images/chip-bg-full.png" alt="" />
  </section>
</template>

<style scoped>
.faq-section {
  position: relative;
  padding: 0 var(--horiz-main-padding);
  padding-bottom: 5rem;
  margin-top: 5rem;
}
.faq-cards {
  display: flex;
  justify-content: center;
  gap: 2.5rem;
}

.bg-chip-full-1,
.bg-chip-full-2 {
  position: absolute;
  width: 25rem;
  z-index: -1;
}

.bg-chip-full-1 {
  top: 1rem;
  right: 28rem;
  transform: rotate(-68deg);
}
.bg-chip-full-2 {
  left: 38rem;
  bottom: 0;
  transform: translateY(5rem);
}
</style>
