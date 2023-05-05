@extends('layouts.main')

@section('content')
          <!-- Row -->
          <div class="row">
            <div class="col-md-12 col-xl-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Edit Permission</h4>
                    </div>
                    <div class="card-body">
                        @error('name')
                            <div class="alert alert-danger" role="alert">
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-hidden="true">×</button>
                                <i class="fa fa-frown-o me-2" aria-hidden="true"> {{$message}}</i>
                            </div>
                        @enderror

                        <form method="POST" action="{{ route('admin.permissions.update',$permission->id)}}"  >
                            @csrf
                            @method('PUT')
                            <div class="">
                                <div class="form-group">
                                    <label for="role" class="form-label">Roles</label>
                                    <input type="text" class="form-control" id="role" name="name" value="{{$permission->name}}" placeholder="Enter Permssions ...">
                                </div>
                               
                            </div>
                            <div class="d-flex justify-content-end">
                                <button class="btn btn-primary mt-4 mb-0 float-right" name="action">Save</button>
                            </div>
                        </form>
   
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-12 col-xl-12">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title">Assigned Permissions</h4>
                </div>
                <div class="card-body">
                   @if ($permission->roles )
                    <div class="d-flex">
                            @foreach ($permission->roles as $permission_role)
                            <form action="{{route('admin.permissions.roles.remove',[$permission->id,$permission_role->id])}}" method="post"  class="" title="Delete" data-toggle="tooltip">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class=" btn-sm btn-danger-light mt-2 mb-5 mx-2">{{$permission_role->name}}</i></a></button>
                            </form>
                            
                            @endforeach
                        </div>
                        @endif
                        <form action="{{route('admin.permissions.roles',$permission->id)}}" method="post">
                            @csrf
                            <select name="role" id="role" class="form-control">
                                <option disabled selected>Choses Roles</option>
                                @foreach ($roles as $role)
                                    <option value="{{$role->name}}">{{$role->name}}</option>
                                @endforeach
                            </select>
                                    
                            <div class="d-flex justify-content-end">
                                <button class="btn btn-primary mt-4 mb-0 float-right" name="action">Save</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

            
        </div>
      
@endsection