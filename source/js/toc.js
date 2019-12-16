// TOC fixed
var post_toc = document.getElementsByClassName("post-toc")[0],
    toc = document.getElementsByClassName("toc")[0],
    H = 0,
    Y = post_toc;        
while (Y) {
    H += Y.offsetTop; 
    Y = Y.offsetParent;
}
window.onscroll = function()
{
    var s = document.body.scrollTop || document.documentElement.scrollTop;
    if(s>H) {
        post_toc.style = "position:fixed;top:5px;right:63px";
        toc.scrollTop = (s-H)/60;
    } else {
        post_toc.style = "";
    }
};


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
           aList.addClass('actived');
    }
  });






