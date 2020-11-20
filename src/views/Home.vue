<template>
  <main class="flex flex-col flex-grow">
    <div class="px-4 py-4 text-center text-gray-900">
      <span
        class="text-3xl font-semibold"
      >Ihr Laden für Fairtrade in <br>
        <span class="text-orange-600">Altstätten SG</span></span>
    </div>
    <img
      src="@/assets/img/placeholder_169.png"
      class="self-center mb-4 center md:h-96"
      alt="Stellvertreterbild"
    >
    <div class="px-4 py-4 mx-4 border border-gray-400 rounded">
      <h1 class="text-2xl font-medium leading-normal text-gray-700">
        Wer sind wir?
      </h1>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.</span>
    </div>
  </main>
</template>

<script>
export default {
  name: "Home",
  components: {},
  metaInfo: {
    title: "Claro Altstätten",
    meta: [
      {
        name: "description",
        content: "Homepage von Claro Altstätten, ihr Laden für Fairtrade",
      },
    ],
  },
};
</script>
