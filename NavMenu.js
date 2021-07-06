window.addEventListener('resize',function(){UpdateNav();});
window.addEventListener('load',function(){UpdateNav();});
//window.addEventListener('click',function(){FlipDropDownState(false);});
document.onreadystatechange=function(){
    //if (document.readyState==='complete'){
		//$('.dropDownBtn').each(function(){$(this)[0].addEventListener('click',function(){FlipDropDownState(true);});});
	//}
}
function UpdateNav(){
	if($(window).width()<1100){$('#mainNav').hide();$('#ddNav').show();} 
	else {$('#mainNav').show();$('#ddNav').hide();}
}
$('dropDownBtn').bind('touchstart', function() {});

//function FlipDropDownState(val){if(val == true){$('.dropDownContent')[0].style.display="block";}else{alert("test");$('.dropDownContent')[0].style.display="none";}}