/*!
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * v4.0.30 - 2019-02-23
 *
 */
!function(a,b){"use strict";var c=b.doc,d="#plugin",e=a("#issue");c.on("change",d,function(c){var d=c.target.value;a(this).trigger({type:"ajax-fetch.wb",fetch:{url:encodeURI("https://api.github.com/repos/wet-boew/wet-boew/issues?labels=Plugin: "+d),dataType:b.ielt10?"jsonp":"json",jsonp:b.ielt10?"callback":null}}),e.get(0).value=""}),c.on("ajax-fetched.wb",d,function(c){var d,f,g=a("#"+e.attr("list")),h=b.ielt10?c.fetch.response.data:c.fetch.response,i=h.length,j="";for(g.empty(),d=0;d!==i;d+=1)f=h[d],j+='<option label="'+f.title+'" value="'+f.title+'"></option>';b.ielt10&&(j="<select>"+j+"</select>"),g.append(j),e.trigger("wb-update.wb-datalist")})}(jQuery,wb);
//# sourceMappingURL=datalist_dynamic.min.js.map