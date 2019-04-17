$(function(){		
	var gnbA = $('#gnb>li>a');
	var ul = $('#gnb>li>ul');	
	var speed = 200;
	gnbA.on("mouseenter focus",function(){				
		if(gnbA.target){
			$(gnbA.target).next().stop().fadeOut(speed);
			$(this).next().stop().fadeIn(speed);
			imgOut(gnbA.target);
			imgOver(this);					
		}else{
			$(this).next().stop().fadeIn(speed);
			imgOver(this);
		}
		gnbA.target = this;
	});
	gnbA.mouseleave(function(){		
		$(this).next().stop().fadeOut(speed);
		imgOut(this);
	});
	ul.hover(function(){		
		$(this).stop().fadeIn(speed);
		imgOver(gnbA.target);
	},function(){		
		$(this).stop().fadeOut(speed);
		imgOut(gnbA.target);
	});
	$("#gnb>li>ul>li>a").focus(function(){
		$(gnbA.target).next().stop().fadeIn(speed);	
		imgOver(gnbA.target);
	}).blur(function(){
		$(gnbA.target).next().stop().fadeOut(speed);
		imgOut(gnbA.target);
	});
	function imgOver(t){				
		$(t).find("img").attr("src",$(t).find("img").attr("src").replace("out","over"));
	}
	function imgOut(t){
		$(t).find("img").attr("src",$(t).find("img").attr("src").replace("over","out"));			
	}
});