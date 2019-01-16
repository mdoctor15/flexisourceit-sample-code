<template>
    <div>
        <!-- <alert v-if="alert" type="success" message="Test"></alert> -->
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
                                        <label>Email Address</label>
                                        <input type="email" class="form-control" v-model="form.email">
                                        <small class="text-danger" v-if="errors.email">{{errors.email[0]}}</small>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <label>Roles</label>
                                        <select2 class="form-control" :options="option.roles" :value="form.roles" v-model="form.roles" multiple>
                                        </select2> 
                                        <!-- <select class="form-control select2" v-model="form.roles" multiple>
                                            <option v-for="(role, key) in option.roles" :value="key">
                                                {{ role }}
                                            </option>
                                        </select> -->
                                        <small class="text-danger" v-if="errors.roles">{{errors.roles[0]}}</small>
                                    </div>
                                </div>
                            </div>
      
                        </div>

                    </div>

                    <button class="btn btn-success">Save</button>
                    <router-link :to="'/users'" class="btn btn-default">Cancel</router-link>
                </form>
            </div>
        </div>
    </div>
    
</template>
<script>
    import {getHeader} from './../../../config';
    import Alert from '../../../components/Alert.vue';
    import Select2 from '../../../components/Select2.vue';

    export default {
        name: 'UserForm',

        data() {
            return {
                // alert: '',
                form: { roles: [] },
                errors: {},
                option: {},
                title: 'Create',
                initialize: '/api/directories/users/create',
                redirect: '/users',
                store: '/api/directories/users',
                method: 'post'
            }
        },

        beforeMount() {
            if(this.$route.meta.mode === 'edit') {
                this.title = 'EDIT | '
                this.initialize = '/api/directories/users/' + this.$route.params.id + '/edit'
                this.store = '/api/directories/users/' + this.$route.params.id
                this.method = 'put'
            }
            // console.log('/api/directories/users/' + this.$route.params.id + '/edit')
            this.fetchData()
        },

        watch: {
            '$route': 'fetchData'
        },

        methods: {
            fetchData() {
                var vm = this
                this.$http.get(this.initialize)
                    .then(function(response) {
                        // console.log(response)
                        let form = response.data.form;
                        if (form.roles == null) {
                            form.roles = [];
                        } else {
                            form.roles = form.roles.split(', ');
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
                            console.log(vm.title)
                        }
                    })
                    .catch(function(error) {
                        // console.log(error)
                    })
            },
            save() {
                var vm = this
                // this.$http[this.method](this.store, qs.stringify(this.form), {headers: getHeader()})
                axios[this.method](this.store, qs.stringify(this.form), {headers: getHeader()})
                    .then(function(response) {
                        if(response.data.saved) {
                            // console.log(response.data.saved)
                            vm.$router.push({
                                path: vm.redirect,
                                query: {
                                    alert: {
                                        type: 'success',
                                        message: 'User was added..'
                                    }
                                }
                            })
                        }
                    })
                    .catch(function(error) {
                        Vue.set(vm.$data, 'errors', error.response.data)
                        // console.log(error)
                    })
            }
        },

        components: {
            'select2': Select2,
            'alert': Alert,
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
