export default function(Vue) {
	let authenticatedUser = {}

	Vue.auth = {
		// set token
		setToken(authUser) {
			localStorage.setItem('authUser', authUser);
		},

		// get token
		getToken() {
			var authUser = JSON.parse(localStorage.getItem('authUser'));

			if(!authUser) {
				return null;
			}
			// console.log(authUser)

			var token = authUser.token;
			var expiration = authUser.expiration;


			if(Date.now() > parseInt(expiration)) {
				this.destroyToken();
				return null;
			} else 
				return token;
		},

		// destroy token
		destroyToken() {
			localStorage.removeItem('authUser');
		},

		// isAuthenticated
		isAuthenticated() {
			if(this.getToken()) {
				return true;
			} else {
				return false;
			}
		},

		setAuthenticatedUser (data) {
			authenticatedUser = data
		},

		getAuthenticatedUser () {
			return authenticatedUser
		}
	}

	Object.defineProperties(Vue.prototype, {
		$auth: {
			get() {
				return Vue.auth;
			}
		}
	});
}