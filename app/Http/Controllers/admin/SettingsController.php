<?php

namespace App\Http\Controllers;
use SettingsModel;
use Illuminate\Http\Request;

class SettingsController extends Controller
{
    public function changeValue(){
        $option = $_POST["field"];
        $value = $_POST["value"];

        if ($value == 1)
            $value = 0;
        else
            $value  = 1;
        

    }

    public function getValue(){
        $option = $_POST["field"];

    }
}
