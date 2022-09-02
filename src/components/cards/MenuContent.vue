<script setup>
// import UserPosts from "./UserPosts.vue";
import AddPost from "./AddPost.vue";
</script>
<script>
import { mapState } from "pinia";
import { useAuthStore } from "./../../stores/auth";

export default {
  data() {
    return {
      interval: null,
      time: null,
      options: {
        weekday: "short",
        year: "numeric",
        month: "long",
        day: "numeric",
      },
    };
  },
  computed: {
    ...mapState(useAuthStore, {
      auth: "user",
    }),
  },
  beforeUnmount() {
    // prevent memory leak
    clearInterval(this.interval);
  },
  created() {
    // update the time every second
    this.interval = setInterval(() => {
      // Concise way to format time according to system locale.
      // In my case this returns "3:48:00 am"
      this.time = Intl.DateTimeFormat(navigator.language, {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      }).format();
    }, 1000);
  },
  methods: {
    slugTitle(item) {
      return item
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");
    },
  },
};
</script>

<template>
  <div v-if="auth" class="container mx-auto w-full h-full min-h-screen">
    <div
      class="grid grid-cols-1 gap-2 content-center items-end py-4 px-3 my-6 mx-4 space-y-2 bg-gray-50 dark:bg-gray-800 rounded sm:grid-cols-1 md:mx-8 lg:grid-cols-3 lg:gap-1"
    >
      <div
        class="flex flex-wrap col-span-1 justify-center items-center px-6 my-8 w-full lg:flex-nowrap lg:col-span-2 lg:justify-evenly"
      >
        <img
          src="https://i.pravatar.cc/300"
          class="w-20 h-20 rounded-full md:w-40 md:h-40"
          alt="User Avatar"
        />
        <div class="px-6 text-center sm:text-left">
          <h4 class="py-2 text-lg font-bold capitalize md:text-2xl">
            Hello {{ auth.name }}
          </h4>
          <h5 class="text-sm text-gray-500 md:text-xl">
            {{ new Date().toLocaleDateString("en-US", options) }} <br />
            <small>{{ time }} </small>
          </h5>
        </div>
      </div>

      <div class="grid grid-cols-2 col-span-1 content-center items-end w-full">
        <div>
          <button
            class="flex flex-col items-center py-3 px-4 w-full text-base font-normal text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg md:py-12 md:px-8"
          >
            <svg
              aria-hidden="true"
              class="w-12 h-12 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white transition duration-75"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
              <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
            </svg>
            <h3 class="my-4 text-2xl">Dashboard</h3>
          </button>
        </div>

        <div>
          <router-link :to="`/author/${auth.id}/${slugTitle(auth.name)}`">
            <button
              class="flex flex-col items-center py-3 px-4 w-full text-base font-normal text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg md:py-12 md:px-8"
            >
              <svg
                aria-hidden="true"
                class="shrink-0 w-12 h-12 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white transition duration-75"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <h3 class="my-4 text-2xl">Posts</h3>
            </button>
          </router-link>
        </div>
      </div>
    </div>

    <AddPost :auth="auth" />
  </div>
</template>
