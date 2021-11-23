<?php

namespace App\Models\admin;

use Illuminate\Database\Console\Migrations\StatusCommand;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class CommentModel extends Model
{
    use HasFactory;

    public static function getComments(){
        $sql = "SELECT * FROM comments";
        $result = DB::select($sql);
        return $result;
    }

    public static function getComment($id){
        $sql = "SELECT * FROM comments WHERE (id = $id)";
        $result = DB::select($sql);
        return $result;
    }

    public static function updateComments($id, $field, $value){
        $sql = "UPDATE FROM comments SET $field = $value WHERE (id = $id)";
        DB::update($sql);
    }

    public static function deleteComments($id){
        $sql = "DELETE FROM comments WHERE (id = $id)";
        DB::delete($sql);
    }

    public static function searchComments($search){
        $sql = "SELECT * FROM comments WHERE (content LIKE '%$search%')";
        $result = DB::select($sql);
        return $result;
    }

    public static function addComments($content){
        $sql = "INSERT INTO comments (content) VALUE($content)";
        DB::insert($sql);
    }
     


}
