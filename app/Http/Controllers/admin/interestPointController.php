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