<template>
  <main class="flex-grow">
    <div class="px-4 py-4 text-center text-gray-900">
      <span class="text-3xl font-semibold">Impressum</span>
      <div class="flex flex-col flex-wrap justify-center">
        <div
          class="text-left border-gray-400 mb-4 sm:p-4 sm:m-4 sm:border sm:rounded"
        >
          <h1 class="text-2xl font-medium leading-normal text-gray-700">
            Firma
          </h1>
          <p class="text-base">
            Firmenname: Claro Laden Monika Angst<br />
            Adresse: Claro Laden, Marktgasse 21, 9450 Altstätten<br />
            Telefon: 0717556978<br />
            E-Mail: claro@bluewin.ch<br />
          </p>
        </div>
        <div
          class="text-left border-gray-400 mb-4 sm:p-4 sm:m-4 sm:border sm:rounded"
        >
          <h1 class="text-2xl font-medium leading-normal text-gray-700">
            Copyright
          </h1>
          <p class="text-base">
            Die Webseite und alle Inhalte wurden von Tim Meier erstellt und sind
            sein Besitz. Der Song im Offenverkauf-Video (Happy Boy End Theme)
            wurde bereitgestellt von Kevin MacLeod.
            <br />Happy Boy End Theme by Kevin MacLeod Link:
            <a
              class="hover:text-orange-600 text-gray-700"
              href="https://incompetech.filmmusic.io/song/3854-happy-boy-end-theme"
              >https://incompetech.filmmusic.io/song/3854-happy-boy-end-theme</a
            ><br />
            License:
            <a
              class="hover:text-orange-600 text-gray-700"
              href="https://filmmusic.io/standard-license"
              >https://filmmusic.io/standard-license</a
            >
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Impressum',
  components: {},
  metaInfo: {
    title: 'Claro Altstätten - Impressum',
    meta: [
      {
        name: 'description',
        content: 'Impressum und rechtliche Informationen'
      }
    ]
  }
};
</script>
