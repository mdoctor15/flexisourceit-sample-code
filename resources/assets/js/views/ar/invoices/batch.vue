<template>
	<div>
		<!-- <p>test</p> -->
        <!-- <router-view  :key="$route.fullPath" /> -->
        <!-- <alert v-if="alert.message" :type="alert.type" :message="alert.message"></alert> -->

        <data-viewer :source="source" :thead="thead" :filter="filter" :create="create" :title="title" v-if="$route.meta.mode=='list'">
            <template slot="extra">
                <router-link to="/invoices/batch-details/upload" class="btn btn-primary" v-if="$gate.allow('create', 'invoice')">Batch Details</router-link>
            </template>
            <template slot-scope="props">
                <tr>
                    <td>{{props.item.InvoiceDate}}</td>
                    <td>{{props.item.InvoiceNumber}}</td>
                    <td>{{props.item.CustomerCode}}</td>
                    <td class="text-right">{{(props.item.TotalAmountDue ? props.item.TotalAmountDue : 0).toFixed(2)}}</td>
                    <td>
                        <router-link :to="'/invoices/' + props.item.InvoiceAuto + '/edit'">Edit</router-link>
                    </td>
                </tr>
            </template>
        </data-viewer>
    </div>
</template>

<script>
	    
	import DataViewer from '../../../components/DataViewer.vue';

	export default {
		name: 'BatchInvoiceDetails',
        data() {
            return {
                title: 'Batch Invoice Details',
                policy: 'invoicedetails',
                alert: {
                    type: null,
                    message: null
                },
                source: '/api/ar/invoices',
                create: '/invoices/create',
                thead: [
                    {title: 'Date', key: 'InvoiceDate', sort: true},
                    {title: 'Invoice No.', key: 'InvoiceNumber', sort: true},
                    {title: 'Customer', key: 'CustomerCode', sort: true},
                    {title: 'Amount', key: 'TotalAmountDue', sort: true},
                    {title: 'Action', key: '', sort: false}
                ],
                filter: {
                    'InvoiceNumber': 'Invoice No.', 
                    'InvoiceDate': 'Date', 
                    'CustomerCode': 'Customer', 
                    'VoucherAmount': 'TotalAmountDue'
                }
            }
        },
        mounted: function() {
            // if(this.$route.query.alert.message) {
            //     this.alert = this.$route.query.alert; 
            // }
        },
        components: {
            DataViewer,
            // Alert
        }
	}
</script>