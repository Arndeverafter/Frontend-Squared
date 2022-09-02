<script>
export default {
  props: {
    blog: {
      type: Object,
      default() {
        return {};
      },
    },
    index: {
      type: Number,
      default: 0,
    },
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
  <div
    v-bind="$attrs"
    class="my-2 mx-4 w-full bg-white dark:bg-gray-900/50 rounded-2xl border border-gray-200 dark:border-gray-900 shadow-md shadow-blue-300/40 dark:shadow-blue-900/30 lg:my-4"
  >
    <img
      :class="index == 0 ? 'md:w-3/5 w-full md:h-118' : 'md:h-44 lg:h-56'"
      class="object-cover object-center overflow-hidden w-full h-36 rounded-t-lg"
      src="https://picsum.photos/300/400"
      alt=""
    />

    <div class="py-2 px-4" :class="index == 0 ? 'md:w-2/5 w-full' : ''">
      <h2
        class="mb-1 text-xs font-bold tracking-widest text-gray-600 dark:text-gray-500 uppercase"
      >
        Blog
      </h2>
      <router-link :to="`/post/${blog.id}/${slugTitle(blog.title)}`">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ blog.title }}
        </h5>
      </router-link>
      <div class="w-full">
        <div class="flex p-1 w-full">
          <div class="p-1">
            <img
              src="https://i.pravatar.cc/300"
              alt="author"
              class="overflow-hidden w-5 h-5 rounded-full"
            />
          </div>
          <div class="py-1 pl-1">
            <p class="text-xs font-bold text-gray-600 dark:text-gray-500">
              {{ blog.user.name }} : published
              {{ blog.publication_date_human }}
            </p>
          </div>
        </div>
      </div>
      <!-- eslint-disable-next-line tailwindcss/no-custom-classname -->
      <p
        v-dompurify-html="blog.description"
        :class="index == 0 ? 'line-clamp-6' : 'line-clamp-3'"
        class="mb-3 font-normal text-gray-700 dark:text-gray-400"
      ></p>
      <div class="flex justify-between items-center">
        <router-link
          :to="`/post/${blog.id}/${slugTitle(blog.title)}`"
          class="text-gray-600 dark:text-gray-500 md:mb-2 lg:mb-0"
        >
          <p class="inline-flex items-center">
            Read More
            <svg
              class="ml-2 w-4 h-4"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>
