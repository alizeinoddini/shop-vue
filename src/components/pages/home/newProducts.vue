<template>
  <div class="bg-light py-5 mb-5">
    <div class="heading heading-flex mb-3">
      <div class="container">
        <h2 class="title text-center">{{ title }}</h2>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-6 col-sm-4 col-lg-2" v-for="_ in Array(6)" :key="_">
          <ProductBox />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductBox from "@/components/productBox.vue";
export default {
  components: { ProductBox },
  props: ["title"],
};
</script>
