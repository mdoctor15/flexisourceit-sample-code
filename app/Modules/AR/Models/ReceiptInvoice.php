<?php

namespace App\Modules\AR\Models;

use Illuminate\Database\Eloquent\Model;

class ReceiptInvoice extends Model
{
    protected $table = 'tbltrarpaymentdetailsinvoice';
    protected $primaryKey = 'AutoNumber';

    /**
     * The connection name for the model.
     *
     * @var string
     */
    protected $connection = 'rbar';

    protected $fillable = ['PaymentAuto', 'ORNumber', 'CustomerGroup', 'InvoiceNumber', 'CustomerCode', 'InvoiceBalance', 'InvoicePaidAmount', 'InvoiceMemoAmount', 'InvoiceMemoNote', 'InvoiceBalAfterPost', 'Posted', 'PostedDate', 'FieldTimeStamp', 'InvoiceDate' ];

    public static function initialize()
    {
        return [
            'PaymentAuto' => '',
            'ORNumber' => '',
            'CustomerGroup' => '',
            'InvoiceNumber' => '',
            'CustomerCode' => '',
            'InvoiceBalance' => '',
            'InvoicePaidAmount' => '',
            'InvoiceMemoAmount' => '',
            'InvoiceMemoNote' => '',
            'InvoiceBalAfterPost' => '',
            'Posted' => '',
            'PostedDate' => '',
            'FieldTimeStamp' => '',
            'InvoiceDate' => ''
        ];
    }
}
