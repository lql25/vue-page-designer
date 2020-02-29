/**
    * Vue-page-designer v1.0.7
    * (c) 2020 fireyy
    * @license WTFPL
    */
import Vue from 'vue';

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var bundle = createCommonjsModule(function (module) {
module.exports=function(e){function t(i){if(a[i])return a[i].exports;var n=a[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var a={};return t.m=e,t.c=a,t.d=function(e,a,i){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:i});},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=9)}([function(e,t){e.exports=function(e,t,a,i,n,l){var r,s=e=e||{},o=typeof e.default;"object"!==o&&"function"!==o||(r=e,s=e.default);var c="function"==typeof s?s.options:s;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),a&&(c.functional=!0),n&&(c._scopeId=n);var v;if(l?(v=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(l);},c._ssrRegister=v):i&&(v=i),v){var d=c.functional,p=d?c.render:c.beforeCreate;d?(c._injectStyles=v,c.render=function(e,t){return v.call(t),p(e,t)}):c.beforeCreate=p?[].concat(p,v):[v];}return {esModule:r,exports:s,options:c}};},function(e,t){function a(e,t){var a=e[1]||"",i=e[3];if(!i)return a;if(t&&"function"==typeof btoa){var n=function(e){return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(i),l=i.sources.map(function(e){return "/*# sourceURL="+i.sourceRoot+e+" */"});return [a].concat(l).concat([n]).join("\n")}return [a].join("\n")}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var i=a(t,e);return t[2]?"@media "+t[2]+"{"+i+"}":i}).join("")},t.i=function(e,a){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},n=0;n<this.length;n++){var l=this[n][0];"number"==typeof l&&(i[l]=!0);}for(n=0;n<e.length;n++){var r=e[n];"number"==typeof r[0]&&i[r[0]]||(a&&!r[2]?r[2]=a:a&&(r[2]="("+r[2]+") and ("+a+")"),t.push(r));}},t};},function(e,t,a){function i(e){for(var t=0;t<e.length;t++){var a=e[t],i=c[a.id];if(i){i.refs++;for(var n=0;n<i.parts.length;n++)i.parts[n](a.parts[n]);for(;n<a.parts.length;n++)i.parts.push(l(a.parts[n]));i.parts.length>a.parts.length&&(i.parts.length=a.parts.length);}else{var r=[];for(n=0;n<a.parts.length;n++)r.push(l(a.parts[n]));c[a.id]={id:a.id,refs:1,parts:r};}}}function n(){var e=document.createElement("style");return e.type="text/css",v.appendChild(e),e}function l(e){var t,a,i=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(i){if(u)return m;i.parentNode.removeChild(i);}if(f){var l=p++;i=d||(d=n()),t=r.bind(null,i,l,!1),a=r.bind(null,i,l,!0);}else i=n(),t=function(e,t){var a=t.css,i=t.media,n=t.sourceMap;i&&e.setAttribute("media",i);n&&(a+="\n/*# sourceURL="+n.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");if(e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a));}}.bind(null,i),a=function(){i.parentNode.removeChild(i);};return t(e),function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap)return;t(e=i);}else a();}}function r(e,t,a,i){var n=a?"":i.css;if(e.styleSheet)e.styleSheet.cssText=h(t,n);else{var l=document.createTextNode(n),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(l,r[t]):e.appendChild(l);}}var s="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!s)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o=a(15),c={},v=s&&(document.head||document.getElementsByTagName("head")[0]),d=null,p=0,u=!1,m=function(){},f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,a){u=a;var n=o(e,t);return i(n),function(t){for(var a=[],l=0;l<n.length;l++){var r=n[l];(s=c[r.id]).refs--,a.push(s);}t?i(n=o(e,t)):n=[];for(l=0;l<a.length;l++){var s;if(0===(s=a[l]).refs){for(var v=0;v<s.parts.length;v++)s.parts[v]();delete c[s.id];}}}};var h=function(){var e=[];return function(t,a){return e[t]=a,e.filter(Boolean).join("\n")}}();},function(e,t,a){t.a={name:"braid-bg",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-smartphone"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12" y2="18"></line></svg>',title:"背景图",panel:null,setting:{type:"braid-bg",isContainer:!1,hasGuide:!1,isUpload:!0,isChild:!1,dragable:!1,resizable:!1,href:"",belong:"page"},props:["val"]};},function(e,t,a){t.a={name:"braid-pic",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-image"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>',title:"图片",panel:null,setting:{type:"braid-pic",isContainer:!1,isUpload:!0,hasGuide:!0,isChild:!0,dragable:!0,resizable:!0,left:0,z:0,href:"",belong:"page",animationName:""},props:["val","w","h","playState"]};},function(e,t,a){var i=a(20);t.a={name:"braid-txt",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-type"><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line></svg>',title:"文本",panel:i.a,setting:{type:"braid-txt",isContainer:!1,isUpload:!1,hasGuide:!0,isChild:!0,dragable:!0,resizable:!0,width:650,height:100,left:50,top:0,z:0,lineHeight:1.6,fontSize:1.2,fontWeight:!1,color:"#000000",textAlign:"left",text:"文本",href:"",belong:"page",animationName:""},props:["val","h","w","playState"],methods:{updateText:function(e,t){var a=e.target.innerHTML;this.$vpd.commit("updateData",{uuid:t,key:"text",value:a});}}};},function(e,t,a){t.a={name:"braid-txt-style",props:["activeElement"]};},function(e,t,a){var i=a(26),n="braid-container";t.a={name:n,icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-layout"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>',title:"容器",panel:i.a,setting:{type:n,isContainer:!0,hasGuide:!0,isUpload:!1,isChild:!1,dragable:!0,resizable:!0,name:"",width:650,height:300,left:50,top:0,z:0,display:"flex",bgColor:"",backPic:"",backPicUrl:"",radius:0,borderColor:"",borderWidth:0,dir:"row",justify:"flex-start",align:"flex-start",belong:"page",animationName:""},props:["h","val","playState"]};},function(e,t,a){t.a={name:"braid-container-style",props:["activeElement"],methods:{addPic:function(){var e=this;this.$vpd.$emit("upload",function(t){e.$vpd.commit("addContainerBackPic",t);});}}};},function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var i=a(10),n=a(12),l=a(17),r=a(23);t.default={[i.a.name]:i.a,[n.a.name]:n.a,[l.a.name]:l.a,[r.a.name]:r.a};},function(e,t,a){var i=a(3),n=a(11),l=a(0)(i.a,n.a,!1,null,null,null);l.options.__file="src/bg/index.vue",t.a=l.exports;},function(e,t,a){var i=function(){var e=this.$createElement;return (this._self._c||e)("img",{attrs:{width:"100%",src:this.val.url}})};i._withStripped=!0;var n={render:i,staticRenderFns:[]};t.a=n;},function(e,t,a){var i=a(4),n=a(16),r=function(e){a(13);},s=a(0)(i.a,n.a,!1,r,"data-v-04cf7604",null);s.options.__file="src/pic/index.vue",t.a=s.exports;},function(e,t,a){var i=a(14);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a(2)("6f2e58e8",i,!1);},function(e,t,a){(e.exports=a(1)(void 0)).push([e.i,"\n.lz-image img[data-v-04cf7604] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  user-select: none;\n  -webkit-user-drag: none;\n  pointer-events: none;\n}\n",""]);},function(e,t){e.exports=function(e,t){for(var a=[],i={},n=0;n<t.length;n++){var l=t[n],r=l[0],s={id:e+":"+n,css:l[1],media:l[2],sourceMap:l[3]};i[r]?i[r].parts.push(s):a.push(i[r]={id:r,parts:[s]});}return a};},function(e,t,a){var i=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"lz-image",class:[this.playState?"anm-"+this.val.animationName:""],style:{position:"page"===this.val.belong?"absolute":"relative",width:this.val.width/this.w*100+"%",height:this.val.height/this.h*100+"%",left:"page"===this.val.belong?this.val.left/this.w*100+"%":"0",top:"page"===this.val.belong?this.val.top/this.h*100+"%":"0",zIndex:this.val.z}},[t("img",{attrs:{src:this.val.url}})])};i._withStripped=!0;var n={render:i,staticRenderFns:[]};t.a=n;},function(e,t,a){var i=a(5),n=a(22),r=function(e){a(18);},s=a(0)(i.a,n.a,!1,r,"data-v-15741f6a",null);s.options.__file="src/txt/index.vue",t.a=s.exports;},function(e,t,a){var i=a(19);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a(2)("288d041f",i,!1);},function(e,t,a){(e.exports=a(1)(void 0)).push([e.i,"\n.txt[data-v-15741f6a] {\n  outline: none;\n  font-size: 28px;\n}\n",""]);},function(e,t,a){var i=a(6),n=a(21),l=a(0)(i.a,n.a,!1,null,null,null);l.options.__file="src/txt/style.vue",t.a=l.exports;},function(e,t,a){var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("hr"),e._v(" "),a("div",{staticClass:"panel-row",attrs:{flex:""}},[a("vpd-icon",{attrs:{name:"sliders"}}),e._v(" "),a("div",{staticClass:"panel-label"},[e._v("行高")]),e._v(" "),a("div",{staticClass:"panel-value"},[e._v(e._s(e.activeElement.lineHeight))]),e._v(" "),a("div",{staticClass:"panel-slider-wrap"},[a("vpd-slider",{attrs:{max:5,min:1},model:{value:e.activeElement.lineHeight,callback:function(t){e.$set(e.activeElement,"lineHeight",t);},expression:"activeElement.lineHeight"}})],1)],1),e._v(" "),a("div",{staticClass:"panel-row",attrs:{flex:""}},[a("vpd-icon",{attrs:{name:"type"}}),e._v(" "),a("div",{staticClass:"panel-label"},[e._v("字号")]),e._v(" "),a("div",{staticClass:"panel-value"},[e._v(e._s(e.activeElement.fontSize)+"rem")]),e._v(" "),a("div",{staticClass:"panel-slider-wrap"},[a("vpd-slider",{attrs:{step:.01,max:2,min:.85},model:{value:e.activeElement.fontSize,callback:function(t){e.$set(e.activeElement,"fontSize",t);},expression:"activeElement.fontSize"}})],1)],1),e._v(" "),a("div",{staticClass:"panel-row",attrs:{flex:""}},[a("vpd-icon",{attrs:{name:"edit-3"}}),e._v(" "),a("div",{staticClass:"panel-label"},[e._v("颜色")]),e._v(" "),a("div",{staticClass:"panel-value"},[e._v(e._s(e.activeElement.color))]),e._v(" "),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.activeElement.color,expression:"activeElement.color"}],attrs:{type:"color"},domProps:{value:e.activeElement.color},on:{input:function(t){t.target.composing||e.$set(e.activeElement,"color",t.target.value);}}})])],1),e._v(" "),a("div",{staticClass:"panel-row",attrs:{flex:""}},[a("vpd-icon",{attrs:{name:"bold"}}),e._v(" "),a("div",{staticClass:"panel-label"},[e._v("加粗")]),e._v(" "),a("div",{staticClass:"panel-value"},[a("label",{staticClass:"form-switch"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.activeElement.fontWeight,expression:"activeElement.fontWeight"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.activeElement.fontWeight)?e._i(e.activeElement.fontWeight,null)>-1:e.activeElement.fontWeight},on:{change:function(t){var a=e.activeElement.fontWeight,i=t.target,n=!!i.checked;if(Array.isArray(a)){var l=e._i(a,null);i.checked?l<0&&(e.activeElement.fontWeight=a.concat([null])):l>-1&&(e.activeElement.fontWeight=a.slice(0,l).concat(a.slice(l+1)));}else e.$set(e.activeElement,"fontWeight",n);}}}),e._v(" "),a("i",{staticClass:"form-icon"})])])],1),e._v(" "),a("div",{staticClass:"panel-row",attrs:{flex:""}},[a("vpd-icon",{attrs:{name:"align-justify"}}),e._v(" "),a("div",{staticClass:"panel-label"},[e._v("对齐")]),e._v(" "),a("div",{staticClass:"panel-value"},[a("label",{staticClass:"form-radio tooltip",attrs:{"data-tooltip":"左对齐"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.activeElement.textAlign,expression:"activeElement.textAlign"}],attrs:{type:"radio",name:"align",value:"left"},domProps:{checked:e._q(e.activeElement.textAlign,"left")},on:{change:function(t){e.$set(e.activeElement,"textAlign","left");}}}),e._v(" "),a("i",{staticClass:"form-icon"}),e._v(" "),a("vpd-icon",{attrs:{name:"align-left"}})],1),e._v(" "),a("label",{staticClass:"form-radio tooltip",attrs:{"data-tooltip":"居中"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.activeElement.textAlign,expression:"activeElement.textAlign"}],attrs:{type:"radio",name:"align",value:"center"},domProps:{checked:e._q(e.activeElement.textAlign,"center")},on:{change:function(t){e.$set(e.activeElement,"textAlign","center");}}}),e._v(" "),a("i",{staticClass:"form-icon"}),e._v(" "),a("vpd-icon",{attrs:{name:"align-center"}})],1),e._v(" "),a("label",{staticClass:"form-radio tooltip",attrs:{"data-tooltip":"右对齐"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.activeElement.textAlign,expression:"activeElement.textAlign"}],attrs:{type:"radio",name:"align",value:"right"},domProps:{checked:e._q(e.activeElement.textAlign,"right")},on:{change:function(t){e.$set(e.activeElement,"textAlign","right");}}}),e._v(" "),a("i",{staticClass:"form-icon"}),e._v(" "),a("vpd-icon",{attrs:{name:"align-center"}})],1)])],1)])};i._withStripped=!0;var n={render:i,staticRenderFns:[]};t.a=n;},function(e,t,a){var i=function(){var e=this,t=e.$createElement;return (e._self._c||t)("div",{staticClass:"txt",class:[e.playState?"anm-"+e.val.animationName:""],style:{position:"page"===e.val.belong?"absolute":"relative",left:"page"===e.val.belong?e.val.left/e.w*100+"%":"0",top:"page"===e.val.belong?e.val.top/e.h*100+"%":"0",width:e.val.width/e.w*100+"%",minHeight:e.val.height/e.h*100+"%",zIndex:e.val.z,lineHeight:e.val.lineHeight,fontSize:e.val.fontSize+"rem",color:e.val.color,textAlign:e.val.textAlign,fontWeight:e.val.fontWeight?"bold":"normal"},attrs:{contenteditable:"true"},domProps:{innerHTML:e._s(e.val.text)},on:{blur:function(t){return e.updateText(t,e.val.uuid)}}})};i._withStripped=!0;var n={render:i,staticRenderFns:[]};t.a=n;},function(e,t,a){var i=a(7),n=a(28),r=function(e){a(24);},s=a(0)(i.a,n.a,!1,r,"data-v-0590360a",null);s.options.__file="src/container/index.vue",t.a=s.exports;},function(e,t,a){var i=a(25);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a(2)("7898cf0e",i,!1);},function(e,t,a){(e.exports=a(1)(void 0)).push([e.i,"\n.lz-container[data-v-0590360a] {\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 100%;\n}\n",""]);},function(e,t,a){var i=a(8),n=a(27),l=a(0)(i.a,n.a,!1,null,null,null);l.options.__file="src/container/style.vue",t.a=l.exports;},function(e,t,a){var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("hr"),e._v(" "),a("div",{staticClass:"panel-row"},[a("vpd-icon",{attrs:{name:"credit-card"}}),e._v(" "),a("div",{staticClass:"panel-label"},[e._v("容器名称")]),e._v(" "),a("div",{staticClass:"panel-value"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.activeElement.name,expression:"activeElement.name",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"容器名称必填"},domProps:{value:e.activeElement.name},on:{input:function(t){t.target.composing||e.$set(e.activeElement,"name",t.target.value.trim());},blur:function(t){e.$forceUpdate();}}})])],1),e._v(" "),a("div",{staticClass:"panel-row"},[a("vpd-icon",{attrs:{name:"grid"}}),e._v(" "),a("div",{staticClass:"panel-label"},[e._v("display")]),e._v(" "),a("div",{staticClass:"panel-value"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.activeElement.display,expression:"activeElement.display"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return "_value"in e?e._value:e.value});e.$set(e.activeElement,"display",t.target.multiple?a:a[0]);}}},[a("option",[e._v("flex")]),e._v(" "),a("option",[e._v("block")])])])],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"flex"===e.activeElement.display,expression:"activeElement.display === 'flex'"}],staticClass:"panel-row"},[a("vpd-icon",{attrs:{name:"shuffle"}}),e._v(" "),a("div",{staticClass:"panel-label"},[e._v("主轴方向")]),e._v(" "),a("div",{staticClass:"panel-value"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.activeElement.dir,expression:"activeElement.dir"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return "_value"in e?e._value:e.value});e.$set(e.activeElement,"dir",t.target.multiple?a:a[0]);}}},[a("option",[e._v("row")]),e._v(" "),a("option",[e._v("row-reverse")]),e._v(" "),a("option",[e._v("column")]),e._v(" "),a("option",[e._v("column-reverse")])])])],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"flex"===e.activeElement.display,expression:"activeElement.display === 'flex'"}],staticClass:"panel-row"},[a("vpd-icon",{attrs:{name:"align-justify"}}),e._v(" "),a("div",{staticClass:"panel-label"},[e._v("主轴分布")]),e._v(" "),a("div",{staticClass:"panel-value"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.activeElement.justify,expression:"activeElement.justify"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return "_value"in e?e._value:e.value});e.$set(e.activeElement,"justify",t.target.multiple?a:a[0]);}}},[a("option",[e._v("flex-start")]),e._v(" "),a("option",[e._v("space-between")]),e._v(" "),a("option",[e._v("center")]),e._v(" "),a("option",[e._v("space-around")]),e._v(" "),a("option",[e._v("flex-end")])])])],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"flex"===e.activeElement.display,expression:"activeElement.display === 'flex'"}],staticClass:"panel-row"},[a("vpd-icon",{attrs:{name:"align-center"}}),e._v(" "),a("div",{staticClass:"panel-label"},[e._v("侧轴分布")]),e._v(" "),a("div",{staticClass:"panel-value"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.activeElement.align,expression:"activeElement.align"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return "_value"in e?e._value:e.value});e.$set(e.activeElement,"align",t.target.multiple?a:a[0]);}}},[a("option",[e._v("flex-start")]),e._v(" "),a("option",[e._v("center")]),e._v(" "),a("option",[e._v("flex-end")])])])],1),e._v(" "),a("hr"),e._v(" "),a("div",{staticClass:"panel-row"},[a("vpd-icon",{attrs:{name:"target"}}),e._v(" "),a("div",{staticClass:"panel-label"},[e._v("背景色")]),e._v(" "),a("div",{staticClass:"panel-value"},[e._v(e._s(e.activeElement.bgColor))]),e._v(" "),a("div",{staticClass:"panel-value"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.activeElement.bgColor,expression:"activeElement.bgColor"}],attrs:{type:"color"},domProps:{value:e.activeElement.bgColor},on:{input:function(t){t.target.composing||e.$set(e.activeElement,"bgColor",t.target.value);}}})])],1),e._v(" "),a("div",{staticClass:"panel-row"},[a("vpd-icon",{attrs:{name:"image"}}),e._v(" "),a("div",{staticClass:"panel-label"},[e._v("背景图")]),e._v(" "),a("div",{staticClass:"panel-value"},[a("div",{staticClass:"panel-preview",style:{backgroundImage:"url("+e.activeElement.backPic+")"},on:{click:e.addPic}},[a("vpd-icon",{directives:[{name:"show",rawName:"v-show",value:!e.activeElement.backPic,expression:"!activeElement.backPic"}],attrs:{name:"plus"}})],1)])],1),e._v(" "),a("div",{staticClass:"panel-row"},[a("vpd-icon",{attrs:{name:"square"}}),e._v(" "),a("div",{staticClass:"panel-label"},[e._v("圆角")]),e._v(" "),a("div",{staticClass:"panel-value"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.activeElement.radius,expression:"activeElement.radius"}],attrs:{type:"text"},domProps:{value:e.activeElement.radius},on:{input:function(t){t.target.composing||e.$set(e.activeElement,"radius",t.target.value);}}})])],1),e._v(" "),a("div",{staticClass:"panel-row"},[a("vpd-icon",{attrs:{name:"maximize"}}),e._v(" "),a("div",{staticClass:"panel-label"},[e._v("边的宽度")]),e._v(" "),a("div",{staticClass:"panel-value"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.activeElement.borderWidth,expression:"activeElement.borderWidth"}],attrs:{type:"text"},domProps:{value:e.activeElement.borderWidth},on:{input:function(t){t.target.composing||e.$set(e.activeElement,"borderWidth",t.target.value);}}})])],1),e._v(" "),a("div",{staticClass:"panel-row"},[a("vpd-icon",{attrs:{name:"edit-3"}}),e._v(" "),a("div",{staticClass:"panel-label"},[e._v("边的颜色")]),e._v(" "),a("div",{staticClass:"panel-value"},[e._v(e._s(e.activeElement.borderColor))]),e._v(" "),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.activeElement.borderColor,expression:"activeElement.borderColor"}],attrs:{type:"color"},domProps:{value:e.activeElement.borderColor},on:{input:function(t){t.target.composing||e.$set(e.activeElement,"borderColor",t.target.value);}}})])],1)])};i._withStripped=!0;var n={render:i,staticRenderFns:[]};t.a=n;},function(e,t,a){var i=function(){var e=this.$createElement;return (this._self._c||e)("div",{staticClass:"lz-container",class:[this.playState?"anm-"+this.val.animationName:""],style:{display:this.val.display,position:"absolute",width:this.val.width/7.5+"%",height:this.val.height/this.h*100+"%",left:this.val.left/7.5+"%",top:this.val.top/this.h*100+"%",zIndex:this.val.z,backgroundColor:this.val.bgColor,backgroundImage:"url("+this.val.backPic+")",borderStyle:"solid",borderRadius:this.val.radius+"px",borderColor:this.val.borderColor,borderWidth:this.val.borderWidth+"px",flexDirection:this.val.dir,justifyContent:this.val.justify,alignItems:this.val.align}},[this._t("default")],2)};i._withStripped=!0;var n={render:i,staticRenderFns:[]};t.a=n;}]);
});

var defaultWidgets = unwrapExports(bundle);

function resolveSource (source, type) {
  return typeof type === 'function' ? type : source[type]
}

function normalizeMap (map) {
  return Array.isArray(map)
    ? map.map(function (k) { return ({ k: k, v: k }); })
    : Object.keys(map).map(function (k) { return ({ k: k, v: map[k] }); })
}

var createMapState = function (_store) { return function (states) {
  var res = {};
  var db = normalizeMap(states);
  var loop = function ( k ) {
    var v = db[k];
    res[k] = function () {
      var store = _store || this.$vpd;
      return typeof v === 'function'
        ? v.call(this, store.state)
        : store.state[v]
    };
  };

  for (var k in db) loop( k );
  return res
}; };

var mapToMethods = function (sourceName, runnerName, _store) { return function (map) {
  var res = {};
  var db = normalizeMap(map);
  var loop = function ( k ) {
    var v = db[k];
    res[k] = function (payload) {
      var store = _store || this.$vpd;
      var source = store[sourceName];
      var runner = store[runnerName];
      var actualSource = typeof v === 'function' ? v.call(this, source) : v;
      return runner.call(store, actualSource, payload)
    };
  };

  for (var k in db) loop( k );
  return res
}; };

var Store = function Store (
  ref
) {
  var this$1 = this;
  if ( ref === void 0 ) ref = {};
  var state = ref.state;
  var mutations = ref.mutations; if ( mutations === void 0 ) mutations = {};
  var actions = ref.actions; if ( actions === void 0 ) actions = {};
  var plugins = ref.plugins;
  var subscribers = ref.subscribers; if ( subscribers === void 0 ) subscribers = [];

  this.vm = new Vue({
    data: {
      $$state: typeof state === 'function' ? state() : state
    }
  });
  this.mutations = mutations;
  this.actions = actions;
  this.subscribers = subscribers;

  if (plugins) {
    plugins.forEach(function (p) { return this$1.use(p); });
  }

  this.mapState = createMapState(this);
  this.mapActions = mapToMethods('actions', 'dispatch', this);
  this.mapMutations = mapToMethods('mutations', 'commit', this);
};

var prototypeAccessors = { state: { configurable: true } };

prototypeAccessors.state.get = function () {
  return this.vm.$data.$$state
};

prototypeAccessors.state.set = function (v) {
  if (process.env.NODE_ENV === 'development') {
    throw new Error(
      '[puex] store.state is read-only, use store.replaceState(state) instead'
    )
  }
};

Store.prototype.$emit = function $emit (event) {
    var ref;

    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];
  return (ref = this.vm).$emit.apply(ref, [ event ].concat( args ))
};

Store.prototype.$on = function $on (event, callback) {
  return this.vm.$on(event, callback)
};

Store.prototype.subscribe = function subscribe (sub) {
    var this$1 = this;

  this.subscribers.push(sub);
  return function () { return this$1.subscribers.splice(this$1.subscribers.indexOf(sub), 1); }
};

Store.prototype.commit = function commit (type, payload) {
    var this$1 = this;

  this.subscribers.forEach(function (sub) { return sub({ type: type, payload: payload }, this$1.state); });
  var mutation = resolveSource(this.mutations, type);
  return mutation && mutation(this.state, payload)
};

Store.prototype.dispatch = function dispatch (type, payload) {
  var action = resolveSource(this.actions, type);
  var ctx = {
    state: this.state,
    dispatch: this.dispatch.bind(this),
    commit: this.commit.bind(this),
    store: this
  };
  return Promise.resolve(action && action(ctx, payload))
};

Store.prototype.use = function use (fn) {
  fn(this);
  return this
};

Store.prototype.replaceState = function replaceState (state) {
  this.vm.$data.$$state = state;
  return this
};

Object.defineProperties( Store.prototype, prototypeAccessors );

var state = {
  top: 0, // 添加元件的初始纵坐标
  zoom: 67, // 画布缩放百分比
  type: 'page', // 选中元素类型
  index: -1, // 选中元素索引
  uuid: null, // 选中元素uuid
  counter: 0, // 容器副本命名时避免重名所用的计数器

  originX: 0, // 选中元件的横向初始值
  originY: 0, // 选中元件的纵向初始值
  startX: 0, // 鼠标摁下时的横坐标
  startY: 0, // 鼠标摁下时的纵坐标
  moving: false, // 是否正在移动元件（参考线仅在移动元件时显示）

  animation: [], // 动画库
  playState: false, // 动画播放状态

  activeElement: {}, // 选中对象，要么是元件，要么是页面
  page: {
    page: true,
    title: '自定義頁面', // 页面 title
    height: 1100, // 画布高度
    // endTime: new Date(), // 截止日期
    backgroundColor: '#ffffff'
  },
  widgets: [] // 元件
};

var actions = {
  addWidget: function addWidget (ref, item) {
    var state = ref.state;
    var commit = ref.commit;
    var store = ref.store;

    if (item.setting.isUpload) {
      store.$emit('upload', function (payload) {
        commit('addWidget', { data: payload, item: item });
      }, true);
    } else {
      commit('addWidget', { item: item });
      // 设置选中
      commit('select', {
        uuid: state.widgets[state.widgets.length - 1].uuid
      });
    }
  },
  save: function save (ref) {
    var state = ref.state;
    var store = ref.store;

    store.$emit('save', state);
  },
  preview: function preview (ref) {
    var state = ref.state;
    var store = ref.store;

    store.$emit('preview', state);
  }
};

var generate = require('nanoid/generate');

var mutations = {
  // 选中元件与取消选中
  select: function select (state, payload) {
    state.uuid = payload.uuid;
    if (payload.uuid === -1) {
      state.activeElement = state.page;
      state.type = 'page';
    } else {
      var widget = state.widgets.find(function (w) { return w.uuid === payload.uuid; });
      state.activeElement = widget;
      state.type = widget.type;
    }
  },

  // 设置 mousemove 操作的初始值
  initmove: function initmove (state, payload) {
    state.startX = payload.startX;
    state.startY = payload.startY;
    state.originX = payload.originX;
    state.originY = payload.originY;
    state.moving = true;
  },

  // 元件移动结束
  stopmove: function stopmove (state) {
    state.moving = false;
  },

  // 移动元件
  move: function move (state, payload) {
    var target = state.activeElement;
    var dx = payload.x - state.startX;
    var dy = payload.y - state.startY;
    var left = state.originX + Math.floor(dx * 100 / state.zoom);
    var top = state.originY + Math.floor(dy * 100 / state.zoom);

    target.left = left > 0 ? left : 0;
    target.top = top > 0 ? top : 0;
  },

  // 调整元件尺寸
  resize: function resize (state, payload) {
    var dx = payload.x - state.startX;
    var dy = payload.y - state.startY;
    var value;

    if (payload.type === 'right') {
      value = state.originX + Math.floor(dx * 100 / state.zoom);
      state.activeElement.width = value > 10 ? value : 10;
      return
    }

    if (payload.type === 'down') {
      value = state.originX + Math.floor(dy * 100 / state.zoom);
      state.activeElement.height = value > 10 ? value : 10;
      return
    }

    if (payload.type === 'left') {
      var left = state.originX + Math.floor(dx * 100 / state.zoom);
      var width = state.originY - Math.floor(dx * 100 / state.zoom);
      state.activeElement.left = left > 0 ? left : 0;
      state.activeElement.width = width > 10 ? width : 10;
      return
    }

    if (payload.type === 'up') {
      var top = state.originX + Math.floor(dy * 100 / state.zoom);
      var height = state.originY - Math.floor(dy * 100 / state.zoom);
      state.activeElement.top = top > 0 ? top : 0;
      state.activeElement.height = height > 10 ? height : 10;
    }
  },

  // 复制元件
  copy: function copy (state, payload) {
    if (state.type !== 'page') {
      var copy = Object.assign({}, state.activeElement, {top: state.top, uuid: generate('1234567890abcdef', 10)});

      // 由于容器的名称必须是唯一的，故复制容器需作处理
      if (state.activeElement.isContainer) {
        var name = state.activeElement.name;
        if (name) {
          // 设置容器副本的名称
          var copyName = name.split('-')[0] + '-' + state.counter;
          copy.name = copyName;

          // 复制容器内的图片和文本
          for (var i = 0, len = state.widgets.length; i < len; i++) {
            if (state.widgets[i].belong === name) {
              state.widgets.push(
                Object.assign({}, state.widgets[i], { belong: copyName })
              );
            }
          }

          state.counter += 1;
        }
      }

      state.widgets.push(copy);
    }
  },

  // 更新元件初始 top 值
  updateSrollTop: function updateSrollTop (state, top) {
    state.top = top;
  },

  // 页面缩放
  zoom: function zoom (state, val) {
    state.zoom = val;
  },

  // 初始化选中对象
  initActive: function initActive (state) {
    state.activeElement = state.page;
  },

  // 删除选中元件
  delete: function delete$1 (state) {
    var type = state.type;
    if (type === 'page') { return }

    // 如果删除的是容器，须将内部元件一并删除
    if (state.activeElement.isContainer) {
      var name = state.activeElement.name;

      for (var i = 0; i < state.widgets.length; i++) {
        if (state.widgets[i].belong === name) {
          state.widgets.splice(i, 1);
        }
      }
    }

    // 删除元件
    // state.widgets.splice(state.index, 1)
    var widgetIndex = state.widgets.findIndex(function (item) {
      return item.uuid === state.uuid
    });
    state.widgets.splice(widgetIndex, 1);

    // 重置 activeElement
    state.activeElement = state.page;
    // state.type = 'page'
    state.uuid = -1;
  },

  // 添加组件
  addWidget: function addWidget (state, ref) {
    var data = ref.data; if ( data === void 0 ) data = null;
    var item = ref.item;

    var def = { top: state.top, uuid: generate('1234567890abcdef', 10) };
    var setting = JSON.parse(JSON.stringify(item.setting));

    if (setting.isContainer) {
      setting.name = def.uuid;
    }

    if (data) {
      data.forEach(function (val) {
        state.widgets.push(Object.assign(setting, val, def));
      });
    } else {
      state.widgets.push(Object.assign(setting, def));
    }
  },

  // 替换图片
  replaceImage: function replaceImage (state, payload) {
    state.activeElement.width = payload[0].width;
    state.activeElement.url = payload[0].url;
  },

  // 添加容器背景图
  addContainerBackPic: function addContainerBackPic (state, payload) {
    state.activeElement.backPic = payload[0].url;
    state.activeElement.backPicUrl = payload[0].src;
    state.activeElement.width = payload[0].width;
    state.activeElement.height = payload[0].height;
  },

  // 添加背景图
  addBackPic: function addBackPic (state, payload) {
    state.activeElement.backPic = payload[0].url;
    state.activeElement.backPicUrl = payload[0].src;
  },

  // 添加动画
  addAnimation: function addAnimation (state) {
    state.animation.push({
      name: '',
      duration: 3,
      delay: 0,
      iteration: 1,
      timing: 'linear',
      direction: 'normal',
      fill: 'none',
      keyframes: [
        {
          stop: 0,
          css: ''
        }
      ]
    });
  },

  // 为动画添加 keyframe
  addkeyframe: function addkeyframe (state, name) {
    state.animation.map(function (val) {
      if (val.name === name) {
        val.keyframes.push({
          stop: 0,
          css: ''
        });
      }
    });
  },

  // 动画的播放与停止
  setAnimation: function setAnimation (state, status) {
    state.playState = status;
  },

  // 更新数据
  updateData: function updateData (state, ref) {
    var uuid = ref.uuid;
    var key = ref.key;
    var value = ref.value;

    var widget = state.widgets.find(function (w) { return w.uuid === uuid; });
    widget[key] = value;
  }
};

// import Vue from 'vue'

// Vue.use(Store)

var vpd = new Store({
  state: state,
  actions: actions,
  mutations: mutations
});

var vpd$1 = {
  beforeCreate: function beforeCreate () {
    this.$vpd = vpd;
  }
};

// 默认 widgets

var widgets;
var widgetStyle = {};

var install = function (Vue$$1, config) {
  if ( config === void 0 ) config = {};

  if (install.installed) { return }

  widgets = Object.assign({}, defaultWidgets, config.widgets);

  Object.keys(widgets).forEach(function (key) {
    Vue$$1.component(key, widgets[key]);
    Vue$$1.component(key, Vue$$1.extend(widgets[key]).extend(vpd$1));
    // style panel
    if (widgets[key]['panel']) {
      var panel = Object.assign({}, widgets[key]['panel'], {
        type: key
      });
      Vue$$1.component(panel.name, Vue$$1.extend(panel).extend(vpd$1));
      widgetStyle[panel.name] = panel;
      // remove panel from object
      delete widgets[key]['panel'];
    }
  });
};

var widget = {
  install: install,
  getWidgets: function getWidgets () {
    return widgets
  },
  getWidgetStyle: function getWidgetStyle () {
    return widgetStyle
  }
};

//
var script = {
  mixins: [vpd$1],
  computed: {
    show: function show () {
      return this.$vpd.state.type !== 'page'
    }
  },
  mounted: function mounted () {
    var this$1 = this;

    // Ctrl + C 复制元件
    document.addEventListener(
      'keyup',
      function (e) {
        e.stopPropagation();
        if ((e.ctrlKey || e.metaKey) && e.keyCode === 67) {
          this$1.copyWidget();
        }
      },
      true
    );

    // Delete 删除选中元件
    // document.addEventListener(
    //   'keyup',
    //   e => {
    //     e.stopPropagation()
    //     if (e.keyCode === 46) {
    //       this.dele()
    //     }
    //   },
    //   true
    // )

    // Ctrl + S 保存
    document.addEventListener(
      'keyup',
      function (e) {
        e.stopPropagation();
        if ((e.ctrlKey || e.metaKey) && e.keyCode === 83) {
          this$1.save();
        }
      },
      true
    );
  },

  methods: {
    // 保存
    save: function save () {
      this.$vpd.dispatch('save');
    },

    // 預覽
    preview: function preview () {
      this.$vpd.dispatch('preview');
    },

    // 复制元件
    copyWidget: function copyWidget () {
      this.$vpd.commit('copy');
    },

    // 删除元件
    dele: function dele () {
      this.$vpd.commit('delete');
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

/* script */
var __vue_script__ = script;
/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"header"},[_c('div',{staticClass:"navbar container grid-xl"},[_vm._m(0),_vm._v(" "),_c('section',{staticClass:"navbar-section"},[_c('button',{staticClass:"navbar-btn",on:{"click":_vm.dele}},[_vm._v("删除選中組件")]),_vm._v(" "),_c('button',{staticClass:"navbar-btn",on:{"click":_vm.preview}},[_vm._v("預覽")]),_vm._v(" "),_c('button',{staticClass:"navbar-btn",on:{"click":_vm.save}},[_vm._v("保存")])])])])};
var __vue_staticRenderFns__ = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"logo navbar-section"},[_c('span',[_vm._v("自定義頁面")])])}];

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = "data-v-cfc10c52";
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var navbar = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

var move = {
  methods: {
    initmovement: function initmovement (e) {
      var target = this.$vpd.state.activeElement;

      // 设置移动状态初始值
      this.$vpd.commit('initmove', {
        startX: e.pageX,
        startY: e.pageY,
        originX: target.left,
        originY: target.top
      });

      // 绑定鼠标移动事件
      document.addEventListener('mousemove', this.handlemousemove, true);

      // 取消鼠标移动事件
      document.addEventListener('mouseup', this.handlemouseup, true);
    },

    handlemousemove: function handlemousemove (e) {
      e.stopPropagation();
      e.preventDefault();

      this.$vpd.commit('move', {
        x: e.pageX,
        y: e.pageY
      });
    },

    handlemouseup: function handlemouseup () {
      document.removeEventListener('mousemove', this.handlemousemove, true);
      document.removeEventListener('mouseup', this.handlemouseup, true);
      this.$vpd.commit('stopmove');
    }
  }
};

function cumulativeOffset (element) {
  var top = 0;
  var left = 0;

  do {
    top += element.offsetTop || 0;
    left += element.offsetLeft || 0;
    element = element.offsetParent;
  } while (element)

  return {
    top: top,
    left: left
  }
}

function checkInView (el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top < window.innerHeight &&
    (rect.left < window.innerWidth &&
      rect.right > 0)
  )
}

//

var script$1 = {
  mixins: [move, vpd$1],
  props: ['zoom'],
  data: function data () {
    return {}
  },
  computed: {
    widgets: function widgets () {
      var widgets = widget.getWidgets();
      delete (widgets['braid-bg']);
      delete (widgets['braid-container']);
      delete (widgets['braid-pic']);
      return widgets
    },
    layers: function layers () {
      return this.$vpd.state.widgets
    },
    activeElement: function activeElement () {
      return this.$vpd.state.activeElement
    }
  },
  methods: {
    // 添加组件
    addWidget: function addWidget (e, item) {
      console.log(item);
      console.log(this.layers);
      if (item.name === 'braid-top-bar' || item.name === 'braid-bottom-bar' || item.name === 'braid-browser') {
        var res = this.layers.find(function (i) {
          return i.type === item.name
        });
        if (res) {
          return
        }
      }
      this.$vpd.dispatch('addWidget', item);
    },

    // 为确保添加的元件出现在可视区内，用画布向上滚动距离作为元件初始 top 值
    updateSrollTop: function updateSrollTop () {
      var top = document.getElementById('viewport').scrollTop / this.zoom * 100;
      this.$vpd.commit('updateSrollTop', top);
    },

    activeLayer: function activeLayer (e, item) {
      this.$vpd.commit('select', {
        uuid: item.uuid
      });
      var viewport = document.querySelector('#viewport');
      var target = viewport.querySelector(("[data-uuid='" + (item.uuid) + "']"));
      if (target && !checkInView(target)) {
        viewport.scrollTop = (cumulativeOffset(target).top - 50) * this.zoom / 100;
      }
    },

    getWidgetTitle: function getWidgetTitle (type) {
      return this.widgets[type].title || ''
    }
  }
};

/* script */
var __vue_script__$1 = script$1;
/* template */
var __vue_render__$1 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"menu-bar"},[_c('details',{attrs:{"open":""}},[_c('summary',[_c('vpd-icon',{attrs:{"name":"list"}}),_vm._v("可用组件")],1),_vm._v(" "),_c('ul',{staticClass:"widget-list columns",on:{"mousedown":_vm.updateSrollTop}},_vm._l((_vm.widgets),function(item){return _c('li',{key:item.name,staticClass:"menu-item column col-6",on:{"click":function (e) {_vm.addWidget(e, item);}}},[_c('vpd-icon',{attrs:{"svg":item.icon,"title":item.title}}),_vm._v(" "),_c('span',{staticClass:"menu-caption"},[_vm._v(_vm._s(item.title))])],1)}),0)]),_vm._v(" "),_c('details',[_c('summary',[_c('vpd-icon',{attrs:{"name":"layers"}}),_vm._v("已加组件")],1),_vm._v(" "),_c('ul',{staticClass:"layer-list"},_vm._l((_vm.layers),function(layer){return _c('li',{key:layer.uuid,class:{'layer-active': layer === _vm.activeElement},on:{"click":function (e) {_vm.activeLayer(e, layer);}}},[_vm._v(_vm._s(_vm.getWidgetTitle(layer.type)))])}),0)])])};
var __vue_staticRenderFns__$1 = [];

  /* style */
  var __vue_inject_styles__$1 = undefined;
  /* scoped */
  var __vue_scope_id__$1 = "data-v-463419a4";
  /* module identifier */
  var __vue_module_identifier__$1 = undefined;
  /* functional template */
  var __vue_is_functional_template__$1 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var toolbar = normalizeComponent_1(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    undefined,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$2 = {
  props: ['activeElement', 'tab']
};

/* script */
var __vue_script__$2 = script$2;
/* template */
var __vue_render__$2 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.activeElement.page && _vm.tab === 1)?_c('div',{staticClass:"panel-wrap"},[_c('div',{staticClass:"panel-row",attrs:{"flex":""}},[_c('vpd-icon',{attrs:{"name":"type"}}),_vm._v(" "),_c('div',{staticClass:"panel-label"},[_vm._v("页面名称")]),_vm._v(" "),_c('div',{staticClass:"panel-value"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.activeElement.title),expression:"activeElement.title"}],attrs:{"type":"text"},domProps:{"value":(_vm.activeElement.title)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.activeElement, "title", $event.target.value);}}})])],1),_vm._v(" "),_c('div',{staticClass:"panel-row",attrs:{"flex":""}},[_c('vpd-icon',{attrs:{"name":"smartphone"}}),_vm._v(" "),_c('div',{staticClass:"panel-label"},[_vm._v("页面高度")]),_vm._v(" "),_c('div',{staticClass:"panel-value"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.activeElement.height),expression:"activeElement.height"}],attrs:{"type":"text"},domProps:{"value":(_vm.activeElement.height)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.activeElement, "height", $event.target.value);}}})])],1),_vm._v(" "),_c('div',{staticClass:"panel-row",attrs:{"flex":""}},[_c('vpd-icon',{attrs:{"name":"droplet"}}),_vm._v(" "),_c('div',{staticClass:"panel-label"},[_vm._v("页面背景色")]),_vm._v(" "),_c('div',{staticClass:"panel-value"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.activeElement.backgroundColor),expression:"activeElement.backgroundColor"}],attrs:{"type":"color"},domProps:{"value":(_vm.activeElement.backgroundColor)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.activeElement, "backgroundColor", $event.target.value);}}})])],1)]):_vm._e()};
var __vue_staticRenderFns__$2 = [];

  /* style */
  var __vue_inject_styles__$2 = undefined;
  /* scoped */
  var __vue_scope_id__$2 = "data-v-1c441c30";
  /* module identifier */
  var __vue_module_identifier__$2 = undefined;
  /* functional template */
  var __vue_is_functional_template__$2 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var page = normalizeComponent_1(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    undefined,
    undefined
  );

//

var script$3 = {
  name: 'PanelStyle',
  mixins: [vpd$1],
  props: ['activeElement', 'tab'],
  data: function data () {
    return {}
  },

  computed: {
    widgetStyle: function widgetStyle () {
      return widget.getWidgetStyle()
    },
    // 頁面高度
    height: function height () {
      return this.$vpd.state.page.height
    },

    // 容器名稱
    containerName: function containerName () {
      var arr = [];
      this.$vpd.state.widgets.map(
        function (val) { return val.isContainer && val.name && arr.push(val.name); }
      );

      return arr
    }
  }
};

/* script */
var __vue_script__$3 = script$3;
/* template */
var __vue_render__$3 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (!_vm.activeElement.page && _vm.tab === 1)?_c('div',{staticClass:"panel-wrap"},[_c('div',{staticClass:"panel-row"},[_c('vpd-icon',{attrs:{"name":"layers"}}),_vm._v(" "),_c('div',{staticClass:"panel-label"},[_vm._v("層級")]),_vm._v(" "),_c('div',{staticClass:"panel-value"},[_vm._v(_vm._s(_vm.activeElement.z))]),_vm._v(" "),_c('div',{staticClass:"panel-slider-wrap"},[_c('vpd-slider',{attrs:{"step":1,"max":20},model:{value:(_vm.activeElement.z),callback:function ($$v) {_vm.$set(_vm.activeElement, "z", $$v);},expression:"activeElement.z"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"panel-row"},[_c('vpd-icon',{attrs:{"name":"more-horizontal"}}),_vm._v(" "),_c('div',{staticClass:"panel-label"},[_vm._v("寬度")]),_vm._v(" "),_c('div',{staticClass:"panel-value"},[_vm._v(_vm._s(_vm.activeElement.width))]),_vm._v(" "),_c('div',{staticClass:"panel-slider-wrap"},[_c('vpd-slider',{attrs:{"step":1,"max":750},model:{value:(_vm.activeElement.width),callback:function ($$v) {_vm.$set(_vm.activeElement, "width", $$v);},expression:"activeElement.width"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"panel-row"},[_c('vpd-icon',{attrs:{"name":"more-vertical"}}),_vm._v(" "),_c('div',{staticClass:"panel-label"},[_vm._v("高度")]),_vm._v(" "),_c('div',{staticClass:"panel-value"},[_vm._v(_vm._s(_vm.activeElement.height))]),_vm._v(" "),_c('div',{staticClass:"panel-slider-wrap"},[_c('vpd-slider',{attrs:{"step":1,"max":_vm.height},model:{value:(_vm.activeElement.height),callback:function ($$v) {_vm.$set(_vm.activeElement, "height", $$v);},expression:"activeElement.height"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"panel-row"},[_c('vpd-icon',{attrs:{"name":"arrow-right"}}),_vm._v(" "),_c('div',{staticClass:"panel-label"},[_vm._v("橫坐標")]),_vm._v(" "),_c('div',{staticClass:"panel-value"},[_vm._v(_vm._s(_vm.activeElement.left))]),_vm._v(" "),_c('div',{staticClass:"panel-slider-wrap"},[_c('vpd-slider',{attrs:{"step":1,"max":750},model:{value:(_vm.activeElement.left),callback:function ($$v) {_vm.$set(_vm.activeElement, "left", $$v);},expression:"activeElement.left"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"panel-row"},[_c('vpd-icon',{attrs:{"name":"arrow-down"}}),_vm._v(" "),_c('div',{staticClass:"panel-label"},[_vm._v("縱坐標")]),_vm._v(" "),_c('div',{staticClass:"panel-value"},[_vm._v(_vm._s(_vm.activeElement.top))]),_vm._v(" "),_c('div',{staticClass:"panel-slider-wrap"},[_c('vpd-slider',{attrs:{"step":1,"max":_vm.height},model:{value:(_vm.activeElement.top),callback:function ($$v) {_vm.$set(_vm.activeElement, "top", $$v);},expression:"activeElement.top"}})],1)],1),_vm._v(" "),_vm._l((_vm.widgetStyle),function(item,i){return (item.type === _vm.activeElement.type)?_c(_vm.widgetStyle[i],{key:i,tag:"component",attrs:{"active-element":_vm.activeElement}}):_vm._e()})],2):_vm._e()};
var __vue_staticRenderFns__$3 = [];

  /* style */
  var __vue_inject_styles__$3 = undefined;
  /* scoped */
  var __vue_scope_id__$3 = "data-v-489911e2";
  /* module identifier */
  var __vue_module_identifier__$3 = undefined;
  /* functional template */
  var __vue_is_functional_template__$3 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var style = normalizeComponent_1(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    undefined,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$4 = {
  props: ['activeElement', 'tab']
};

/* script */
var __vue_script__$4 = script$4;

/* template */
var __vue_render__$4 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.tab === 2)?_c('div',{staticClass:"panel-wrap"},[_c('div',{staticClass:"panel-row"},[_c('vpd-icon',{attrs:{"name":"link"}}),_vm._v(" "),_c('div',{staticClass:"panel-label"},[_vm._v("点击时")])],1),_vm._v(" "),(_vm.activeElement.href !== undefined)?_c('div',{staticClass:"panel-row"},[_c('div',{staticClass:"panel-label"},[_vm._v("链接至")]),_vm._v(" "),_c('div',{staticClass:"panel-value"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.activeElement.href),expression:"activeElement.href"}],attrs:{"type":"text","placeholder":"绝对路径，以https://开头"},domProps:{"value":(_vm.activeElement.href)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.activeElement, "href", $event.target.value);}}})])]):_vm._e()]):_vm._e()};
var __vue_staticRenderFns__$4 = [];

  /* style */
  var __vue_inject_styles__$4 = undefined;
  /* scoped */
  var __vue_scope_id__$4 = undefined;
  /* module identifier */
  var __vue_module_identifier__$4 = undefined;
  /* functional template */
  var __vue_is_functional_template__$4 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var event = normalizeComponent_1(
    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
    __vue_inject_styles__$4,
    __vue_script__$4,
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    undefined,
    undefined
  );

/**
 * 用于生成动画 keyframes 字符串
 *
 * @name { String } animation-name
 * @animation { Object } animation's properties
 * @stops { Array } key frames
 * @needFormat { Boolean } default is true
 *
 * @return { String }
 */
function getAnimateCss (name, animation, stops, needFormat) {
  if ( needFormat === void 0 ) needFormat = true;

  var properties = ['duration', 'timing', 'delay', 'iteration', 'direction', 'fill'];
  var values = [name];

  properties.map(function (val) {
    if (animation[val] === undefined) { return }
    if (val === 'duration' || val === 'delay') {
      values.push(animation[val] + 's');
    } else if (val === 'iteration') {
      values.push(animation[val] === 0 ? 'infinite' : animation[val]);
    } else {
      values.push(animation[val]);
    }
  });

  var animateCss = 'animation: ' + values.join(' ') + ';';

  // 生成 keyframes 代码
  var keyframes = [];
  if (needFormat) {
    stops.map(function (val) {
      keyframes.push('\t' + val.stop + '% {\n');
      keyframes.push('\t\t' + val.css + '\n\t}\n');
    });
  } else {
    stops.map(function (val) {
      keyframes.push(val.stop + '% {');
      keyframes.push(val.css + '}');
    });
  }
  var keyframeCss = keyframes.join('');

  var output =
"\n.anm-" + name + " {\n  -webkit-" + animateCss + "\n  " + animateCss + "\n}\n@keyframes " + name + " {\n" + keyframeCss + "}\n@-webkit-keyframes " + name + " {\n" + keyframeCss + "}\n";
  return output
}

//
var script$5 = {
  name: 'PanelAnimation',
  mixins: [vpd$1],
  props: ['activeElement', 'tab'],
  data: function data () {
    return {
      currentName: '',
      currentAnimation: null
    }
  },

  computed: {
    animationNames: function animationNames () {
      var arr = [];
      this.$vpd.state.animation.map(function (val) { return arr.push(val.name); });

      return arr
    }
  },

  watch: {
    currentName: function (val) {
      // 设置选中元件的动画名称
      if (this.activeElement.animationName !== undefined) {
        this.activeElement.animationName = val;
      }
      this.getCurrentAnimation(val);
    },

    activeElement: function (val) {
      if (val.animationName !== undefined) {
        this.currentName = val.animationName;
      } else {
        this.currentName = '';
      }
    }
  },

  methods: {
    addAnimation: function addAnimation () {
      // 检查是否存在未命名动画，避免重复添加
      if (this.$vpd.state.animation.some(function (val) { return val.name === ''; })) {
        this.$vpd.$emit('notify', {
          info: '还有未命名动画，请先命名'
        });
        return
      }
      this.$vpd.commit('addAnimation');
      this.currentName = '';
      this.getCurrentAnimation('');
    },

    getCurrentAnimation: function getCurrentAnimation (name) {
      var result = this.$vpd.state.animation.filter(function (val) { return val.name === name; });
      this.currentAnimation = result[0];
    },

    addkeyframe: function addkeyframe () {
      var name = this.currentAnimation.name;
      if (name === '') {
        this.$vpd.$emit('notify', {
          info: '请先为动画命名'
        });
        return
      }
      this.$vpd.commit('addkeyframe', name);
    },

    validateName: function validateName (e) {
      var this$1 = this;

      var value = e.target.value;
      if (value === '') { return }
      if (!/^[a-zA-Z]/.test(value)) {
        this.$nextTick(function () {
          this$1.currentAnimation.name = '';
        });
        this.$vpd.$emit('notify', {
          info: '动画名称必须以英文开头'
        });
      }

      if (/\W/g.test(value)) {
        this.$nextTick(function () {
          this$1.currentAnimation.name = value.replace(/\W/g, '');
        });
        this.$vpd.$emit('notify', {
          info: '请勿使用英文和数字以外的字符'
        });
      }
    },

    play: function play () {
      var this$1 = this;

      // stop animation if any
      this.$vpd.commit('setAnimation', false);

      setTimeout(function () {
        var animations = this$1.$vpd.state.animation;
        if (animations.length === 0) { return }

        animations.map(function (val) {
          // build style code and insert into document
          var id = 'anm-' + val.name;
          var styleNode = document.getElementById(id);

          if (styleNode) {
            styleNode.innerHTML = getAnimateCss(
              val.name,
              val,
              val.keyframes,
              false
            );
          } else {
            var style = document.createElement('style');
            style.id = id;
            style.innerHTML = getAnimateCss(
              val.name,
              val,
              val.keyframes,
              false
            );
            document.head.append(style);
          }
        });

        this$1.$vpd.commit('setAnimation', true);
      }, 200);
    }
  }
};

/* script */
var __vue_script__$5 = script$5;
/* template */
var __vue_render__$5 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.tab === 3)?_c('div',{staticClass:"panel-wrap"},[_c('button',{staticClass:"btn btn-action float-right mx-1"},[_c('vpd-icon',{attrs:{"name":"plus"},on:{"click":_vm.addAnimation}})],1),_vm._v(" "),_c('button',{staticClass:"btn btn-action float-right"},[_c('vpd-icon',{attrs:{"name":"play"},on:{"click":_vm.play}})],1),_vm._v(" "),_c('div',{staticClass:"panel-row"},[_c('vpd-icon',{attrs:{"name":"film"}}),_vm._v(" "),_c('div',{staticClass:"panel-label"},[_vm._v("选择动画")]),_vm._v(" "),_c('div',{staticClass:"panel-value"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.currentName),expression:"currentName"}],on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.currentName=$event.target.multiple ? $$selectedVal : $$selectedVal[0];}}},[_c('option',{attrs:{"value":""}},[_vm._v("无")]),_vm._v(" "),_vm._l((_vm.animationNames),function(val,index){return _c('option',{key:index,domProps:{"value":val}},[_vm._v(_vm._s(val))])})],2)])],1),_vm._v(" "),(_vm.currentAnimation)?_c('div',[_c('hr'),_vm._v(" "),_c('div',{staticClass:"panel-row"},[_c('vpd-icon',{attrs:{"name":"type"}}),_vm._v(" "),_c('div',{staticClass:"panel-label"},[_vm._v("动画名称")]),_vm._v(" "),_c('div',{staticClass:"panel-value"},[_c('input',{directives:[{name:"model",rawName:"v-model.trim",value:(_vm.currentAnimation.name),expression:"currentAnimation.name",modifiers:{"trim":true}}],attrs:{"type":"text","placeholder":"动画名称，仅限英文"},domProps:{"value":(_vm.currentAnimation.name)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.$set(_vm.currentAnimation, "name", $event.target.value.trim());},_vm.validateName],"blur":function($event){return _vm.$forceUpdate()}}})])],1),_vm._v(" "),_c('div',{staticClass:"panel-row"},[_c('vpd-icon',{attrs:{"name":"clock"}}),_vm._v(" "),_c('div',{staticClass:"panel-label"},[_vm._v("动画时长")]),_vm._v(" "),_c('div',{staticClass:"panel-value"},[_c('input',{directives:[{name:"model",rawName:"v-model.number",value:(_vm.currentAnimation.duration),expression:"currentAnimation.duration",modifiers:{"number":true}}],attrs:{"type":"text","placeholder":"请输入大于0的数字"},domProps:{"value":(_vm.currentAnimation.duration)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.currentAnimation, "duration", _vm._n($event.target.value));},"blur":function($event){return _vm.$forceUpdate()}}})])],1),_vm._v(" "),_c('div',{staticClass:"panel-row"},[_c('vpd-icon',{attrs:{"name":"watch"}}),_vm._v(" "),_c('div',{staticClass:"panel-label"},[_vm._v("动画延迟")]),_vm._v(" "),_c('div',{staticClass:"panel-value"},[_c('input',{directives:[{name:"model",rawName:"v-model.number",value:(_vm.currentAnimation.delay),expression:"currentAnimation.delay",modifiers:{"number":true}}],attrs:{"type":"text","placeholder":"请输入不小于0的数字"},domProps:{"value":(_vm.currentAnimation.delay)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.currentAnimation, "delay", _vm._n($event.target.value));},"blur":function($event){return _vm.$forceUpdate()}}})])],1),_vm._v(" "),_c('div',{staticClass:"panel-row"},[_c('vpd-icon',{attrs:{"name":"repeat"}}),_vm._v(" "),_c('div',{staticClass:"panel-label"},[_vm._v("动画循环")]),_vm._v(" "),_c('div',{staticClass:"panel-value"},[_c('input',{directives:[{name:"model",rawName:"v-model.number",value:(_vm.currentAnimation.iteration),expression:"currentAnimation.iteration",modifiers:{"number":true}}],attrs:{"type":"text","placeholder":"输入0表示无限循环"},domProps:{"value":(_vm.currentAnimation.iteration)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.currentAnimation, "iteration", _vm._n($event.target.value));},"blur":function($event){return _vm.$forceUpdate()}}})])],1),_vm._v(" "),_c('div',{staticClass:"panel-row"},[_c('vpd-icon',{attrs:{"name":"activity"}}),_vm._v(" "),_c('div',{staticClass:"panel-label"},[_vm._v("缓动函数")]),_vm._v(" "),_c('div',{staticClass:"panel-value"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.currentAnimation.timing),expression:"currentAnimation.timing"}],on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.currentAnimation, "timing", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);}}},[_c('option',[_vm._v("linear")]),_vm._v(" "),_c('option',[_vm._v("ease")]),_vm._v(" "),_c('option',[_vm._v("ease-in")]),_vm._v(" "),_c('option',[_vm._v("ease-out")]),_vm._v(" "),_c('option',[_vm._v("ease-in-out")])])])],1),_vm._v(" "),_c('div',{staticClass:"panel-row"},[_c('vpd-icon',{attrs:{"name":"rotate-cw"}}),_vm._v(" "),_c('div',{staticClass:"panel-label"},[_vm._v("动画方向")]),_vm._v(" "),_c('div',{staticClass:"panel-value"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.currentAnimation.direction),expression:"currentAnimation.direction"}],on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.currentAnimation, "direction", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);}}},[_c('option',[_vm._v("normal")]),_vm._v(" "),_c('option',[_vm._v("reverse")]),_vm._v(" "),_c('option',[_vm._v("alternate")]),_vm._v(" "),_c('option',[_vm._v("alternate-reverse")])])])],1),_vm._v(" "),_c('div',{staticClass:"panel-row"},[_c('vpd-icon',{attrs:{"name":"chevrons-down"}}),_vm._v(" "),_c('div',{staticClass:"panel-label"},[_vm._v("fill-mode")]),_vm._v(" "),_c('div',{staticClass:"panel-value"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.currentAnimation.fill),expression:"currentAnimation.fill"}],on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.currentAnimation, "fill", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);}}},[_c('option',[_vm._v("none")]),_vm._v(" "),_c('option',[_vm._v("forwards")]),_vm._v(" "),_c('option',[_vm._v("backwards")]),_vm._v(" "),_c('option',[_vm._v("both")])])])],1),_vm._v(" "),_c('hr'),_vm._v(" "),_vm._l((_vm.currentAnimation.keyframes),function(val,i){return _c('div',{key:i},[_c('div',{staticClass:"panel-row"},[_c('vpd-icon',{attrs:{"name":"stop-circle"}}),_vm._v(" "),_c('div',{staticClass:"panel-label"},[_vm._v("stop - "+_vm._s(i))]),_vm._v(" "),_c('div',{staticClass:"panel-value"},[_vm._v(_vm._s(val.stop)+"%")]),_vm._v(" "),_c('div',{staticClass:"panel-slider-wrap"},[_c('vpd-slider',{attrs:{"step":1},model:{value:(val.stop),callback:function ($$v) {_vm.$set(val, "stop", $$v);},expression:"val.stop"}})],1)],1),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(val.css),expression:"val.css"}],attrs:{"placeholder":"IMPORTANT: use rem, not px"},domProps:{"value":(val.css)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(val, "css", $event.target.value);}}}),_vm._v(" "),_c('div',{staticStyle:{"margin":"10px 0 0 20px"}},[(i + 1 === _vm.currentAnimation.keyframes.length)?_c('button',{staticClass:"btn btn-primary",on:{"click":_vm.addkeyframe}},[_c('vpd-icon',{attrs:{"name":"plus"}}),_vm._v(" 添加新的动画\n        ")],1):_vm._e()])])})],2):_vm._e()]):_vm._e()};
var __vue_staticRenderFns__$5 = [];

  /* style */
  var __vue_inject_styles__$5 = undefined;
  /* scoped */
  var __vue_scope_id__$5 = "data-v-fb8fe35e";
  /* module identifier */
  var __vue_module_identifier__$5 = undefined;
  /* functional template */
  var __vue_is_functional_template__$5 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var animation = normalizeComponent_1(
    { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
    __vue_inject_styles__$5,
    __vue_script__$5,
    __vue_scope_id__$5,
    __vue_is_functional_template__$5,
    __vue_module_identifier__$5,
    undefined,
    undefined
  );

//

var script$6 = {
  components: {
    page: page,
    appearance: style,
    event: event,
    animation: animation
  },
  mixins: [vpd$1],

  data: function data () {
    return {
      activeTab: 1
    }
  },

  computed: {
    // 选中元素对象
    activeElement: function activeElement () {
      return this.$vpd.state.activeElement
    }
  }
};

/* script */
var __vue_script__$6 = script$6;
/* template */
var __vue_render__$6 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('ul',{staticClass:"tab tab-block panel-tab"},[_c('li',{staticClass:"tab-item",class:{active: _vm.activeTab === 1},on:{"click":function($event){_vm.activeTab = 1;}}},[_c('a',[_vm._v("参数")])])]),_vm._v(" "),_c('page',{attrs:{"active-element":_vm.activeElement,"tab":_vm.activeTab}}),_vm._v(" "),_c('appearance',{attrs:{"active-element":_vm.activeElement,"tab":_vm.activeTab}}),_vm._v(" "),_c('event',{attrs:{"active-element":_vm.activeElement,"tab":_vm.activeTab}}),_vm._v(" "),_c('animation',{attrs:{"active-element":_vm.activeElement,"tab":_vm.activeTab}})],1)};
var __vue_staticRenderFns__$6 = [];

  /* style */
  var __vue_inject_styles__$6 = undefined;
  /* scoped */
  var __vue_scope_id__$6 = "data-v-6a0cf2be";
  /* module identifier */
  var __vue_module_identifier__$6 = undefined;
  /* functional template */
  var __vue_is_functional_template__$6 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var panel = normalizeComponent_1(
    { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
    __vue_inject_styles__$6,
    __vue_script__$6,
    __vue_scope_id__$6,
    __vue_is_functional_template__$6,
    __vue_module_identifier__$6,
    undefined,
    undefined
  );

//

var script$7 = {
  name: 'RefLines',
  mixins: [vpd$1],
  computed: {
    moving: function moving () {
      return this.$vpd.state.moving
    },
    guides: function guides () {
      var state = this.$vpd.state;
      var guides = [];
      var uuid = state.uuid;

      state.widgets.forEach(function (item) {
        // 排除选中元素
        if (item.hasGuide && item.uuid === uuid) { return }
        // 排除容器中的元件
        if (item.hasGuide && item.belong !== 'page') { return }

        guides.push({
          uuid: item.uuid,
          width: item.width,
          height: item.height,
          top: item.top,
          left: item.left
        });
      });

      return guides
    },
    /**
     * 获取参考线
     *
     * 取画布中线以及每个元件上下边的坐标
     * 排除正在移动的元件
     * 排除画布边缘坐标
     * 排除重复坐标
     */
    horiz: function horiz () {
      var guides = this.guides;
      var cor = [];

      guides.forEach(function (val) {
        var top = val.top;
        var bottom = top + val.height;

        if (cor.indexOf(top) < 0 && top !== 0) {
          cor.push({
            id: ("horiz-" + (val.uuid) + "-" + top),
            val: top
          });
        }
        if (cor.indexOf(bottom) < 0) {
          cor.push({
            id: ("horiz-" + (val.uuid) + "-" + bottom),
            val: bottom
          });
        }
      });

      return cor
    },

    verti: function verti () {
      var guides = this.guides;
      var cor = [375];

      guides.forEach(function (val) {
        var left = val.left;
        var right = left + val.width;

        if (cor.indexOf(left) < 0 && left !== 0) {
          cor.push({
            id: ("verti-" + (val.uuid) + "-" + left),
            val: left
          });
        }
        if (cor.indexOf(right) < 0 && right < 750) {
          cor.push({
            id: ("verti-" + (val.uuid) + "-" + right),
            val: right
          });
        }
      });

      return cor
    },

    // 移动元素上下边坐标
    horizontal: function horizontal () {
      var a = this.$vpd.state.activeElement;
      if (a) {
        var h = Math.round(a.height);
        return [a.top, a.top + h]
      } else {
        return []
      }
    },

    // 移动元素左中右坐标
    vertical: function vertical () {
      var a = this.$vpd.state.activeElement;
      if (a) {
        var w = Math.round(a.width / 2);
        return [a.left, a.left + w, a.left + w * 2]
      } else {
        return []
      }
    }
  },
  methods: {
    attachHoriz: function attachHoriz (value) {
      return this.horizontal.some(function (val) { return Math.abs(val - value) <= 1; })
    },
    attachVerti: function attachVerti (value) {
      return this.vertical.some(function (val) { return Math.abs(val - value) <= 1; })
    }
  }
};

/* script */
var __vue_script__$7 = script$7;
/* template */
var __vue_render__$7 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.moving),expression:"moving"}],staticClass:"guides"},[_vm._l((_vm.horiz),function(val){return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.attachHoriz(val.val)),expression:"attachHoriz(val.val)"}],key:val.id,staticClass:"horiz",style:({top: val.val + 'px'})})}),_vm._v(" "),_vm._l((_vm.verti),function(val){return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.attachVerti(val.val)),expression:"attachVerti(val.val)"}],key:val.id,staticClass:"verti",style:({left: val.val + 'px'})})})],2)};
var __vue_staticRenderFns__$7 = [];

  /* style */
  var __vue_inject_styles__$7 = undefined;
  /* scoped */
  var __vue_scope_id__$7 = "data-v-732b1964";
  /* module identifier */
  var __vue_module_identifier__$7 = undefined;
  /* functional template */
  var __vue_is_functional_template__$7 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var ref = normalizeComponent_1(
    { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
    __vue_inject_styles__$7,
    __vue_script__$7,
    __vue_scope_id__$7,
    __vue_is_functional_template__$7,
    __vue_module_identifier__$7,
    undefined,
    undefined
  );

//
var script$8 = {
  mixins: [vpd$1],
  data: function data () {
    return {
      type: '' // 调整方向 left | right | up | down
    }
  },
  computed: {
    elm: function elm () {
      var target = this.$vpd.state.activeElement;

      if (!target.resizable || target.belong !== 'page') { return '' }

      return target
    }
  },

  methods: {
    handlemousedown: function handlemousedown (e, type, originX, originY) {
      e.stopPropagation();
      this.type = type;
      this.$vpd.commit('initmove', {
        startX: e.pageX,
        startY: e.pageY,
        originX: this.elm[originX],
        originY: this.elm[originY]
      });

      document.addEventListener('mousemove', this.handlemousemove, true);
      document.addEventListener('mouseup', this.handlemouseup, true);
    },

    handlemousemove: function handlemousemove (e) {
      e.stopPropagation();
      e.preventDefault();

      this.$vpd.commit('resize', {
        x: e.pageX,
        y: e.pageY,
        type: this.type
      });
    },

    handlemouseup: function handlemouseup () {
      document.removeEventListener('mousemove', this.handlemousemove, true);
      document.removeEventListener('mouseup', this.handlemouseup, true);
      this.$vpd.commit('stopmove');
    }
  }
};

/* script */
var __vue_script__$8 = script$8;
/* template */
var __vue_render__$8 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.elm),expression:"elm"}]},[_c('div',{staticClass:"verti",style:({
      height: _vm.elm.height + 'px',
      top: _vm.elm.top + 'px',
      left: _vm.elm.left + 'px'
    }),on:{"mousedown":function($event){return _vm.handlemousedown($event, 'left', 'left', 'width')}}},[_c('div',{staticClass:"square"})]),_vm._v(" "),_c('div',{staticClass:"verti",style:({
      height: _vm.elm.height + 'px',
      top: _vm.elm.top + 'px',
      left: _vm.elm.left + _vm.elm.width + 'px'
    }),on:{"mousedown":function($event){return _vm.handlemousedown($event, 'right', 'width')}}},[_c('div',{staticClass:"square"})]),_vm._v(" "),_c('div',{staticClass:"horiz",style:({
      width: _vm.elm.width + 'px',
      top: _vm.elm.top + 'px',
      left: _vm.elm.left + 'px'
    }),on:{"mousedown":function($event){return _vm.handlemousedown($event, 'up', 'top', 'height')}}},[_c('div',{staticClass:"square"})]),_vm._v(" "),_c('div',{staticClass:"horiz",style:({
      width: _vm.elm.width + 'px',
      top: _vm.elm.top + _vm.elm.height + 'px',
      left: _vm.elm.left + 'px'
    }),on:{"mousedown":function($event){return _vm.handlemousedown($event, 'down', 'height')}}},[_c('div',{staticClass:"square"})])])};
var __vue_staticRenderFns__$8 = [];

  /* style */
  var __vue_inject_styles__$8 = undefined;
  /* scoped */
  var __vue_scope_id__$8 = "data-v-0c708f2d";
  /* module identifier */
  var __vue_module_identifier__$8 = undefined;
  /* functional template */
  var __vue_is_functional_template__$8 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var control = normalizeComponent_1(
    { render: __vue_render__$8, staticRenderFns: __vue_staticRenderFns__$8 },
    __vue_inject_styles__$8,
    __vue_script__$8,
    __vue_scope_id__$8,
    __vue_is_functional_template__$8,
    __vue_module_identifier__$8,
    undefined,
    undefined
  );

//

var script$9 = {
  name: 'Viewport',
  components: {
    ref: ref, // 参考线
    control: control // 尺寸控制
  },

  mixins: [move, vpd$1],

  props: ['zoom'],

  data: function data () {
    return {}
  },

  computed: {
    // 已添加的组件
    widgetStore: function widgetStore () {
      return this.$vpd.state.widgets.filter(function (item) { return item.belong === 'page'; })
    },

    // 画布高度
    height: function height () {
      return this.$vpd.state.page.height
    },

    // 页面背景色
    backgroundColor: function backgroundColor () {
      return this.$vpd.state.page.backgroundColor
    },

    // 选中项id
    id: function id () {
      // var type = this.$vpd.state.type
      // var index = this.$vpd.state.index
      // index = index >= 0 ? index : ''
      // return type + index
      return this.$vpd.state.uuid
    },

    // 动画播放状态
    playState: function playState () {
      return this.$vpd.state.playState
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    // 采用事件代理的方式监听元件的选中操作
    document
      .getElementById('viewport')
      .addEventListener('mousedown', this.handleSelection, false);

    // 绑定键盘上下左右键用于元件的移动
    document.addEventListener(
      'keydown',
      function (e) {
        e.stopPropagation();
        var target = this$1.$vpd.state.activeElement;

        // 左
        if (e.keyCode === 37 && target.left) {
          target.left -= 1;
          return
        }
        // 上
        if (e.keyCode === 38 && target.top) {
          e.preventDefault();
          target.top -= 1;
          return
        }
        // 右
        if (e.keyCode === 39 && target.left) {
          target.left += 1;
          return
        }

        // 下
        if (e.keyCode === 40 && target.top) {
          e.preventDefault();
          target.top += 1;
        }
      },
      true
    );
  },

  methods: {
    handleSelection: function handleSelection (e) {
      console.log(e);
      var target = e.target;
      var type = target.getAttribute('data-type');

      if (type) {
        var uuid = target.getAttribute('data-uuid');

        // 设置选中元素
        this.$vpd.commit('select', {
          uuid: uuid || -1
        });

        // 绑定移动事件：只有从属于 page 的，除背景图以外的元件才能移动
        target = this.$vpd.state.activeElement;
        if (target.belong === 'page' && target.dragable) {
          this.initmovement(e); // 参见 mixins
        }
      } else {
        // 取消选中元素
        this.$vpd.commit('select', {
          uuid: -1
        });
      }
    },

    // 替换图片
    replaceImage: function replaceImage (e) {
      var this$1 = this;

      if (this.$vpd.state.activeElement.isUpload) {
        this.$vpd.$emit('upload', function (payload) {
          this$1.$vpd.commit('replaceImage', payload);
        });
      }
    },

    // 获取子组件
    getChilds: function getChilds (name) {
      return this.$vpd.state.widgets.filter(
        function (item) { return item.belong === name; }
      )
    }
  }
};

/* script */
var __vue_script__$9 = script$9;
/* template */
var __vue_render__$9 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"holder",attrs:{"id":"viewport"}},[_c('div',{staticClass:"screen",style:({
      backgroundColor: _vm.backgroundColor,
      height: _vm.height + 'px',
      transform: 'scale(' + _vm.zoom / 100 + ')'
    }),on:{"dblclick":_vm.replaceImage}},[_vm._l((_vm.widgetStore),function(val){return _c(val.type,{key:val.uuid,tag:"component",staticClass:"layer",class:{'g-active': _vm.id === val.uuid},attrs:{"data-title":val.type,"val":val,"h":_vm.height,"w":750,"data-type":val.type,"data-uuid":val.uuid,"play-state":_vm.playState}},_vm._l((_vm.getChilds(val.name)),function(child){return _c(child.type,{key:child.uuid,tag:"component",staticClass:"layer layer-child",class:{'g-active': _vm.id === child.uuid},attrs:{"data-title":child.type,"val":child,"h":_vm.height,"w":750,"data-type":child.type,"data-uuid":child.uuid,"play-state":_vm.playState}})}),1)}),_vm._v(" "),_c('ref'),_vm._v(" "),_c('control')],2)])};
var __vue_staticRenderFns__$9 = [];

  /* style */
  var __vue_inject_styles__$9 = undefined;
  /* scoped */
  var __vue_scope_id__$9 = "data-v-2a461ef8";
  /* module identifier */
  var __vue_module_identifier__$9 = undefined;
  /* functional template */
  var __vue_is_functional_template__$9 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var viewport = normalizeComponent_1(
    { render: __vue_render__$9, staticRenderFns: __vue_staticRenderFns__$9 },
    __vue_inject_styles__$9,
    __vue_script__$9,
    __vue_scope_id__$9,
    __vue_is_functional_template__$9,
    __vue_module_identifier__$9,
    undefined,
    undefined
  );

// Load a sprite
function loadSprite (url, id) {
  var x = new XMLHttpRequest();

  // If the id is set and sprite exists, bail
  if (document.querySelector('#' + id)) {
    return
  }

  // Create placeholder (to prevent loading twice)
  var container = document.createElement('div');
  container.setAttribute('hidden', '');
  container.setAttribute('id', id);
  document.body.insertBefore(container, document.body.childNodes[0]);

  // Check for CORS support
  if ('withCredentials' in x) {
    x.open('GET', url, true);
  } else {
    return
  }

  // Inject hidden div with sprite on load
  x.onload = function () {
    container.innerHTML = x.responseText;
  };

  x.send();
}

//
var script$a = {
  name: 'VpdToast',
  mixins: [vpd$1],
  data: function data () {
    return {
      info: '',
      type: 'warning',
      show: false
    }
  },
  computed: {
    klass: function klass () {
      return {
        'toast-success': this.type === 'success',
        'toast-warning': this.type === 'warning',
        'toast-error': this.type === 'error'
      }
    }
  },
  mounted: function mounted () {
    var this$1 = this;

    this.$vpd.$on('notify', function (option) {
      this$1.notify(option.info, option.type);
    });
  },
  methods: {
    notify: function notify (info, type) {
      var this$1 = this;

      if (this.show) { return }
      this.info = info || 'Success!';
      if (type) { this.type = type; }
      this.show = true;
      setTimeout(function () {
        this$1.show = false;
      }, 2000);
    }
  }
};

/* script */
var __vue_script__$a = script$a;
/* template */
var __vue_render__$a = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"drop"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],staticClass:"toast",class:_vm.klass},[_vm._v(_vm._s(_vm.info))])])};
var __vue_staticRenderFns__$a = [];

  /* style */
  var __vue_inject_styles__$a = undefined;
  /* scoped */
  var __vue_scope_id__$a = "data-v-4b68d900";
  /* module identifier */
  var __vue_module_identifier__$a = undefined;
  /* functional template */
  var __vue_is_functional_template__$a = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var toast = normalizeComponent_1(
    { render: __vue_render__$a, staticRenderFns: __vue_staticRenderFns__$a },
    __vue_inject_styles__$a,
    __vue_script__$a,
    __vue_scope_id__$a,
    __vue_is_functional_template__$a,
    __vue_module_identifier__$a,
    undefined,
    undefined
  );

//
var script$b = {
  name: 'VpdUploader',
  mixins: [vpd$1],
  props: {
    upload: Function,
    uploadOption: Object
  },
  data: function data () {
    return {
      multiple: false, // 是否允许上传多张
      uploader: null, // input file
      cb: null // 回调函数
    }
  },

  computed: {
    // 图片初始位置纵坐标
    top: function top () {
      return this.$vpd.state.top
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.uploader = document.getElementById('uploader');

    /**
     * 在全局通信中介上注册上传图片自定义事件
     * 所有需要上传图片的地方均可调用
     *
     * 调用方法：
     * this.$vpd.$emit('upload', function (payload) {/.../})
     * @param payload { Array } 图片上传、下载完成后的一个包含所有图片对象的数组
     * @param multiple { Boolean } 是否上传多张，默认为 false
     */
    this.$vpd.$on('upload', function (cb, multiple) {
      this$1.multiple = !!multiple;
      this$1.cb = cb;
      setTimeout(function () {
        this$1.uploader.click();
      }, 0);
    });
  },

  methods: {
    // 处理添加图片操作，触发事件：change
    handleUpload: function handleUpload () {
      var this$1 = this;

      var files = this.uploader.files;

      if (!files || files.length === 0) { return }

      files = Array.prototype.slice.call(this.uploader.files);

      var uploadFn = this.upload || this.defaultUpload;

      uploadFn(files).then(function (res) {
        console.log('status: ', res.status);
        // 图片下载队列完成后执行回调
        new Promise(function (resolve) {
          this$1.handleLoadQueue(resolve, res.files)();
        }).then(function (payload) {
          this$1.cb(payload);
        });
      });
    },

    defaultUpload: function defaultUpload (files) {
      if (this.uploadOption.url) {
        var data = new FormData();
        files.forEach(function (file) { return data.append('file[]', file); });

        return fetch(this.uploadOption.url, {
          method: 'POST',
          body: data
        })
      } else {
        alert('请配置图片上传api地址');
      }
    },

    /**
     * 处理下载队列
     * 图片按顺序下载完一张再下载下一张，以确保图片数组按上传的顺序排列
     */
    handleLoadQueue: function handleLoadQueue (resolve, files) {
      var this$1 = this;

      var i = 0;
      var len = files.length;
      var payload = [];

      var download = function () {
        // 接入后端后，files 应改为回调参数
        // url = files[i]
        var url = window.URL.createObjectURL(files[i]);

        new Promise(function (resolve) {
          this$1.getImageWidth(url, resolve);
        }).then(function (size) {
          payload.push({
            width: size.w,
            height: size.h,
            top: this$1.top,
            url: url, // 图片预览地址
            src: 'images/' + files[i].name // 图片实际地址
          });

          // 所有图片下载完毕，跳到下一步，否则继续下载
          if (++i === len) {
            resolve(payload);
          } else {
            download();
          }
        });
      };

      return download
    },

    /**
     * 使用 new Image 预加载的方式获取图片宽高
     * 这是一个异步操作，须采用 promise
     *
     * @param url { URL | base64 } 图片 url
     * @param res { Promise resolve }
     *
     * @return { Object } 包含图片宽高的对象
     */
    getImageWidth: function getImageWidth (url, res) {
      var img = new Image();
      img.src = url;
      img.onload = function () {
        res({
          w: Math.round(img.width),
          h: Math.round(img.height)
        });
      };
    }
  }
};

/* script */
var __vue_script__$b = script$b;

/* template */
var __vue_render__$b = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('input',{staticStyle:{"display":"none"},attrs:{"id":"uploader","multiple":_vm.multiple ? 'multiple' : false,"type":"file","accept":"image/png, image/jpeg, image/gif"},on:{"change":_vm.handleUpload}})};
var __vue_staticRenderFns__$b = [];

  /* style */
  var __vue_inject_styles__$b = undefined;
  /* scoped */
  var __vue_scope_id__$b = undefined;
  /* module identifier */
  var __vue_module_identifier__$b = undefined;
  /* functional template */
  var __vue_is_functional_template__$b = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var uploader = normalizeComponent_1(
    { render: __vue_render__$b, staticRenderFns: __vue_staticRenderFns__$b },
    __vue_inject_styles__$b,
    __vue_script__$b,
    __vue_scope_id__$b,
    __vue_is_functional_template__$b,
    __vue_module_identifier__$b,
    undefined,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$c = {
  name: 'VpdSlider',
  props: {
    value: {
      type: [Number, String],
      default: 0
    },
    max: {
      type: [Number, String],
      default: 100
    },
    min: {
      type: [Number, String],
      default: 0
    },
    step: {
      type: Number,
      default: 0.1
    },
    tuning: {
      type: Boolean,
      default: true
    }
  },

  data: function data () {
    return {
      inputValue: this.value,
      active: false,
      focused: false,
      dragging: false
    }
  },

  computed: {
    percent: function percent () {
      var percentNum = (this.inputValue - this.min) / (this.max - this.min) * 100;
      return percentNum > 100 ? 100 : percentNum < 0 ? 0 : percentNum
    },
    fillStyle: function fillStyle () {
      return {
        width: this.percent + '%'
      }
    },
    thumbStyle: function thumbStyle () {
      return {
        left: this.percent + '%'
      }
    },
    sliderClass: function sliderClass () {
      return {
        zero: this.inputValue <= this.min,
        active: this.active
      }
    }
  },

  watch: {
    value: function value (val) {
      this.inputValue = val;
    },
    inputValue: function inputValue (val) {
      this.$emit('input', val);
    }
  },

  created: function created () {
    this.handleDragMouseMove = this.handleDragMouseMove.bind(this);
    this.handleMouseEnd = this.handleMouseEnd.bind(this);
  },

  methods: {
    handleMouseDown: function handleMouseDown (e) {
      this.setValue(e);
      e.preventDefault();
      document.addEventListener('mousemove', this.handleDragMouseMove);
      document.addEventListener('mouseup', this.handleMouseEnd);
      this.$el.focus();
      this.onDragStart(e);
    },

    handleMouseUp: function handleMouseUp () {
      this.active = false;
    },

    handleFocus: function handleFocus () {
      this.focused = true;
    },

    handleBlur: function handleBlur () {
      this.focused = false;
    },

    // 从点击位置更新 value
    setValue: function setValue (e) {
      var ref = this;
      var $el = ref.$el;
      var max = ref.max;
      var min = ref.min;
      var step = ref.step;
      var value = (e.clientX - $el.firstElementChild.getBoundingClientRect().left) / $el.firstElementChild.offsetWidth * (max - min);
      value = Math.round(value / step) * step + min;
      value = parseFloat(value.toFixed(5));

      if (value > max) {
        value = max;
      } else if (value < min) {
        value = min;
      }
      this.inputValue = value;
    },

    // 拖拽控制
    onDragStart: function onDragStart (e) {
      this.dragging = true;
      this.active = true;
    },

    onDragUpdate: function onDragUpdate (e) {
      var this$1 = this;

      if (this.dragRunning) { return }
      this.dragRunning = true;
      window.requestAnimationFrame(function () {
        this$1.dragRunning = false;
        if (!this$1.disabled) { this$1.setValue(e); }
      });
    },

    onDragStop: function onDragStop (e) {
      this.dragging = false;
      this.active = false;
    },

    handleDragMouseMove: function handleDragMouseMove (e) {
      this.onDragUpdate(e);
    },

    handleMouseEnd: function handleMouseEnd (e) {
      document.removeEventListener('mousemove', this.handleDragMouseMove);
      document.removeEventListener('mouseup', this.handleMouseEnd);
      this.onDragStop(e);
    },

    increase: function increase () {
      if (this.inputValue >= this.max) { return }
      this.inputValue += this.step;
    },

    decrease: function decrease () {
      if (this.inputValue <= this.min) { return }
      this.inputValue -= this.step;
    }
  }
};

/* script */
var __vue_script__$c = script$c;
/* template */
var __vue_render__$c = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:{'mu-lisder-wrapper': _vm.tuning}},[_c('div',{staticClass:"mu-slider",class:_vm.sliderClass,on:{"focus":_vm.handleFocus,"blur":_vm.handleBlur,"mousedown":_vm.handleMouseDown,"mouseup":_vm.handleMouseUp}},[_c('input',{attrs:{"type":"hidden"},domProps:{"value":_vm.inputValue}}),_vm._v(" "),_c('div',{staticClass:"mu-slider-track"}),_vm._v(" "),_c('div',{staticClass:"mu-slider-fill",style:(_vm.fillStyle)}),_vm._v(" "),_c('div',{staticClass:"mu-slider-thumb",style:(_vm.thumbStyle)})]),_vm._v(" "),(_vm.tuning)?_c('div',{staticClass:"mu-increment",on:{"mousedown":function($event){$event.stopPropagation();return _vm.increase($event)}}},[_vm._v("+")]):_vm._e(),_vm._v(" "),(_vm.tuning)?_c('div',{staticClass:"mu-decrement",on:{"mousedown":function($event){$event.stopPropagation();return _vm.decrease($event)}}},[_vm._v("-")]):_vm._e()])};
var __vue_staticRenderFns__$c = [];

  /* style */
  var __vue_inject_styles__$c = undefined;
  /* scoped */
  var __vue_scope_id__$c = "data-v-6bc628c1";
  /* module identifier */
  var __vue_module_identifier__$c = undefined;
  /* functional template */
  var __vue_is_functional_template__$c = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var slider = normalizeComponent_1(
    { render: __vue_render__$c, staticRenderFns: __vue_staticRenderFns__$c },
    __vue_inject_styles__$c,
    __vue_script__$c,
    __vue_scope_id__$c,
    __vue_is_functional_template__$c,
    __vue_module_identifier__$c,
    undefined,
    undefined
  );

var obj;

var script$d = {
  name: 'VuePageDesigner',
  components: ( obj = {
    navbar: navbar, // 顶部导航栏
    toolbar: toolbar, // 左侧菜单栏
    panel: panel, // 右侧参数面板
    viewport: viewport
  }, obj[toast.name] = toast, obj[uploader.name] = uploader, obj[slider.name] = slider, obj ),
  mixins: [vpd$1],
  props: {
    value: Object,
    widgets: Object,
    upload: Function,
    uploadOption: Object
  },

  computed: {
    zoom: function zoom () {
      return this.$vpd.state.zoom
    }
  },
  beforeCreate: function beforeCreate () {
    // TODO: custom svg path by config
    loadSprite('//unpkg.com/vue-page-designer/dist/icons.svg', 'svgspriteit');
  },
  created: function created () {
    var this$1 = this;

    // 注册 widgets
    Vue.use(widget, {
      widgets: this.widgets
    });
    // 初始化已有数据
    if (this.value) {
      this.$vpd.replaceState(this.value);
    }
    this.$vpd.$on('save', function () {
      this$1.$emit('save', this$1.$vpd.state);
    });
    this.$vpd.$on('preview', function () {
      this$1.$emit('preview', this$1.$vpd.state);
    });
  },
  mounted: function mounted () {
    // 初始化选中元件（将页面作为初始选中元件）
    this.$vpd.commit('initActive');
  },

  methods: {
    dozoom: function dozoom (val) {
      this.$vpd.commit('zoom', val);
    },
    changeActiveElement: function changeActiveElement (uuid) {
      // 设置选中元素
      this.$vpd.commit('select', {
        uuid: uuid || -1
      });
    }
  }
};

/* script */
var __vue_script__$d = script$d;
/* template */
var __vue_render__$d = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app page-design-wrap"},[_c('navbar'),_vm._v(" "),_c('div',{staticClass:"body container grid-xl"},[_c('div',{staticClass:"columns col-gapless"},[_c('toolbar',{staticClass:"toolbar column",attrs:{"zoom":_vm.zoom}}),_vm._v(" "),_c('div',{staticClass:"viewport column"},[_c('viewport',{attrs:{"zoom":_vm.zoom}}),_vm._v(" "),_c('div',{staticClass:"zoom-wrap"},[_c('vpd-slider',{attrs:{"value":_vm.zoom,"step":1,"tuning":false},on:{"input":_vm.dozoom}}),_vm._v(" "),_c('div',{staticClass:"zoom-value"},[_vm._v(_vm._s(_vm.zoom)+"%")])],1)],1),_vm._v(" "),_c('panel',{staticClass:"control-panel column"})],1)]),_vm._v(" "),_c('vpd-uploader',{attrs:{"upload":_vm.upload,"upload-option":_vm.uploadOption}}),_vm._v(" "),_c('vpd-toast')],1)};
var __vue_staticRenderFns__$d = [];

  /* style */
  var __vue_inject_styles__$d = undefined;
  /* scoped */
  var __vue_scope_id__$d = "data-v-0a4ac68e";
  /* module identifier */
  var __vue_module_identifier__$d = undefined;
  /* functional template */
  var __vue_is_functional_template__$d = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var VuePageDesigner = normalizeComponent_1(
    { render: __vue_render__$d, staticRenderFns: __vue_staticRenderFns__$d },
    __vue_inject_styles__$d,
    __vue_script__$d,
    __vue_scope_id__$d,
    __vue_is_functional_template__$d,
    __vue_module_identifier__$d,
    undefined,
    undefined
  );

//
//
//
//
//
//
//

var script$e = {
  name: 'VpdIcon',
  props: {
    svg: String,
    title: String,
    name: String,
    options: Object
  },
  computed: {
    icon: function icon () {
      return this.svg || ("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><use xlink:href=\"#" + (this.name) + "\"></svg>")
    }
  },
  methods: {
    handleClick: function handleClick () {
      this.$emit('click');
    }
  }
};

/* script */
var __vue_script__$e = script$e;
/* template */
var __vue_render__$e = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('i',{staticClass:"icon svg-icon",attrs:{"title":_vm.title},domProps:{"innerHTML":_vm._s(_vm.icon)},on:{"click":_vm.handleClick}})};
var __vue_staticRenderFns__$e = [];

  /* style */
  var __vue_inject_styles__$e = undefined;
  /* scoped */
  var __vue_scope_id__$e = "data-v-d3004e2e";
  /* module identifier */
  var __vue_module_identifier__$e = undefined;
  /* functional template */
  var __vue_is_functional_template__$e = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var icon = normalizeComponent_1(
    { render: __vue_render__$e, staticRenderFns: __vue_staticRenderFns__$e },
    __vue_inject_styles__$e,
    __vue_script__$e,
    __vue_scope_id__$e,
    __vue_is_functional_template__$e,
    __vue_module_identifier__$e,
    undefined,
    undefined
  );

var install$1 = function (Vue$$1, opts) {
  if ( opts === void 0 ) opts = {};

  Vue$$1.component('VpdSlider', slider);
  Vue$$1.component('VpdIcon', icon);

  Vue$$1.component('VuePageDesigner', VuePageDesigner);
};

if (typeof window !== 'undefined' && window.Vue) {
  install$1(window.Vue);
}

var index = {
  install: install$1,
  VuePageDesigner: VuePageDesigner
};

export default index;
