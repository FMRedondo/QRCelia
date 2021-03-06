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

    public static function addInterestPoint($name, $description, $text,$archivo, $date, $order){
        $sql = "INSERT INTO interest_points (name, description, text, poster,orden, created_at, updated_at) VALUES ('$name', '$description', '$text', '$archivo','$order', '$date', '$date')";
        $result = DB::insert($sql);
        return DB::getPdo() -> lastInsertId();
    }

    public static function getResourcesFromPoint($id, $type){
        if ($type == "daigual")
            $sql = "SELECT * FROM resources INNER JOIN point_has_resources ON resources.id = point_has_resources.idResource WHERE (point_has_resources.idPoint = $id)";
        else
            $sql = "SELECT * FROM resources INNER JOIN point_has_resources ON resources.id = point_has_resources.idResource WHERE (point_has_resources.idPoint = $id AND resources.type = '$type')";
        
        $result = DB::select($sql);
        return $result;
    }

    public static function getIdsFromPoints(){
        $sql = "SELECT id FROM interest_points";
        $result = DB::select($sql);
        return $result;
    }

    public static function getTypePoint($idPoint){
        $sql = "SELECT * FROM point_has_type WHERE 	idPoint = $idPoint";
        return DB::select($sql);
    }

    public static function attachedPointType($idPoint, $idType){
        $sql = "INSERT INTO point_has_type (idPoint, idType) VALUES('$idPoint', $idType)";
        DB::insert($sql);
    }

    public static function deletedAttachedPointType($idPoint, $idType){
        $sql = "DELETE FROM point_has_type WHERE (idPoint = $idPoint AND idType = $idType)";
        DB::delete($sql);
    }

}
