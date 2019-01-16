<?php

namespace App\Modules\AR\Models;

use Illuminate\Database\Eloquent\Model;

class Rscode extends Model
{
    protected $table = 'rscodes';
    protected $primaryKey = 'ID';

    /**
     * The connection name for the model.
     *
     * @var string
     */
    protected $connection = 'rbar';

    public static function initialize()
    {
        return [
            'ID' => '',
            'ItemCode' => '',
            'Size' => '',
            'SRP' => '',
            'Unit' => ''
        ];
    }
}
