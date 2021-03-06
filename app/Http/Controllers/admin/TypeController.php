<?php
namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\admin\TypeModel;
use Illuminate\Support\Facades\Date;

class TypeController extends Controller
{
    public function index(){
        return view('admin/categorias');
    }

    public function addType(){
        $name = $_POST['name'];
        $_token = $_POST['_token'];
        $date = DATE("Y-m-d H:i:s");
        $result = TypeModel::addType($name,$date);
        return response()->json([
            'id'=> $result,
            'date'=> $date
        ]);
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
        return response() -> json($result);
    }

    public function searchType(){
        $search = $_POST['search'];
        $result = TypeModel::searchType($search);
        return response()->json($result);
    }

    public function updateType(){
        $id = $_POST['id'];
        $field = $_POST['field'];
        $value = $_POST['value'];
        $date = DATE("Y-m-d H:i:s");
        TypeModel::updateType($id,$field,$value,$date);
        return $date;
    }

    public function addMain(){
        $id = $_POST['idType'];
        TypeModel::addMain($id);
    }

    public function removeMain(){
        $id = $_POST['idType'];
        TypeModel::removeMain($id);
    }

    public function getMainTypes($value){
        $result = TypeModel::getMainTypes($value);
        return response()->json($result);
    }
}
