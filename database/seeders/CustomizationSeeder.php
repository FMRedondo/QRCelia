<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;

use Illuminate\Database\Seeder;

class CustomizationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('customization')->insert([
            'option' => 'favicon',
            'value' => '/img/favicon.ico'
        ]);

        DB::table('customization')->insert([
            'option' => 'bgImage',
            'value' => '/img/celiaRambla.jpg'
        ]);

        DB::table('customization')->insert([
            'option' => 'logo',
            'value' => '/img/escudoCelia.png'
        ]);

        DB::table('customization')->insert([
            'option' => 'webName',
            'value' => 'QRCelia'
        ]);

        DB::table('customization')->insert([
            'option' => 'homeTitle',
            'value' => 'Descubre la historia del <br><span class="negrita"> I.E.S Celia Viñas </span>'
        ]);

        DB::table('customization')->insert([
            'option' => 'homeDesc',
            'value' => 'En su escaso siglo de historia, dentro de sus paredes han ocurrido multitud de historias y aún existen pruebas  y restos de dichas ocurrencias. Aunque este edificio, fue construido en 1923, comenzó a ser instituto en 1951. ¿Sabías que antes de ese año, en 1937, sufrió daños por parte de un bombardeo alemán?'
        ]);

        DB::table('customization')->insert([
            'option' => 'homeLeftButtonText',
            'value' => 'Descubre más'
        ]);

        DB::table('customization')->insert([
            'option' => 'homeRightButtonText',
            'value' => 'QR misterioso'
        ]);
    }
}
