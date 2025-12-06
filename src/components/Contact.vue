<script setup>
const phoneImage = new URL("../assets/person_on_the_phone.jpg", import.meta.url)
  .href;
const bubbleImage = new URL("../assets/conversation_box.jpg", import.meta.url)
  .href;
</script>

<template>
  <section id="contact" class="section contact-section reveal-on-scroll">
    <h2>Contact Me</h2>
    <div class="container contact-content">
      <div class="contact-visuals" aria-hidden="true">
        <img :src="phoneImage" alt="" class="contact-phone" />
        <img :src="bubbleImage" alt="" class="contact-bubble sun-bounce" />
      </div>
      <div class="contact-copy">
        <p>
          Should you have any questions, proposals, or collaborations, please
          feel free to reach out.
        </p>
        <a href="mailto:vominhhoang98@gmail.com" class="btn-resume">Email Me</a>
      </div>
    </div>
  </section>
</template>
