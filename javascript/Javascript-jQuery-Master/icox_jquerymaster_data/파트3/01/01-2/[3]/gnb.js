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
			$(this).next().show()
			imgOver(this);
		}
		gnbA.target = this;
	});
	gnbA.mouseleave(function(){		
		$(this).next().hide();
		imgOut(this);
	});
	ul.hover(function(){		
		$(this).show()
		imgOver(gnbA.target);
	},function(){		
		$(this).hide();
		imgOut(gnbA.target);
	});
	$("#gnb>li>ul>li>a").focus(function(){
		$(gnbA.target).next().stop().show(10);	
		imgOver(gnbA.target);
	}).blur(function(){
		$(gnbA.target).next().stop().hide(10);
		imgOut(gnbA.target);
	});
	function imgOver(t){				
		$(t).find("img").attr("src",$(t).find("img").attr("src").replace("out","over"));
	}
	function imgOut(t){
		$(t).find("img").attr("src",$(t).find("img").attr("src").replace("over","out"));			
	}
});