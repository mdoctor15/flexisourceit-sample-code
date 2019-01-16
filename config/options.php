<?php 

	return [

		/* General options*/

		'yesNo' => [
			'Yes' => 'Yes',
			'No' => 'No'
		],		

		'pricingTypes' => [
			'Regular' => 'Regular',
			'Discounted' => 'Discounted'
		],

		'saleTypes' => [
			'Consigned' => 'Consigned',
			'Outright' => 'Outright'
		],

		'counterStatus' => [
			'001' => 'On File', 
			'002' => 'For Counter', 
			'003' => 'Countered', 
			'004' => 'Collected', 
			'006' => 'For Collection'
		],

		'units' => [
			'pc' => 'pc', 
			'pcs' => 'pcs', 
			'set' => 'set', 
			'sets' => 'sets'
		],

		/* END General options*/

		/* Supplier options*/

		'supplierTypes' => [
			'S' => 'Supplier',
			'SC' => 'Subcon',
			'FG' => 'Finished Goods Supplier',
			'U' => 'Utilities',
			'PR' => 'Payroll RB'
		],

		'supplierExpenseCategories' => [
			'Payroll-Promo' => 'Payroll-Promo',
			'Payroll-Clerical' => 'Payroll-Clerical',
			'Security Services' => 'Security Services',
			'Fabric' => 'Fabric',
			'Others' => 'Others',
		],

		'supplierBanks' => [
			'Union Bank' => 'Union Bank',
			'East West Bank' => 'East West Bank',
			'BDO' => 'BDO'
		],

		/* END Supplier options*/

		/* Customer options*/

		'companyCategories' => [
			'SM Concession' => 'SM Concession',
			'RB Concession' => 'RB Concession'
		],

		'outletCategories' => [
			'SM OUTLET' => 'SM Outlet',
			'RB OUTLET' => 'RB Outlet'
		],

		'outletSizes' => [
			'Small' => 'Small',
			'Medium' => 'Medium',
			'Large' => 'Large'
		],

		/* END Customer options*/


		/* Permission options*/

		'actions' => [
			'create' => 'Create',
			'view' => 'View',
			'update' => 'Update',
			'delete' => 'Delete'
		],

		'modules' => [
			'purchaseorder' => 'Purchaseorder',
			'joborder' => 'Joborder',
			'rawmaterial' => 'RawMaterial',
			'bill' => 'Bill',
			'voucher' => 'Voucher',

			'invoice' => 'Invoice',
			'receipt' => 'Receipt',

			'user' => 'User',
			'role' => 'Role',

			// ap ref tables
			'apcompany' => 'AP Company',
			'apsupplier' => 'AP Supplier',
			'apcustomer' => 'AP Customer',
			'apcustomergroup' => 'AP Customer Group',
			'apreadystockgood' => 'AP Ready Stock Good',

			// ar ref tables
			'arcompany' => 'AR Company',
			'arcustomer' => 'AR Customer',
			'arcustomergroup' => 'AR Customer Group',
		],

		/* END Customer options*/

	

	];


