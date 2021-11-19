<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\admin\TypeModel;

class TypeController extends Controller
{
    public function index(){
        //
    }

    public function addType(){
        $name = $_POST['name'];
        TypeModel::addType($name);
    }

    public function deleteType(){
        $id = $_POST['id'];
        TypeModel::deleteType($id);
    }

    public function getTypes(){
        $result = TypeModel::getTypes();
        return $result;
    }

    public function getType(){
        $id = $_POST['id'];
        return $result;
    }

    public function searchType(){
        $seach = $_POST['search'];
        return $result;
    }

    public function updateType(){
        $id = $_POST['id'];
        $field = $_POST['field'];
        $value = $_POST['value'];

    }
}
