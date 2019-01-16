<template>
    <div>
        <router-view  :key="$route.fullPath" />
        <alert v-if="alert.message" :type="alert.type" :message="alert.message"></alert>       

        <data-viewer :source="source" :thead="thead" :filter="filter" :create="create" :title="title" :policy="policy" v-if="$route.meta.mode=='list'">
            <template slot-scope="props">
                <tr>
                    <!-- <td>{{props.item.CustomerCode}}</td> -->
                    <td>{{props.item.name}}</td>
                    <td>{{props.item.email}}</td>
                    <td>{{props.item.roles}}</td>
                    <td>
                        <router-link :to="'/users/' + props.item.id + '/edit'" v-if="$gate.allow('update', policy, props.item)">Edit</router-link>
                    </td>
                </tr>
            </template>
        </data-viewer>

    </div>
</template>
<script>
    import Alert from '../../../components/Alert.vue'
    import DataViewer from '../../../components/DataViewer.vue'

    export default {
        name: 'UserIndex',
        data() {
            return {
                title: 'Users',
                policy: 'user',
                alert: {
                    type: null,
                    message: null
                },
                source: '/api/directories/users',
                create: '/users/create',
                thead: [
                    // {title: 'Customer Code', key: 'CustomerCode', sort: true},
                    {title: 'Name', key: 'name', sort: true},
                    {title: 'Email Address', key: 'email'},
                    {title: 'Roles', key: 'role', sort: true},
                    {title: 'Action', key: '', sort: false}
                ],
                filter: {
                    'name': 'Name', 
                    'email': 'Email Address', 
                    'roles': 'Role'
                }
            }
        },
        mounted: function() {
            if(typeof this.$route.query.alert != 'undefined') {
                this.alert = this.$route.query.alert; 
            }
        },
        components: {
            DataViewer,
            Alert
        }
    }
</script>