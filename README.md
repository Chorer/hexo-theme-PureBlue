# hexo-theme-PureBlue

## Introduction 介绍
A simple and blue style Hexo theme based on Hexo 3.8.0.

简约的蓝色风格Hexo主题，基于Hexo 3.8.0制作。[预览](https://chorer.github.io/)。

## Feature 特点

1.Using Stylus as css preprocessor and ejs as template engine

使用Stylus作为css预处理器，ejs作为模板引擎

2.Support zh-CN and en by default（You can also extend it by editing the yml file）

支持中文和英文（你可以通过编辑yml文件添加更多语言）


## Screenshots 截图

![](https://myblog-1258623898.cos.ap-chengdu.myqcloud.com/s1.png)

![](https://myblog-1258623898.cos.ap-chengdu.myqcloud.com/s3.png)


## Install the theme 安装主题

1. To use the theme,you need to build the basic blog firstly.Just follow the [hexo official document](https://hexo.io/zh-cn/)

要使用该主题，你首先要有自己的Hexo博客。前往Hexo官网查阅文档。

2. Use `git` to clone `hexo-theme-PureBlue` into the theme folder under your blog project directory.

使用git指令下载该主题到theme文件夹

`cd themes`

`git clone https://github.com/Chorer/hexo-theme-PureBlue.git`

3. Enter the `hexo-theme-PureBlue` folder and copy the `PureBlue` folder into the `themes` folder 

将hexo-theme-PureBlue中的PureBlue文件夹复制到themes文件夹中

4. Modify the root `_config.yml` and change the value of the `theme` to `Pure Blue`.

修改站点_config.yml文件---theme：PureBlue


## Install the plugins 安装插件

Make sure you have turn off the self-contained `highlight` in the root `_config.yml`.
And then install the [hexo-prism-plugin](https://github.com/ele828/hexo-prism-plugin).Check it to see the detail usage.

确保你关闭了hexo自带的代码高亮功能，之后下载hexo-prism-plugin插件，详细操作请点击上面链接查看。

## More theme configuration 相关配置

* To set the language，just edit the root `_config.yml` file：
`language: zh-CN`

编辑站点_config.yml文件即可修改语言

* To configure the menu, just edit the root `_config.yml` file and set the `menu`.The default setting is:

编辑站点_config.yml文件可以修改菜单栏

```html
menu:
  Home: /
  Categories: /categories
  Archives: /archives
  Tags: /tags
  About: /about
```
To display the tag page,about page and categories page,you need to creat them manully.Take the about page for example:
想要显示标签页、关于页或者分类页，你需要手动创建它们。这里用关于页举个例子：

`hexo new page about`

And then edit the `index.md` file in the root `source/about` folder:
之后编辑source/about文件夹的index.md文件

```html
---
title: about
date: 2019-03-24 00:50:51
type: about
---

...(the below content will appear in the about page)
```


## ToDoList  更新计划

- [x] Add the category page  增加分类页面
- [ ] Completely using vanilla JavaScript instead of jQuery 原生JavaScript实现，完全去除jQuery库
- [ ] Support responsive design 采用响应式设计
- [ ] Mobile adaptation 移动端适配
- [ ] Support styling the codequote highlight 支持自定义代码高亮样式
- [x] Support TOC  支持TOC
- [x] Support fancybox  支持fancybox图片查看
- [x] Support the third-party comment plugin  支持第三方评论系统
- [ ] Support the third-party share plugin  支持第三方分享系统
- [ ] Support website statistics 支持网站统计



## Changelogs 更新日志

2019.3.25
* Change css for a more flat style.  
『修改相关样式，现在界面更加趋向扁平化了』

2019.3.27
* Fix the bug that the category page can't display
『修复分类页无法正常显示的bug』
* Improve the navbar
『改进导航栏』

2019.3.29
* Add support for fancybox 
『增加对fancybox插件的支持，改进图片浏览体验』

2019.3.30
* Refer all js files in one ejs file
『统一在一个ejs文件中引用所有脚本文件』
* Change the style of scrollbar
『改变滚动条样式』
* Display total counts of categories,tags and posts
『统计分类数、标签数和文章数』
* Fix the bug that the tags will twinkle once touched
『修复标签闪烁的bug』

2019.3.31
* Rewirte the paginator and optimize the code
『重写分页器并优化部分代码』
* Add some icons with font-awesome
『引入font-awesome，添加了一些图标』

## License  协议

[MIT License](https://github.com/Chorer/hexo-theme-PureBlue/blob/master/LICENSE)

## Others 其他
If you like this theme, Fork && Star. 
如果你喜欢这个主题的话，给个Star？
