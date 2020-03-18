// build time:Wed Mar 18 2020 11:36:31 GMT+0800 (GMT+08:00)
var tape=require("tape");var uniqueid=require("../../lib/uniqueid.js");tape("test uniqueid",function(e){var u=uniqueid();var i=uniqueid();e.notEqual(u,i,"Two calls to uniqueid produce different values");e.end()});
//rebuild by neat 