// 获取所有导航栏条目、当前页链接、首页链接
var myNav = document.getElementsByClassName("menu")[0].getElementsByClassName("menu-item-link");
var myURL = document.location.href;
var home_link_text = document.getElementById("homelink").getAttribute("data-link");
// 判断是否是首页
if(myURL==home_link_text||myURL.indexOf("page")!=-1){
	myNav[0].className="menu-item-link2";
}
// 判断是非首页页面的哪种类型页面
else{
		myNav[0].className="menu-item-link";
		for(var i=1;i<myNav.length;i++){
			var links = myNav[i].getAttribute("href");
			if(myURL.indexOf(links) != -1){
				myNav[i].className="menu-item-link2";
			}
	}
}

// 导航条固定
var headerTop = document.getElementsByClassName("header_top")[0];
window.onscroll = function(){
	if(document.documentElement.scrollTop > 0){
			headerTop.classList.add('header_top_fixed');
	} else {
			headerTop.classList.remove('header_top_fixed');
	}
}

// 点击箭头向下跳转
var arrow = document.getElementsByClassName("blog-down")[0];
arrow.onclick = function(){
	scrollTo(0,390);	
}







