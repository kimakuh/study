$(function(){
	var gnbLi = $("#gnb>li");
	var ul = $("#gnb>li>ul");
	var headerMin = $("#headerWrap").height();
	var headerMax = ul.innerHeight() + headerMin;	
	var state = false;
	var speed = 150;
	gnbLi.mouseenter(function(){
		if(!state){
			$("#headerWrap").stop().animate({height:headerMax},speed,function(){
				ul.stop().fadeIn(speed);
			});
			state = true;
		}
		$(this).find("ul").addClass("on");
	});
	gnbLi.mouseleave(function(){
		$(this).find("ul").removeClass("on");
	});   
	$("#header").mouseleave(function(){
		ul.stop().fadeOut(speed,function(){
			$("#headerWrap").stop().animate({height:headerMin},speed);            
		});
		state = false;
	});
	$("#gnb li a").focus(function(){
		$("#headerWrap").stop().animate({height:headerMax},speed);
		ul.stop().fadeIn(speed);
	}).blur(function(){
		$("#headerWrap").stop().animate({height:headerMin},speed);
		ul.stop().fadeOut(speed);		  
	});	
});