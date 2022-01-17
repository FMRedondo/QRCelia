<?php

namespace App\Models\admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class interestPointModel extends Model
{
    use HasFactory;

    public static function getInterestPoints(){
        $sql = "SELECT * FROM interest_points";
        $result = DB::select($sql);
        return $result;
    }

    public static function getInterestPoint($id){
        $sql = "SELECT * FROM interest_points WHERE (id = $id)";
        $result = DB::select($sql);
        return $result;
    }

    public static function updateInterestPoint($id, $field, $value){
        $sql = "UPDATE interest_points SET $field = '$value' WHERE (id = $id)";
        $result = DB::update($sql);
        return $result;
    }

    public static function deleteInterestPoint($id){
        $sql = "DELETE FROM interest_points WHERE (id = $id)";
        DB::delete($sql);
    }

    public static function searchInterestPoints($search){
        $sql = "SELECT * FROM interest_points WHERE (name LIKE '%$search%' OR description LIKE '%$search%')";
        $result = DB::select($sql);
        return $result;
    }

    public static function addInterestPoint($name, $description, $text, $poster, $date){
        $sql = "INSERT INTO interest_points (name, description, text, url, poster, created_at, update_at) VALUES ('$name', '$description', '$text', '$name', '$poster', '$date', '$date')";
        $result = DB::insert($sql);
        return DB::getPdo() -> lastInsertId();
    }
}
