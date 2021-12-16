<?php
namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\admin\TypeModel;
use Illuminate\Support\Facades\Date;
use App\Models\admin\resourceModel;
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
        $user = $_POST['user'];
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

    // Funcion para subir recursos al servidor
    public function store(Request $request){
        $folder = "upload_error";
        $name = $request->get('name');
        $id = $_POST['id'];
        $field = "url";
        if ($request->hasFile('file')) {
            $request->validate([
                'image' => 'mimes:jpeg,jpg,bmp,png',
                'video' => 'mimes:mp4,mov,avi,webm',
                'audio' => 'mimes:mp3,mpeg,wav'
            ]);
            $file = pathinfo($name);
            $extension = $file['extension'];
            if ($extension == "jpeg" || $extension == "jpg" || $extension == "bmp" || $extension = "png") {
                $folder = "img";
            }
            if ($extension == "mp4" || $extension == "mov" || $extension == "avi" || $extension = "webm") {
                $folder = "video";
            }
            if ($extension == "mp3" || $extension == "wav") {
                $folder = "audio";
            }
                                    //guarda en /storage/public/img?????
            $request->file->store($folder, 'public');
            $resource = new resource([
                "name" => $request->get('name'),
                "url" => $request->file->hashName()
            ]);
            $resource->save(); 
            $value = "public/" .  $folder . "/" . $name;
        }
        ResourceModel::updateResource($id,$field,$value);
    }

    // Funcion para resubir un recurso
    public function reUploadResource(Request $request){
        $folder = "upload_error";
        $name = $request->get('name');
        $id = $_POST['id'];
        $field = "url";
        if ($request->hasFile('file')) {
            $request->validate([
                'image' => 'mimes:jpeg,jpg,bmp,png',
                'video' => 'mimes:mp4,mov,avi,webm',
                'audio' => 'mimes:mp3,mpeg,wav'
            ]);
            $file = pathinfo($name);
            $extension = $file['extension'];
            if ($extension == "jpeg" || $extension == "jpg" || $extension == "bmp" || $extension = "png") {
                $folder = "img";
            }
            if ($extension == "mp4" || $extension == "mov" || $extension == "avi" || $extension = "webm") {
                $folder = "video";
            }
            if ($extension == "mp3" || $extension == "wav") {
                $folder = "audio";
            }
                                    //guarda en /storage/public/img?????
            $request->file->store($folder, 'public');
            $resource = new resource([
                "name" => $request->get('name'),
                "url" => $request->file->hashName()
            ]);
            $resource->save(); 
            $value = "public/" .  $folder . "/" . $name;
        }
        ResourceModel::updateResource($id,$field,$value);
    }
}