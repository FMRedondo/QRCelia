<?php

namespace App\Models\admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class resourceModel extends Model
{
    use HasFactory;
    protected $fillable = ["name", "file_path", "created_at", "updated_at"];
    
    public static function getResources(){
        $sql = "SELECT * FROM resources";
        $result = DB::SELECT($sql);
        return $result;
    }

    public static function getResource($id){
        $sql = "SELECT * FROM resources WHERE (id = $id)";
        $result = DB::select($sql);
        return $result;
    }

    public static function addResource($type,$name,$url,$autor,$user,$date){
        $sql = "INSERT INTO resources (type,name,url,autor,user,created_at,updated_at) VALUES('$type','$name','$url','$autor','$user','$date','$date')";
        DB::insert($sql);
        $id = DB::getPdo()->lastInsertId();
        return $id;
    }

    public static function deleteResource($id){
        $sql = "DELETE FROM resources WHERE (id = $id)";
        DB::delete($sql);
    }

    public static function searchResource($search){
        $sql = "SELECT * FROM resources WHERE (name LIKE '%$search%')";
        $result = DB::select($sql);
        return $result;
    }

    public static function updateResource($id, $field, $value){
        $sql = "UPDATE FROM resources SET $field = $value WHERE (id = $id)";
        DB::update($sql);
    }
}
