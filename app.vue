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
  // console.log("AAAAAAAAAAAAAAAAAAAAAAAAA");
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
</script>

<template>
  <div>
    <Header ref="header" :useOpenMenu="useOpenMenu" />
    <OpenedMobileHeader v-if="openMenu" :goToAnchor="goToAnchor" />
    <NuxtPage v-if="!openMenu" />
    <Footer v-if="!openMenu" />
  </div>
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
</style>
