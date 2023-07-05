<template>
  <Section1 />

  <FavriteCategorys />

  <NewProducts title="محصولات جدید" />

  <Brands />

  <NewProducts title="محصولات برتر" />
</template>

<script>
import Section1 from "../components/pages/home/section1.vue";
import FavriteCategorys from "../components/pages/home/favriteCategorys.vue";
import NewProducts from "../components/pages/home/newProducts.vue";
import Brands from "@/components/pages/home/brands.vue";
export default {
  name: "indexPage",
  components: { Section1, FavriteCategorys, NewProducts, Brands },
};
</script>
