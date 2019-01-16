
export class Errors {
	/**
	 * Create a new Errors instance. 
	 */
	constructor() {
		this.errors = {};
	}


	/**
	 * Determine if an error exists for the given field
	 *
	 * @param {string} field
	 */
	has(field) {
		return this.errors.hasOwnProperty(field);
	}


	/**
	 * Determine if we have any errors.
	 */
	any() {
		return Object.keys(this.errors).length > 0;
	}


	/**
	 * Retrieve the error message for a field.
	 *
	 * @param {string} field
	 */
	 get(field) {
	 	if(this.errors[field]) {
	 		return this.errors[field][0];
	 	}
	 }


	 /**
	  * Record the new errors.
	  *
	  * @param {object} errors 
	  */
	 record(errors) {
	 	this.errors = errors;
	 }


	 /**
	  * Clear one or all error fields.
	  *
	  * @param {string|null} field 
	  */
	 clear(field) {
	 	if(field) {
	 		delete this.errors[field];

	 		return;
	 	}

	 	this.errors = {};
	 }


}


export class Form {

	/**
	 * Create a new form instance.
	 *
	 * @param {object} data 
	 */
	constructor(data) {
		this.originalData = data;

		for(let field in data) {
			this[field] = data[field];
		}

		this.errors = new Errors();
	}


	/**
	 * Fetch all relevant data for the form
	 */
	data() {
		let data = {};

		for(let property in this.originalData) {
			data[property] = this[property];
		}

		return data;
	}


	/**
	 * Reset the form fields.
	 */
	reset() {
		for(let field in this.originalData) {
			this[field] = '';
		}

		this.errors.clear();
	}


	post(url) {
		return this.submit('post', url);
	}


	patch(url) {
		return this.submit('patch', url);
	}


	delete(url) {
		return this.submit('delete', url);
	}


	/**
	 * Submit the form
	 *
	 * @param {string} requestType
	 * @param {string} url 
	 */
	submit(requestType, url) {

		return new Promise((resolve, reject) => {
			axios[requestType](url, this.data())
				.then(response => {
					this.onSuccess(response.data);

					resolve(response.data);
				})
				.catch(error => {
					this.onFail(error.response.data);

					reject(error.response.data);
				});
		})

		
	}


  	/**
	 * Handle a successful form submission.
	 *
	 * @param {object} response 
	 */
	onSuccess(response) {
		alert(response.data.message);

		this.reset();
	}


	 /**
	 * Handle a failed form submission.
	 *
	 * @param {object} errors
	 */
	onFail(errors) {
		this.errors.record(errors);
	}


}


/**
 * 
	<template>
	    <form method="POST" action="/projects" @submit.prevent="onSubmit" @keydown="errors.clear($event.target.name)">
	        <div class="control">
	            <label for="name" class="label">Project Name:</label>
	            <input type="text" id="name" name="name" class="input" v-model="name">
	            <span class="help is-danger" v-if="errors.has('name')" v-text="errors.get('name')"></span>
	        </div>
	        <div class="control">
	            <label for="description" class="label">Project Description:</label>
	            <input type="text" id="description" name="description" class="input" v-model="description">
	            <span class="help is-danger" v-if="errors.has('description')" v-text="errors.get('description')"></span>            
	        </div>

	        <div class="control">
	            <button class="button is-primary" :disabled="errors.any()">Create</button>
	        </div>
	    </form>
	</template>
 */


/** 
 * Sample usage.
 * 
	new Vue({
		el: '#app',

		data: {
			form: new Form({
				name: '',
				description: ''
			});
		},

		methods: {
			onSubmit() {
				// this.form.post('/projects');
				this.form.submit('post', '/projects')
					.then(data => console.log(data))
					.catch(error => console.log(error));
			}
		}

	});
*/