<template>
  <footer
    class="flex justify-between px-2 pt-1 pb-4 mt-4 text-gray-900 border-t-2 border-orange-600 border-dotted min-w-screen"
  >
    <div>
      <h2 class="font-bold">
        Navigation
      </h2>
      <ul>
        <li>
          <router-link
            to="/"
            class="hover:text-orange-600"
          >
            Home
          </router-link>
        </li>
        <li>
          <router-link
            to="/products"
            class="hover:text-orange-600"
          >
            Produkte
          </router-link>
        </li>
        <li>
          <router-link
            to="/contact"
            class="hover:text-orange-600"
          >
            Kontakt
          </router-link>
        </li>
      </ul>
    </div>
    <div>
      <h2 class="font-bold">
        Links
      </h2>
      <ul>
        <li>
          <router-link
            to="/impressum"
            class="hover:text-orange-600"
          >
            Impressum
          </router-link>
        </li>
        <li>
          <a
            class="hover:text-orange-600"
            href="https://www.facebook.com/claro.weltladen"
          >FaceBook</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
