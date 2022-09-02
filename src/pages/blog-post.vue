<script setup>
import Header from "./../components/layout/Header.vue";
import Footer from "./../components/layout/Footer.vue";
import ArticleComponent from "./../components/cards/Article.vue";
</script>

<template>
  <Header />
  <div class="bg-gray-200 dark:bg-gray-900">
    <ArticleComponent />
  </div>
  <Footer />
</template>
