define(function(dom){
	return {
		init:function(){
			var current = 0;
			var prev = document.getElementById('carousel-prev');
			var next = document.getElementById('carousel-next');
			var carousel = document.getElementById('carousel');
			var item = carousel.getElementsByTagName('img');
			var dot = document.getElementById('carousel-dot').getElementsByTagName('a');
			var total =  item.length;

			//初始化
			(function(){
				dot[0].className = 'active';
				item[0].style.display='block';
			})();

			//绑定prev、next翻页事件
			prev.onclick = function(){
				for (var i=0; i<dot.length; i++) {
					if (dot[i].className == 'active') {
						current = i;
						break ;
					}
				}
				dot[current].className = '';
				dot[current-1<0?total-1:current-1].className = 'active';
				item[current].style.display='';
				item[current-1<0?total-1:current-1].style.display='block';
			}
			next.onclick = function(){
				for (var i=0; i<dot.length; i++) {
					if (dot[i].className == 'active') {
						current = i;
						break ;
					}
				}
				dot[current].className = '';
				dot[current+1>total-1?0:current+1].className = 'active';
				item[current].style.display='';
				item[current+1>total-1?0:current+1].style.display='block';
			}

			//绑定dot翻页事件
			for(var i=0;i<dot.length;i++){
				(function(j){
					dot[j].onclick = function(){
						for (var i=0; i<dot.length; i++) {
							if (dot[i].className == 'active') {
								current = i;
								break ;
							}
						}
						dot[current].className = '';
						item[current].style.display='';
						dot[j].className = 'active';
						item[j].style.display='block';
					}
				})(i);
			}


			//自动播放
			var speed = 1.2;
			var opacity = 100;
			var timer = null;
			carousel.onmouseover = function(){
		        window.clearInterval(timer);
		    };
		    carousel.onmouseout = function(){
		    	interval();
		    };
		    interval();
		    function interval(){
		    	timer = window.setInterval(function(){
					var animation = window.setInterval(function(){
						opacity = opacity/speed;
						for (var i=0; i<dot.length; i++) {
							if (dot[i].className == 'active') {
								current = i;
								break ;
							}
						}
						item[current].style.filter = 'alpha(opacity:'+opacity+')';
						item[current].style.opacity = opacity/100;

						item[current+1>total-1?0:current+1].style.filter = 'alpha(opacity:'+(100-opacity)+')';
						item[current+1>total-1?0:current+1].style.opacity = 1-(opacity/100);
						item[current+1>total-1?0:current+1].style.display='block';

						if(opacity<20){
							dot[current].className = '';
							dot[current+1>total-1?0:current+1].className = 'active';

							item[current].style.filter = 'alpha(opacity:100)';
							item[current].style.opacity = 1;
							item[current].style.display = 'none';

							item[current+1>total-1?0:current+1].style.filter = 'alpha(opacity:100)';
							item[current+1>total-1?0:current+1].style.opacity = 1;

							opacity = 100;
							window.clearInterval(animation);
						}
					},100);
				},4000);
		    }
		}
	}
});