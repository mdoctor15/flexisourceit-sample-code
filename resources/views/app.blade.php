<!doctype html>
<html class="no-js" lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        
        <title>Laravel</title>

        <!-- Place favicon.ico in the root directory -->
        <link rel="stylesheet" href="{{ asset('assets/_modular/css/vendor.css') }}">
        <link rel="stylesheet" href="{{ asset('css/pace.css') }}">
        {{-- <link rel="stylesheet" href="{{ asset('assets/_modular/css/select2.min.css') }}"> --}}
        <!-- Theme initialization -->
        <script>
            // var themeSettings = (localStorage.getItem('themeSettings')) ? JSON.parse(localStorage.getItem('themeSettings')) :
            // {};
            // var themeName = themeSettings.themeName || '';
            // if (themeName)
            // {
            //     document.write('<link rel="stylesheet" id="theme-style" href="css/app-' + themeName + '.css">');
            // }
            // else
            // {
                document.write('<link rel="stylesheet" id="theme-style" href="{{ asset('assets/_modular/css/app.css') }}">');
            // }
        </script>

        <link href="{{ asset('assets/_modular/css/nprogress.css') }}" rel="stylesheet" />
        <script src="{{ asset('assets/_modular/js/nprogress.js') }}"></script>

        <script>
            paceOptions = {
                ajax: true,
                document: true,
                eventLag: false
            };
        </script>
        <script src="{{ asset('js/pace.min.js') }}"></script>

        <link rel="stylesheet" type="text/css" href="{{asset('css/app.css')}}">

        <style type="text/css">
            body { font-family: 'Open Sans', sans-serif !important; }
        </style>
    </head>
    <body>
        {{-- <div class="container"> --}}
        <div class="main-wrapper">
            <div id="app"></div>
        </div>
    </body>
        <script type="text/javascript" src="{{asset('js/app.js')}}"></script>


        <script src="{{ asset('assets/_modular/js/vendor.js') }}"></script>
        <script src="{{ asset('assets/_modular/js/app.js') }}"></script>
        {{-- <script src="{{ asset('assets/_modular/js/select2.min.js') }}"></script> --}}
        {{-- <script src="https://unpkg.com/select2@4.0.3"></script> --}}

        <script type="text/javascript">

            // pace.start()
            // $(function() {
            //     $('.select2').select2({
            //         placeholder: 'Select',
            //         width: '100%',
            //         allowClear: true
            //     })
            // })
        </script>


</html>
