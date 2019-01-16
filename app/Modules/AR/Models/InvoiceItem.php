<?php

namespace App\Modules\AR\Models;

use Illuminate\Database\Eloquent\Model;

class InvoiceItem extends Model
{

    use \Awobaz\Compoships\Compoships;

    protected $table = 'tbltrarinvoicedetails';
    protected $primaryKey = 'AutoID';

    const CREATED_AT = null;
    const UPDATED_AT = null;

    /**
     * The connection name for the model.
     *
     * @var string
     */
    protected $connection = 'rbar';

    protected $fillable = ['InvoiceAuto' => '',
    'CompanyCode', 'InvoiceNumber', 'RSCode', 'Unit', 'Qty', 'SRP', 'Amount', 'StockCode', 'FieldTimeStamp'];

    public static function initialize()
    {
        return [
            'InvoiceAuto' => '',
            'CompanyCode' => '',
            'InvoiceNumber' => '',
            'RSCode' => '',
            'Unit' => '',
            'Qty' => '',
            'SRP' => '',
            'Amount' => '',
            'StockCode' => '',
            'FieldTimeStamp' => ''
        ];
    }
}
