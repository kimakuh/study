$(function(){	
	var state = false;
	$("#open_bt").click(function(){		
		$("#all_menu").toggleClass("on");
		if(!state){				
			imgOff(this);
			state = true;
		}else{			
			imgOn(this);
			state = false;
		}				
		return false;
	});
	$("#close_bt").on("click blur",function(){				
		$("#all_menu").removeClass("on");
		imgOn("#open_bt");
		state = false;				
	});	
	function imgOff(t){				
		var img = $(t).find("img");				
		img.attr("src",img.attr("src").replace("on", "off")).attr("alt","전체메뉴닫기");
	}
	function imgOn(t){				
		var img = $(t).find("img");
		img.attr("src",img.attr("src").replace("off", "on")).attr("alt","전체메뉴열기");
	}			
});