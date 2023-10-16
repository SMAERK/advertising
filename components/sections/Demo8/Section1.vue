<template>
  <AppLayout>
    <sectionModal
:is-open ="docModal"
:title="Documento"
/>
  </AppLayout>
    <section id="hero-8" class="hero-section bg-primary">
        <div class="container">
            <div class="row d-flex align-items-center">
                <!-- HERO TEXT -->
                <div class="col-md-6 col-lg-7">
                    <div class="hero-8-txt color--white wow fadeInRight">
                        <!-- Title -->
                        <h2 class="s-54 w-700">
                            Contenido para tu campaña en solo dos pasos
                        </h2>
                        <!-- Text -->
                        <p class="p-lg color--coal">
                            Advertising Systems te ayuda a crear contenido muy rapido. Usamos el poder de la inteligencia
                            artificial para los ciudadanos
                        </p>
                    </div>
                </div>
                <!-- END HERO TEXT -->
                <!-- HERO REQUEST FORM -->
                <div class="col-md-6 col-lg-5">
                    <div
                        id="hero-8-form"
                        class="r-10 wow fadeInLeft d-flex align-items-center"
                        style="height: 35rem"
                    >
                        <!-- Title -->
                        <div v-if="!loading">
                            <h4 class="s-26 w-700">
                                Marketing a un click!
                            </h4>
                            <!-- Text -->
                            <p class="p-md">
                                Nunca había sido tan facil crear contendio para tus campañas.
                            </p>
                            <!-- Form -->

                            <div name="requestForm" class="row request-form">
                                <!-- Form Input -->
                                <div class="col-md-12">
                                    <input
                                        type="text"
                                        v-model="form.name"
                                        class="form-control name"
                                        placeholder="Nombre de tu empresa*"
                                        autocomplete="off"
                                        required
                                    />
                                </div>
                                <!-- Form Input -->
                                <div class="col-md-12">
                                    <input
                                        type="text"
                                        v-model="form.entidad"
                                        class="form-control entidad"
                                        placeholder="Publico a la que te diriges*"
                                        autocomplete="off"
                                        required
                                    />
                                </div>
                                <div class="col-md-12">
                                    <textarea
                                        v-model="form.solicitud"
                                        class="form-control"
                                        placeholder="producto e ideas para complementar*"
                                        rows="8"
                                        style="height: 5rem"
                                    ></textarea>
                                </div>
                                <!-- Form Button -->
                                <div class="col-md-12 form-btn">
                                    <button
                                        type="submit"
                                        class="btn btn--theme hover--theme"
                                        @click="createPetition"
                                    >
                                        Crear
                                    </button>
                                </div>
                                <!-- Form Message -->
                                <p class="p-sm">
                                    By submitting this form, you accept our
                                    <NuxtLink to="/terms"
                                        >Terms of Service</NuxtLink
                                    >
                                    and
                                    <NuxtLink to="/privacy"
                                        >Privacy Policy</NuxtLink
                                    >
                                </p>
                            </div>
                        </div>

                        <div
                            v-if="loading"
                            class="col-md-12 request-form-msg text-center d-flex flex-column align-items-center"
                        >
                            <div
                                class="spinner-border text-primary"
                                role="status"
                            >
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            <span class="text-primary fw-bold"
                                >Generando...</span
                            >
                        </div>
                    </div>

                    <!-- END FORM -->
                </div>

                <!-- END HERO REQUEST FORM -->
            </div>
            <!-- End row -->
        </div>
        <!-- End container -->
        <!-- WAVE SHAPE BOTTOM -->
        <div class="wave-shape-bottom">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 165">
                <path
                    fill-opacity="1"
                    d="M0,160L120,154.7C240,149,480,139,720,128C960,117,1200,107,1320,101.3L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
                ></path>
            </svg>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";
import { chatBox } from "../../../services/usercore/index";
const form = ref({
  fullname: "",
  entity: "",
  descriptions: "",
});
const loading = ref(false);
let docModal = ref(false);


const createPetition = async () => {

    docModal.value = true;
    loading.value = true;
    const body = {
        fullname: form.value.name,
        entity: form.value.entidad,
        descriptions: form.value.solicitud,
    };
    const response = await chatBox(body);


    const fileURL = window.URL.createObjectURL(
      new Blob([response], {
        type: 'application/pdf',
      })
    );
    const fileLink = document.createElement('a');
    fileLink.href = fileURL;
    fileLink.setAttribute('download', 'Advertising.pdf');
    document.body.appendChild(fileLink);
    fileLink.click();

    setTimeout(() => {
      loading.value = false
    }, 5000);
};
</script>
