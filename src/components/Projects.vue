<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from "vue";
import { projects as projectsData } from "../data/projects";
import { getTechIconClass } from "../data/techstack";

const resolveImage = (file) =>
  new URL(`../assets/${file}`, import.meta.url).href;

const projects = ref(
  projectsData.map((project) => ({
    ...project,
    image: resolveImage(project.image),
  })),
);
const activeId = ref(projects.value[0]?.id ?? null);
const autoplayId = ref(null);
const carouselViewport = ref(null);
const isMobile = ref(false);
let mediaQuery = null;
let handleMediaChange = null;

const activeProject = computed(() => {
  return (
    projects.value.find((project) => project.id === activeId.value) ??
    projects.value[0] ?? {
      highlights: [],
      tags: [],
      links: [],
    }
  );
});

const setActive = async (id, options = {}) => {
  if (isMobile.value && activeId.value === id) {
    activeId.value = null;
    return;
  }

  activeId.value = id;
  await nextTick();
  if (!options.skipScroll && !isMobile.value) {
    scrollActiveIntoView();
  }
  if (!options.fromAuto) {
    restartAutoplay();
  }
};

const nextProject = () => {
  if (isMobile.value) return;
  if (!projects.value.length) return;
  const currentIndex = projects.value.findIndex(
    (project) => project.id === activeId.value,
  );
  const nextIndex = (currentIndex + 1) % projects.value.length;
  const nextId = projects.value[nextIndex]?.id;
  if (nextId) {
    setActive(nextId, { fromAuto: true, skipScroll: true });
  }
};

const startAutoplay = () => {
  if (isMobile.value) return;
  if (autoplayId.value || projects.value.length <= 1) return;
  autoplayId.value = window.setInterval(() => nextProject(), 6000);
};

const stopAutoplay = () => {
  if (autoplayId.value) {
    window.clearInterval(autoplayId.value);
    autoplayId.value = null;
  }
};

const restartAutoplay = () => {
  stopAutoplay();
  startAutoplay();
};

const handleFocusOut = (event) => {
  const nextFocus = event.relatedTarget;
  const container = event.currentTarget;
  if (!container) return;
  if (!nextFocus || !container.contains(nextFocus)) {
    restartAutoplay();
  }
};

const scrollActiveIntoView = () => {
  const viewport = carouselViewport.value;
  if (!viewport) return;
  const activeCard = viewport.querySelector(".carousel-card.is-active");
  if (!activeCard) return;
  activeCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
};

const buttonClass = (link) => {
  if (link.variant === "primary") return "btn btn-primary";
  if (link.variant === "text") return "btn btn-text";
  return "btn btn-outline";
};

const isLinkEnabled = (link) => Boolean(link && link.url && !link.disabled);

onMounted(() => {
  mediaQuery = window.matchMedia("(max-width: 768px)");
  handleMediaChange = (event) => {
    isMobile.value = event.matches;
    if (isMobile.value) {
      stopAutoplay();
    } else {
      restartAutoplay();
    }
  };
  handleMediaChange(mediaQuery);
  if (typeof mediaQuery.addEventListener === "function") {
    mediaQuery.addEventListener("change", handleMediaChange);
  } else if (typeof mediaQuery.addListener === "function") {
    mediaQuery.addListener(handleMediaChange);
  }
  startAutoplay();
});

onBeforeUnmount(() => {
  stopAutoplay();
  if (mediaQuery && handleMediaChange) {
    if (typeof mediaQuery.removeEventListener === "function") {
      mediaQuery.removeEventListener("change", handleMediaChange);
    } else if (typeof mediaQuery.removeListener === "function") {
      mediaQuery.removeListener(handleMediaChange);
    }
  }
});
</script>

<template>
  <section id="projects" class="section projects-section reveal-on-scroll">
    <div class="container" id="projectsApp">
      <div class="section-heading">
        <h2>Projects</h2>
        <p>
          Selected work that highlights my end-to-end ownership, collaboration,
          and care for detail.
        </p>
      </div>
      <div v-if="projects.length" class="projects-layout">
        <div class="projects-desktop">
          <article class="featured-project" aria-live="polite">
            <figure class="featured-media">
              <img :src="activeProject.image" :alt="activeProject.imageAlt" />
            </figure>
            <div class="featured-body">
              <h3>{{ activeProject.title }}</h3>
              <p>{{ activeProject.description }}</p>
              <ul class="project-highlights">
                <li v-for="(item, index) in activeProject.highlights" :key="index" v-html="item"></li>
              </ul>
              <div v-if="activeProject.tags?.length" class="project-tags">
                <span v-for="tag in activeProject.tags" :key="tag" class="tag">
                  <i :class="getTechIconClass(tag)" aria-hidden="true"></i>
                  <span class="sr-only">{{ tag }}</span>
                </span>
              </div>
              <div v-if="activeProject.links?.length" class="project-actions">
                <template v-for="(link, index) in activeProject.links" :key="index">
                  <a v-if="isLinkEnabled(link)" :href="link.url" :class="buttonClass(link)" target="_blank"
                    rel="noopener noreferrer">
                    {{ link.label }}
                  </a>
                  <span v-else :class="buttonClass(link) + ' is-disabled'" aria-disabled="true">
                    {{ link.label }}
                  </span>
                </template>
              </div>
            </div>
          </article>
          <aside class="project-carousel" aria-labelledby="other-projects-heading" @mouseenter="stopAutoplay"
            @mouseleave="restartAutoplay" @focusin="stopAutoplay" @focusout="handleFocusOut">
            <div class="carousel-header">
              <h3 id="other-projects-heading">Other Projects</h3>
            </div>
            <div class="carousel-viewport simple-carousel" ref="carouselViewport">
              <div class="carousel-track" ref="carouselTrack">
                <button v-for="project in projects" :key="project.id" class="carousel-card" type="button"
                  :class="{ 'is-active': project.id === activeId }" @click="setActive(project.id)"
                  :aria-pressed="project.id === activeId ? 'true' : 'false'">
                  <img :src="project.image" :alt="project.imageAlt" />
                  <span class="carousel-card-label">{{ project.title }}</span>
                </button>
              </div>
            </div>
          </aside>
        </div>

        <div class="projects-mobile">
          <div class="project-accordion-list">
            <div v-for="project in projects" :key="project.id" class="project-accordion-card"
              :class="{ 'is-active': project.id === activeId }">
              <button class="project-accordion-toggle" type="button"
                @click="setActive(project.id, { skipScroll: true })">
                <span>{{ project.title }}</span>
                <i class="fas" :class="project.id === activeId ? 'fa-minus' : 'fa-plus'"></i>
              </button>
              <transition name="accordion">
                <div v-if="project.id === activeId" class="project-accordion-body-mobile">
                  <figure class="featured-media">
                    <img :src="project.image" :alt="project.imageAlt" />
                  </figure>
                  <div class="featured-body">
                    <p>{{ project.description }}</p>
                    <ul class="project-highlights">
                      <li v-for="(item, index) in project.highlights" :key="index" v-html="item"></li>
                    </ul>
                    <div v-if="project.tags?.length" class="project-tags">
                      <span v-for="tag in project.tags" :key="tag" class="tag">
                        <i :class="getTechIconClass(tag)" aria-hidden="true"></i>
                        <span class="sr-only">{{ tag }}</span>
                      </span>
                    </div>
                    <div v-if="project.links?.length" class="project-actions">
                      <template v-for="(link, index) in project.links" :key="index">
                        <a v-if="isLinkEnabled(link)" :href="link.url" :class="buttonClass(link)" target="_blank"
                          rel="noopener noreferrer">
                          {{ link.label }}
                        </a>
                        <span v-else :class="buttonClass(link) + ' is-disabled'" aria-disabled="true">
                          {{ link.label }}
                        </span>
                      </template>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="projects-empty">
        <p>More projects coming soon.</p>
      </div>
    </div>
  </section>
</template>
