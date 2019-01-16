<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;

use App\Support\FilterPaginateOrder;

class User extends Authenticatable
{
    use Notifiable, HasApiTokens;
    use FilterPaginateOrder;

    /**
     * The connection name for the model.
     *
     * @var string
     */
    protected $connection = 'robertbrowns';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'roles', 'slug', 'avatar', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $column = 'name';
    
    // whitelist of filter-able columns
    protected $filter = [
        'name', 'email', 'roles'
    ];

    public static function initialize()
    {
        return [
            'name' => '',
            'email' => '',
            'password' => '',
            'roles' => '',
            'avatar' => ''
        ];
    }


    public function token() {
        return $this->hasMany('App\Token');
    }


}
