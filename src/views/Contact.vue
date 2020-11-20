<template>
  <main class="flex-grow">
    <div class="px-4 py-4 text-center text-gray-900">
      <span class="text-3xl font-semibold">Kontakt</span>
      <div class="flex flex-col flex-wrap justify-center sm:flex-row">
        <div
          class="text-left sm:p-4 sm:m-4 sm:border sm:border-gray-400 sm:rounded"
        >
          <div
            class="mt-4 text-xl font-bold leading-normal text-gray-900 sm:mb-2 sm:mt-0"
          >
            Unsere Öffnungszeiten
          </div>
          <div class="grid grid-cols-3 gap-1 text-gray-700">
            <div>Montag</div>
            <div>13:30 - 18:00</div>
            <div />
            <div class="leading-tight">
              Dienstag <br>- Freitag
            </div>
            <div>09:00 - 11:30</div>
            <div>13:30 - 18:00</div>
            <div>Samstag</div>
            <div>09:00 - 14:00</div>
            <div />
          </div>
        </div>
        <div
          class="text-left border-gray-400 sm:p-4 sm:m-4 sm:border sm:rounded"
        >
          <div
            class="mt-4 text-xl font-bold leading-normal text-gray-900 sm:mb-2 sm:mt-0"
          >
            Adresse
          </div>
          <p class="text-base text-gray-700">
            Claro Laden<br>
            Marktgasse 21<br>
            9450 Altstätten<br>
          </p>
        </div>
        <div
          class="text-left border-gray-400 sm:p-4 sm:m-4 sm:border sm:rounded"
        >
          <div
            class="mt-4 text-xl font-bold leading-normal text-gray-900 sm:mt-0 sm:mb-2"
          >
            Kommunikation
          </div>
          <p class="text-base text-gray-700">
            Telefon: 0717556978<br>
            E-Mail: claro@bluewin.ch
          </p>
        </div>
      </div>
      <div class="flex flex-row flex-wrap justify-center">
        <div>
          <div
            class="text-left border-gray-400 sm:p-4 sm:m-4 sm:border sm:rounded"
          >
            <div
              class="mt-4 text-xl font-bold leading-normal text-gray-900 sm:mb-2 sm:mt-0"
            >
              Standort
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d567.9739742749599!2d9.539599611407855!3d47.37770464928544!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x174d4210adafe31!2sClaro%20Weltladen!5e0!3m2!1sen!2sch!4v1601880226732!5m2!1sen!2sch"
              width="288"
              height="225"
              frameborder="0"
              style="border: 0"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            />
          </div>
        </div>
        <div>
          <div
            class="text-left border-gray-400 sm:p-4 sm:m-4 sm:border sm:rounded"
          >
            <div
              class="mt-4 text-xl font-bold leading-normal text-gray-900 sm:mb-2 sm:mt-0"
            >
              Kontaktformular
            </div>
            <div>
              <div
                class="p-4 text-orange-700 bg-orange-100 border-l-4 border-orange-500"
                role="alert"
              >
                <p class="font-bold">
                  Achtung
                </p>
                <p>
                  Das Formular ist zurzeit inaktiv, da die Webseite nicht
                  produktiv geschalten wurde.
                </p>
              </div>
              <form>
                <div class="flex flex-row mb-2">
                  <label class="w-full mr-2">
                    <span class="text-gray-700">Vorname</span>
                    <input
                      class="block w-full mt-1 rounded form-input focus:ring-0 focus:border-orange-500"
                      required
                      aria-required="true"
                      type="text"
                    >
                  </label>
                  <label class="w-full">
                    <span class="text-gray-700">Name</span>
                    <input
                      class="block w-full mt-1 rounded form-input focus:ring-0 focus:border-orange-500"
                      required
                      aria-required="true"
                      type="text"
                    >
                  </label>
                </div>
                <label class="block mb-2">
                  <span class="text-gray-700">Telefon</span>
                  <input
                    class="block w-full mt-1 rounded form-input focus:ring-0 focus:border-orange-500"
                    required
                    aria-required="true"
                    type="text"
                  >
                </label>
                <label class="block mb-2">
                  <span class="text-gray-700">E-Mail</span>
                  <input
                    class="block w-full mt-1 rounded form-input focus:ring-0 focus:border-orange-500"
                    required
                    aria-required="true"
                    type="email"
                  >
                </label>
                <label class="block mb-2">
                  <span class="text-gray-700">Nachricht</span>
                  <textarea
                    class="block w-full mt-1 rounded form-textarea focus:ring-0 focus:border-orange-500"
                    rows="3"
                    required
                    aria-required="true"
                  />
                </label>
                <label class="block">
                  <span class="text-gray-700">Captcha</span>
                  <img
                    src="@/assets/svg/example-captcha.svg"
                    class="w-full sm:w-1/2"
                    alt="Captcha"
                  >
                  <input
                    class="block w-full mt-1 rounded form-input focus:ring-0 focus:border-orange-500"
                    required
                    aria-required="true"
                    type="text"
                  >
                </label>
                <button
                  class="px-4 py-2 mt-4 font-bold text-orange-600 bg-transparent border border-orange-600 rounded opacity-50 cursor-not-allowed hover:border-transparent hover:text-white hover:bg-orange-500"
                  disabled
                >
                  Senden
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Contact",
  components: {},
  metaInfo: {
    title: "Claro Altstätten - Kontakt",
    meta: [
      {
        name: "description",
        content: "Kontaktinformationen von Claro Altstätten",
      },
    ],
  },
};
</script>
