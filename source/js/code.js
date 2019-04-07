var codes = document.getElementsByTagName("code");
for(var i=0;i<codes.length;i++){
	if(codes[i].parentNode.nodeName!="PRE"){
		codes[i].classList.add("littleCode");
	}
}