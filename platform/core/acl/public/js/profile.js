!function(t){var a={};function i(n){if(a[n])return a[n].exports;var e=a[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=a,i.d=function(t,a,n){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)i.d(n,e,function(a){return t[a]}.bind(null,e));return n},i.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="/",i(i.s=112)}({112:function(t,a,i){i(113),i(218),i(220),i(222),i(224),i(226),i(228),i(230),i(232),i(234),i(236),i(238),i(240),i(242),i(244),i(246),i(248),i(250),i(252),i(254),i(256),i(258),i(260),i(262),i(264),i(266),i(268),i(270),i(272),i(274),i(276),i(278),i(280),i(282),i(284),i(286),i(288),i(290),i(292),t.exports=i(294)},113:function(t,a){function i(t,a){for(var i=0;i<a.length;i++){var n=a[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var n=function(){function t(a){!function(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")}(this,t),this.$container=a,this.$avatarView=this.$container.find(".avatar-view"),this.$triggerButton=this.$avatarView.find(".mt-overlay .btn-outline"),this.$avatar=this.$avatarView.find("img"),this.$avatarModal=this.$container.find("#avatar-modal"),this.$loading=this.$container.find(".loading"),this.$avatarForm=this.$avatarModal.find(".avatar-form"),this.$avatarSrc=this.$avatarForm.find(".avatar-src"),this.$avatarData=this.$avatarForm.find(".avatar-data"),this.$avatarInput=this.$avatarForm.find(".avatar-input"),this.$avatarSave=this.$avatarForm.find(".avatar-save"),this.$avatarWrapper=this.$avatarModal.find(".avatar-wrapper"),this.$avatarPreview=this.$avatarModal.find(".avatar-preview"),this.support={fileList:!!$('<input type="file">').prop("files"),fileReader:!!window.FileReader,formData:!!window.FormData}}var a,n,e;return a=t,e=[{key:"isImageFile",value:function(t){return t.type?/^image\/\w+$/.test(t.type):/\.(jpg|jpeg|png|gif)$/.test(t)}},{key:"submitFail",value:function(t){Botble.handleError(t)}}],(n=[{key:"init",value:function(){this.support.datauri=this.support.fileList&&this.support.fileReader,this.support.formData||this.initIframe(),this.initTooltip(),this.initModal(),this.addListener()}},{key:"addListener",value:function(){this.$triggerButton.on("click",$.proxy(this.click,this)),this.$avatarInput.on("change",$.proxy(this.change,this)),this.$avatarForm.on("submit",$.proxy(this.submit,this))}},{key:"initTooltip",value:function(){this.$avatarView.tooltip({placement:"bottom"})}},{key:"initModal",value:function(){this.$avatarModal.modal("hide"),this.initPreview()}},{key:"initPreview",value:function(){var t=this.$avatar.prop("src");this.$avatarPreview.empty().html('<img src="'+t+'">')}},{key:"initIframe",value:function(){var t="avatar-iframe-"+Math.random().toString().replace(".",""),a=$('<iframe name="'+t+'" style="display:none;"></iframe>'),i=!0,n=this;this.$iframe=a,this.$avatarForm.attr("target",t).after(a),this.$iframe.on("load",(function(){var t,a,e;try{a=this.contentWindow,t=(e=(e=this.contentDocument)||a.document)?e.body.innerText:null}catch(t){}t?n.submitDone(t):i?i=!1:n.submitFail("Image upload failed!"),n.submitEnd()}))}},{key:"click",value:function(){this.$avatarModal.modal("show")}},{key:"change",value:function(){var a,i;this.support.datauri?(a=this.$avatarInput.prop("files")).length>0&&(i=a[0],t.isImageFile(i)&&this.read(i)):(i=this.$avatarInput.val(),t.isImageFile(i)&&this.syncUpload())}},{key:"submit",value:function(){return this.$avatarSrc.val()||this.$avatarInput.val()?this.support.formData?(this.ajaxUpload(),!1):void 0:(Botble.showError("Please select image!"),!1)}},{key:"read",value:function(t){var a=this,i=new FileReader;i.readAsDataURL(t),i.onload=function(){a.url=this.result,a.startCropper()}}},{key:"startCropper",value:function(){var t=this;this.active?this.$img.cropper("replace",this.url):(this.$img=$('<img src="'+this.url+'">'),this.$avatarWrapper.empty().html(this.$img),this.$img.cropper({aspectRatio:1,rotatable:!0,preview:this.$avatarPreview.selector,done:function(a){var i=['{"x":'+a.x,'"y":'+a.y,'"height":'+a.height,'"width":'+a.width+"}"].join();t.$avatarData.val(i)}}),this.active=!0)}},{key:"stopCropper",value:function(){this.active&&(this.$img.cropper("destroy"),this.$img.remove(),this.active=!1)}},{key:"ajaxUpload",value:function(){var t=this.$avatarForm.attr("action"),a=new FormData(this.$avatarForm[0]),i=this;$.ajax(t,{type:"POST",data:a,processData:!1,contentType:!1,beforeSend:function(){i.submitStart()},success:function(t){i.submitDone(t)},error:function(t,a,n){i.submitFail(t.responseJSON,a||n)},complete:function(){i.submitEnd()}})}},{key:"syncUpload",value:function(){this.$avatarSave.trigger("click")}},{key:"submitStart",value:function(){this.$loading.fadeIn(),this.$avatarSave.attr("disabled",!0).text("Saving...")}},{key:"submitDone",value:function(t){try{t=$.parseJSON(t)}catch(t){}t&&!t.error&&t.data?(this.url=t.data.url,this.support.datauri||this.uploaded?(this.uploaded=!1,this.cropDone()):(this.uploaded=!0,this.$avatarSrc.val(this.url),this.startCropper()),this.$avatarInput.val(""),Botble.showSuccess(t.message)):Botble.showError(t.message)}},{key:"submitEnd",value:function(){this.$loading.fadeOut(),this.$avatarSave.removeAttr("disabled").text("Save")}},{key:"cropDone",value:function(){this.$avatarSrc.val(""),this.$avatarData.val(""),this.$avatar.prop("src",this.url),$(".user-menu img").prop("src",this.url),$(".user.dropdown img").prop("src",this.url),this.stopCropper(),this.initModal()}}])&&i(a.prototype,n),e&&i(a,e),t}();$(document).ready((function(){new n($(".crop-avatar")).init()}))},218:function(t,a){},220:function(t,a){},222:function(t,a){},224:function(t,a){},226:function(t,a){},228:function(t,a){},230:function(t,a){},232:function(t,a){},234:function(t,a){},236:function(t,a){},238:function(t,a){},240:function(t,a){},242:function(t,a){},244:function(t,a){},246:function(t,a){},248:function(t,a){},250:function(t,a){},252:function(t,a){},254:function(t,a){},256:function(t,a){},258:function(t,a){},260:function(t,a){},262:function(t,a){},264:function(t,a){},266:function(t,a){},268:function(t,a){},270:function(t,a){},272:function(t,a){},274:function(t,a){},276:function(t,a){},278:function(t,a){},280:function(t,a){},282:function(t,a){},284:function(t,a){},286:function(t,a){},288:function(t,a){},290:function(t,a){},292:function(t,a){},294:function(t,a){}});