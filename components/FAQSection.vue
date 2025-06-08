<script setup>
import spade from "@/assets/icons/spades-suit.png";
import heart from "@/assets/icons/hearts-suit.png";
import club from "@/assets/icons/clubs-suit.png";
import diamonds from "@/assets/icons/diamonds-suit.png";

const questions = [
  {
    suit: spade,
    heading: "А это законно?",
    question: "Я слышал покер запрещён вне специализированных игорных зон!",
    answer:
      "Сама игра в покер не запрещена, так же, как и не запрещена игра в мафию, нарды или шахматы! Законом РФ (<a href='https://www.consultant.ru/document/cons_doc_LAW_10699/b20820739fab5a2c2645f2c2dba2d73e9025f6e4/' target='_blank'>ст.171.2. УК РФ</a> и <a href='https://www.consultant.ru/document/cons_doc_LAW_34661/02c930dba802b5fb1564b5635a40d3a4e0e30ee8/' target='_blank'>ст.14.1.1. КоАП РФ</a>) запрещена организация и проведение азартных игр. Согласно данным статьям, азартная игра — это основанное на риске соглашение о выигрыше денежных средств. Т.е. простыми словами – если игра ведётся на деньги или любые другие материальные ценности или права, то такая игра является азартной. В нашем клубе игра проводится без использования каких-либо денежных средств и не предусматривает никакого денежного или любого другого материального выигрыша. Таким образом игра в нашем клубе, будь то покер или любая другая игра, не является азартной, а значит абсолютно легальна!",
  },
  {
    suit: heart,
    heading: "Где поиграть?",
    question: "Где я могу поиграть в офлайн покер не на деньги?       ",
    answer:
      "В настоящий момент наш клуб открыт в Москве и в Рязани. В ближайшее время наши филиалы будут открываться и в других регионах России. Следите за новостями в наших соц.сетях.",
  },
  {
    suit: club,
    heading: "Своя компания!",
    question: "Я могу прийти со своей компанией друзей или коллег?       ",
    answer:
      "Да, мы можем организовать для вас различный формат корпоративной игры, в зависимости от количества участников вашей компании. Мы можем предложить вам либо сесть рандомно в общий турнир или выделить для вас персональный стол (столы) и устроить для вас корпоративный турнир (корпоративный чемпионат, корпоративную лигу и т.п.). Обратитесь к нашим администраторам, и мы подберём для вас наиболее комфортные условия проведения мероприятия.",
  },
  {
    suit: diamonds,
    heading: "Не умею играть!",
    question: "Если я или кто-то из моих друзей не умеет играть в покер?",
    answer:
      "Ничего страшного! Главное – это, иметь желание научится играть в эту прекрасную игру. Свяжитесь с нашими администраторами или предупредите их при посещении клуба, и мы обязательно научим вас азам покера и подскажем, где и как получить максимальные знания об игре!",
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
    <img class="bg-dots" src="/assets/images/faq-bg-dots.png" alt="" />
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
  padding: 10rem 0;
}

.bg-chip-full-1,
.bg-chip-full-2 {
  position: absolute;
  width: 25rem;
  z-index: -1;
}

.bg-chip-full-1 {
  top: 1rem;
  right: 18rem;
  transform: rotate(-68deg);
}
.bg-chip-full-2 {
  left: 15rem;
  bottom: 5rem;
  transform: translateY(5rem);
}
.bg-dots {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: -1;
  transform: translate(-50%, -50%);
  width: 50%;
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
  .faq-cards {
    padding: 0;
  }
}
</style>
