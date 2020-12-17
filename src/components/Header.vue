<template>
  <header class="sticky top-0 flex-col text-gray-900 bg-white">
    <div class="flex items-center justify-between px-4 py-4 shadow">
      <router-link
        to="/"
        class="flex flex-row items-center text-3xl font-semibold"
      >
        <img src="@/assets/svg/logo.svg" class="w-12 h-12 mr-4" />
        <span>
          <a class="text-orange-500">Claro</a>
          Altstätten
        </span>
      </router-link>
      <button
        id="menuBtn"
        class="text-orange-600 sm:hidden focus:outline-none"
        type="button"
        @click="navToggle()"
      >
        <img
          v-if="!mobileNavMenuOpen"
          src="@/assets/svg/icons/menu.svg"
          class="w-8 h-8 fill-current"
        />
        <img
          v-if="mobileNavMenuOpen"
          src="@/assets/svg/icons/close.svg"
          class="w-8 h-8 fill-current"
        />
      </button>
      <nav class="items-center hidden space-x-4 sm:block">
        <router-link
          to="/"
          class="text-xl leading-normal hover:text-orange-600"
        >
          Home
        </router-link>
        <router-link
          to="/products"
          class="text-xl leading-normal hover:text-orange-600"
        >
          Produkte
        </router-link>
        <router-link
          to="/contact"
          class="text-xl leading-normal hover:text-orange-600"
        >
          Kontakt
        </router-link>
      </nav>
    </div>
    <transition name="slide">
      <nav
        v-if="mobileNavMenuOpen"
        class="flex flex-col items-center flex-grow pb-4 shadow sm:hidden"
      >
        <router-link
          to="/"
          class="text-xl leading-normal hover:text-orange-600"
        >
          Home
        </router-link>
        <router-link
          to="/products"
          class="text-xl leading-normal hover:text-orange-600"
        >
          Produkte
        </router-link>
        <router-link
          to="/contact"
          class="text-xl leading-normal hover:text-orange-600"
        >
          Kontakt
        </router-link>
      </nav>
    </transition>
  </header>
</template>

<script>
export default {
  data: function() {
    return {
      mobileNavMenuOpen: false
    };
  },
  methods: {
    navToggle: function() {
      if (this.mobileNavMenuOpen) {
        this.mobileNavMenuOpen = false;
      } else {
        this.mobileNavMenuOpen = true;
      }
    }
  }
};
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.26s ease;
  transform-origin: top;
}

.slide-enter,
.slide-leave-to {
  transform: scaleY(0);
  transform-origin: top;
}
</style>
