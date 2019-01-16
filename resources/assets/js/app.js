
require('./bootstrap');
require('./helpers/strings');

window.Vue = require('vue');

import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource';
import Auth from './services/Auth.js';
import store from './store'; 
import VueSocketio from 'vue-socket.io';
import VueFilterDateFormat from 'vue-filter-date-format'

import jQuery from 'jquery';
global.$ = jQuery;

$.fn.modal.Constructor.prototype.enforceFocus = function() {};

jQuery.extend(true, jQuery.fn.datetimepicker.defaults, {
    icons: {
      time: 'fa fa-clock',
      date: 'fa fa-calendar',
      up: 'fa fa-arrow-up',
      down: 'fa fa-arrow-down',
      previous: 'fa fa-chevron-left',
      next: 'fa fa-chevron-right',
      today: 'fa fa-calendar-check',
      clear: 'fa fa-trash-alt',
      close: 'fa fa-times-circle'
    }
});


Vue.use(VueResource);
Vue.use(Auth);
// Vue.use(VueSocketio, 'http://localhost:8890'); // for chat and message
Vue.use(VueFilterDateFormat);

// Vue.component('multiselect', Multiselect);
// Vue.component('select2', Select2);


// Vue.directive('select', {
//     twoWay: true,
//     bind: function () {
//         $(this.$el).select2()
//         .on("select2:select", function(e) {
//             this.set($(this.$el).val());
//         }.bind(this));
//         },
//     update: function(nv, ov) {
//         $(this.$el).trigger("change");
//     }
// });

let user = JSON.parse(window.localStorage.getItem('authUser'));

import Gate from './policies/Gate';
Vue.prototype.$gate = new Gate(user);

import {getUrl} from './config';

// Vue.http.options.root = getUrl('dev'); // dev
Vue.http.options.root = getUrl(); // staging
// Vue.http.options.root = getUrl('prod'); // prod

Vue.http.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.http.headers.common['Authorization'] = 'Bearer ' + Vue.auth.getToken();

router.beforeEach(
	(to, from, next) => {

		// console.log(Vue.auth.isAuthenticated())
		document.title = to.meta.title;
		
		if(to.matched.some(record => record.meta.forVisitors)) {
			if(Vue.auth.isAuthenticated()) {
				next({
					path: '/'
				})
			} else next()			
		} else if(to.matched.some(record => record.meta.forAuth)) {
			if(!Vue.auth.isAuthenticated()) {
				next({
					path: '/login'
				})
			} else next()			
		} else next()

	}
);

router.beforeResolve((to, from, next) => {
	// If this isn't an initial page load.
	if (to.name) {
		// app.loading = true
		// Start the route progress bar.
		NProgress.start();
		NProgress.set(0.1);
	}
	next()
});

router.afterEach((to, from) => {
	// Complete the animation of the route progress bar.
	// setTimeout(() => NProgress.done(), 500);
	setTimeout(() => app.loading = false, 1500) // timeout for demo purposes
	NProgress.done()
});



const app = new Vue({
    el: '#app',
    data: { loading: false },
    components: { App },
    template: '<app></app>',
    router,
    store
})




// router.beforeEach((to, from, next) => {
//   if (to.meta.forAuth) {
//     const authUser = JSON.parse(window.localStorage.getItem('authUser'))
//     if (authUser && authUser.access_token) {
//       next()
//     } else {
//       next({name: 'dashboard'})
//     }
//   }
//   next()
// })




Vue.http.interceptors.push((request, next) => {
  next((response) => {
    if (response.status === 401) {
      console.log('Need to login again')
    }
  })
})
