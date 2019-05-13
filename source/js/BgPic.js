var header = document.getElementsByClassName("header")[0];
var footer = document.getElementsByClassName("footer")[0];
var randomBgIndex = Math.round( Math.random() * 2 );
var arrays_header = ["header1","header2","header3"];
var arrays_footer = ["footer1","footer2","footer3"];
header.classList.add(arrays_header[randomBgIndex]);
footer.classList.add(arrays_footer[randomBgIndex]);