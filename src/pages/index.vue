<script setup>
import Header from "./../components/layout/Header.vue";
import Footer from "./../components/layout/Footer.vue";
import Intro from "./../components/cards/Intro.vue";
import BlogArticles from "./../components/cards/BlogArticles.vue";
</script>

<template>
  <Header />
  <div class="mx-auto h-full min-h-screen bg-gray-200 dark:bg-gray-900">
    <Intro />
    <!-- We are adding a key here because we are using the same component to render posts & and also posts by a given author this will just make sure to re render the component when the route changes -->
    <BlogArticles :key="$route.name" />
  </div>
  <Footer />
</template>
