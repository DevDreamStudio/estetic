<template>
  <div data-aos="fade-down" class="newscomp">
    <div class="newscomp__top">
      <h2 class="newscomp__top-title">новости</h2>

      <router-link to="/news">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
        >
          <path
            d="M20.6357 16.8975L20.627 8.07324C20.627 7.45801 20.2227 7.03613 19.5898 7.03613H10.7568C10.1592 7.03613 9.74609 7.48438 9.74609 8.01172C9.74609 8.53027 10.1943 8.96094 10.7305 8.96094H13.8857L17.6123 8.83789L16.0127 10.2441L7.67188 18.5938C7.46973 18.8047 7.35547 19.0508 7.35547 19.2969C7.35547 19.8154 7.83008 20.3076 8.36621 20.3076C8.6123 20.3076 8.8584 20.2021 9.06934 20L17.4189 11.6504L18.8428 10.0508L18.6934 13.6191V16.9238C18.6934 17.4688 19.124 17.9258 19.6602 17.9258C20.1875 17.9258 20.6357 17.4775 20.6357 16.8975Z"
          />
        </svg>
      </router-link>
    </div>

    <div class="newscomp__items">
      <NewsCard :item="item" v-for="item in newsArr" :key="item" />
    </div>
  </div>
</template>

<script setup>
import NewsCard from "@/components/News/NewsCard.vue";
import { onMounted, computed } from "vue";
import { useNews } from "@/store/news";
import AOS from "aos";

const newsStore = useNews();
const newsArr = computed(() => {
  return newsStore.newsArr ? newsStore.newsArr.slice(0, 3) : [];
});

onMounted(async () => {
  AOS.refresh();
  await newsStore.getNews(false);
});
</script>
