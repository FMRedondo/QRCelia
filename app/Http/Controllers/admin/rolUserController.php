<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Traits\HasRoles;
use Spatie\Permission\Models\Permission;
use App\Models\admin\customUsersModel;

class rolUserController extends Controller
{
    public static function addRol(){
        $idUsuario = $_POST['idUsuario'];
        $nombreRol = $_POST['nombreRol'];
        $token = $_POST['_token'];

        $usuario = User::find($idUsuario);
        $usuario -> assignRole($nombreRol);
    }

    public static function removeRol(){
        $idUsuario = $_POST['idUsuario'];
        $nombreRol = $_POST['nombreRol'];
        $usuario = User::find($idUsuario);
        $usuario -> removeRole($nombreRol);
    }

    public static function getUsersAndRoles(){
        $result = customUsersModel::getUsersAndRoles();
        return response()->json($result);
    }
}