<script setup>
import spade from "@/assets/icons/spades-suit.png";
import heart from "@/assets/icons/hearts-suit.png";
import club from "@/assets/icons/clubs-suit.png";
import diamonds from "@/assets/icons/diamonds-suit.png";

const questions = [
  {
    suit: spade,
    heading: "Заголовок",
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius tortor a tincidunt convallis.",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae iste consequatur nemo fugit. Perspiciatis nulla magni quae eos, tempora iusto earum eius delectus quidem quis nemo, asperiores, a vitae praesentium. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis asperiores reprehenderit illo voluptates praesentium possimus sed repellat, dolorum dolor. Commodi placeat iusto possimus animi perspiciatis qui dignissimos deleniti. Laboriosam, molestias? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aliquam aspernatur quasi fugit consectetur excepturi nostrum, sed, incidunt eos alias esse corrupti nemo odio consequuntur debitis illo assumenda magnam quo.",
  },
  {
    suit: heart,
    heading: "Заголовок",
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius tortor a tincidunt convallis.",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae iste consequatur nemo fugit. Perspiciatis nulla magni quae eos, tempora iusto earum eius delectus quidem quis nemo, asperiores, a vitae praesentium. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis asperiores reprehenderit illo voluptates praesentium possimus sed repellat, dolorum dolor. Commodi placeat iusto possimus animi perspiciatis qui dignissimos deleniti. Laboriosam, molestias? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aliquam aspernatur quasi fugit consectetur excepturi nostrum, sed, incidunt eos alias esse corrupti nemo odio consequuntur debitis illo assumenda magnam quo.",
  },
  {
    suit: club,
    heading: "Заголовок",
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius tortor a tincidunt convallis.",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae iste consequatur nemo fugit. Perspiciatis nulla magni quae eos, tempora iusto earum eius delectus quidem quis nemo, asperiores, a vitae praesentium. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis asperiores reprehenderit illo voluptates praesentium possimus sed repellat, dolorum dolor. Commodi placeat iusto possimus animi perspiciatis qui dignissimos deleniti. Laboriosam, molestias? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aliquam aspernatur quasi fugit consectetur excepturi nostrum, sed, incidunt eos alias esse corrupti nemo odio consequuntur debitis illo assumenda magnam quo.",
  },
  {
    suit: diamonds,
    heading: "Заголовок",
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius tortor a tincidunt convallis.",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae iste consequatur nemo fugit. Perspiciatis nulla magni quae eos, tempora iusto earum eius delectus quidem quis nemo, asperiores, a vitae praesentium. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis asperiores reprehenderit illo voluptates praesentium possimus sed repellat, dolorum dolor. Commodi placeat iusto possimus animi perspiciatis qui dignissimos deleniti. Laboriosam, molestias? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aliquam aspernatur quasi fugit consectetur excepturi nostrum, sed, incidunt eos alias esse corrupti nemo odio consequuntur debitis illo assumenda magnam quo.",
  },
];

const openedCardIdx = ref(null);

function toggleCard(idx) {
  openedCardIdx.value = openedCardIdx.value === idx ? null : idx;
}
</script>

<template>
  <section class="faq-section" id="faq">
    <h2>Вопросы-ответы</h2>
    <div class="faq-cards">
      <FAQCard
        v-for="(q, index) in questions"
        :card="q"
        :key="index"
        :isOpen="openedCardIdx === index"
        @toggle="() => toggleCard(index)"
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

/* (1024px–1279px) */
@media (max-width: 1279px) {
  .faq-cards {
    display: grid;
    grid-template-columns: 35rem 35rem;
    justify-items: center;
  }
  .faq-cards > *:nth-child(2n + 1) {
    justify-self: end;
  }
  .faq-cards > *:nth-child(2n) {
    justify-self: start;
  }
}
@media (max-width: 850px) {
  .faq-cards {
    display: flex;
    flex-direction: column;
  }
}
</style>
