require.config({
	baseUrl:'',
    paths:{
    	'jquery':['http://cdn.bootcss.com/jquery/1.11.2/jquery.min','lib/jquery/jquery-1.9.1.min'],
        'jquery.ui' : ['http://code.jquery.com/ui/1.11.4/jquery-ui.min','lib/jqueryui/jquery-ui.min'],
        'bootstrap':['http://cdn.bootcss.com/bootstrap/3.3.4/js/bootstrap.min','lib/bootstrap/bootstrap.min'],
        'laypage':['http://res.sentsin.com/lay/lib/laypage/laypage','lib/laypage/laypage'],
        'highlight':['http://cdnjs.cloudflare.com/ajax/libs/highlight.js/8.6/highlight.min','lib/highlight/highlight.pack'],

        'zepto':['lib/zepto/zepto.min'],
        'touch':['lib/zepto/touch'],

        'datatables' : ['http://cdn.datatables.net/1.10-dev/js/jquery.dataTables.min', 'lib/bootstrap/datatables/jquery.dataTables.min'],
        'datatables-bootstrap' : ['http://cdn.datatables.net/plug-ins/28e7751dbec/integration/bootstrap/3/dataTables.bootstrap', 'lib/bootstrap/datatables/dataTables.bootstrap'],
        
        'datetimepicker':'lib/jqueryui/datetimepicker/jquery-ui-timepicker-addon',
        'jquery-ui-timepicker-zh-CN':'lib/jqueryui/datetimepicker/jquery-ui-timepicker-zh-CN',

        'gaode':'http://webapi.amap.com/maps?v=1.3&key=a731dad0b78ed28ecd8175b98e0cc9df'
        
    },
    packages: [
        {
            name: 'echarts',
            location: 'lib/echarts/src',
            main: 'echarts'
        },
        {
            name: 'zrender',
            location: 'lib/echarts/src/zrender', // zrender与echarts在同一级目录
            main: 'zrender'
        }
    ],
    shim:{
    	'bootstrap': {
            deps: ['jquery'],
            exports: 'bootstrap'
        },
        'zepto':{
            deps:['touch'],
            exports:'zepto'
        },
        'jquery.ui':{
            deps: ['jquery'],
            exports: 'jqueryui'
        },
        'datatables':{
            deps: ['jquery'],
            exports: 'datatables'
        },
        'datatables-bootstrap':{
            deps: ['datatables'],
            exports: 'datatables-bootstrap'
        },
        'datetimepicker':{
            deps: ['jquery.ui'],
            exports: 'datetimepicker'
        },
        'jquery-ui-timepicker-zh-CN':{
            deps: ['datetimepicker'],
            exports: 'jquery-ui-timepicker-zh-CN'
        }
    }
});
require(['js/init/backtop'],function(backtop){
    backtop.init();
},function(e){
    console.log("【关于烈焰】模块js加载失败");
});