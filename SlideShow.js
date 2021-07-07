let slideMap=new Map();
document.onreadystatechange=function(){
    if (document.readyState==='complete'){
		let containers=document.getElementsByClassName("ssContainer");
		for(let i=0;i<containers.length;i++){
			let key = i
			slideMap.set(key,0);
			let slides = containers[i].getElementsByClassName('ssMedia');
			if(slides.length==0){continue;}
			else{
				for(let j=0;j<slides.length;j++){slides[j].style.display="none";}
				if(slides.length>1){
					let pBtn=document.createElement("a");pBtn.className="prev button";pBtn.onclick=function(){ChangeSlide(-1,key)};pBtn.innerText='\u276E';
					let nBtn=document.createElement("a");nBtn.className="next button";nBtn.onclick=function(){ChangeSlide(1,key)};nBtn.innerText='\u276F';
					containers[i].appendChild(pBtn);
					containers[i].appendChild(nBtn);
				}
			}
			ShowSlides(0,0,key);
			containers[i].style.display = "block";
		}
		CheckVisibility();
	}
}
function ChangeSlide(n,key){
	let prevIndex=slideMap.get(key);
	slideMap.set(key,prevIndex+n);
	ShowSlides(slideMap.get(key), prevIndex,key);
	CheckVisibility();
}
function ShowSlides(newIndex,prevIndex,key){
	let slides=document.getElementsByClassName("ssContainer")[key].getElementsByClassName('ssMedia');
	if(newIndex>=slides.length){slideMap.set(key,0);}
	if(newIndex<0){slideMap.set(key,slides.length-1);}
	slides[prevIndex].style.display="none";
	slides[slideMap.get(key)].style.display="block";
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
function PlayVideo(vid){vid.muted=true;setTimeout(function(){vid.play();},200);}
function PauseVideo(vid){vid.pause();}
function PlayIFrame(vid){setTimeout(function(){vid.contentWindow.postMessage('{"event":"command","func":"'+'playVideo'+'","args":""}','*');},200);}
function PauseIFrame(vid){vid.contentWindow.postMessage('{"event":"command","func":"'+'pauseVideo'+'","args":""}','*');}