<template>
	<div class="autocomplete">
		<div class="input" @click="toggleVisible"></div> 
		<div class="popover" v-show="visible">
			<input type="text" 
				v-model="query"
				placeholder="Start typing.." 
			>
			<div class="options">
				<ul>
					<li v-for="(match, index) in matches"
						:key="match[filterby]"
						@click="itemClicked(index)"
						v-text="match[filterby]"
					></li>
				</ul>
			</div>
		</div> 
	</div>
</template>

<script>
	export default {
		props: ['items', 'filterby'],

		data() {
			return {
				query: '',
				visible: false
			}
		}, 

		methods: {
			toggleVisible() {
				this.visible = !this.visible
			},
			itemClicked(index) {
				console.log(this.matches[index]);
			}
		},

		computed: {
			matches() {
				if(this.query == '') {
					return [];
				}

				return this.items.filter((item) => item[this.filterby].toLowerCase().includes(this.query.toLowerCase()));
			}
		}

	}

</script>

<style scoped>
	.autocomplete {
		width: 100%;
		position: relative;
	}
	.input {
		height: 40px;
		border-radius: 3px;
		border:  2px solid lightgray;
		box-shadow: 0 0 10px #eceaea;
		font-size: 25px;
		padding-left: 10px;
		padding-top: 10px;
		cursor: text;
	}
	.popover {
		min-height: 50px;
		border: 2px solid lightgray;
		position: absolute;
		top: 46px;
		left: 0;
		right: 0;
		background-color: #fff;
		border-radius: 3px;
	}
	.popover input {
		width: 95%;
		margin-top: 5px;
		height: 40px;
		font-size: 16px;
		border-radius: 3px;
		border: 1px solid lightgray;
		padding-left: 8px;
	}
	.options {
		max-height: 150px;
		overflow-y: scroll;
		margin-top: 5px;
	}

	.options ul {
		list-style-type: none;
		text-align: left;
		padding-left: 0;
	}
	.options ul li {
		border-bottom: 1px solid lightgray;
		padding: 10px;
		cursor: pointer;
		background-color: #f1f1f1;
	}
</style>