<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\admin\interestPointModel;
use App\Http\Controllers\admin\qrCodeController;

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
        $nombreArchivo  = $request -> nombreArchivo;
        $date           = DATE("Y-m-d H:i:s");
        $_token         = $_POST['_token'];
        $archivo = $request -> fecha . "-" . $nombreArchivo;

        $result = interestPointModel::addInterestPoint($name, $description, $text, $archivo, $date);
        return response() -> json([
            'id' => $result,
            'date' => $date
        ]);

    }

    public function subirPoster(Request $request){
        $file = $request -> file('poster');
        $fecha = $request -> fecha;
        $url = "img/puntosInteres/";
        $nombreArchivo = $fecha . "-" . $file -> getClientOriginalName();
        $subida = $request -> file('poster') -> move($url, $nombreArchivo);
        echo $nombreArchivo;

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
        //$qr = qrCodeController::generateQR("https://iescelia.org/qrcelia/puntodeinteres/".$id);
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

    public static function getRandomPoint(){
        $points = interestPointModel::getIdsFromPoints();
        return array_rand($points, 1);
    }
}