var Re=(m,l)=>()=>(l||m((l={exports:{}}).exports,l),l.exports);var Me=Re((J,Se)=>{(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const v of document.querySelectorAll('link[rel="modulepreload"]'))E(v);new MutationObserver(v=>{for(const w of v)if(w.type==="childList")for(const S of w.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&E(S)}).observe(document,{childList:!0,subtree:!0});function h(v){const w={};return v.integrity&&(w.integrity=v.integrity),v.referrerpolicy&&(w.referrerPolicy=v.referrerpolicy),v.crossorigin==="use-credentials"?w.credentials="include":v.crossorigin==="anonymous"?w.credentials="omit":w.credentials="same-origin",w}function E(v){if(v.ep)return;v.ep=!0;const w=h(v);fetch(v.href,w)}})();(function(m,l){typeof J=="object"&&typeof Se<"u"?l(J):typeof define=="function"&&define.amd?define(["exports"],l):l((m=typeof globalThis<"u"?globalThis:m||self).htmlToImage={})})(globalThis,function(m){function l(o,r,c,t){return new(c=c||Promise)(function(n,e){function d(u){try{a(t.next(u))}catch(i){e(i)}}function f(u){try{a(t.throw(u))}catch(i){e(i)}}function a(u){var i;u.done?n(u.value):((i=u.value)instanceof c?i:new c(function(s){s(i)})).then(d,f)}a((t=t.apply(o,r||[])).next())})}function h(o,r){var c,t,n,e={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]},d={next:f(0),throw:f(1),return:f(2)};return typeof Symbol=="function"&&(d[Symbol.iterator]=function(){return this}),d;function f(a){return function(u){var i=[a,u];if(c)throw new TypeError("Generator is already executing.");for(;d&&i[d=0]&&(e=0),e;)try{if(c=1,t&&(n=2&i[0]?t.return:i[0]?t.throw||((n=t.return)&&n.call(t),0):t.next)&&!(n=n.call(t,i[1])).done)return n;switch(t=0,(i=n?[2&i[0],n.value]:i)[0]){case 0:case 1:n=i;break;case 4:return e.label++,{value:i[1],done:!1};case 5:e.label++,t=i[1],i=[0];continue;case 7:i=e.ops.pop(),e.trys.pop();continue;default:if(!((n=0<(n=e.trys).length&&n[n.length-1])||i[0]!==6&&i[0]!==2)){e=0;continue}if(i[0]===3&&(!n||i[1]>n[0]&&i[1]<n[3])){e.label=i[1];break}if(i[0]===6&&e.label<n[1]){e.label=n[1],n=i;break}if(n&&e.label<n[2]){e.label=n[2],e.ops.push(i);break}n[2]&&e.ops.pop(),e.trys.pop();continue}i=r.call(o,e)}catch(s){i=[6,s],t=0}finally{c=n=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}}}var E;E=0;function v(o){for(var r=[],c=0,t=o.length;c<t;c++)r.push(o[c]);return r}function w(o,r){return o=(o.ownerDocument.defaultView||window).getComputedStyle(o).getPropertyValue(r),o?parseFloat(o.replace("px","")):0}function S(o,r){var c,t,n;return{width:(r=r===void 0?{}:r).width||(t=w(c=o,"border-left-width"),n=w(c,"border-right-width"),c.clientWidth+t+n),height:r.height||(t=w(c=o,"border-top-width"),n=w(c,"border-bottom-width"),c.clientHeight+t+n)}}var T=16384;function k(o){return new Promise(function(r,c){var t=new Image;t.decode=function(){return r(t)},t.onload=function(){return r(t)},t.onerror=c,t.crossOrigin="anonymous",t.decoding="async",t.src=o})}function xe(o,r,c){return l(this,void 0,void 0,function(){var t,n;return h(this,function(e){return n="http://www.w3.org/2000/svg",t=document.createElementNS(n,"svg"),n=document.createElementNS(n,"foreignObject"),t.setAttribute("width","".concat(r)),t.setAttribute("height","".concat(c)),t.setAttribute("viewBox","0 0 ".concat(r," ").concat(c)),n.setAttribute("width","100%"),n.setAttribute("height","100%"),n.setAttribute("x","0"),n.setAttribute("y","0"),n.setAttribute("externalResourcesRequired","true"),t.appendChild(n),n.appendChild(o),[2,function(d){return l(this,void 0,void 0,function(){return h(this,function(f){return[2,Promise.resolve().then(function(){return new XMLSerializer().serializeToString(d)}).then(encodeURIComponent).then(function(a){return"data:image/svg+xml;charset=utf-8,".concat(a)})]})})}(t)]})})}var x=function(o,r){return o instanceof r?!0:(o=Object.getPrototypeOf(o),o!==null&&(o.constructor.name===r.name||x(o,r)))};function Z(o,r,c){var t,n,e=window.getComputedStyle(o,c),d=e.getPropertyValue("content");if(d!==""&&d!=="none"){E+=1;var d="u".concat("0000".concat((Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)).concat(E);try{r.className="".concat(r.className," ").concat(d)}catch{return}var f=document.createElement("style");f.appendChild((c=c,e=e,d=".".concat(d=d,":").concat(c),c=e.cssText?(n=(c=e).getPropertyValue("content"),"".concat(c.cssText," content: '").concat(n.replace(/'|"/g,""),"';")):v(t=e).map(function(u){var i=t.getPropertyValue(u),s=t.getPropertyPriority(u);return"".concat(u,": ").concat(i).concat(s?" !important":"",";")}).join(" "),document.createTextNode("".concat(d,"{").concat(c,"}")))),r.appendChild(f)}}var K="application/font-woff",Q="image/jpeg",Te={woff:K,woff2:K,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:Q,jpeg:Q,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function B(o){return o=((o=/\.([^./]*?)$/g.exec(o))?o[1]:"").toLowerCase(),Te[o]||""}function H(o){return o.search(/^(data:)/)!==-1}function ee(o,r){return"data:".concat(r,";base64,").concat(o)}function te(o,r,c){return l(this,void 0,void 0,function(){var t,n;return h(this,function(e){switch(e.label){case 0:return[4,fetch(o,r)];case 1:if((t=e.sent()).status===404)throw new Error('Resource "'.concat(t.url,'" not found'));return[4,t.blob()];case 2:return n=e.sent(),[2,new Promise(function(d,f){var a=new FileReader;a.onerror=f,a.onloadend=function(){try{d(c({res:t,result:a.result}))}catch(u){f(u)}},a.readAsDataURL(n)})]}})})}var j={};function q(o,r,c){return l(this,void 0,void 0,function(){var t,n,e,d;return h(this,function(f){switch(f.label){case 0:if(a=o,u=r,i=c.includeQueryParams,s=a.replace(/\?.*/,""),/ttf|otf|eot|woff2?/i.test(s=i?a:s)&&(s=s.replace(/.*\//,"")),t=u?"[".concat(u,"]").concat(s):s,j[t]!=null)return[2,j[t]];c.cacheBust&&(o+=(/\?/.test(o)?"&":"?")+new Date().getTime()),f.label=1;case 1:return f.trys.push([1,3,,4]),[4,te(o,c.fetchRequestInit,function(p){var g=p.res,p=p.result;return r=r||g.headers.get("Content-Type")||"",p.split(/,/)[1]})];case 2:return n=f.sent(),n=ee(n,r),[3,4];case 3:return e=f.sent(),n=c.imagePlaceholder||"",d="Failed to fetch resource: ".concat(o),(d=e?typeof e=="string"?e:e.message:d)&&console.warn(d),[3,4];case 4:return[2,j[t]=n]}var a,u,i,s})})}function A(o,r,c){return l(this,void 0,void 0,function(){return h(this,function(t){return c||!r.filter||r.filter(o)?[2,Promise.resolve(o).then(function(n){return function(e,d){return l(this,void 0,void 0,function(){return h(this,function(f){return x(e,HTMLCanvasElement)?[2,function(a){return l(this,void 0,void 0,function(){var u;return h(this,function(i){return(u=a.toDataURL())==="data:,"?[2,a.cloneNode(!1)]:[2,k(u)]})})}(e)]:x(e,HTMLVideoElement)?[2,function(a,u){return l(this,void 0,void 0,function(){var i,s;return h(this,function(y){switch(y.label){case 0:return a.currentSrc?(s=document.createElement("canvas"),i=s.getContext("2d"),s.width=a.clientWidth,s.height=a.clientHeight,i!=null&&i.drawImage(a,0,0,s.width,s.height),[2,k(s.toDataURL())]):(i=a.poster,s=B(i),[4,q(i,s,u)]);case 1:return[2,k(y.sent())]}})})}(e,d)]:x(e,HTMLIFrameElement)?[2,function(a){var u;return l(this,void 0,void 0,function(){return h(this,function(i){switch(i.label){case 0:return i.trys.push([0,3,,4]),(u=a==null?void 0:a.contentDocument)!=null&&u.body?[4,A(a.contentDocument.body,{},!0)]:[3,2];case 1:return[2,i.sent()];case 2:return[3,4];case 3:return i.sent(),[3,4];case 4:return[2,a.cloneNode(!1)]}})})}(e)]:[2,e.cloneNode(!1)]})})}(n,r)}).then(function(n){return function(e,d,f){var a;return l(this,void 0,void 0,function(){var u;return h(this,function(i){switch(i.label){case 0:return u=[],(u=e.tagName!=null&&e.tagName.toUpperCase()==="SLOT"&&e.assignedNodes?v(e.assignedNodes()):x(e,HTMLIFrameElement)&&(a=e.contentDocument)!=null&&a.body?v(e.contentDocument.body.childNodes):v(((a=e.shadowRoot)!=null?a:e).childNodes)).length===0||x(e,HTMLVideoElement)?[2,d]:[4,u.reduce(function(s,y){return s.then(function(){return A(y,f)}).then(function(g){g&&d.appendChild(g)})},Promise.resolve())];case 1:return i.sent(),[2,d]}})})}(o,n,r)}).then(function(n){return e=o,x(n=n,Element)&&(u=e,(y=(i=n).style)&&((s=window.getComputedStyle(u)).cssText?(y.cssText=s.cssText,y.transformOrigin=s.transformOrigin):v(s).forEach(function(g){var p,b=s.getPropertyValue(g);g==="font-size"&&b.endsWith("px")&&(p=Math.floor(parseFloat(b.substring(0,b.length-2)))-.1,b="".concat(p,"px")),x(u,HTMLIFrameElement)&&g==="display"&&b==="inline"&&(b="block"),g==="d"&&i.getAttribute("d")&&(b="path(".concat(i.getAttribute("d"),")")),y.setProperty(g,b,s.getPropertyPriority(g))})),Z(f=e,a=n,":before"),Z(f,a,":after"),f=n,x(a=e,HTMLTextAreaElement)&&(f.innerHTML=a.value),x(a,HTMLInputElement)&&f.setAttribute("value",a.value),f=n,x(d=e,HTMLSelectElement)&&(f=Array.from(f.children).find(function(g){return d.value===g.getAttribute("value")}))&&f.setAttribute("selected","")),n;var e,d,f,a,u,i,s,y}).then(function(n){return function(e,d){return l(this,void 0,void 0,function(){var f,a,u,i,s,y,g,p,b,I;return h(this,function(L){switch(L.label){case 0:if((f=e.querySelectorAll?e.querySelectorAll("use"):[]).length===0)return[2,e];a={},I=0,L.label=1;case 1:return I<f.length?(p=f[I],(p=p.getAttribute("xlink:href"))?(g=e.querySelector(p),u=document.querySelector(p),g||!u||a[p]?[3,3]:(i=a,s=p,[4,A(u,d,!0)])):[3,3]):[3,4];case 2:i[s]=L.sent(),L.label=3;case 3:return I++,[3,1];case 4:if((y=Object.values(a)).length){for(g="http://www.w3.org/1999/xhtml",(p=document.createElementNS(g,"svg")).setAttribute("xmlns",g),p.style.position="absolute",p.style.width="0",p.style.height="0",p.style.overflow="hidden",p.style.display="none",b=document.createElementNS(g,"defs"),p.appendChild(b),I=0;I<y.length;I++)b.appendChild(y[I]);e.appendChild(p)}return[2,e]}})})}(n,r)})]:[2,null]})})}var ne=/url\((['"]?)([^'"]+?)\1\)/g,Ie=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,Le=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function re(o){return o.search(ne)!==-1}function oe(o,r,c){return l(this,void 0,void 0,function(){var t;return h(this,function(n){return re(o)?(d=o,f=c.preferredFontFormat,t=f?d.replace(Le,function(a){for(;;){var i=Ie.exec(a)||[],u=i[0],i=i[2];if(!i)return"";if(i===f)return"src: ".concat(u,";")}}):d,e=[],t.replace(ne,function(a,u,i){return e.push(i),a}),[2,e.filter(function(a){return!H(a)}).reduce(function(a,u){return a.then(function(i){return function(s,y,g,p,b){return l(this,void 0,void 0,function(){var I,L,N,fe;return h(this,function(R){switch(R.label){case 0:return R.trys.push([0,5,,6]),I=g?function(C,me){if(C.match(/^[a-z]+:\/\//i))return C;if(C.match(/^\/\//))return window.location.protocol+C;if(C.match(/^[a-z]+:/i))return C;var D=document.implementation.createHTMLDocument(),ge=D.createElement("base"),F=D.createElement("a");return D.head.appendChild(ge),D.body.appendChild(F),me&&(ge.href=me),F.href=C,F.href}(y,g):y,L=B(y),N=void 0,b?[4,b(I)]:[3,2];case 1:return fe=R.sent(),N=ee(fe,L),[3,4];case 2:return[4,q(I,L,p)];case 3:N=R.sent(),R.label=4;case 4:return[2,s.replace((he=y.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1"),new RegExp(`(url\\(['"]?)(`.concat(he,`)(['"]?\\))`),"g")),"$1".concat(N,"$3"))];case 5:return R.sent(),[3,6];case 6:return[2,s]}var he})})}(i,u,r,c)})},Promise.resolve(t))]):[2,o];var e,d,f})})}function _(o,r,c){var t;return l(this,void 0,void 0,function(){var n;return h(this,function(e){switch(e.label){case 0:return(n=(t=r.style)==null?void 0:t.getPropertyValue(o))?[4,oe(n,null,c)]:[3,2];case 1:return n=e.sent(),r.style.setProperty(o,n,r.style.getPropertyPriority(o)),[2,!0];case 2:return[2,!1]}})})}function ie(o,r){return l(this,void 0,void 0,function(){return h(this,function(c){switch(c.label){case 0:return x(o,Element)?[4,function(t,n){return l(this,void 0,void 0,function(){return h(this,function(e){switch(e.label){case 0:return[4,_("background",t,n)];case 1:return e.sent()?[3,3]:[4,_("background-image",t,n)];case 2:e.sent(),e.label=3;case 3:return[4,_("mask",t,n)];case 4:return e.sent()?[3,6]:[4,_("mask-image",t,n)];case 5:e.sent(),e.label=6;case 6:return[2]}})})}(o,r)]:[3,4];case 1:return c.sent(),[4,function(t,n){return l(this,void 0,void 0,function(){var e,d,f;return h(this,function(a){switch(a.label){case 0:return(e=x(t,HTMLImageElement))&&!H(t.src)||x(t,SVGImageElement)&&!H(t.href.baseVal)?[4,q(d=e?t.src:t.href.baseVal,B(d),n)]:[2];case 1:return f=a.sent(),[4,new Promise(function(u,i){t.onload=u,t.onerror=i,i=t,i.decode&&(i.decode=u),i.loading==="lazy"&&(i.loading="eager"),e?(t.srcset="",t.src=f):t.href.baseVal=f})];case 2:return a.sent(),[2]}})})}(o,r)];case 2:return c.sent(),[4,function(t,n){return l(this,void 0,void 0,function(){var e;return h(this,function(d){switch(d.label){case 0:return e=v(t.childNodes),e=e.map(function(f){return ie(f,n)}),[4,Promise.all(e).then(function(){return t})];case 1:return d.sent(),[2]}})})}(o,r)];case 3:c.sent(),c.label=4;case 4:return[2]}})})}var ce={};function ae(o){return l(this,void 0,void 0,function(){var r,c;return h(this,function(t){switch(t.label){case 0:return(r=ce[o])!=null?[2,r]:[4,fetch(o)];case 1:return[4,t.sent().text()];case 2:return c=t.sent(),r={url:o,cssText:c},[2,ce[o]=r]}})})}function se(o,r){return l(this,void 0,void 0,function(){var c,t,n,e=this;return h(this,function(d){return c=o.cssText,t=/url\(["']?([^"')]+)["']?\)/g,n=c.match(/url\([^)]+\)/g)||[],n=n.map(function(f){return l(e,void 0,void 0,function(){var a;return h(this,function(u){return[2,te(a=(a=f.replace(t,"$1")).startsWith("https://")?a:new URL(a,o.url).href,r.fetchRequestInit,function(i){return i=i.result,c=c.replace(f,"url(".concat(i,")")),[f,i]})]})})}),[2,Promise.all(n).then(function(){return c})]})})}function ue(o){if(o==null)return[];for(var r=[],c=o.replace(/(\/\*[\s\S]*?\*\/)/gi,""),t=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");(n=t.exec(c))!==null;)r.push(n[0]);for(var n,c=c.replace(t,""),e=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,d=new RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})","gi");;){if((n=e.exec(c))===null){if((n=d.exec(c))===null)break;e.lastIndex=d.lastIndex}else d.lastIndex=e.lastIndex;r.push(n[0])}return r}function Ce(o,r){return l(this,void 0,void 0,function(){return h(this,function(c){switch(c.label){case 0:if(o.ownerDocument==null)throw new Error("Provided element is not within a Document");return[4,function(t,n){return l(this,void 0,void 0,function(){var e,d;return h(this,function(f){return e=[],d=[],t.forEach(function(a){if("cssRules"in a)try{v(a.cssRules||[]).forEach(function(i,s){var y;i.type===CSSRule.IMPORT_RULE&&(y=s+1,s=ae(i.href).then(function(g){return se(g,n)}).then(function(g){return ue(g).forEach(function(p){try{a.insertRule(p,p.startsWith("@import")?y+=1:a.cssRules.length)}catch(b){console.error("Error inserting rule from remote css",{rule:p,error:b})}})}).catch(function(g){console.error("Error loading remote css",g.toString())}),d.push(s))})}catch(i){var u=t.find(function(s){return s.href==null})||document.styleSheets[0];a.href!=null&&d.push(ae(a.href).then(function(s){return se(s,n)}).then(function(s){return ue(s).forEach(function(y){u.insertRule(y,a.cssRules.length)})}).catch(function(s){console.error("Error loading remote stylesheet",s)})),console.error("Error inlining remote css file",i)}}),[2,Promise.all(d).then(function(){return t.forEach(function(a){if("cssRules"in a)try{v(a.cssRules||[]).forEach(function(u){e.push(u)})}catch(u){console.error("Error while reading CSS rules from ".concat(a.href),u)}}),e})]})})}(v(o.ownerDocument.styleSheets),r)];case 1:return[2,c.sent().filter(function(t){return t.type===CSSRule.FONT_FACE_RULE}).filter(function(t){return re(t.style.getPropertyValue("src"))})]}})})}function le(o,r){return l(this,void 0,void 0,function(){var c;return h(this,function(t){switch(t.label){case 0:return[4,Ce(o,r)];case 1:return c=t.sent(),[4,Promise.all(c.map(function(n){var e=n.parentStyleSheet?n.parentStyleSheet.href:null;return oe(n.cssText,e,r)}))];case 2:return[2,t.sent().join(`
`)]}})})}function de(o,r){return r===void 0&&(r={}),l(this,void 0,void 0,function(){var c,t,n;return h(this,function(e){switch(e.label){case 0:return t=S(o,r),c=t.width,t=t.height,[4,A(o,r,!0)];case 1:return[4,function(u,i){return l(this,void 0,void 0,function(){var s,y,g,p;return h(this,function(b){switch(b.label){case 0:return i.fontEmbedCSS==null?[3,1]:(s=i.fontEmbedCSS,[3,5]);case 1:return i.skipFonts?(y=null,[3,4]):[3,2];case 2:return[4,le(u,i)];case 3:y=b.sent(),b.label=4;case 4:s=y,b.label=5;case 5:return(p=s)&&(g=document.createElement("style"),p=document.createTextNode(p),g.appendChild(p),u.firstChild?u.insertBefore(g,u.firstChild):u.appendChild(g)),[2]}})})}(n=e.sent(),r)];case 2:return e.sent(),[4,ie(n,r)];case 3:return e.sent(),d=r,f=n.style,d.backgroundColor&&(f.backgroundColor=d.backgroundColor),d.width&&(f.width="".concat(d.width,"px")),d.height&&(f.height="".concat(d.height,"px")),(a=d.style)!=null&&Object.keys(a).forEach(function(u){f[u]=a[u]}),[4,xe(n,c,t)];case 4:return[2,e.sent()]}var d,f,a})})}function P(o,r){return r===void 0&&(r={}),l(this,void 0,void 0,function(){var c,t,n,e,d,f,a,u;return h(this,function(i){switch(i.label){case 0:return t=S(o,r),c=t.width,t=t.height,[4,de(o,r)];case 1:return[4,k(i.sent())];case 2:return n=i.sent(),e=document.createElement("canvas"),d=e.getContext("2d"),f=r.pixelRatio||function(){var y;try{g=process}catch{}var g=g&&g.env?g.env.devicePixelRatio:null;return g&&(y=parseInt(g,10),Number.isNaN(y)&&(y=1)),y||window.devicePixelRatio||1}(),a=r.canvasWidth||c,u=r.canvasHeight||t,e.width=a*f,e.height=u*f,r.skipAutoScale||((s=e).width>T||s.height>T)&&(s.width>T&&s.height>T?s.width>s.height?(s.height*=T/s.width,s.width=T):(s.width*=T/s.height,s.height=T):s.width>T?(s.height*=T/s.width,s.width=T):(s.width*=T/s.height,s.height=T)),e.style.width="".concat(a),e.style.height="".concat(u),r.backgroundColor&&(d.fillStyle=r.backgroundColor,d.fillRect(0,0,e.width,e.height)),d.drawImage(n,0,0,e.width,e.height),[2,e]}var s})})}m.getFontEmbedCSS=function(o,r){return r===void 0&&(r={}),l(this,void 0,void 0,function(){return h(this,function(c){return[2,le(o,r)]})})},m.toBlob=function(o,r){return r===void 0&&(r={}),l(this,void 0,void 0,function(){return h(this,function(c){switch(c.label){case 0:return[4,P(o,r)];case 1:return[4,(t=c.sent(),n===void 0&&(n={}),t.toBlob?new Promise(function(e){t.toBlob(e,n.type||"image/png",n.quality||1)}):new Promise(function(e){for(var d=window.atob(t.toDataURL(n.type||void 0,n.quality||void 0).split(",")[1]),f=d.length,a=new Uint8Array(f),u=0;u<f;u+=1)a[u]=d.charCodeAt(u);e(new Blob([a],{type:n.type||"image/png"}))}))];case 2:return[2,c.sent()]}var t,n})})},m.toCanvas=P,m.toJpeg=function(o,r){return r===void 0&&(r={}),l(this,void 0,void 0,function(){return h(this,function(c){switch(c.label){case 0:return[4,P(o,r)];case 1:return[2,c.sent().toDataURL("image/jpeg",r.quality||1)]}})})},m.toPixelData=function(o,r){return r===void 0&&(r={}),l(this,void 0,void 0,function(){var c,t;return h(this,function(n){switch(n.label){case 0:return t=S(o,r),c=t.width,t=t.height,[4,P(o,r)];case 1:return[2,n.sent().getContext("2d").getImageData(0,0,c,t).data]}})})},m.toPng=function(o,r){return r===void 0&&(r={}),l(this,void 0,void 0,function(){return h(this,function(c){switch(c.label){case 0:return[4,P(o,r)];case 1:return[2,c.sent().toDataURL()]}})})},m.toSvg=de});const we=document.getElementById("my_table"),pe=document.getElementById("add_row_form"),V=document.getElementById("columns_input"),Pe=document.getElementById("reset_button"),X=document.getElementById("edit_dialog"),$=document.getElementById("edit_form"),z=document.getElementById("search_work_input"),Y=document.getElementById("search_result"),ve=document.getElementById("img_file_input"),O=document.getElementById("img_container"),M=document.getElementById("img_preview"),ye=document.getElementById("description"),ke=document.getElementById("cancel"),U=document.getElementById("save_button");let W;function be({numColumns:m,descriptionList:l}){const h=document.getElementById("my_table");l?m=l.length:m||(m=h.rows[0].cells.length);function E(w,S){return parseInt(Math.random()*(S-w)+w)}const v=h.insertRow(-1);for(let w=0;w<m;w++){const S=v.insertCell(w);l?G(S,"https://picsum.photos/"+E(250,300)+"/"+E(400,450),l[w]):G(S,"https://picsum.photos/"+E(250,300)+"/"+E(400,450),"點擊輸入")}}function G(m,l,h){m.innerHTML=`<div class="cell-wrapper"><img src="${l}" alt="${l}" ><div>${h}</div></div>`}$.addEventListener("submit",function(m){m.preventDefault(),G(W,M.src,ye.value),M.src="",X.style.display="none",$.reset(),Y.innerHTML=""});ke.addEventListener("click",function(){X.style.display="none"});function Ee(m){const l=new FileReader;l.addEventListener("load",function(){M.src=l.result}),l.readAsDataURL(m)}ve.addEventListener("change",function(){const m=ve.files[0];Ee(m)});$.addEventListener("paste",function(m){const l=m.clipboardData||window.clipboardData;if(!l)return;const h=[...l.items].find(E=>E.type.includes("image"));(h==null?void 0:h.kind)==="file"&&Ee(h.getAsFile())});we.addEventListener("click",function(m){X.style.display="block",W=m.target.closest("td"),ye.value=W.querySelector("div").innerText,z.focus()});Pe.addEventListener("click",function(){V.disabled=!1,we.innerHTML=""});pe.addEventListener("submit",function(m){m.preventDefault(),V.disabled=!0,be({numColumns:V.value}),pe.reset()});U.addEventListener("click",async function(){const m=document.getElementById("table_container");U.innerText="載入中...";try{const l=await htmlToImage.toJpeg(m,{quality:.96}),h=document.createElement("a");h.download="output.png",h.href=l,h.click()}catch(l){console.error(l)}U.innerText="儲存"});function Ae(m){for(const l of m)be({descriptionList:l})}z.addEventListener("keydown",async function(m){if(m.key==="Enter"){m.preventDefault();const l=z.value,h=await _e(l);Ne(h)}});async function _e(m){if(m==="")return;m=encodeURIComponent(m.trim());const l=`https://zh.wikipedia.org/w/api.php?action=query&lllimit=500&prop=langlinks&titles=${m}&format=json&origin=*`;try{const E=await(await fetch(l)).json();if(Object.values(E.query.pages).length===0)return;const v=Object.values(E.query.pages)[0].langlinks;if(v){for(const w of v)if(w.lang==="ja"){let S=w["*"];return S=S.replace(" (漫画)",""),S}}}catch(h){console.error(h)}Y.innerHTML=`<a href="https://www.google.com/search?tbm=isch&q=${m}" target="_blank">在Google圖片搜尋</a><div>右鍵複製圖片後在此貼上</div>`}async function Ne(m){m=encodeURIComponent(m.trim());const l=`https://api.annict.com/v1/works?access_token=i9quZw-J6jj0w8hoptlDIioN83BuNUfXZpAYV7Co_YE&fields=images,title,twitter_username&filter_title=${m}`;try{const E=await(await fetch(l)).json();O.innerHTML="";for(const v of E.works)if(v.images.recommended_url!==""){const w=document.createElement("img");w.src=v.images.recommended_url,w.addEventListener("click",function(){M.src=w.src,O.innerHTML=""}),O.appendChild(w)}Y.innerHTML=`<div>找不到結果嗎？試著</div><a href="https://www.google.com/search?tbm=isch&q=${m}" target="_blank">在Google圖片搜尋</a> or <a href="https://annict.com/search?q=${m}" target="_blank">在Annict上搜尋</a><div>右鍵複製圖片後在此貼上</div>`}catch(h){console.log(h)}}const De=[["入坑作","最喜歡","看最多次","最想安利","最佳劇情"],["最佳畫面","最佳配樂","最佳配音","最治癒","最感動"],["最虐心","最被低估","最過譽","最離譜","最討厭"]];Ae(De)});export default Me();
