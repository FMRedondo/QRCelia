<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\admin\interestPointModel;
use Illuminate\Support\Facades\DB;

class interestPointController extends Controller
{
    
    public function index(){
        return view('admin/puntosInteres');
    }

    public function verEditarPuntosInteres(){
        return view('admin/verPuntoInteres');
    }

    public function addInterestPoint(Request $request){
        $name           = $_POST['name'];
        $description    = $_POST['description'];
        $text           = $_POST['text'];
        $date           = DATE("Y-m-d H:i:s");
        $_token         = $request['_token'];

        $result = interestPointModel::addInterestPoint($name, $description, $text, $date);
        $this -> subirPoster($request, $result);

        return response() -> json([
            'id' => $result,
            'date' => $date
        ]);

    }

    public function subirPoster(Request $request, $id){
        $file = $request -> file('poster');
         $url = "img/puntosInteres/";
        $nombreArchivo = time() . "-" . $file -> getClientOriginalName();
        $subida = $request -> file('poster') -> move($url, $nombreArchivo);

        interestPointModel::updateInterestPoint($id, 'poster', $nombreArchivo);
        

    }


    public function deleteInterestPoint(){
        $id = $_POST['id'];
        $_token = $_POST['token'];
        interestPointModel::deleteInterestPoint($id);
    }

    public function getInterestPoints(){
        return interestPointModel::getInterestPoints();
    }


    public function getInterestPoint(Request $request){
        $id =  $request -> id;
        $result = interestPointModel::getInterestPoint($id);
        return response() -> json($result);

    }


    public function searchInterestPoints(){
        $search = $_POST['search'];
        $_token = $_POST['token'];
        $result = interestPointModel::searchInterestPoints($search);
        return response() -> json($result);
    }

    public function updateInterestPoint(){
        $id     = $_POST['id'];
        $field  = $_POST['field'];
        $value  = $_POST['value'];
        $_token = $_POST['_token'];
        //$date   = DATE("Y-m-d H:i:s");


        interestPointModel::updateInterestPoint($id, $field, $value);
        //return $date;
    }

    public function getResourcesFromPoint(Request $request){
        $id = $request -> id;
        $type = $request -> type;
        $result = interestPointModel::getResourcesFromPoint($id, $type);
        return response() -> json($result);
    }
}