<!-- eslint-disable tailwindcss/no-custom-classname -->
<script>
import { mapActions } from "pinia";
import { useAuthStore } from "./../../stores/auth.js";

export default {
  data() {
    return {
      payload: {
        name: "",
        email: "",
        phone: "",
        password: "",
        password_confirmation: "",
      },
    };
  },
  methods: {
    ...mapActions(useAuthStore, {
      registerNewUser: "register",
    }),
    registerUser() {
      this.registerNewUser(this.payload);
    },
  },
};
</script>
<template>
  <div class="flex justify-center my-12 w-full">
    <div
      class="p-4 w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-md sm:p-6 md:p-8"
    >
      <div class="space-y-6">
        <h5 class="text-xl font-medium text-gray-900 dark:text-white">
          Sign Up
        </h5>
        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Your Name</label
          >
          <input
            v-model="payload.name"
            class="form-input"
            placeholder="Johnny Mnemonic"
            required=""
          />
        </div>
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
            for="phone"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Your Phone Number</label
          >
          <input
            id="phone"
            v-model="payload.phone"
            type="tel"
            class="form-input"
            placeholder="255789016235"
            required=""
          />
        </div>
        <div>
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Your password</label
          >
          <input
            id="password"
            v-model="payload.password"
            type="password"
            placeholder="••••••••"
            class="form-input"
            required
          />
        </div>

        <div>
          <label
            for="confirm_password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Confirm password</label
          >
          <input
            id="confirm_password"
            v-model="payload.password_confirmation"
            type="password"
            placeholder="••••••••"
            class="form-input"
            required
          />
        </div>
        <button
          type="submit"
          class="py-2.5 px-5 my-8 w-full text-sm font-medium text-center text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
          @click="registerUser()"
        >
          Register
        </button>
        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
          Or you can just
          <router-link
            to="/login"
            class="text-blue-700 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-600"
          >
            Login 🔥</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
