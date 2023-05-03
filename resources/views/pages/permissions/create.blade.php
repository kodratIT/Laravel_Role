@extends('layouts.main')

@section('content')
          <!-- Row -->
          <div class="row">
            <div class="col-md-12 col-xl-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Create Permissions</h4>
                    </div>
                    <div class="card-body">
                        @error('name')
                            <div class="alert alert-danger" role="alert">
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-hidden="true">×</button>
                                <i class="fa fa-frown-o me-2" aria-hidden="true"> {{$message}}</i>
                            </div>
                        @enderror

                        <form method="POST" action="{{ route('admin.permissions.store')}}"  >
                            @csrf
                            <div class="">
                                <div class="form-group">
                                    <label for="role" class="form-label">New Permission</label>
                                    <input type="text" class="form-control" id="role" name="name" value="{{old('name')}}" placeholder="Enter Permission ...">
                                </div>
                               
                            </div>
                            <button class="btn btn-primary mt-4 mb-0 right" name="action">Submit</button>
                        </form>
   
                        </div>
                    </div>
                </div>
            </div>
      
@endsection