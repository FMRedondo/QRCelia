<?php

namespace App\Models\admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class TypeModel extends Model
{
    use HasFactory;
    
    public static function getTypes(){
        $sql = "SELECT * FROM types";
        $result = DB::SELECT($sql);
        return $result;
    }

    public static function getType($id){
        $sql = "SELECT * FROM types (WHERE id = $id)";
        $result = DB::select($sql);
        return $result;
    }

    public static function updateType($id, $field, $value){
        $sql = "UPDATE FROM types SET $field = $value WHERE (id = $id)";
        DB::update($sql);
    }

    public static function deleteType($id){
        $sql = "DELETE FROM types WHERE (id = $id)";
        DB::delete($sql);
    }

    public static function searchType($search){
        $sql = "SELECT * FROM types WHERE (id = $search )";
        $result = DB::select($sql);
        return $result;
    }

    public static function addType($name){
        $sql = "INSERT INTO types (name) VALUES ($name)";
        DB::insert($sql);
        $id = DB::getPdo()->lastInsertId();
        return $id;
    }

}
