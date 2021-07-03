var tpBtn = document.createElement('a');
tpBtn.className = 'button';
tpBtn.id = 'tpBtn';
tpBtn.innerText = "Top";
tpBtn.onclick = function() {TopFunction()};
document.getElementsByTagName("body")[0].appendChild(tpBtn);

window.onscroll = function() {ScrollFunction()};

function ScrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		tpBtn.style.display = "block";
	} 
	else {
		tpBtn.style.display = "none";
	}
}

function TopFunction() {
	window.scrollTo({top:0, left:0, behavior:'smooth'});
}