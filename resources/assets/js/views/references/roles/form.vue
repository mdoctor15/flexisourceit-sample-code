<template>
    <div>
        <alert v-if="alertMessage" 
        :type="alertType" 
        :message="alertMessage"></alert>
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 v-html="title"></h3>
            </div>
            <div class="panel-body">
                <form class="form" @submit.prevent="save">
                    <div class="row">
                        <div class="col-sm-7" style="border-right: 2px dashed #ddd;">
                            
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <label>Name</label>
                                        <input type="text" class="form-control" v-model="form.name">
                                        <small class="text-danger" v-if="errors.name">{{errors.name[0]}}</small>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <label>Slug</label>
                                        <input type="text" class="form-control" v-model="form.slug" :disabled="this.$route.meta.mode === 'edit'">
                                        <small class="text-danger" v-if="errors.slug">{{errors.slug[0]}}</small>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <label>Permissions</label>
                                        <input type="hidden" v-model="form.permissions">
                                        <!-- <ul v-if="thePermissions">
                                            <li v-for="perm in thePermissions">  {{ perm.toUpperCaseWords() }}</li>
                                        </ul> -->
                                        <div style="padding: 0 20px;">
                                            <span v-if="thePermissions.length == 0"><em>No permissions granted..</em></span>
                                            <table class="table table-condensed table-striped table-bordered" v-else>
                                                <tr v-for="perm in thePermissions">
                                                    <td>{{ perm.toUpperCaseWords() }}</td>
                                                    <td><a class="btn btn-sm btn-light" @click.prevent="removePermission(perm)"><i class="fa fa-times-circle"></i> Remove</a></td>
                                                </tr>
                                            </table>
                                            
                                        </div>
                                            
                                        <small class="text-danger" v-if="errors.permissions">{{errors.permissions[0]}}</small>
                                    </div>
                                </div>
                            </div>
      
                        </div>
                        <div class="col-sm-5" >

                            <h3>{{ formTitle }}</h3>

                            <!-- <div class="row">
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <label>Date</label>
                                        <date-picker v-model="datepicker.date" :config="datepicker.options"></date-picker>
                                    </div>
                                </div>
                            </div> -->
                            

                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <label>Module</label>
                                        <select2 class="form-control" :options="option.modules" v-model="permission.module">
                                        </select2> 
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <label>Action</label>
                                        <select2 class="form-control" :options="option.actions" v-model="permission.action" >
                                        </select2> 
                                    </div>
                                </div>
                            </div>

                            <button class="btn btn-default pull-right" @click.prevent="setPermission()"><i class="fa fa-plus-circle"></i> Add</button>

                            <br />
                            <hr />

                            <table class="table table-bordered table-striped table-condensed">
                                <thead>
                                    <tr>
                                        <th>Added Permissions</th>
                                        <th>Removed Permissions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <ul>
                                                <li v-for="aItem in addedPermissions">{{ aItem.toUpperCaseWords() }}</li>
                                            </ul>
                                        </td>
                                        <td>
                                            <ul>
                                                <li v-for="rItem in removedPermissions">{{ rItem.toUpperCaseWords() }}</li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            
                        </div>

                    </div>

                    <hr />

                    <button class="btn btn-success">Save</button>
                    <router-link :to="'/roles'" class="btn btn-default">Cancel</router-link>

                    
                </form>
            </div>
        </div>
    </div>
</template>
<script>
    import {getHeader} from './../../../config';
    import Alert from '../../../components/Alert.vue'
    import Select2 from '../../../components/Select2.vue';
    
    import datePicker from 'vue-bootstrap-datetimepicker';
    import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';

    export default {
        name: 'RoleForm',

        data() {
            return {
                form: { permissions: [] },
                formTitle: 'New Permission',
                errors: {},
                option: {},
                permission: {
                    action: null,
                    module: null,
                    added: [],
                    removed: []
                },
                permissions: [],
                title: 'Create',
                initialize: '/api/directories/roles/create',
                redirect: '/roles',
                store: '/api/directories/roles',
                method: 'post',
                datepicker: {
                    date: new Date(),
                    options: {
                      format: 'DD-MMM-YYYY',
                      useCurrent: false,
                    }
                },
                alert: {
                    type: null,
                    message: null
                },
            }
        },

        beforeMount() {
            if(this.$route.meta.mode === 'edit') {
                this.title = 'EDIT | '
                this.initialize = '/api/directories/roles/' + this.$route.params.id + '/edit'
                this.store = '/api/directories/roles/' + this.$route.params.id
                this.method = 'put'
            }
            // console.log('/api/directories/roles/' + this.$route.params.id + '/edit')
            this.fetchData()
        },

        watch: {
            '$route': 'fetchData'
        },

        computed: {
            thePermissions: function() {
                let permissions = this.form.permissions.length > 0 ? this.form.permissions.toString().split(', ') : [];
                return permissions;
            },
            addedPermissions: function() {
                return this.permission.added;
            },
            removedPermissions: function() {
                return this.permission.removed;
            },
            alertMessage: function() {
                return this.alert.message;
            }
            ,
            alertType: function() {
                return this.alert.type;
            }
        },

        methods: {
            fetchData() {
                var vm = this
                this.$http.get(this.initialize)
                    .then(function(response) {
                        // console.log(response)
                        let form = response.data.form;
                        if (form.permissions == null) {
                            form.permissions = [];
                        } else {
                            // form.permissions = form.permissions.split(', ');
                        }
                        
                        Vue.set(vm.$data, 'form', form)

                        // let option = response.data.option;

                        // option.roles = _.map(option.roles, function(data) {
                        //     var pick = _.pick(data, 'name', 'slug');
                        //     var object = { id: pick.slug, name: pick.name }
                        //     return object;
                        // })

                        Vue.set(vm.$data, 'option', response.data.option)

                        if(vm.$route.meta.mode === 'edit') {
                            vm.title += '<strong>'+response.data.form.name+'</strong>'; 
                            // console.log(vm.title)
                        }

                    })
                    .catch(function(error) {
                        // console.log(error)
                    })
            },

            save() {
                var vm = this
                vm.alert.message = 'Saving roles..';
                vm.alert.type = 'info';
                // this.$http[this.method](this.store, qs.stringify(this.form), {headers: getHeader()})
                axios[this.method](this.store, qs.stringify(this.form), {headers: getHeader()})
                    .then(function(response) {
                        if(response.data.saved) {
                            Vue.set(vm.$data, 'form', response.data.role)
                            // console.log(response.data.saved)
                            // vm.$router.push(vm.redirect)
                            vm.$router.push({
                                path: vm.redirect,
                                query: {
                                    alert: {
                                        type: 'success',
                                        message: 'Role was added..'
                                    }
                                }
                            })
                            
                            vm.permission.module = null;
                            vm.permission.action = null;
                            vm.permission.added = [];
                            vm.permission.removed = [];
                            vm.alert.message = 'Role was successfully saved..';
                            vm.alert.type = 'success';
                        }
                    })
                    .catch(function(error) {
                        Vue.set(vm.$data, 'errors', error.response.data)
                        vm.alert.message = 'An error occured while saving role data..';
                        vm.alert.type = 'danger';
                        // console.log(error)
                    })
            },

            setPermission() {
                if(this.permission.action && this.permission.module) {

                    let perm = this.permission.action + ' ' + this.permission.module;

                    let permissions = this.form.permissions.split(', ');

                    if(!permissions.includes(perm)) {
                        // add to added items
                        this.permission.added.push(perm);

                        // add to permissions
                        permissions.push(perm);
                        this.form.permissions = permissions.join(', ');

                        this.alert.message = 'Permission is added to the list.';
                        this.alert.type = 'success';
                    } else {
                        this.alert.message = 'Permission was already granted.';
                        this.alert.type = 'warning';
                    }
                    

                    

                    // console.log(this.form.permissions)
                    // return this.permission.action + ' ' + this.permission.module;
                } else {
                    return;
                }
            },

            removePermission(perm) {
                console.log(perm);
                // add to removed items
                this.permission.removed.push(perm);

                // remove item from the permissions
                let permissions = this.form.permissions.split(', ');
                let index = permissions.indexOf(perm);
                if (index !== -1) permissions.splice(index, 1);
                this.form.permissions = permissions.join(', ')

                this.alert.message = 'Permission is removed from the list.';
                this.alert.type = 'success';
            }
        },

        components: {
            Alert,
            'select2': Select2,
            datePicker
            // VueDatepickerLocal
            // 'v-autocomplete': autocomplete,
        }
    }
</script>

<style scoped>
    form label {
        /* font-size: 10px; */
        text-transform: uppercase;
    }

    h3 strong {
        color: #85CE36 !important;
    }

</style>

<style src="select2/dist/css/select2.min.css"></style>
<style src="select2-bootstrap-theme/dist/select2-bootstrap.min.css"></style>
