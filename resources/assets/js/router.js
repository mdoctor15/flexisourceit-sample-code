import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from './views/authentication/Login.vue';
import Register from './views/authentication/Register.vue';
import ForgotPassword from './views/authentication/ForgotPassword.vue';
import ResetPassword from './views/authentication/ResetPassword.vue';
import ChangePassword from './views/authentication/ChangePassword.vue';
import Chat from './views/chat/Chat.vue';

import PrivateMessageInbox from './views/private-message/PrivateMessageInbox.vue';
import PrivateMessageSent from './views/private-message/PrivateMessageSent.vue';
import PrivateMessageView from './views/private-message/PrivateMessageView.vue';
import PrivateMessageCompose from './views/private-message/PrivateMessageCompose.vue';

import Dashboard from './views/dashboard/Index.vue';

import Purchaseorders from './views/ap/purchaseorders/Index.vue';
import Joborders from './views/ap/joborders/Index.vue';
import RawMaterialsBooking from './views/ap/rawmaterialsbooking/Index.vue';
import Bills from './views/ap/bills/Index.vue';
import Vouchers from './views/ap/vouchers/Index.vue';

import Invoices from './views/ar/invoices/Index.vue';
import Receipts from './views/ar/receipts/Index.vue';

// AP
import APCompanies from './views/references/ap/companies/Index.vue';
import APCustomers from './views/references/ap/customers/Index.vue';
import APCustomergroups from './views/references/ap/customergroups/Index.vue';
import Suppliers from './views/references/ap/suppliers/Index.vue';
import ReadyStockCodes from './views/references/ap/rscodes/Index.vue';


// AR
import ARCompanies from './views/references/ar/companies/Index.vue';
import ARCustomers from './views/references/ar/customers/Index.vue';
import ARCustomergroups from './views/references/ar/customergroups/Index.vue';

// Users
import Users from './views/references/users/Index.vue';
import Profile from './views/references/users/profile.vue';
import Roles from './views/references/roles/Index.vue';


// const Companies = () => import('./views/references/companies/Index.vue');

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [

        /* LOGIN */
        {
            path: "/login",
            name: "login",
            component: Login,
            meta: {
                title: 'Login',
                subtitle: 'Your Login credentials here..',
                icon: 'fa fa-key',
                forVisitors: true
            }
        },

        {
            path: "/register",
            name: "register",
            component: Register,
            meta: {
                title: 'Register',
                subtitle: 'Register here..',
                icon: 'fa fa-home',
                forVisitors: true
            }
        },

        {
            path: "/forgot-password",
            name: "forgot-password",
            component: ForgotPassword,
            meta: {
                title: 'Forgot Password',
                subtitle: 'Kindly enter your email..',
                icon: 'fa fa-key',
                forVisitors: true
            }
        },

        {
            path: "/reset-password/:token",
            name: "reset-password",
            component: ResetPassword,
            meta: {
                title: 'Reset Password',
                subtitle: 'Reset your password here..',
                icon: 'fa fa-key',
                forVisitors: true
            }
        },

        {
            path: "/change-password",
            name: "change-password",
            component: ChangePassword,
            meta: {
                title: 'Change Password',
                subtitle: 'Change your password here..',
                icon: 'fa fa-key',
                forAuth: true
            }
        },

        {
            path: "/my-profile",
            component: Profile,
            meta: {
                title: 'My Profile',
                subtitle: '',
                icon: 'fa fa-user',
                forAuth: true
            }
        },

        {
            path: "/chat",
            component: Chat,
            meta: {
                title: 'Chat',
                subtitle: 'Get connected with your friends..',
                icon: 'fa fa-comments',
                forAuth: true
            }
        },

        /* Private Messages */

        {
            path: "/new-pm",
            name: "new-pm",
            component: PrivateMessageCompose,
            meta: {
                title: 'Private Messages',
                subtitle: 'Compose a private message.',
                icon: 'fa fa-envelope',
                forAuth: true
            }
        },

        {
            path: "/inbox-pms",
            name: "inbox-pms",
            component: PrivateMessageInbox,
            meta: {
                title: 'Private Messages',
                subtitle: 'My private messages.',
                icon: 'fa fa-envelope',
                forAuth: true
            }
        },

        {
            path: "/pms/:id",
            name: "pm-view",
            component: PrivateMessageView,
            meta: {
                title: 'Private Messages',
                subtitle: 'View the message details.',
                icon: 'fa fa-envelope',
                forAuth: true
            }
        },

        {
            path: "/sent-pms",
            name: "my-sent-pms",
            component: PrivateMessageSent,
            meta: {
                title: 'Private Messages',
                subtitle: 'All private messages that I have sent.',
                icon: 'fa fa-envelope',
                forAuth: true
            }
        },

        /* Dashboard */

        {
            path: '/', 
            name: 'home',
            component: Dashboard,
            meta: {
                title: 'Dashboard',
                subtitle: 'Transaction Dashboard',
                icon: 'fa fa-home',
                forAuth: true
            }
        },

        {
            path: '/dashboard', 
            name: 'dashboard',
            component: Dashboard,
            meta: {
                title: 'Dashboard',
                subtitle: 'Transaction Dashboard',
                icon: 'fa fa-home',
                forAuth: true
            }
        },

        /* Purchaseorders */
        {
            path: '/purchaseorders',
            name: 'purchaseorders',
            component: Purchaseorders,
            meta: {
                title: 'Purchaseorders',
                subtitle: 'List of Purchaseorders',
                icon: 'ion ion-android-cart',
                mode: 'list',
                forAuth: true
            },
            children: [
                {
                    path: 'create', 
                    component: require('./views/ap/purchaseorders/form.vue'),
                    meta: {
                        title: 'Purchaseorders',
                        subtitle: 'Create Purchaseorder',
                        icon: 'ion ion-android-cart',
                        mode: 'create',
                        forAuth: true
                    }
                },

                {
                    path: ':id/edit', 
                    component: require('./views/ap/purchaseorders/form.vue'), 
                    meta: {
                        title: 'Purchaseorders',
                        subtitle: 'Edit Purchaseorder',
                        icon: 'ion ion-android-cart',
                        mode: 'edit',
                        forAuth: true
                    }
                },
            ]
        },

        
        /* Joborders */
        {
            path: '/joborders',
            name: 'joborders',
            component: Joborders,
            meta: {
                title: 'Joborders',
                subtitle: 'List of Joborders',
                icon: 'ion ion-android-cart',
                mode: 'list',
                forAuth: true
            },
            children: [
                {
                    path: 'create', 
                    component: require('./views/ap/joborders/form.vue'),
                    meta: {
                        title: 'Joborders',
                        subtitle: 'Create Joborder',
                        icon: 'ion ion-android-cart',
                        mode: 'create',
                        forAuth: true
                    }
                },

                {
                    path: ':id/edit', 
                    component: require('./views/ap/joborders/form.vue'), 
                    meta: {
                        title: 'Joborders',
                        subtitle: 'Edit Joborder',
                        icon: 'ion ion-android-cart',
                        mode: 'edit',
                        forAuth: true
                    }
                },
            ]
        },
         

        /* Raw Materials */
        {
            path: '/rawmaterialsbooking',
            name: 'rawmaterialsbooking',
            component: RawMaterialsBooking,
            meta: {
                title: 'Raw Materials Booking',
                subtitle: 'List of Raw Materials Booking',
                icon: 'ion ion-android-cart',
                mode: 'list',
                forAuth: true
            },
            children: [
                {
                    path: 'create', 
                    component: require('./views/ap/rawmaterialsbooking/form.vue'),
                    meta: {
                        title: 'Raw Materials Booking',
                        subtitle: 'Create Raw Materials Booking',
                        icon: 'ion ion-android-cart',
                        mode: 'create',
                        forAuth: true
                    }
                },

                {
                    path: ':id/edit', 
                    component: require('./views/ap/rawmaterialsbooking/form.vue'), 
                    meta: {
                        title: 'Purchaseorders',
                        subtitle: 'Edit Purchaseorder',
                        icon: 'ion ion-android-cart',
                        mode: 'edit',
                        forAuth: true
                    }
                },
            ]
        },

                

        /* Bills */
        {
            path: '/bills',
            name: 'bills',
            component: Bills,
            meta: {
                title: 'Bills',
                subtitle: 'List of Bills',
                icon: 'ion ion-android-cart',
                mode: 'list',
                forAuth: true
            },
            children: [
                {
                    path: 'create', 
                    component: require('./views/ap/bills/form.vue'),
                    meta: {
                        title: 'Bills',
                        subtitle: 'Create Bill',
                        icon: 'ion ion-android-cart',
                        mode: 'create',
                        forAuth: true
                    }
                },

                {
                    path: ':id/edit', 
                    component: require('./views/ap/bills/form.vue'), 
                    meta: {
                        title: 'Bills',
                        subtitle: 'Edit Bill',
                        icon: 'ion ion-android-cart',
                        mode: 'edit',
                        forAuth: true
                    }
                },
            ]
        },

                

        /* Vouchers */
        {
            path: '/vouchers',
            name: 'vouchers',
            component: Vouchers,
            meta: {
                title: 'Vouchers',
                subtitle: 'List of Vouchers',
                icon: 'ion ion-card',
                mode: 'list',
                forAuth: true
            },
            children: [
                {
                    path: 'create', 
                    component: require('./views/ap/vouchers/form.vue'),
                    meta: {
                        title: 'Vouchers',
                        subtitle: 'Create Voucher',
                        icon: 'ion ion-card',
                        mode: 'create',
                        forAuth: true
                    }
                },

                {
                    path: ':id/edit', 
                    component: require('./views/ap/vouchers/form.vue'), 
                    meta: {
                        title: 'Vouchers',
                        subtitle: 'Edit Voucher',
                        icon: 'ion ion-card',
                        mode: 'edit',
                        forAuth: true
                    }
                },
            ]
        },

                

        /* Invoices */
        {
            path: '/invoices',
            name: 'invoices',
            component: Invoices,
            meta: {
                title: 'Invoices',
                subtitle: 'List of Invoices',
                icon: 'ion ion-android-clipboard',
                mode: 'list',
                forAuth: true
            },
            children: [
                {
                    path: 'create', 
                    component: require('./views/ar/invoices/form.vue'),
                    meta: {
                        title: 'Invoices',
                        subtitle: 'Create Invoice',
                        icon: 'ion ion-android-clipboard',
                        mode: 'create',
                        forAuth: true
                    }
                },

                {
                    path: ':id/edit', 
                    component: require('./views/ar/invoices/form.vue'), 
                    meta: {
                        title: 'Invoices',
                        subtitle: 'Edit Invoice',
                        icon: 'ion ion-android-clipboard',
                        mode: 'edit',
                        forAuth: true
                    }
                },

                {
                    path: 'batch-details', 
                    component: require('./views/ar/invoices/batch.vue'),
                    meta: {
                        title: 'Batch Invoice Details',
                        subtitle: 'Invoice details by batch',
                        icon: 'ion ion-android-clipboard',
                        mode: 'create',
                        forAuth: true
                    },
                    children: [
                        {
                            path: 'batch-details/upload', 
                            component: require('./views/ar/invoices/upload.vue'),
                            meta: {
                                title: 'Upload Batch Invoice Details',
                                subtitle: 'Upload Invoice details by batch',
                                icon: 'ion ion-android-clipboard',
                                mode: 'create',
                                forAuth: true
                            }  
                        }
                    ]
                },
            ]
        },

                

        /* Receipts */
        {
            path: '/receipts',
            name: 'receipts',
            component: Receipts,
            meta: {
                title: 'Receipts',
                subtitle: 'List of Receipts',
                icon: 'ion ion-ios-calculator',
                mode: 'list',
                forAuth: true
            },
            children: [
                {
                    path: 'create', 
                    component: require('./views/ar/receipts/form.vue'),
                    meta: {
                        title: 'Receipts',
                        subtitle: 'Create Receipt',
                        icon: 'ion ion-ios-calculator',
                        mode: 'create',
                        forAuth: true
                    }
                },

                {
                    path: ':id/edit', 
                    component: require('./views/ar/receipts/form.vue'), 
                    meta: {
                        title: 'Receipts',
                        subtitle: 'Edit Receipt',
                        icon: 'ion ion-ios-calculator',
                        mode: 'edit',
                        forAuth: true
                    }
                },
            ]
        },

                



        /* AP */

        /* AP Companies */
        {
            path: '/ap/companies',
            name: 'ap-companies',
            component: APCompanies,
            meta: {
                title: 'AP: Companies',
                subtitle: 'List of Companies',
                icon: 'ion ion-ios-calculator',
                mode: 'list',
                forAuth: true
            },
            children: [
                {
                    path: 'create', 
                    component: require('./views/references/ap/companies/form.vue'),
                    meta: {
                        title: 'AP: Companies',
                        subtitle: 'Create Company',
                        icon: 'ion ion-ios-calculator',
                        mode: 'create',
                        forAuth: true
                    }
                },

                {
                    path: ':id/edit', 
                    component: require('./views/references/ap/companies/form.vue'), 
                    meta: {
                        title: 'AP: Companies',
                        subtitle: 'Edit Company',
                        icon: 'ion ion-ios-calculator',
                        mode: 'edit',
                        forAuth: true
                    }
                },
            ]
        },

                

        /* AP Customers */
        {
            path: '/ap/customers',
            name: 'ap-customers',
            component: APCustomers,
            meta: {
                title: 'AP: Customers',
                subtitle: 'List of Customers',
                icon: 'ion ion-ios-calculator',
                mode: 'list',
                forAuth: true
            },
            children: [
                {
                    path: 'create', 
                    component: require('./views/references/ap/customers/form.vue'),
                    meta: {
                        title: 'AP: Customers',
                        subtitle: 'Create Customer',
                        icon: 'ion ion-ios-calculator',
                        mode: 'create',
                        forAuth: true
                    }
                },

                {
                    path: ':id/edit', 
                    component: require('./views/references/ap/customers/form.vue'), 
                    meta: {
                        title: 'AP: Customers',
                        subtitle: 'Edit Customer',
                        icon: 'ion ion-ios-calculator',
                        mode: 'edit',
                        forAuth: true
                    }
                },
            ]
        },

                

        /* AP Customergroups */
        {
            path: '/ap/customergroups',
            name: 'ap-customergroups',
            component: APCustomergroups,
            meta: {
                title: 'AP: Customer Groups',
                subtitle: 'List of Customer Groups',
                icon: 'ion ion-ios-calculator',
                mode: 'list',
                forAuth: true
            },
            children: [
                {
                    path: 'create', 
                    component: require('./views/references/ap/customergroups/form.vue'),
                    meta: {
                        title: 'AP: Customer Groups',
                        subtitle: 'Create Customer Group',
                        icon: 'ion ion-ios-calculator',
                        mode: 'create',
                        forAuth: true
                    }
                },

                {
                    path: ':id/edit', 
                    component: require('./views/references/ap/customergroups/form.vue'), 
                    meta: {
                        title: 'AP: Customer Groups',
                        subtitle: 'Edit Customer Group',
                        icon: 'ion ion-ios-calculator',
                        mode: 'edit',
                        forAuth: true
                    }
                },
            ]
        },

                

        /* Suppliers */
        {
            path: '/ap/suppliers',
            name: 'suppliers',
            component: Suppliers,
            meta: {
                title: 'AP: Suppliers',
                subtitle: 'List of Suppliers',
                icon: 'ion ion-ios-calculator',
                mode: 'list',
                forAuth: true
            },
            children: [
                {
                    path: 'create', 
                    component: require('./views/references/ap/suppliers/form.vue'),
                    meta: {
                        title: 'AP: Suppliers',
                        subtitle: 'Create Supplier',
                        icon: 'ion ion-ios-calculator',
                        mode: 'create',
                        forAuth: true
                    }
                },

                {
                    path: ':id/edit', 
                    component: require('./views/references/ap/suppliers/form.vue'), 
                    meta: {
                        title: 'AP: Suppliers',
                        subtitle: 'Edit Supplier',
                        icon: 'ion ion-ios-calculator',
                        mode: 'edit',
                        forAuth: true
                    }
                },
            ]
        },

                

        /* Ready Stock Codes */
        {
            path: '/ap/rscodes',
            name: 'rscodes',
            component: ReadyStockCodes,
            meta: {
                title: 'AP: Ready Stock Codes',
                subtitle: 'List of Ready Stock Codes',
                icon: 'ion ion-ios-calculator',
                mode: 'list',
                forAuth: true
            }, 
            children: [
                {
                    path: 'create', 
                    component: require('./views/references/ap/rscodes/form.vue'),
                    meta: {
                        title: 'AP: Ready Stock Codes',
                        subtitle: 'Create Ready Stock Code',
                        icon: 'ion ion-ios-calculator',
                        mode: 'create',
                        forAuth: true
                    }
                },

                {
                    path: ':id/edit', 
                    component: require('./views/references/ap/rscodes/form.vue'), 
                    meta: {
                        title: 'AP: Ready Stock Codes',
                        subtitle: 'Edit Ready Stock Code',
                        icon: 'ion ion-ios-calculator',
                        mode: 'edit',
                        forAuth: true
                    }
                },
            ]
        },

                

        /* END AP */


        /* AR */

        /* AR Companies */
        {
            path: '/ar/companies',
            name: 'ar-companies',
            component: ARCompanies,
            meta: {
                title: 'AR: Companies',
                subtitle: 'List of Companies',
                icon: 'ion ion-ios-calculator',
                mode: 'list',
                forAuth: true
            },
            children: [
                {
                    path: 'create', 
                    component: require('./views/references/ar/companies/form.vue'),
                    meta: {
                        title: 'AR: Companies',
                        subtitle: 'Create Company',
                        icon: 'ion ion-ios-calculator',
                        mode: 'create',
                        forAuth: true
                    }
                },

                {
                    path: ':id/edit', 
                    component: require('./views/references/ar/companies/form.vue'), 
                    meta: {
                        title: 'AR: Companies',
                        subtitle: 'Edit Company',
                        icon: 'ion ion-ios-calculator',
                        mode: 'edit',
                        forAuth: true
                    }
                },
            ]
        },

         {
            path: '/ap/item-categories',
            name: 'item-categories',
            component: require('./views/ap/item-categories/index.vue'),
            meta: {
                title: 'Item Categories',
                subtitle: 'List of Item Categories',
                // icon: null,
                mode: 'list',
                forAuth: true
            },
            children: [
                {
                    path: 'create',
                    name: 'create-item-category',
                    component: require('./views/ap/item-categories/form.vue'),
                    meta: {
                        title: 'Item Categories',
                        subtitle: 'Create Item Category',
                        // icon: null,
                        mode: 'create',
                        forAuth: true
                    }
                }, {
                    path: ':id/edit',
                    name: 'edit-item-category',
                    component: require('./views/ap/item-categories/form.vue'),
                    meta: {
                        title: 'Item Categories',
                        subtitle: 'Edit Item Category',
                        // icon: null,
                        mode: 'edit',
                        forAuth: true
                    }
                }
            ]
        }, 

        {
            path: '/ap/items',
            name: 'items',
            component: require('./views/ap/items/index.vue'),
            meta: {
                title: 'Items',
                subtitle: 'List of Items',
                // icon: null,
                mode: 'list',
                forAuth: true
            },
            children: [
                {
                    path: 'create',
                    name: 'create-item',
                    component: require('./views/ap/items/form.vue'),
                    meta: {
                        title: 'Items',
                        subtitle: 'Create Item',
                        // icon: null,
                        mode: 'create',
                        forAuth: true
                    }
                }, {
                    path: ':id/edit',
                    name: 'edit-item',
                    component: require('./views/ap/items/form.vue'),
                    meta: {
                        title: 'Items',
                        subtitle: 'Edit Item',
                        // icon: null,
                        mode: 'edit',
                        forAuth: true
                    }
                }
            ]
        },

        {
            path: '/ap/inventory-entries/',
            name: 'inventory-entries',
            component: require('./views/ap/inventory-entries/index.vue'),
            meta: {
                title: 'Transactions',
                subtitle: 'List of Transactions',
                // icon: null,
                mode: 'list',
                forAuth: true
            },
            children: [
                {
                    path: 'create',
                    name: 'create-inventory-entry',
                    component: require('./views/ap/inventory-entries/form.vue'),
                    meta: {
                        title: 'Transactions',
                        subtitle: 'Create Transaction',
                        // icon: null,
                        mode: 'create',
                        forAuth: true
                    }
                }, {
                    path: ':id/edit',
                    name: 'edit-inventory-entry',
                    component: require('./views/ap/inventory-entries/form.vue'),
                    meta: {
                        title: 'Transactions',
                        subtitle: 'Edit Transaction',
                        // icon: null,
                        mode: 'edit',
                        forAuth: true
                    }
                }
            ]
        },



        /* AR Customers */
        {
            path: '/ar/customers',
            name: 'ar-customers',
            component: ARCustomers,
            meta: {
                title: 'AR: Customers',
                subtitle: 'List of Customers',
                icon: 'ion ion-ios-calculator',
                mode: 'list',
                forAuth: true
            }, 
            children: [
                {
                    path: 'create', 
                    component: require('./views/references/ar/customers/form.vue'),
                    meta: {
                        title: 'AR: Customers',
                        subtitle: 'Create Customer',
                        icon: 'ion ion-ios-calculator',
                        mode: 'create',
                        forAuth: true
                    }
                },

                {
                    path: ':id/edit', 
                    component: require('./views/references/ar/customers/form.vue'), 
                    meta: {
                        title: 'AR: Customers',
                        subtitle: 'Edit Customer',
                        icon: 'ion ion-ios-calculator',
                        mode: 'edit',
                        forAuth: true
                    }
                },
            ]
        },

        /* AR Customergroups */
        {
            path: '/ar/customergroups',
            name: 'ar-customergroups',
            component: ARCustomergroups,
            meta: {
                title: 'AR: Customer Groups',
                subtitle: 'List of Customer Groups',
                icon: 'ion ion-ios-calculator',
                mode: 'list',
                forAuth: true
            }, 
            children: [
                {
                    path: 'create', 
                    component: require('./views/references/ar/customergroups/form.vue'),
                    meta: {
                        title: 'AR: Customer Groups',
                        subtitle: 'Create Customer Group',
                        icon: 'ion ion-ios-calculator',
                        mode: 'create',
                        forAuth: true
                    }
                },

                {
                    path: ':id/edit', 
                    component: require('./views/references/ar/customergroups/form.vue'), 
                    meta: {
                        title: 'AR: Customer Groups',
                        subtitle: 'Edit Customer Group',
                        icon: 'ion ion-ios-calculator',
                        mode: 'edit',
                        forAuth: true
                    }
                }
            ]
        },

                

        /* END AR */


        /* Users */
        {
            path: '/users',
            name: 'users',
            component: Users,
            meta: {
                title: 'Users',
                subtitle: 'List of Users',
                icon: 'ion ion-ios-calculator',
                mode: 'list',
                forAuth: true
            }, 
            children: [
                {
                    path: 'create', 
                    component: require('./views/references/users/form.vue'),
                    meta: {
                        title: 'Users',
                        subtitle: 'Create User',
                        icon: 'ion ion-ios-calculator',
                        mode: 'create',
                        forAuth: true
                    }
                },

                {
                    path: ':id/edit', 
                    component: require('./views/references/users/form.vue'), 
                    meta: {
                        title: 'Users',
                        subtitle: 'Edit User',
                        icon: 'ion ion-ios-calculator',
                        mode: 'edit',
                        forAuth: true
                    }
                },
            ]
        },

        /* Roles */
        {
            path: '/roles',
            name: 'roles',
            component: Roles,
            meta: {
                title: 'Roles',
                subtitle: 'List of Roles',
                icon: 'ion ion-ios-calculator',
                mode: 'list',
                forAuth: true
            }, 
            children: [
                {
                    path: 'create', 
                    component: require('./views/references/roles/form.vue'),
                    meta: {
                        title: 'Roles',
                        subtitle: 'Create Role',
                        icon: 'ion ion-ios-calculator',
                        mode: 'create',
                        forAuth: true
                    }
                },

                {
                    path: ':id/edit', 
                    component: require('./views/references/roles/form.vue'), 
                    meta: {
                        title: 'Roles',
                        subtitle: 'Edit Role',
                        icon: 'ion ion-ios-calculator',
                        mode: 'edit',
                        forAuth: true
                    }
                },
            ]
        },

        // {path: '/customer/create', component: require('./views/customer/form.vue')},
        // {path: '/customer/:id/edit', component: require('./views/customer/form.vue'), meta: {mode: 'edit'}},
        // {path: '/customer/:id', component: require('./views/customer/show.vue')},

        // {path: '/invoice', component: require('./views/invoice/index.vue')},
        // {path: '/invoice/create', component: require('./views/invoice/form.vue')},
        // {path: '/invoice/:id/edit', component: require('./views/invoice/form.vue'), meta: {mode: 'edit'}},
        // {path: '/invoice/:id', component: require('./views/invoice/show.vue')},
    ],

    linkActiveClass: 'active',

    // mode: 'history',
    
    // base: __dirname
})

export default router