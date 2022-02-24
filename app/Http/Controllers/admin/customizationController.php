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
        customUsersModel::setCustomizationData($option, $value);
    }

    public function getCustomizationData(){
        $option = $_POST["option"];
        $result = customUsersModel::getCustomizationData($option);
        return response() -> json($result);
    }

    public static function getAllCustomizationData(){
        $result = customUsersModel::getAllCustomizationData();
        return response() -> json($result);
    }
}
