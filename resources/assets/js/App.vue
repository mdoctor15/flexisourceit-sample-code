<template>
    <!-- <div id="root" style="margin-top: 75px;"> -->
    <div class="app">
        <top-nav v-if="$route.meta.forAuth && $auth.isAuthenticated()" />
        <side-bar v-if="$route.meta.forAuth && $auth.isAuthenticated()" />

        <div class="sidebar-overlay" id="sidebar-overlay"></div>
        <div class="sidebar-mobile-menu-handle" id="sidebar-mobile-menu-handle"></div>
        <div class="mobile-menu-handle"></div>

        <!-- <navbar v-if="$route.meta.forAuth"></navbar> -->
        <panel type="primary" class="content" :icon="$route.meta.icon" :title="$route.meta.title" :subtitle="$route.meta.subtitle" v-if="$route.meta.forAuth && $route.meta.title != 'Dashboard'">
            <loader v-if="$root.loading" bg-loader="./../assets/_modular/assets/loader.gif" />
            <router-view  :key="$route.fullPath" />            
        </panel>
        <template v-else>
            <loader v-if="$root.loading" bg-loader="./../assets/_modular/assets/loader.gif" />
            <router-view  :key="$route.fullPath" />  
        </template>

        <foot-bar v-if="$route.meta.forAuth && $auth.isAuthenticated()" />
    </div>
</template>

<script>    
    import {mapState} from 'vuex';
    import Panel from './components/Panel.vue';
    import Navbar from './components/Navbar.vue';

    // theme
    import TopNav from './components/themes/modular/TopNav.vue';
    import Sidebar from './components/themes/modular/Sidebar.vue';
    import Footer from './components/themes/modular/Footer.vue';
    import Loader from './components/themes/modular/Loader.vue';

  
    export default {

        components: {
            'top-nav': TopNav,
            'side-bar': Sidebar,
            'foot-bar': Footer,
            'loader': Loader,

            'panel': Panel,
            'navbar': Navbar
        },

        computed: {
            ...mapState({
                userStore: state => state.userStore
            })
        },

        mounted () {
            this.$nextTick(() => {
                $('.app').hide();
                $('.app').fadeIn('slow');
            })
        },

        created () {
            const userObj = JSON.parse(window.localStorage.getItem('authUser'));
            this.$store.dispatch('setUserObject', userObj);

            // $('select').select2({
            //     'width': '100%'
            // })
        }
    }
</script>

<!-- <style src="vue-multiselect/dist/vue-multiselect.min.css"></style> -->
<style src="select2/dist/css/select2.min.css"></style>



