<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use SimpleSoftwareIO\QrCode\Facades\QrCode;

class qrCodeController extends Controller
{
    public static function generateQR($url){
        //QrCode::format('png')->merge("../public/img/escudoCelia.png", .3, true)->generate($url, "../public/qrcodes/" . $id . ".svg");
        return QrCode::generate($url);
    }
}
