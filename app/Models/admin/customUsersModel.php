<?php

namespace App\Models\admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class customUsersModel extends Model
{
    use HasFactory;

    public static function getUsers(){
        $sql = "SELECT * FROM users";
        $result = DB::select($sql);
        return $result;
    }

    public static function getUser($id){
        $sql = "SELECT * FROM users WHERE (id = $id)";
        $result = DB::select($sql);
        return $result;
   
    }

    public static function deleteUser($id){
        $sql = "DELETE FROM users WHERE (id = $id)";
        $result = DB::delete($sql);
    }


    public static function updateUser($id, $field, $value){
        $sql = "UPDATE users SET $field = $value WHERE (id = $id)";
        $result = DB::update($sql);
    }

    public static function searchUsers($search){
        $sql = "SELECT * FROM users WHERE email LIKE '%$search%' OR name LIKE '%$search%'";
        $result = DB::select($sql);
        return $result;
    }
    
    public static function addUser($name,$email,$password){
        $sql = "INSERT INTO users (name,email,password) VALUES ('$name','$email','$password')";
        DB::insert($sql);
        $id = DB::getPdo()->lastInsertId();
        return $id;
    }






}
