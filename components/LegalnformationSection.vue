<script setup>
import * as pdfjsLib from "pdfjs-dist/build/pdf.mjs";
import pdfjsWorkerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url";
import public_offer from "@/assets/documents/public_offer.pdf";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorkerUrl;

const documents = [
  {
    title:
      "Публичный договор (договор-оферта) на оказание услуг по проведению развлекательных мероприятий",
    doc: public_offer,
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
  {
    title: "Согласие на обработку персональных данных",
    doc: "DOC 5",
  },
  {
    title: "Лист ознакомления",
    doc: "DOC 6",
  },
];

const openedDocIdx = ref(null);

function toggleDoc(idx) {
  openedDocIdx.value = openedDocIdx.value === idx ? null : idx;
}

watch(openedDocIdx, async (newIdx) => {
  if (newIdx === null) return;
  const container = document.getElementById(`pdf-viewer-${newIdx}`);
  container.innerHTML = "";
  const canvas = document.createElement("canvas");
  container.appendChild(canvas);
  const ctx = canvas.getContext("2d");

  const pdf = await pdfjsLib.getDocument(documents[newIdx].doc).promise;
  const page = await pdf.getPage(1);
  const viewport = page.getViewport({ scale: 1.2 });
  canvas.width = viewport.width;
  canvas.height = viewport.height;
  await page.render({ canvasContext: ctx, viewport }).promise;

  container.style.userSelect = "none";
  container.oncontextmenu = () => false;
});
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
            <div :id="`pdf-viewer-${index}`" class="pdf-viewer-container"></div>
            <!-- {{ doc }} -->
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

.pdf-viewer-container {
  position: relative;
  overflow: hidden;
  /* выставьте нужные ширину/высоту */
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
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
