define(['gaode'],function(){
	return {
		init:function(){
			(function(){
				//初始化地图对象，加载地图
				var position=new AMap.LngLat(116.31404,39.982035);
				var map = new AMap.Map("map-container",{
					view: new AMap.View2D({//创建地图二维视口
						center:position,//创建中心点坐标
						zoom:16, //设置地图缩放级别
						rotation:0 //设置地图旋转角度
					}),
					lang:"zh_cn"//设置地图语言类型，默认：中文简体
				});

				//加载云数据图层插件 
				map.plugin('AMap.CloudDataLayer',function(){
					//实例化一个云图层对象，设置数据表id 
					var layerOptions = {  
						query:{keywords: '中关村e世界C座'},
						clickable:true 
					}; 
					var cloudDataLayer = new AMap.CloudDataLayer('558a924be4b0b297165799fe', layerOptions);//实例化云图层类 
					cloudDataLayer.setMap(map); //叠加云图层到地图 
				});
			})();
		}
	};
});