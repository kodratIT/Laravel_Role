@extends('layouts.main')

@section('content')
           
             <!-- Row -->
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Users</h3>
                    </div>
                    <div class="card-body">
                        <button id="table2-new-row-button " class="btn btn-primary mb-4 "> Add New</button>
                        <div class="table-responsive text-center">
                            <table class="table table-bordered border text-nowrap mb-0 " id="new-edit">
                                <thead class="text-center">
                                    <tr>
                                        <th>No</th>
                                        <th>Name</th>
                                        <th>E-mail</th>
                                        <th>Role</th>
                                        <th>Start date</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Kodrat Pamungkas</td>
                                        <td>kodratcoc@gmail.com</td>
                                        <td>Super Admin</td>
                                        <td>19/11/2001</td>
                                        <td class="text-center align-middle">
                                            <button class="btn btn-sm btn-primary badge " type="button"><i class="fe fe-edit"></i></button> 
                                            <button class="btn btn-sm btn-danger badge" type="button"><i class="fa fa-trash"></i></button>
                                        </td>
                                    </tr>
                                   
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Row -->
@endsection