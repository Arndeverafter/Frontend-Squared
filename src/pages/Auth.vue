<script setup>
import Header from "./../components/layout/Header.vue";
import Footer from "./../components/layout/Footer.vue";
import Login from "./../components/cards/Login.vue";
import Register from "@/components/cards/Register.vue";
import { currentTheme } from "@/composables/theme.js"; // We using the value in the transition
</script>

<script>
export default {
  computed: {
    isLogin() {
      return this.$route.name == "login" ? true : false;
    },
  },
};
</script>
<template>
  <Header />

  <div
    class="container flex items-center px-8 mx-auto h-full min-h-screen bg-gray-200 dark:bg-gray-900"
  >
    <transition
      enter-active-class="transition duration-200 ease-out"
      leave-active-class="transition duration-200 ease-in"
      :enter-from-class="
        currentTheme === 'dark'
          ? 'transform -translate-y-full scale-50 opacity-0'
          : 'transform translate-y-full scale-50 opacity-0'
      "
      enter-to-class="transform translate-y-0"
      leave-from-class="transform translate-y-0"
      :leave-to-class="
        currentTheme === 'dark'
          ? 'transform translate-y-full scale-50 opacity-0'
          : 'transform -translate-y-full scale-50 opacity-0'
      "
      mode="out-in"
    >
      <Login v-if="isLogin" />
      <Register v-else />
    </transition>
  </div>
  <Footer />
</template>
