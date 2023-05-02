<!doctype html>
<html lang="en" dir="ltr">

<head>

    <!-- META DATA -->
    <meta charset="UTF-8">
    <meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=0'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="Sash – Bootstrap 5  Admin & Dashboard Template">
    <meta name="author" content="Spruko Technologies Private Limited">
    <meta name="keywords"
        content="admin,admin dashboard,admin panel,admin template,bootstrap,clean,dashboard,flat,jquery,modern,responsive,premium admin templates,responsive admin,ui,ui kit.">

    <!-- FAVICON -->
    {{-- <link rel="shortcut icon" type="image/x-icon" href="{{ url(assets/images/brand/favicon.ico) }}"> --}}

    <!-- TITLE -->
    <title>Dashboard </title>

    <!-- BOOTSTRAP CSS -->
    <link id="style" href="{{ url('assets/plugins/bootstrap/css/bootstrap.min.css') }}" rel="stylesheet">

    <!-- STYLE CSS -->
     <link href="{{ url('assets/css/style.css') }}" rel="stylesheet">

	<!-- Plugins CSS -->
    <link href="{{ url('assets/css/plugins.css') }}" rel="stylesheet">

    <!--- FONT-ICONS CSS -->
    <link href="{{ url('assets/css/icons.css') }}" rel="stylesheet">

    <!-- INTERNAL Switcher css -->
    <link href="{{ url('assets/switcher/css/switcher.css') }}" rel="stylesheet">
    <link href="{{ url('assets/switcher/demo.css') }}" rel="stylesheet">

</head>

<body class="app sidebar-mini ltr light-mode">


    <!-- GLOBAL-LOADER -->
    {{-- <div id="global-loader">
        <img src="{{ url('assets/images/loader.svg') }}" class="loader-img" alt="Loader">
    </div> --}}
    <!-- /GLOBAL-LOADER -->


    <div class="page">
        <div class="page-main">

            <!-- / Navigasi -->
            @include('layouts.navigation')
            
            <!-- / END Navigasi -->

            {{-- sidebar --}}

            @include('layouts.sidebar')
            {{-- end-Sidebar --}}
            <div class="main-content app-content mt-0">
                <div class="side-app">
                    <!-- CONTAINER -->
                    <div class="main-container container-fluid">
                         <!-- PAGE-HEADER -->
                        <div class="page-header">
                            <h1 class="page-title">{{$breadcrumb}}</h1>
                            <div>
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">{{$breadcrumb}}</li>
                                </ol>
                            </div>
                        </div>
                        <!-- PAGE-HEADER END -->

                         @yield('content')
                    </div>
                </div>
             </div>
            
        </div>
    </div>

    <!-- PAGE -->
  

    

    

      

    <!-- BACK-TO-TOP -->
    <a href="#top" id="back-to-top"><i class="fa fa-angle-up"></i></a>

    <!-- JQUERY JS -->
    <script src="{{ url('assets/js/jquery.min.js') }}"></script>

    <!-- BOOTSTRAP JS -->
    <script src="{{ url('assets/plugins/bootstrap/js/popper.min.js') }}"></script>
    <script src="{{ url('assets/plugins/bootstrap/js/bootstrap.min.js')}}"></script>

    <!-- SPARKLINE JS-->
    <script src="{{ url('assets/js/jquery.sparkline.min.js')}}" ></script>

    <!-- Sticky js -->
    <script src="{{ url('assets/js/sticky.js') }}"></script>

    <!-- CHART-CIRCLE JS-->
    <script src="{{ url('assets/js/circle-progress.min.js') }}"></script>

    <!-- PIETY CHART JS-->
    <script src="{{ url('assets/plugins/peitychart/jquery.peity.min.js') }}"></script>
    <script src="{{ url('assets/plugins/peitychart/peitychart.init.js') }}"></script>

    <!-- SIDEBAR JS -->
    <script src="{{ url('assets/plugins/sidebar/sidebar.js') }}"></script>

    <!-- Perfect SCROLLBAR JS-->
    <script src="{{ url('assets/plugins/p-scroll/perfect-scrollbar.js') }}"></script>
    <script src="{{ url('assets/plugins/p-scroll/pscroll.js') }}"></script>
    <script src="{{ url('assets/plugins/p-scroll/pscroll-1.js') }}"></script>

    <!-- INTERNAL CHARTJS CHART JS-->
    <script src="{{ url('assets/plugins/chart/Chart.bundle.js') }}"></script>
    <script src="{{ url('assets/plugins/chart/utils.js') }}"></script>

    <!-- INTERNAL SELECT2 JS -->
    <script src="{{ url('assets/plugins/select2/select2.full.min.js') }}"></script>

    <!-- INTERNAL Data tables js-->
    <script src="{{ url('assets/plugins/datatable/js/jquery.dataTables.min.js') }}"></script>
    <script src="{{ url('assets/plugins/datatable/js/dataTables.bootstrap5.js') }}"></script>
    <script src="{{ url('assets/plugins/datatable/dataTables.responsive.min.js') }}"></script>

    <!-- INTERNAL APEXCHART JS -->
    <script src="{{ url('assets/js/apexcharts.js') }}"></script>
    <script src="{{ url('assets/plugins/apexchart/irregular-data-series.js') }}"></script>

    <!-- INTERNAL Flot JS -->
    <script src="{{ url('assets/plugins/flot/jquery.flot.js') }}"></script>
    <script src="{{ url('assets/plugins/flot/jquery.flot.fillbetween.js') }}"></script>
    <script src="{{ url('assets/plugins/flot/chart.flot.sampledata.js') }}"></script>
    <script src="{{ url('assets/plugins/flot/dashboard.sampledata.js') }}"></script>

    <!-- INTERNAL Vector js -->
    {{-- <script src="{{ url(assets/plugins/jvectormap/jquery-jvectormap-2.0.2.min.js) }}"></script> --}}
    <script src="{{ url('assets/plugins/jvectormap/jquery-jvectormap-world-mill-en.js') }}"></script>

    <!-- SIDE-MENU JS-->
    <script src="{{ url('assets/plugins/sidemenu/sidemenu.js') }}"></script>

	<!-- TypeHead js -->
	<script src="{{ url('assets/plugins/bootstrap5-typehead/autocomplete.js') }}"></script>
    <script src="{{ url('assets/js/typehead.js') }}"></script>

    <!-- INTERNAL INDEX JS -->
    <script src="{{ url('assets/js/index1.js') }}"></script>

    <!-- Color Theme js -->
    <script src="{{ url('assets/js/themeColors.js') }}"></script>

    <!-- CUSTOM JS -->
    <script src="{{ url('assets/js/custom.js') }}"></script>

    <!-- Custom-switcher -->
    <script src="{{ url('assets/js/custom-swicher.js') }}"></script>

    <!-- Switcher js -->
    <script src="{{ url('assets/switcher/js/switcher.js') }}"></script>

</body>

</html>