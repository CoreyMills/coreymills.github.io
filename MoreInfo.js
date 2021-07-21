$('.showMoreBtn').click(function() {let $smText=$(this).siblings(".showMoreText");
	if($smText.is(":Hidden")){$(this).children().text('Show Less');setTimeout(function(){$smText.show();},100);} 
	else{$(this).children().text('Show More');setTimeout(function(){$smText.hide()},100);}
});