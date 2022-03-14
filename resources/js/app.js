

require('./bootstrap');

window.Vue = require('vue').default;
Vue.config.productionTip = false;
Vue.config.silent = true;

//componentes
Vue.component('header-component', require('./components/header.vue').default);
Vue.component('title-component', require('./components/pointTitle.vue').default);
Vue.component('separador-component', require('./components/separador.vue').default);
Vue.component('punto-interes', require('./components/puntoInteres.vue').default);
Vue.component('imagenes-component', require('./components/imagenes.vue').default);
Vue.component('video-component', require('./components/video.vue').default);
Vue.component('header-component', require('./components/header.vue').default);
Vue.component('information-component', require('./components/information.vue').default);
Vue.component('audio-component', require('./components/audio.vue').default);
Vue.component('carga-punto', require('./components/cargaWeb.vue').default);
Vue.component('comentarios', require('./components/comentarios.vue').default);
Vue.component('persona', require('./components/persona.vue').default);
Vue.component('menuRecursos', require('./components/menuRecursos.vue').default);


//paginas
Vue.component('interestpoints-page', require('./pages/interestPoints.vue').default);
Vue.component('interestpoint-page', require('./pages/interestPoint.vue').default);
Vue.component('creditos-page', require('./pages/creditos.vue').default);



const app = new Vue({
    el: '#app'
});