define(['jquery'],function($){

	//默认参数
	var defaults = {
		speed : 30,
		marginTop : document.documentElement.clientHeight
	};

	//构造方法
	function Backtop(element,options){
		var stop = false;
		var timer = null;
		var backtop = $(element).get(0);
		var clientHeight = document.documentElement.clientHeight;
		var options = this.options = $.extend({}, defaults, options);

		//滚动条滚动事件
		window.onscroll = function(){
			var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;//处理隐藏、显示返回顶部按钮
			if(scrollTop>=options.marginTop){
				backtop.style.display = 'block';
			}else{
				backtop.style.display = 'none';
			}
			//处理手动拖动滚动条时停止返回顶部
			if(stop){
				window.clearInterval(timer);
			}
			stop = true;
		}
		//绑定返回顶部事件
		backtop.onclick = function(){
			timer = window.setInterval(function(){
				stop = false;
				var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				var speed = Math.floor(-scrollTop/6);
				document.documentElement.scrollTop = document.body.scrollTop = scrollTop+speed;
				if(scrollTop==0){
					window.clearInterval(timer);
				}
			},options.speed);
		}
	}

	//在jquery中注册
	$.fn.extend({
		backtop:function(options){
			return this.each(function(){
				new Backtop(this,options);
			});
		}
	});
	//提供构造方法
	return {
		init:Backtop
	};
});