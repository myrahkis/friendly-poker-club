<script setup>
const documents = [
  {
    title:
      "ПУБЛИЧНЫЙ ДОГОВОР (ДОГОВОР-ОФЕРТА) НА ОКАЗАНИЕ УСЛУГ ПО ПРОВЕДЕНИЮ РАЗВЛЕКАТЕЛЬНЫХ МЕРОПРИЯТИЙ",
    doc: "DOC 1",
  },
  {
    title:
      "Дополнительное соглашение к публичному договору на оказание услуг по проведению развлекательных мероприятий",
    doc: "DOC 2",
  },
  {
    title:
      "Приложение №1 к Публичному Договору На оказание услуг по проведению развлекательных мероприятий",
    doc: "DOC 3",
  },
  {
    title: "Политика в отношении обработки персональных данных",
    doc: "DOC 4",
  },
];

const openedDocIdx = ref(null);

function toggleDoc(idx) {
  openedDocIdx.value = openedDocIdx.value === idx ? null : idx;
}
</script>

<template>
  <section class="legal-information-section" id="documents">
    <h2>Правовая информация</h2>
    <div class="documents-wrapper">
      <div
        class="document"
        v-for="({ title, doc }, index) in documents"
        :key="index"
        @click="toggleDoc(index)"
      >
        <div class="document-row">
          <p>{{ title }}</p>
          <button
            class="open-doc-btn"
            :class="{ open: openedDocIdx === index }"
          >
            <img src="/assets/icons/faq-open-btn.svg" alt="" />
          </button>
        </div>
        <transition name="slide-fade">
          <div v-show="openedDocIdx === index" class="doc-content">
            {{ doc }}
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<style scoped>
.legal-information-section {
  padding: 0 var(--horiz-main-padding);
  margin-bottom: 5rem;
}

.documents-wrapper {
  background-color: rgba(3, 3, 3, 0.3);
  border-radius: 2rem;
  padding: 2.5rem 1.5rem;
}
.document-row {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  align-items: center;
  padding: 2rem 1.5rem;
  transition: background-color 0.2s;

  &:not(:last-child) {
    border-bottom: 1px solid transparent;
    border-image-source: linear-gradient(
      to right,
      var(--dark-gradient-color),
      var(--light-gradient-color)
    );
    border-image-slice: 1;
  }
  &:first-child {
    border-top: 1px solid transparent;
    border-image-source: linear-gradient(
      to right,
      var(--dark-gradient-color),
      var(--light-gradient-color)
    );
    border-image-slice: 1;
  }

  p {
    font-size: clamp(1.3rem, 2vw, 1.7rem);
  }

  &:hover {
    background-color: rgba(3, 3, 3, 0.1);
  }
}

.doc-content {
  padding: 2rem 1.5rem;
  font-size: 1.8rem;
}

.open-doc-btn {
  img {
    width: 4.5rem;
  }
}
.open-doc-btn.open {
  transform: rotate(180deg);
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}
.slide-fade-enter-from {
  max-height: 0;
  opacity: 0;
  padding-top: 0;
  padding-bottom: 0;
}
.slide-fade-enter-to {
  opacity: 1;
  padding: 2rem 1.5rem;
}
.slide-fade-leave-from {
  opacity: 1;
  padding: 2rem 1.5rem;
}
.slide-fade-leave-to {
  max-height: 0;
  opacity: 0;
  padding-top: 0;
  padding-bottom: 0;
}
</style>
