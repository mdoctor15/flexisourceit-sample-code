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

                <!-- <tabs>
                    <tab name="Invoice" :selected="true">
                        <div class="tab-pane"> -->
                            <form class="form" @submit.prevent="saveInvoice">

                                <!-- INVOICE -->
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        <label style="font-size: 18px; color: #636b6f;">Invoice</label>
                                    </div>
                                    <div class="panel-body">

                                        <div class="row">
                                           
                                            <div class="col-sm-4">
                                                <div class="form-group">
                                                    <label>Auto Number</label>
                                                    <input type="text" class="form-control" v-model="form.InvoiceAuto" disabled>
                                                </div>
                                            </div>
                                            <div class="col-sm-4">                                
                                                <div class="form-group">
                                                    <label>Invoice Number</label>
                                                    <input type="text" class="form-control" v-model="form.InvoiceNumber">
                                                    <small class="text-danger" v-if="errors.InvoiceNumber">{{errors.InvoiceNumber[0]}}</small>
                                                </div>                            
                                            </div>
                                            <div class="col-sm-4">                                
                                                <div class="form-group">
                                                    <label>Invoice Date</label>
                                                    <date-picker v-model="form.InvoiceDate" :config="datepicker.options"></date-picker>
                                                    <small class="text-danger" v-if="errors.InvoiceDate">{{errors.InvoiceDate[0]}}</small>
                                                </div>                            
                                            </div>                            
                                        </div>

                                        <div class="row">
                                            <div class="col-sm-8">
                                                <div class="form-group">
                                                    <label>Company</label> 
                                                    <select2 class="form-control" :options="option.companies" v-model="form.CompanyCode"></select2>
                                                    <small class="text-danger" v-if="errors.CompanyCode">{{errors.CompanyCode[0]}}</small>
                                                </div>
                                            </div>
                                            <div class="col-sm-4">                                
                                                <div class="form-group">
                                                    <div class="form-group">
                                                        <label>Type Of Sale</label>
                                                        <select2 class="form-control" :options="option.saleTypes" v-model="form.TypeOfSale"></select2>
                                                    </div>
                                                </div>                           
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-sm-8">
                                                <div class="form-group">
                                                    <label>Customer</label> 
                                                    <select2 class="form-control" :options="option.customers" v-model="form.CustomerCode"></select2>
                                                    <small class="text-danger" v-if="errors.CustomerCode">{{errors.CustomerCode[0]}}</small>
                                                </div>
                                            </div>
                                            <div class="col-sm-4">                                
                                                <div class="form-group">
                                                    <div class="form-group">
                                                        <label>Terms</label>
                                                        <input type="text" class="form-control" v-model="form.txtTerms">
                                                    </div>
                                                </div>                           
                                            </div>
                                        </div>

                                        <div class="row">
                                           
                                            <div class="col-sm-3">
                                                <div class="form-group">
                                                    <label>Type Of Pricing</label>
                                                    <select2 class="form-control" :options="option.pricingTypes" v-model="form.TypeOfPricing"></select2>
                                                </div>
                                            </div>
                                            <div class="col-sm-3">                                
                                                <div class="form-group">
                                                    <label>COD</label>
                                                    <select2 class="form-control" :options="option.yesNo" v-model="form.COD"></select2>
                                                </div>                            
                                            </div>
                                            <div class="col-sm-3">                                
                                                <div class="form-group">
                                                    <label>SRP</label>
                                                    <select2 class="form-control" :options="option.yesNo" v-model="form.SRP"></select2>
                                                </div>                            
                                            </div> 
                                            <div class="col-sm-3">                                
                                                <div class="form-group">
                                                    <label>Cancelled</label>
                                                    <select2 class="form-control" :options="option.yesNo" v-model="form.Cancelled"></select2>
                                                </div>                            
                                            </div>                            
                                        </div>

                                        <div class="row">
                                           
                                            <div class="col-sm-4">
                                                <div class="form-group">
                                                    <label>DR Reference</label>
                                                    <input type="text" class="form-control" v-model="form.DRReference">
                                                </div>
                                            </div>
                                            <div class="col-sm-4">                                
                                                <div class="form-group">
                                                    <label>Counter Status</label>
                                                    <select2 class="form-control" :options="option.counterStatus" v-model="form.CounterStatus"></select2>
                                                </div>                            
                                            </div>
                                            <div class="col-sm-4">                                
                                                <div class="form-group">
                                                    <label>Counter Number</label>
                                                    <date-picker v-model="form.InvoiceCounterNumber" :config="datepicker.options"></date-picker>
                                                </div>                            
                                            </div>                            
                                        </div>

                                        <div class="row">
                                            <div class="col-sm-8">
                                                <div class="form-group">
                                                    <label>Reference Doc</label> 
                                                    <input type="text" class="form-control" v-model="form.ReferenceDoc">
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <!-- END INVOICE -->

                                
                                <div class="panel panel-default" v-show="form.InvoiceAuto">            
                                    <!-- DETAILS -->
                                    <div class="panel-body">
                                        <table class="table table-border table-condensed table-striped">
                                            <thead>
                                                <tr>
                                                    <th colspan="4" style="font-size: 18px;">DETAILS</th>
                                                    <th colspan="4" class="text-right">
                                                        <a type="button" class="btn btn-sm btn-success" data-toggle="modal" data-target="#modalNewDetails" @click.prevent="clearDetails" style="cursor: pointer;"><i class="fa fa-plus"></i> Add New</a>
                                                        <a type="button" class="btn btn-sm btn-success" data-toggle="modal" data-target="#modalBatchDetails" @click.prevent="fetchBatchDetails" style="cursor: pointer;"><i class="fa fa-plus"></i> Add from Batch</a>
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <th></th>
                                                    <th>AutoID</th>
                                                    <!-- <th>Stock Code</th> -->
                                                    <th>RS Code</th>
                                                    <th class="text-center">Qty</th>
                                                    <th class="text-center">Unit</th>
                                                    <th class="text-right">SRP</th>
                                                    <th class="text-right">Amount</th>
                                                    <th class="text-right">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(item, key) in theItems">
                                                    <td class="text-center"><i :class="item.modifiedTag ? 'fa fa-circle' : 'fa fa-check' " :style="item.modifiedTag ? 'color: #e86200f0;' : 'color: green;'"></i></td>
                                                    <td>{{ item.AutoID }}</td>
                                                    <!-- <td>{{ item.StockCode }}</td> -->
                                                    <td>{{ item.RSCode }}</td>
                                                    <td class="text-center">{{ item.Qty }}</td>
                                                    <td class="text-center">{{ item.Unit }}</td>
                                                    <td class="text-right">{{ parseFloat(item.SRP).toFixed(2).numberWithCommas() }}</td>
                                                    <td class="text-right">{{ parseFloat(item.Amount).toFixed(2).numberWithCommas() }}</td>
                                                    <td class="text-right">
                                                        <!-- <a type="button" class="btn btn-sm btn-default" @click.prevent="reloadOldDetails(key)" style="cursor: pointer;"><i class="fa fa-reply"></i></a> -->
                                                        <a type="button" class="btn btn-sm btn-default" data-toggle="modal" data-target="#modalNewDetails" @click.prevent="displayDetails(key)" style="cursor: pointer;"><i class="fa fa-edit"></i></a>
                                                        <a type="button" class="btn btn-sm btn-default" @click.prevent="removeDetails(key)" style="cursor: pointer;"><i class="fa fa-remove"></i></a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr style="border-top: 4px solid #ddd;">
                                                    <th colspan="6" class="text-right">TOTAL</th>
                                                    <th class="text-right">{{ parseFloat(totalInvoice.totalAmount).toFixed(2).numberWithCommas() }}</th>
                                                    <th></th>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                    <!-- END DETAILS -->

                                    <!-- COMPUTATIONS -->
                                    <table class="table" style="table-layout: fixed;">
                                        <tr>
                                            <td><label>Total Quantity</label></td>
                                            <td class="text-right">{{ totalInvoice.totalQuantity }}</td>

                                            <td><label>Total Sales</label></td>
                                            <td class="text-right">{{ parseFloat(form.NetOfVAT ? form.NetOfVAT : 0).toFixed(2).numberWithCommas() }}</td>

                                            <td><label>Total Amount</label></td>
                                            <td class="text-right"><strong>{{ parseFloat(totalInvoice.totalAmount).toFixed(2).numberWithCommas() }}</strong></td>
                                        </tr>

                                        <tr>
                                            <td></td>
                                            <td></td>

                                            <td><label>VAT %</label></td>
                                            <td class="text-right">{{ (form.VATPercent ? form.VATPercent : 0) * 100 }}%</td>

                                            <td><label>Gross Amount</label></td>
                                            <td class="text-right">{{ parseFloat(form.GrossAmount).toFixed(2).numberWithCommas() }}</td>
                                        </tr>

                                        <tr>
                                            <td></td>
                                            <td></td>

                                            <td><label>VAT Amount</label></td>
                                            <td class="text-right">{{ parseFloat(form.VATAmount ? form.VATAmount : 0).toFixed(2).numberWithCommas() }}</td>

                                            <td><label>Disc % ({{ form.DiscountPercentage }})</label></td>
                                            <td class="text-right">{{ parseFloat(form.DiscountAmount ? form.DiscountAmount : 0).toFixed(2).numberWithCommas() }}</td>
                                        </tr>

                                        <tr>
                                            <td><label>Unpaid Amount</label></td>
                                            <td class="text-right">{{ parseFloat(form.BalanceDue ? form.BalanceDue : 0).toFixed(2).numberWithCommas() }}</td>

                                            <td><label>Total Amount Due</label></td>
                                            <td class="text-right">{{ parseFloat(totalAmountDue ? totalAmountDue : 0).toFixed(2).numberWithCommas() }}</td>

                                            <td><label>Total Amount Due</label></td>
                                            <td class="text-right">{{ parseFloat(form.totalAmountDue ? form.totalAmountDue : 0).toFixed(2).numberWithCommas() }}</td>
                                        </tr>
                                    </table>
                                    <!-- END COMPUTATIONS -->
                                </div>


                                <hr style="border: 2px dashed #aaa;" />


                                <!-- USERS -->
                                <div class="panel panel-default">
                                    <div class="panel-body">
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <div class="form-group">
                                                    <label>Encoded By:</label>
                                                    <input type="text" class="form-control" v-model="form.EncodeBy" style="margin-bottom: 10px;">
                                                    <date-picker v-model="form.EncodeDate" :config="datepicker.options" placeholder="Date Encoded"></date-picker>
                                                </div>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="form-group">
                                                    <label>Modified By:</label>
                                                    <input type="text" class="form-control" v-model="form.EditLastBy" style="margin-bottom: 10px;">
                                                    <date-picker v-model="form.EditLastDate" :config="datepicker.options" placeholder="Date Modified"></date-picker>
                                                </div>                            
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="form-group">
                                                    <label>Posted</label>                            
                                                    <select2 class="form-control" :options="option.yesNo" v-model="form.Posted" style="margin-bottom: 10px;"></select2>
                                                    <date-picker v-model="form.PostedDate" :config="datepicker.options" placeholder="Date Posted"></date-picker>
                                                </div>                            
                                            </div>                            
                                        </div>   
                                    </div>   
                                </div>
                                <!-- END USERS -->


                                <hr />
                                
                                <button class="btn btn-success">Save</button>
                                <router-link :to="'/invoices'" class="btn btn-default">Cancel</router-link>
                            </form>
                            
                            <modal id="modalNewDetails" :title="modalNewDetailsTitle">
                                <div class="row">
                                    <div class="col-sm-7">
                                        <div class="form-group">
                                            <label>RS Code</label>
                                            <select2 class="form-control" 
                                                :options="option.rscodes"
                                                v-model="item.RSCode">
                                            </select2>                              
                                        </div>
                                    </div>
                                    <div class="col-sm-5">
                                        <div class="form-group">
                                            <label>Stock Code</label>
                                            <input type="text" class="form-control text-right" v-model="item.StockCode">                              
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-4">
                                        <div class="form-group">
                                            <label>Qty</label>
                                            <input type="text" class="form-control text-right" v-model="item.Qty">
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="form-group">
                                            <label>Unit</label>
                                            <select2 class="form-control" id="unit" :options="option.units" v-model="item.Unit">
                                            </select2>
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="form-group">
                                            <label>SRP</label>
                                            <input type="text" class="form-control text-right" v-model="item.SRP">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    
                                    <div class="col-sm-4 col-sm-offset-8">
                                        <div class="form-group">
                                            <label>Amout</label>
                                            <input type="text" class="form-control text-right" v-model="itemTotalAmount">
                                        </div>
                                    </div>
                                </div>

                                <template slot="actionButtons">
                                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary" data-dismiss="modal" @click.prevent="saveDetails">Save changes</button>
                                </template>
                            </modal>

                            <modal id="modalBatchDetails" :title="modalBatchDetailsTitle">
                                <div style="max-height: 500px; overflow: auto;">
                                    <table class="table table-border table-condensed table-striped" >
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>AutoID</th>
                                                <th>Company</th>
                                                <th>RS Code</th>
                                                <th class="text-center">Qty</th>
                                                <th class="text-center">Unit</th>
                                                <th class="text-right">SRP</th>
                                                <th class="text-right">Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <template v-if="theUnassociatedDetails.length != 0">
                                                <tr v-for="(item, key) in theUnassociatedDetails">
                                                    <!-- <td class="text-center"><i :class="item.modifiedTag ? 'fa fa-circle' : 'fa fa-check' " :style="item.modifiedTag ? 'color: #e86200f0;' : 'color: green;'"></i></td> -->
                                                    <td class="text-center">
                                                        <input type="checkbox" :checked="item.checked" @click="toggleUnassociated(key)">
                                                    </td>
                                                    <!-- <td class="text-center"><i class="fa fa-check" :class="{ selected: item.clicked }" @click="toggleCheckColor(key, item.clicked)"></i></td> -->
                                                    <!-- <td>{{ item.StockCode }}</td> -->
                                                    <td>{{ item.AutoID }}</td>
                                                    <td>{{ item.CompanyCode }}</td>
                                                    <td>{{ item.RSCode }}</td>
                                                    <td class="text-center">{{ item.Qty }}</td>
                                                    <td class="text-center">{{ item.Unit }}</td>
                                                    <td class="text-right">{{ parseFloat(item.SRP).toFixed(2).numberWithCommas() }}</td>
                                                    <td class="text-right">{{ parseFloat(item.Amount).toFixed(2).numberWithCommas() }}</td>
                                                </tr>
                                            </template>
                                            <template v-else>
                                                <tr>
                                                    <td colspan="7"><em>No batch of invoice details found..</em></td>
                                                </tr>
                                            </template>
                                                
                                        </tbody>
                                    </table>
                                </div>

                                <template slot="actionButtons">
                                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary" data-dismiss="modal" @click.prevent="selectBatchDetails">Add Selected</button>
                                </template>
                            </modal>
                        <!-- </div>
                    </tab> -->

                    <!-- <tab name="Details"> -->
                        <!-- <div class="tab-pane"> -->
                            
                        <!-- </div> -->
                   <!--  </tab>
                </tabs> -->

            </div>
        </div>
    </div>
        
</template>
<script>
    import {getHeader} from './../../../config';
    import Alert from '../../../components/Alert.vue'
    import Select2 from '../../../components/Select2.vue';

    import Modal from '../../../components/Modal.vue'
    import Tab from '../../../components/Tab.vue'
    import Tabs from '../../../components/Tabs.vue'

    import { Form, Error } from './../../../classes';
        
    import datePicker from 'vue-bootstrap-datetimepicker';
    import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';

    export default {
        name: 'InvoiceForm',

        data() {
            return {
                tab: 1,
                form: {},
                item: {
                    AutoID: '',
                    InvoiceAuto: '',
                    CompanyCode: '',
                    InvoiceNumber: '',
                    RSCode: '',
                    Unit: '',
                    Qty: '',
                    SRP: '',
                    Amount: '',
                    StockCode: '',
                    FieldTimeStamp: null,
                    modifiedTag: 0
                },
                oldItems: {},
                errors: {},
                option: {},
                title: 'Create',
                modalNewDetailsTitle: 'New Invoice Detail',
                modalBatchDetailsTitle: 'Batch Invoice Details',
                initialize: '/api/ar/invoices/create',
                redirect: '/invoices',
                store: '/api/ar/invoices',
                method: 'post',
                datepicker: {
                    options: {
                      format: 'DD-MMM-YYYY',
                      useCurrent: false,
                    }
                },
                alert: {
                    type: null,
                    message: null
                },
                unassociateddetails: {},

            }
        },

        beforeMount() {
            if(this.$route.meta.mode === 'edit') {
                this.title = 'EDIT | Invoice #: '
                this.initialize = '/api/ar/invoices/' + this.$route.params.id + '/edit'
                this.store = '/api/ar/invoices/' + this.$route.params.id
                this.method = 'put'
            }
            // console.log('/api/invoices/' + this.$route.params.id + '/edit')
            this.fetchData()
        },

        mounted() {
            $('#modalNewDetails').on("hidden.bs.modal", this.clearDetails)
        },

        watch: {
            '$route': 'fetchData'
        },

        computed: {

            theItems: function() {
                let items = [];
                for ( let key in this.form.items) {
                     if(typeof this.form.items[key].modifiedTag == "undefined") {
                        this.form.items[key].modifiedTag = 0;
                     }
                    items.push(this.form.items[key]);
                    // console.log(key, options[key])
                }
                return items;
            },

            theUnassociatedDetails: function() {
                let unassociateddetails = [];
                for ( let key in this.unassociateddetails) {
                     if(typeof this.unassociateddetails[key].checked == "undefined") {
                        this.unassociateddetails[key].checked = false;
                     }
                    unassociateddetails.push(this.unassociateddetails[key]);
                    // console.log(key, options[key])
                }
                return unassociateddetails;
            },

            itemTotalAmount: function() {
                return parseFloat(this.item.Qty * this.item.SRP).toFixed(2);
            },

            totalAmountDue: function() {
                this.form.GrossAmount = this.totalInvoice.totalAmount;                
                this.form.VATAmount = this.totalInvoice.totalAmount * this.form.VATPercent;
                this.form.NetOfVAT = this.totalInvoice.totalAmount - this.form.VATAmount;
                this.form.DiscountAmount = this.totalInvoice.totalAmount * this.form.DiscountPercentage;

                this.form.totalAmountDue = this.totalInvoice.totalAmount - this.form.DiscountAmount;

                this.form.BalanceDue = this.form.totalAmountDue;


                return this.form.NetOfVAT + this.form.VATAmount;
            },

            totalInvoice: function() {
                let totalAmount = 0;
                let totalQuantity = 0;
                for (let x in this.form.items) {
                    totalAmount += parseFloat(this.form.items[x].Amount);
                    totalQuantity += parseInt(this.form.items[x].Qty);
                    // console.log(item)
                }        
                return {
                    totalAmount: totalAmount,
                    totalQuantity: totalQuantity 
                };
            },

            alertMessage: function() {
                return this.alert.message;
            },

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
                        response.data.form.UnassociatedDetails = [];
                        response.data.form.InvoiceDate = response.data.form.InvoiceDate ? moment(response.data.form.InvoiceDate).format('DD-MMM-YYYY') : '';
                        response.data.form.EncodeDate = response.data.form.EncodeDate ? moment(response.data.form.EncodeDate).format('DD-MMM-YYYY') : '';
                        response.data.form.EditLastDate = response.data.form.EditLastDate ? moment(response.data.form.EditLastDate).format('DD-MMM-YYYY') : '';
                        response.data.form.PostedDate = response.data.form.PostedDate ? moment(response.data.form.PostedDate).format('DD-MMM-YYYY') : '';

                        // console.log(response.data.form);
                        let invoice = new Form(response.data.form)
                        // console.log(invoice);
                        
                        this.oldItems = invoice.items;
                        Vue.set(vm.$data, 'form', invoice);
                        Vue.set(vm.$data, 'option', response.data.option);

                        if(vm.$route.meta.mode === 'edit') {
                            vm.title += '<strong>'+response.data.form.InvoiceNumber+'</strong>'; 
                            // console.log(vm.title)
                        }
                    })
                    .catch(function(error) {
                        // console.log(error)
                    })
            },

            displayDetails(key) {
                let itm = this.form.items[key];
                this.item = itm;
                this.modalNewDetailsTitle = 'Edit Invoice Detail';
            },

            // reloadOldDetails(key) {
            //     let itm = this.oldItems[key];

            //     let cnf = confirm("You are about to reload the old data of " + itm.RSCode +". Continue?");

            //     if(cnf) {
            //         this.form.items[key] = itm;
            //     } 
            // },

            clearDetails() {
                this.item = {
                    AutoID: '',
                    InvoiceAuto: '',
                    CompanyCode: '',
                    InvoiceNumber: '',
                    RSCode: '',
                    Unit: '',
                    Qty: '',
                    SRP: '',
                    Amount: '',
                    StockCode: '',
                    FieldTimeStamp: null
                }
                this.modalNewDetailsTitle = 'New Invoice Detail';
            },

            removeDetails(key) {
                let itm = this.form.items[key];

                let cnf = confirm("You are about to delete the " + itm.RSCode +". Continue?");

                if(cnf) {
                    this.form.items.splice(key, 1);
                } 

                this.alert.message = itm.RSCode + ' was removed..';
                this.alert.type = 'success';
                window.scrollTo(0,0)
                
                // console.log(itm);
            },

            fetchBatchDetails() {
                var vm = this;
                // this.loading = true;

                this.$http.get(`/api/ar/invoices/unassociateddetails?company=${this.form.CompanyCode}`)
                    .then(function(response) {
                        console.log(response.data)

                        Vue.set(vm.$data, 'unassociateddetails', response.data.unassociateddetails)
                        this.loading = false;
                    })
                    .catch(function(error) {
                        console.log(error)
                    })
            },

            // toggleCheckColor(key, clicked) {

            //     this.unassociateddetails[key].clicked = !clicked;

            //     console.log(!clicked)

            //     // let checkColor = this.unassociateddetails[key].checkColor;

            //     // this.unassociateddetails[key].checkColor = (checkColor == '#ddd' ? '#666' : '#ddd'); 

            //     // // this.theUnassociatedDetails();

            //     // console.log(checkColor);

            // },
            
            toggleUnassociated(key) {

                this.unassociateddetails[key].checked = !this.unassociateddetails[key].checked;
                // console.log(this.unassociateddetails[key].checked);

            },
            
            
            selectBatchDetails() {

                let items = this.form.items;
                let unassociateditems = this.unassociateddetails;
                let associateds = 0;


                for ( let key in this.unassociateddetails) {
                    let unassociateditem = this.unassociateddetails[key];
                    if(unassociateditem.checked) {
                        associateds += 1;
                        unassociateditem.InvoiceAuto = this.form.InvoiceAuto;
                        unassociateditem.InvoiceNumber = this.form.InvoiceNumber;
                        unassociateditem.modifiedTag = 1;

                        this.form.UnassociatedDetails.push(unassociateditem);
                        items.push(unassociateditem);
                     }
                }

                this.alert.message = associateds + ' items were added from the batch..';
                this.alert.type = 'success';


            },
            

            saveDetails() {
                let items = this.form.items;

                let key = items.findIndex((e) => e.AutoID === this.item.AutoID)
                this.item.Amount = this.itemTotalAmount;
                
                this.item.modifiedTag = 1;
                if(key === -1) {
                    // add the item
                    this.item.CompanyCode = this.form.CompanyCode;
                    this.item.InvoiceAuto = this.form.InvoiceAuto;
                    this.item.InvoiceNumber = this.form.InvoiceNumber;

                    items.push(this.item);         
                    this.alert.message = this.item.RSCode + ' was added..';           
                } else {
                    // update the form.items
                    items[key] = this.item;
                    this.alert.message = this.item.RSCode + ' was updated..';           
                }
                
                this.clearDetails();

                this.alert.type = 'success';
                window.scrollTo(0,0);
            },

            saveInvoice() {
                var vm = this
                vm.alert.message = 'Saving invoice..';
                vm.alert.type = 'info';

                axios[this.method](this.store, qs.stringify(this.form), {headers: getHeader()})
                    .then(function(response) {
                        if(response.data.saved) {
                            Vue.set(vm.$data, 'form', response.data.invoice)
                            // console.log(response.data.saved)
                            // vm.$router.push(vm.redirect)
                            let action = vm.form.InvoiceAuto ? 'updated' : 'added';
                            vm.$router.push({
                                path: vm.redirect,
                                query: {
                                    alert: {
                                        type: 'success',
                                        message: 'Invoice was successfully ' + action + '..'
                                    }
                                }
                            })
                        }
                    })
                    .catch(function(error) {
                        Vue.set(vm.$data, 'errors', error.response.data)
                    })
            }
        },

        components: {
            Alert,
            Modal,
            Tabs,
            Tab,
            Select2,
            datePicker
        }
    }
</script>


<style scoped>
    form label {
        font-size: 11px;
        text-transform: uppercase;
    }

    h3 strong {
        color: #85CE36 !important;
    } 

    td i.selected {
        color: #666 ;
    }
    

    
</style>