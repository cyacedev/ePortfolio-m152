<template>
  <main class="flex-grow">
    <div class="px-4 py-4 text-center text-gray-900">
      <span class="text-3xl font-semibold">Produkte</span>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center md:flex-row"
      >
        <div
          class="text-left sm:p-4 m-2 mb-4 sm:mb-0 sm:m-4 sm:border sm:border-gray-400 sm:rounded"
        >
          <img
            src="@/assets/img/candle.jpg"
            class="self-center mb-1 rounded center ring-1 ring-gray-400"
            alt="Bild von Regal voller Kerzen"
          />
          <h1 class="text-2xl font-medium leading-normal text-gray-700">
            Kunterbunte Vielfalt
          </h1>
          <span class="text-base">
            Im Claro Laden bieten wir ihnen eine riesige Vielfalt an den
            verschiedensten Produkten an, von Kerzen und Handtaschen bis hin zu
            Teesorten und Spülmittel. Das Sortiment wird laufend optimiert und
            wir freuen uns auf ihr Feedback und Wünsche, falls sie welche haben.
          </span>
        </div>
        <div
          class="text-left sm:p-4 m-2 mb-4 sm:mb-0 sm:m-4 sm:border sm:border-gray-400 sm:rounded"
        >
          <img
            src="@/assets/img/table.jpg"
            class="self-center mb-1 rounded center ring-1 ring-gray-400"
            alt="Bild von Tisch mit Schokoladen und weihnachtlichen Produkten"
          />
          <h1 class="text-2xl font-medium leading-normal text-gray-700">
            Saisonale Produkte
          </h1>
          <span class="text-base">
            Das Sortiment im Laden wird der Saison angepasst und immer wieder
            überarbeitet, damit sie als Kunde immer neue und interessante
            Produkte antreffen können. Je nach Saison gibt es spezielle
            Sammelbestellungen, wie beispielsweise unsere Orangen und
            Clementinenbestellung während dem Dezember.
          </span>
        </div>
        <div
          class="text-left sm:col-span-2 lg:col-span-1 sm:p-4 m-2 mb-4 sm:mb-0 sm:m-4 sm:border sm:border-gray-400 sm:rounded"
        >
          <div class="videoResponsive mb-1">
            <iframe
              src="https://www.youtube-nocookie.com/embed/KM_f-gbFRLU?rel=0"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              class=" rounded center ring-1 ring-gray-400"
              alt="Video das die Nutzung von Offenverkauf von Produkten zeigt"
            ></iframe>
          </div>
          <h1 class="text-2xl font-medium leading-normal text-gray-700">
            Offenverkauf
          </h1>
          <span class="text-base">
            Lebensmittelprodukte werden nun teilweise im Offenverkauf angeboten.
            Dabei können sie mit ihren eigenen Behälter diese Produkte abfüllen
            und dadurch die Umwelt wegen dem Verpackungsabfall schonen. Ähnlich
            ermgölichen wir auch die Auffüllung von alten Spülmittelflaschen,
            damit nicht noch mehr Abfall produziert wird.
          </span>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Products',
  components: {},
  metaInfo: {
    title: 'Claro Altstätten - Produkte',
    meta: [
      {
        name: 'description',
        content: 'Produkte die im Laden antreffbar sind'
      }
    ]
  }
};
</script>

<style>
.videoResponsive {
  padding-bottom: 56.25%; /* Ratio of 16:9 */
  height: 0;
  position: relative;
  overflow: hidden;
}

.videoResponsive iframe {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>
