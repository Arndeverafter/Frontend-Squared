<!-- eslint-disable tailwindcss/no-custom-classname -->

<script>
import { mapActions } from "pinia";
import { useAuthStore } from "./../../stores/auth.js";
export default {
  data() {
    return {
      payload: {
        email: "littlerock@squared.com",
        password: "!!Sisitu12",
      },
    };
  },
  created() {
    // redirect to dashboard if user has a session
    if (sessionStorage.getItem("úsáideoir") !== null) {
      this.$router.push("/dashboard");
    }
  },
  methods: {
    ...mapActions(useAuthStore, {
      loginUser: "login",
    }),
    logon() {
      this.loginUser(this.payload);
    },
  },
};
</script>
<template>
  <div class="flex justify-center my-12 w-full">
    <div
      class="p-4 w-full max-w-sm bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-md sm:p-6 md:p-8"
    >
      <div class="space-y-6">
        <h5 class="text-xl font-medium text-gray-900 dark:text-white">
          Sign in
        </h5>
        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Your email</label
          >
          <input
            id="email"
            v-model="payload.email"
            type="email"
            class="form-input"
            placeholder="johnny@mnemonic.com"
            required
          />
        </div>
        <div>
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Your password</label
          >
          <input
            v-model="payload.password"
            type="password"
            placeholder="••••••••"
            class="form-input"
            required=""
          />
        </div>
        <button
          class="py-2.5 px-5 my-8 w-full text-sm font-medium text-center text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
          @click="logon()"
        >
          Login to your account
        </button>
        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
          Not registered?
          <router-link
            to="/register"
            class="text-blue-700 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-600"
            >Create account ❤
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
