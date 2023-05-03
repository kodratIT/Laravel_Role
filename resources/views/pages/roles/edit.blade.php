@extends('layouts.main')

@section('content')
          <!-- Row -->
          <div class="row">
            <div class="col-md-12 col-xl-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Edit Roles</h4>
                    </div>
                    <div class="card-body">
                        @error('name')
                            <div class="alert alert-danger" role="alert">
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-hidden="true">×</button>
                                <i class="fa fa-frown-o me-2" aria-hidden="true"> {{$message}}</i>
                            </div>
                        @enderror

                        <form method="POST" action="{{ route('admin.roles.update',$role->id)}}"  >
                            @csrf
                            @method('PUT')
                            <div class="">
                                <div class="form-group">
                                    <label for="role" class="form-label">Roles</label>
                                    <input type="text" class="form-control" id="role" name="name" value="{{$role->name}}" placeholder="Enter Roles ...">
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
      
@endsection