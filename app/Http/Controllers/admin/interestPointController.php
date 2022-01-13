<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\admin\interestPointModel;

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


    public function deleteInterestPoint(){
        $id = $_POST['id'];
        $_token = $_POST['token'];
        interestPointModel::deleteInterestPoint($id);
    }

    public function getInterestPoints(){
        return interestPointModel::getInterestPoints();
    }


    public function getInterestPoint(){
        $id     = $_POST['id'];
        $_token = $_POST['_token'];
        //$result = interestPointModel::getInterestPoint($id);
        //return response() -> json($result);
        //var_dump($request);
        return "funciona!!!"; 
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
        $_token = $_POST['token'];
        $date   = DATE("Y-m-d H:i:s");

        interestPointModel::updateInterestPoint($id, $field, $value, $date);
        return $date;
    }
}
