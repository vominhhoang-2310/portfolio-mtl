<script setup>
const profilePhoto = new URL("../assets/profile.jpg", import.meta.url).href;
const resumeUrl = new URL("../assets/Hoang_Vo_Resume.pdf", import.meta.url)
  .href;
</script>

<template>
  <div class="header-grid">
    <div class="header-text">
      <span class="header-eyebrow">Xin chào, I'm</span>
      <h1>Hoang Vo</h1>
      <p class="header-role">Full-stack Developer</p>
      <div class="about-copy">
        <h2>About Me</h2>
        <p>
          I am a passionate and results-driven full-stack developer with a
          strong interest in web, game, and AI technologies. With nearly three
          years of experience building scalable, secure, and high-performance
          web applications, I focus on writing clean, maintainable code and
          championing best practices.
        </p>
        <p>
          My expertise spans modern frameworks and tools that help me deliver
          solutions aligned with both user and business needs. I am committed to
          continuous learning and stay curious so I can adapt quickly in this
          ever-evolving industry.
        </p>
      </div>
      <a :href="resumeUrl" target="_blank" role="button" class="btn-resume"
        >View Resume</a
      >
    </div>
    <div class="header-photo">
      <div class="photo-ring">
        <img
          :src="profilePhoto"
          alt="Profile portrait of Hoang Vo"
          class="profile-photo"
        />
      </div>
    </div>
  </div>
</template>
