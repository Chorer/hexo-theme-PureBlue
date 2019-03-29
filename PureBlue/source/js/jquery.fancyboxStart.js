$(document).ready(function() {
			FancyBoxStart();
		});
function FancyBoxStart() {
    $('img').each(function() {
        var $image = $(this);
        var $imageLink = $image.parent('a');
        if ($imageLink.length == 0) {                
            var src = $image.attr('src');
            var idx = src.lastIndexOf('?');
            if (idx != -1) {
                src = src.substring(0, idx);
            }
            $imageLink = $image.wrap('<a href="' + src + '"></a>').parent('a');
        }
        $imageLink.attr('data-fancybox', 'images');
    });
    $().fancybox({
        selector: '[data-fancybox="images"]',
        thumbs: false,
        hash: true,
        loop: false,
        fullScreen: false,
        slideShow: false,
        protect: true,
    });
}