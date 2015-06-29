define(function(){
	function getElementsByClassName(className){
		var elements = new Array();
		var reg = new RegExp('\\s'+className+'|'+className+'\\s');
		var all = document.all ? document.all : document.getElementsByTagName('*');
		for (var i=0; i<all.length; i++) {
			if (reg.test(all[i].className)==true || all[i].className==className) {
				elements[elements.length] = all[i];
			}
		}
		return elements;
	}
	return {
		init:function(){
			(function(){
				var reg = new RegExp("\\sactive|active\\s");
				var item = getElementsByClassName('detail');
				var tab = document.getElementById('ui-tab').getElementsByTagName('ul')[0].getElementsByTagName('li');

				//为li绑定事件
				for(var i=0;i<tab.length;i++){
					(function(j){
						tab[j].onclick = function(){
							for(var i=0;i<tab.length;i++){
								if(tab[i].className=='active'){
									tab[i].className = '';
								}
								if(reg.test(item[i].className)==true || item[i].className=='active'){
									item[i].className = 'detail';
								}
							}
							tab[j].className = 'active';
							item[j].className = 'detail active';
						}
					})(i);
				}
			})();
		}
	};
});