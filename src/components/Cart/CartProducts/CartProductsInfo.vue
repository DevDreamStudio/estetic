<template>
  <div class="main__cart-products">
    <h2 class="main__cart-products-title">корзина</h2>

    <div class="main__cart-products-wrapper" data-aos="fade-down">
      <div class="main__cart-products-wrapper-cards">
        <CartCardItem
          v-for="item in cart.products"
          :key="item.id"
          :productData="item"
          @infoChanged="infoChanging = true"
        />
      </div>
      <CartInfo
        :cart="cart.products"
        :infoChanging="infoChanging"
        @infoUpdated="infoChanging = false"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useProduct } from "@/store/Product";
import { useRouter } from "vue-router";
import CartCardItem from "@/components/Cart/CartCardItem.vue";
import CartInfo from "@/components/Cart/CartInfo.vue";
import AOS from "aos";

const productStore = useProduct();
const router = useRouter();

const cart = productStore.getCartFromLocal();
const infoChanging = ref(false);

onMounted(async () => {
  AOS.refresh();
  productStore.getCartFromLocal();
});

watch(
  () => productStore.cart.products,
  (newValue) => {
    if (productStore.cart.products.length === 0) {
      router.push("empty-cart");
    }
  }
);
</script>
