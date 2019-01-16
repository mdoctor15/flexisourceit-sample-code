<?php

namespace App\Modules\AR\Models;

use Illuminate\Database\Eloquent\Model;
use App\Support\FilterPaginateOrder;
use App\Support\TotalCount;

use App\Modules\Directories\Models\AR\Company;
use App\Modules\Directories\Models\AR\Customergroup;

class Receipt extends Model
{

	use FilterPaginateOrder;
    use TotalCount;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'tbltrarpaymentsheader';

    protected $primaryKey = 'PaymentAuto';

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
    protected $fillable = ['ORNumber', 'ORDate', 'CompanyCode', 'CustomerGroup', 'Collector', 'AmountReceived', 'AmountApplied', 'Remarks', 'Posted', 'PostedDate', 'EncodedBy', 'EncodedDate', 'EditedBy', 'EditedDate', 'FieldTimeStamp', 'CollectionReceiptNumber', ];


    protected $column = 'ORDate';
    
    // whitelist of filter-able columns
    protected $filter = [
        'ORNumber', 'ORDate', 'CustomerGroup', 'AmountReceived'
    ];

    public static function initialize()
    {
        return [
            'ORNumber' => '',
            'ORDate' => date('Y-m-d'), 
            'CustomerGroup' => 'Select', 
            'AmountReceived' => 0
        ];
    }


    public function items()
    {
        return $this->hasMany(ReceiptItem::class, 'PaymentAuto', 'PaymentAuto');
    }

    public function invoices()
    {
        return $this->hasMany(ReceiptInvoice::class, 'PaymentAuto', 'PaymentAuto');
    }

    public function company()
    {
        return $this->belongsTo(Company::class, 'CompanyCode', 'CompanyCode');
    }

    public function customergroup()
    {
        return $this->belongsTo(Customergroup::class, 'CustomerGroupName', 'CustomerGroup');
    }

    // public function expensetype()
    // {
    //     return $this->hasOne(Expensetype::class, 'TypeOfPayable', 'ExpenseCode');
    // }

}
