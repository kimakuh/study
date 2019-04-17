$(function(){		
	var gnbA = $('#gnb>li>a');
	var ul = $('#gnb>li>ul');			
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
	ul.hover(function(){		
		imgOver(gnbA.target);
		$(this).show();	
	},function(){
		imgOut(gnbA.target);
		$(this).hide();
	});			
	function imgOver(t){				
		$(t).find("img").attr("src",$(t).find("img").attr("src").replace("out","over"));
	}
	function imgOut(t){
		$(t).find("img").attr("src",$(t).find("img").attr("src").replace("over","out"));			
	}
});