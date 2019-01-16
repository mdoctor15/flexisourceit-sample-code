<template>
	<div class="alert alert-dismissible" :class="'alert-'+type" role="alert">
		<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		{{ message }}
	</div>
</template>

<script>
	export default {
		name: 'alert',
		props: ['type', 'message'],
		data() {
			return {

			}
		}
	}
</script>

<style scoped>
	.alert-dismissible .close {
		padding: 0;
	}
</style>