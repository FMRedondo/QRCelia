<?php

namespace App\Models\admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class TypeModel extends Model
{
    use HasFactory;
    
    public static function getTypes(){
        $sql = "SELECT * FROM types ORDER BY types.order";
        $result = DB::SELECT($sql);
        return $result;
    }

    public static function getType($id){
        $sql = "SELECT * FROM types WHERE (id = $id)";
        $result = DB::select($sql);
        return $result;
    }

    public static function updateType($id, $field, $value, $date){
        $sql = "UPDATE types SET $field = '$value', updated_at = '$date' WHERE (id = $id)";
        DB::update($sql);
    }

    public static function deleteType($id){
        $sql = "DELETE FROM types WHERE (id = $id)";
        DB::delete($sql);
    }

    public static function searchType($search){
        $sql = "SELECT * FROM types WHERE (name LIKE '%$search%')";
        $result = DB::select($sql);
        return $result;
    }

    public static function addType($name,$date){
        $sql = "INSERT INTO types (name,created_at,updated_at) VALUES ('$name','$date','$date')";
        DB::insert($sql);
        $id = DB::getPdo()->lastInsertId();
        return $id;
    }

    public static function addMain($id){
        $sql = "UPDATE types SET main = 1 WHERE (id = $id)";
        DB::update($sql);
    }

    public static function removeMain($id){
        $sql = "UPDATE types SET main = 0 WHERE (id = $id)";
        DB::update($sql);
    }

}
