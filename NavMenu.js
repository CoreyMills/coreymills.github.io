window.addEventListener('resize',function(){UpdateNav();});
window.addEventListener('load',function(){UpdateNav();});
window.addEventListener('load',function(){UpdateNav();});

function Init(){
	$('dropDownBtn').each(function(){.addEventListener('touchstart', process_touchstart, false);});
}
function UpdateNav(){
	if($(window).width()<1100){$('#mainNav').hide();$('#ddNav').show();} 
	else {$('#mainNav').show();$('#ddNav').hide();}
}
function FlipDropDownState(){
	var dropDownC = $('.dropDownContent'); 
	if(dropDownC.is(":visible")){
		dropDownC[0].style.display="none";}
	else{
		dropDownC[0].style.display="block";}
}