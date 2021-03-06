@extends('layouts.app')

@section('header')
    <link rel="stylesheet" type="text/css" href="{{URL::asset('template/app-assets/vendors/css/vendors.min.css')}}">

    <link rel="stylesheet" type="text/css" href="{{URL::asset('template/app-assets/vendors/css/editors/summernote.css')}}">
    <link rel="stylesheet" type="text/css" href="{{URL::asset('template/app-assets/vendors/css/editors/codemirror.css')}}">
    <link rel="stylesheet" type="text/css" href="{{URL::asset('template/app-assets/vendors/css/editors/theme/monokai.css')}}">


@endsection
@section('content')
    <!-- BEGIN: Content-->
    <div class="app-content content">
        <div class="content-overlay"></div>
        <div class="content-wrapper">
            <div class="content-header row">
                <div class="content-header-left col-md-6 col-12 mb-2 breadcrumb-new">
                    <div class="row breadcrumbs-top d-inline-block">
                        <div class="breadcrumb-wrapper col-12">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="{{route('home')}}">Home</a></li>
                                <li class="breadcrumb-item active">Privacy Policy</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div class="content-header-right col-md-6 col-12">
                    <div class="btn-group float-md-right" role="group">
                    </div>
                </div>
            </div>
            <div class="content-body">
                <!-- Zero configuration table -->
                <section id="configuration">
                    <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title" id="horz-layout-basic">Privacy Policy</h4>
                                    <a class="heading-elements-toggle"><i class="la la-ellipsis-v font-medium-3"></i></a>
                                    <div class="heading-elements"></div>
                                </div>
                                <div class="card-content collpase show">
                                    <div class="card-body">
                                        <div class="card-text"></div>
                                        <form action="{{route('submit_privacy_policy')}}" method="POST" class="form-horizontal" enctype="multipart/form-data">
                                            @csrf
                                            <div class="form-body">
                                                <textarea class="tinymce" name="text">{!! $policy->text !!}</textarea>
                                            </div>
                                            <div class="col-12 d-flex flex-sm-row flex-column justify-content-end mt-1">
                                                <button type="submit" class="btn btn-primary glow mb-1 mb-sm-0 mr-0 mr-sm-1 la la-check-square-o">Save</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>

@endsection

@section('script')
    <script src="{{URL::asset('template/app-assets/vendors/js/editors/tinymce/tinymce.min.js')}}"></script>
    <script src="{{URL::asset('template/app-assets/js/scripts/editors/editor-tinymce.js')}}"></script>
@endsection
