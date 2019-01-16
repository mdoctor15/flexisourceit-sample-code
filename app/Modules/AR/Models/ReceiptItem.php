<?php

namespace App\Modules\AR\Models;

use Illuminate\Database\Eloquent\Model;

class ReceiptItem extends Model
{
    protected $table = 'tbltrarpaymentdetailspay';
    protected $primaryKey = 'AutoNumber';

    /**
     * The connection name for the model.
     *
     * @var string
     */
    protected $connection = 'rbar';

    protected $fillable = ['PaymentAuto', 'ORNumber', 'CustomerGroup', 'CheckNumber', 'CheckDate', 'Bank', 'BankBranch', 'TypeOfCheck', 'TypeOfPayment', 'Amount', 'Deposited', 'DepositNumber', 'FieldTimeStamp'];

    public static function initialize()
    {
        return [
            'PaymentAuto' => '',
            'ORNumber' => '',
            'CustomerGroup' => '',
            'CheckNumber' => '',
            'CheckDate' => '',
            'Bank' => '',
            'BankBranch' => '',
            'TypeOfCheck' => '',
            'TypeOfPayment' => '',
            'Amount' => '',
            'Deposited' => '',
            'DepositNumber' => '',
            'FieldTimeStamp' => ''
        ];
    }
}
