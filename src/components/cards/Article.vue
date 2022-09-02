<script setup>
import { useRoute } from "vue-router";
import UserCard from "./UserCard.vue";
import ArticleContent from "./ArticleContent.vue";
import { storeToRefs } from "pinia";
import { usePostStore } from "./../../stores/posts";

const route = useRoute();

const { fetchPost } = usePostStore();
fetchPost(route.params.id);
const { post } = storeToRefs(usePostStore());
</script>
<template>
  <div v-if="post" class="container py-16 mx-auto md:py-28">
    <div class="flex flex-wrap items-start sm:flex-nowrap">
      <ArticleContent :article="post" />
      <UserCard :author="post.user" />
    </div>
  </div>
</template>
