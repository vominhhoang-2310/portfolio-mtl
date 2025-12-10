<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";

const links = [
  { label: "Education & Experience", href: "#education-experience" },
  { label: "Projects", href: "#projects" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Contact", href: "#contact" },
];

const navOpen = ref(false);

const toggleNav = () => {
  navOpen.value = !navOpen.value;
};

const closeNav = () => {
  navOpen.value = false;
};

const handleResize = () => {
  if (window.innerWidth > 900) {
    closeNav();
  }
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<template>
  <div class="site-nav">
    <nav class="primary-nav" :class="{ 'is-open': navOpen }" id="primaryNav" aria-label="Primary">
      <ul class="nav-links">
        <li v-for="link in links" :key="link.href">
          <a :href="link.href" class="nav-link" @click="closeNav">{{
            link.label
            }}</a>
        </li>
      </ul>
    </nav>
    <button class="nav-toggle" :class="{ 'is-active': navOpen }" type="button"
      :aria-expanded="navOpen ? 'true' : 'false'" aria-controls="primaryNav" aria-label="Toggle navigation menu"
      @click="toggleNav">
      <span class="nav-toggle-line"></span>
      <span class="nav-toggle-line"></span>
      <span class="nav-toggle-line"></span>
    </button>
  </div>
</template>
