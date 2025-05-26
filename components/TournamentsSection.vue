<script setup>
const tournaments = [
  {
    date: `${new Date().getDate()} Мая`,
    dayOfWeek: "ПН",
    heading: "Заголовок карточки в две строки",
    schedule: [
      {
        time: `${new Date().getHours()}:${new Date().getMinutes()}`,
        text: "At vero eos et accusamus et iusto odio dignissimos",
      },
      {
        time: `${new Date().getHours()}:${new Date().getMinutes()}`,
        text: "At vero eos et accusamus et iusto odio dignissimos",
      },
      {
        time: `${new Date().getHours()}:${new Date().getMinutes()}`,
        text: "At vero eos et accusamus et iusto odio dignissimos",
      },
    ],
  },
  {
    date: `${new Date().getDate()} Мая`,
    dayOfWeek: "ВТ",
    heading: "Заголовок карточки в две строки",
    schedule: [
      {
        time: `${new Date().getHours()}:${new Date().getMinutes()}`,
        text: "At vero eos et accusamus et iusto odio dignissimos",
      },
      {
        time: `${new Date().getHours()}:${new Date().getMinutes()}`,
        text: "At vero eos et accusamus et iusto odio dignissimos",
      },
      {
        time: `${new Date().getHours()}:${new Date().getMinutes()}`,
        text: "At vero eos et accusamus et iusto odio dignissimos",
      },
    ],
  },
  {
    date: `${new Date().getDate()} Мая`,
    dayOfWeek: "СР",
    heading: "Заголовок карточки в две строки",
    schedule: [
      {
        time: `${new Date().getHours()}:${new Date().getMinutes()}`,
        text: "At vero eos et accusamus et iusto odio dignissimos",
      },
      {
        time: `${new Date().getHours()}:${new Date().getMinutes()}`,
        text: "At vero eos et accusamus et iusto odio dignissimos",
      },
      {
        time: `${new Date().getHours()}:${new Date().getMinutes()}`,
        text: "At vero eos et accusamus et iusto odio dignissimos",
      },
    ],
  },
  {
    date: `${new Date().getDate()} Мая`,
    dayOfWeek: "ЧТ",
    heading: "Заголовок карточки в две строки",
    schedule: [
      {
        time: `${new Date().getHours()}:${new Date().getMinutes()}`,
        text: "At vero eos et accusamus et iusto odio dignissimos",
      },
      {
        time: `${new Date().getHours()}:${new Date().getMinutes()}`,
        text: "At vero eos et accusamus et iusto odio dignissimos",
      },
      {
        time: `${new Date().getHours()}:${new Date().getMinutes()}`,
        text: "At vero eos et accusamus et iusto odio dignissimos",
      },
    ],
  },
  {
    date: `${new Date().getDate()} Мая`,
    dayOfWeek: "ПТ",
    heading: "Заголовок карточки в две строки",
    schedule: [
      {
        time: `${new Date().getHours()}:${new Date().getMinutes()}`,
        text: "At vero eos et accusamus et iusto odio dignissimos",
      },
      {
        time: `${new Date().getHours()}:${new Date().getMinutes()}`,
        text: "At vero eos et accusamus et iusto odio dignissimos",
      },
      {
        time: `${new Date().getHours()}:${new Date().getMinutes()}`,
        text: "At vero eos et accusamus et iusto odio dignissimos",
      },
    ],
  },
  {
    date: `${new Date().getDate()} Мая`,
    dayOfWeek: "СБ",
    heading: "Заголовок карточки в две строки",
    schedule: [
      {
        time: `${new Date().getHours()}:${new Date().getMinutes()}`,
        text: "At vero eos et accusamus et iusto odio dignissimos",
      },
      {
        time: `${new Date().getHours()}:${new Date().getMinutes()}`,
        text: "At vero eos et accusamus et iusto odio dignissimos",
      },
      {
        time: `${new Date().getHours()}:${new Date().getMinutes()}`,
        text: "At vero eos et accusamus et iusto odio dignissimos",
      },
    ],
  },
  {
    date: `${new Date().getDate()} Мая`,
    dayOfWeek: "ВС",
    heading: "Заголовок карточки в две строки",
    schedule: [
      {
        time: `${new Date().getHours()}:${new Date().getMinutes()}`,
        text: "At vero eos et accusamus et iusto odio dignissimos",
      },
      {
        time: `${new Date().getHours()}:${new Date().getMinutes()}`,
        text: "At vero eos et accusamus et iusto odio dignissimos",
      },
      {
        time: `${new Date().getHours()}:${new Date().getMinutes()}`,
        text: "At vero eos et accusamus et iusto odio dignissimos",
      },
    ],
  },
  {
    date: `${new Date().getDate()} Мая`,
    dayOfWeek: "ПН",
    heading: "Заголовок карточки в две строки",
    schedule: [
      {
        time: `${new Date().getHours()}:${new Date().getMinutes()}`,
        text: "At vero eos et accusamus et iusto odio dignissimos",
      },
      {
        time: `${new Date().getHours()}:${new Date().getMinutes()}`,
        text: "At vero eos et accusamus et iusto odio dignissimos",
      },
      {
        time: `${new Date().getHours()}:${new Date().getMinutes()}`,
        text: "At vero eos et accusamus et iusto odio dignissimos",
      },
    ],
  },
];
</script>

<template>
  <section class="tournaments-section">
    <h2>Турниры</h2>
    <div class="tournaments-grid">
      <TournamentCard
        v-for="(tournament, index) in tournaments"
        :tournament="tournament"
        :key="index"
        :index="index"
        :lastIndex="tournaments.length - 1"
      />
    </div>
    <img class="bg-spades-img" src="/assets/images/bg-spades.png" alt="" />
    <img class="bg-diamonds-img" src="/assets/images/bg-diamonds.png" alt="" />
    <img class="bg-clubs-img" src="/assets/images/bg-clubs.png" alt="" />
  </section>
</template>

<style scoped>
.tournaments-section {
  position: relative;
  padding: 0 var(--horiz-main-padding);
}

.tournaments-grid {
  display: grid;
  grid-template-columns: repeat(4, 0.5fr);
  grid-template-rows: auto;
  gap: 1.5rem;
}

.bg-spades-img {
  position: absolute;
  top: 5rem;
  right: 11rem;
  z-index: -1;
  width: 20rem;
}
.bg-diamonds-img {
  position: absolute;
  top: 30rem;
  left: 23rem;
  z-index: -1;
  width: 15rem;
}
.bg-clubs-img {
  position: absolute;
  bottom: 0rem;
  right: 42rem;
  z-index: -1;
  transform: translateY(8rem);
  width: 20rem;
}
</style>
