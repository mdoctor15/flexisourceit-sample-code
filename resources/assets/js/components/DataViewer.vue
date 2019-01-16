<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <!-- <span class="panel-title">{{title}}</span> -->

            <div class="panel-header">
                <div class="panel-header-action">
                    <router-link :to="create" class="btn btn-primary" v-if="$gate.allow('create', policy)">Create</router-link>
                    <button class="btn btn-default" @click="showFilter = !showFilter">F</button>
                </div>
                <div class="panel-header-filter" v-if="showFilter">
                    <div class="panel-header-filter-column">
                        <select class="form-control" v-model="params.search_column">
                            <option v-for="(column, key) in filter" :value="key">{{column}}</option>
                        </select>
                    </div>
                    <div class="panel-header-filter-operator">
                        <select class="form-control" v-model="params.search_operator">
                            <option v-for="(value, key) in operators" :value="key">{{value}}</option>
                        </select>
                    </div>
                    <div class="panel-header-filter-input">
                        <input type="text" class="form-control" v-model="params.search_query_1"
                            @keyup.enter="fetchData" placeholder="Search">
                    </div>
                    <div class="panel-header-filter-input" v-if="params.search_operator === 'between'">
                        <input type="text" class="form-control" v-model="params.search_query_2"
                            @keyup.enter="fetchData" placeholder="Search">
                    </div>
                    <div class="filter-btn">
                        <button class="btn btn-primary btn-block" @click="fetchData">Filter</button>
                    </div>
                </div>
                <slot class="panel-header-extra" name="extra"></slot>
            </div>
            
        </div>
        <!-- <div class="panel-body"> -->
            <!-- <loader  bg-loader="./../assets/_modular/assets/loader.gif" /> -->
            <table class="table table-striped">
                <caption style="padding: 10px; border-bottom: 1px solid #ddd;" class="text-right">
                    <em>Page {{ model.current_page }} of {{ model.last_page }}, showing {{ model.per_page }} records out of {{ model.total }} total, starting on record {{ model.from }}, ending on {{ model.to }}.</em>
                </caption>
                <thead>
                    <tr>
                        <th v-for="item in thead" :class="item.sort ? 'cursor-pointer' : ''">
                            <div class="dataviewer-th" @click="sort(item.key)" v-if="item.sort">
                                <span>{{item.title}}</span>
                                <span v-if="params.column === item.key">
                                    <span v-if="params.direction === 'asc'"> ⇣</span>
                                    <span v-else> ⇡</span>
                                </span>
                            </div>
                            <div v-else>
                                <span>{{item.title}}</span>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody :class="model.data.length==0?'greyed':''">
                    <tr v-if="model.data.length==0" >
                        <td :colspan="thead.length" class="text-center" style="height: 380px; line-height: 380px; font-size: 20px;"><img src="./../../../../public/assets/_modular/assets/table-loader.gif" alt=""></td>
                    </tr>
                    <slot v-else v-for="item in model.data" :item="item"></slot>
                </tbody>
            </table>
        <!-- </div> -->
        <div class="panel-footer pagination-footer">
            <div class="text-center paginate pagination-item">
                <pagination :current-page="parseInt(model.current_page)"
                            :total-pages="parseInt(model.last_page)"
                            @page-prev="prev"
                            @page-changed="pagenum"
                            @page-next="next">
                </pagination>
            </div> 

            <div class="pagination-item form-inline pull-right">
                <span>Per page: </span>
                <select v-model="params.per_page" @change="fetchData" class="form-control" style="margin-left: 10px;">
                    <option>10</option>
                    <option>25</option>
                    <option>50</option>
                </select>
            </div>
            <!-- <div class="pagination-item">
                <small>Showing {{model.from}} - {{model.to}} of {{model.total}}</small>
            </div> -->
            <!-- <div class="pagination-item form-inline">
                <div class="from-group">
                    <small class="form-label">Current page: </small>
                    <input type="text" class="pagination-input form-control" v-model="params.page"
                        @keyup.enter="fetchData">
                    <small class="form-label"> of {{model.last_page}}</small>
                </div>
            </div> -->
            <!-- <div class="pagination-item">
                <button @click="prev" class="btn btn-default btn-sm">Prev</button>
                <button @click="next" class="btn btn-default btn-sm">Next</button>
            </div> -->
        </div>
    </div>
</template>
<script>
    import Vue from 'vue'
    import axios from 'axios'
    import Pagination from './Pagination.vue';
    import Loader from './../components/themes/modular/Loader.vue';

    export default {
        props: ['source', 'thead', 'filter', 'create', 'title', 'policy'],
        components : { Pagination, Loader },
        data() {
            return {
                showFilter: false,
                model: {
                    data: []
                },
                params: {
                    column: '',
                    direction: 'asc',
                    per_page: 10,
                    page: 1,
                    search_column: '',
                    search_operator: 'equal_to',
                    search_query_1: '',
                    search_query_2: ''
                },
                operators: {
                    equal_to: '=',
                    not_equal: '<>',
                    less_than: '<',
                    greater_than: '>',
                    less_than_or_equal_to: '<=',
                    greater_than_or_equal_to: '>=',
                    in: 'IN',
                    not_in: 'NOT IN',
                    like: 'LIKE',
                    between: 'BETWEEN'
                },
                loading: false
            }
        },
        beforeMount() {
            this.fetchData();
        },
        methods: {
            next() {
                if(this.model.next_page_url) {
                    this.params.page++;
                    this.model.data = [];
                    this.fetchData();
                }
            },
            prev() {
                if(this.model.prev_page_url) {
                    this.params.page--;
                    this.model.data = [];
                    this.fetchData();
                }
            },
            pagenum (pageNum) {
                this.params.page = pageNum
                this.model.data = [];
                this.fetchData();
            },
            sort(column) {
                if(column === this.params.column) {
                    if(this.params.direction === 'desc') {
                        this.params.direction = 'asc'
                    } else {
                        this.params.direction = 'desc'
                    }
                } else {
                    this.params.column = column
                    this.params.direction = 'asc'
                }

                this.fetchData();

            },
            fetchData() {
                var vm = this;
                // this.loading = true;

                this.$http.get(this.buildURL())
                    .then(function(response) {
                        Vue.set(vm.$data, 'model', response.data.model)
                        this.loading = false;
                    })
                    .catch(function(error) {
                        console.log(error)
                    })

                
            },
            buildURL() {
                var p = this.params
                // console.log(`${this.source}?column=${p.column}&direction=${p.direction}&per_page=${p.per_page}&page=${p.page}&search_column=${p.search_column}&search_operator=${p.search_operator}&search_query_1=${p.search_query_1}&search_query_2=${p.search_query_2}`)
                return `${this.source}?column=${p.column}&direction=${p.direction}&per_page=${p.per_page}&page=${p.page}&search_column=${p.search_column}&search_operator=${p.search_operator}&search_query_1=${p.search_query_1}&search_query_2=${p.search_query_2}`
            }
        }
    }
</script>

<style scoped>
    .panel .table {
        position: relative;
    }

    .panel loader {
        position: absolute;
        top: 50%;
        left: 50%;

    }

    .greyed {
        opacity: .60;
    }
</style>