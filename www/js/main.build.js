!function(e,t){"use strict";"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():e.ContactForm=t()}(this,function(){"use strict";var e=function(t,n){if(!(this&&this instanceof e))return new e(t,n);t&&n&&(this.form=t instanceof Node?t:document.querySelector(t),this.endpoint=n.endpoint,this.send())};return e.prototype={hasClass:function(e,t){return new RegExp("(\\s|^)"+t+"(\\s|$)").test(e.className)},addClass:function(e,t){this.hasClass(e,t)||(e.className+=(e.className?" ":"")+t)},removeClass:function(e,t){this.hasClass(e,t)&&(e.className=e.className.replace(new RegExp("(\\s|^)"+t+"(\\s|$)")," ").replace(/^\s+|\s+$/g,""))},each:function(e,t){var n,s;for(n=0,s=e.length;n<s;n+=1)t(e[n],n,e)},template:function(e,t){var n;for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e=e.replace(new RegExp("{"+n+"}","g"),t[n]));return e},empty:function(e){for(;e.firstChild;)e.removeChild(e.firstChild)},removeElementsByClass:function(e){for(var t=document.getElementsByClassName(e);t.length>0;)t[0].parentNode.removeChild(t[0])},post:function(e,t,n,s){var i=new XMLHttpRequest;i.open("POST",e,!0),i.setRequestHeader("X-Requested-With","XMLHttpRequest"),i.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),i.onreadystatechange=function(){if(4===this.readyState)if(200===this.status){var e="";try{e=JSON.parse(this.responseText)}catch(t){e=this.responseText}n.call(this,e)}else s.call(this,this.responseText)},i.send(t),i=null},param:function(e){return"string"==typeof e?e:Object.keys(e).map(function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])}).join("&")},send:function(){this.form.addEventListener("submit",function(e){e.preventDefault();var t,n=document.querySelectorAll(".form-control");this.each(n,function(e,t){this.hasClass(e.parentNode,"has-error")&&(this.removeClass(e.parentNode,"has-error"),this.removeElementsByClass("help-block"))}.bind(this)),t={name:document.querySelector('input[name="form-name"]').value,email:document.querySelector('input[name="form-email"]').value,subject:document.querySelector('input[name="form-subject"]').value,message:document.querySelector('textarea[name="form-message"]').value},this.post(this.endpoint,this.param(t),this.feedback.bind(this),this.fail.bind(this))}.bind(this),!1)},feedback:function(e){if(e.success){var t=this.template('<div class="container alert alert-success">{report} <p><a href="#" title="Retour" class="btn btn-link" id="hide-form">Retour</a></p></div>',{report:e.message});this.empty(this.form),this.form.insertAdjacentHTML("beforeend",t),document.getElementById("hide-form").addEventListener("click",function(e){e.preventDefault(),document.body.classList.remove("visible-contact")})}else{if(e.errors.name){var n=document.querySelector('input[name="form-name"]').parentNode;this.addClass(n,"has-error"),r=this.template('<span class="help-block">{report}</span>',{report:e.errors.name}),n.insertAdjacentHTML("beforeend",r)}if(e.errors.email){var s=document.querySelector('input[name="form-email"]').parentNode;this.addClass(s,"has-error"),r=this.template('<span class="help-block">{report}</span>',{report:e.errors.email}),s.insertAdjacentHTML("beforeend",r)}if(e.errors.subject){var i=document.querySelector('input[name="form-subject"]').parentNode;this.addClass(i,"has-error"),r=this.template('<span class="help-block">{report}</span>',{report:e.errors.subject}),i.insertAdjacentHTML("beforeend",r)}if(e.errors.message){var r,o=document.querySelector('textarea[name="form-message"]').parentNode;this.addClass(o,"has-error"),r=this.template('<span class="help-block">{report}</span>',{report:e.errors.message}),o.insertAdjacentHTML("beforeend",r)}}},fail:function(e){console.log(e)}},e}),function(e,t,n){"use strict";var s=function(e,n){this.el=this.isString(e)?t.querySelectorAll(e):e,NodeList.prototype.isPrototypeOf(this.el)&&(this.config=[],this.options=n,this.selectors=[],this.init(),this.destroy=function(){this.loop(function(e){e.removeEventListener("reset",this.events.reset),this.removeClasses(e)},function(e){this.reset(e)})},this.rebuild=function(){this.loop(null,function(e){this.floatLabel(e,!0)})})};s.prototype={defaults:{customEvent:null,customLabel:null,customPlaceholder:null,exclude:".no-label",inputRegex:/email|number|password|search|tel|text|url/,prefix:"fl-",prioritize:"label",requiredClass:"required",style:0,transform:"input,select,textarea"},init:function(){this.initEvents(),this.loop(function(e,t){var n=this.config[t].style;e.addEventListener("reset",this.events.reset),e.classList.add(this.prefixed("form")),n&&e.classList.add(this.prefixed("style-"+n))},function(e){this.floatLabel(e)})},initEvents:function(){this.events={blur:this.onBlur.bind(this),change:this.onInput.bind(this),focus:this.onFocus.bind(this),input:this.onInput.bind(this),reset:this.onReset.bind(this)}},build:function(e){var t=this.getLabel(e);t&&(e.classList.add(this.prefixed(e.tagName.toLowerCase())),this.setLabel(t,e),this.setPlaceholder(t,e),this.wrapLabel(t,e),this.handleEvents(e,"add"),"function"==typeof this.config[this.current].customEvent&&this.config[this.current].customEvent.call(this,e))},createEl:function(e,n){var s="string"==typeof e?t.createElement(e):e;n=n||{};for(var i in n)n.hasOwnProperty(i)&&s.setAttribute(i,n[i]);return s},extend:function(){var e=[].slice.call(arguments),t=e[0],n=e.slice(1);return Object.keys(n).forEach(function(e){for(var s in n[e])n[e].hasOwnProperty(s)&&(t[s]=n[e][s])}),t},floatLabel:function(e,t){if(e.getAttribute("id")&&("INPUT"!==e.tagName||this.config[this.current].inputRegex.test(e.getAttribute("type")))){if(this.hasParent(e)){if(!0!==t)return;this.reset(e)}this.build(e)}},getLabel:function(e){var t='label[for="'+e.getAttribute("id")+'"]',n=this.el[this.current].querySelectorAll(t);return n.length>1&&(n=e.parentNode.querySelectorAll(t)),1===n.length&&n[0]},getLabelText:function(e,t){var n=e.textContent.replace(/[*:]/g,"").trim(),s=t.getAttribute("placeholder");return(!n||n&&s&&"placeholder"===this.config[this.current].prioritize)&&(n=s),n},handleEvents:function(e,t){var n=this.events;["blur","input","focus"].forEach(function(s){"file"===e.type&&"input"===s&&(s="change"),e[t+"EventListener"](s,n[s])})},hasParent:function(e){return e.parentNode.classList.contains(this.prefixed("wrap"))},isString:function(e){return"[object String]"===Object.prototype.toString.call(e)},loop:function(e,t){for(var n=0;n<this.el.length;++n){if(void 0===this.selectors[n]){var s=this.extend({},this.defaults,this.options,this.el[n].getAttribute("data-options")),i=":not("+s.exclude.split(/[\s,]+/).join("):not(")+")";this.selectors[n]=s.transform.replace(/,/g,i+",")+i,this.config[n]=s}var r=this.el[n].querySelectorAll(this.selectors[n]);this.current=n,"function"==typeof e&&e.call(this,this.el[n],n);for(var o=0;o<r.length;++o)"function"==typeof t&&t.call(this,r[o],n)}},onBlur:function(e){e.target.parentNode.classList.remove(this.prefixed("has-focus"))},onInput:function(e){var t=e.target.value.length?"add":"remove";e.target.parentNode.classList[t](this.prefixed("is-active"))},onFocus:function(e){e.target.parentNode.classList.add(this.prefixed("has-focus"))},onReset:function(){for(var e=this.el[this.current].querySelectorAll(this.selectors[this.current]),t=0;t<e.length;++t)e[t].parentNode.classList.remove(this.prefixed("is-active"))},prefixed:function(e){return this.config[this.current].prefix+e},removeClasses:function(e){var t=this.config[this.current].prefix,n=e.className.split(" ").filter(function(e){return 0!==e.lastIndexOf(t,0)});e.className=n.join(" ").trim()},reset:function(e){var n=e.parentNode;if(this.hasParent(e)){for(var s=t.createDocumentFragment();n.firstElementChild;){var i=n.firstElementChild;this.removeClasses(i),s.appendChild(i)}n.parentNode.replaceChild(s,n),this.resetPlaceholder(e),this.handleEvents(e,"remove")}},resetPlaceholder:function(e){var t=e.getAttribute("data-placeholder");null!==t&&(e.removeAttribute("data-placeholder"),e.setAttribute("placeholder",t))},setLabel:function(e,t){e.classList.add(this.prefixed("label")),e.textContent=this.getLabelText(e,t),"function"==typeof this.config[this.current].customLabel&&(e.textContent=this.config[this.current].customLabel.call(this,e,t))},setPlaceholder:function(e,t){var n=t.getAttribute("placeholder");"label"!==this.config[this.current].prioritize&&n||(n&&t.setAttribute("data-placeholder",n),n=this.getLabelText(e,t)),"function"==typeof this.config[this.current].customPlaceholder&&(n=this.config[this.current].customPlaceholder.call(this,n,t,e)),"SELECT"===t.tagName?this.setSelectPlaceholder(t,n):t.setAttribute("placeholder",n)},setSelectPlaceholder:function(e,t){var n=e.firstElementChild;n.hasAttribute("value")&&n.value?e.insertBefore(new Option(t,"",!0,!0),n):n.setAttribute("value",""),""===n.textContent&&(n.textContent=t)},wrapLabel:function(e,t){var n=this.createEl("div",{class:this.prefixed("wrap")+" "+this.prefixed("wrap-"+t.tagName.toLowerCase())});t.hasAttribute("value")&&t.value.length&&n.classList.add(this.prefixed("is-active")),(null!==t.getAttribute("required")||t.classList.contains(this.config[this.current].requiredClass))&&n.classList.add(this.prefixed("is-required")),t.parentNode.insertBefore(n,t),n.appendChild(e),n.appendChild(t)}},e.FloatLabels=s}(window,document),function(){function e(){var e=document.getElementById("showForm"),t=document.getElementById("showAbout"),n=document.getElementsByClassName("close");e.addEventListener("click",function(e){e.preventDefault(),document.body.classList.add("visible-contact"),ga("send",{hitType:"event",eventCategory:"Modal",eventAction:"show",eventLabel:"Show Contact"})}),t.addEventListener("click",function(e){e.preventDefault(),document.body.classList.add("visible-about"),ga("send",{hitType:"event",eventCategory:"Modal",eventAction:"show",eventLabel:"Show About"})}),Array.from(n).forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),document.body.classList.remove("visible-contact","visible-about")})}),document.onkeydown=function(e){("key"in(e=e||window.event)?"Escape"==e.key||"Esc"==e.key:27==e.keyCode)&&document.body.classList.remove("visible-contact","visible-about")}}function t(){document.getElementById("download-resume").addEventListener("click",function(){ga("send",{hitType:"event",eventCategory:"Pdf",eventAction:"download",eventLabel:"Download Resume"})})}window.onload=function(){document.body.className="",e(),t()},window.ontouchmove=function(){return!1},window.onorientationchange=function(){document.body.scrollTop=0},console.log("Sinon, on peut aussi discuter autour d'un 🍵 ou d'une 🍺 !");new FloatLabels("form",{style:2})}();
//# sourceMappingURL=main.build.js.map
