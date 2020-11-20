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

<style>
.link-animation {
  position: relative;
  transition: 0.5s;
}

.link-animation::after {
  position: absolute;
  content: '';
  width: 100%;
  height: 3px;
  top: 100%;
  left: 0;
  @apply bg-orange-600;
  transition: transform 0.5s;
  transform: scaleX(0);
  transform-origin: right;
}

.link-animation:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}
</style>
