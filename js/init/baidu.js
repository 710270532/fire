define(function(){
	return {
		init:function(){
			//百度统计
			var _hmt = _hmt || [];
			(function() {
			  	var hm = document.createElement("script");
			  	hm.src = "//hm.baidu.com/hm.js?7e7930611929e4f47f7eca36e06ffb40";
			  	var s = document.getElementsByTagName("script")[0]; 
			  	s.parentNode.insertBefore(hm, s);
			})();
			//百度分享
			window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"1","bdSize":"16"},"slide":{"type":"slide","bdImg":"2","bdPos":"right","bdTop":"320"},"image":{"viewList":["qzone","tsina","tqq","renren","weixin"],"viewText":"分享到：","viewSize":"16"},"selectShare":{"bdContainerClass":null,"bdSelectMiniList":["qzone","tsina","tqq","renren","weixin"]}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];
		}
	};
});