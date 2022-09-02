<script setup>
import Header from "./../components/layout/Header.vue";
import Footer from "./../components/layout/Footer.vue";
import MenuContent from "./../components/cards/MenuContent.vue";
</script>

<template>
  <Header />
  <div class="py-16 bg-gray-200 dark:bg-gray-900 md:py-28">
    <div class="flex flex-col w-full">
      <MenuContent />
    </div>
  </div>
  <Footer />
</template>
