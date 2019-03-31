// TOC定位
var oDiv = document.getElementsByClassName("toc")[0],H = 0,Y = oDiv;        
while (Y) {
    H += Y.offsetTop; 
    Y = Y.offsetParent;
}
window.onscroll = function()
{
    var s = document.body.scrollTop || document.documentElement.scrollTop;
    if(s>H) {
        oDiv.style = "position:fixed;top:-18px;";
    } else {
        oDiv.style = "";
    }
};

// 生成目录文本li
var catalog = document.getElementById("post-catalog-text"); 
var txt = document.createElement("li");
txt.className="real-catalog-text";
txt.innerHTML=catalog.innerHTML;
oDiv.insertBefore(txt,oDiv.children[0]);



// 生成返回顶部文本li
var toTop = document.getElementById("post-toTop-text"); 
var topper =document.createElement("li");
topper.className="real-toTop-text";
topper.innerHTML=toTop.innerHTML;
oDiv.appendChild(topper);






