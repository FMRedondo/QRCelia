<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\admin\interestPointModel;

class interestPointController extends Controller
{

    /*  CONSULTA DE REDONDO
    
    SELECT interest_points.name, interest_points.text, interest_points.description, interest_points.url, interest_points.poster,  GROUP_CONCAT(types.name) AS 'categorias' 
    FROM interest_points 
    LEFT JOIN point_has_type ON point_has_type.idPoint =  interest_points.id 
    LEFT JOIN types ON types.id = point_has_type.idType
    GROUP BY interest_points.name;

    */


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

        $result = interestPointModel::addInterestPoint($name, $description, $text, $poster, $date);
        return response() -> json([
            'id' => $result,
            'date' => $date
        ]);
    }

    public function deleteInterestPoint(){
        $id = $_POST['id'];
        interestPointModel::deleteInterestPoint($id);
    }

    public function getInterestPoints(){
        return interestPointModel::getInterestPoints();
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
        $date   = DATE("Y-m-d H:i:s");

        interestPointModel::updateInterestPoint($id, $field, $value, $date);
        return $date;
    }
}
