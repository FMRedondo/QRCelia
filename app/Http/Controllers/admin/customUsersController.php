<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\admin\customUsersModel;

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
        return $result;
    }

    public function deleteUser(){
        $id = $_POST['id'];
        $result = customUsersModel::deleteUser($id);
    }

    public function updateUsers(){
        $id = $_POST['id'];
        $field = $_POST['field'];
        $value = $_POST['value'];

        $result = customUsersModel::updateUser($id, $field, $value);
    }

    public function searchUsers(){
        $search = $_POST['search'];
        $result = customUsersModel::searchUsers($search);
        return $result;
    }
}
