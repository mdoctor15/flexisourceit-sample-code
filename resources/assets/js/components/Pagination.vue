<template>
    <ul class="pagination">
        <li v-if="currentPage > 1">
            <a href="#" @click.prevent="pageChanged(1)" aria-label="Previous">
                <span aria-hidden="true">first</span>
            </a>
        </li>
        <li :class="currentPage <= 1 ? 'disabled': ''">
            <a href="#" @click.prevent="prev()" aria-label="Previous">
                <span aria-hidden="true">prev</span>
            </a>
        </li>
        <li v-for="n in paginationRange" :class="activePage(n)">
            <a href="#" @click.prevent="pageChanged(n)">{{ n }}</a>
        </li>
        <li :class="(currentPage == totalPages) || (totalPages == 0) ? 'disabled': ''">
            <a href="#" @click.prevent="next()" aria-label="Next">
                <span aria-hidden="true">next</span>
            </a>
        </li>
        <li v-if="currentPage < totalPages">
            <a href="#" @click.prevent="pageChanged(lastPage)" aria-label="Next">
                <span aria-hidden="true">last</span>
            </a>
        </li>
    </ul>
</template>

<script>

    import Util from '../services/Util'

    export default {

        props: {

            // Current Page
            currentPage: {
              type: Number,
              required: true
            },

            // Total number of pages
            totalPages: Number,

            // Items per page
            itemsPerPage: Number,

            // Total items
            totalItems: Number,

            // Visible Pages
            visiblePages: {
                type: Number,
                default: 8,
                coerce: (val) => parseInt(val)
            }

        },

        computed: {
            lastPage () {
                if (this.totalPages) {
                    return this.totalPages;
                } else {
                    return this.totalItems % this.itemsPerPage === 0 
                        ? this.totalItems / this.itemsPerPage
                        : Math.floor(this.totalItems / this.itemsPerPage) + 1;
                }
            },

            paginationRange () {
                let start =
                this.currentPage - this.visiblePages / 2 <= 0
                    ? 1 : this.currentPage + this.visiblePages / 2 > this.lastPage
                    ? Util.lowerBound(this.lastPage - this.visiblePages + 1, 1)
                    : Math.ceil(this.currentPage - this.visiblePages / 2);

                let range = [];

                for (let i = 0; i < this.visiblePages && i < this.lastPage; i++) {
                    range.push(start + i);
                }

                return range;
            }
        },
        methods: {
            activePage (pageNum) {
                return this.currentPage === pageNum ? 'active' : ''
            },
            prev () {
                this.$emit('page-prev')
            },
            pageChanged (pageNum) {
                this.$emit('page-changed', pageNum)
            },
            next (pageNum) {
                this.$emit('page-next')
            }
        }
    }
</script>