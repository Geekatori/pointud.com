!function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.p="",__webpack_require__(0)}([function(module,exports,__webpack_require__){module.exports=__webpack_require__(1)},function(module,exports,__webpack_require__){__webpack_require__(2),__webpack_require__(3),__webpack_require__(4)},function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;!function(root,factory){"use strict";__WEBPACK_AMD_DEFINE_ARRAY__=[],__WEBPACK_AMD_DEFINE_FACTORY__=factory,__WEBPACK_AMD_DEFINE_RESULT__="function"==typeof __WEBPACK_AMD_DEFINE_FACTORY__?__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__):__WEBPACK_AMD_DEFINE_FACTORY__,!(void 0!==__WEBPACK_AMD_DEFINE_RESULT__&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))}(this,function(){"use strict";var ContactForm=function(form,options){return this&&this instanceof ContactForm?void(form&&options&&(this.form=form instanceof Node?form:document.querySelector(form),this.endpoint=options.endpoint,this.send())):new ContactForm(form,options)};return ContactForm.prototype={hasClass:function(el,name){return new RegExp("(\\s|^)"+name+"(\\s|$)").test(el.className)},addClass:function(el,name){this.hasClass(el,name)||(el.className+=(el.className?" ":"")+name)},removeClass:function(el,name){this.hasClass(el,name)&&(el.className=el.className.replace(new RegExp("(\\s|^)"+name+"(\\s|$)")," ").replace(/^\s+|\s+$/g,""))},each:function(collection,iterator){var i,len;for(i=0,len=collection.length;i<len;i+=1)iterator(collection[i],i,collection)},template:function(string,data){var piece;for(piece in data)Object.prototype.hasOwnProperty.call(data,piece)&&(string=string.replace(new RegExp("{"+piece+"}","g"),data[piece]));return string},empty:function(el){for(;el.firstChild;)el.removeChild(el.firstChild)},removeElementsByClass:function(className){for(var elements=document.getElementsByClassName(className);elements.length>0;)elements[0].parentNode.removeChild(elements[0])},post:function(path,data,success,fail){var xhttp=new XMLHttpRequest;xhttp.open("POST",path,!0),xhttp.setRequestHeader("X-Requested-With","XMLHttpRequest"),xhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),xhttp.onreadystatechange=function(){if(4===this.readyState)if(200===this.status){var response="";try{response=JSON.parse(this.responseText)}catch(err){response=this.responseText}success.call(this,response)}else fail.call(this,this.responseText)},xhttp.send(data),xhttp=null},param:function(data){var params="string"==typeof data?data:Object.keys(data).map(function(k){return encodeURIComponent(k)+"="+encodeURIComponent(data[k])}).join("&");return params},send:function(){this.form.addEventListener("submit",function(e){e.preventDefault();var formData,elements=document.querySelectorAll(".form-control");this.each(elements,function(el,i){this.hasClass(el.parentNode,"has-error")&&(this.removeClass(el.parentNode,"has-error"),this.removeElementsByClass("help-block"))}.bind(this)),formData={name:document.querySelector('input[name="form-name"]').value,email:document.querySelector('input[name="form-email"]').value,subject:document.querySelector('input[name="form-subject"]').value,message:document.querySelector('textarea[name="form-message"]').value},this.post(this.endpoint,this.param(formData),this.feedback.bind(this),this.fail.bind(this))}.bind(this),!1)},feedback:function(data){if(data.success){var success=this.template('<div class="alert alert-success">{report} <p><a href="#" title="Retour" id="hide-form">Retour</a></p></div>',{report:data.message});this.empty(this.form),this.form.insertAdjacentHTML("beforeend",success);var okFrm=document.getElementById("hide-form");okFrm.addEventListener("click",function(e){e.preventDefault(),document.body.classList.remove("visible-contact")})}else{if(data.errors.name){var error,name=document.querySelector('input[name="form-name"]').parentNode;this.addClass(name,"has-error"),error=this.template('<span class="help-block">{report}</span>',{report:data.errors.name}),name.insertAdjacentHTML("beforeend",error)}if(data.errors.email){var error,email=document.querySelector('input[name="form-email"]').parentNode;this.addClass(email,"has-error"),error=this.template('<span class="help-block">{report}</span>',{report:data.errors.email}),email.insertAdjacentHTML("beforeend",error)}if(data.errors.subject){var error,subject=document.querySelector('input[name="form-subject"]').parentNode;this.addClass(subject,"has-error"),error=this.template('<span class="help-block">{report}</span>',{report:data.errors.subject}),subject.insertAdjacentHTML("beforeend",error)}if(data.errors.message){var error,message=document.querySelector('textarea[name="form-message"]').parentNode;this.addClass(message,"has-error"),error=this.template('<span class="help-block">{report}</span>',{report:data.errors.message}),message.insertAdjacentHTML("beforeend",error)}}},fail:function(data){console.log(data)}},ContactForm})},function(module,exports){!function(window,document,undefined){"use strict";var Plugin=function(el,options){this.el=this.isString(el)?document.querySelectorAll(el):el,NodeList.prototype.isPrototypeOf(this.el)&&(this.config=[],this.options=options,this.selectors=[],this.init(),this.destroy=function(){this.loop(function(el){el.removeEventListener("reset",this.events.reset),this.removeClasses(el)},function(field){this.reset(field)})},this.rebuild=function(){this.loop(null,function(field){this.floatLabel(field,!0)})})};Plugin.prototype={defaults:{customEvent:null,customLabel:null,exclude:".no-label",inputRegex:/email|number|password|search|tel|text|url/,prefix:"fl-",prioritize:"label",requiredClass:"required",style:0,transform:"input,select,textarea"},init:function(){this.initEvents(),this.loop(function(el,i){var style=this.config[i].style;el.addEventListener("reset",this.events.reset),el.classList.add(this.prefixed("form")),style&&el.classList.add(this.prefixed("style-"+style))},function(field){this.floatLabel(field)})},initEvents:function(){this.events={blur:this.onBlur.bind(this),focus:this.onFocus.bind(this),input:this.onChange.bind(this),reset:this.onReset.bind(this)}},build:function(el){var labelEl=this.getLabel(el);if(labelEl){var labelText=this.getLabelText(labelEl,el);el.classList.add(this.prefixed(el.tagName.toLowerCase())),labelEl.classList.add(this.prefixed("label")),labelEl.text=labelText,this.setPlaceholder(labelText,el),this.wrapLabel(labelEl,el),this.handleEvents(el,"add"),"function"==typeof this.config[this.current].customEvent&&this.config[this.current].customEvent.call(this,el)}},createEl:function(tag,attributes){var el="string"==typeof tag?document.createElement(tag):tag;attributes=attributes||{};for(var key in attributes)attributes.hasOwnProperty(key)&&el.setAttribute(key,attributes[key]);return el},extend:function(){var args=[].slice.call(arguments),result=args[0],extenders=args.slice(1);return Object.keys(extenders).forEach(function(i){for(var key in extenders[i])extenders[i].hasOwnProperty(key)&&(result[key]=extenders[i][key])}),result},floatLabel:function(el,rebuild){if(el.getAttribute("id")&&("INPUT"!==el.tagName||this.config[this.current].inputRegex.test(el.getAttribute("type")))){if(this.hasParent(el)){if(rebuild!==!0)return;this.reset(el)}this.build(el)}},getLabel:function(el){var label='label[for="'+el.getAttribute("id")+'"]',labelEl=this.el[this.current].querySelectorAll(label);return labelEl.length>1&&(labelEl=el.parentNode.querySelectorAll(label)),1===labelEl.length&&labelEl[0]},getLabelText:function(labelEl,el){var labelText=labelEl.textContent.replace(/[*:]/g,"").trim(),placeholderText=el.getAttribute("placeholder");if((!labelText||labelText&&placeholderText&&"placeholder"===this.config[this.current].prioritize)&&(labelText=placeholderText),"function"==typeof this.config[this.current].customLabel){var customLabel=this.config[this.current].customLabel.call(this,labelEl,el);customLabel!==undefined&&(labelText=customLabel)}return labelText},handleEvents:function(el,action){var events=this.events;["blur","input","focus"].forEach(function(event){el[action+"EventListener"](event,events[event])})},hasParent:function(el){return el.parentNode.classList.contains(this.prefixed("wrap"))},isString:function(str){return"[object String]"===Object.prototype.toString.call(str)},loop:function(elCallback,fieldCallback){for(var i=0;i<this.el.length;++i){if("undefined"==typeof this.selectors[i]){var config=this.extend({},this.defaults,this.options,this.el[i].getAttribute("data-options")),exclude=":not("+config.exclude.split(/[\s,]+/).join("):not(")+")";this.selectors[i]=config.transform.replace(/,/g,exclude+",")+exclude,this.config[i]=config}var fields=this.el[i].querySelectorAll(this.selectors[i]);this.current=i,"function"==typeof elCallback&&elCallback.call(this,this.el[i],i);for(var x=0;x<fields.length;++x)"function"==typeof fieldCallback&&fieldCallback.call(this,fields[x],i)}},onBlur:function(ev){ev.target.parentNode.classList.remove(this.prefixed("has-focus"))},onChange:function(ev){var event=ev.target.value.length?"add":"remove";ev.target.parentNode.classList[event](this.prefixed("is-active"))},onFocus:function(ev){ev.target.parentNode.classList.add(this.prefixed("has-focus"))},onReset:function(){for(var fields=this.el[this.current].querySelectorAll(this.selectors[this.current]),i=0;i<fields.length;++i)fields[i].parentNode.classList.remove(this.prefixed("is-active"))},prefixed:function(value){return this.config[this.current].prefix+value},removeClasses:function(el){var prefix=this.config[this.current].prefix,classes=el.className.split(" ").filter(function(c){return 0!==c.lastIndexOf(prefix,0)});el.className=classes.join(" ").trim()},reset:function(el){var parent=el.parentNode;if(this.hasParent(el)){for(var fragment=document.createDocumentFragment();parent.firstElementChild;){var childEl=parent.firstElementChild;this.removeClasses(childEl),fragment.appendChild(childEl)}parent.parentNode.replaceChild(fragment,parent),this.resetPlaceholder(el),this.handleEvents(el,"remove")}},resetPlaceholder:function(el){var dataPlaceholder="data-placeholder",originalPlaceholder=el.getAttribute(dataPlaceholder);null!==originalPlaceholder&&(el.removeAttribute(dataPlaceholder),el.setAttribute("placeholder",originalPlaceholder))},setPlaceholder:function(labelText,el){var placeholderText=el.getAttribute("placeholder");if("SELECT"===el.tagName){var childEl=el.firstElementChild;childEl.value?el.insertBefore(new Option(labelText,"",!0,!0),childEl):""===childEl.text&&(childEl.text=labelText)}else placeholderText&&"label"!==this.config[this.current].prioritize||(placeholderText&&el.setAttribute("data-placeholder",placeholderText),el.setAttribute("placeholder",labelText))},wrapLabel:function(labelEl,el){var wrapper=this.createEl("div",{class:this.prefixed("wrap")+" "+this.prefixed("wrap-"+el.tagName.toLowerCase())});el.value.length&&wrapper.classList.add(this.prefixed("is-active")),(null!==el.getAttribute("required")||el.classList.contains(this.config[this.current].requiredClass))&&wrapper.classList.add(this.prefixed("is-required")),el.parentNode.insertBefore(wrapper,el),wrapper.appendChild(labelEl),wrapper.appendChild(el)}},window.FloatLabels=Plugin}(window,document)},function(module,exports){!function(){function showModal(){var showFrm=document.getElementById("showForm"),showAbt=document.getElementById("showAbout"),closeBtn=document.getElementsByClassName("close"),visibleContactClass="visible-contact",visibleAboutClass="visible-about";showFrm.addEventListener("click",function(e){e.preventDefault(),document.body.classList.add(visibleContactClass),ga("send",{hitType:"event",eventCategory:"Modal",eventAction:"show",eventLabel:"Show Contact"})}),showAbt.addEventListener("click",function(e){e.preventDefault(),document.body.classList.add(visibleAboutClass),ga("send",{hitType:"event",eventCategory:"Modal",eventAction:"show",eventLabel:"Show About"})}),Array.from(closeBtn).forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),document.body.classList.remove(visibleContactClass,visibleAboutClass)})})}function downloadResume(){var dlCvBtn=document.getElementById("download-resume");dlCvBtn.addEventListener("click",function(){ga("send",{hitType:"event",eventCategory:"Pdf",eventAction:"download",eventLabel:"Download Resume"})})}window.onload=function(){document.body.className="",showModal(),downloadResume()},window.ontouchmove=function(){return!1},window.onorientationchange=function(){document.body.scrollTop=0},console.log("Sinon, on peut aussi discuter autour d'une 🍺 !");new FloatLabels("form",{style:2})}()}]);
//# sourceMappingURL=main.build.js.map