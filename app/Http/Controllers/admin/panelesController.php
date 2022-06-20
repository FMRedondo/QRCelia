<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\admin\panelesModel;
use Illuminate\Support\Facades\DB;

class panelesController extends Controller
{

   public function __construct(){
        $this -> numPuntos = DB::table('interest_points');
        $this -> numCategorias = DB::table('types');
        $this -> numRecursos = DB::table('resources');
        $this -> numComentarios = DB::table('comments');
        $this -> usuarios = DB::table('users');
        $this -> listaUsuarios = $this -> usuarios -> limit(4);
        $this -> interestPoint = DB::table('interest_points')-> limit(5);
   }

    public function index(){
        return view('admin.index', [
            'puntosInteres' => $this -> numPuntos -> count(),
            'categorias' => $this -> numCategorias-> count(),
            'recursos' => $this -> numRecursos -> count(),
            'comentarios' => $this -> numComentarios -> count(),
            'listaUsuarios' => $this -> listaUsuarios -> get(),
            'interestPoint' => $this -> interestPoint -> get(),
            'categories' => $this -> numCategorias -> get()
        ]);
    }

    public function datosPanelContenido(){
         return response() -> json([
            'puntosInteres' => $this -> numPuntos -> count(),
            'categorias' => $this -> numCategorias-> count(),
            'recursos' => $this -> numRecursos -> count(),
            'comentarios' => $this -> numComentarios -> count(),
            'usuarios' => $this -> usuarios -> count(),
         ]);
    }
}

