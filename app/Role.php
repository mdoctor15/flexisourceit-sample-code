<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use App\Support\FilterPaginateOrder;

class Role extends Model
{

	use FilterPaginateOrder;

    /**
     * The connection name for the model.
     *
     * @var string
     */
    protected $connection = 'robertbrowns';

    protected $fillable = ['name', 'slug', 'permissions'];

    protected $column = 'name';

    // whitelist of filter-able columns
    protected $filter = [
        'name', 'slug', 'permissions'
    ];

    public static function initialize()
    {
        return [
            'name' => '',
            'slug' => '',
            'permissions' => ''
        ];
    }

    
}
