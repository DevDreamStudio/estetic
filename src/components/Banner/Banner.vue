<template>
  <div data-aos="fade-down" class="banner" v-if="banners && banners.length">
    <swiper
      :slidesPerView="1"
      :loop="banners && banners.length > 4 ? true : false"
      :speed="1000"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: true,
      }"
      :spaceBetween="10"
      :modules="modules"
      class="banner__slider"
      :lazy="true"
      :lazyPreloadPrevNext="1"
      preloadImages="false"
    >
      <swiper-slide
        v-for="banner in banners"
        :key="banner.id"
        class="banner__slider-slide"
      >
        <div class="banner__slider-slide-img">
          <img loading="lazy" :src="banner.file" :alt="banner.title" />
          <div class="swiper-lazy-preloader"></div>
        </div>

        <div class="banner__slider-slide-content">
          <h1 class="banner__slider-slide-content-title">
            {{ banner.title }}
          </h1>

          <div class="banner__slider-slide-content-text">
            <p>
              {{ banner.desc }}
            </p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import { useHomeSlider } from "@/store/HomeSlider";
import "swiper/css";
import "@/components/Banner/Banner.scss";
import AOS from "aos";

const modules = ref([Autoplay]);
const bannerStore = useHomeSlider();
const banners = computed(() => bannerStore.homeSlider);

onMounted(() => {
  bannerStore.getHomeSlides();
  AOS.refresh();
});
</script>
