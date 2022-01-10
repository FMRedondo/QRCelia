<?php
namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\admin\TypeModel;
use Illuminate\Support\Facades\Date;
use App\Models\admin\resourceModel;
use Symfony\Component\HttpKernel\Event\RequestEvent;

class ResourceController extends Controller
{
    public function index(){
        return view('admin/recursos');
    }

    public function getResources(){
        $result = ResourceModel::getResources();
        return response()->json($result);
    }

    public function getResource(){
        $id = $_POST['id'];
        $result = ResourceModel::getResource($id);
        return response() -> json($result);
    }

    // Funcion para añadir recursos
    public function addResource(){
        $_token = $_POST['_token'];
        $type = $_POST['type'];
        $name = $_POST['name'];
        $url = $_POST['url'];
        $autor = $_POST['autor'];
        $user = $_POST['user'];
        $date = DATE("Y-m-d H:i:s");
        $result = ResourceModel::addResource($type,$name,$url,$autor,$user,$date);
        return response()->json([
            'id'=> $result,
            'date'=> $date
        ]);
    }

    public function deleteResource(){
        $id = $_POST['id'];
        ResourceModel::deleteResource($id);
    }

    public function searchResource(){
        $search = $_POST['search'];
        $result = ResourceModel::searchResource($search);
        return response()->json($result);
    }

    public function updateResource(){
        $id = $_POST['id'];
        $field = $_POST['field'];
        $value = $_POST['value'];
        $date = DATE("Y-m-d H:i:s");
        ResourceModel::updateResource($id,$field,$value,$date);
        return $date;
    }

    public function searchByType(){
        $type = $_POST['type'];
        $result = ResourceModel::searchByType($type);
        return response()->json($result);
    }
}