

require('./bootstrap');

window.Vue = require('vue').default;


Vue.component('header-component', require('./components/header.vue').default);
Vue.component('separador-component', require('./components/separador.vue').default);
Vue.component('punto-interes', require('./components/puntoInteres.vue').default);
Vue.component('header-component', require('./components/header.vue').default);
Vue.component('information-component', require('./components/information.vue').default);
Vue.component('multimedia-component', require('./components/multimedia.vue').default);




Vue.component('interestpoints-page', require('./pages/interestPoints.vue').default);
Vue.component('interestpoint-page', require('./pages/interestPoint.vue').default);



const app = new Vue({
    el: '#app'
});