export function imCSS(res){
    return `
    *{
        margin:0;
        padding:0;
    }
    .diy_mask{
        position: fixed;
        left: 0px;
        top: 0px;
        bottom: 0px;
        right: 0px;
        background: black;
        opacity: 0.4;
        z-index: ${res.props.zIndex ? res.props.zIndex : 2000};
        display: block;
    }
    .diy_dialog{
        min-width: 500px;
        max-width: 850px;
        z-index: ${res.props.zIndex ? res.props.zIndex + 1 : 2001};
        display: block;
        position: fixed;
        background: #fff;
        border-radius: 5px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
        top: 50%;
        left:50%;
        transform: translate(-50%,-50%);
    }
    .diy_body{
        overflow:auto
    }
    .diy_header{
        padding: 15px 6px 15px 25px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 18px;
        border-bottom: 1px solid #ccc;
    }
    .diy_title{
        word-wrap: break-word;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .diy_close{   
        cursor: pointer;
        transition: all 0.2s linear;
        margin: 0 10px;
    }
    .iconClose{
        height: 30px;
        transform: translateY(5px);
    }
    .diy_close:hover{
        opacity: 0.4;
    }
    .diy_body{
        min-height: 200px;
        max-height: 300px;
        border-bottom: 1px solid #ccc;
        font-weight: 700;
        box-sizing: border-box;
        padding: 10px 20px;
    }
    .diy_footer{
        padding: 7px 25px;
        display: flex;
        justify-content: right;
        align-items: center;
    }
    .diy_confirm{
        background-color: #1890ff;
        border: 1px solid #1890ff;
        color: white;
        padding: 8px 20px;
        display: flex;
        align-items: center;
        border-radius: 3px;
        cursor: pointer;
        margin-right: 30px;
    }
    .diy_cancel{
        background-color: #F0F0F0;
        border: 1px solid transparent;
        display: flex;
        align-items: center;
        padding: 8px 20px;
        border-radius: 3px;
        cursor: pointer;
    }
    .diy_confirm:hover{
        opacity: 0.5;
    }
    .diy_cancel:hover{
        background-color: #ccc;
    }
    
    // 卓远样式
    #mlrkon-dialog,#ui-dialog-title-mlrkon-dialog,
#mlrkon-trace-dialog, #ui-dialog-title-mlrkon-trace-dialog,
#mlrkon-online-dialog, #ui-dialog-title-mlrkon-online-dialog{
	font-size: 12px;
	font-family: "Arial", "Trebuchet MS", "Helvetica",  "Verdana", "sans-serif";
	margin: 0;
    overflow: hidden;
}

#mlrkon-dialog, #mlrkon-trace-dialog,#mlrkon-online-dialog {padding: 0em;}

#ui-dialog-title-mlrkon-dialog,
#ui-dialog-title-mlrkon-online-dialog,
#ui-dialog-title-mlrkon-trace-dialog {
    padding-left: 10px;
    color: #000;
    background: url(/images/nest/favicon.ico) transparent no-repeat left top;
}

#mlrkon-tabs {margin: 0.5em;}

#mlrkon-tabs table tr td{color: #000;}

/* #mlrkon-tabs ul li.ui-tabs-selected {background: #f6f5eb;} */

.mlrkon-online {color: #000;}

.mlrkon-tabs-panel {overflow-y: auto;}

.mlrkon-online ul, .mlrkon-tabs-panel ul {
	margin-top: 0px;
	margin-bottom: 0px;
	padding: 0;
	list-style: none;
}
.mlrkon-online li, .mlrkon-tabs-panel li {
	font-size: 12px;
    color: #000;
	/* padding: 5px 0px 0px 0px; */
	background: url(/images/nest/img12.gif) repeat-x left bottom;
}

.mlrkon-online h1, .mlrkon-tabs-panel h1{
	margin: 7px 7px 5px 7px;
}

.mlrkon-online h1 {
    font-size: 14px;
    font-weight: bold;
    text-align: center;
	padding-bottom: 5px;
	border-bottom: 1px solid #EDEBD5;
}

.mlrkon-online .content{
    display: inline;
	line-height: 18px;
	letter-spacing: 0.4pt;
	font-size: 12px;
	height: 100%;
}

.mlrkon-online li .title, .mlrkon-tabs-panel li .title {
	display: inline;
	font-weight: bold;
	text-align: left;
}

.mlrkon-online li .content, .mlrkon-tabs-panel li .content {
	display: inline;
	line-height: 18px;
	letter-spacing: 0.8pt;
	height: 100%;
}

.mlrkon-tabs-panel li .caution {
	line-height:25px;
	letter-spacing:0.4pt;
	font-size:18px;
	color: #F50;
	font-weight: bold;
}

.mlrkon-tabs-panel li .caution1 {
	line-height:25px;
	letter-spacing:0.4pt;
	font-size: 16px;
	color: #765;
	font-weight: bold;
}

.mlrkon-tabs-panel li .title_path {
    display: inline;
	font-weight: bold;
	text-align: left;
	margin-right: 7px;
    font-family: 黑体;
    font-size: 13px;
}

.mlrkon-tabs-panel li .content_path {
    display: inline;
	line-height: 18px;
	letter-spacing: 0.4pt;
    font-family: 黑体;
	font-size: 13px;
	height: 100%;
}

.mlrkon-tabs-panel div.radio{
	text-align: center;
	line-height: 18px;
	letter-spacing: 0.8pt;
	font-size: 12px;
    color: #000;
}

#mlrkon-trace-dialog {
    background: #f6f5eb;
    overflow-y :auto;
}

#mlrkon-trace-dialog ul{
    margin: 5px 10px;
	padding: 0px;
	list-style: none;
}

#mlrkon-trace-dialog ul li{
    padding: 5px 0px 0px 0px;
}

#mlrkon-trace-dialog ul li .title {
	display: inline;
	font-weight: bold;
	text-align: left;
}
.mlrkon-tabs-panel-sub {
    margin-left: 15px;
}
.mlrkon-tabs-panel-sub ul{
    margin: 0px 5px 2px 15px;
    padding: 0;
    list-style: none;
}
.mlrkon-tabs-panel-sub ul li {
    padding: 2px 0px 0px 0px;
}

#mlrkon-trace-dialog textarea {
    -moz-border-radius: 2px 2px 2px 2px;
    -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1) inset, 0 1px 0 rgba(255, 255, 255, 0.2);
    border: 1px solid #CECECE;
    outline: medium none;
    padding: 3px;
}

.mlrkon-toolbarNavg {
	position: absolute;
	right: 22px;
	top: 8px;
	z-index: 1003;
}

.mlrkon-toolbarNavg ul {
	left: 0px;
	margin: 0;
	padding: 0;
	list-style: none;
	float: left;
}

.mlrkon-toolbarNavg ul li {
    background: none;
	float: left;
	padding: 0;
	margin: 0;
}

.mlrkon-toolbarNavg ul li a {
	display: block;
	float: left;
	padding: 2px;
	margin: 1px;
	text-decoration: none;
	height: 16px;
	width: 16px;
	line-height: 20px;
}
.mlrkon-toolbarNavg ul li a#ico-mlrkon-print{
	background: url("/images/screen/print.gif") no-repeat 50% 80%;
}

.mlrkon-toolbarNavg ul li a#ico-mlrkon-config{
	background: url("/images/nest/find.gif") no-repeat 50% 80%;
}

.mlrkon-toolbarNavg ul li a#ico-mlrkon-help{
	background: url("/images/nest/help.gif") no-repeat 50% 80%;
}

.mlrkon-toolbarNavg ul li a:hover {
	border: 1px #765 solid;
}

.mlrkon-toolbarNavg ul li a#ico-mlrkon-silence{
	background: url("/images/nest/icon_padlock.png") no-repeat 50% 80%;
}

.mlrkon-message {
    width: 85%;
    float: left;
    font-size: 12px;     
}

.mlrkon-message label {
	font-weight: bold ;    
    color: #000;
}

.mlrkon-online {
	margin: 5px;
	padding: 8px;
	border: 1px solid #B6B6B6;
	background: #f6f5eb;
    color: #000;
    overflow-y: auto;
}

.mlrkon-warning {
	background-color: #FFE59F;
    color: #776655;
    text-align:center;
    font-weight: bold;
    font-size: 12px;
    padding: 2px 0px 1px;
}

.mlrkon-title-drug {
	font-size: 14px;
	font-weight: bold;
	text-align: center;
	padding-bottom: 5px;
	border-bottom: 1px solid #444;
}

.mlrkon-drug-detail {
	width: 100%;
	margin: 5px;
	text-algin: center;
    font-size: 12px;
}

.mlrkon-footer span a, .mlrkon-tabs-panel li .content span a{
	color: blue;
	text-decoration: none;
	font-weight: bold;
	padding-right: 3px;
}

.mlrkon-footer span a:hover, .mlrkon-tabs-panel li .content span a:hover {
    text-decoration: underline;
}

.mlrkon-hint { margin-left: 50px; color: blue;}

.mlrkon-content-alarm {
	line-height: 18px;
	letter-spacing: 0.4pt;
	font-size: 12px;
    color: #000;
}

.mlrkon-alarm-hint {
    bottom: 0px;
    height: 20px;
    font-size: 13px;
    font-weight: bold;
    color: red;
    text-align: right;
}

.mlrkon-online div.standard-info {
    padding: 0px 0px 5px 0px;
    border-bottom: 1px solid #765;
    color: blue;
    font-weight: bold;
    width: 100%;
}
.mlrkon-online table tr td.standard-info-header {
    text-align: right;
    width:180px;
    padding-right:5px;
}
.mlrkon-online div.charge-info {
    padding: 10px 0px 5px 0px;
    color:red;
    width: 100%;
}
.mlrkon-online table tr td.charge-cost {
    border-bottom: 1px solid red;
    width: 110px;
    text-align: right;
    padding-right: 5px;
}
.mlrkon-online table tr td.charge-cost-normal {
    border-bottom: 1px solid black ;
    width: 110px;
    color: black;
    text-align: right;
    padding-right: 5px;
}
.mlrkon-online table tr td.charge-warrning {
    font-weight: bold;
}
.mlrkon-online table tr td.charge-warrning1 {
    font-size: 16px;
    font-weight: bold;
}

.mlrkon-online table tr td.charge-normal {
    color: black;
}

.mlrkon-online div.charge-warrning2 {
    font-size: 14px;
    font-weight: bold;
    color: blue;
    text-align: center;
    padding-top: 10px;
    width: 100%;
}

#mlrkon-balance h1, #mlrkon-balance h2{
	text-align: center;
	margin-top: 0;
	margin-bottom: 8px;
	font-weight: bold;
}

#mlrkon-balance h1 {
	margin-top: 10px;
	margin-bottom: 7px;
	font-size: 186%;
}

#mlrkon-balance h2 {
	font-size: 186%;
	color: #F50;
}

#mlrkon-balance table.balance_detail{
    font-size: 13px;
	margin-left: 5px;
	border-top: 1px solid #765;
	border-right: 1px solid #765;
	border-left: 2px solid #765;
	border-bottom: 2px solid #765;
}

#mlrkon-balance table.balance_detail td{
	border-top: 1px solid #765;
	border-right: 1px solid #765;
	padding: 2px;
}

#mlrkon-balance table td.header{
	font-weight:bold;
	text-align: center;
	padding-top: 2px;
	color:#38389C;
}

#mlrkon-balance table.balance_detail td.header1{
	font-weight:normal;
	text-align: center;
	padding-top: 2px;
	color:#38389C;
}

#mlrkon-balance table.balance_detail td.header2 {
    font-weight: bold;
	text-align: center;
	color: #38389C;
    width: 25%;
    border: 0px;
}

#mlrkon-balance table.balance_detail td.total_sum_title{
    font-weight:bold;
    color:blue;
    text-align:center;
    letter-spacing:10pt;
    font-size:180%
}

#mlrkon-balance table.balance_detail td.total_sum1 {
	font-size:125%;
	font-weight: bold;
	color:#38389C;
	padding: 2px 0px 2px 10px;
}

#mlrkon-balance table.patient_info {
	border: 0px;
	font-size: 13px;
}

#mlrkon-balance table.patient_info td{
	border: 0px;
}

#mlrkon-balance table.standard_info_table{
    border:0px;
    color: blue;
    font-weight: bold;
    margin-left: 5px;
}
#mlrkon-balance table.standard_info_table td{
    border: 0px;
}

#mlrkon-balance table.free_scale td.big_header {
    color: #38389C;
    font-weight: bold;
    font-size: 18px;
    width: 34%;
}

.zyyy-tab-common {
	border-right:1px dotted #B2B2B2;
	border-bottom:1px dotted #B2B2B2;
	font-size: 12px;
	margin: 0 auto;
	width: 100%;
}
.zyyy-tab-common td{
	border-left:1px dotted #B2B2B2;
	border-top:1px dotted #B2B2B2;
}
.zyyy-tab-common .td-title{
	font-weight: bold;
	font-size: 12px;
	text-align:left;
	word-break: keep-all;
	white-space:nowrap;
}
.zyyy-tab-common .td-content{
	line-height: 18px;
	font-size: 12px;
	height: 100%;
}

/*
 * jQuery UI CSS Framework 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Theming/API
 */

/* Layout helpers
----------------------------------*/
.ui-helper-hidden { display: none; }
.ui-helper-hidden-accessible { position: absolute !important; clip: rect(1px 1px 1px 1px); clip: rect(1px,1px,1px,1px); }
.ui-helper-reset { margin: 0; padding: 0; border: 0; outline: 0; line-height: 1.3; text-decoration: none; font-size: 100%; list-style: none; }
.ui-helper-clearfix:after { content: "."; display: block; height: 0; clear: both; visibility: hidden; }
.ui-helper-clearfix { display: inline-block; }
/* required comment for clearfix to work in Opera \*/
* html .ui-helper-clearfix { height:1%; }
.ui-helper-clearfix { display:block; }
/* end clearfix */
.ui-helper-zfix { width: 100%; height: 100%; top: 0; left: 0; position: absolute; opacity: 0; filter:Alpha(Opacity=0); }


/* Interaction Cues
----------------------------------*/
.ui-state-disabled { cursor: default !important; }


/* Icons
----------------------------------*/

/* states and images */
.ui-icon { display: block; text-indent: -99999px; overflow: hidden; background-repeat: no-repeat; }


/* Misc visuals
----------------------------------*/

/* Overlays */
.ui-widget-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }


/*
 * jQuery UI CSS Framework 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Theming/API
 *
 * To view and modify this theme, visit http://jqueryui.com/themeroller/?ctl=themeroller
 */


/* Component containers
----------------------------------*/
.ui-widget { font-family: Arial,sans-serif; font-size: 1.1em; }
.ui-widget .ui-widget { font-size: 1em; }
.ui-widget input, .ui-widget select, .ui-widget textarea, .ui-widget button { font-family: Arial,sans-serif; font-size: 1em; }
.ui-widget-content { border: 1px solid #B6B6B6; background: #ffffff; color: #4F4F4F; }
.ui-widget-content a { color: #4F4F4F; }
.ui-widget-header { border: 1px solid #B6B6B6; color: #4F4F4F; font-weight: bold; }
.ui-widget-header {
	background: url(/images/nest/bg_fallback.png) 0 0 repeat-x;
	background: -webkit-gradient(
		linear,
		left bottom,
		left top,
		color-stop(1, rgb(237,237,237)),
		color-stop(0, rgb(196,196,196))
	);
	background: -moz-linear-gradient(
		center top,
		rgb(237,237,237),
		rgb(196,196,196)
	);
}
.ui-widget-header a { color: #4F4F4F; }

/* Interaction states
----------------------------------*/
.ui-state-default, .ui-widget-content .ui-state-default, .ui-widget-header .ui-state-default { border: 1px solid #B6B6B6; font-weight: normal; color: #4F4F4F; }
.ui-state-default, .ui-widget-content .ui-state-default, .ui-widget-header .ui-state-default { 
	background: url(/images/nest/bg_fallback.png) 0 0 repeat-x;
	background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    color-stop(1, rgb(237,237,237)),
    color-stop(0, rgb(196,196,196))
	);
	background: -moz-linear-gradient(
		center top,
		rgb(237,237,237),
		rgb(196,196,196)
	);
	-webkit-box-shadow: 0 1px 0 rgba(255,255,255,0.6) inset;
	-moz-box-shadow: 0 1px 0 rgba(255,255,255,0.6) inset;
	box-shadow: 0 1px 0 rgba(255,255,255,0.6) inset;
}
.ui-state-default a, .ui-state-default a:link, .ui-state-default a:visited { color: #4F4F4F; text-decoration: none; }
.ui-state-hover, .ui-widget-content .ui-state-hover, .ui-widget-header .ui-state-hover, .ui-state-focus, .ui-widget-content .ui-state-focus, .ui-widget-header .ui-state-focus { border: 1px solid #9D9D9D; font-weight: normal; color: #313131; }
.ui-state-hover a, .ui-state-hover a:hover { color: #313131; text-decoration: none; }
.ui-state-active, .ui-widget-content .ui-state-active, .ui-widget-header .ui-state-active { 
	outline: none;
	color: #1c4257; border: 1px solid #7096ab;
	background: url(/images/nest/bg_fallback.png) 0 -50px repeat-x;
	background: -webkit-gradient(
		linear,
		left bottom,
		left top,
		color-stop(1, rgb(185,224,245)),
		color-stop(0, rgb(146,189,214))
	);
	background: -moz-linear-gradient(
		center top,
		rgb(185,224,245),
		rgb(146,189,214)
	);
	-webkit-box-shadow: none;
	-moz-box-shadow: none;
	box-shadow: none;
}
.ui-state-active a, .ui-state-active a:link, .ui-state-active a:visited { color: #313131; text-decoration: none; }
.ui-widget :active { outline: none; }

/* Interaction Cues
----------------------------------*/
.ui-state-highlight, .ui-widget-content .ui-state-highlight, .ui-widget-header .ui-state-highlight  { border: 1px solid #d2dbf4; background: #f4f8fd; color: #0d2054; -moz-border-radius: 0 !important; -webkit-border-radius: 0 !important; border-radius: 0 !important; }
.ui-state-highlight a, .ui-widget-content .ui-state-highlight a,.ui-widget-header .ui-state-highlight a { color: #363636; }
.ui-state-error, .ui-widget-content .ui-state-error, .ui-widget-header .ui-state-error { border: 1px solid #e2d0d0; background: #fcf0f0; color: #280b0b; -moz-border-radius: 0 !important; -webkit-border-radius: 0 !important; border-radius: 0 !important; }
.ui-state-error a, .ui-widget-content .ui-state-error a, .ui-widget-header .ui-state-error a { color: #cd0a0a; }
.ui-state-error-text, .ui-widget-content .ui-state-error-text, .ui-widget-header .ui-state-error-text { color: #cd0a0a; }
.ui-priority-primary, .ui-widget-content .ui-priority-primary, .ui-widget-header .ui-priority-primary { font-weight: bold; }
.ui-priority-secondary, .ui-widget-content .ui-priority-secondary,  .ui-widget-header .ui-priority-secondary { opacity: .7; filter:Alpha(Opacity=70); font-weight: normal; }
.ui-state-disabled, .ui-widget-content .ui-state-disabled, .ui-widget-header .ui-state-disabled { opacity: .35; filter:Alpha(Opacity=35); background-image: none; }

/* Icons
----------------------------------*/

/* states and images */
.ui-icon { width: 16px; height: 16px; background-image: url(/images/nest/ui-icons_222222_256x240.png); }
.ui-widget-content .ui-icon {background-image: url(/images/nest/ui-icons_222222_256x240.png); }
.ui-widget-header .ui-icon {background-image: url(/images/nest/ui-icons_222222_256x240.png); }
.ui-state-default .ui-icon { background-image: url(/images/nest/ui-icons_454545_256x240.png); }
.ui-state-hover .ui-icon, .ui-state-focus .ui-icon {background-image: url(/images/nest/ui-icons_454545_256x240.png); }
.ui-state-active .ui-icon {background-image: url(/images/nest/ui-icons_454545_256x240.png); }
.ui-state-highlight .ui-icon {background-image: url(/images/nest/ui-icons_454545_256x240.png); }
.ui-state-error .ui-icon, .ui-state-error-text .ui-icon { background: url(/images/nest/icon_sprite.png) -16px 0 no-repeat !important; }
.ui-state-highlight .ui-icon, .ui-state-error .ui-icon { margin-top: -1px; }

/* positioning */
.ui-icon-carat-1-n { background-position: 0 0; }
.ui-icon-carat-1-ne { background-position: -16px 0; }
.ui-icon-carat-1-e { background-position: -32px 0; }
.ui-icon-carat-1-se { background-position: -48px 0; }
.ui-icon-carat-1-s { background-position: -64px 0; }
.ui-icon-carat-1-sw { background-position: -80px 0; }
.ui-icon-carat-1-w { background-position: -96px 0; }
.ui-icon-carat-1-nw { background-position: -112px 0; }
.ui-icon-carat-2-n-s { background-position: -128px 0; }
.ui-icon-carat-2-e-w { background-position: -144px 0; }
.ui-icon-triangle-1-n { background-position: 0 -16px; }
.ui-icon-triangle-1-ne { background-position: -16px -16px; }
.ui-icon-triangle-1-e { background-position: -32px -16px; }
.ui-icon-triangle-1-se { background-position: -48px -16px; }
.ui-icon-triangle-1-s { background-position: -64px -16px; }
.ui-icon-triangle-1-sw { background-position: -80px -16px; }
.ui-icon-triangle-1-w { background-position: -96px -16px; }
.ui-icon-triangle-1-nw { background-position: -112px -16px; }
.ui-icon-triangle-2-n-s { background-position: -128px -16px; }
.ui-icon-triangle-2-e-w { background-position: -144px -16px; }
.ui-icon-arrow-1-n { background-position: 0 -32px; }
.ui-icon-arrow-1-ne { background-position: -16px -32px; }
.ui-icon-arrow-1-e { background-position: -32px -32px; }
.ui-icon-arrow-1-se { background-position: -48px -32px; }
.ui-icon-arrow-1-s { background-position: -64px -32px; }
.ui-icon-arrow-1-sw { background-position: -80px -32px; }
.ui-icon-arrow-1-w { background-position: -96px -32px; }
.ui-icon-arrow-1-nw { background-position: -112px -32px; }
.ui-icon-arrow-2-n-s { background-position: -128px -32px; }
.ui-icon-arrow-2-ne-sw { background-position: -144px -32px; }
.ui-icon-arrow-2-e-w { background-position: -160px -32px; }
.ui-icon-arrow-2-se-nw { background-position: -176px -32px; }
.ui-icon-arrowstop-1-n { background-position: -192px -32px; }
.ui-icon-arrowstop-1-e { background-position: -208px -32px; }
.ui-icon-arrowstop-1-s { background-position: -224px -32px; }
.ui-icon-arrowstop-1-w { background-position: -240px -32px; }
.ui-icon-arrowthick-1-n { background-position: 0 -48px; }
.ui-icon-arrowthick-1-ne { background-position: -16px -48px; }
.ui-icon-arrowthick-1-e { background-position: -32px -48px; }
.ui-icon-arrowthick-1-se { background-position: -48px -48px; }
.ui-icon-arrowthick-1-s { background-position: -64px -48px; }
.ui-icon-arrowthick-1-sw { background-position: -80px -48px; }
.ui-icon-arrowthick-1-w { background-position: -96px -48px; }
.ui-icon-arrowthick-1-nw { background-position: -112px -48px; }
.ui-icon-arrowthick-2-n-s { background-position: -128px -48px; }
.ui-icon-arrowthick-2-ne-sw { background-position: -144px -48px; }
.ui-icon-arrowthick-2-e-w { background-position: -160px -48px; }
.ui-icon-arrowthick-2-se-nw { background-position: -176px -48px; }
.ui-icon-arrowthickstop-1-n { background-position: -192px -48px; }
.ui-icon-arrowthickstop-1-e { background-position: -208px -48px; }
.ui-icon-arrowthickstop-1-s { background-position: -224px -48px; }
.ui-icon-arrowthickstop-1-w { background-position: -240px -48px; }
.ui-icon-arrowreturnthick-1-w { background-position: 0 -64px; }
.ui-icon-arrowreturnthick-1-n { background-position: -16px -64px; }
.ui-icon-arrowreturnthick-1-e { background-position: -32px -64px; }
.ui-icon-arrowreturnthick-1-s { background-position: -48px -64px; }
.ui-icon-arrowreturn-1-w { background-position: -64px -64px; }
.ui-icon-arrowreturn-1-n { background-position: -80px -64px; }
.ui-icon-arrowreturn-1-e { background-position: -96px -64px; }
.ui-icon-arrowreturn-1-s { background-position: -112px -64px; }
.ui-icon-arrowrefresh-1-w { background-position: -128px -64px; }
.ui-icon-arrowrefresh-1-n { background-position: -144px -64px; }
.ui-icon-arrowrefresh-1-e { background-position: -160px -64px; }
.ui-icon-arrowrefresh-1-s { background-position: -176px -64px; }
.ui-icon-arrow-4 { background-position: 0 -80px; }
.ui-icon-arrow-4-diag { background-position: -16px -80px; }
.ui-icon-extlink { background-position: -32px -80px; }
.ui-icon-newwin { background-position: -48px -80px; }
.ui-icon-refresh { background-position: -64px -80px; }
.ui-icon-shuffle { background-position: -80px -80px; }
.ui-icon-transfer-e-w { background-position: -96px -80px; }
.ui-icon-transferthick-e-w { background-position: -112px -80px; }
.ui-icon-folder-collapsed { background-position: 0 -96px; }
.ui-icon-folder-open { background-position: -16px -96px; }
.ui-icon-document { background-position: -32px -96px; }
.ui-icon-document-b { background-position: -48px -96px; }
.ui-icon-note { background-position: -64px -96px; }
.ui-icon-mail-closed { background-position: -80px -96px; }
.ui-icon-mail-open { background-position: -96px -96px; }
.ui-icon-suitcase { background-position: -112px -96px; }
.ui-icon-comment { background-position: -128px -96px; }
.ui-icon-person { background-position: -144px -96px; }
.ui-icon-print { background-position: -160px -96px; }
.ui-icon-trash { background-position: -176px -96px; }
.ui-icon-locked { background-position: -192px -96px; }
.ui-icon-unlocked { background-position: -208px -96px; }
.ui-icon-bookmark { background-position: -224px -96px; }
.ui-icon-tag { background-position: -240px -96px; }
.ui-icon-home { background-position: 0 -112px; }
.ui-icon-flag { background-position: -16px -112px; }
.ui-icon-calendar { background-position: -32px -112px; }
.ui-icon-cart { background-position: -48px -112px; }
.ui-icon-pencil { background-position: -64px -112px; }
.ui-icon-clock { background-position: -80px -112px; }
.ui-icon-disk { background-position: -96px -112px; }
.ui-icon-calculator { background-position: -112px -112px; }
.ui-icon-zoomin { background-position: -128px -112px; }
.ui-icon-zoomout { background-position: -144px -112px; }
.ui-icon-search { background-position: -160px -112px; }
.ui-icon-wrench { background-position: -176px -112px; }
.ui-icon-gear { background-position: -192px -112px; }
.ui-icon-heart { background-position: -208px -112px; }
.ui-icon-star { background-position: -224px -112px; }
.ui-icon-link { background-position: -240px -112px; }
.ui-icon-cancel { background-position: 0 -128px; }
.ui-icon-plus { background-position: -16px -128px; }
.ui-icon-plusthick { background-position: -32px -128px; }
.ui-icon-minus { background-position: -48px -128px; }
.ui-icon-minusthick { background-position: -64px -128px; }
.ui-icon-close { background-position: -80px -128px; }
.ui-icon-closethick { background-position: -96px -128px; }
.ui-icon-key { background-position: -112px -128px; }
.ui-icon-lightbulb { background-position: -128px -128px; }
.ui-icon-scissors { background-position: -144px -128px; }
.ui-icon-clipboard { background-position: -160px -128px; }
.ui-icon-copy { background-position: -176px -128px; }
.ui-icon-contact { background-position: -192px -128px; }
.ui-icon-image { background-position: -208px -128px; }
.ui-icon-video { background-position: -224px -128px; }
.ui-icon-script { background-position: -240px -128px; }
.ui-icon-alert { background-position: 0 -144px; }
.ui-icon-info { background: url(/images/nest/icon_sprite.png) 0 0 no-repeat !important; }
.ui-icon-notice { background-position: -32px -144px; }
.ui-icon-help { background-position: -48px -144px; }
.ui-icon-check { background-position: -64px -144px; }
.ui-icon-bullet { background-position: -80px -144px; }
.ui-icon-radio-off { background-position: -96px -144px; }
.ui-icon-radio-on { background-position: -112px -144px; }
.ui-icon-pin-w { background-position: -128px -144px; }
.ui-icon-pin-s { background-position: -144px -144px; }
.ui-icon-play { background-position: 0 -160px; }
.ui-icon-pause { background-position: -16px -160px; }
.ui-icon-seek-next { background-position: -32px -160px; }
.ui-icon-seek-prev { background-position: -48px -160px; }
.ui-icon-seek-end { background-position: -64px -160px; }
.ui-icon-seek-start { background-position: -80px -160px; }
/* ui-icon-seek-first is deprecated, use ui-icon-seek-start instead */
.ui-icon-seek-first { background-position: -80px -160px; }
.ui-icon-stop { background-position: -96px -160px; }
.ui-icon-eject { background-position: -112px -160px; }
.ui-icon-volume-off { background-position: -128px -160px; }
.ui-icon-volume-on { background-position: -144px -160px; }
.ui-icon-power { background-position: 0 -176px; }
.ui-icon-signal-diag { background-position: -16px -176px; }
.ui-icon-signal { background-position: -32px -176px; }
.ui-icon-battery-0 { background-position: -48px -176px; }
.ui-icon-battery-1 { background-position: -64px -176px; }
.ui-icon-battery-2 { background-position: -80px -176px; }
.ui-icon-battery-3 { background-position: -96px -176px; }
.ui-icon-circle-plus { background-position: 0 -192px; }
.ui-icon-circle-minus { background-position: -16px -192px; }
.ui-icon-circle-close { background-position: -32px -192px; }
.ui-icon-circle-triangle-e { background-position: -48px -192px; }
.ui-icon-circle-triangle-s { background-position: -64px -192px; }
.ui-icon-circle-triangle-w { background-position: -80px -192px; }
.ui-icon-circle-triangle-n { background-position: -96px -192px; }
.ui-icon-circle-arrow-e { background-position: -112px -192px; }
.ui-icon-circle-arrow-s { background-position: -128px -192px; }
.ui-icon-circle-arrow-w { background-position: -144px -192px; }
.ui-icon-circle-arrow-n { background-position: -160px -192px; }
.ui-icon-circle-zoomin { background-position: -176px -192px; }
.ui-icon-circle-zoomout { background-position: -192px -192px; }
.ui-icon-circle-check { background-position: -208px -192px; }
.ui-icon-circlesmall-plus { background-position: 0 -208px; }
.ui-icon-circlesmall-minus { background-position: -16px -208px; }
.ui-icon-circlesmall-close { background-position: -32px -208px; }
.ui-icon-squaresmall-plus { background-position: -48px -208px; }
.ui-icon-squaresmall-minus { background-position: -64px -208px; }
.ui-icon-squaresmall-close { background-position: -80px -208px; }
.ui-icon-grip-dotted-vertical { background-position: 0 -224px; }
.ui-icon-grip-dotted-horizontal { background-position: -16px -224px; }
.ui-icon-grip-solid-vertical { background-position: -32px -224px; }
.ui-icon-grip-solid-horizontal { background-position: -48px -224px; }
.ui-icon-gripsmall-diagonal-se { background-position: -64px -224px; }
.ui-icon-grip-diagonal-se { background-position: -80px -224px; }


/* Misc visuals
----------------------------------*/

/* Corner radius */
.ui-corner-tl { -moz-border-radius-topleft: 3px; -webkit-border-top-left-radius: 3px; border-top-left-radius: 3px; }
.ui-corner-tr { -moz-border-radius-topright: 3px; -webkit-border-top-right-radius: 3px; border-top-right-radius: 3px; }
.ui-corner-bl { -moz-border-radius-bottomleft: 3px; -webkit-border-bottom-left-radius: 3px; border-bottom-left-radius: 3px; }
.ui-corner-br { -moz-border-radius-bottomright: 3px; -webkit-border-bottom-right-radius: 3px; border-bottom-right-radius: 3px; }
.ui-corner-top { -moz-border-radius-topleft: 3px; -webkit-border-top-left-radius: 3px; border-top-left-radius: 3px; -moz-border-radius-topright: 3px; -webkit-border-top-right-radius: 3px; border-top-right-radius: 3px; }
.ui-corner-bottom { -moz-border-radius-bottomleft: 3px; -webkit-border-bottom-left-radius: 3px; border-bottom-left-radius: 3px; -moz-border-radius-bottomright: 3px; -webkit-border-bottom-right-radius: 3px; border-bottom-right-radius: 3px; }
.ui-corner-right {  -moz-border-radius-topright: 3px; -webkit-border-top-right-radius: 3px; border-top-right-radius: 3px; -moz-border-radius-bottomright: 3px; -webkit-border-bottom-right-radius: 3px; border-bottom-right-radius: 3px; }
.ui-corner-left { -moz-border-radius-topleft: 3px; -webkit-border-top-left-radius: 3px; border-top-left-radius: 3px; -moz-border-radius-bottomleft: 3px; -webkit-border-bottom-left-radius: 3px; border-bottom-left-radius: 3px; }
.ui-corner-all { -moz-border-radius: 3px; -webkit-border-radius: 3px; border-radius: 3px; }

/* Overlays */
.ui-widget-overlay { background: #262b33; opacity: .70;filter:Alpha(Opacity=70); }
.ui-widget-shadow { margin: -8px 0 0 -8px; padding: 8px; background: #000000; opacity: .30;filter:Alpha(Opacity=30); -moz-border-radius: 8px; -webkit-border-radius: 8px; border-radius: 8px; }/*
 * jQuery UI Resizable 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Resizable#theming
 */
.ui-resizable { position: relative;}
.ui-resizable-handle { position: absolute;font-size: 0.1px;z-index: 99999; display: block;}
.ui-resizable-disabled .ui-resizable-handle, .ui-resizable-autohide .ui-resizable-handle { display: none; }
.ui-resizable-n { cursor: n-resize; height: 7px; width: 100%; top: -5px; left: 0; }
.ui-resizable-s { cursor: s-resize; height: 7px; width: 100%; bottom: -5px; left: 0; }
.ui-resizable-e { cursor: e-resize; width: 7px; right: -5px; top: 0; height: 100%; }
.ui-resizable-w { cursor: w-resize; width: 7px; left: -5px; top: 0; height: 100%; }
.ui-resizable-se { cursor: se-resize; width: 12px; height: 12px; right: 1px; bottom: 1px; }
.ui-resizable-sw { cursor: sw-resize; width: 9px; height: 9px; left: -5px; bottom: -5px; }
.ui-resizable-nw { cursor: nw-resize; width: 9px; height: 9px; left: -5px; top: -5px; }
.ui-resizable-ne { cursor: ne-resize; width: 9px; height: 9px; right: -5px; top: -5px;}/*
 * jQuery UI Selectable 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Selectable#theming
 */
.ui-selectable-helper { position: absolute; z-index: 100; border:1px dotted black; }
/*
 * jQuery UI Accordion 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Accordion#theming
 */
/* IE/Win - Fix animation bug - #4615 */
.ui-accordion { width: 100%; }
.ui-accordion .ui-accordion-header { cursor: pointer; position: relative; margin-top: 1px; zoom: 1; }
.ui-accordion .ui-accordion-header, .ui-accordion .ui-accordion-content { -moz-border-radius: 0; -webkit-border-radius: 0; border-radius: 0; }
.ui-accordion .ui-accordion-li-fix { display: inline; }
.ui-accordion .ui-accordion-header-active { border-bottom: 0 !important; }
.ui-accordion .ui-accordion-header a { display: block; font-size: 12px; font-weight: bold; padding: .5em .5em .5em .7em; }
.ui-accordion-icons .ui-accordion-header a { padding-left: 2.2em; }
.ui-accordion .ui-accordion-header .ui-icon { position: absolute; left: .5em; top: 50%; margin-top: -8px; }
.ui-accordion .ui-accordion-content { padding: 1em 2.2em; border-top: 0; margin-top: -2px; position: relative; top: 1px; margin-bottom: 2px; overflow: auto; display: none; zoom: 1; }
.ui-accordion .ui-accordion-content-active { display: block; }/*
 * jQuery UI Autocomplete 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Autocomplete#theming
 */
.ui-autocomplete {
	position: absolute; cursor: default; z-index: 3;
	-moz-border-radius: 0; -webkit-border-radius: 0; border-radius: 0;
	-moz-box-shadow: 0 1px 5px rgba(0,0,0,0.3);
	-webkit-box-shadow: 0 1px 5px rgba(0,0,0,0.3);
}	

/* workarounds */
* html .ui-autocomplete { width:1px; } /* without this, the menu expands to 100% in IE6 */

/*
 * jQuery UI Menu 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Menu#theming
 */
.ui-menu {
	list-style:none;
	padding: 2px;
	margin: 0;
	display:block;
	float: left;
}
.ui-menu .ui-menu {
	margin-top: -3px;
}
.ui-menu .ui-menu-item {
	margin:0;
	padding: 0;
	zoom: 1;
	float: left;
	clear: left;
	width: 100%;
}
.ui-menu .ui-menu-item a {
	text-decoration:none;
	display:block;
	padding:.2em .4em;
	line-height:1.5;
	zoom:1;
}
.ui-menu .ui-menu-item a.ui-state-hover,
.ui-menu .ui-menu-item a.ui-state-active {
	font-weight: normal;
	margin: -1px;
	background: #5f83b9;
	color: #FFFFFF;
	text-shadow: 0px 1px 1px #234386;
	border-color: #466086;
	-moz-border-radius: 0; -webkit-border-radius: 0; border-radius: 0;
}
/*
 * jQuery UI Button 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Button#theming
 */
.ui-button { display: inline-block; position: relative; padding: 0; margin-right: .1em; text-decoration: none !important; cursor: pointer; text-align: center; zoom: 1; overflow: visible; -webkit-user-select: none; -moz-user-select: none; user-select: none; } /* the overflow property removes extra width in IE */
.ui-button-icon-only { width: 2.2em; } /* to make room for the icon, a width needs to be set here */
button.ui-button-icon-only { width: 2.4em; } /* button elements seem to need a little more width */
.ui-button-icons-only { width: 3.4em; } 
button.ui-button-icons-only { width: 3.7em; } 

/* button animation properties */
.ui-button {
    -webkit-transition: -webkit-box-shadow 0.25s ease-in-out;
    -moz-transition: -moz-box-shadow 0.25s ease-in-out;
    -o-transition: -o-box-shadow 0.25s ease-in-out;
}

/*states*/
.ui-button.ui-state-hover { 
	-moz-box-shadow: 0 0 8px rgba(0, 0, 0, 0.15), 0 1px 0 rgba(255,255,255,0.8) inset; 
	-webkit-box-shadow: 0 0 8px rgba(0, 0, 0, 0.15), 0 1px 0 rgba(255,255,255,0.8) inset;
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.15), 0 1px 0 rgba(255,255,255,0.8) inset;
}
.ui-button.ui-state-focus {
	outline: none;
	color: #1c4257; border-color: #7096ab;
	background: url(/images/nest/bg_fallback.png) 0 -50px repeat-x;
	background: -webkit-gradient(
		linear,
		left bottom,
		left top,
		color-stop(1, rgb(185,224,245)),
		color-stop(0, rgb(146,189,214))
	);
	background: -moz-linear-gradient(
		center top,
		rgb(185,224,245),
		rgb(146,189,214)
	);
	-moz-box-shadow: 0 0 8px rgba(0, 0, 0, 0.15), 0 1px 0 rgba(255,255,255,0.8) inset; 
	-webkit-box-shadow: 0 0 8px rgba(0, 0, 0, 0.15), 0 1px 0 rgba(255,255,255,0.8) inset;
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.15), 0 1px 0 rgba(255,255,255,0.8) inset;
}
 
/*button text element */
.ui-button .ui-button-text { display: block; line-height: 1.4; font-size: 14px; font-weight: bold; text-shadow: 0 1px 0 rgba(255, 255, 255, 0.6); }
.ui-button-text-only .ui-button-text { padding: .4em 1em; background: #fff;}
.ui-button-icon-only .ui-button-text, .ui-button-icons-only .ui-button-text { padding: .4em; text-indent: -9999999px; }
.ui-button-text-icon-primary .ui-button-text, .ui-button-text-icons .ui-button-text { padding: .4em 1em .4em 2.1em; }
.ui-button-text-icon-secondary .ui-button-text, .ui-button-text-icons .ui-button-text { padding: .4em 2.1em .4em 1em; }
.ui-button-text-icons .ui-button-text { padding-left: 2.1em; padding-right: 2.1em; }
/* no icon support for input elements, provide padding by default */
input.ui-button { font-size: 14px; font-weight: bold; text-shadow: 0 1px 0 rgba(255, 255, 255, 0.6); padding: 0 1em !important; height: 33px; }
/*remove submit button internal padding in Firefox*/ 
input.ui-button::-moz-focus-inner { 
    border: 0;
    padding: 0;
}
/* fix webkits handling of the box model */
@media screen and (-webkit-min-device-pixel-ratio:0) {
	input.ui-button {
		height: 31px !important;
	}
}


/*button icon element(s) */
.ui-button-icon-only .ui-icon, .ui-button-text-icon-primary .ui-icon, .ui-button-text-icon-secondary .ui-icon, .ui-button-text-icons .ui-icon, .ui-button-icons-only .ui-icon { position: absolute; top: 50%; margin-top: -8px; }
.ui-button-icon-only .ui-icon { left: 50%; margin-left: -8px; }
.ui-button-text-icon-primary .ui-button-icon-primary, .ui-button-text-icons .ui-button-icon-primary, .ui-button-icons-only .ui-button-icon-primary { left: .5em; }
.ui-button-text-icon-secondary .ui-button-icon-secondary, .ui-button-text-icons .ui-button-icon-secondary, .ui-button-icons-only .ui-button-icon-secondary { right: .5em; }
.ui-button-text-icons .ui-button-icon-secondary, .ui-button-icons-only .ui-button-icon-secondary { right: .5em; }

/*button sets*/
.ui-buttonset { margin-right: 7px; }
.ui-buttonset .ui-button { margin-left: 0; margin-right: -.3em; }
.ui-buttonset .ui-button.ui-state-active { color: #1c4257; border-color: #7096ab; }
.ui-buttonset .ui-button.ui-state-active {
	background-image: -webkit-gradient(
		linear,
		left bottom,
		left top,
		color-stop(1, rgb(185,224,245)),
		color-stop(0, rgb(146,189,214))
	);
	background-image: -moz-linear-gradient(
		center top,
		rgb(185,224,245),
		rgb(146,189,214)
	);
	-webkit-box-shadow: none;
	-moz-box-shadow: none;
	box-shadow: none;
}

/* workarounds */
button.ui-button::-moz-focus-inner { border: 0; padding: 0; } /* reset extra padding in Firefox */
/*
 * jQuery UI Dialog 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Dialog#theming
 */
.ui-dialog { position: absolute; padding: 0; width: 300px; overflow: hidden; }
.ui-dialog {
	-webkit-box-shadow: 0 2px 12px rgba(0,0,0,0.6);
	-moz-box-shadow: 0 2px 12px rgba(0,0,0,0.6);
}
.ui-dialog .ui-dialog-titlebar { padding: 0.2em 0em 0.4em 0em; position: relative; border: none; /* border-bottom: 1px solid #979797; */ -moz-border-radius: 0; -webkit-border-radius: 0; border-radius: 0;  }
.ui-dialog .ui-dialog-title { float: left; margin: .1em 16px .2em 0; font-size: 12px; text-shadow: 0 1px 0 rgba(255,255,255,0.5); } 
.ui-dialog .ui-dialog-titlebar-close { position: absolute; right: .8em; top: 55%; width: 16px; margin: -10px 0 0 0; padding: 0; height: 16px; }
.ui-dialog .ui-dialog-titlebar-close span { display: block; margin: 1px; background: url(/images/nest/icon_sprite.png) 0 -16px no-repeat; }
.ui-dialog .ui-dialog-titlebar-close:hover span { background-position: -16px -16px; }
.ui-dialog .ui-dialog-titlebar-close:hover, .ui-dialog .ui-dialog-titlebar-close:focus { padding: 0; border: 0; }
.ui-dialog .ui-dialog-content { position: relative; border: 0; padding: .5em 1em; background: none; overflow: auto; zoom: 1; }
.ui-dialog .ui-dialog-buttonpane { text-align: center; border-width: 1px 0 0 0; background-image: none; margin: .5em 0 0 0; padding: .3em 1em .5em .4em; }
.ui-dialog .ui-dialog-buttonpane .ui-dialog-buttonset { float: none;}
.ui-dialog .ui-dialog-buttonpane button { margin: .5em .4em .5em 0; cursor: pointer; }
.ui-dialog .ui-resizable-se { width: 14px; height: 14px; right: 3px; bottom: 3px; }
.ui-draggable .ui-dialog-titlebar { cursor: move; background-color: #9EC1F9; background: #9EC1F9;}
/*
 * jQuery UI Slider 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Slider#theming
 */
.ui-slider { position: relative; text-align: left; background: #d7d7d7; z-index: 1; }
.ui-slider { -moz-box-shadow: 0 1px 2px rgba(0,0,0,0.5) inset; -webkit-box-shadow: 0 1px 2px rgba(0,0,0,0.5) inset; box-shadow: 0 1px 2px rgba(0,0,0,0.5) inset; }
.ui-slider .ui-slider-handle { background: url(/images/nest/slider_handles.png) 0px -23px no-repeat; position: absolute; z-index: 2; width: 23px; height: 23px; cursor: default; border: none; outline: none; -moz-box-shadow: none; -webkit-box-shadow: none; box-shadow: none; }
.ui-slider  .ui-state-hover, .ui-slider  .ui-state-active { background-position: 0 0; }
.ui-slider .ui-slider-range { background: #a3cae0; position: absolute; z-index: 1; font-size: .7em; display: block; border: 0; background-position: 0 0; }
.ui-slider .ui-slider-range { -moz-box-shadow: 0 1px 2px rgba(17,35,45,0.6) inset; -webkit-box-shadow: 0 1px 2px rgba(17,35,45,0.6) inset; box-shadow: 0 1px 2px rgba(17,35,45,0.6) inset; }


.ui-slider-horizontal { height: 5px; }
.ui-slider-horizontal .ui-slider-handle { top: -8px; margin-left: -13px; }
.ui-slider-horizontal .ui-slider-range { top: 0; height: 100%; }
.ui-slider-horizontal .ui-slider-range-min { left: 0; }
.ui-slider-horizontal .ui-slider-range-max { right: 0; }

.ui-slider-vertical { width: 5px; height: 100px; }
.ui-slider-vertical .ui-slider-handle { left: -8px; margin-left: 0; margin-bottom: -13px; }
.ui-slider-vertical .ui-slider-range { left: 0; width: 100%; }
.ui-slider-vertical .ui-slider-range-min { bottom: 0; }
.ui-slider-vertical .ui-slider-range-max { top: 0; }/*
 * jQuery UI Tabs 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Tabs#theming
 */
.ui-tabs { position: relative; zoom: 1; border: 0; background: transparent; } /* position: relative prevents IE scroll bug (element with position: relative inside container with overflow: auto appear as "fixed") */
.ui-tabs .ui-tabs-nav { margin: 0; padding: 0; background: transparent; border-width: 0 0 1px 0; }
.ui-tabs .ui-tabs-nav { 
	-moz-border-radius: 0;
	-webkit-border-radius: 0;
	border-radius: 0;
}
.ui-tabs .ui-tabs-nav li { list-style: none; float: left; position: relative; top: 1px; margin: 0 .2em 1px 0; border-bottom: 0 !important; padding: 0; white-space: nowrap; }
.ui-tabs .ui-tabs-nav li a { float: left; padding: .5em 1em; text-decoration: none; font-size: 12px; font-weight: bold; text-shadow: 0 1px 0 rgba(255,255,255,0.5); }
.ui-tabs .ui-tabs-nav li.ui-tabs-selected { margin-bottom: 0; padding-bottom: 1px; background: #fff; border-color: #B6B6B6; }
.ui-tabs .ui-tabs-nav li.ui-tabs-selected a, .ui-tabs .ui-tabs-nav li.ui-state-disabled a, .ui-tabs .ui-tabs-nav li.ui-state-processing a { cursor: text; outline: none; }
.ui-tabs .ui-tabs-nav li a, .ui-tabs.ui-tabs-collapsible .ui-tabs-nav li.ui-tabs-selected a { cursor: pointer; } /* first selector in group seems obsolete, but required to overcome bug in Opera applying cursor: text overall if defined elsewhere... */
.ui-tabs .ui-tabs-panel { display: block; border-width: 0 1px 1px 1px; padding: 1em 1.4em; background: none; }
.ui-tabs .ui-tabs-panel { background: #FFF;
	-moz-border-radius: 0;
	-webkit-border-radius: 0;
	border-radius: 0;
}
.ui-tabs .ui-tabs-hide { display: none !important; }
/*
 * jQuery UI Datepicker 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Datepicker#theming
 */
.ui-datepicker { width: 17em; padding: 0; display: none; border-color: #DDDDDD; }
.ui-datepicker {
	-moz-box-shadow: 0 4px 8px rgba(0,0,0,0.5);
	-webkit-box-shadow: 0 4px 8px rgba(0,0,0,0.5);
	box-shadow: 0 4px 8px rgba(0,0,0,0.5);
}
.ui-datepicker .ui-datepicker-header { position:relative; padding:.35em 0; border: none; border-bottom: 1px solid #B6B6B6; -moz-border-radius: 0; -webkit-border-radius: 0; border-radius: 0; }
.ui-datepicker .ui-datepicker-prev, .ui-datepicker .ui-datepicker-next { position:absolute; top: 6px; width: 1.8em; height: 1.8em; }
.ui-datepicker .ui-datepicker-prev-hover, .ui-datepicker .ui-datepicker-next-hover { border: 1px none; }
.ui-datepicker .ui-datepicker-prev { left:2px; }
.ui-datepicker .ui-datepicker-next { right:2px; }
.ui-datepicker .ui-datepicker-prev span { background-position: 0px -32px !important; }
.ui-datepicker .ui-datepicker-next span { background-position: -16px -32px !important; }
.ui-datepicker .ui-datepicker-prev-hover span { background-position: 0px -48px !important; }
.ui-datepicker .ui-datepicker-next-hover span { background-position: -16px -48px !important; }
.ui-datepicker .ui-datepicker-prev span, .ui-datepicker .ui-datepicker-next span { display: block; position: absolute; left: 50%; margin-left: -8px; top: 50%; margin-top: -8px; background: url(/images/nest/icon_sprite.png) no-repeat; }
.ui-datepicker .ui-datepicker-title { margin: 0 2.3em; line-height: 1.8em; text-align: center; font-size: 12px; text-shadow: 0 1px 0 rgba(255,255,255,0.6); }
.ui-datepicker .ui-datepicker-title select { font-size:1em; margin:1px 0; }
.ui-datepicker select.ui-datepicker-month-year {width: 100%;}
.ui-datepicker select.ui-datepicker-month, 
.ui-datepicker select.ui-datepicker-year { width: 49%;}
.ui-datepicker table {width: 100%; font-size: .9em; border-collapse: collapse; margin:0 0 .4em; }
.ui-datepicker th { padding: .7em .3em; text-align: center; font-weight: bold; border: 0;  }
.ui-datepicker td { border: 0; padding: 1px; }
.ui-datepicker td span, .ui-datepicker td a { display: block; padding: .2em; text-align: right; text-decoration: none; }
.ui-datepicker .ui-datepicker-buttonpane { background-image: none; margin: .7em 0 0 0; padding:0 .2em; border-left: 0; border-right: 0; border-bottom: 0; }
.ui-datepicker .ui-datepicker-buttonpane button { float: right; margin: .5em .2em .4em; cursor: pointer; padding: .2em .6em .3em .6em; width:auto; overflow:visible; }
.ui-datepicker .ui-datepicker-buttonpane button.ui-datepicker-current { float:left; }
.ui-datepicker .ui-state-default { background: transparent; border-color: #FFF; }
.ui-datepicker .ui-state-active { background: #5F83B9; border-color: #5F83B9; color: #FFF; font-weight: bold; text-shadow: 0 1px 1px #234386; }

/* with multiple calendars */
.ui-datepicker.ui-datepicker-multi { width:auto; }
.ui-datepicker-multi .ui-datepicker-group { float:left; }
.ui-datepicker-multi .ui-datepicker-group table { width:95%; margin:0 auto .4em; }
.ui-datepicker-multi-2 .ui-datepicker-group { width:50%; }
.ui-datepicker-multi-3 .ui-datepicker-group { width:33.3%; }
.ui-datepicker-multi-4 .ui-datepicker-group { width:25%; }
.ui-datepicker-multi .ui-datepicker-group-last .ui-datepicker-header { border-left-width:0; }
.ui-datepicker-multi .ui-datepicker-group-middle .ui-datepicker-header { border-left-width:0; }
.ui-datepicker-multi .ui-datepicker-buttonpane { clear:left; }
.ui-datepicker-row-break { clear:both; width:100%; }

/* RTL support */
.ui-datepicker-rtl { direction: rtl; }
.ui-datepicker-rtl .ui-datepicker-prev { right: 2px; left: auto; }
.ui-datepicker-rtl .ui-datepicker-next { left: 2px; right: auto; }
.ui-datepicker-rtl .ui-datepicker-prev:hover { right: 1px; left: auto; }
.ui-datepicker-rtl .ui-datepicker-next:hover { left: 1px; right: auto; }
.ui-datepicker-rtl .ui-datepicker-buttonpane { clear:right; }
.ui-datepicker-rtl .ui-datepicker-buttonpane button { float: left; }
.ui-datepicker-rtl .ui-datepicker-buttonpane button.ui-datepicker-current { float:right; }
.ui-datepicker-rtl .ui-datepicker-group { float:right; }
.ui-datepicker-rtl .ui-datepicker-group-last .ui-datepicker-header { border-right-width:0; border-left-width:1px; }
.ui-datepicker-rtl .ui-datepicker-group-middle .ui-datepicker-header { border-right-width:0; border-left-width:1px; }

/* IE6 IFRAME FIX (taken from datepicker 1.5.3 */
.ui-datepicker-cover {
    display: none; /*sorry for IE5*/
    display/**/: block; /*sorry for IE5*/
    position: absolute; /*must have*/
    z-index: -1; /*must have*/
    filter: mask(); /*must have*/
    top: -4px; /*must have*/
    left: -4px; /*must have*/
    width: 200px; /*must have*/
    height: 200px; /*must have*/
}/*
 * jQuery UI Progressbar 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Progressbar#theming
 */
.ui-progressbar { height: 12px; text-align: left; background: #FFF url(/images/nest/progress_bar.gif) 0 -14px repeat-x; }
.ui-progressbar .ui-progressbar-value {margin: -1px; height:100%; background: url(/images/nest/progress_bar.gif) 0 0 repeat-x; }

/* Extra Input Field Styling */
.ui-form textarea, .ui-form input:not([type="submit"]):not([type="button"]):not([type="checkbox"]):not([type="radio"]):not([type="file"]):not([type="range"]) {
	padding: 3px;
	-webkit-border-radius: 2px;
	-moz-border-radius: 2px;
	border-radius: 2px;
	border: 1px solid #cecece;
	outline: none;
	-webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.1) inset, 0 1px 0 rgba(255,255,255,0.2);
	-moz-box-shadow: 0 1px 3px rgba(0,0,0,0.1) inset, 0 1px 0 rgba(255,255,255,0.2);
	box-shadow: 0 1px 3px rgba(0,0,0,0.1) inset, 0 1px 0 rgba(255,255,255,0.2);
    -webkit-transition: all 0.25s ease-in-out;
    -moz-transition: all 0.25 ease-in-out;
    -o-transition: all 0.25s ease-in-out;
}
.ui-form textarea:hover, .ui-form input:not([type="submit"]):not([type="button"]):not([type="checkbox"]):not([type="radio"]):not([type="file"]):not([type="range"]):hover {
	border: 1px solid #bdbdbd;
	-webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.2) inset, 0 1px 0 rgba(255,255,255,0.2);
	-moz-box-shadow: 0 1px 3px rgba(0,0,0,0.2) inset, 0 1px 0 rgba(255,255,255,0.2);
	box-shadow: 0 1px 3px rgba(0,0,0,0.2) inset, 0 1px 0 rgba(255,255,255,0.2);
}
.ui-form textarea:focus, .ui-form input:not([type="submit"]):not([type="button"]):not([type="checkbox"]):not([type="radio"]):not([type="file"]):not([type="range"]):focus {
	border: 1px solid #95bdd4;
	-webkit-box-shadow: 0 2px 3px rgba(161,202,226,0.5) inset, 0 1px 0 rgba(255,255,255,0.2);
	-moz-box-shadow: 0 2px 3px rgba(161,202,226,0.5) inset, 0 1px 0 rgba(255,255,255,0.2);
	box-shadow: 0 2px 3px rgba(161,202,226,0.5) inset, 0 1px 0 rgba(255,255,255,0.2);
}


/*Grid*/
.ui-jqgrid {position: relative; font-size:12px;}
.ui-jqgrid .ui-jqgrid-view {position: relative;left:0px; top: 0px; padding: .0em;}
/* caption*/
.ui-jqgrid .ui-jqgrid-titlebar {padding: .3em .2em .2em .3em; position: relative; border-left: 0px none;border-right: 0px none; border-top: 0px none;}
.ui-jqgrid .ui-jqgrid-title { float: left; margin: .1em 0 .2em; }
.ui-jqgrid .ui-jqgrid-titlebar-close { position: absolute;top: 50%; width: 19px; margin: -10px 0 0 0; padding: 1px; height:18px;}.ui-jqgrid .ui-jqgrid-titlebar-close span { display: block; margin: 1px; }
.ui-jqgrid .ui-jqgrid-titlebar-close:hover { padding: 0; }
/* header*/
.ui-jqgrid .ui-jqgrid-hdiv {position: relative; margin: 0em;padding: 0em; overflow-x: hidden; overflow-y: auto; border-left: 0px none !important; border-top : 0px none !important; border-right : 0px none !important;}
.ui-jqgrid .ui-jqgrid-hbox {float: left; padding-right: 20px;}
.ui-jqgrid .ui-jqgrid-htable {table-layout:fixed;margin:0em;}
.ui-jqgrid .ui-jqgrid-htable th {height:22px;padding: 0 2px 0 2px;}
.ui-jqgrid .ui-jqgrid-htable th div {overflow: hidden; position:relative; height:17px;}
.ui-th-column, .ui-jqgrid .ui-jqgrid-htable th.ui-th-column {overflow: hidden;white-space: nowrap;text-align:center;border-top : 0px none;border-bottom : 0px none;}
.ui-th-ltr, .ui-jqgrid .ui-jqgrid-htable th.ui-th-ltr {border-left : 0px none;}
.ui-th-rtl, .ui-jqgrid .ui-jqgrid-htable th.ui-th-rtl {border-right : 0px none;}
.ui-jqgrid .ui-th-div-ie {white-space: nowrap; zoom :1; height:17px;}
.ui-jqgrid .ui-jqgrid-resize {height:20px !important;position: relative; cursor :e-resize;display: inline;overflow: hidden;}
.ui-jqgrid .ui-grid-ico-sort {overflow:hidden;position:absolute;display:inline; cursor: pointer !important;}
.ui-jqgrid .ui-icon-asc {margin-top:-3px; height:12px;}
.ui-jqgrid .ui-icon-desc {margin-top:3px;height:12px;}
.ui-jqgrid .ui-i-asc {margin-top:0px;height:16px;}
.ui-jqgrid .ui-i-desc {margin-top:0px;margin-left:13px;height:16px;}
.ui-jqgrid .ui-jqgrid-sortable {cursor:pointer;}
.ui-jqgrid tr.ui-search-toolbar th { border-top-width: 1px !important; border-top-color: inherit !important; border-top-style: ridge !important }
tr.ui-search-toolbar input {margin: 1px 0px 0px 0px}
tr.ui-search-toolbar select {margin: 1px 0px 0px 0px}
/* body */ 
.ui-jqgrid .ui-jqgrid-bdiv {position: relative; margin: 0em; padding:0; overflow: auto; text-align:left;}
.ui-jqgrid .ui-jqgrid-btable {table-layout:fixed; margin:0em;}
.ui-jqgrid tr.jqgrow { outline-style: none; }
.ui-jqgrid tr.jqgrow td {font-weight: normal; overflow: hidden; white-space: pre; height: 22px;padding: 0 2px 0 2px;border-bottom-width: 1px; border-bottom-color: inherit; border-bottom-style: solid;}
.ui-jqgrid tr.jqgfirstrow td {padding: 0 2px 0 2px;border-right-width: 1px; border-right-style: solid;}
.ui-jqgrid tr.jqgroup td {font-weight: normal; overflow: hidden; white-space: pre; height: 22px;padding: 0 2px 0 2px;border-bottom-width: 1px; border-bottom-color: inherit; border-bottom-style: solid;}
.ui-jqgrid tr.jqfoot td {font-weight: bold; overflow: hidden; white-space: pre; height: 22px;padding: 0 2px 0 2px;border-bottom-width: 1px; border-bottom-color: inherit; border-bottom-style: solid;}
.ui-jqgrid tr.ui-row-ltr td {text-align:left;border-right-width: 1px; border-right-color: inherit; border-right-style: solid;}
.ui-jqgrid tr.ui-row-rtl td {text-align:right;border-left-width: 1px; border-left-color: inherit; border-left-style: solid;}
.ui-jqgrid td.jqgrid-rownum { padding: 0 2px 0 2px; margin: 0px; border: 0px none;}
.ui-jqgrid .ui-jqgrid-resize-mark { width:2px; left:0; background-color:#777; cursor: e-resize; cursor: col-resize; position:absolute; top:0; height:100px; overflow:hidden; display:none;	border:0 none;}
/* footer */
.ui-jqgrid .ui-jqgrid-sdiv {position: relative; margin: 0em;padding: 0em; overflow: hidden; border-left: 0px none !important; border-top : 0px none !important; border-right : 0px none !important;}
.ui-jqgrid .ui-jqgrid-ftable {table-layout:fixed; margin-bottom:0em;}
.ui-jqgrid tr.footrow td {font-weight: bold; overflow: hidden; white-space:nowrap; height: 21px;padding: 0 2px 0 2px;border-top-width: 1px; border-top-color: inherit; border-top-style: solid;}
.ui-jqgrid tr.footrow-ltr td {text-align:left;border-right-width: 1px; border-right-color: inherit; border-right-style: solid;}
.ui-jqgrid tr.footrow-rtl td {text-align:right;border-left-width: 1px; border-left-color: inherit; border-left-style: solid;}
/* Pager*/
.ui-jqgrid .ui-jqgrid-pager { border-left: 0px none !important;border-right: 0px none !important; border-bottom: 0px none !important; margin: 0px !important; padding: 0px !important; position: relative; height: 25px;white-space: nowrap;overflow: hidden;}
.ui-jqgrid .ui-pager-control {position: relative;}
.ui-jqgrid .ui-pg-table {position: relative; padding-bottom:2px; width:auto; margin: 0em;}
.ui-jqgrid .ui-pg-table td {font-weight:normal; vertical-align:middle; padding:1px;}
.ui-jqgrid .ui-pg-button  { height:19px !important;}
.ui-jqgrid .ui-pg-button span { display: block; margin: 1px; float:left;}
.ui-jqgrid .ui-pg-button:hover { padding: 0px; }
.ui-jqgrid .ui-state-disabled:hover {padding:1px;}
.ui-jqgrid .ui-pg-input { height:13px;font-size:.8em; margin: 0em;}
.ui-jqgrid .ui-pg-selbox {font-size:.8em; line-height:18px; display:block; height:18px; margin: 0em;}
.ui-jqgrid .ui-separator {height: 18px; border-left: 1px solid #ccc ; border-right: 1px solid #ccc ; margin: 1px; float: right;}
.ui-jqgrid .ui-paging-info {font-weight: normal;height:19px; margin-top:3px;margin-right:4px;}
.ui-jqgrid .ui-jqgrid-pager .ui-pg-div {padding:1px 0;float:left;list-style-image:none;list-style-position:outside;list-style-type:none;position:relative;}
.ui-jqgrid .ui-jqgrid-pager .ui-pg-button { cursor:pointer; }
.ui-jqgrid .ui-jqgrid-pager .ui-pg-div  span.ui-icon {float:left;margin:0 2px;}
.ui-jqgrid td input, .ui-jqgrid td select .ui-jqgrid td textarea { margin: 0em;}
.ui-jqgrid td textarea {width:auto;height:auto;}
.ui-jqgrid .ui-jqgrid-toppager {border-left: 0px none !important;border-right: 0px none !important; border-top: 0px none !important; margin: 0px !important; padding: 0px !important; position: relative; height: 25px !important;white-space: nowrap;overflow: hidden;}
/*subgrid*/
.ui-jqgrid .ui-jqgrid-btable .ui-sgcollapsed span {display: block;}
.ui-jqgrid .ui-subgrid {margin:0em;padding:0em; width:100%;}
.ui-jqgrid .ui-subgrid table {table-layout: fixed;}
.ui-jqgrid .ui-subgrid tr.ui-subtblcell td {height:18px;border-right-width: 1px; border-right-color: inherit; border-right-style: solid;border-bottom-width: 1px; border-bottom-color: inherit; border-bottom-style: solid;}
.ui-jqgrid .ui-subgrid td.subgrid-data {border-top:  0px none !important;}
.ui-jqgrid .ui-subgrid td.subgrid-cell {border-width: 0px 0px 1px 0px;}
.ui-jqgrid .ui-th-subgrid {height:20px;}
/* loading */
.ui-jqgrid .loading {position: absolute; top: 45%;left: 45%;width: auto;z-index:101;padding: 6px; margin: 5px;text-align: center;font-weight: bold;display: none;border-width: 2px !important;}
.ui-jqgrid .jqgrid-overlay {display:none;z-index:100;}
* html .jqgrid-overlay {width: expression(this.parentNode.offsetWidth+'px');height: expression(this.parentNode.offsetHeight+'px');}
* .jqgrid-overlay iframe {position:absolute;top:0;left:0;z-index:-1;width: expression(this.parentNode.offsetWidth+'px');height: expression(this.parentNode.offsetHeight+'px');}
/* end loading div */
/* toolbar */
.ui-jqgrid .ui-userdata {border-left: 0px none;	border-right: 0px none;	height : 21px;overflow: hidden;	}
/*Modal Window */
.ui-jqdialog { display: none; width: 300px; position: absolute; padding: .2em; font-size:11px; overflow:visible;}
.ui-jqdialog .ui-jqdialog-titlebar { padding: .3em .2em; position: relative;  }
.ui-jqdialog .ui-jqdialog-title { margin: .1em 0 .2em; } 
.ui-jqdialog .ui-jqdialog-titlebar-close { position: absolute;  top: 50%; width: 19px; margin: -10px 0 0 0; padding: 1px; height: 18px; }

.ui-jqdialog .ui-jqdialog-titlebar-close span { display: block; margin: 1px; }
.ui-jqdialog .ui-jqdialog-titlebar-close:hover, .ui-jqdialog .ui-jqdialog-titlebar-close:focus { padding: 0; }
.ui-jqdialog-content, .ui-jqdialog .ui-jqdialog-content { border: 0; padding: .3em .2em; background: none; height:auto;}
.ui-jqdialog .ui-jqconfirm {padding: .4em 1em; border-width:3px;position:absolute;bottom:10px;right:10px;overflow:visible;display:none;height:80px;width:220px;text-align:center;}
/* end Modal window*/
/* Form edit */
.ui-jqdialog-content .FormGrid {margin: 0px;}
.ui-jqdialog-content .EditTable { width: 100%; margin-bottom:0em;}
.ui-jqdialog-content .DelTable { width: 100%; margin-bottom:0em;}
.EditTable td input, .EditTable td select, .EditTable td textarea {margin: 0em;}
.EditTable td textarea { width:auto; height:auto;}
.ui-jqdialog-content td.EditButton {text-align: right;border-top: 0px none;border-left: 0px none;border-right: 0px none; padding-bottom:5px; padding-top:5px;}
.ui-jqdialog-content td.navButton {text-align: center; border-left: 0px none;border-top: 0px none;border-right: 0px none; padding-bottom:5px; padding-top:5px;}
.ui-jqdialog-content input.FormElement {padding:.3em}
.ui-jqdialog-content .data-line {padding-top:.1em;border: 0px none;}

.ui-jqdialog-content .CaptionTD {text-align: left; vertical-align: middle;border: 0px none; padding: 2px;white-space: nowrap;}
.ui-jqdialog-content .DataTD {padding: 2px; border: 0px none; vertical-align: top;}
.ui-jqdialog-content .form-view-data {white-space:pre}
.fm-button { display: inline-block; margin:0 4px 0 0; padding: .4em .5em; text-decoration:none !important; cursor:pointer; position: relative; text-align: center; zoom: 1; }
.fm-button-icon-left { padding-left: 1.9em; }
.fm-button-icon-right { padding-right: 1.9em; }
.fm-button-icon-left .ui-icon { right: auto; left: .2em; margin-left: 0; position: absolute; top: 50%; margin-top: -8px; }
.fm-button-icon-right .ui-icon { left: auto; right: .2em; margin-left: 0; position: absolute; top: 50%; margin-top: -8px;}
#nData, #pData { float: left; margin:3px;padding: 0; width: 15px; }
/* End Eorm edit */
/*.ui-jqgrid .edit-cell {}*/
.ui-jqgrid .selected-row, div.ui-jqgrid .selected-row td {font-style : normal;border-left: 0px none;}
/* Tree Grid */
.ui-jqgrid .tree-wrap {float: left; position: relative;height: 18px;white-space: nowrap;overflow: hidden;}
.ui-jqgrid .tree-minus {position: absolute; height: 18px; width: 18px; overflow: hidden;}
.ui-jqgrid .tree-plus {position: absolute;	height: 18px; width: 18px;	overflow: hidden;}
.ui-jqgrid .tree-leaf {position: absolute;	height: 18px; width: 18px;overflow: hidden;}
.ui-jqgrid .treeclick {cursor: pointer;}
/* moda dialog */
.jqmOverlay { background-color: #000; }
* iframe.jqm {position:absolute;top:0;left:0;z-index:-1;width: expression(this.parentNode.offsetWidth+'px');height: expression(this.parentNode.offsetHeight+'px');}
.ui-jqgrid-dnd tr td {border-right-width: 1px; border-right-color: inherit; border-right-style: solid; height:20px}
/* RTL Support */
.ui-jqgrid .ui-jqgrid-title-rtl {float:right;margin: .1em 0 .2em; }
.ui-jqgrid .ui-jqgrid-hbox-rtl {float: right; padding-left: 20px;}
.ui-jqgrid .ui-jqgrid-resize-ltr {float: right;margin: -2px -2px -2px 0px;}
.ui-jqgrid .ui-jqgrid-resize-rtl {float: left;margin: -2px 0px -1px -3px;}
.ui-jqgrid .ui-sort-rtl {left:0px;}
.ui-jqgrid .tree-wrap-ltr {float: left;}
.ui-jqgrid .tree-wrap-rtl {float: right;}
.ui-jqgrid .ui-ellipsis {text-overflow:ellipsis; -moz-binding:url('ellipsis-xbl.xml#ellipsis');}
.ui-searchFilter { display: none; position: absolute; z-index: 770; overflow: visible;}
.ui-searchFilter table {position:relative; margin:0em; width:auto}
.ui-searchFilter table td {margin: 0em; padding: 1px;}
.ui-searchFilter table td input, .ui-searchFilter table td select {margin: 0.1em;}
.ui-searchFilter .ui-state-default { cursor: pointer; }
.ui-searchFilter .divider hr {margin: 1px; }`
    
    
    
}

