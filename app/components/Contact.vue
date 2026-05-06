<template>
  <section id="contact" class="py-16 bg-[#f1f1f1] text-[#181818]/80 relative">
    <div class="mx-auto">
      <div class="mb-12 relative h-[525px] flex flex-col px-4 sm:px-8 lg:px-20">
        <div
          class="absolute top-64 -right-32 w-[800px] h-[500px] sm:bg-[#F5EE6C] opacity-40 rounded-[60%_40%_55%_45%/50%_60%_40%_50%] blur-3xl"
        ></div>

        <div
          class="absolute top-48 -left-80 w-[1000px] h-[400px] sm:bg-[#FC523B] opacity-40 rounded-[60%_40%_55%_45%/50%_60%_40%_50%] blur-3xl"
        ></div>

        <div
          class="absolute z-20 -top-48 right-[-100px] w-[800px] h-[400px] bg-[#FF812C] opacity-40 rounded-[60%_40%_55%_45%/50%_60%_40%_50%] blur-3xl"
        ></div>

        <div class="flex-1 flex flex-col justify-center">
          <h2
            class="text-3xl sm:text-4xl font-bold texte mb-6 uppercase tracking-wide"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            Contactez-moi
          </h2>
          <p
            class="text-[#181818]/80"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            Transformons vos idées en projets concrets !
          </p>
        </div>

        <div
          class="flex items-center space-x-4 mt-4"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <a href="https://instagram.com" target="_blank" class="social">
            <i class="bx bxl-instagram"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" class="social">
            <i class="bx bxl-linkedin"></i>
          </a>
          <a href="https://facebook.com" target="_blank" class="social">
            <i class="bx bxl-facebook"></i>
          </a>
          <a href="https://github.com" target="_blank" class="social">
            <i class="bx bxl-github"></i>
          </a>
        </div>
      </div>

      <section class="w-full bg-[#f1f1f1] py-16 px-4 sm:px-8 lg:px-20">
        <div class="max-w-7xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div
              class="hidden lg:flex flex-col gap-8 text-[#131629]"
            >
              <h1 class="texte text-[#9A0130] font-bold text-4xl" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                Disponible pour collaborer sur vos projets ?
              </h1>
              <p class="text-gray-800 text-sm" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100"> 
                Disponible pour échanger autour de projets digitaux,
                collaborations ou missions sur mesure.
              </p>
              <div class="relative flex flex-col gap-8">
                <div
                  class="flex items-start gap-4 relative z-10"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="100"
                >
                  <div
                    class="flex items-center justify-center w-8 h-8 rounded-full bg-[#9A0130] text-white"
                  >
                    <i class="bx bx-envelope text-sm"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-sm">Email</h4>
                    <p class="text-gray-700 break-all text-sm">
                      ivoandrianah@gmail.com
                    </p>
                  </div>
                </div>

                <div
                  class="flex items-start gap-4 relative z-10"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="100"
                >
                  <div
                    class="flex items-center justify-center w-8 h-8 rounded-full bg-[#9A0130] text-white"
                  >
                    <i class="bx bxl-whatsapp text-sm"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-sm">WhatsApp</h4>
                    <p class="text-gray-700 break-all text-sm">+261 32 35 495 94</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="lg:col-span-2 backdrop-blur-sm rounded-2xl w-full max-w-[600px] shadow-lg relative mx-auto top-0 sm:-top-32"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <div
                class="bg-[#f1f1f1] p-6 sm:p-10 rounded-t-2xl flex items-start gap-4 group duration-300"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                <p class="text-gray-700 text-sm sm:text-base font-medium mb-0">
                  Vous avez un projet digital ou souhaitez collaborer sur une
                  idée créative ? Contactez-moi dès maintenant !
                </p>
              </div>

              <div class="p-6 sm:p-8 bg-white rounded-b-2xl shadow-lg">
                <form
                  @submit.prevent="sendMessage"
                  class="space-y-4 sm:space-y-6"
                >
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay="100"
                      v-model="form.user_name"
                      type="text"
                      placeholder="Votre nom"
                      class="w-full px-4 py-3 rounded-2xl shadow-sm text-sm bg-white border border-gray-300 text-gray-900 outline-none focus:ring-1 focus:ring-[#9A0130]"
                      required
                    />
                    <input
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay="100"
                      v-model="form.subject"
                      type="text"
                      placeholder="Sujet"
                      class="w-full px-4 py-3 rounded-2xl shadow-sm text-sm bg-white border border-gray-300 text-gray-900 outline-none focus:ring-1 focus:ring-[#9A0130]"
                      required
                    />
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay="100"
                      v-model="form.user_email"
                      type="email"
                      placeholder="Votre email"
                      class="w-full px-4 py-3 rounded-2xl shadow-sm text-sm bg-white border border-gray-300 text-gray-900 outline-none focus:ring-1 focus:ring-[#9A0130]"
                      required
                    />
                    <div class="flex flex-col sm:flex-row">
                      <select
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="100"
                        v-model="form.country_code"
                        class="px-4 py-3 bg-white border border-gray-300 text-sm text-gray-400 rounded-l-2xl border-r-0 outline-none focus:ring-1 focus:ring-[#9A0130] w-full sm:w-[120px]"
                      >
                        <option
                          v-for="country in countries"
                          :key="country.code"
                          :value="country.code"
                        >
                          {{ country.code }}
                        </option>
                      </select>
                      <input
                        v-model="form.phone_number"
                        type="text"
                        placeholder="Votre numéro"
                        class="w-full px-4 py-3 rounded-r-2xl border-l-0 shadow-sm bg-white text-sm border border-gray-300 text-gray-900 outline-none focus:ring-1 focus:ring-[#9A0130]"
                      />
                    </div>
                  </div>

                  <textarea
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="100"
                    v-model="form.message"
                    placeholder="Votre message"
                    rows="5"
                    class="w-full px-4 py-3 rounded-2xl shadow-sm text-sm bg-white border border-gray-300 text-gray-900 outline-none focus:ring-1 focus:ring-[#9A0130]"
                    required
                  ></textarea>

                  <button
                    type="submit"
                    class="w-full btn-primary text-center"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="100"
                  >
                    Envoyer le message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import emailjs from "@emailjs/browser";

const form = ref({
  user_name: "",
  subject: "",
  user_email: "",
  country_code: "+261",
  phone_number: "",
  message: "",
});

const countries = [
  { name: "Madagascar", code: "+261" },
  { name: "France", code: "+33" },
  { name: "USA", code: "+1" },
  { name: "UK", code: "+44" },
  { name: "Canada", code: "+1" },
  { name: "Germany", code: "+49" },
];

const sendMessage = () => {
  emailjs
    .send(
      "service_ffqn8mh",
      "template_wx6ins7",
      { ...form.value, to_email: "nerahagency@gmail.com" },
      "akYl9oE4JxsjGpJBp"
    )
    .then(() => {
      alert("Message envoyé avec succès !");
      form.value = {
        user_name: "",
        subject: "",
        user_email: "",
        country_code: "+261",
        phone_number: "",
        message: "",
      };
    })
    .catch((error) => {
      alert("Une erreur est survenue, veuillez réessayer.");
      console.error(error);
    });
};
</script>

<style scoped>
.texte {
  font-family: "Helvetica", sans-serif;
}

input,
textarea,
select {
  transition: all 0.3s ease;
}

button {
  transition: all 0.3s ease;
}
</style>
