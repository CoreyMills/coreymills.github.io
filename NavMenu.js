window.addEventListener('resize', function() { UpdateNav(); });
window.addEventListener('load', function() { UpdateNav(); });

function UpdateNav()
{
	if($(window).width() < 1100) {
		$('#mainNav').hide();
		$('#ddNav').show();
	} else {
		$('#mainNav').show();
		$('#ddNav').hide();
	}
}