//@charset "gb2312";
//REM适配分辨率JS
		function DOMReady(fn) {
		if(document.addEventListener) {
			document.addEventListener('DOMContentLoaded', function() {
				fn && fn();
			}, false)
		} else {
			document.attachEvent('readystatechange', function() {
				if(document.readyState == 'complete') {
					fn && fn();
				};
			});
		};
	};
	DOMReady(
		function() {;
			(function(win, doc) {
				function change() {
					doc.documentElement.style.fontSize = 50 * doc.documentElement.clientWidth / 320 + 'px';
				}
				change();
				win.addEventListener('resize', change, false);
			})(window, document);
		}
	);
//;(function (win,doc){
//			function change(){
//				doc.documentElement.style.fontSize=20*doc.documentElement.clientWidth/320+'px';
//			}
//			change();
//			win.addEventListener('resize',change,false);
//		})(window,document);
//$(document).ready(function(){
//	$('.main-nav li a').on('touchstart',function(){alert(1)};)
//});
