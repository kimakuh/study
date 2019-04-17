$(function(){
	var getValue = location.search.substring(1);
	if(getValue){
		getValue = getValue.split("&");           
		for(var i=0;i<getValue.length;i++){
			eval(getValue[i]);
		}
	}else{
		main = sub = null;
	}
	var gnbA = $("#gnb>li>a");
	var ul = $("#gnb>li>ul");
	var subA = $("#gnb>li>ul").find("a");			
	var mainCurrent =  $("#gnb>li:eq("+main+")>a");			
	var subCurrent =  mainCurrent.siblings("ul").find("a").eq(sub);			
	gnbA.on("mouseenter focus",function(){				
		if(gnbA.target){
			$(gnbA.target).next().hide();
			$(this).next().show();
			imgOut(gnbA.target);
			imgOver(this);			
		}else{
			$(this).next().show();
			imgOver(this);					
		}				
		gnbA.target = this;
	});
	gnbA.mouseleave(function(){
		imgOut(this);
		$(this).next().hide();				 
	});
	subA.on("mouseenter focus",function(){	
		subCurrent.removeClass("hover")
		$(this).addClass("hover");			
	});
	subA.on("mouseleave blur",function(){
		$(this).removeClass("hover");
	});
	ul.hover(function(){	
		imgOver(gnbA.target);
		$(this).show();				
	},function(){
		imgOut(gnbA.target);
		$(this).hide();	
	});	
	$("#gnb").mouseleave(function(){				
		mainCurrent.mouseenter();
		subCurrent.addClass("hover");
	});
	function imgOver(t){				
		$(t).find("img").attr("src",$(t).find("img").attr("src").replace("out","over"));
	}
	function imgOut(t){
		$(t).find("img").attr("src",$(t).find("img").attr("src").replace("over","out"));			
	}
	mainCurrent.mouseenter();
	subCurrent.addClass("hover");
});