
$.fn.blocksMenu = function(options){
	var settings = {
		interval	 		: 300     // animation time (ms)
	}
	
	$(".menu").prepend("<li class='showhide'><span>MENU</span><i class='fa fa-bars'></i></li>");
	
	screenSize();
	
	$(window).resize(function() {
		screenSize();
	});
	
	function screenSize(){
		$(".menu").find("li").unbind();
		if(window.innerWidth <= 768){
			showCollapse();
			bindClick();
		}
		else{
			hideCollapse();
			bindHover();
		}
	}
	
	function bindHover(){
		$(".menu li").bind("mouseover", function(){
			$(this).children("ul").slideDown(settings.interval);
		}).bind("mouseleave", function(){
			$(this).children("ul").stop().slideUp(settings.interval);
		});
	}
	
	function bindClick(){
		$(".menu > li").bind("click", function(){
			if($(this).children("ul").css("display") == "none"){
				$(this).find("ul").slideDown(settings.interval);
			}
			else{
				$(this).children("ul").slideUp(settings.interval);
			}
		});
	}
	
	function showCollapse(){
		$(".menu > li").hide(0);
		$(".menu > li.showhide").show(0);
		$(".menu > li.showhide").bind("click", function(){
			if($(".menu > li").is(":hidden")){
				$(".menu > li").show(0);
			}
			else{
				$(".menu > li").hide(0);
				$(".menu > li.showhide").show(0);
			}
		});
	}
	
	function hideCollapse(){
		$(".menu > li").show(0);
		$(".menu > li.showhide").hide(0);
	}
}
















