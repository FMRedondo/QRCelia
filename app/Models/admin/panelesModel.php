<?php

namespace App\Models\admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class panelesModel extends Model
{
    use HasFactory;

    public static function obtenerNumeroRecursos(){
        $sql = "SELECT COUNT(id) AS numero FROM resources";
        $result = DB::select($sql);
        return $result;
    }

    public static function obtenerNumeroPuntosInteres(){
        $sql = "SELECT COUNT(id) AS numero FROM interest_points";
        $result = DB::select($sql);
        return $result;
    }

    public static function obtenerNumeroComentarios(){
        $sql = "SELECT COUNT(id) AS numero FROM comments";
        $result = DB::select($sql);
        return $result;
    }

    public static function obtenerNumeroCategorias(){
        $sql = "SELECT COUNT(id) AS numero FROM types";
        $result = DB::select($sql);
        return $result;
    }

    public static function obtenerNumeroUsuarios(){
        $sql = "SELECT COUNT(id) AS numero FROM users";
        $result = DB::select($sql);
        return $result;
    }
}
