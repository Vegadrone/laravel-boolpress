//! Importiamo Vue router

import Vue from 'vue';
import VueRouter from 'vue-router';

//! Diciamo alla window(la nostra pagina) che Vue è richesto

window.Vue = require('vue');

//! Diciamo a Vue di usare VueRouter

Vue.use(VueRouter)

//! Importiamo App dalla cartella js/views e il router

import App from './views/App';
import router from './router';

//! Nuova istanza di Vue in cui specifichiamo root come collegamento sul blade
//! render della pagina home su App e specifichaimo il router
const app = new Vue({
    el: '#root',
    render: h => h(App),
    router
});
