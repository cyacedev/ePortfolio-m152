<template>
  <main class="flex-grow">
    <div class="px-4 py-4 text-center text-gray-900">
      <span class="text-3xl font-semibold">Impressum</span>

      <div class="flex flex-col flex-wrap justify-center sm:flex-row">
        <div
          class="text-left border-gray-400 sm:p-4 sm:m-4 sm:border sm:rounded"
        >
          <div
            class="mt-4 text-xl font-bold leading-normal text-gray-900 sm:mt-0 sm:mb-2"
          >
            Firma
          </div>
          <p class="text-base text-gray-700">
            Firmenname: Claro Laden Monika Angst<br />
            Adresse: Claro Laden, Marktgasse 21, 9450 Altstätten<br />
            Telefon: 0717556978<br />
            E-Mail: claro@bluewin.ch<br />
          </p>
        </div>
        <div
          class="text-left border-gray-400 sm:p-4 sm:m-4 sm:border sm:rounded"
        >
          <div
            class="mt-4 text-xl font-bold leading-normal text-gray-900 sm:mt-0 sm:mb-2"
          >
            Rechtliches
          </div>
          <p class="text-base text-gray-700">
            <CookiePolicy />
          </p>
        </div>
      </div>
      <ol>
        <li>Cookie-Disclaimer/Rechtliches</li>
        <li>Copyright</li>
      </ol>
    </div>
  </main>
</template>

<script>
import CookiePolicy from '@/components/CookiePolicy.vue';
export default {
  name: 'Impressum',
  components: { CookiePolicy },
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
