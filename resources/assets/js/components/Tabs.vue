<template>
	<div id="applicationContainer">
		<ul class="nav nav-tabs">
			<li :class="{ active: tab.isActive }" v-for="tab in tabs"><a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a></li>
		</ul>

		<div class="tab-content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tabs: []
			}
		},

		mounted() {
			this.tabs = this.$children
		},

		methods: {
			selectTab(selectedTab) {
				this.tabs.forEach(tab => {
					tab.isActive = (selectedTab == tab)
				});
			}
		}
	}
</script>

<style scoped>
	
	.nav-tabs li a {
        cursor: pointer;
    }

    .nav-tabs > li:first-child > a {
        margin-left: 11px;
    }

    .tab-content {
        padding-top: 10px;
    }
</style>