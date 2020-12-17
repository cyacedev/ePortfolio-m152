<template>
  <div
    id="app"
    class="flex flex-col justify-center min-h-screen antialiased bg-white"
  >
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
};
</script>

<style></style>
