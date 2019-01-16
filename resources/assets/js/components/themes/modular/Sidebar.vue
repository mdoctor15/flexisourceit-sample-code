<template>
	<aside class="sidebar">
        <div class="sidebar-container">
            <div class="sidebar-header">
                <div class="brand">
                    <div class="logo">
                        <span class="l l1"></span>
                        <span class="l l2"></span>
                        <span class="l l3"></span>
                        <span class="l l4"></span>
                        <span class="l l5"></span>
                    </div> Moosegear </div>
            </div>
            <nav class="menu">
                <ul class="sidebar-menu metismenu" id="sidebar-menu">                    
                    <router-link to="/dashboard" tag="li"> <a> <i class="fa fa-home"></i> Dashboard</a></router-link>
                    
                    <li>
                        <a href="" aria-expanded="false">
                            <i class="fa fa-th-large"></i> Transactions
                            <i class="fa arrow"></i>
                        </a>
                        <ul class="sidebar-nav">
                            <router-link to="/purchaseorders" tag="li"> <a> Purchaseorders</a></router-link>
                            <router-link to="/joborders" tag="li"> <a> Joborders</a></router-link>
                            <router-link to="/rawmaterialsbooking" tag="li"> <a> Raw Materials Booking</a></router-link>
                            <router-link to="/bills" tag="li"> <a> Bills</a></router-link>
                            <router-link to="/vouchers" tag="li"> <a> Vouchers</a></router-link>
                            <router-link to="/invoices" tag="li"> <a> Invoices</a></router-link>
                            <router-link to="/receipts" tag="li"> <a> Receipts</a></router-link>
                        </ul>
                    </li>
                    <li>
                        <a href="" aria-expanded="false">
                            <i class="fa fa-table"></i> AP Reference Tables
                            <i class="fa arrow"></i>
                        </a>
                        <ul class="sidebar-nav">
                            <router-link to="/ap/companies" tag="li"> <a> Companies</a></router-link>
                            <router-link to="/ap/suppliers" tag="li"> <a> Suppliers</a></router-link>
                            <router-link to="/ap/customers" tag="li"> <a> Customers</a></router-link>
                            <router-link to="/ap/customergroups" tag="li"> <a> Customer Groups</a></router-link>
                            <router-link to="/ap/rscodes" tag="li"> <a> Ready Stock Codes</a></router-link>
                        </ul>
                    </li> 
                    <li>
                        <a href="" aria-expanded="false">
                            <i class="fa fa-table"></i> AR Reference Tables
                            <i class="fa arrow"></i>
                        </a>
                        <ul class="sidebar-nav">
                            <router-link to="/ar/companies" tag="li"> <a> Companies</a></router-link>
                            <router-link to="/ar/customers" tag="li"> <a> Customers</a></router-link>
                            <router-link to="/ar/customergroups" tag="li"> <a> Customer Groups</a></router-link>
                        </ul>
                    </li>   
                    <li>
                        <a href="" aria-expanded="false">
                            <i class="fa fa-tag"></i> Inventory
                            <i class="fa arrow"></i>
                        </a>
                        <ul class="sidebar-nav">
                            <router-link to="/ap/item-categories" tag="li">
                                <a> Item Categories</a>
                            </router-link>
                            <router-link to="/ap/items" tag="li">
                                <a> Items</a>
                            </router-link>
                            <router-link to="/ap/inventory-entries" tag="li">
                                <a> Transactions</a>
                            </router-link>
                        </ul>
                    </li>

                    <router-link to="/users" tag="li" v-if="$gate.allow('create', 'user')"> <a> <i class="fa fa-users"></i> Users</a></router-link>
                    <router-link to="/roles" tag="li" v-if="$gate.allow('create', 'role')"> <a> <i class="fa fa-edit"></i> Roles</a></router-link>                 
                </ul>
            </nav>
        </div>

        <footer class="sidebar-footer">
            <ul class="sidebar-menu metismenu" id="customize-menu" aria-expanded="false">
                <li>
                    <ul>
                        <li class="customize">
                            <div class="customize-item">
                                <div class="row customize-header">
                                    <div class="col-4"> </div>
                                    <div class="col-4">
                                        <label class="title">fixed</label>
                                    </div>
                                    <div class="col-4">
                                        <label class="title">static</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-4">
                                        <label class="title">Sidebar:</label>
                                    </div>
                                    <div class="col-4">
                                        <label>
                                            <input class="radio" type="radio" name="sidebarPosition" value="sidebar-fixed">
                                            <span></span>
                                        </label>
                                    </div>
                                    <div class="col-4">
                                        <label>
                                            <input class="radio" type="radio" name="sidebarPosition" value="">
                                            <span></span>
                                        </label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-4">
                                        <label class="title">Header:</label>
                                    </div>
                                    <div class="col-4">
                                        <label>
                                            <input class="radio" type="radio" name="headerPosition" value="header-fixed">
                                            <span></span>
                                        </label>
                                    </div>
                                    <div class="col-4">
                                        <label>
                                            <input class="radio" type="radio" name="headerPosition" value="">
                                            <span></span>
                                        </label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-4">
                                        <label class="title">Footer:</label>
                                    </div>
                                    <div class="col-4">
                                        <label>
                                            <input class="radio" type="radio" name="footerPosition" value="footer-fixed">
                                            <span></span>
                                        </label>
                                    </div>
                                    <div class="col-4">
                                        <label>
                                            <input class="radio" type="radio" name="footerPosition" value="">
                                            <span></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="customize-item">
                                <ul class="customize-colors">
                                    <li>
                                        <span class="color-item color-red" data-theme="red"></span>
                                    </li>
                                    <li>
                                        <span class="color-item color-orange" data-theme="orange"></span>
                                    </li>
                                    <li>
                                        <span class="color-item color-green active" data-theme=""></span>
                                    </li>
                                    <li>
                                        <span class="color-item color-seagreen" data-theme="seagreen"></span>
                                    </li>
                                    <li>
                                        <span class="color-item color-blue" data-theme="blue"></span>
                                    </li>
                                    <li>
                                        <span class="color-item color-purple" data-theme="purple"></span>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    <a href="">
                        <i class="fa fa-cog"></i> Customize </a>
                </li>
            </ul>
        </footer>
    </aside>
</template>

<script>
	export default {

	}
</script>

<style scoped>
/*     .sidebar .sidebar-menu > li.open > a, 
    .sidebar .sidebar-menu > li.open > a:hover {
        background-color: #85CE36 !important;
        color: #ffffff !important;
    } */

    .sidebar .sidebar-menu .sidebar-nav > li.active > a, 
    .sidebar .sidebar-menu .sidebar-nav > li.active > a:hover {
        /* background-color: #85CE36 !important; */
        border-left: 4px solid #85CE36 !important;
        color: #ffffff !important;
    }
</style>