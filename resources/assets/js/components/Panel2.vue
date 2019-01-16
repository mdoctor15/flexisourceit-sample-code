<template>

	<div :class="defineType">
		<!-- <div v-if="title" class="panel-heading">
			<h3 class="panel-title"><strong><i v-if="icon" :class="icon"></i> {{ title }}</strong></h3>
		</div> -->

		<h3 style="padding: 10px 15px;">
			<strong><i v-if="icon" :class="icon"></i> {{ title }}</strong> | <small><em>{{ subtitle }}</em></small>
		</h3>

		<hr />

		<div class="panel-body">
			<slot name="actionlinks"></slot>
			
			<slot></slot>
		</div>

	</div>

</template>

<script>
    export default {
        props: ['type', 'icon', 'title', 'subtitle'],
        computed:{
			defineType: function(){
				return "panel "+ (this.type || "panel-primary");
			}
        }
    }
</script>
