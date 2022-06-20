<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\admin\CommentModel;
use Illuminate\Support\Facades\DB;

class CommentController extends Controller
{
    //

    public function index(){
        $comments = DB::table('comments')
        ->join('interest_points', 'interest_points.id', '=', 'comments.idPunto')
        ->select(
            'comments.id as id',
            'comments.content as comment',
            'interest_points.name as idPoint',
        )
        -> get();

        return view('admin/comentarios', [
            'comments' => $comments
        ]);
    }

    public function addComment(Request $request){
        $content = $request -> content;
        $id = $request -> id;
        CommentModel::addComments($content, $id);
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
