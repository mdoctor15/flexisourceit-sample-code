<template>
	<select>
		<slot></slot>
	</select>
</template>

<script>
	import Select2 from 'select2';

	export default {
		props: ['options', 'value'],

		data() {
			return {
				
			}
		},

		mounted: function() {
			var vm = this;

			// console.log('el', $(this.$el))
			$(this.$el)
				// init select2
				.select2({ data: this.options, 'width': '100%' })
				.val(this.value)
				.trigger('change')
				// emit event on change
				.on('change', function() {
					vm.$emit('input', this.value)
				});
		},

		watch: {
			value: function(value) {
				// update value			
				$(this.$el).val(value).trigger('change');
			},
			options: function(options) {
				// update options
				$(this.$el).empty().select2({ data: options });
				console.log(options)

			}
		},

		destroyed: function() {
			$(this.$el).off().select2('destroy');
		}
	}
</script>

<style src="select2/dist/css/select2.min.css"></style>
<style src="select2-bootstrap-theme/dist/select2-bootstrap.min.css"></style>