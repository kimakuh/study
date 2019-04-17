function loadEnd2(){
	alert("실행2");
}
if(window.attachEvent){
  window.attachEvent('onload',loadEnd2);  
}else{
  window.addEventListener('load',loadEnd2); 
}