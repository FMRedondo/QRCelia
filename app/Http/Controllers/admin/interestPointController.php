<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\admin\interestPointModel;
use App\Http\Controllers\admin\qrCodeController;
use GrahamCampbell\ResultType\Result;
use Symfony\Component\HttpFoundation\RequestStack;

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
        $name           = $request -> nombre;
        $description    = $request -> description;
        $text           = $request -> texto;
        $nombreArchivo  = $request -> nombreArchivo;
        $url = "img/puntosInteres/";
        $nombreArchivo = time() . "-" . $file -> getClientOriginalName();
        $subida = $request -> file('poster') -> move($url, $nombreArchivo);
        $date           = DATE("Y-m-d H:i:s");

        $result = interestPointModel::addInterestPoint($name, $description, $text, $nombreArchivo, $date);
        return response() -> json([
            'id' => $result,
            'date' => $date
        ]);

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


    public function searchInterestPoints(Request $request){
        $search = $request -> search;
        $_token = $request -> _token;
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
        if (!empty($points)) {
            return array_rand($points, 1);
        }else{
            return false;
        }
    }
}