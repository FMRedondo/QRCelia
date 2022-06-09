<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use SimpleSoftwareIO\QrCode\Facades\QrCode;

class qrCodeController extends Controller
{
    public static function generateQR(){
        
       return QrCode
       ::size(500)->errorCorrection('H')
        //>mergeString('/public/img/escudoCelia.png', .3, true)
        ->style('dot')
        ->eye('square')
        //->gradient('blue', 'red', 'blue', 'red', 'red', 'blue', 'red')
        //->merge('https://w3adda.com/wp-content/uploads/2019/07/laravel.png', 0.3, true)
        ->generate("https://fmredondo.com");

    }
}
