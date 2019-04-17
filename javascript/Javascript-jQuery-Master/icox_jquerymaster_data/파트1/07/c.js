function loadEnd1(){
	alert("실행1");
}
if(window.attachEvent){
  window.attachEvent('onload',loadEnd1);  
}else{
  window.addEventListener('load',loadEnd1); 
}