// build time:Mon Jun 08 2020 19:37:58 GMT+0800 (GMT+08:00)
(function(e){e.fn.navList=function(){var t=e(this);$a=t.find("a"),b=[];$a.each(function(){var t=e(this),a=Math.max(0,t.parents("li").length-1),i=t.attr("href"),l=t.attr("target");b.push("<a "+'class="link depth-'+a+'"'+(typeof l!=="undefined"&&l!=""?' target="'+l+'"':"")+(typeof i!=="undefined"&&i!=""?' href="'+i+'"':"")+">"+'<span class="indent-'+a+'"></span>'+t.text()+"</a>")});return b.join("")};e.fn.panel=function(t){if(this.length==0)return i;if(this.length>1){for(var a=0;a<this.length;a++)e(this[a]).panel(t);return i}var i=e(this),l=e("body"),r=e(window),n=i.attr("id"),o;o=e.extend({delay:0,hideOnClick:false,hideOnEscape:false,hideOnSwipe:false,resetScroll:false,resetForms:false,side:null,target:i,visibleClass:"visible"},t);if(typeof o.target!="jQuery")o.target=e(o.target);i._hide=function(e){if(!o.target.hasClass(o.visibleClass))return;if(e){e.preventDefault();e.stopPropagation()}o.target.removeClass(o.visibleClass);window.setTimeout(function(){if(o.resetScroll)i.scrollTop(0);if(o.resetForms)i.find("form").each(function(){this.reset()})},o.delay)};i.css("-ms-overflow-style","-ms-autohiding-scrollbar").css("-webkit-overflow-scrolling","touch");if(o.hideOnClick){i.find("a").css("-webkit-tap-highlight-color","rgba(0,0,0,0)");i.on("click","a",function(t){var a=e(this),l=a.attr("href"),r=a.attr("target");if(!l||l=="#"||l==""||l=="#"+n)return;t.preventDefault();t.stopPropagation();i._hide();window.setTimeout(function(){if(r=="_blank")window.open(l);else window.location.href=l},o.delay+10)})}i.on("touchstart",function(e){i.touchPosX=e.originalEvent.touches[0].pageX;i.touchPosY=e.originalEvent.touches[0].pageY});i.on("touchmove",function(e){if(i.touchPosX===null||i.touchPosY===null)return;var t=i.touchPosX-e.originalEvent.touches[0].pageX,a=i.touchPosY-e.originalEvent.touches[0].pageY,l=i.outerHeight(),r=i.get(0).scrollHeight-i.scrollTop();if(o.hideOnSwipe){var n=false,s=20,f=50;switch(o.side){case"left":n=a<s&&a>-1*s&&t>f;break;case"right":n=a<s&&a>-1*s&&t<-1*f;break;case"top":n=t<s&&t>-1*s&&a>f;break;case"bottom":n=t<s&&t>-1*s&&a<-1*f;break;default:break}if(n){i.touchPosX=null;i.touchPosY=null;i._hide();return false}}if(i.scrollTop()<0&&a<0||r>l-2&&r<l+2&&a>0){e.preventDefault();e.stopPropagation()}});i.on("click touchend touchstart touchmove",function(e){e.stopPropagation()});i.on("click",'a[href="#'+n+'"]',function(e){e.preventDefault();e.stopPropagation();o.target.removeClass(o.visibleClass)});l.on("click touchend",function(e){i._hide(e)});l.on("click",'a[href="#'+n+'"]',function(e){e.preventDefault();e.stopPropagation();o.target.toggleClass(o.visibleClass)});if(o.hideOnEscape)r.on("keydown",function(e){if(e.keyCode==27)i._hide(e)});return i};e.fn.placeholder=function(){if(typeof document.createElement("input").placeholder!="undefined")return e(this);if(this.length==0)return a;if(this.length>1){for(var t=0;t<this.length;t++)e(this[t]).placeholder();return a}var a=e(this);a.find("input[type=text],textarea").each(function(){var t=e(this);if(t.val()==""||t.val()==t.attr("placeholder"))t.addClass("polyfill-placeholder").val(t.attr("placeholder"))}).on("blur",function(){var t=e(this);if(t.attr("name").match(/-polyfill-field$/))return;if(t.val()=="")t.addClass("polyfill-placeholder").val(t.attr("placeholder"))}).on("focus",function(){var t=e(this);if(t.attr("name").match(/-polyfill-field$/))return;if(t.val()==t.attr("placeholder"))t.removeClass("polyfill-placeholder").val("")});a.find("input[type=password]").each(function(){var t=e(this);var a=e(e("<div>").append(t.clone()).remove().html().replace(/type="password"/i,'type="text"').replace(/type=password/i,"type=text"));if(t.attr("id")!="")a.attr("id",t.attr("id")+"-polyfill-field");if(t.attr("name")!="")a.attr("name",t.attr("name")+"-polyfill-field");a.addClass("polyfill-placeholder").val(a.attr("placeholder")).insertAfter(t);if(t.val()=="")t.hide();else a.hide();t.on("blur",function(e){e.preventDefault();var a=t.parent().find("input[name="+t.attr("name")+"-polyfill-field]");if(t.val()==""){t.hide();a.show()}});a.on("focus",function(e){e.preventDefault();var t=a.parent().find("input[name="+a.attr("name").replace("-polyfill-field","")+"]");a.hide();t.show().focus()}).on("keypress",function(e){e.preventDefault();a.val("")})});a.on("submit",function(){a.find("input[type=text],input[type=password],textarea").each(function(t){var a=e(this);if(a.attr("name").match(/-polyfill-field$/))a.attr("name","");if(a.val()==a.attr("placeholder")){a.removeClass("polyfill-placeholder");a.val("")}})}).on("reset",function(t){t.preventDefault();a.find("select").val(e("option:first").val());a.find("input,textarea").each(function(){var t=e(this),a;t.removeClass("polyfill-placeholder");switch(this.type){case"submit":case"reset":break;case"password":t.val(t.attr("defaultValue"));a=t.parent().find("input[name="+t.attr("name")+"-polyfill-field]");if(t.val()==""){t.hide();a.show()}else{t.show();a.hide()}break;case"checkbox":case"radio":t.attr("checked",t.attr("defaultValue"));break;case"text":case"textarea":t.val(t.attr("defaultValue"));if(t.val()==""){t.addClass("polyfill-placeholder");t.val(t.attr("placeholder"))}break;default:t.val(t.attr("defaultValue"));break}})});return a};e.prioritize=function(t,a){var i="__prioritize";if(typeof t!="jQuery")t=e(t);t.each(function(){var t=e(this),l,r=t.parent();if(r.length==0)return;if(!t.data(i)){if(!a)return;l=t.prev();if(l.length==0)return;t.prependTo(r);t.data(i,l)}else{if(a)return;l=t.data(i);t.insertAfter(l);t.removeData(i)}})}})(jQuery);
//rebuild by neat 