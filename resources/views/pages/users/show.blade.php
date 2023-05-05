@extends('layouts.main')

@section('content')
          <!-- Row -->
        <div class="row">
            <div class="col-md-12 col-xl-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Detail User</h4>
                    </div>
                    <div class="card-body">

                            <div class="">
                                <div class="form-group">
                                    <label for="role" class="form-label">Name</label>
                                    <input type="text" class="form-control" id="role" name="name" value="{{$user->name}}" placeholder="Enter Roles ..." disabled>

                                    <label for="role" class="form-label">E-mail</label>
                                    <input type="text" class="form-control" id="role" name="name" value="{{$user->email}}" placeholder="Enter Roles ..." disabled>
                                    
                                    
                                    <label for="role" class="form-label mb-0">Role</label>
                                    @if ($user->roles)
                                    <div class="d-flex">
                                        @foreach ($user->roles as $user_role)
                                        <form action="{{route('admin.users.roles.remove',[$user->id,$user_role->id])}}" method="post"  class="" title="Delete" data-toggle="tooltip">
                                            @csrf
                                            @method('DELETE')
                                            <button type="submit" name="action" class="btn-sm btn-danger-light mt-4 mb-4 mx-2 ">{{$user_role->name}}</i></a></button>
                                        </form>
                                        @endforeach
                                    </div>
                                    @endif
                                    <form action="{{route('admin.users.roles',[$user->id])}}" method="post">
                                        @csrf
                                        @if ($user->roles)
                                            @foreach ($user->roles as $user_role)
                                                @if ($loop->iteration > 0)
                                                <select name="role" id="role" class="form-control" disabled>
                                                    <option disabled selected>Choses Role</option>
                                                    @foreach ($roles as $role)
                                                    <option value="{{$role->name}}">{{$role->name}}</option>
                                                    @endforeach
                                                </select>
                                                @endif

                                                @endforeach
                                                @if (!isset($user_role))
                                                <select name="role" id="role" class="form-control mt-4  ">
                                                    <option disabled selected>Choses Role</option>
                                                    @foreach ($roles as $role)
                                                    <option value="{{$role->name}}">{{$role->name}}</option>
                                                    @endforeach
                                                </select>
                                                @endif
                                        @endif

                                        <div class="d-flex justify-content-end">
                                            <button class="btn btn-primary mt-4 mb-0 float-right" name="action">Save</button>
                                        </div>
                                            
                                    </form>
                                </div>
                            </div>


   
                        </div>
                    </div>
                </div>
            </div>
          
        </div>

        

        
      
@endsection