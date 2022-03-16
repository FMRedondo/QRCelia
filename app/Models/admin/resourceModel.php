<?php

namespace App\Models\admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use SebastianBergmann\Type\StaticType;

class resourceModel extends Model
{
    
    public static function getResources(){
        $sql = "SELECT * FROM resources";
        $result = DB::SELECT($sql);
        return $result;
    }

    public static function getResourcesType($tipo){
        $sql = "SELECT * FROM resources WHERE (type = '$tipo')";
        $result = DB::SELECT($sql);
        return $result;
    }

    public static function getResource($id){
        $sql = "SELECT * FROM resources WHERE (id = $id)";
        $result = DB::select($sql);
        return $result;
    }

    public static function addResource($type,$name,$url,$autor,$user,$date){
        $sql = "INSERT INTO resources (type,name,url,autor,user,created_at,updated_at) VALUES ('$type','$name','$url','$autor','$user', '$date' ,'$date')";
        DB::insert($sql);
        $id = DB::getPdo()->lastInsertId();
        return $id;
    }

    public static function deleteResource($id){
        $name = DB::select("SELECT url FROM resources WHERE (id = $id)");
        $sql = "DELETE FROM resources WHERE (id = $id)";
        DB::delete($sql);
        return $name;
    }

    public static function searchResource($search){
        $sql = "SELECT * FROM resources WHERE (name LIKE '%$search%' OR type LIKE '%$search%' OR autor LIKE '%$search%' OR user LIKE '%$search%')";
        $result = DB::select($sql);
        return $result;
    }

    public static function updateResource($id, $field, $value, $date){
        $sql = "UPDATE resources SET $field = '$value' , updated_at = '$date' WHERE (id = $id)";
        DB::update($sql);
    }

    public static function searchByType($type){
        $sql = "SELECT * FROM resources WHERE (type = '$type')";
        $result = DB::select($sql);
        return $result;
    }

    public static function changeResource($newUrl, $idResource, $date){
        $sql = "UPDATE resources set url = '$newUrl', updated_at = '$date'  WHERE(id = $idResource)";
        DB::update($sql);
    }

    public static function getLinkedResources($idRecurso){
        $sql = "SELECT * FROM point_has_resources WHERE (idPoint = $idRecurso)";
        $result = DB::select($sql);
        return $result;
    }

    public static function enlazePuntoConRecurso($idPunto, $idRecurso){
        $sql = "INSERT INTO point_has_resources (idPoint, idResource) VALUES ($idPunto, $idRecurso)";
        db::insert($sql);
    }
    

    public static function quitarEnlazePuntoConRecurso($idPunto, $idRecurso){
        $sql = "DELETE FROM point_has_resources WHERE (idPoint = $idPunto AND idResource = $idRecurso)";
        db::delete($sql);
    }

    public static function añadirPosterComoRecurso($nombre, $url){
        $sql = "INSERT INTO resources (type, name, url) VALUES ('image', '$nombre', '$url')";
        DB::insert($sql);
    }
}
