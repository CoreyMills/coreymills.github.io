function ShowMoreInfo(paraID, showMoreBtn) {
	let para = document.getElementById(paraID);
	
	if (window.getComputedStyle(para).display === "none") {
		showMoreBtn.innerText = "Show Less";
		setTimeout(function() { para.style.display = "block"; }, 100);
	} else {
		showMoreBtn.innerText = "Show More";
		setTimeout(function() { para.style.display = "none"; }, 100);
	}
}