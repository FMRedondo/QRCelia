<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\admin\resourceModel;
use Illuminate\Support\Facades\Auth;

class resourceUploadController extends Controller
{
    // Funcion para subir recursos al servidor
    public function addResource(){

        /*
         *
         * Bucle que recorra la matrix de arcvhivos
         * ver mimes y ver que tipo de archivo quieremos subir 
         * segun el tipo de contenudo lo subimos en su carpeta /public/recursos/***
         * 
        */


        $_token = $_POST['_token'];
        $name = $_FILES['resourceUpload']['name'];
        $saved = $_FILES['resourceUpload']['tmp_name'];
        $date = DATE("Y-m-d H:i:s");
        $folder = "img";
        $type = "image";

        return $name;

        /*

        if (!file_exists('/public/recursos/'.$folder)) {
            mkdir('/public/recursos/'.$folder,0777,true);

            if (file_exists('/public/recursos/'.$folder)) {
                if (move_uploaded_file($saved, '/public/recursos/' . $folder . '/' . $name)) {
                    $url = '/public/recursos/' . $folder . '/' . $name;
                    ResourceModel::addResource($type,$name,$url,$date);
                    return true;
                   
                }else{
                   return false;
                }
            }
        }else{
            if (move_uploaded_file($saved, '/public/recursos/' . $folder . '/' . $name)) {
                $url = '/public/recursos/' . $folder . '/' . $name;
                ResourceModel::addResource($type,$name,$url,$date);
                return true;
            }else{
               return false;
            }
        }

        */
    }    
}
