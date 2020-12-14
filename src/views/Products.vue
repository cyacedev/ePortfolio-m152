<template>
  <main class="flex-grow">
    <div class="px-4 py-4 text-center text-gray-900">
      <span class="text-3xl font-semibold">Produkte</span>
      <div class="flex flex-col  justify-center md:flex-row">
        <div
          class="text-left sm:p-4 m-2 sm:m-4 sm:border sm:border-gray-400 sm:rounded"
        >
          <img
            src="@/assets/img/candle.jpg"
            class="self-center mb-4 rounded center ring-1 ring-gray-400"
            alt="Bild von Regal voller Kerzen"
          />
          <div
            class="mt-4 text-xl font-bold leading-normal text-gray-900 sm:mb-2 sm:mt-0"
          >
            Kunterbunte Vielfalt
          </div>
          <span class="text-gray-700">
            Im Claro Laden bieten wir ihnen eine riesige Vielfalt an den
            verschiedensten Produkten an, von Kerzen und Handtaschen bis hin zu
            Teesorten und Spülmittel. Das Sortiment wird laufend optimiert und
            wir freuen uns auf ihr Feedback und Wünsche, falls sie welche haben.
          </span>
        </div>
        <div
          class="text-left sm:p-4 m-2 sm:m-4 sm:border sm:border-gray-400 sm:rounded"
        >
          <img
            src="@/assets/img/table.jpg"
            class="self-center mb-4 rounded center ring-1 ring-gray-400"
            alt="Bild von Tisch mit Schokoladen und weihnachtlichen Produkten"
          />
          <div
            class="mt-4 text-xl font-bold leading-normal text-gray-900 sm:mb-2 sm:mt-0"
          >
            Saisonale Produkte
          </div>
          <span class="text-gray-700">
            Das Sortiment im Laden wird der Saison angepasst und immer wieder
            überarbeitet, damit sie als Kunde immer neue und interessante
            Produkte antreffen können. Je nach Saison gibt es spezielle
            Sammelbestellungen, wie beispielsweise unsere Orangen und
            Clementinenbestellung während dem Dezember.
          </span>
        </div>

        <div
          class="text-left sm:p-4 m-2 sm:m-4 sm:border sm:border-gray-400 sm:rounded"
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/KM_f-gbFRLU?rel=0"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="self-center mb-4 rounded center ring-1 ring-gray-400 w-full md:h-96"
            alt="Video das die Nutzung von Offenverkauf von Produkten zeigt"
          ></iframe>
          <div
            class="mt-4 text-xl font-bold leading-normal text-gray-900 sm:mb-2 sm:mt-0"
          >
            Offenverkauf
          </div>
          <span class="text-gray-700">
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
