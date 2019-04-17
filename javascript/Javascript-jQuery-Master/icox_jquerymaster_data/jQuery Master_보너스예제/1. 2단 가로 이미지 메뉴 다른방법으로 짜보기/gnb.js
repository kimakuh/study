$(function(){		
	var gnbLi = $('#gnb > li');
	var ul = $('#gnb > li > ul');
	gnbLi.on("mouseenter keyup",function(){		
		ul.removeClass("on");		
		$(this).find("ul").addClass("on");
		imgOut()
		imgOver(this);		
	});
	gnbLi.on("mouseleave",function(){		
		ul.removeClass("on");	
		imgOut(this);
	});
	function imgOver(t){				
		$(t).find("img").attr("src",$(t).find("img").attr("src").replace("out","over"));
	}
	function imgOut(){
		$('#gnb > li > a').each(function(){
			$(this).find("img").attr("src",$(this).find("img").attr("src").replace("over","out"));
		});					
	}
});