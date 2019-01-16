<template>
<select 
	:multiple="multiple" 
	:value="theValue" 
	@input="$emit('input', $event.target.value)">
    <slot></slot>
    <option 
		v-for="item in theOptions" 
		:key="item.id"
		:value="item.id">
        {{ item.text }}
    </option>
  </select>
</template>

<script>

	import $ from 'jquery';
	import select2 from 'select2';

	export default {
		props: {
			options: {
				Object
			},
			value: null,
			multiple: {
				Boolean,
				default: false
			}
		},
		data() {
			return {
				select2data: [{ id: '', text: 'Select' }]
			}
		},
		mounted: function() {

			let vm = this;
			let select = $(this.$el);

			// init select2
			select
				.select2({ 
					placeholder: 'Select',
					theme: 'bootstrap',
					width: '100%',
					allowClear: true,
					data: this.select2data 
				})
				.on('change', function() {
					vm.$emit('input', select.val())
				});

				// select.val(this.value).trigger('change');
				Vue.nextTick(() => {
	                select
	                    .val(this.value)
	                    .trigger('change')
	            });
		},

		updated() {
			$(this.$el).val(this.value).trigger('change');
		},

		computed: {
			theOptions: function() {				
				for ( let key in this.options) {
					this.select2data.push({ id: key, text: this.options[key] });
					// console.log(key, options[key])
				}
				return this.select2data;
			},
			theValue: function() {
				return this.value;
			}
		},

		watch: {
			value: function (newValue) {
				this.value = newValue
			}
		},

		destroyed: function() {
			$(this.$el).off().select2('destroy');
		},
		
	}
</script>

<style src="select2/dist/css/select2.min.css"></style>
<style src="select2-bootstrap-theme/dist/select2-bootstrap.min.css"></style>