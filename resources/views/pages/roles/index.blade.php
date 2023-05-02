@extends('layouts.main')

@section('content')
 <!--app-content open-->
 <div class="main-content app-content mt-0">
    <div class="side-app">

        <!-- CONTAINER -->
        <div class="main-container container-fluid">

            <!-- PAGE-HEADER -->
            <div class="page-header">
                <h1 class="page-title">Roles</h1>
                <div>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Roles</li>
                    </ol>
                </div>
            </div>
            <!-- PAGE-HEADER END -->
            <!-- Row -->
            <div class="row row-sm">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Roles Table</h3>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered text-nowrap border-bottom" id="basic-datatable">
                                    <thead>
                                        <tr>
                                            <th class="wd-15p border-bottom-0">First name</th>
                                            <th class="wd-15p border-bottom-0">Last name</th>
                                            <th class="wd-20p border-bottom-0">Position</th>
                                            <th class="wd-15p border-bottom-0">Start date</th>
                                            <th class="wd-10p border-bottom-0">Salary</th>
                                            <th class="wd-25p border-bottom-0">E-mail</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Bella</td>
                                            <td>Chloe</td>
                                            <td>System Developer</td>
                                            <td>2018/03/12</td>
                                            <td>$654,765</td>
                                            <td>b.Chloe@datatables.net</td>
                                        </tr>
                                        <tr>
                                            <td>Donna</td>
                                            <td>Bond</td>
                                            <td>Account Manager</td>
                                            <td>2012/02/21</td>
                                            <td>$543,654</td>
                                            <td>d.bond@datatables.net</td>
                                        </tr>
                                    
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Row -->
        </div>
    </div>
 </div>
@endsection