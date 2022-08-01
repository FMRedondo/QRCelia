<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $role = Role::create(['name' => 'administrador']);
        Permission::create(['name' => 'ver_administracion']);
        $role->givePermissionTo('ver_administracion');

        // permisos para la funcionalidad de puntos de interes en el mapa

        $mapa = Role::create(['name' => 'viajero']);
        Permission::create(['name' => 'ver_lugares']);

        $mapa->givePermissionTo('ver_lugares');
        $role->givePermissionTo('ver_lugares');
    }
}
