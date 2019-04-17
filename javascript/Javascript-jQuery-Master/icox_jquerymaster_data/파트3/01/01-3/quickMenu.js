$(function(){
	var gnbA = $("#gnb>li>a");
	$("#gnb").css("top",$(window).height()/2-$("#gnb").height()/2+"px");
	$(window).scroll(function(){
		var t = $(this).scrollTop() + ($(this).height()/2 - $("#gnb").height()/2);
		$("#gnb").stop().animate({top:t},300);
	});
	gnbA.click(function(){
		var target = $(this).attr("href");				
		$("html,body").animate({scrollTop:$(target).offset().top},1000);
		if(gnbA.target){
			$(gnbA.target).removeClass("on");
			$(this).addClass("on");					
		}else{
			$(this).addClass("on");
		}				
		gnbA.target = this;
		return false;                
	});
	gnbA[0].click();
});       