<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\admin\CommentModel;

class CommentController extends Controller
{
    //

    public function index(){
        return view('admin/comentarios');
    }

    public function addComment(){
        $content = $_POST['content'];
        CommentModel::addComments($content);
    }

    public function deleteComment(){
        $id = $_POST['id'];
        CommentModel::deleteComments($id);
    }

    public function getComments(){
        $result = CommentModel::getComments();
        return response() -> json($result);
    }

    public function getComment(){
        $id = $_POST['id'];
        $result = CommentModel::getComment($id);
        return $result;
    }

    public function searchcomments(){
        $search = $_POST['search'];
        $_token = $_POST['_token'];
        $result = CommentModel::searchComments($search);
        return response() -> json($result);
    }

    public function updateComment(){
        $id = $_POST['id'];
        $field = $_POST['field'];
        $value = $_POST['value'];

        CommentModel::updateComments($id, $field, $value);
    }
}
