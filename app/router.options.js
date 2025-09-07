export default {
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ el: to.hash, behavior: "smooth" });
        }, 500);
      });
    }

    // console.log("scrollBehavior triggered", to.fullPath);

    return { top: 10 };
  },
};
