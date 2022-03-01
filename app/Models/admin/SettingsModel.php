<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class SettingsModel extends Model
{
    use HasFactory;

    public static function changeValue($option, $value){
        $sql = "UPDATE";
    }

    public static function getValue($option){
        
    }
}
