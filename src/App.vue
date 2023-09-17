<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <main>
    <RouterView />
    <TheFooter class="footer" />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.footer {
  margin-top: auto;
}
</style>
