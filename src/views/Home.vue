<template>
  <main class="flex flex-col flex-grow">
    <div class="px-4 py-4 text-center text-gray-900">
      <span class="text-3xl font-semibold"
        >Ihr Laden für Fairtrade in <br />
        <span class="text-orange-600">Altstätten SG</span></span
      >
    </div>
    <img
      src="@/assets/img/sunflower.jpg"
      class="self-center mb-4 rounded center lg:w-6/12 ring-1 ring-gray-400"
      alt="Bild einer Sonnenblume, symbolisiert Biodiversität"
    />
    <div
      class="sm:p-4 m-2 sm:m-4 sm:border border-gray-400 rounded self-center lg:w-6/12"
    >
      <h1 class="text-2xl font-medium leading-normal text-gray-700">
        Wer sind wir?
      </h1>
      <span class="text-base">
        Der Claro Laden in Altstätten verfügt über ein grosses und vielfältiges
        Sortiment in den Bereichen der Fairtrade und Bio-Produkte. Bei uns
        werden sie persönlich und kundenfreundlich bedient und erhalten
        Informationen zu den Produkten und dessen Produzenten.
      </span>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  metaInfo: {
    title: 'Claro Altstätten',
    meta: [
      {
        name: 'description',
        content: 'Homepage von Claro Altstätten, ihr Laden für Fairtrade'
      }
    ]
  }
};
</script>
