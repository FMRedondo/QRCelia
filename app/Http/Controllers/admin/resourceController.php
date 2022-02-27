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

    // Funcion para añadir recursos
    public function addResource(){
        $_token = $_POST['_token'];
        $type = $_POST['type'];
        $name = $_POST['name'];
        $url = $_POST['url'];
        $autor = $_POST['autor'];
        $user = auth()->user()-> name;
        $date = DATE("Y-m-d H:i:s");
        $result = ResourceModel::addResource($type,$name,$url,$autor,$user,$date);
        return response()->json([
            'id'=> $result,
            'date'=> $date
        ]);
    }

    public function deleteResource(){
        $id = $_POST['id'];
        ResourceModel::deleteResource($id);
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