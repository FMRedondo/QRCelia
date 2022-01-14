<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\admin\interestPointModel;
use PHPUnit\Framework\MockObject\Verifiable;

class interestPointController extends Controller
{
    
    public function index(){
        return view('admin/puntosInteres');
    }

    public function verEditarPuntosInteres(){
        return view('admin/verPuntoInteres');
    }

    public function addInterestPoint(){
        $name           = $_POST['name'];
        $description    = $_POST['description'];
        $text           = $_POST['text'];
        $poster         = $_POST['poster'];
        $date           = DATE("Y-m-d H:i:s");
        $_token         = $_POST['token'];

        $result = interestPointModel::addInterestPoint($name, $description, $text, $poster, $date);
        return response() -> json([
            'id' => $result,
            'date' => $date
        ]);
    }


    public function deleteInterestPoint(Request $request){
        $id = $request->get('id');
        interestPointModel::deleteInterestPoint($id);
    }

    public function getInterestPoints(){
        return interestPointModel::getInterestPoints();
    }


<<<<<<< HEAD
    public function getInterestPoint(Request $request){
        $_token = $request->session()->token();
        $id     = $_POST['id'];
        $result = interestPointModel::getInterestPoint($id);
        return response() -> json($result);
=======
    public function getInterestPoint(){
        $_token = $_POST['token'];
        $id = $_POST['id'];
        /*$result = interestPointModel::getInterestPoint($id);
        return response() -> json($result);
        */
        return "adbyiafdihybhijkbaf ahidbfubhyiadscfikbyuasf";
>>>>>>> a5e16022a46b62304d1191dcfe613b8fd3ed8cc8
    }


    public function searchInterestPoints(){
        $search = $_POST['search'];
        $result = interestPointModel::searchInterestPoints($search);
        return response() -> json($result);
    }

    public function updateInterestPoint(){
        $id     = $_POST['id'];
        $field  = $_POST['field'];
        $value  = $_POST['value'];
        $_token = $_POST['_token'];
        $date   = DATE("Y-m-d H:i:s");

        interestPointModel::updateInterestPoint($id, $field, $value, $date);
        return $date;
    }
}
