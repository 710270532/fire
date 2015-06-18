define(function(){
	function backtop(){
		var timer = null;
		var stop = false;
		var backtop = document.getElementById("backtop");
		//可视区域高度
		var clientHeight = document.documentElement.clientHeight;
		//滚动条滚动事件
		window.onscroll = function(){
			//处理隐藏/显示返回顶部按钮
			var scroll_top = document.documentElement.scrollTop || document.body.scrollTop;
			if(scroll_top>=200){	
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
				var scroll_top = document.documentElement.scrollTop || document.body.scrollTop;
				var speed = Math.floor(-scroll_top/6);
				document.documentElement.scrollTop = document.body.scrollTop = scroll_top+speed;
				if(scroll_top==0){
					window.clearInterval(timer);
				}
			},30);
		}
	}
	return {
		init:function(){
			(function() {
				backtop();
			})();
		}
	};
});