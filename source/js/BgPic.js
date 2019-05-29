var header = document.getElementsByTagName("header")[0];
var footer = document.getElementsByTagName("footer")[0];
var randomBgIndex = Math.round( Math.random() * 7 );
var arrays_header = ["header1","header2","header3","header4","header5","header6","header7","header8"];
var arrays_footer = ["footer1","footer2","footer3","footer4","footer5","footer6","footer7","footer8"];
header.classList.add(arrays_header[randomBgIndex]);
footer.classList.add(arrays_footer[randomBgIndex]);