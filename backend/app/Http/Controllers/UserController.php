<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    function createAccount(Request $req){
        $user=new User;
        $user->surname=$req->input('surname');
        $user->firstname=$req->input('firstname');
        $user->middlename=$req->input('middlename');
        $user->phonenumber=$req->input('phonenumber');
        $user->email=$req->input('email');
        $user->password=Hash::make($req->input('password'));
        $user->save();
        return $user;
    }
}
