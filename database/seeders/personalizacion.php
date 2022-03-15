<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class personalizacion extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('customization')->insert([
            'option' => 'nombre',
            'value' => 'QRCelia',
        ]);

        DB::table('customization')->insert([
            'option' => 'titulo',
            'value' => 'Descubre la historia del I.E.S Celia Viñas',
        ]);

        DB::table('customization')->insert([
            'option' => 'textoHome',
            'value' => 'En su caso siglo de historia, dentro de sus paredes han ocurrido multitud de historias y aún existen pruebas y restos de dichas ocurrencias. Aunque este edificio, fue construido en 1923, comenzó a ser instituto en 1951. ¿Sabías que antes de ese año, en 1937, sufrió daños por parte de un bombardeo alemán?',
        ]);

        DB::table('customization')->insert([
            'option' => 'tituloBold',
            'value' => 'QR',
        ]);

        DB::table('customization')->insert([
            'option' => 'tituloNormal',
            'value' => 'Celia',
        ]);

        DB::table('customization')->insert([
            'option' => 'boton1',
            'value' => 'Descubre más',
        ]);

        DB::table('customization')->insert([
            'option' => 'urlboton1',
            'value' => '/puntosInteres',
        ]);

        DB::table('customization')->insert([
            'option' => 'boton2',
            'value' => 'QR Misterioso',
        ]);

        DB::table('customization')->insert([
            'option' => 'urlboton2',
            'value' => '/qrmisterioso',
        ]);

    }
}
