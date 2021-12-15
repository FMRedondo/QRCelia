<?php
namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\admin\TypeModel;
use Illuminate\Support\Facades\Date;
use App\Models\admin\resourceModel;
use Symfony\Component\HttpKernel\Event\RequestEvent;

class resourceController extends Controller
{
    public function index(){
        return view('admin/recursos');
    }

    // Funcion para subir recursos al servidor
    public function store(Request $request){
        $request->validate([
            'type'=>'required',
            'name'=>'required',
        ]);
        
        if ($request->hasFile('file')) {
            $request->validate([
                'image' => 'mimes:jpeg,jpg,bmp,png',
                'video' => 'mimes:mp4,mov,avi,webm',
                'audio' => 'mimes:mp3,mpeg,wav'
            ]);

                                    // /storage/public/img
            $request->file->store('img', 'public');
            $resource = new resourceModel([
                "name" => $request->get('name'),
                "url" => $request->file->hashName()
            ]);
            $resource->save(); 
        }
    }

    public function deleteResource(){
        $id = $_POST['id'];
        ResourceModel::deleteResource($id);
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

    public function searchResource(){
        $search = $_POST['search'];
        $result = ResourceModel::searchResource($search);
        return response()->json($result);
    }

    // Funcion para resubir un recurso
    public function reUploadResource(Request $request){
        $folder = "test";
        $name = $request->get('name');
        $id = $_POST['id'];
        $field = "url";
        if ($request->hasFile('file')) {
            $request->validate([
                'image' => 'mimes:jpeg,jpg,bmp,png',
                'video' => 'mimes:mp4,mov,avi,webm',
                'audio' => 'mimes:mp3,mpeg,wav'
            ]);

                                    //guarda en /storage/public/img
            $request->file->store('img', 'public');
            $resource = new resource([
                "name" => $request->get('name'),
                "url" => $request->file->hashName()
            ]);
            $resource->save(); 
        }
        ResourceModel::updateResource($id,$field,$value);
    }
}