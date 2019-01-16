<?php

namespace App\Support;

use Validator;

trait TotalCount {

    public function scopeTotalCount($query)
    {
        
        $column = $this->column;

        return $query->where(function($query) use ($column) {
            if (strpos($column, 'Date')) {
                $beg = date('Y-m-d', strtotime(config('settings.fiscalYear.start')));
                $query->where($column, '>=', $beg);
            }
            return $query;
        })->count();
    }

}