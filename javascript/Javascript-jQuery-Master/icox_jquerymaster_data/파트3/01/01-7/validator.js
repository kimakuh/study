$(function(){
	$("#frm").submit(function(){
		var reg_email = /^([0-9a-zA-Z-_]+)@([0-9a-zA-Z-_]+)(\.[0-9a-zA-Z-_]+){1,2}$/;
		if(!$("#id").val()){
			creTxt("id",0);					
			return false;
		}
		if(!$("#pw").val()){
			creTxt("pw",1);
			return false;
		}				
		if(!$("#repw").val()){
			creTxt("repw",2);
			return false;
		}else if($("#repw").val() != $("#pw").val()){
			creTxt("repw",3);
			return false;
		}				
		if(!$("#email").val()){
			creTxt("email",4);
			return false;
		}else if(!reg_email.test($("#email").val())){
			creTxt("email",5);
			return false;
		}
	});
	$("#frm input").focus(function(){
		$(this).next().remove();
	});
	function creTxt(target,num){
		var target = "#" + target;
		var txt = new Array();
		txt[0] = "아이디는 필수입력 사항입니다.";
		txt[1] = "비밀번호는 필수입력 사항입니다.";
		txt[2] = "비밀번호확인은 필수입력 사항입니다.";
		txt[3] = "비밀번호를 다시 확인 하세요.";
		txt[4] = "이메일은 필수입력 사항입니다.";
		txt[5] = "이메일 형식이 올바르지 않습니다.";	
		if(!$(target).next().hasClass("on")){
			$(target).after("<div>" + txt[num] + "</div>").next().addClass("on");	
		}
	}	
});
