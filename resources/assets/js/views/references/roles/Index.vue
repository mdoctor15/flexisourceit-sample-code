<template>
    <div>
        <router-view  :key="$route.fullPath" />
        <alert v-if="alert.message" :type="alert.type" :message="alert.message"></alert>       
        <data-viewer :source="source" :thead="thead" :filter="filter" :create="create" :title="title" :policy="policy" v-if="$route.meta.mode=='list'">
            <template slot-scope="props">
                <tr>
                    <!-- <td>{{props.item.CustomerCode}}</td> -->
                    <td>{{props.item.name}}</td>
                    <td>{{props.item.slug}}</td>
                    <td>{{props.item.permissions}}</td>
                    <td>
                        <router-link :to="'/roles/' + props.item.slug + '/edit'" v-if="$gate.allow('update', policy, props.item)">Edit</router-link>
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
        name: 'RoleIndex',
        data() {
            return {
                title: 'Roles',
                policy: 'role',
                alert: {
                    type: null,
                    message: null
                },
                source: '/api/directories/roles',
                create: '/roles/create',
                thead: [
                    // {title: 'Customer Code', key: 'CustomerCode', sort: true},
                    {title: 'Name', key: 'name', sort: true},
                    {title: 'Slug', key: 'slug', sort: true},
                    {title: 'Permissions', key: 'permissions'},
                    {title: 'Action', key: '', sort: false}
                ],
                filter: {
                    'name': 'Name', 
                    'slug': 'Slug', 
                    'permissions': 'Permissions'
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