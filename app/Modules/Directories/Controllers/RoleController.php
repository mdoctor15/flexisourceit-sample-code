<?php

namespace App\Modules\Directories\Controllers;

use App\Role;
use Illuminate\Http\Request;

use App\Http\Controllers\Controller;

use Auth;

class RoleController extends Controller
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
                'model' => Role::filterPaginateOrder()
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
                'form' => Role::initialize(),
                'option' => [
                    'actions' => config('options.actions'),
                    'modules' => config('options.modules'),
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
            'name' => 'required|unique:roles',
            'slug' => 'required|unique:roles',
            'permissions' => 'required'
        ]);

        // $permissions = implode(', ', $request->input('permissions'));
        // $request->merge(['permissions' => $permissions]);
        $role = Role::create($request->all());

        return response()
            ->json([
                'saved' => true
            ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function show(Role $role)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function edit($slug)
    {
        $role = Role::where('slug', '=', $slug)->first();
        // $role->roles = explode(', ', $role->roles);

        return response()
            ->json([
                'form' => $role,
                'option' => [
                    'actions' => config('options.actions'),
                    'modules' => config('options.modules'),
                ]
            ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $slug)
    {
        $this->validate($request, [
            'name' => 'required',
            'permissions' => 'required'
        ]);

        // $permissions = implode(', ', $request->input('permissions'));
        // $request->merge(['permissions' => $permissions]);

        $role = Role::where('slug', '=', $slug)->first();
        $role->update($request->all());

        return response()
            ->json([
                'role' => $role,
                'saved' => true
            ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function destroy(Role $role)
    {
        //
    }
}
