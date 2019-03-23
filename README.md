# hexo-theme-PureBlue

## Introduction 介绍
A simple style Hexo theme based on Hexo 3.8.0，mainly using the light blue and light green color.

简约风格的Hexo主题，主打蓝色和绿色，基于Hexo 3.8.0制作。[预览](https://chorer.github.io/)。

## Feature 特点

1.Using Stylus as css preprocessor and ejs as template engine

使用Stylus作为css预处理器，ejs作为模板引擎

2.Support zh-CN and en by default（You can also extend it by editing the yml file）

支持中文和英文（你可以通过编辑yml文件添加更多语言）


## Screenshots 截图
![](https://myblog-1258623898.cos.ap-chengdu.myqcloud.com/show1.png)
![](https://myblog-1258623898.cos.ap-chengdu.myqcloud.com/show2.png)
![](https://myblog-1258623898.cos.ap-chengdu.myqcloud.com/show3.png)


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

- [ ] Add the category page  增加分类页面
- [ ] Completely using vanilla JavaScript instead of jQuery 原生JavaScript实现，完全去除jQuery库
- [ ] Support responsive design 采用响应式设计
- [ ] Mobile adaptation 移动端适配
- [ ] Support styling the codequote highlight 支持自定义代码高亮样式
- [ ] Support TOC  支持TOC
- [ ] Support the third-party share and comment systems  支持第三方分享和评论系统
- [ ] Support website statistics 支持网站统计



## Changelogs 更新日志
Not yet...
待定...

## License  协议

[MIT License](https://github.com/Chorer/hexo-theme-PureBlue/blob/master/LICENSE)

## Others 其他
If you like this theme, Fork && Star. Come on.

如果你喜欢这个主题的话，给个Star？
