<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\admin\TypeModel;

class TypeController extends Controller
{
    public function index(){
        return view('admin/categorias');
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
        return response()->json($result);
    }

    public function getType(){
        $id = $_POST['id'];
        $result = TypeModel::getType($id);
        return $result;
    }

    public function searchType(){
        $search = $_POST['search'];
        $result = TypeModel::searchType($search);
        return $result;
    }

    public function updateType(){
        $id = $_POST['id'];
        $field = $_POST['field'];
        $value = $_POST['value'];
        
        TypeModel::updateType($id,$field,$value);
    }
}
