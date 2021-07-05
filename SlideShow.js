let slideMap=new Map();
document.onreadystatechange=function(){
    if (document.readyState==='complete'){
		let containers=document.getElementsByClassName("ssContainer");
		for(let i=0;i<containers.length;i++){
			let key = "ss" + i;
			slideMap.set(key,0);
			let slides = document.getElementsByClassName(key);
			if(slides.length>1){
				let pBtn=document.createElement("a");pBtn.className="prev button";pBtn.onclick=function(){ChangeSlide(-1,key)};pBtn.innerText='\u276E';
				containers[i].appendChild(pBtn);
				
				let nBtn=document.createElement("a");nBtn.className="next button";nBtn.onclick=function(){ChangeSlide(1,key)};nBtn.innerText='\u276F';
				containers[i].appendChild(nBtn);
			}
			ShowSlides(slideMap.get(key), key);
			containers[i].style.display = "block";
		}
		let videos = document.getElementsByTagName("video");
		for(let i=0;i<videos.length;i++){videos[i].muted=true;videos[i].controls=true;videos[i].loop=true;videos[i].pause();}
		CheckVisibility();
	}
}
function ChangeSlide(n,key){
	slideMap.set(key,slideMap.get(key)+n);
	ShowSlides(slideMap.get(key),key);
	CheckVisibility();
}
function ShowSlides(index,key){
	let slides=document.getElementsByClassName(key);
	if(index>=slides.length){slideMap.set(key,0);}
	if(index<0){slideMap.set(key,slides.length-1);}
	for(let i=0;i<slides.length;i++){slides[i].style.display = "none";}
	slides[slideMap.get(key)].style.display = "block";
}
$(window).scroll(function(){CheckVisibility();});
function CheckVisibility(){
	$('video').each(function(){
		if(IsVisible($(this)[0])){PlayVideo($(this)[0]);} 
		else {if(document.pictureInPictureElement!=$(this)[0]){PauseVideo($(this)[0]);}}
	});
	$('iframe').each(function(){
		if(IsVisible($(this)[0])){PlayIFrame($(this)[0]);}
		else{PauseIFrame($(this)[0]);}
	});
}
let windowH=$(window).height();let headerH=$('header').height();let footerH=$('footer').height();
function IsVisible(vid){
	let rectInfo=vid.getBoundingClientRect();let percentH=rectInfo.height*0.2;
	return(rectInfo.width!=0&&rectInfo.top+percentH>headerH&&rectInfo.bottom-percentH<(windowH-footerH))?true:false;
}
function PlayVideo(vid){setTimeout(function(){vid.play();},200);}
function PauseVideo(vid){vid.pause();}
function PlayIFrame(vid){setTimeout(function(){vid.contentWindow.postMessage('{"event":"command","func":"'+'playVideo'+'","args":""}','*');},200);}
function PauseIFrame(vid){vid.contentWindow.postMessage('{"event":"command","func":"'+'pauseVideo'+'","args":""}','*');}