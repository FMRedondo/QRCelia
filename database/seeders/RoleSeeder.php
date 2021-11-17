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
        $rol = Role::create(['name' => 'admin']);
        $permiso = Permission::create(['name' => 'verAdministracion']);
        $rol->givePermissionTo($permiso);
    }
}
