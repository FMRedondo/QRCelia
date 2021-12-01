<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\admin\panelesModel;

class panelesController extends Controller
{
    public function datosPanelContenido(){

        $recursos = panelesModel::obtenerNumeroRecursos();
        foreach($recursos as $data){
            $this -> numeroRecursos = $data -> numero;
        }

        $puntosInteres = panelesModel::obtenerNumeroPuntosInteres();
        foreach($puntosInteres as $data){
            $this -> numeroPuntos = $data -> numero;
        }

        $comentarios = panelesModel::obtenerNumeroComentarios();
        foreach($comentarios as $data){
            $this -> numeroComentarios = $data -> numero;
        }

        $categorias = panelesModel::obtenerNumeroCategorias();
        foreach($categorias as $data){
            $this -> numeroCategorias = $data -> numero;
        }

        $usuarios = panelesModel::obtenerNumeroUsuarios();
        foreach($usuarios as $data){
            $this -> numeroUsuarios = $data -> numero;
        }
        
        return response()->json([
            'recursos'      => $this -> numeroRecursos,
            'puntos'        => $this -> numeroPuntos,
            'comentarios'   => $this -> numeroComentarios,
            'categorias'    => $this -> numeroCategorias,
            'usuarios'      => $this -> numeroUsuarios
        ]);

        
    }
}

