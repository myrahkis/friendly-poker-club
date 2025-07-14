<script setup>
const header = ref(null);
const openMenu = ref(false);
const route = useRoute();

let lastScrollY = 0;

function useOpenMenu() {
  openMenu.value = !openMenu.value;
}

onMounted(() => {
  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 100) {
      header.value.header.classList.add("scrolled");
    } else {
      header.value.header.classList.remove("scrolled");
    }

    if (currentScrollY > lastScrollY && currentScrollY > 300) {
      header.value.header.classList.add("hidden");
    } else {
      header.value.header.classList.remove("hidden");
    }

    lastScrollY = currentScrollY;
  });
});

async function goToAnchor(hash) {
  const menu = document.querySelector(".header-menu-btn");
  menu.classList.remove("open");

  openMenu.value = false;

  await nextTick();
  await new Promise((r) => setTimeout(r, 50));

  const el = document.querySelector(hash);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
    history.replaceState(null, "", hash);
  }
}

onMounted(() => {
  const handleResize = () => {
    if (window.innerWidth > 1200 && openMenu.value) {
      const menu = document.querySelector(".header-menu-btn");
      menu.classList.remove("open");
      openMenu.value = false;
    }
  };

  window.addEventListener("resize", handleResize);

  handleResize();

  onBeforeUnmount(() => {
    window.removeEventListener("resize", handleResize);
  });
});

function goUp() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function handleScroll() {
  const button = document.getElementById("goUpBtn");
  const footer = document.querySelector(".contacts-map");

  const footerRect = footer.getBoundingClientRect();
  const viewportHeight = window.innerHeight;

  if (window.scrollY > 1500) {
    button.classList.add("show");

    if (footerRect.top < viewportHeight) {
      const overlap = viewportHeight - footerRect.top;
      button.style.transform = `translateY(-${overlap}px)`;
    } else {
      button.style.transform = "translateY(0)";
    }
  } else {
    button.classList.remove("show");
  }
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
</script>

<template>
  <button class="up-btn" id="goUpBtn" @click="goUp">
    <img src="/assets/icons/up-btn.png" alt="" />
  </button>
  <Header ref="header" :useOpenMenu="useOpenMenu" />
  <OpenedMobileHeader v-if="openMenu" :goToAnchor="goToAnchor" />
  <NuxtPage v-if="!openMenu" />
  <Footer v-if="!openMenu" />
</template>

<style scoped>
.scrolled {
  background-color: rgba(3, 3, 3, 0.3);
  box-shadow: 0 0.3rem 1.5rem rgba(3, 3, 3, 0.6);
  backdrop-filter: blur(5px);
}
.hidden {
  box-shadow: none;
  transform: translateY(-100%);
}

.up-btn {
  position: fixed;
  bottom: 5%;
  right: var(--horiz-main-padding);
  z-index: 100;
  opacity: 0;
  transition: opacity 0.4s ease-in-out;

  img {
    /* transform: rotate(-90deg); */
    width: clamp(5rem, 10vw, 8rem);
  }
}
.up-btn.show {
  opacity: 1;
}

@media (max-width: 1000px) {
  .up-btn {
    bottom: 2% !important;
  }
}
@media (max-width: 690px) {
  /* .up-btn { */
  /* bottom: 0 !important; */
  /* } */
}
@media (max-width: 380px) {
  /* .up-btn { */
  /* bottom: 10% !important; */
  /* } */
}
</style>
