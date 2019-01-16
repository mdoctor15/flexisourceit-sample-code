<?php

namespace App\Modules\Directories\Controllers;

use App\User;
use App\Role;
use Illuminate\Http\Request;

use App\Http\Controllers\Controller;

use Auth;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()
            ->json([
                'model' => User::filterPaginateOrder()
            ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return response()
            ->json([
                'form' => User::initialize(),
                'option' => [
                    'roles' => Role::orderBy('name')->get()->pluck('name', 'slug')->toArray()
                ]
            ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [            
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            // 'password' => 'required|string|min:6|confirmed',
            'roles' => 'required'
        ]);

        $request->merge(['slug' => str_slug($request->input('name'), '-')]);
        $request->merge(['password' => bcrypt('secret')]);

        $roles = implode(', ', $request->input('roles'));
        $request->merge(['roles' => $roles]);
        $user = User::create($request->all());

        return response()
            ->json([
                'saved' => true
            ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $user = User::findOrFail($id);
        // $user->roles = explode(', ', $user->roles);

        return response()
            ->json([
                'form' => $user,
                'option' => [
                     'roles' => Role::orderBy('name')->get()->pluck('name', 'slug')->toArray()
                ]
            ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'name' => 'required',
            'roles' => 'required'
        ]);

        $roles = implode(', ', $request->input('roles'));
        $request->merge(['roles' => $roles]);

        $user = User::findOrFail($id);
        $user->update($request->all());

        return response()
            ->json([
                'saved' => true
            ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        //
    }
}
