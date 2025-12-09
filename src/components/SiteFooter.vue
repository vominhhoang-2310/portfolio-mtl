<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer>
    <div class="container">
      &copy; <span>{{ currentYear }}</span> Hoang Vo. All rights reserved <br> Built with <i
        class="fa-brands fa-vuejs" />
    </div>
  </footer>
</template>
