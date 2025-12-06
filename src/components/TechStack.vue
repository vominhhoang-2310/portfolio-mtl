<script setup>
import { techStack } from "../data/techstack";
</script>

<template>
  <section id="tech-stack" class="section tech-section reveal-on-scroll">
    <div class="container">
      <h2>Tech Stack</h2>
      <div class="tech-grid">
        <div v-for="tech in techStack" :key="tech.id" class="tech-item">
          <i :class="tech.icon"></i>
          <span>{{ tech.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
