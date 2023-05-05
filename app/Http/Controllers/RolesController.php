<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RolesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $roles = Role::all();
        $breadcrumb = "Roles";
        return view('pages.roles.index',compact('breadcrumb','roles'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $breadcrumb = "Create Roles";

        return view('pages.roles.create',compact('breadcrumb'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|min:3'
        ]);

        Role::create($validated);

        return to_route('admin.roles.index')->with('massage','Roles Create Acepted');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $role = Role::find($id);
        $permissions = Permission::all();
        $breadcrumb = "Roles";
        return view('pages.roles.edit',compact('role','breadcrumb','permissions'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'name' => 'required|min:3'
        ]);

        Role::where('id',$id)->update($validated);

        return to_route('admin.roles.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $role = Role::find($id);

        $role->delete();

        return  to_route('admin.roles.index');
    }

    public function givePermission(Request $request, Role $role ){

        if($role->hasPermissionTo($request->permission)){
            return back()->with('message','Permission Exists'); 
        }

        $role->givePermissionTo($request->permission);
        return back()->with('message','Permission Added'); 
        
    }

    public function revokePermission(Role $role,Permission $permission ){

        if($role->hasPermissionTo($permission)){
            
            $role->revokePermissionTo($permission);

            return back()->with('message','Permission deleted'); 
        }

        return back()->with('message','Permission not exists'); 
        
    }
}
