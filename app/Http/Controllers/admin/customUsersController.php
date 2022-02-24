<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\admin\customUsersModel;
use Illuminate\Support\Facades\Hash;

class customUsersController extends Controller
{

    public function index(){
        return view('admin/usuarios');
    }

    public function getUsers(){
        $result = customUsersModel::getUsers();
        return $result;
    }

    public function getUser(){
        $id = $_POST['id'];
        $result = customUsersModel::getUser($id);
        return response()->json($result);
    }

    public function addUser(){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        $_token = $_POST['_token'];
        $criptPass = bcrypt($password);
        $result = customUsersModel::addUser($name,$email,$criptPass);
        return response()->json([
        'id'=> $result
        ]);
    }


    public function deleteUser(){
        $id = $_POST['id'];
        customUsersModel::deleteUser($id);
    }

    public function updateUser(){
        $id = $_POST['id'];
        $field = $_POST['field'];
        $value = $_POST['value'];
        if ($field = "password")
            $value = bcrypt($value);

        customUsersModel::updateUser($id, $field, $value);
    }

    public function searchUsers(){
        $search = $_POST['search'];
        $result = customUsersModel::searchUsers($search);
        return $result;
    }
}
