<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\admin\resourceModel;
use Illuminate\Support\Facades\Auth;

class resourceUploadController extends Controller
{
    // Funcion para subir recursos al servidor
    public function addResource(Request $request){
        $file = $request -> file('resources');
        var_dump($file);
    }    
}
