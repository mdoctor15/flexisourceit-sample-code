<?php 

Route::group(['namespace' => 'App\Modules\AR\Controllers', 'prefix' => 'api/ar', 'middleware' => ['web', 'auth:api']], function() {

	Route::get('invoices/unassociateddetails', 'InvoiceController@unassociateddetails');

	Route::resource('invoices', 'InvoiceController');
    Route::resource('receipts', 'ReceiptController');

});