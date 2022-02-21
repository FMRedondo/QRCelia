<?php

namespace App\Models\admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class customizationModel extends Model
{
    use HasFactory;
    public static function setCustomizationData($option,$value){
        $sql = "INSERT INTO customization (option,value) VALUES('$option','$value')";
        DB::insert($sql);
    }

    public static function getCustomizationData($option){
        $sql = "SELECT * FROM customization WHERE (option = $option)";
        $result = DB::select($sql);
        return $result;
    }

    public static function getAllCustomizationData(){
        $sql = "SELECT * FROM customization";
        $result = DB::select($sql);
        return $result;
    }
}
