// 区分代码和代码块
var codes = document.getElementsByTagName("code");
for(var i=0;i<codes.length;i++){
	if(codes[i].parentNode.nodeName!="PRE"){
		codes[i].classList.add("littleCode");
	}
}

// 生成左图案svg
var dot_text = '<svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fill-rule="evenodd" transform="translate(1 1)">';
dot_text += '<circle cx="6" cy="6" r="6" fill="#FF5F56" stroke="#E0443E" stroke-width=".5"></circle><circle cx="26" cy="6" r="6" fill="#FFBD2E" stroke="#DEA123" stroke-width=".5">';
dot_text += '</circle><circle cx="46" cy="6" r="6" fill="#27C93F" stroke="#1AAB29" stroke-width=".5"></circle></g></svg>';
// 生成右图案svg
var copy_text_before = '<svg width="19.44" height="24" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">';
copy_text_before += '<path d="M8 0H3.40385C2.55385 0 1.84615 0.669231 1.84615 1.51923V1.84615H1.55769C0.707692 1.84615 0 2.51538 0 3.36538V14.4423C0 15.2923 0.707692 16 1.55769 16H9.55769C10.4077 16 11.0769 15.2923 11.0769 14.4423V14.1538H11.4038C12.2538 14.1538 12.9231 13.4462 12.9231 12.5962V4.92308L8 0ZM8 1.71538L11.2077 4.92308H8V1.71538ZM9.84615 14.4423C9.84615 14.6231 9.71538 14.7692 9.55769 14.7692H1.55769C1.38846 14.7692 1.23077 14.6115 1.23077 14.4423V3.36538C1.23077 3.20769 1.37692 3.07692 1.55769 3.07692H1.84615V12.9038C1.84615 13.7538 2.24615 14.1538 3.09615 14.1538H9.84615V14.4423ZM11.6923 12.5962C11.6923 12.7769 11.5615 12.9231 11.4038 12.9231H3.40385C3.23462 12.9231 3.07692 12.7654 3.07692 12.5962V1.51923C3.07692 1.36154 3.22308 1.23077 3.40385 1.23077H6.76923V6.15385H11.6923V12.5962Z" fill="#858585">';
copy_text_before += '</path></svg>';
var copy_text_after = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 18 18" fill="none"><path d="M9 0C4.02837 0 0 4.02837 0 9C0 13.9716 4.02837 18 9 18C13.9716 18 18 13.9716 18 9C18 4.02837 13.9716 0 9 0ZM13.6082 6.51202L7.82308 12.3231H7.81875C7.74519 12.3966 7.54615 12.5611 7.31683 12.5611C7.1524 12.5611 6.96635 12.4702 6.81058 12.3144L4.3875 9.89135C4.31827 9.82212 4.31827 9.71394 4.3875 9.64471L5.15769 8.87452C5.19231 8.8399 5.23558 8.8226 5.27885 8.8226C5.32212 8.8226 5.36539 8.8399 5.4 8.87452L7.32115 10.7957L12.6 5.47788C12.6346 5.44327 12.6779 5.42596 12.7212 5.42596C12.7688 5.42596 12.812 5.44327 12.8423 5.47788L13.5995 6.26106C13.6774 6.33462 13.6774 6.44279 13.6082 6.51202Z" fill="#858585"></path></svg>';  

// 将图案插入代码块中
var blocks = document.getElementsByClassName("line-numbers");
var container = document.getElementsByClassName("post-content")[0];
for(var i=0;i<blocks.length;i++){
	// 创建元素
	var dot = document.createElement("span");
	var copy = document.createElement("span");
	var button = document.createElement("button");
	var bar = document.createElement("div");
	// 命名
	dot.innerHTML = dot_text;
	dot.className ="dot";
	button.innerHTML = copy_text_before;
	copy.className ="copy";
	bar.className = "topBar";
	// 插入
	copy.appendChild(button);
	bar.appendChild(copy);
	bar.appendChild(dot);
	container.insertBefore(bar,blocks[i]);
	// 宽度修正
	var block_width = blocks[i].offsetWidth;
	blocks[i].previousSibling.style.width = block_width + "px";
}
// 动态宽度修正
window.onresize = function(){
	for(var i=0;i<blocks.length;i++){
		var block_width = blocks[i].offsetWidth;
		blocks[i].previousSibling.style.width = block_width + "px";
	}
}

// 绑定点击事件，实现复制功能
function func_copy(str){
	// 创建临时文本域
	var textarea = document.createElement("textarea");
	// 设置文本域文本
	textarea.value = str;
	// 设置文本域不可见
	textarea.setAttribute('readonly', '');
  	textarea.style.position = 'absolute';
  	textarea.style.left = '-9999px';
	document.body.appendChild(textarea);
	// 选中待复制文本
	textarea.select();
    // 执行浏览器复制命令
    document.execCommand("copy");
    // 移除临时文本域
    document.body.removeChild(textarea);
}
// 弹窗
function func_toast(){
	var confirm = document.createElement("div");
	confirm.className = "toast";
	confirm.innerHTML = "Snippet copied to clipboard !";
	document.body.appendChild(confirm);
	setTimeout(function(){
		document.body.removeChild(confirm);
	},1200);
}
var buttons = document.querySelectorAll(".copy button");
for(var i=0;i<buttons.length;i++){
	buttons[i].onclick = function(){
		var that = this;
		// 改变图案
		this.innerHTML = copy_text_after;
		// 创建弹窗
		func_toast();
		// 恢复图案
		setTimeout(function(){
			that.innerHTML = copy_text_before;
		},600);
		// 获取待复制文本，调用复制函数
		var text = that.parentNode.parentNode.nextSibling.innerText;
		func_copy(text);	    
	};
}

// li样式
var lis = document.getElementsByTagName("li");
for(var i = 0;i<lis.length;i++){
	var circle = document.createElement("span");
	circle.className = "circle";
	lis[i].appendChild(circle);
}








