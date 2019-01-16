<?php 

Route::group(['namespace' => 'App\Modules\Directories\Controllers\AP', 'prefix' => 'api/directories/ap', 'middleware' => ['web', 'auth:api']], function() {

	Route::resource('companies', 'CompanyController');
	Route::resource('suppliers', 'SupplierController');
    Route::resource('customers', 'CustomerController');
    Route::resource('customergroups', 'CustomergroupController');

    Route::resource('rscodes', 'ReadystockController');

});

Route::group(['namespace' => 'App\Modules\Directories\Controllers\AR', 'prefix' => 'api/directories/ar', 'middleware' => ['web', 'auth:api']], function() {

	Route::resource('companies', 'CompanyController');
	Route::resource('suppliers', 'SupplierController');
    Route::resource('customers', 'CustomerController');

});


Route::group(['namespace' => 'App\Modules\Directories\Controllers', 'prefix' => 'api/directories', 'middleware' => ['web', 'auth:api']], function() {

    Route::resource('users', 'UserController');
    Route::resource('roles', 'RoleController');

    Route::get('my-profile', function (Illuminate\Http\Request $request) {
	    return response()
	            ->json([
	                'profile' => $request->user(),
	            ]);
	});

});