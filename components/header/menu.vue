<template>
    <div id="main-menu" class="wsmainfull menu clearfix">
        <div class="wsmainwp clearfix">
            <!-- HEADER BLACK LOGO -->
            <div class="desktoplogo">
                <NuxtLink to="/" class="logo-black"><img src="/assets/images/logomar.png" alt="logo" /></NuxtLink>
            </div>
            <!-- HEADER WHITE LOGO -->
            <div class="desktoplogo">
                <NuxtLink to="/" class="logo-white"><img src="/assets/images/logomar.png" alt="logo" /></NuxtLink>
            </div>
            <!-- MAIN MENU -->

            <!-- <nav class="wsmenu clearfix">
                <ul class="wsmenu-list nav-theme"> -->
                    <!-- DROPDOWN SUB MENU -->
                    <!-- <li class="nl-simple" aria-haspopup="true"><NuxtLink to="/about" class="h-link ">Inicio</NuxtLink></li> -->
                    <!-- SIMPLE NAVIGATION LINK -->
                    <!-- <li class="nl-simple" aria-haspopup="true"><NuxtLink to="/" class="h-link ">Sobre nosotros</NuxtLink></li> -->
                    <!-- MEGAMENU -->
                    <!-- <li class="nl-simple" aria-haspopup="true"><NuxtLink to="/" class="h-link ">Contactenos</NuxtLink></li> -->
                    <!-- END MEGAMENU -->
                    <!-- SIGN IN LINK -->
                    <!-- <li class="nl-simple reg-fst-link mobile-last-link" aria-haspopup="true"> -->
                        <!-- <NuxtLink to="/login-2" class="h-link ">Iniciar sesión</NuxtLink>
                    </li> -->
                    <!-- SIGN UP BUTTON -->
                    <!-- <li class="nl-simple" aria-haspopup="true">
                        <NuxtLink to="/signup-2" class="btn r-04 btn--theme hover--tra-white last-link">Registrarse</NuxtLink>
                    </li>
                </ul>
            </nav> -->
            <!-- END MAIN MENU -->
        </div>
    </div>
</template>
<script>
import { reactive } from 'vue';
export default {
    setup() {
        const state = reactive({
        isOpen: [false, false]
        });
        const toggle = (index) => {
        state.isOpen[index] = !state.isOpen[index];
        };
        return {
        toggle,
        isOpen: state.isOpen
        };
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        handleScroll() {
            const menu = document.getElementById("main-menu");
            const header = document.getElementById("header");
            if (window.pageYOffset > 100) {
                menu.classList.add("scroll");
                header.classList.add("scroll");
            } else {
                menu.classList.remove("scroll");
                header.classList.remove("scroll");
            }
        }
    }
};
</script>
