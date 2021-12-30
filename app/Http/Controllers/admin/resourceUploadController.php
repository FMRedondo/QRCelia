<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\admin\resourceModel;
use Illuminate\Support\Facades\Auth;

class resourceUploadController extends Controller
{
    // Funcion para subir recursos al servidor
    public function store(){
        $_token = $_POST['_token'];
        //guarda en /storage/public/folder?????
        //guarda en /public/folder?????
        $name = $_FILES['resourceUpload']['name'];
        $saved = $_FILES['resourceUpload']['tmp_name'];
        $date = DATE("Y-m-d H:i:s");
        $folder = "img";
        $type = "image";

        if (!file_exists('/public/recursos/'.$folder)) {
            mkdir('/public/recursos/'.$folder,0777,true);

            if (file_exists('/public/recursos/'.$folder)) {
                if (move_uploaded_file($saved, '/public/recursos/' . $folder . '/' . $name)) {
                    echo "Archivo guardado";
                    $url = '/public/recursos/' . $folder . '/' . $name;
                }else{
                    echo "No se ha podido guardar el archivo";
                }
            }
        }else{
            if (move_uploaded_file($saved, '/public/recursos/' . $folder . '/' . $name)) {
                echo "Archivo guardado";
                $url = '/public/recursos/' . $folder . '/' . $name;
            }else{
                echo "No se ha podido guardar el archivo";
            }
        }
        ResourceModel::addResource($type,$name,$url,$date);
    }    
}
