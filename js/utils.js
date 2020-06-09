// build time:Tue Jun 09 2020 09:54:26 GMT+0800 (GMT+08:00)
function debounce(t,e,i){var n;return function(){var a=this;var o=arguments;var r=function(){n=null;if(!i)t.apply(a,o)};var l=i&&!n;clearTimeout(n);n=setTimeout(r,e);if(l)t.apply(a,o)}}function throttle(t,e,i){var n,a,o;var r=0;if(!i)i={};var l=function(){r=i.leading===false?0:(new Date).getTime();n=null;t.apply(a,o);if(!n)a=o=null};var d=function(){var d=(new Date).getTime();if(!r&&i.leading===false)r=d;var c=e-(d-r);a=this;o=arguments;if(c<=0||c>e){if(n){clearTimeout(n);n=null}r=d;t.apply(a,o);if(!n)a=o=null}else if(!n&&i.trailing!==false){n=setTimeout(l,c)}};return d}function sidebarPaddingR(){var t=window.innerWidth;var e=document.body.clientWidth;var i=t-e;if(t!==e){$("body").css("padding-right",i)}}function isIpad(){return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function isTMobile(){var t=navigator.userAgent;var e=/iPad|iPhone|iPod|Android|Opera Mini|BlackBerry|webOS|UCWEB|Blazer|PSP|IEMobile|Symbian/g;return window.screen.width<992&&e.test(t)}function isMobile(){return this.isIpad()||this.isTMobile()}function isDesktop(){return!this.isMobile()}function scrollTo(t){var e=$(t).offset();$("body,html").animate({scrollTop:e.top})}function loadScript(t,e){var i=document.createElement("script");i.type="text/javascript";if(i.readyState){i.onreadystatechange=function(){if(i.readyState==="loaded"||i.readyState==="complete"){i.onreadystatechange=null;e()}}}else{i.onload=function(){e()}}i.src=t;document.body.appendChild(i)}function snackbarShow(t,e,i){var n=typeof e!=="undefined"?e:false;var a=typeof i!=="undefined"?i:2e3;var o=GLOBAL_CONFIG.Snackbar.position;var r=document.documentElement.getAttribute("data-theme")==="light"?GLOBAL_CONFIG.Snackbar.bgLight:GLOBAL_CONFIG.Snackbar.bgDark;Snackbar.show({text:t,backgroundColor:r,showAction:n,duration:a,pos:o})}window.debounce=debounce;window.throttle=throttle;window.isMobile=isMobile;window.loadScript=loadScript;
//rebuild by neat 