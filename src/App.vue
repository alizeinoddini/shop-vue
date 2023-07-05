<template>
  <component :is="$route.meta.layout">
    <RouterView v-slot="{ Component, route }">
      <component :is="Component" :key="route.path" />
    </RouterView>
  </component>
</template>

<script>
import Layout from "@/components/layout";
export default {
  name: "App",
  components: { Layout },
};
</script>
