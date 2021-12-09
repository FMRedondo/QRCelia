<?php
namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\admin\TypeModel;
use Illuminate\Support\Facades\Date;

class resourceController extends Controller
{
    public function index(){
        return view('admin/recursos');
    }

    public function store(Request $request){

        $request->validate([
            'type'=>'required',
            'name'=>'required',
        ]);
        
        if ($request->hasFile('file')) {

            $request->validate([
                'image' => 'mimes:jpeg,bmp,png' 
            ]);

                                    // /storage/public/img
            $request->file->store('img', 'public');

            
            $resource = new resource([
                "name" => $request->get('name'),
                "url" => $request->file->hashName()
            ]);
            $resource->save(); 
        }

        return response()->json($result);
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

    public function updateResource(){
        $id = $_POST['id'];
        $type= $_POST['type'];
        $name = $_POST['name'];

        if ($request->hasFile('file')) {

            $request->validate([
                'image' => 'mimes:jpeg,bmp,png' 
            ]);

                                    //guarda en /storage/public/img
            $request->file->store('img', 'public');

            $resource = new resource([
                "name" => $request->get('name'),
                "url" => $request->file->hashName()
            ]);
            $resource->save(); 
        }
        $autor=$_POST['autor'];

        ResourceModel::updateResource($id,$type,$name,$url,$autor);
        return response()->json($result);
    }
}
