<?php

namespace App\Modules\AR\Models;

use Illuminate\Database\Eloquent\Model;
use App\Support\FilterPaginateOrder;
use App\Support\TotalCount;

use App\Modules\Directories\Models\AR\Company;
use App\Modules\Directories\Models\AR\Customer;


class Invoice extends Model
{

	use FilterPaginateOrder;
    use TotalCount;
    use \Awobaz\Compoships\Compoships;


    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'tbltrarinvoiceheader';

    protected $primaryKey = 'InvoiceAuto';

    const CREATED_AT = 'EncodeDate';
    const UPDATED_AT = 'EditLastDate';

    /**
     * The connection name for the model.
     *
     * @var string
     */
    protected $connection = 'rbar';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['InvoiceNumber', 'CompanyCode', 'InvoiceDate', 'CustomerCode', 'Terms', 'DueDate', 'Cancelled', 'TypeOfPricing', 'TypeOfSale', 'COD', 'SRP', 'ReferenceDoc', 'NetOfVAT', 'VATPercent', 'VATAmount', 'GrossAmount', 'DiscountPercentage', 'DiscountAmount', 'TotalAmountDue', 'BalanceDue', 'CounterStatus', 'EncodeBy', 'EditLastBy', 'Posted', 'PostedDate', 'FieldTimeStamp', 'InvoiceDateIn', 'InvoiceDateOut', 'InvoiceCounterDate', 'InvoiceCollectionDate', 'InvoiceCollectedDate', 'CON', 'Collector', 'InvoiceCounterNumber', 'DeliveredBy', 'DRReference'
    ];


    protected $column = 'InvoiceDate';
    
    // whitelist of filter-able columns
    protected $filter = [
        'InvoiceNumber', 'InvoiceDate', 'CustomerCode', 'TotalAmountDue'
    ];

    public static function initialize()
    {
        return [
            'InvoiceDate' => date('Y-m-d'), 
            'CustomerCode' => 'Select', 
            'TotalAmountDue' => 0
        ];
    }


    public function items()
    {
        // needs two parameters InvoiceAuto / InvoiceNumber
        return $this->hasMany(InvoiceItem::class, ['InvoiceAuto', 'InvoiceNumber'], ['InvoiceAuto', 'InvoiceNumber']);
    }

    public function company()
    {
        return $this->belongsTo(Company::class, 'CompanyCode', 'CompanyCode');
    }

    public function customer()
    {
        return $this->belongsTo(Customer::class, 'CustomerCode', 'CustomerCode');
    }

    // public function expensetype()
    // {
    //     return $this->hasOne(Expensetype::class, 'TypeOfPayable', 'ExpenseCode');
    // }

}
