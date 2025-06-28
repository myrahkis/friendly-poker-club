<script setup>
const { bgColor } = defineProps({ bgColor: String });
const { loading, error, rawData: contacts } = useCityData("contacts");
</script>

<template>
  <div class="contacts" :style="{ backgroundColor: bgColor }">
    <div>
      <p class="phone">{{ contacts.phone }}</p>
      <p class="email">{{ contacts.email }}</p>
    </div>
    <p class="text-info" v-html="contacts.address"></p>
    <p class="text-info">
      {{ contacts.workingHours }}
    </p>
    <Socials width="6rem" />
  </div>
</template>

<style scoped>
.contacts {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 40%;
  border: 1px solid var(--light-gradient-color);
  border-radius: 2rem;
  padding: 3rem;
}

.phone {
  font-size: clamp(1.8rem, 2.5vw, 3rem);
  font-weight: 700;
}
.email {
  font-size: clamp(1.2rem, 2.5vw, 2rem);
  font-weight: 400;
}
.text-info {
  font-size: clamp(1.4rem, 1.8vw, 2.3rem);
  font-weight: 400;
}

/* (1024px–1279px) */
@media (max-width: 1279px) {
  :deep(.socials-container) {
    .whatsup-btn,
    .yt-btn,
    .tg-btn,
    .vk-btn {
      svg {
        width: clamp(2.5rem, 4.3vw, 5rem) !important;
      }
    }
  }
}

@media (max-width: 762px) {
  .contacts {
    width: 100%;
  }

  :deep(.socials-container) {
    .whatsup-btn,
    .yt-btn,
    .tg-btn,
    .vk-btn {
      svg {
        width: clamp(4.5rem, 4vw, 6rem) !important;
      }
    }
  }

  .phone {
    font-size: clamp(2.2rem, 3.2vw, 4rem);
  }
  .email {
    font-size: clamp(1.6rem, 2.2vw, 2.5rem);
  }
  .text-info {
    font-size: clamp(1.5rem, 2vw, 2.8rem);
  }
  .hide-br {
    display: none;
  }
}
</style>
