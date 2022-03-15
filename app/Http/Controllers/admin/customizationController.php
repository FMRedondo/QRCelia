<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\admin\customizationModel;
use App\Models\admin\customUsersModel;
use Illuminate\Http\Request;

class customizationController extends Controller
{
    public function createOption(){
        $option = $_POST["option"];
        $value = $_POST["value"];
        customizationModel::setCustomizationData($option, $value);
    }

    public function getCustomizationData(){
        $option = $_POST["option"];
        $result = customizationModel::getCustomizationData($option);
        return response() -> json($result);
    }

    public function getAllCustomizationData(){
        $result = customizationModel::getAllCustomizationData();
        return response() -> json($result);
    }

    public function updateCustomization(Request $request){
        $campo = $request -> campo;
        $valor = $request -> valor;
        customizationModel::updateCustom($campo, $valor);
    }

    public function cambiarImagenes(Request $request){
        $file = $request -> file('imagen');
        $nombre = $request -> nombre;
        $_token = $request -> _token;
        $request -> file('imagen') -> move('img/', $nombre);
    }
}
