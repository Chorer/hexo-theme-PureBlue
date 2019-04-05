// TOC fixed
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

// 'catalog'text
var catalog = document.getElementById("post-catalog-text"); 
var txt = document.createElement("li");
txt.className="real-catalog-text";
txt.innerHTML='<i class="fa fa-list"></i>'+catalog.getAttribute("data-catalog");
oDiv.insertBefore(txt,oDiv.children[0]);



// 'to the top'text
var toTop = document.getElementById("post-toTop-text"); 
var topper =document.createElement("li");
topper.className="real-toTop-text";
topper.innerHTML='<i class="fa fa-chevron-circle-up"></i>'+toTop.getAttribute("data-toTop");
oDiv.appendChild(topper);

// catalog highlight
var $ol = $('.toc');         
var titleList = $('.post-content').find('h1,h2,h3,h4,h5,h6');
$(window).scroll(function (e) {
    var top = $(document).scrollTop();
    var currentID = '';
    titleList.each(function () {
        var $this = $(this);
        var itemTop = $this.offset().top;
        if (top > itemTop - 300) {
            currentID = '#' + $this.attr('id');
        } else {
          return false;
        }
  });
    var currentLink = $ol.find('.actived');
    if (currentID && currentLink.attr('href') !== currentID) {
         currentLink.removeClass('actived');
         var aList = $ol.find("[href='" + currentID + "']");
         aList.children(".toc-text").addClass('actived');
  }
});




