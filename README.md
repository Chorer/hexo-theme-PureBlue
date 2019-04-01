# hexo-theme-PureBlue


>A simple and blue style theme based on Hexo 3.8.0. [Demo](https://chorer.github.io/)

## Features 

1.Using Stylus as css preprocessor and ejs as template engine

2.Support zh-CN and en by default


## Screenshot 

![](https://myblog-1258623898.cos.ap-chengdu.myqcloud.com/pb.png)


## Install the theme

1. Clone this theme into the `themes` folder under your blog project directory.
```
cd themes
git clone https://github.com/Chorer/hexo-theme-PureBlue.git`
```
2. Modify the site `_config.yml`,it should look like this:
```
themes: hexo-theme-PureBlue
```

## Update Version
```
cd themes/hexo-theme-PureBlue
git pull`
```
## Install the plugins 

Make sure you have disable the self-contained `highlight` in the site `_config.yml`.
And then install the [hexo-prism-plugin](https://github.com/ele828/hexo-prism-plugin).Check the link for more details.


## More configuration 

* You can set the language by editing the site `_config.yml` file：
`language: zh-CN`

* You can also configure the menu,the color scheme and the valine comment by editing the theme `_config.yml` file .

## ToDo

- [x] Add the category page  
- [x] Support TOC  
- [x] Support fancybox  
- [x] Support the third-party comment plugin  
- [ ] Support the third-party share plugin  
- [ ] Support website statistics 
- [ ] Completely using vanilla JavaScript instead of jQuery 
- [ ] Support responsive design 
- [ ] Mobile adaptation 移动端适配
- [ ] Support styling the codequote highlight 



## Change Log

2019.3.31
* Rewirte the paginator and optimize the code
* Add some icons with font-awesome
* Highlight the title in the TOC

2019.3.30
* Refer all js files in one ejs file
* Change the style of scrollbar
* Display total counts of categories,tags and posts
* Fix the bug that the tags will twinkle once touched

2019.3.29
* Add support for fancybox

2019.3.27
* Fix the bug that the category page can't display
* Improve the navbar

2019.3.25
* Change css for a more flat style.  

## About
* Give a star if you like , fork or just clone to use , and also you can help me fix bugs and add new feature :)
* If you have any problem or requirement , just open an issue here and i will help you.
* Will not support IE6, 7, 8.

## License  

[MIT License](https://github.com/Chorer/hexo-theme-PureBlue/blob/master/LICENSE)
