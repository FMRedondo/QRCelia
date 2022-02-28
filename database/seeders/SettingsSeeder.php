<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;
use App\Models\admin\SettingsModel;

class SettingsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('custom_settings')->insert([
            'option' => 'enable_comments',
            'value' => false
        ]);

        DB::table('custom_settings')->insert([
            'option' => 'enable_registration',
            'value' => false
        ]);
    }
}
