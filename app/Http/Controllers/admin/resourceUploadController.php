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
        $resources = [];
        for ($i=0; $i < $request->numResources; $i++) { 
            $type = "";
            $file = $request->file("resource" . $i);
            $name = $file -> getClientOriginalName();
            $autor = "No disponible";
            $user = "";
            $date = DATE("Y-m-d H:i:s");

            if (preg_match("/\b(\.jpg|\.JPG|\.png|\.PNG|\.jpeg|\.JPEG)\b/", $name)) {
                $type = "image";
                $url = "img/puntosInteres/";
            }elseif (preg_match("/\b(\.mp4|\.MP4|\.avi|\.AVI|\.webm|\.WEBM)\b/", $name)) {
                $type = "video";
                $url = "video/";
            }elseif (preg_match("/\b(\.mp3|\.MP3|\.ogg|\.OGG)\b/", $name)) {
                $type = "audio";
                $url = "audio/";
            }else{
                $type = "extension no detectada";
            }

            $nombreArchivoNuevo = time() . "-" . $file -> getClientOriginalName();
            $subida = $request -> file("resource" . $i) -> move($url, $nombreArchivoNuevo);


            $id = resourceModel::addResource($type,$nombreArchivoNuevo,$nombreArchivoNuevo,$autor,$user,$date);
            $resource = ["id" => $id, "type" => $type, "name" => $nombreArchivoNuevo, "autor" => $autor, "user" => $user,"date" => $date];
            array_push($resources, $resource);
        }
        return response()->json($resources);
    }    
}
