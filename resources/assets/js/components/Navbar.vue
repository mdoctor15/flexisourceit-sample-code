<template>

	<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation" v-if="">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="">Transactions</a>
            </div>
            <div id="navbar" class="collapse navbar-collapse">          

                <ul class="nav navbar-nav navbar-left">
                    
                    <!-- <router-link to="/" tag="li" class="nav-item" v-if="isAuth"> <a class="nav-link"> Dashboard</a></router-link> -->
                    <router-link to="/purchaseorders" tag="li" class="nav-item" v-if="userStore.authUser && userStore.authUser.token"> <a class="nav-link"> Purchaseorders</a></router-link>
                    <router-link to="/vouchers" tag="li" class="nav-item" v-if="userStore.authUser && userStore.authUser.token"> <a class="nav-link"> Vouchers</a></router-link>
                    <router-link to="/invoices" tag="li" class="nav-item" v-if="userStore.authUser && userStore.authUser.token"> <a class="nav-link"> Invoices</a></router-link>
                    <router-link to="/receipts" tag="li" class="nav-item" v-if="userStore.authUser && userStore.authUser.token"> <a class="nav-link"> Receipts</a></router-link>

                    
<!--                     <li class="dropdown" v-if="isAuth">
                    	<a href="#" class="dropdown-toggle" data-toggle="dropdown">	<i class="ion ion-document"></i> Transactions<b class="caret"></b></a>
                    	<ul class="dropdown-menu">
							<li><router-link to="/purchaseorders">Purchaseorders</router-link></li>
							<li><router-link to="/vouchers">Vouchers</router-link></li>
							<li><router-link to="/invoices">Invoices</router-link></li>
							<li><router-link to="/receipts">Receipts</router-link></li>
                    	</ul>
                    </li> -->
                    
                </ul>       


                <ul class="nav navbar-nav navbar-right">

                    <router-link to="/login" tag="li" class="nav-item" v-if=" ! (userStore.authUser && userStore.authUser.token)"> <a class="nav-link"> Login</a></router-link>

                    <router-link to="/register" tag="li" class="nav-item" v-if=" ! (userStore.authUser && userStore.authUser.token)"> <a class="nav-link"> Register</a></router-link>

                    <pm-notification v-if="userStore.authUser && userStore.authUser.token"></pm-notification>
                    
                    <router-link to="/inbox-pms" tag="li" class="nav-item" v-if="userStore.authUser && userStore.authUser.token"> <a class="nav-link"> Private Messages</a></router-link>

                    <router-link to="/chat" tag="li" class="nav-item" v-if="userStore.authUser && userStore.authUser.token"> <a class="nav-link"> Chat</a></router-link>

                    <router-link to="/login" tag="li" class="nav-item" v-if="userStore.authUser && userStore.authUser.token" @click.native="logout"> <a class="nav-link"> Logout</a></router-link>

                </ul>
                
            </div>
        </div>
    </nav>
</template>

<script>
    import {mapState} from 'vuex';
    import PrivateMessageNotificationDropdown from './../views/private-message/PrivateMessageNotificationDropdown';

    export default {

        components: {
            'pm-notification': PrivateMessageNotificationDropdown
        },
        
        computed: {
            ...mapState({
                userStore: state => state.userStore
            })
        },

        methods: {
            logout() {
                this.$store.dispatch('clearAuthUser');
                this.$auth.destroyToken();
                this.$router.push('/login')
            }
        }
    }
</script>

