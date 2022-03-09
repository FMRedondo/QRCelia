<?php
namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\admin\TypeModel;
use Illuminate\Support\Facades\Date;
use App\Models\admin\resourceModel;
use SebastianBergmann\CodeUnit\FunctionUnit;
use SebastianBergmann\Environment\Console;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Illuminate\Support\Facades\File;


class ResourceController extends Controller
{
    public function index(){
        return view('admin/recursos');
    }

    public function getResources(){
        $result = ResourceModel::getResources();
        return response()->json($result);
    }

    public function getResource(){
        $id = $_POST['id'];
        $result = ResourceModel::getResource($id);
        return response() -> json($result);
    }

    public function deleteResource(){
        $id = $_POST['id'];
        $result = ResourceModel::deleteResource($id);

        foreach ($result as $resource) {
            $name = $resource->name;

            if (preg_match("/\b(\.jpg|\.JPG|\.png|\.PNG|\.jpeg|\.JPEG)\b/", $name))
                $folder = "img/puntosInteres/";
            elseif (preg_match("/\b(\.mp4|\.MP4|\.avi|\.AVI|\.webm|\.WEBM)\b/", $name))
                $folder = "video/";
            elseif (preg_match("/\b(\.mp3|\.MP3|\.ogg|\.OGG)\b/", $name))
                $folder = "audio/";

            $url = $folder . $name;

            File::delete($url);
        }
    }

    public function searchResource(){
        $search = $_POST['search'];
        $result = ResourceModel::searchResource($search);
        return response()->json($result);
    }

    public function updateResource(){
        $id = $_POST['id'];
        $field = $_POST['field'];
        $value = $_POST['value'];
        $date = DATE("Y-m-d H:i:s");
        ResourceModel::updateResource($id,$field,$value,$date);
        return $date;
    }

    public function searchByType(){
        $type = $_POST['type'];
        $result = ResourceModel::searchByType($type);
        return response()->json($result);
    }

    public function changeResource(){
        $newUrl = $_POST['newUrl'];
        $idResource = $_POST['idResource'];
        $date = DATE("Y-m-d H:i:s");
        ResourceModel::changeResource($newUrl, $idResource, $date);
        return $date;
    }

    public function verPuntosInteresEnlazados(Request $request){
        $id = $request -> id;
        $tipo = $request -> tipo;
        $PUNTOS_ENLAZADOS = [];
        $todosPuntosInteres =  resourceModel::getResourcesType($tipo);
        $puntosEnlazados = resourceModel::getLinkedResources($id);

        foreach($todosPuntosInteres as $point){
            $punto = [
                'id' => $point -> id,
                'nombre' => $point -> name,
                'url' => $point -> url,
                'enlazado' => false,
                'tipo' => $point -> type,
            ];

            array_push($PUNTOS_ENLAZADOS, $punto);
        }

        for($i = 0; $i < count($PUNTOS_ENLAZADOS); $i++){
            $id = $PUNTOS_ENLAZADOS[$i]['id'];
            foreach($puntosEnlazados as $enlazado){
                if($id == $enlazado -> idResource)
                  $PUNTOS_ENLAZADOS[$i]['enlazado'] = true;
            } 
        }

        return $PUNTOS_ENLAZADOS;
    }

    public function enlazarPuntoConRecurso(Request $request){
        $idPunto = $request -> idPunto;
        $idRecurso = $request -> idRecurso;
        $enlazado = $request -> enlazado;
        $_token = $request -> _token;
        
        if($enlazado == 'true'){
            resourceModel::enlazePuntoConRecurso($idPunto, $idRecurso);
        }
        else{
            resourceModel::quitarEnlazePuntoConRecurso($idPunto, $idRecurso);
        }
           
    }
}