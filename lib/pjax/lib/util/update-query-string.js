// build time:Wed Mar 18 2020 11:35:54 GMT+0800 (GMT+08:00)
module.exports=function(e,r,n){var t=new RegExp("([?&])"+r+"=.*?(&|$)","i");var a=e.indexOf("?")!==-1?"&":"?";if(e.match(t)){return e.replace(t,"$1"+r+"="+n+"$2")}else{return e+a+r+"="+n}};
//rebuild by neat 