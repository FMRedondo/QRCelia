<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\admin\interestPointModel;
use App\Http\Controllers\admin\qrCodeController;
use GrahamCampbell\ResultType\Result;
use Symfony\Component\HttpFoundation\RequestStack;
use App\Models\admin\resourceModel;
use App\Models\admin\TypeModel;
use Illuminate\Support\Facades\DB;

class interestPointController extends Controller
{
    
    public function index(){
        $categorias = DB::table('types') -> get();
        return view('admin/puntosInteres', ['categorias' => $categorias]);
    }

    public function verEditarPuntosInteres(){
        return view('admin/verPuntoInteres');
    }

    public function addInterestPoint(Request $request){
        $name           = $_POST['name'];
        $description    = $_POST['description'];
        $text           = $_POST['text'];
        $nombreArchivo  = $request -> nombreArchivo;
        $date           = DATE("Y-m-d H:i:s");
        $_token         = $_POST['_token'];
        $archivo = $request -> fecha . "-" . $nombreArchivo;
        $orden = ["image", "texto", "video", "audio"];
        $orden = json_encode($orden);

        $result = interestPointModel::addInterestPoint($name, $description, $text, $archivo,$orden, $date);
        $qr = qrCodeController::generateQR($result);
        return response() -> json([
            'id' => $result,
            'date' => $date,
            'qr' => $qr
        ]);

    }

    public function subirPoster(Request $request){
        $file = $request -> file('poster');
        $name           = $request -> nombre;
        $description    = $request -> description;
        $text           = $request -> texto;
        $nombreArchivo  = $request -> nombreArchivo;
        $url = "img/puntosInteres/";
        $nombreArchivoNuevo = time() . "-" . $file -> getClientOriginalName();
        $subida = $request -> file('poster') -> move($url, $nombreArchivoNuevo);
        $date           = DATE("Y-m-d H:i:s");
        $orden = ["image", "texto", "video", "audio"];
        $orden = json_encode($orden);

        $result = interestPointModel::addInterestPoint($name, $description, $text, $nombreArchivoNuevo, $date, $orden);
        resourceModel::añadirPosterComoRecurso($name, $nombreArchivoNuevo);
        return response() -> json([
            'id' => $result,
            'date' => $date,
            'poster' => $nombreArchivoNuevo,
        ]);

    }

    public function deleteInterestPoint(Request $request){
        $id = $request -> id;
        $_token = $request -> _token;
        interestPointModel::deleteInterestPoint($id);
    }

    public function getInterestPoints(Request $request){
        //return interestPointModel::getInterestPoints();
        $data = DB::table('interest_points')
        -> when($request -> page, function ($query) use ($request){
            $skip = ($request -> page - 1) * 9;
            $take = 9;
            return $query -> skip($skip) -> take($take);
        })
        -> when($request -> author, function ($query) use ($request){
            return $query -> where('interest_points.author', 'LIKE', "%$request -> author%");
        })
        -> when($request -> idType, function ($query) use ($request){
            return $query -> leftjoin('point_has_type', 'point_has_type.idPoint', '=', 'interest_points.id')
                          -> where('point_has_type.idType', '=', $request -> idType );
        })

        -> when($request -> search, function ($query) use ($request){
            return $query -> where('interest_points.name', 'LIKE', "%$request -> search%");
        })
        -> get()
        -> toArray();

        return $data;
    }


    public function getInterestPoint(Request $request){
        $id =  $request -> id;
        $result = interestPointModel::getInterestPoint($id);
        //$qr = qrCodeController::generateQR("https://iescelia.org/qrcelia/puntodeinteres/".$id);
        return response() -> json($result);
    }


    public function searchInterestPoints(Request $request){
        $search = $request -> search;
        $_token = $request -> _token;
        $result = interestPointModel::searchInterestPoints($search);
        return response() -> json($result);
    }

    public function updateInterestPoint(){
        $id     = $_POST['id'];
        $field  = $_POST['field'];
        $value  = $_POST['value'];
        $_token = $_POST['_token'];
        //$date   = DATE("Y-m-d H:i:s");


        interestPointModel::updateInterestPoint($id, $field, $value);
        //return $date;
    }

    public function getResourcesFromPoint(Request $request){
        $id = $request -> id;
        $type = $request -> type;
        $result = interestPointModel::getResourcesFromPoint($id, $type);
        return response() -> json($result);
    }

    public static function getRandomPoint(){
        $points = interestPointModel::getIdsFromPoints();
        $point = $points[array_rand($points, 1)];
        return $point;
    }

    public function cambiarOrden(Request $request){
        $id = $request -> id;
        $orden = $request -> orden;
        //$orden = json_decode($orden, true );

        interestPointModel::updateInterestPoint($id, "orden", $orden);
    }


    public function getType(Request $request){
        $type = TypeModel::getTypes(); // Array con todos los tipos
        $typePoint = interestPointModel::getTypePoint($request -> id);  // array con los tipos asociados
        
        $types = [];

        foreach($type as $tp){
            array_push($types, [
                'type_id'   => $tp -> id,
                'type_name' => $tp -> name,
                'attached'   => false
            ]);
        }
       
        foreach($typePoint as $tps){
            for($i = 0; $i < count($types); $i++)
                if($tps -> idType == $types[$i]["type_id"])
                    $types[$i]["attached"] = true;
        }
       
        return response() -> json($types);
    }

    public function attachedPointType(Request $request){
        if($request -> attached){
            interestPointModel::attachedPointType($request -> idPoint, $request -> idType);
        }
        else{
            interestPointModel::deletedAttachedPointType($request -> idPoint, $request -> idType);
        }
    }
}