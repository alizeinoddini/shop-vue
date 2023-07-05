<template>
  <Header />

  <main style="min-height: 100vh">
    <slot />
  </main>

  <Footer />
</template>

<script>
import Header from "./header.vue";
import Footer from "./footer.vue";
export default {
  name: "LayoutVue",
  components: { Header, Footer },
};
</script>
