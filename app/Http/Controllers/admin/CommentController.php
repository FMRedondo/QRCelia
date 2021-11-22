<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\admin\CommentModel;
use Egulias\EmailValidator\Warning\Comment;
use PhpParser\Node\Expr\FuncCall;

class CommentController extends Controller
{
    //

    public function index(){

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
        return $result;
    }

    public function getComment(){
        $id = $_POST['id'];
        $result = CommentModel::getComment($id);
        return $result;
    }

    public function searchcomments(){
        $seach = $_POST['search'];
        $result = CommentModel::searchComments($seach);
        return $result;
    }

    public function updateComment(){
        $id = $_POST['id'];
        $field = $_POST['field'];
        $value = $_POST['value'];

        CommentModel::updateComments($id, $field, $value);
    }
}
