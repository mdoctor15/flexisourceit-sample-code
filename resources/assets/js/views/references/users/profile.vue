<template>
	<div class="row">
        <div class="col-sm-12">
            <!-- Profile -->
            <div class="card bg-primary">
                <div class="card-body profile-user-box">

                    <div class="row">
                        <div class="col-sm-8">
                            <div class="media">
                                <span class="float-left m-2 mr-4"><img src="https://avatars3.githubusercontent.com/u/3959008?v=3&s=40" style="height: 100px;" alt="" class="rounded-circle img-thumbnail"></span>
                                <div class="media-body">

                                    <h4 class="mt-1 mb-1 text-white">{{ form.name }}</h4>
                                    <p class="font-13 text-white-50"> {{ typeof  form.roles !== 'undefined' ? form.roles.toUpperCase() : '' }}</p>

                                    <ul class="mb-0 list-inline text-light">
                                        <li class="list-inline-item mr-3">
                                            <h5 class="mb-1">$ 25,184</h5>
                                            <p class="mb-0 font-13 text-white-50">Total Revenue</p>
                                        </li>
                                        <li class="list-inline-item">
                                            <h5 class="mb-1">5482</h5>
                                            <p class="mb-0 font-13 text-white-50">Number of Orders</p>
                                        </li>
                                    </ul>
                                </div> <!-- end media-body-->
                            </div>
                        </div> <!-- end col-->

                        <div class="col-sm-4">
                            <div class="text-center mt-sm-0 mt-3 text-sm-right">
                                <button type="button" class="btn btn-default">
                                    <i class="mdi mdi-account-settings-variant mr-1"></i> Edit Profile
                                </button>
                            </div>
                        </div> <!-- end col-->
                    </div> <!-- end row -->

                </div> <!-- end card-body/ profile-user-box-->
            </div><!--end profile/ card -->
        </div> <!-- end col-->
    </div>
    <!-- end row -->
</template>

<script>
    
    export default {
        name: 'ProfileForm',

        data() {
            return {
                form: { },                
                title: 'Profile',
                initialize: '/api/directories/my-profile'                
            }
        },

        beforeMount() {           
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
                        let profile = response.data.profile;
                                                
                        Vue.set(vm.$data, 'form', profile)

                    })
                    .catch(function(error) {
                        // console.log(error)
                    })
            }

        }
    }

</script>

<style scoped>
	.card {
	    border: none;
	    -webkit-box-shadow: 0 0 35px 0 rgba(154,161,171,.15);
	    box-shadow: 0 0 35px 0 rgba(154,161,171,.15);
	    margin-bottom: 30px;
	}
	.bg-primary {
	    background-color: #727cf5!important;
	}
	.card {
	    position: relative;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	    -webkit-box-orient: vertical;
	    -webkit-box-direction: normal;
	    -ms-flex-direction: column;
	    flex-direction: column;
	    min-width: 0;
	    word-wrap: break-word;
	    background-color: #fff;
	    background-clip: border-box;
	    border: 1px solid #e3eaef;
	    border-radius: .25rem;
	}

	.card-body {
	    -webkit-box-flex: 1;
	    -ms-flex: 1 1 auto;
	    flex: 1 1 auto;
	    padding: 3.5rem;
	}

	.mr-4, .mx-4 {
	    margin-right: 3.25rem!important;
	}
	.m-2 {
	    /* margin: .75rem!important; */
	}
	.float-left {
	    float: left!important;
	}

	.media {
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	    -webkit-box-align: start;
	    -ms-flex-align: start;
	    align-items: flex-start;
	}

	.text-white {
	    color: #fff!important;
	}
	.mb-1, .my-1 {
	    margin-bottom: .375rem!important;
	}
	.mt-1, .my-1 {
	    margin-top: .375rem!important;
	}
	.font-13 {
	    font-size: 13px!important;
	}
	.text-white-50 {
	    color: rgba(255,255,255,.5)!important;
	}
	p {
	    margin-top: 0;
	    margin-bottom: 1rem;
	}

	.rounded-circle {
	    border-radius: 50%!important;
	}
	.img-thumbnail {
	    padding: .25rem;
	    background-color: #fff;
	    border: 1px solid #dee2e6;
	    border-radius: .25rem;
	    max-width: 100%;
	    height: auto;
	}
	img {
	    vertical-align: middle;
	    border-style: none;
	}
</style>