<script setup>
const openedDocIdx = ref(null);

function toggleDoc(idx) {
  openedDocIdx.value = openedDocIdx.value === idx ? null : idx;
}
</script>

<template>
  <section class="legal-information-section" id="documents">
    <h2>Правовая информация</h2>
    <div class="documents-wrapper">
      <details class="document-row">
        <summary class="document-row-summary">
          <p>
            ПУБЛИЧНЫЙ ДОГОВОР (ДОГОВОР-ОФЕРТА) НА ОКАЗАНИЕ УСЛУГ ПО ПРОВЕДЕНИЮ
            РАЗВЛЕКАТЕЛЬНЫХ МЕРОПРИЯТИЙ
          </p>
        </summary>
        <div class="doc-content">DOC 1</div>
      </details>
      <details class="document-row">
        <summary class="document-row-summary">
          <p>
            Дополнительное соглашение к публичному договору на оказание услуг по
            проведению развлекательных мероприятий
          </p>
        </summary>
        <div class="doc-content">DOC 2</div>
      </details>
      <details class="document-row">
        <summary class="document-row-summary">
          <p>
            Приложение №1 к Публичному Договору На оказание услуг по проведению
            развлекательных мероприятий
          </p>
        </summary>
        <div class="doc-content">DOC 3</div>
      </details>
      <details class="document-row">
        <summary class="document-row-summary">
          <p>Политика в отношении обработки персональных данных</p>
        </summary>
        <div class="doc-content">DOC 4</div>
      </details>
    </div>
  </section>
</template>

<style scoped>
.legal-information-section {
  /* height: 100vh; */
  padding: 0 var(--horiz-main-padding);
  margin-bottom: 5rem;
}

.documents-wrapper {
  background-color: rgba(3, 3, 3, 0.3);
  border-radius: 2rem;
  padding: 2.5rem 1.5rem;
}
.document-row-summary {
  cursor: pointer;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1.5rem;
  transition: background-color 0.2s;

  /* &:first-child {
    padding-top: 0;
  }
  &:last-child {
    padding-bottom: 0;
  } */

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
    font-size: 1.7rem;
  }

  &:hover {
    background-color: rgba(3, 3, 3, 0.1);
  }
}
.document-row-summary::-webkit-details-marker {
  display: none;
}
.document-row-summary::after {
  content: "";
  display: block;
  width: 4.8rem;
  height: 4.8rem;
  background-image: url("/assets/icons/faq-open-btn.svg");
  background-size: contain;
  background-repeat: no-repeat;
  transition: transform 0.3s;
}
details[open] > .document-row-summary::after {
  transform: rotate(180deg);
}

.doc-content {
  padding: 2rem 1.5rem;
  font-size: 1.8rem;
}
</style>
