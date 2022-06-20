<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SettingController extends Controller
{

    public function index(){
        return view('admin/ajustes', [
            'settings' => DB::table('custom_settings')->get()
        ]);
    }

    public function getSettings(){
        return DB::table('custom_settings')->get();
    }

    public function changeOption(Request $request){
        return DB::table('custom_settings')
            -> where('id', '=', $request->id)
            -> update([
                'value' => $request -> value,

            ]);
    }

    public function activeComments(){
        return DB::table('custom_settings')
            ->where('option', '=', 'comentarios')
            ->limit(1)
            ->get();
    }
}
