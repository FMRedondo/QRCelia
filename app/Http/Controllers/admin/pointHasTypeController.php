<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class pointHasTypeController extends Controller{
    function get(Request $request){
        return DB::table('interest_points')
        ->leftjoin('point_has_type', 'interest_points.id', '=', 'point_has_type.idPoint')
        ->leftjoin('types', 'types.id', '=', 'point_has_type.idType')
 
         ->when($request->main, function($query) use ($request){
             return $query->where('types.main', '=', $request->main);
         })

         ->select(DB::raw(
            "
            interest_points.id AS pointId,
            interest_points.name AS pointName,
            asociado,
            author,
            description,
            poster,
            text,
            types.id AS typeId,
            types.name AS typeName,
            types.orden AS typeOrden
            "
         ))

        ->orderBy('types.orden', 'asc')
 
        ->get()
        ->toArray();
    }
}
