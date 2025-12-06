<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
import EducationExperience from "./components/EducationExperience.vue";
import NavBar from "./components/NavBar.vue";
import Projects from "./components/Projects.vue";
import SiteFooter from "./components/SiteFooter.vue";
import TechStack from "./components/TechStack.vue";

const scrollTopVisible = ref(false);
let revealObserver = null;

const handleScroll = () => {
  scrollTopVisible.value = window.scrollY > 320;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const initReveal = () => {
  const revealElements = Array.from(
    document.querySelectorAll(".reveal-on-scroll"),
  );
  if (!revealElements.length) return;

  if (!("IntersectionObserver" in window)) {
    revealElements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  revealObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -60px 0px",
    },
  );

  revealElements.forEach((el) => revealObserver.observe(el));
};

onMounted(() => {
  requestAnimationFrame(() => document.body.classList.add("page-loaded"));
  handleScroll();
  window.addEventListener("scroll", handleScroll, { passive: true });
  initReveal();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
  if (revealObserver) {
    revealObserver.disconnect();
  }
});
</script>

<template>
  <div class="site-wrapper">
    <header id="about" class="site-header fade-up">
      <div class="container">
        <NavBar />
        <About />
      </div>
    </header>

    <main class="fade-up">
      <button
        class="scroll-top"
        :class="{ 'is-visible': scrollTopVisible }"
        aria-label="Scroll back to top"
        @click="scrollToTop"
      >
        <i class="fas fa-arrow-up"></i>
      </button>

      <EducationExperience />

      <Projects />

      <TechStack />

      <Contact />
    </main>

    <SiteFooter />
  </div>
</template>
