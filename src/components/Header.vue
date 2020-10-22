<template>
  <header
    class="sticky top-0 flex-col text-gray-900 bg-white"
    :class="{ shadow: !mobileNavMenuOpen }"
  >
    <div class="flex items-center justify-between px-4 py-4">
      <router-link to="/">
        <img
          src="@/assets/img/claro.png"
          class="object-contain h-12"
          alt="Firmenlogo"
        />
      </router-link>
      <button
        id="menuBtn"
        class="text-orange-600 sm:hidden focus:outline-none"
        type="button"
        @click="navToggle()"
      >
        <!-- menu icon -->
        <svg
          v-if="!mobileNavMenuOpen"
          class="w-8 h-8 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <!-- Close icon -->
        <svg
          v-if="mobileNavMenuOpen"
          class="w-8 h-8 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <nav class="items-center hidden space-x-4 sm:block">
        <router-link to="/" class="text-xl leading-normal link-animation">
          Home
        </router-link>
        <router-link
          to="/products"
          class="text-xl leading-normal link-animation"
        >
          Produkte
        </router-link>
        <router-link
          to="/contact"
          class="text-xl leading-normal link-animation"
        >
          Kontakt
        </router-link>
      </nav>
    </div>
    <nav
      v-if="mobileNavMenuOpen"
      class="flex flex-col items-center flex-grow pb-4 shadow sm:hidden"
    >
      <router-link to="/" class="text-xl leading-normal link-animation">
        Home
      </router-link>
      <router-link to="/products" class="text-xl leading-normal link-animation">
        Produkte
      </router-link>
      <router-link to="/contact" class="text-xl leading-normal link-animation">
        Kontakt
      </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  data: function() {
    return {
      mobileNavMenuOpen: false,
    };
  },
  methods: {
    navToggle: function() {
      if(this.mobileNavMenuOpen){
        this.mobileNavMenuOpen = false;
      } else{
        this.mobileNavMenuOpen = true;
      }
    },
  },
};
</script>

<style scoped></style>
