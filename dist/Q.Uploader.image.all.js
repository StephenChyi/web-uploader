//devin87@qq.com
//build:2020/07/22 20:03:00
!function(r,a){"use strict";var e,s,o,t=Object.prototype.toString,n=Object.prototype.hasOwnProperty,i=Array.prototype.slice;function l(e,t){return e!==a?e:t}function u(e){return"[object Function]"===t.call(e)}function c(e){return"number"==typeof e&&0<e&&e===Math.floor(e)}function d(e,t,r){if(!e||!t)return e;for(var i in t)i!=a&&n.call(t,i)&&(r||e[i]===a)&&(e[i]=t[i]);return e}function f(e,t,r,i){for(var n=e[r||t],a=[];n;){if(1==n.nodeType){if(!i)return n;a.push(n)}n=n[t]}return i?a:null}function p(e){return e.firstElementChild||f(e,"nextSibling","firstChild",!1)}function h(e,t,r){var i=document.createElement(e);return t&&(i.className=t),r&&(i.innerHTML=r),i}function v(e){var t=e||r.event;return t.target||(t.target=t.srcElement),t}d(Object,{forEach:function(e,t,r){for(var i in e)n.call(e,i)&&t.call(r,i,e[i],e)}}),d(Array.prototype,{forEach:function(e,t){for(var r=this,i=0,n=r.length;i<n;i++)i in r&&e.call(t,r[i],i,r)}}),d(Date,{now:function(){return+new Date}}),(r.ActiveXObject||r.msIndexedDB)&&(e=document.documentMode||(r.XMLHttpRequest?7:6)),r.JSON||(r.JSON={}),JSON.parse||(JSON.parse=function(e,t){if(!1!==t&&!/^[\],:{}\s]*$/.test(e.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))throw new Error("JSON SyntaxError");try{return new Function("return "+e)()}catch(e){}}),document.addEventListener?(s=function(e,t,r){e.addEventListener(t,r,!1)},o=function(e,t,r){e.removeEventListener(t,r,!1)}):document.attachEvent&&(s=function(e,t,r){e.attachEvent("on"+t,r)},o=function(e,t,r){e.detachEvent("on"+t,r)});var m=/^https?:\/\//i;function g(e){return m.test(e)}function w(e,t,r){e=+e;for(var i=0,n="number"==typeof(t=t||1024),a=1,s=c(r)?r:n?100:t.length;a<=e&&i<s;)a*=n?t:t[i],i++;return i&&e<a&&(a/=n?t:t.last(),i--),{value:i?e/a:e,level:i}}var y=["B","KB","MB","GB","TB","PB","EB"];var x={def:l,isFunc:u,isUInt:c,fire:function(e,t){if(u(e))return e.apply(t,i.call(arguments,2))},extend:d,ie:e,setOpacity:function(e,t){t<=1&&(t*=100),e.style.opacity!=a?e.style.opacity=t/100:e.style.filter!=a&&(e.style.filter="alpha(opacity="+parseInt(t)+")")},getOffset:function(e,t){for(var r=0,i=0,n=e.offsetWidth,a=e.offsetHeight;r+=e.offsetLeft,i+=e.offsetTop,(e=e.offsetParent)&&e!=t;);return{left:r,top:i,width:n,height:a}},walk:f,getPrev:function(e){return e.previousElementSibling||f(e,"previousSibling",null,!1)},getNext:function(e){return e.nextElementSibling||f(e,"nextSibling",null,!1)},getFirst:p,getLast:function(e){return e.lastElementChild||f(e,"previousSibling","lastChild",!1)},getChilds:function(e){return e.children||f(e,"nextSibling","firstChild",!0)},createEle:h,parseHTML:function(e,t){var r=h("div","",e);return t?r.childNodes:p(r)},isHttpURL:g,isSameHost:function(e){if(!g(e))return!0;var t=RegExp.lastMatch.length,r=e.indexOf("/",t);return e.slice(0,-1!=r?r:a).toLowerCase()==(location.protocol+"//"+location.host).toLowerCase()},parseLevel:w,formatSize:function(e,t){if(t=!0===t?{all:!0}:t||{},isNaN(e)||e==a||e<0){var r=t.error||"--";return t.all?{text:r}:r}var i=w(e,t.steps,t.limit),n=i.value.toFixed(l(t.digit,2));return!1!==t.trim&&-1!=n.lastIndexOf(".")&&(n=n.replace(/\.?0+$/,"")),i.text=n+(t.join||"")+(t.units||y)[i.level+(t.start||0)],t.all?i:i.text}};e&&(x["ie"+(e<6?6:e)]=!0),x.event={fix:v,stop:function(e,t,r){var i=v(e);!1!==t&&(i.preventDefault?i.preventDefault():i.returnValue=!1),!1!==r&&(i.stopPropagation?i.stopPropagation():i.cancelBubble=!0)},trigger:function(e,t){if(u(e[t]))e[t]();else if(e.fireEvent)e.fireEvent("on"+t);else if(e.dispatchEvent){var r=document.createEvent("HTMLEvents");r.initEvent(t,!0,!0),e.dispatchEvent(r)}},add:function(t,r,i,n){var a=function(e){i.call(t,v(e)),n&&o(t,r,a)};if(s(t,r,a),!n)return{stop:function(){o(t,r,a)}}}},r.Q=x}(window),function(r,c){"use strict";var n=Q.def,o=Q.fire,a=Q.extend,d=Q.getFirst,f=Q.getLast,l=JSON.parse,p=Q.createEle,s=Q.parseHTML,h=Q.setOpacity,u=Q.getOffset||Q.offset,v=Q.md5File,e=Q.event,m=e.add,g=e.trigger,w=e.stop,y=!1,x=!1,b=!1,i=0,_=0,E=0,S={};function T(e,t){var r=e.lastIndexOf(t);return-1!=r?e.slice(r):""}function k(e){if(e){for(var t=e.split(","),r={},i=0,n=t.length;i<n;i++)r[t[i]]=!0;return r}}function L(e){var t=this,r=e||{};t.guid=r.guid||"uploader"+ ++i,t.list=[],t.map={},t.index=0,t.started=!1,t.set(r)._init()}L.prototype={constructor:L,set:function(e){var t=this,r=a(e,t.ops);t.url=r.url,t.dataType=r.dataType||"json",t.data=r.data,t.targets=r.target||[],t.targets.forEach||(t.targets=[t.targets]),t.target=t.targets[0],t.html5=y&&!!n(r.html5,!0),t.multiple=x&&t.html5&&!!n(r.multiple,!0),t.clickTrigger=b&&!!n(r.clickTrigger,!0),t.workerThread=t.html5&&r.workerThread||1,t.workerIdle=t.workerThread,t.auto=!1!==r.auto,t.upName=r.upName||"upfile",t.accept=r.accept||(0==(navigator.platform||"").indexOf("Win")?r.allows:"*/*"),t.isDir=r.isDir,t.allows=k(r.allows),t.disallows=k(r.disallows),t.maxSize=+r.maxSize||0,t.isSlice=!!r.isSlice,t.chunkSize=+r.chunkSize||2097152,t.isQueryState=!!n(r.isQueryState,t.isSlice),t.isMd5=!!n(r.isMd5,t.isSlice),t.isUploadAfterHash=!1!==r.isUploadAfterHash,t.sliceRetryCount=r.sliceRetryCount==c?2:+r.sliceRetryCount||0,t.container=r.container||document.body,r.getPos&&(t.getPos=r.getPos);var i=r.UI||{};return i.init&&(t.init=i.init),i.draw&&(t.draw=i.draw),i.update&&(t.update=i.update),i.over&&(t.over=i.over),t.fns=r.on||{},t.ops=r,t.accept&&!t.clickTrigger&&t.resetInput(),t},_init:function(){var t=this;if(!t._inited){t._inited=!0;var e,r,i=t.guid,n=t.container,a=p("div","upload-input "+i);if(n.appendChild(a),t.boxInput=a,!t.html5){var s="upload_iframe_"+i,o=p("div","upload-html4 "+i,'<iframe class="u-iframe" name="'+s+'"></iframe><form class="u-form" action="" method="post" enctype="multipart/form-data" target="'+s+'"></form>');n.appendChild(o);var l=d(o),u=f(o);t.iframe=l,t.form=u,r=function(){if(0==t.workerIdle){var e;try{e=l.contentWindow.document.body.innerHTML}catch(e){}t.complete(c,2,e)}},(e=l).attachEvent?e.attachEvent("onload",r):e.addEventListener("load",r,!1)}return t.targets.forEach(function(e){t.clickTrigger?m(e,"click",function(e){!1!==t.fire("select",e)&&(t.resetInput(),g(t.inputFile,"click"))}):m(e,"mouseover",function(e){t.target=this,t.updatePos()})}),t.clickTrigger||(m(a,"click",function(e){!1===t.fire("select",e)&&w(e)}),h(a,0),t.resetInput()),t.run("init",c,"init")}},resetInput:function(){var t=this,e=t.boxInput;if(!e)return t;e.innerHTML='<input type="file" name="'+t.upName+'"'+(t.accept?'accept="'+t.accept+'"':"")+(t.isDir?'webkitdirectory=""':"")+' style="'+(t.clickTrigger?"visibility: hidden;":"font-size:100px;")+'"'+(t.multiple?' multiple="multiple"':"")+">";var r=d(e);return m(r,"change",function(e){t.add(this),t.html5||t.resetInput()}),t.inputFile=r,t.updatePos()},updatePos:function(e){var t=this;if(t.clickTrigger)return t;var r=t.getPos||u,i=t.boxInput,n=d(i),a=t.target,s=a.offsetWidth,o=a.offsetHeight,l=0==s?{left:-1e4,top:-1e4}:r(a);return i.style.width=n.style.width=s+"px",i.style.height=n.style.height=o+"px",i.style.left=l.left+"px",i.style.top=l.top+"px",e&&(i.style.zIndex=++E),t},fire:function(e,t,r){if(!r)return o(this.fns[e],this,t);var i=this.fns[e+"Async"];if(i)return o(i,this,t,r);r(o(this.fns[e],this,t))},run:function(e,t,r){var i=this[e];return i&&o(i,this,t),r&&o(this.fns[r],this,t),this},addTask:function(e,t){if(e||t){var r,i;i=t?(r=t.webkitRelativePath||t.name||t.fileName,0===t.size?0:t.size||t.fileSize):(r=T(e.value,"\\").slice(1)||e.value,-1);var n,a=this,s=T(r,".").toLowerCase();a.disallows&&a.disallows[s]||a.allows&&!a.allows[s]?n="ext":-1!=i&&a.maxSize&&i>a.maxSize&&(n="size");var o={id:++_,name:r,ext:s,size:i,input:e,file:t,state:n?-1:0};return n&&(o.limited=n,o.disabled=!0),a.fire("add",o,function(e){!1===e||o.disabled||o.limited||(o.index=a.list.length,a.list.push(o),a.map[o.id]=o,a.run("draw",o,"draw"),a.auto&&a.start())}),o}},add:function(e){if("INPUT"==e.tagName){var t=e.files;if(t)for(var r=0,i=t.length;r<i;r++)this.addTask(e,t[r]);else this.addTask(e)}else this.addTask(c,e)},addList:function(e){for(var t=0,r=e.length;t<r;t++)this.add(e[t])},get:function(e){if(e!=c)return this.map[e]},cancel:function(e,t){var r=this,i=r.get(e);if(i){var n=i.state;if(0!=n&&1!=n)return r;if(1==n){var a=i.xhr;if(a)return a.abort(),r;r.iframe.contentWindow.location="about:blank"}return t?r:r.complete(i,-2)}},remove:function(e){var t=this.get(e);t&&(1==t.state&&this.cancel(e),t.deleted=!0,this.fire("remove",t))},start:function(){var e=this,t=e.workerIdle,r=e.list,i=e.index,n=r.length;if(e.started||(e.started=!0),n<=0||n<=i||t<=0)return e;var a=r[i];return e.index++,e.upload(a)},upload:function(t){var r=this;return!t||0!=t.state||t.skip||t.deleted?r.start():(t.url=r.url,r.workerIdle--,r.fire("upload",t,function(e){if(!1===e)return r.complete(t,-1);r.html5&&t.file?r._upload_html5_ready(t):t.input?r._upload_html4(t):r.complete(t,-1)}),r)},_process_xhr_headers:function(r){var e=this.ops,t=function(e,t){r.setRequestHeader(e,t)};S.headers&&Object.forEach(S.headers,t),e.headers&&Object.forEach(e.headers,t)},queryState:function(i,n){var a=this,e=a.url,s=new XMLHttpRequest,r=["action=query","hash="+(i.hash||encodeURIComponent(i.name)),"fileName="+encodeURIComponent(i.name)];return-1!=i.size&&r.push("fileSize="+i.size),a._process_params(i,function(e,t){r.push(encodeURIComponent(e)+"="+(t!=c?encodeURIComponent(t):""))},"dataQuery"),i.queryUrl=e+(-1==e.indexOf("?")?"?":"&")+r.join("&"),a.fire("sliceQuery",i),s.open("GET",i.queryUrl),a._process_xhr_headers(s),s.onreadystatechange=function(){if(4==s.readyState){var e,t;if(200<=s.status&&s.status<400)if("ok"===(e=s.responseText)?t={ret:1}:e&&(t=l(e)),t&&"number"!=typeof t||(t={ret:0,start:t}),i.response=e,1==(i.json=t).ret)i.queryOK=!0,a.cancel(i.id,!0).complete(i,2);else{var r=+t.start||0;r!=Math.floor(r)&&(r=0),i.sliceStart=r}o(n,a,s)}},s.onerror=function(){o(n,a,s)},s.send(null),a},_upload_html5_ready:function(i){var n=this,e=function(){2!=i.state&&(n.isSlice?n._upload_slice(i):n._upload_html5(i))},a=function(e){n.fire("hash",i,function(){i.hash&&n.isQueryState&&2!=i.state?n.queryState(i,e):e()})},t=function(r){if(n.isMd5&&v){var t=n.fns.hashProgress;v(i.file,function(e,t){i.hash=e,i.timeHash=t,a(r)},function(e){o(t,n,i,e)})}else a(r)};return n.isUploadAfterHash?t(e):(e(),t()),n},_process_params:function(e,t,r){r=r||"data",S.data&&Object.forEach(S.data,t),this.data&&Object.forEach(this.data,t),e&&e[r]&&Object.forEach(e[r],t)},_upload_html5:function(t){var r=this,i=new XMLHttpRequest;(t.xhr=i).upload.addEventListener("progress",function(e){r.progress(t,e.total,e.loaded)},!1),i.addEventListener("load",function(e){r.complete(t,2,e.target.responseText)},!1),i.addEventListener("error",function(){r.complete(t,-3)},!1),i.addEventListener("abort",function(){r.complete(t,-2)},!1);var n=new FormData;r._process_params(t,function(e,t){n.append(e,t)}),n.append("fileName",t.name),n.append(r.upName,t.blob||t.file,t.name),i.open("POST",t.url),r._process_xhr_headers(i),r.fire("send",t,function(e){if(!1===e)return r.complete(t,-1);i.send(n),r._afterSend(t)})},_upload_html4:function(t){var r=this,i=r.form,e=t.input;if(e._uploaded)return r.complete(t,2);e._uploaded=!0,e.name=r.upName,i.innerHTML="",i.appendChild(e),i.action=t.url,r._process_params(t,function(e,t){i.appendChild(s('<input type="hidden" name="'+e+'" value="'+t+'">'))}),r.fire("send",t,function(e){if(!1===e)return r.complete(t,-1);i.submit(),r._afterSend(t)})},_afterSend:function(e){e.lastTime=e.startTime=Date.now(),e.state=1,this._lastTask=e,this.progress(e)},progress:function(e,t,r){t||(t=e.size),(!r||r<0)&&(r=0);var i=e.state||0;t<r&&(r=t),0<r&&0==i&&(e.state=i=1),2==i&&(t=r=e.size),function(e,t,r){if(t&&!(t<=0)){var i,n=Date.now();if(t<=r)return(i=n-e.startTime)?e.avgSpeed=Math.min(Math.round(1e3*t/i),t):e.speed||(e.avgSpeed=e.speed=t),e.time=i||0,e.endTime=n;(i=n-e.lastTime)<200||(e.speed=Math.min(Math.round(1e3*(r-e.loaded)/i),e.total),e.lastTime=n)}}(e,t,r),e.total=t,e.loaded=r,this.run("update",e,"progress")},_process_response:function(e,t){(e.response=t)&&"json"==this.dataType&&(e.json=l(t))},complete:function(e,t,r){var i=this;return e||1!=i.workerThread||(e=i._lastTask),e&&(t!=c&&(e.state=t),1!=e.state&&2!=t||(e.state=2,i.progress(e,e.size,e.size)),r!==c&&i._process_response(e,r)),i.run("update",e,"update").run("over",e,"over"),-2==t&&i.fire("cancel",e),i.fire("complete",e),i.workerIdle++,i.started&&i.start(),i}},L.extend=function(e,t){a(L.prototype,e,t)},function(){var e=r.XMLHttpRequest;e&&(new e).upload&&r.FormData&&(y=!0);var t=document.createElement("input");t.type="file",x=!!t.files,b=y}(),a(L,{support:{html5:y,multiple:x},READY:0,PROCESSING:1,COMPLETE:2,SKIP:-1,CANCEL:-2,ERROR:-3,UI:{},Lang:{status_ready:"准备中",status_processing:"上传中",status_complete:"已完成",status_skip:"已跳过",status_cancel:"已取消",status_error:"已失败"},setup:function(e){a(S,e,!0)},getStatusText:function(e){var t=L.Lang;switch(e){case 0:return t.status_ready;case 1:return t.status_processing;case 2:return t.status_complete;case-1:return t.status_skip;case-2:return t.status_cancel;case-3:return t.status_error}return e}}),Q.Uploader=L}(window),function(s,e){"use strict";var v=Q.getFirst,m=Q.getNext,g=Q.createEle,w=Q.setOpacity,o=Q.ie,c=Q.Uploader;function r(e,t){e.className+=" "+t}function l(t,e,r){var i=e.input,n=e.file||(i.files?i.files[0]:void 0);if(n)!function(e,t){var r=s.URL||s.webkitURL;if(r)return t(r.createObjectURL(e));if(s.FileReader){var i=new FileReader;i.onload=function(e){t(e.target.result)},i.readAsDataURL(e)}else e.readAsDataURL&&t(e.readAsDataURL())}(n,function(e){e&&(t.innerHTML='<img src="'+e+'" />'),r&&r(e)});else if(i){var a=i.value;if(a&&!/^\w:\\fakepath/.test(a)||(i.select(),parent.document.body.focus(),document.selection&&(a=document.selection.createRange().text)),a){t.innerHTML='<img src="'+a+'" />';try{6<o&&(t.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale',src='"+a+"')")}catch(e){}}r&&r(a)}}var u=s.Blob||s.WebkitBlob||s.MozBlob,d=s.WebKitBlobBuilder||s.MozBlobBuilder,i=function(){if(!s.FileReader||!s.atob||!u&&!d)return!1;var e=document.createElement("canvas");return!!e.getContext&&!!e.getContext("2d")}();function f(e,l,u,c){var d=new Image;d.src=e,d.onload=function(){var e=d.width,t=d.height,r=u.maxWidth,i=u.maxHeight,n=r&&r<e,a=i&&i<t;if(!(n||a))return c&&c(!1);n&&(e=r,t=Math.floor(d.height*e/d.width)),a&&(t=i,e=Math.floor(d.width*t/d.height));var s=document.createElement("canvas"),o=s.getContext("2d");s.width=e,s.height=t,o.drawImage(d,0,0,e,t),c&&c(s.toDataURL(l),l)}}var n=".jpg,.png,.gif,.bmp,.webp,.tif,.tiff";c.support.imageScale=i,c.previewImage=l,c.scaleImage=f,c.UI.Image={init:function(){var e=this.ops,t=e.view;e.allows||(e.allows=n),t&&r(t,"ui-image "+(this.html5?"html5":"html4"))},supportScale:function(e){if(!i)return!1;".jpeg"==e&&(e=".jpg");var t=(this.ops.scale||{}).types||".jpg";return!(-1==n.indexOf(e))&&("*"==t||-1!=t.indexOf(e))},previewImage:function(e,i,t){var n=this,a=i.scale||t.scale,s=a&&n.supportScale(i.ext);return s&&(i.skip=!0),l(e,i,function(e){var t,r;(n.fire("preview",{task:i,src:e}),e&&s)&&f(e,(t=i.ext,"image/"+("jpg"==(r=t.slice(1))?"jpeg":r)),a,function(e,t){if(e){var r=function(e,t){for(var r=e.split(","),i=atob(r[1]),n=[],a=0,s=i.length;a<s;a++)n[a]=i.charCodeAt(a);if(u)return new u([new Uint8Array(n)],{type:t});var o=new d;return o.append(n),o.getBlob(t)}(e,t);i.blob=r,n.fire("scale",{task:i,base64:e,type:t,blob:r})}i.skip=!1,n.list.push(i),n.auto&&n.start()})}),n},draw:function(e){var t=this,r=t.ops,i=r.view;if(i){var n=e.name,a='<div class="u-img"></div><div class="u-progress-bar"><div class="u-progress"></div></div><div class="u-detail"></div><div class="u-name" title="'+n+'">'+n+'</div><div class="u-close-bg"></div><div class="u-close-text">X</div>',s=e.id,o=g("div","u-item",a);o.taskId=s;var l=v(o),u=m(l),c=v(u),d=m(u),f=m(d),p=m(f),h=m(p);w(u,.3),w(c,.5),w(p,.3),h.onclick=function(){i.removeChild(o),t.remove(s)},e.box=o,e.boxProgress=c,e.boxDetail=d,e.boxName=f,i.appendChild(o),t.previewImage(l,e,r).update(e)}},update:function(e){if(e&&e.box){var t,r,i=e.total||e.size,n=e.loaded,a=e.state,s=e.boxProgress,o=e.boxDetail,l=c.getStatusText(a);if(this.html5&&null!=n&&0<=n){var u;if(a==c.PROCESSING)"100.0"==(u=Math.min(100*n/i,100).toFixed(1))&&(u="99.9");else a==c.COMPLETE&&(u="100");u&&(l+=" "+(u+="%"),s.style.width=u)}r=l,(t=o)&&(t.innerHTML=r||"")}},over:function(e){e&&e.box&&r(e.box,"u-over")}},c.extend(c.UI.Image)}(window);