<template>
	<div class="loader" :style="defineBGLoader"></div>
</template>

<script>
	export default {
		props: ['bg-loader'],
		computed: {
			defineBGLoader: function() {
				return "background: url(" + this.bgLoader + ") 50% 50% no-repeat transparent;"
			}
		}
	}
</script>

<style>
    .loader {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        z-index: 9999;
        /* background: url('./../../../../../assets/_modular/assets/loader.gif') 50% 50% no-repeat #fff; */
        /* opacity: .10;        */
        overflow: hidden;
    }
    .loader img {
        text-align: center;
    } 
</style>