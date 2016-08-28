/**
 * material-design-lite - Material Design Components in CSS, JS and HTML
 * @version v1.1.3
 * @license Apache-2.0
 * @copyright 2015 Google, Inc.
 * @link https://github.com/google/material-design-lite
 */
!function(){"use strict";function e(e,t){if(e){if(t.element_.classList.contains(t.CssClasses_.MDL_JS_RIPPLE_EFFECT)){var s=document.createElement("span");s.classList.add(t.CssClasses_.MDL_RIPPLE_CONTAINER),s.classList.add(t.CssClasses_.MDL_JS_RIPPLE_EFFECT);var i=document.createElement("span");i.classList.add(t.CssClasses_.MDL_RIPPLE),s.appendChild(i),e.appendChild(s)}e.addEventListener("click",function(s){s.preventDefault();var i=e.href.split("#")[1],n=t.element_.querySelector("#"+i);t.resetTabState_(),t.resetPanelState_(),e.classList.add(t.CssClasses_.ACTIVE_CLASS),n.classList.add(t.CssClasses_.ACTIVE_CLASS)})}}function t(e,t,s,i){function n(){var n=e.href.split("#")[1],a=i.content_.querySelector("#"+n);i.resetTabState_(t),i.resetPanelState_(s),e.classList.add(i.CssClasses_.IS_ACTIVE),a.classList.add(i.CssClasses_.IS_ACTIVE)}if(i.tabBar_.classList.contains(i.CssClasses_.JS_RIPPLE_EFFECT)){var a=document.createElement("span");a.classList.add(i.CssClasses_.RIPPLE_CONTAINER),a.classList.add(i.CssClasses_.JS_RIPPLE_EFFECT);var l=document.createElement("span");l.classList.add(i.CssClasses_.RIPPLE),a.appendChild(l),e.appendChild(a)}e.addEventListener("click",function(t){"#"===e.getAttribute("href").charAt(0)&&(t.preventDefault(),n())}),e.show=n}var s={upgradeDom:function(e,t){},upgradeElement:function(e,t){},upgradeElements:function(e){},upgradeAllRegistered:function(){},registerUpgradedCallback:function(e,t){},register:function(e){},downgradeElements:function(e){}};s=function(){function e(e,t){for(var s=0;s<h.length;s++)if(h[s].className===e)return"undefined"!=typeof t&&(h[s]=t),h[s];return!1}function t(e){var t=e.getAttribute("data-upgraded");return null===t?[""]:t.split(",")}function s(e,s){var i=t(e);return-1!==i.indexOf(s)}function i(t,s){if("undefined"==typeof t&&"undefined"==typeof s)for(var a=0;a<h.length;a++)i(h[a].className,h[a].cssClass);else{var l=t;if("undefined"==typeof s){var o=e(l);o&&(s=o.cssClass)}for(var r=document.querySelectorAll("."+s),_=0;_<r.length;_++)n(r[_],l)}}function n(i,n){if(!("object"==typeof i&&i instanceof Element))throw new Error("Invalid argument provided to upgrade MDL element.");var a=t(i),l=[];if(n)s(i,n)||l.push(e(n));else{var o=i.classList;h.forEach(function(e){o.contains(e.cssClass)&&-1===l.indexOf(e)&&!s(i,e.className)&&l.push(e)})}for(var r,_=0,d=l.length;d>_;_++){if(r=l[_],!r)throw new Error("Unable to find a registered component for the given class.");a.push(r.className),i.setAttribute("data-upgraded",a.join(","));var C=new r.classConstructor(i);C[p]=r,c.push(C);for(var u=0,E=r.callbacks.length;E>u;u++)r.callbacks[u](i);r.widget&&(i[r.className]=C);var m;"CustomEvent"in window&&"function"==typeof window.CustomEvent?m=new Event("mdl-componentupgraded",{bubbles:!0,cancelable:!1}):(m=document.createEvent("Events"),m.initEvent("mdl-componentupgraded",!0,!0)),i.dispatchEvent(m)}}function a(e){Array.isArray(e)||(e="function"==typeof e.item?Array.prototype.slice.call(e):[e]);for(var t,s=0,i=e.length;i>s;s++)t=e[s],t instanceof HTMLElement&&(n(t),t.children.length>0&&a(t.children))}function l(t){var s="undefined"==typeof t.widget&&"undefined"==typeof t.widget,i=!0;s||(i=t.widget||t.widget);var n={classConstructor:t.constructor||t.constructor,className:t.classAsString||t.classAsString,cssClass:t.cssClass||t.cssClass,widget:i,callbacks:[]};if(h.forEach(function(e){if(e.cssClass===n.cssClass)throw new Error("The provided cssClass has already been registered: "+e.cssClass);if(e.className===n.className)throw new Error("The provided className has already been registered")}),t.constructor.prototype.hasOwnProperty(p))throw new Error("MDL component classes must not have "+p+" defined as a property.");var a=e(t.classAsString,n);a||h.push(n)}function o(t,s){var i=e(t);i&&i.callbacks.push(s)}function r(){for(var e=0;e<h.length;e++)i(h[e].className)}function _(e){if(e){var t=c.indexOf(e);c.splice(t,1);var s=e.element_.getAttribute("data-upgraded").split(","),i=s.indexOf(e[p].classAsString);s.splice(i,1),e.element_.setAttribute("data-upgraded",s.join(","));var n;"CustomEvent"in window&&"function"==typeof window.CustomEvent?n=new Event("mdl-componentdowngraded",{bubbles:!0,cancelable:!1}):(n=document.createEvent("Events"),n.initEvent("mdl-componentdowngraded",!0,!0))}}function d(e){var t=function(e){c.filter(function(t){return t.element_===e}).forEach(_)};if(e instanceof Array||e instanceof NodeList)for(var s=0;s<e.length;s++)t(e[s]);else{if(!(e instanceof Node))throw new Error("Invalid argument provided to downgrade MDL nodes.");t(e)}}var h=[],c=[],p="mdlComponentConfigInternal_";return{upgradeDom:i,upgradeElement:n,upgradeElements:a,upgradeAllRegistered:r,registerUpgradedCallback:o,register:l,downgradeElements:d}}(),s.ComponentConfigPublic,s.ComponentConfig,s.Component,s.upgradeDom=s.upgradeDom,s.upgradeElement=s.upgradeElement,s.upgradeElements=s.upgradeElements,s.upgradeAllRegistered=s.upgradeAllRegistered,s.registerUpgradedCallback=s.registerUpgradedCallback,s.register=s.register,s.downgradeElements=s.downgradeElements,window.componentHandler=s,window.componentHandler=s,window.addEventListener("load",function(){"classList"in document.createElement("div")&&"querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach?(document.documentElement.classList.add("mdl-js"),s.upgradeAllRegistered()):(s.upgradeElement=function(){},s.register=function(){})}),Date.now||(Date.now=function(){return(new Date).getTime()},Date.now=Date.now);for(var i=["webkit","moz"],n=0;n<i.length&&!window.requestAnimationFrame;++n){var a=i[n];window.requestAnimationFrame=window[a+"RequestAnimationFrame"],window.cancelAnimationFrame=window[a+"CancelAnimationFrame"]||window[a+"CancelRequestAnimationFrame"],window.requestAnimationFrame=window.requestAnimationFrame,window.cancelAnimationFrame=window.cancelAnimationFrame}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var l=0;window.requestAnimationFrame=function(e){var t=Date.now(),s=Math.max(l+16,t);return setTimeout(function(){e(l=s)},s-t)},window.cancelAnimationFrame=clearTimeout,window.requestAnimationFrame=window.requestAnimationFrame,window.cancelAnimationFrame=window.cancelAnimationFrame}var o=function(e){this.element_=e,this.init()};window.MaterialButton=o,o.prototype.Constant_={},o.prototype.CssClasses_={RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_CONTAINER:"mdl-button__ripple-container",RIPPLE:"mdl-ripple"},o.prototype.blurHandler_=function(e){e&&this.element_.blur()},o.prototype.disable=function(){this.element_.disabled=!0},o.prototype.disable=o.prototype.disable,o.prototype.enable=function(){this.element_.disabled=!1},o.prototype.enable=o.prototype.enable,o.prototype.init=function(){if(this.element_){if(this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){var e=document.createElement("span");e.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleElement_=document.createElement("span"),this.rippleElement_.classList.add(this.CssClasses_.RIPPLE),e.appendChild(this.rippleElement_),this.boundRippleBlurHandler=this.blurHandler_.bind(this),this.rippleElement_.addEventListener("mouseup",this.boundRippleBlurHandler),this.element_.appendChild(e)}this.boundButtonBlurHandler=this.blurHandler_.bind(this),this.element_.addEventListener("mouseup",this.boundButtonBlurHandler),this.element_.addEventListener("mouseleave",this.boundButtonBlurHandler)}},s.register({constructor:o,classAsString:"MaterialButton",cssClass:"mdl-js-button",widget:!0});var r=function(e){this.element_=e,this.init()};window.MaterialCheckbox=r,r.prototype.Constant_={TINY_TIMEOUT:.001},r.prototype.CssClasses_={INPUT:"mdl-checkbox__input",BOX_OUTLINE:"mdl-checkbox__box-outline",FOCUS_HELPER:"mdl-checkbox__focus-helper",TICK_OUTLINE:"mdl-checkbox__tick-outline",RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE_CONTAINER:"mdl-checkbox__ripple-container",RIPPLE_CENTER:"mdl-ripple--center",RIPPLE:"mdl-ripple",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_CHECKED:"is-checked",IS_UPGRADED:"is-upgraded"},r.prototype.onChange_=function(e){this.updateClasses_()},r.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},r.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},r.prototype.onMouseUp_=function(e){this.blur_()},r.prototype.updateClasses_=function(){this.checkDisabled(),this.checkToggleState()},r.prototype.blur_=function(){window.setTimeout(function(){this.inputElement_.blur()}.bind(this),this.Constant_.TINY_TIMEOUT)},r.prototype.checkToggleState=function(){this.inputElement_.checked?this.element_.classList.add(this.CssClasses_.IS_CHECKED):this.element_.classList.remove(this.CssClasses_.IS_CHECKED)},r.prototype.checkToggleState=r.prototype.checkToggleState,r.prototype.checkDisabled=function(){this.inputElement_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},r.prototype.checkDisabled=r.prototype.checkDisabled,r.prototype.disable=function(){this.inputElement_.disabled=!0,this.updateClasses_()},r.prototype.disable=r.prototype.disable,r.prototype.enable=function(){this.inputElement_.disabled=!1,this.updateClasses_()},r.prototype.enable=r.prototype.enable,r.prototype.check=function(){this.inputElement_.checked=!0,this.updateClasses_()},r.prototype.check=r.prototype.check,r.prototype.uncheck=function(){this.inputElement_.checked=!1,this.updateClasses_()},r.prototype.uncheck=r.prototype.uncheck,r.prototype.init=function(){if(this.element_){this.inputElement_=this.element_.querySelector("."+this.CssClasses_.INPUT);var e=document.createElement("span");e.classList.add(this.CssClasses_.BOX_OUTLINE);var t=document.createElement("span");t.classList.add(this.CssClasses_.FOCUS_HELPER);var s=document.createElement("span");if(s.classList.add(this.CssClasses_.TICK_OUTLINE),e.appendChild(s),this.element_.appendChild(t),this.element_.appendChild(e),this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS),this.rippleContainerElement_=document.createElement("span"),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_EFFECT),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER),this.boundRippleMouseUp=this.onMouseUp_.bind(this),this.rippleContainerElement_.addEventListener("mouseup",this.boundRippleMouseUp);var i=document.createElement("span");i.classList.add(this.CssClasses_.RIPPLE),this.rippleContainerElement_.appendChild(i),this.element_.appendChild(this.rippleContainerElement_)}this.boundInputOnChange=this.onChange_.bind(this),this.boundInputOnFocus=this.onFocus_.bind(this),this.boundInputOnBlur=this.onBlur_.bind(this),this.boundElementMouseUp=this.onMouseUp_.bind(this),this.inputElement_.addEventListener("change",this.boundInputOnChange),this.inputElement_.addEventListener("focus",this.boundInputOnFocus),this.inputElement_.addEventListener("blur",this.boundInputOnBlur),this.element_.addEventListener("mouseup",this.boundElementMouseUp),this.updateClasses_(),this.element_.classList.add(this.CssClasses_.IS_UPGRADED)}},s.register({constructor:r,classAsString:"MaterialCheckbox",cssClass:"mdl-js-checkbox",widget:!0});var _=function(e){this.element_=e,this.init()};window.MaterialIconToggle=_,_.prototype.Constant_={TINY_TIMEOUT:.001},_.prototype.CssClasses_={INPUT:"mdl-icon-toggle__input",JS_RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE_CONTAINER:"mdl-icon-toggle__ripple-container",RIPPLE_CENTER:"mdl-ripple--center",RIPPLE:"mdl-ripple",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_CHECKED:"is-checked"},_.prototype.onChange_=function(e){this.updateClasses_()},_.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},_.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},_.prototype.onMouseUp_=function(e){this.blur_()},_.prototype.updateClasses_=function(){this.checkDisabled(),this.checkToggleState()},_.prototype.blur_=function(){window.setTimeout(function(){this.inputElement_.blur()}.bind(this),this.Constant_.TINY_TIMEOUT)},_.prototype.checkToggleState=function(){this.inputElement_.checked?this.element_.classList.add(this.CssClasses_.IS_CHECKED):this.element_.classList.remove(this.CssClasses_.IS_CHECKED)},_.prototype.checkToggleState=_.prototype.checkToggleState,_.prototype.checkDisabled=function(){this.inputElement_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},_.prototype.checkDisabled=_.prototype.checkDisabled,_.prototype.disable=function(){this.inputElement_.disabled=!0,this.updateClasses_()},_.prototype.disable=_.prototype.disable,_.prototype.enable=function(){this.inputElement_.disabled=!1,this.updateClasses_()},_.prototype.enable=_.prototype.enable,_.prototype.check=function(){this.inputElement_.checked=!0,this.updateClasses_()},_.prototype.check=_.prototype.check,_.prototype.uncheck=function(){this.inputElement_.checked=!1,this.updateClasses_()},_.prototype.uncheck=_.prototype.uncheck,_.prototype.init=function(){if(this.element_){if(this.inputElement_=this.element_.querySelector("."+this.CssClasses_.INPUT),this.element_.classList.contains(this.CssClasses_.JS_RIPPLE_EFFECT)){this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS),this.rippleContainerElement_=document.createElement("span"),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleContainerElement_.classList.add(this.CssClasses_.JS_RIPPLE_EFFECT),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER),this.boundRippleMouseUp=this.onMouseUp_.bind(this),this.rippleContainerElement_.addEventListener("mouseup",this.boundRippleMouseUp);var e=document.createElement("span");e.classList.add(this.CssClasses_.RIPPLE),this.rippleContainerElement_.appendChild(e),this.element_.appendChild(this.rippleContainerElement_)}this.boundInputOnChange=this.onChange_.bind(this),this.boundInputOnFocus=this.onFocus_.bind(this),this.boundInputOnBlur=this.onBlur_.bind(this),this.boundElementOnMouseUp=this.onMouseUp_.bind(this),this.inputElement_.addEventListener("change",this.boundInputOnChange),this.inputElement_.addEventListener("focus",this.boundInputOnFocus),this.inputElement_.addEventListener("blur",this.boundInputOnBlur),this.element_.addEventListener("mouseup",this.boundElementOnMouseUp),this.updateClasses_(),this.element_.classList.add("is-upgraded")}},s.register({constructor:_,classAsString:"MaterialIconToggle",cssClass:"mdl-js-icon-toggle",widget:!0});var d=function(e){this.element_=e,this.init()};window.MaterialMenu=d,d.prototype.Constant_={TRANSITION_DURATION_SECONDS:.3,TRANSITION_DURATION_FRACTION:.8,CLOSE_TIMEOUT:150},d.prototype.Keycodes_={ENTER:13,ESCAPE:27,SPACE:32,UP_ARROW:38,DOWN_ARROW:40},d.prototype.CssClasses_={CONTAINER:"mdl-menu__container",OUTLINE:"mdl-menu__outline",ITEM:"mdl-menu__item",ITEM_RIPPLE_CONTAINER:"mdl-menu__item-ripple-container",RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE:"mdl-ripple",IS_UPGRADED:"is-upgraded",IS_VISIBLE:"is-visible",IS_ANIMATING:"is-animating",BOTTOM_LEFT:"mdl-menu--bottom-left",BOTTOM_RIGHT:"mdl-menu--bottom-right",TOP_LEFT:"mdl-menu--top-left",TOP_RIGHT:"mdl-menu--top-right",UNALIGNED:"mdl-menu--unaligned"},d.prototype.init=function(){if(this.element_){var e=document.createElement("div");e.classList.add(this.CssClasses_.CONTAINER),this.element_.parentElement.insertBefore(e,this.element_),this.element_.parentElement.removeChild(this.element_),e.appendChild(this.element_),this.container_=e;var t=document.createElement("div");t.classList.add(this.CssClasses_.OUTLINE),this.outline_=t,e.insertBefore(t,this.element_);var s=this.element_.getAttribute("for")||this.element_.getAttribute("data-mdl-for"),i=null;s&&(i=document.getElementById(s),i&&(this.forElement_=i,i.addEventListener("click",this.handleForClick_.bind(this)),i.addEventListener("keydown",this.handleForKeyboardEvent_.bind(this))));var n=this.element_.querySelectorAll("."+this.CssClasses_.ITEM);this.boundItemKeydown_=this.handleItemKeyboardEvent_.bind(this),this.boundItemClick_=this.handleItemClick_.bind(this);for(var a=0;a<n.length;a++)n[a].addEventListener("click",this.boundItemClick_),n[a].tabIndex="-1",n[a].addEventListener("keydown",this.boundItemKeydown_);if(this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT))for(this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS),a=0;a<n.length;a++){var l=n[a],o=document.createElement("span");o.classList.add(this.CssClasses_.ITEM_RIPPLE_CONTAINER);var r=document.createElement("span");r.classList.add(this.CssClasses_.RIPPLE),o.appendChild(r),l.appendChild(o),l.classList.add(this.CssClasses_.RIPPLE_EFFECT)}this.element_.classList.contains(this.CssClasses_.BOTTOM_LEFT)&&this.outline_.classList.add(this.CssClasses_.BOTTOM_LEFT),this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)&&this.outline_.classList.add(this.CssClasses_.BOTTOM_RIGHT),this.element_.classList.contains(this.CssClasses_.TOP_LEFT)&&this.outline_.classList.add(this.CssClasses_.TOP_LEFT),this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)&&this.outline_.classList.add(this.CssClasses_.TOP_RIGHT),this.element_.classList.contains(this.CssClasses_.UNALIGNED)&&this.outline_.classList.add(this.CssClasses_.UNALIGNED),e.classList.add(this.CssClasses_.IS_UPGRADED)}},d.prototype.handleForClick_=function(e){if(this.element_&&this.forElement_){var t=this.forElement_.getBoundingClientRect(),s=this.forElement_.parentElement.getBoundingClientRect();this.element_.classList.contains(this.CssClasses_.UNALIGNED)||(this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)?(this.container_.style.right=s.right-t.right+"px",this.container_.style.top=this.forElement_.offsetTop+this.forElement_.offsetHeight+"px"):this.element_.classList.contains(this.CssClasses_.TOP_LEFT)?(this.container_.style.left=this.forElement_.offsetLeft+"px",this.container_.style.bottom=s.bottom-t.top+"px"):this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)?(this.container_.style.right=s.right-t.right+"px",this.container_.style.bottom=s.bottom-t.top+"px"):(this.container_.style.left=this.forElement_.offsetLeft+"px",this.container_.style.top=this.forElement_.offsetTop+this.forElement_.offsetHeight+"px"))}this.toggle(e)},d.prototype.handleForKeyboardEvent_=function(e){if(this.element_&&this.container_&&this.forElement_){var t=this.element_.querySelectorAll("."+this.CssClasses_.ITEM+":not([disabled])");t&&t.length>0&&this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)&&(e.keyCode===this.Keycodes_.UP_ARROW?(e.preventDefault(),t[t.length-1].focus()):e.keyCode===this.Keycodes_.DOWN_ARROW&&(e.preventDefault(),t[0].focus()))}},d.prototype.handleItemKeyboardEvent_=function(e){if(this.element_&&this.container_){var t=this.element_.querySelectorAll("."+this.CssClasses_.ITEM+":not([disabled])");if(t&&t.length>0&&this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)){var s=Array.prototype.slice.call(t).indexOf(e.target);if(e.keyCode===this.Keycodes_.UP_ARROW)e.preventDefault(),s>0?t[s-1].focus():t[t.length-1].focus();else if(e.keyCode===this.Keycodes_.DOWN_ARROW)e.preventDefault(),t.length>s+1?t[s+1].focus():t[0].focus();else if(e.keyCode===this.Keycodes_.SPACE||e.keyCode===this.Keycodes_.ENTER){e.preventDefault();var i=new MouseEvent("mousedown");e.target.dispatchEvent(i),i=new MouseEvent("mouseup"),e.target.dispatchEvent(i),e.target.click()}else e.keyCode===this.Keycodes_.ESCAPE&&(e.preventDefault(),this.hide())}}},d.prototype.handleItemClick_=function(e){e.target.hasAttribute("disabled")?e.stopPropagation():(this.closing_=!0,window.setTimeout(function(e){this.hide(),this.closing_=!1}.bind(this),this.Constant_.CLOSE_TIMEOUT))},d.prototype.applyClip_=function(e,t){this.element_.classList.contains(this.CssClasses_.UNALIGNED)?this.element_.style.clip="":this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)?this.element_.style.clip="rect(0 "+t+"px 0 "+t+"px)":this.element_.classList.contains(this.CssClasses_.TOP_LEFT)?this.element_.style.clip="rect("+e+"px 0 "+e+"px 0)":this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)?this.element_.style.clip="rect("+e+"px "+t+"px "+e+"px "+t+"px)":this.element_.style.clip=""},d.prototype.removeAnimationEndListener_=function(e){e.target.classList.remove(d.prototype.CssClasses_.IS_ANIMATING)},d.prototype.addAnimationEndListener_=function(){this.element_.addEventListener("transitionend",this.removeAnimationEndListener_),this.element_.addEventListener("webkitTransitionEnd",this.removeAnimationEndListener_)},d.prototype.show=function(e){if(this.element_&&this.container_&&this.outline_){var t=this.element_.getBoundingClientRect().height,s=this.element_.getBoundingClientRect().width;this.container_.style.width=s+"px",this.container_.style.height=t+"px",this.outline_.style.width=s+"px",this.outline_.style.height=t+"px";for(var i=this.Constant_.TRANSITION_DURATION_SECONDS*this.Constant_.TRANSITION_DURATION_FRACTION,n=this.element_.querySelectorAll("."+this.CssClasses_.ITEM),a=0;a<n.length;a++){var l=null;l=this.element_.classList.contains(this.CssClasses_.TOP_LEFT)||this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)?(t-n[a].offsetTop-n[a].offsetHeight)/t*i+"s":n[a].offsetTop/t*i+"s",n[a].style.transitionDelay=l}this.applyClip_(t,s),window.requestAnimationFrame(function(){this.element_.classList.add(this.CssClasses_.IS_ANIMATING),this.element_.style.clip="rect(0 "+s+"px "+t+"px 0)",this.container_.classList.add(this.CssClasses_.IS_VISIBLE)}.bind(this)),this.addAnimationEndListener_();var o=function(t){t===e||this.closing_||t.target.parentNode===this.element_||(document.removeEventListener("click",o),this.hide())}.bind(this);document.addEventListener("click",o)}},d.prototype.show=d.prototype.show,d.prototype.hide=function(){if(this.element_&&this.container_&&this.outline_){for(var e=this.element_.querySelectorAll("."+this.CssClasses_.ITEM),t=0;t<e.length;t++)e[t].style.removeProperty("transition-delay");var s=this.element_.getBoundingClientRect(),i=s.height,n=s.width;this.element_.classList.add(this.CssClasses_.IS_ANIMATING),this.applyClip_(i,n),this.container_.classList.remove(this.CssClasses_.IS_VISIBLE),this.addAnimationEndListener_()}},d.prototype.hide=d.prototype.hide,d.prototype.toggle=function(e){this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)?this.hide():this.show(e)},d.prototype.toggle=d.prototype.toggle,s.register({constructor:d,classAsString:"MaterialMenu",cssClass:"mdl-js-menu",widget:!0});var h=function(e){this.element_=e,this.init()};window.MaterialProgress=h,h.prototype.Constant_={},h.prototype.CssClasses_={INDETERMINATE_CLASS:"mdl-progress__indeterminate"},h.prototype.setProgress=function(e){this.element_.classList.contains(this.CssClasses_.INDETERMINATE_CLASS)||(this.progressbar_.style.width=e+"%")},h.prototype.setProgress=h.prototype.setProgress,h.prototype.setBuffer=function(e){this.bufferbar_.style.width=e+"%",this.auxbar_.style.width=100-e+"%"},h.prototype.setBuffer=h.prototype.setBuffer,h.prototype.init=function(){if(this.element_){var e=document.createElement("div");e.className="progressbar bar bar1",this.element_.appendChild(e),this.progressbar_=e,e=document.createElement("div"),e.className="bufferbar bar bar2",this.element_.appendChild(e),this.bufferbar_=e,e=document.createElement("div"),e.className="auxbar bar bar3",this.element_.appendChild(e),this.auxbar_=e,this.progressbar_.style.width="0%",this.bufferbar_.style.width="100%",this.auxbar_.style.width="0%",this.element_.classList.add("is-upgraded")}},s.register({constructor:h,classAsString:"MaterialProgress",cssClass:"mdl-js-progress",widget:!0});var c=function(e){this.element_=e,this.init()};window.MaterialRadio=c,c.prototype.Constant_={TINY_TIMEOUT:.001},c.prototype.CssClasses_={IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_CHECKED:"is-checked",IS_UPGRADED:"is-upgraded",JS_RADIO:"mdl-js-radio",RADIO_BTN:"mdl-radio__button",RADIO_OUTER_CIRCLE:"mdl-radio__outer-circle",RADIO_INNER_CIRCLE:"mdl-radio__inner-circle",RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE_CONTAINER:"mdl-radio__ripple-container",RIPPLE_CENTER:"mdl-ripple--center",RIPPLE:"mdl-ripple"},c.prototype.onChange_=function(e){for(var t=document.getElementsByClassName(this.CssClasses_.JS_RADIO),s=0;s<t.length;s++){var i=t[s].querySelector("."+this.CssClasses_.RADIO_BTN);i.getAttribute("name")===this.btnElement_.getAttribute("name")&&t[s].MaterialRadio.updateClasses_()}},c.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},c.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},c.prototype.onMouseup_=function(e){this.blur_()},c.prototype.updateClasses_=function(){this.checkDisabled(),this.checkToggleState()},c.prototype.blur_=function(){window.setTimeout(function(){this.btnElement_.blur()}.bind(this),this.Constant_.TINY_TIMEOUT)},c.prototype.checkDisabled=function(){this.btnElement_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},c.prototype.checkDisabled=c.prototype.checkDisabled,c.prototype.checkToggleState=function(){this.btnElement_.checked?this.element_.classList.add(this.CssClasses_.IS_CHECKED):this.element_.classList.remove(this.CssClasses_.IS_CHECKED)},c.prototype.checkToggleState=c.prototype.checkToggleState,c.prototype.disable=function(){this.btnElement_.disabled=!0,this.updateClasses_()},c.prototype.disable=c.prototype.disable,c.prototype.enable=function(){this.btnElement_.disabled=!1,this.updateClasses_()},c.prototype.enable=c.prototype.enable,c.prototype.check=function(){this.btnElement_.checked=!0,this.updateClasses_()},c.prototype.check=c.prototype.check,c.prototype.uncheck=function(){this.btnElement_.checked=!1,this.updateClasses_()},c.prototype.uncheck=c.prototype.uncheck,c.prototype.init=function(){if(this.element_){this.btnElement_=this.element_.querySelector("."+this.CssClasses_.RADIO_BTN),this.boundChangeHandler_=this.onChange_.bind(this),this.boundFocusHandler_=this.onChange_.bind(this),this.boundBlurHandler_=this.onBlur_.bind(this),this.boundMouseUpHandler_=this.onMouseup_.bind(this);var e=document.createElement("span");e.classList.add(this.CssClasses_.RADIO_OUTER_CIRCLE);var t=document.createElement("span");t.classList.add(this.CssClasses_.RADIO_INNER_CIRCLE),this.element_.appendChild(e),this.element_.appendChild(t);var s;if(this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS),s=document.createElement("span"),s.classList.add(this.CssClasses_.RIPPLE_CONTAINER),s.classList.add(this.CssClasses_.RIPPLE_EFFECT),s.classList.add(this.CssClasses_.RIPPLE_CENTER),s.addEventListener("mouseup",this.boundMouseUpHandler_);var i=document.createElement("span");i.classList.add(this.CssClasses_.RIPPLE),s.appendChild(i),this.element_.appendChild(s)}this.btnElement_.addEventListener("change",this.boundChangeHandler_),this.btnElement_.addEventListener("focus",this.boundFocusHandler_),this.btnElement_.addEventListener("blur",this.boundBlurHandler_),this.element_.addEventListener("mouseup",this.boundMouseUpHandler_),this.updateClasses_(),this.element_.classList.add(this.CssClasses_.IS_UPGRADED)}},s.register({constructor:c,classAsString:"MaterialRadio",cssClass:"mdl-js-radio",widget:!0});var p=function(e){this.element_=e,this.isIE_=window.navigator.msPointerEnabled,this.init()};window.MaterialSlider=p,p.prototype.Constant_={},p.prototype.CssClasses_={IE_CONTAINER:"mdl-slider__ie-container",SLIDER_CONTAINER:"mdl-slider__container",BACKGROUND_FLEX:"mdl-slider__background-flex",BACKGROUND_LOWER:"mdl-slider__background-lower",BACKGROUND_UPPER:"mdl-slider__background-upper",IS_LOWEST_VALUE:"is-lowest-value",IS_UPGRADED:"is-upgraded"},p.prototype.onInput_=function(e){this.updateValueStyles_()},p.prototype.onChange_=function(e){this.updateValueStyles_()},p.prototype.onMouseUp_=function(e){e.target.blur()},p.prototype.onContainerMouseDown_=function(e){if(e.target===this.element_.parentElement){e.preventDefault();var t=new MouseEvent("mousedown",{target:e.target,buttons:e.buttons,clientX:e.clientX,clientY:this.element_.getBoundingClientRect().y});this.element_.dispatchEvent(t)}},p.prototype.updateValueStyles_=function(){var e=(this.element_.value-this.element_.min)/(this.element_.max-this.element_.min);0===e?this.element_.classList.add(this.CssClasses_.IS_LOWEST_VALUE):this.element_.classList.remove(this.CssClasses_.IS_LOWEST_VALUE),this.isIE_||(this.backgroundLower_.style.flex=e,this.backgroundLower_.style.webkitFlex=e,this.backgroundUpper_.style.flex=1-e,this.backgroundUpper_.style.webkitFlex=1-e)},p.prototype.disable=function(){this.element_.disabled=!0},p.prototype.disable=p.prototype.disable,p.prototype.enable=function(){this.element_.disabled=!1},p.prototype.enable=p.prototype.enable,p.prototype.change=function(e){"undefined"!=typeof e&&(this.element_.value=e),this.updateValueStyles_()},p.prototype.change=p.prototype.change,p.prototype.init=function(){if(this.element_){if(this.isIE_){var e=document.createElement("div");e.classList.add(this.CssClasses_.IE_CONTAINER),this.element_.parentElement.insertBefore(e,this.element_),this.element_.parentElement.removeChild(this.element_),e.appendChild(this.element_)}else{var t=document.createElement("div");t.classList.add(this.CssClasses_.SLIDER_CONTAINER),this.element_.parentElement.insertBefore(t,this.element_),this.element_.parentElement.removeChild(this.element_),t.appendChild(this.element_);var s=document.createElement("div");s.classList.add(this.CssClasses_.BACKGROUND_FLEX),t.appendChild(s),this.backgroundLower_=document.createElement("div"),this.backgroundLower_.classList.add(this.CssClasses_.BACKGROUND_LOWER),s.appendChild(this.backgroundLower_),this.backgroundUpper_=document.createElement("div"),this.backgroundUpper_.classList.add(this.CssClasses_.BACKGROUND_UPPER),s.appendChild(this.backgroundUpper_)}this.boundInputHandler=this.onInput_.bind(this),this.boundChangeHandler=this.onChange_.bind(this),this.boundMouseUpHandler=this.onMouseUp_.bind(this),this.boundContainerMouseDownHandler=this.onContainerMouseDown_.bind(this),this.element_.addEventListener("input",this.boundInputHandler),this.element_.addEventListener("change",this.boundChangeHandler),this.element_.addEventListener("mouseup",this.boundMouseUpHandler),this.element_.parentElement.addEventListener("mousedown",this.boundContainerMouseDownHandler),this.updateValueStyles_(),this.element_.classList.add(this.CssClasses_.IS_UPGRADED)}},s.register({constructor:p,classAsString:"MaterialSlider",cssClass:"mdl-js-slider",widget:!0});var C=function(e){if(this.element_=e,this.textElement_=this.element_.querySelector("."+this.cssClasses_.MESSAGE),this.actionElement_=this.element_.querySelector("."+this.cssClasses_.ACTION),!this.textElement_)throw new Error("There must be a message element for a snackbar.");if(!this.actionElement_)throw new Error("There must be an action element for a snackbar.");this.active=!1,this.actionHandler_=void 0,this.message_=void 0,this.actionText_=void 0,this.queuedNotifications_=[],this.setActionHidden_(!0)};window.MaterialSnackbar=C,C.prototype.Constant_={ANIMATION_LENGTH:250},C.prototype.cssClasses_={SNACKBAR:"mdl-snackbar",MESSAGE:"mdl-snackbar__text",ACTION:"mdl-snackbar__action",ACTIVE:"mdl-snackbar--active"},C.prototype.displaySnackbar_=function(){this.element_.setAttribute("aria-hidden","true"),this.actionHandler_&&(this.actionElement_.textContent=this.actionText_,this.actionElement_.addEventListener("click",this.actionHandler_),
this.setActionHidden_(!1)),this.textElement_.textContent=this.message_,this.element_.classList.add(this.cssClasses_.ACTIVE),this.element_.setAttribute("aria-hidden","false"),setTimeout(this.cleanup_.bind(this),this.timeout_)},C.prototype.showSnackbar=function(e){if(void 0===e)throw new Error("Please provide a data object with at least a message to display.");if(void 0===e.message)throw new Error("Please provide a message to be displayed.");if(e.actionHandler&&!e.actionText)throw new Error("Please provide action text with the handler.");this.active?this.queuedNotifications_.push(e):(this.active=!0,this.message_=e.message,e.timeout?this.timeout_=e.timeout:this.timeout_=2750,e.actionHandler&&(this.actionHandler_=e.actionHandler),e.actionText&&(this.actionText_=e.actionText),this.displaySnackbar_())},C.prototype.showSnackbar=C.prototype.showSnackbar,C.prototype.checkQueue_=function(){this.queuedNotifications_.length>0&&this.showSnackbar(this.queuedNotifications_.shift())},C.prototype.cleanup_=function(){this.element_.classList.remove(this.cssClasses_.ACTIVE),setTimeout(function(){this.element_.setAttribute("aria-hidden","true"),this.textElement_.textContent="",Boolean(this.actionElement_.getAttribute("aria-hidden"))||(this.setActionHidden_(!0),this.actionElement_.textContent="",this.actionElement_.removeEventListener("click",this.actionHandler_)),this.actionHandler_=void 0,this.message_=void 0,this.actionText_=void 0,this.active=!1,this.checkQueue_()}.bind(this),this.Constant_.ANIMATION_LENGTH)},C.prototype.setActionHidden_=function(e){e?this.actionElement_.setAttribute("aria-hidden","true"):this.actionElement_.removeAttribute("aria-hidden")},s.register({constructor:C,classAsString:"MaterialSnackbar",cssClass:"mdl-js-snackbar",widget:!0});var u=function(e){this.element_=e,this.init()};window.MaterialSpinner=u,u.prototype.Constant_={MDL_SPINNER_LAYER_COUNT:4},u.prototype.CssClasses_={MDL_SPINNER_LAYER:"mdl-spinner__layer",MDL_SPINNER_CIRCLE_CLIPPER:"mdl-spinner__circle-clipper",MDL_SPINNER_CIRCLE:"mdl-spinner__circle",MDL_SPINNER_GAP_PATCH:"mdl-spinner__gap-patch",MDL_SPINNER_LEFT:"mdl-spinner__left",MDL_SPINNER_RIGHT:"mdl-spinner__right"},u.prototype.createLayer=function(e){var t=document.createElement("div");t.classList.add(this.CssClasses_.MDL_SPINNER_LAYER),t.classList.add(this.CssClasses_.MDL_SPINNER_LAYER+"-"+e);var s=document.createElement("div");s.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),s.classList.add(this.CssClasses_.MDL_SPINNER_LEFT);var i=document.createElement("div");i.classList.add(this.CssClasses_.MDL_SPINNER_GAP_PATCH);var n=document.createElement("div");n.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),n.classList.add(this.CssClasses_.MDL_SPINNER_RIGHT);for(var a=[s,i,n],l=0;l<a.length;l++){var o=document.createElement("div");o.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE),a[l].appendChild(o)}t.appendChild(s),t.appendChild(i),t.appendChild(n),this.element_.appendChild(t)},u.prototype.createLayer=u.prototype.createLayer,u.prototype.stop=function(){this.element_.classList.remove("is-active")},u.prototype.stop=u.prototype.stop,u.prototype.start=function(){this.element_.classList.add("is-active")},u.prototype.start=u.prototype.start,u.prototype.init=function(){if(this.element_){for(var e=1;e<=this.Constant_.MDL_SPINNER_LAYER_COUNT;e++)this.createLayer(e);this.element_.classList.add("is-upgraded")}},s.register({constructor:u,classAsString:"MaterialSpinner",cssClass:"mdl-js-spinner",widget:!0});var E=function(e){this.element_=e,this.init()};window.MaterialSwitch=E,E.prototype.Constant_={TINY_TIMEOUT:.001},E.prototype.CssClasses_={INPUT:"mdl-switch__input",TRACK:"mdl-switch__track",THUMB:"mdl-switch__thumb",FOCUS_HELPER:"mdl-switch__focus-helper",RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE_CONTAINER:"mdl-switch__ripple-container",RIPPLE_CENTER:"mdl-ripple--center",RIPPLE:"mdl-ripple",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_CHECKED:"is-checked"},E.prototype.onChange_=function(e){this.updateClasses_()},E.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},E.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},E.prototype.onMouseUp_=function(e){this.blur_()},E.prototype.updateClasses_=function(){this.checkDisabled(),this.checkToggleState()},E.prototype.blur_=function(){window.setTimeout(function(){this.inputElement_.blur()}.bind(this),this.Constant_.TINY_TIMEOUT)},E.prototype.checkDisabled=function(){this.inputElement_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},E.prototype.checkDisabled=E.prototype.checkDisabled,E.prototype.checkToggleState=function(){this.inputElement_.checked?this.element_.classList.add(this.CssClasses_.IS_CHECKED):this.element_.classList.remove(this.CssClasses_.IS_CHECKED)},E.prototype.checkToggleState=E.prototype.checkToggleState,E.prototype.disable=function(){this.inputElement_.disabled=!0,this.updateClasses_()},E.prototype.disable=E.prototype.disable,E.prototype.enable=function(){this.inputElement_.disabled=!1,this.updateClasses_()},E.prototype.enable=E.prototype.enable,E.prototype.on=function(){this.inputElement_.checked=!0,this.updateClasses_()},E.prototype.on=E.prototype.on,E.prototype.off=function(){this.inputElement_.checked=!1,this.updateClasses_()},E.prototype.off=E.prototype.off,E.prototype.init=function(){if(this.element_){this.inputElement_=this.element_.querySelector("."+this.CssClasses_.INPUT);var e=document.createElement("div");e.classList.add(this.CssClasses_.TRACK);var t=document.createElement("div");t.classList.add(this.CssClasses_.THUMB);var s=document.createElement("span");if(s.classList.add(this.CssClasses_.FOCUS_HELPER),t.appendChild(s),this.element_.appendChild(e),this.element_.appendChild(t),this.boundMouseUpHandler=this.onMouseUp_.bind(this),this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS),this.rippleContainerElement_=document.createElement("span"),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_EFFECT),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER),this.rippleContainerElement_.addEventListener("mouseup",this.boundMouseUpHandler);var i=document.createElement("span");i.classList.add(this.CssClasses_.RIPPLE),this.rippleContainerElement_.appendChild(i),this.element_.appendChild(this.rippleContainerElement_)}this.boundChangeHandler=this.onChange_.bind(this),this.boundFocusHandler=this.onFocus_.bind(this),this.boundBlurHandler=this.onBlur_.bind(this),this.inputElement_.addEventListener("change",this.boundChangeHandler),this.inputElement_.addEventListener("focus",this.boundFocusHandler),this.inputElement_.addEventListener("blur",this.boundBlurHandler),this.element_.addEventListener("mouseup",this.boundMouseUpHandler),this.updateClasses_(),this.element_.classList.add("is-upgraded")}},s.register({constructor:E,classAsString:"MaterialSwitch",cssClass:"mdl-js-switch",widget:!0});var m=function(e){this.element_=e,this.init()};window.MaterialTabs=m,m.prototype.Constant_={},m.prototype.CssClasses_={TAB_CLASS:"mdl-tabs__tab",PANEL_CLASS:"mdl-tabs__panel",ACTIVE_CLASS:"is-active",UPGRADED_CLASS:"is-upgraded",MDL_JS_RIPPLE_EFFECT:"mdl-js-ripple-effect",MDL_RIPPLE_CONTAINER:"mdl-tabs__ripple-container",MDL_RIPPLE:"mdl-ripple",MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events"},m.prototype.initTabs_=function(){this.element_.classList.contains(this.CssClasses_.MDL_JS_RIPPLE_EFFECT)&&this.element_.classList.add(this.CssClasses_.MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS),this.tabs_=this.element_.querySelectorAll("."+this.CssClasses_.TAB_CLASS),this.panels_=this.element_.querySelectorAll("."+this.CssClasses_.PANEL_CLASS);for(var t=0;t<this.tabs_.length;t++)new e(this.tabs_[t],this);this.element_.classList.add(this.CssClasses_.UPGRADED_CLASS)},m.prototype.resetTabState_=function(){for(var e=0;e<this.tabs_.length;e++)this.tabs_[e].classList.remove(this.CssClasses_.ACTIVE_CLASS)},m.prototype.resetPanelState_=function(){for(var e=0;e<this.panels_.length;e++)this.panels_[e].classList.remove(this.CssClasses_.ACTIVE_CLASS)},m.prototype.init=function(){this.element_&&this.initTabs_()},s.register({constructor:m,classAsString:"MaterialTabs",cssClass:"mdl-js-tabs"});var L=function(e){this.element_=e,this.maxRows=this.Constant_.NO_MAX_ROWS,this.init()};window.MaterialTextfield=L,L.prototype.Constant_={NO_MAX_ROWS:-1,MAX_ROWS_ATTRIBUTE:"maxrows"},L.prototype.CssClasses_={LABEL:"mdl-textfield__label",INPUT:"mdl-textfield__input",IS_DIRTY:"is-dirty",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_INVALID:"is-invalid",IS_UPGRADED:"is-upgraded",HAS_PLACEHOLDER:"has-placeholder"},L.prototype.onKeyDown_=function(e){var t=e.target.value.split("\n").length;13===e.keyCode&&t>=this.maxRows&&e.preventDefault()},L.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},L.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},L.prototype.onReset_=function(e){this.updateClasses_()},L.prototype.updateClasses_=function(){this.checkDisabled(),this.checkValidity(),this.checkDirty(),this.checkFocus()},L.prototype.checkDisabled=function(){this.input_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},L.prototype.checkDisabled=L.prototype.checkDisabled,L.prototype.checkFocus=function(){Boolean(this.element_.querySelector(":focus"))?this.element_.classList.add(this.CssClasses_.IS_FOCUSED):this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},L.prototype.checkFocus=L.prototype.checkFocus,L.prototype.checkValidity=function(){this.input_.validity&&(this.input_.validity.valid?this.element_.classList.remove(this.CssClasses_.IS_INVALID):this.element_.classList.add(this.CssClasses_.IS_INVALID))},L.prototype.checkValidity=L.prototype.checkValidity,L.prototype.checkDirty=function(){this.input_.value&&this.input_.value.length>0?this.element_.classList.add(this.CssClasses_.IS_DIRTY):this.element_.classList.remove(this.CssClasses_.IS_DIRTY)},L.prototype.checkDirty=L.prototype.checkDirty,L.prototype.disable=function(){this.input_.disabled=!0,this.updateClasses_()},L.prototype.disable=L.prototype.disable,L.prototype.enable=function(){this.input_.disabled=!1,this.updateClasses_()},L.prototype.enable=L.prototype.enable,L.prototype.change=function(e){this.input_.value=e||"",this.updateClasses_()},L.prototype.change=L.prototype.change,L.prototype.init=function(){if(this.element_&&(this.label_=this.element_.querySelector("."+this.CssClasses_.LABEL),this.input_=this.element_.querySelector("."+this.CssClasses_.INPUT),this.input_)){this.input_.hasAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE)&&(this.maxRows=parseInt(this.input_.getAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE),10),isNaN(this.maxRows)&&(this.maxRows=this.Constant_.NO_MAX_ROWS)),this.input_.hasAttribute("placeholder")&&this.element_.classList.add(this.CssClasses_.HAS_PLACEHOLDER),this.boundUpdateClassesHandler=this.updateClasses_.bind(this),this.boundFocusHandler=this.onFocus_.bind(this),this.boundBlurHandler=this.onBlur_.bind(this),this.boundResetHandler=this.onReset_.bind(this),this.input_.addEventListener("input",this.boundUpdateClassesHandler),this.input_.addEventListener("focus",this.boundFocusHandler),this.input_.addEventListener("blur",this.boundBlurHandler),this.input_.addEventListener("reset",this.boundResetHandler),this.maxRows!==this.Constant_.NO_MAX_ROWS&&(this.boundKeyDownHandler=this.onKeyDown_.bind(this),this.input_.addEventListener("keydown",this.boundKeyDownHandler));var e=this.element_.classList.contains(this.CssClasses_.IS_INVALID);this.updateClasses_(),this.element_.classList.add(this.CssClasses_.IS_UPGRADED),e&&this.element_.classList.add(this.CssClasses_.IS_INVALID),this.input_.hasAttribute("autofocus")&&(this.element_.focus(),this.checkFocus())}},s.register({constructor:L,classAsString:"MaterialTextfield",cssClass:"mdl-js-textfield",widget:!0});var I=function(e){this.element_=e,this.init()};window.MaterialTooltip=I,I.prototype.Constant_={},I.prototype.CssClasses_={IS_ACTIVE:"is-active",BOTTOM:"mdl-tooltip--bottom",LEFT:"mdl-tooltip--left",RIGHT:"mdl-tooltip--right",TOP:"mdl-tooltip--top"},I.prototype.handleMouseEnter_=function(e){var t=e.target.getBoundingClientRect(),s=t.left+t.width/2,i=t.top+t.height/2,n=-1*(this.element_.offsetWidth/2),a=-1*(this.element_.offsetHeight/2);this.element_.classList.contains(this.CssClasses_.LEFT)||this.element_.classList.contains(this.CssClasses_.RIGHT)?(s=t.width/2,0>i+a?(this.element_.style.top=0,this.element_.style.marginTop=0):(this.element_.style.top=i+"px",this.element_.style.marginTop=a+"px")):0>s+n?(this.element_.style.left=0,this.element_.style.marginLeft=0):(this.element_.style.left=s+"px",this.element_.style.marginLeft=n+"px"),this.element_.classList.contains(this.CssClasses_.TOP)?this.element_.style.top=t.top-this.element_.offsetHeight-10+"px":this.element_.classList.contains(this.CssClasses_.RIGHT)?this.element_.style.left=t.left+t.width+10+"px":this.element_.classList.contains(this.CssClasses_.LEFT)?this.element_.style.left=t.left-this.element_.offsetWidth-10+"px":this.element_.style.top=t.top+t.height+10+"px",this.element_.classList.add(this.CssClasses_.IS_ACTIVE)},I.prototype.handleMouseLeave_=function(){this.element_.classList.remove(this.CssClasses_.IS_ACTIVE)},I.prototype.init=function(){if(this.element_){var e=this.element_.getAttribute("for");e&&(this.forElement_=document.getElementById(e)),this.forElement_&&(this.forElement_.hasAttribute("tabindex")||this.forElement_.setAttribute("tabindex","0"),this.boundMouseEnterHandler=this.handleMouseEnter_.bind(this),this.boundMouseLeaveHandler=this.handleMouseLeave_.bind(this),this.forElement_.addEventListener("mouseenter",this.boundMouseEnterHandler,!1),this.forElement_.addEventListener("touchend",this.boundMouseEnterHandler,!1),this.forElement_.addEventListener("mouseleave",this.boundMouseLeaveHandler,!1),window.addEventListener("touchstart",this.boundMouseLeaveHandler))}},s.register({constructor:I,classAsString:"MaterialTooltip",cssClass:"mdl-tooltip"});var f=function(e){this.element_=e,this.init()};window.MaterialLayout=f,f.prototype.Constant_={MAX_WIDTH:"(max-width: 1024px)",TAB_SCROLL_PIXELS:100,RESIZE_TIMEOUT:100,MENU_ICON:"&#xE5D2;",CHEVRON_LEFT:"chevron_left",CHEVRON_RIGHT:"chevron_right"},f.prototype.Keycodes_={ENTER:13,ESCAPE:27,SPACE:32},f.prototype.Mode_={STANDARD:0,SEAMED:1,WATERFALL:2,SCROLL:3},f.prototype.CssClasses_={CONTAINER:"mdl-layout__container",HEADER:"mdl-layout__header",DRAWER:"mdl-layout__drawer",CONTENT:"mdl-layout__content",DRAWER_BTN:"mdl-layout__drawer-button",ICON:"material-icons",JS_RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_CONTAINER:"mdl-layout__tab-ripple-container",RIPPLE:"mdl-ripple",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",HEADER_SEAMED:"mdl-layout__header--seamed",HEADER_WATERFALL:"mdl-layout__header--waterfall",HEADER_SCROLL:"mdl-layout__header--scroll",FIXED_HEADER:"mdl-layout--fixed-header",OBFUSCATOR:"mdl-layout__obfuscator",TAB_BAR:"mdl-layout__tab-bar",TAB_CONTAINER:"mdl-layout__tab-bar-container",TAB:"mdl-layout__tab",TAB_BAR_BUTTON:"mdl-layout__tab-bar-button",TAB_BAR_LEFT_BUTTON:"mdl-layout__tab-bar-left-button",TAB_BAR_RIGHT_BUTTON:"mdl-layout__tab-bar-right-button",PANEL:"mdl-layout__tab-panel",HAS_DRAWER:"has-drawer",HAS_TABS:"has-tabs",HAS_SCROLLING_HEADER:"has-scrolling-header",CASTING_SHADOW:"is-casting-shadow",IS_COMPACT:"is-compact",IS_SMALL_SCREEN:"is-small-screen",IS_DRAWER_OPEN:"is-visible",IS_ACTIVE:"is-active",IS_UPGRADED:"is-upgraded",IS_ANIMATING:"is-animating",ON_LARGE_SCREEN:"mdl-layout--large-screen-only",ON_SMALL_SCREEN:"mdl-layout--small-screen-only"},f.prototype.contentScrollHandler_=function(){if(!this.header_.classList.contains(this.CssClasses_.IS_ANIMATING)){var e=!this.element_.classList.contains(this.CssClasses_.IS_SMALL_SCREEN)||this.element_.classList.contains(this.CssClasses_.FIXED_HEADER);this.content_.scrollTop>0&&!this.header_.classList.contains(this.CssClasses_.IS_COMPACT)?(this.header_.classList.add(this.CssClasses_.CASTING_SHADOW),this.header_.classList.add(this.CssClasses_.IS_COMPACT),e&&this.header_.classList.add(this.CssClasses_.IS_ANIMATING)):this.content_.scrollTop<=0&&this.header_.classList.contains(this.CssClasses_.IS_COMPACT)&&(this.header_.classList.remove(this.CssClasses_.CASTING_SHADOW),this.header_.classList.remove(this.CssClasses_.IS_COMPACT),e&&this.header_.classList.add(this.CssClasses_.IS_ANIMATING))}},f.prototype.keyboardEventHandler_=function(e){e.keyCode===this.Keycodes_.ESCAPE&&this.drawer_.classList.contains(this.CssClasses_.IS_DRAWER_OPEN)&&this.toggleDrawer()},f.prototype.screenSizeHandler_=function(){this.screenSizeMediaQuery_.matches?this.element_.classList.add(this.CssClasses_.IS_SMALL_SCREEN):(this.element_.classList.remove(this.CssClasses_.IS_SMALL_SCREEN),this.drawer_&&(this.drawer_.classList.remove(this.CssClasses_.IS_DRAWER_OPEN),this.obfuscator_.classList.remove(this.CssClasses_.IS_DRAWER_OPEN)))},f.prototype.drawerToggleHandler_=function(e){if(e&&"keydown"===e.type){if(e.keyCode!==this.Keycodes_.SPACE&&e.keyCode!==this.Keycodes_.ENTER)return;e.preventDefault()}this.toggleDrawer()},f.prototype.headerTransitionEndHandler_=function(){this.header_.classList.remove(this.CssClasses_.IS_ANIMATING)},f.prototype.headerClickHandler_=function(){this.header_.classList.contains(this.CssClasses_.IS_COMPACT)&&(this.header_.classList.remove(this.CssClasses_.IS_COMPACT),this.header_.classList.add(this.CssClasses_.IS_ANIMATING))},f.prototype.resetTabState_=function(e){for(var t=0;t<e.length;t++)e[t].classList.remove(this.CssClasses_.IS_ACTIVE)},f.prototype.resetPanelState_=function(e){for(var t=0;t<e.length;t++)e[t].classList.remove(this.CssClasses_.IS_ACTIVE)},f.prototype.toggleDrawer=function(){var e=this.element_.querySelector("."+this.CssClasses_.DRAWER_BTN);this.drawer_.classList.toggle(this.CssClasses_.IS_DRAWER_OPEN),this.obfuscator_.classList.toggle(this.CssClasses_.IS_DRAWER_OPEN),this.drawer_.classList.contains(this.CssClasses_.IS_DRAWER_OPEN)?(this.drawer_.setAttribute("aria-hidden","false"),e.setAttribute("aria-expanded","true")):(this.drawer_.setAttribute("aria-hidden","true"),e.setAttribute("aria-expanded","false"))},f.prototype.toggleDrawer=f.prototype.toggleDrawer,f.prototype.init=function(){if(this.element_){var e=document.createElement("div");e.classList.add(this.CssClasses_.CONTAINER);var s=this.element_.querySelector(":focus");this.element_.parentElement.insertBefore(e,this.element_),this.element_.parentElement.removeChild(this.element_),e.appendChild(this.element_),s&&s.focus();for(var i=this.element_.childNodes,n=i.length,a=0;n>a;a++){var l=i[a];l.classList&&l.classList.contains(this.CssClasses_.HEADER)&&(this.header_=l),l.classList&&l.classList.contains(this.CssClasses_.DRAWER)&&(this.drawer_=l),l.classList&&l.classList.contains(this.CssClasses_.CONTENT)&&(this.content_=l)}window.addEventListener("pageshow",function(e){e.persisted&&(this.element_.style.overflowY="hidden",requestAnimationFrame(function(){this.element_.style.overflowY=""}.bind(this)))}.bind(this),!1),this.header_&&(this.tabBar_=this.header_.querySelector("."+this.CssClasses_.TAB_BAR));var o=this.Mode_.STANDARD;if(this.header_&&(this.header_.classList.contains(this.CssClasses_.HEADER_SEAMED)?o=this.Mode_.SEAMED:this.header_.classList.contains(this.CssClasses_.HEADER_WATERFALL)?(o=this.Mode_.WATERFALL,this.header_.addEventListener("transitionend",this.headerTransitionEndHandler_.bind(this)),this.header_.addEventListener("click",this.headerClickHandler_.bind(this))):this.header_.classList.contains(this.CssClasses_.HEADER_SCROLL)&&(o=this.Mode_.SCROLL,e.classList.add(this.CssClasses_.HAS_SCROLLING_HEADER)),o===this.Mode_.STANDARD?(this.header_.classList.add(this.CssClasses_.CASTING_SHADOW),this.tabBar_&&this.tabBar_.classList.add(this.CssClasses_.CASTING_SHADOW)):o===this.Mode_.SEAMED||o===this.Mode_.SCROLL?(this.header_.classList.remove(this.CssClasses_.CASTING_SHADOW),this.tabBar_&&this.tabBar_.classList.remove(this.CssClasses_.CASTING_SHADOW)):o===this.Mode_.WATERFALL&&(this.content_.addEventListener("scroll",this.contentScrollHandler_.bind(this)),this.contentScrollHandler_())),this.drawer_){var r=this.element_.querySelector("."+this.CssClasses_.DRAWER_BTN);if(!r){r=document.createElement("div"),r.setAttribute("aria-expanded","false"),r.setAttribute("role","button"),r.setAttribute("tabindex","0"),r.classList.add(this.CssClasses_.DRAWER_BTN);var _=document.createElement("i");_.classList.add(this.CssClasses_.ICON),_.innerHTML=this.Constant_.MENU_ICON,r.appendChild(_)}this.drawer_.classList.contains(this.CssClasses_.ON_LARGE_SCREEN)?r.classList.add(this.CssClasses_.ON_LARGE_SCREEN):this.drawer_.classList.contains(this.CssClasses_.ON_SMALL_SCREEN)&&r.classList.add(this.CssClasses_.ON_SMALL_SCREEN),r.addEventListener("click",this.drawerToggleHandler_.bind(this)),r.addEventListener("keydown",this.drawerToggleHandler_.bind(this)),this.element_.classList.add(this.CssClasses_.HAS_DRAWER),this.element_.classList.contains(this.CssClasses_.FIXED_HEADER)?this.header_.insertBefore(r,this.header_.firstChild):this.element_.insertBefore(r,this.content_);var d=document.createElement("div");d.classList.add(this.CssClasses_.OBFUSCATOR),this.element_.appendChild(d),d.addEventListener("click",this.drawerToggleHandler_.bind(this)),this.obfuscator_=d,this.drawer_.addEventListener("keydown",this.keyboardEventHandler_.bind(this)),this.drawer_.setAttribute("aria-hidden","true")}if(this.screenSizeMediaQuery_=window.matchMedia(this.Constant_.MAX_WIDTH),this.screenSizeMediaQuery_.addListener(this.screenSizeHandler_.bind(this)),this.screenSizeHandler_(),this.header_&&this.tabBar_){this.element_.classList.add(this.CssClasses_.HAS_TABS);var h=document.createElement("div");h.classList.add(this.CssClasses_.TAB_CONTAINER),this.header_.insertBefore(h,this.tabBar_),this.header_.removeChild(this.tabBar_);var c=document.createElement("div");c.classList.add(this.CssClasses_.TAB_BAR_BUTTON),c.classList.add(this.CssClasses_.TAB_BAR_LEFT_BUTTON);var p=document.createElement("i");p.classList.add(this.CssClasses_.ICON),p.textContent=this.Constant_.CHEVRON_LEFT,c.appendChild(p),c.addEventListener("click",function(){this.tabBar_.scrollLeft-=this.Constant_.TAB_SCROLL_PIXELS}.bind(this));var C=document.createElement("div");C.classList.add(this.CssClasses_.TAB_BAR_BUTTON),C.classList.add(this.CssClasses_.TAB_BAR_RIGHT_BUTTON);var u=document.createElement("i");u.classList.add(this.CssClasses_.ICON),u.textContent=this.Constant_.CHEVRON_RIGHT,C.appendChild(u),C.addEventListener("click",function(){this.tabBar_.scrollLeft+=this.Constant_.TAB_SCROLL_PIXELS}.bind(this)),h.appendChild(c),h.appendChild(this.tabBar_),h.appendChild(C);var E=function(){this.tabBar_.scrollLeft>0?c.classList.add(this.CssClasses_.IS_ACTIVE):c.classList.remove(this.CssClasses_.IS_ACTIVE),this.tabBar_.scrollLeft<this.tabBar_.scrollWidth-this.tabBar_.offsetWidth?C.classList.add(this.CssClasses_.IS_ACTIVE):C.classList.remove(this.CssClasses_.IS_ACTIVE)}.bind(this);this.tabBar_.addEventListener("scroll",E),E();var m=function(){this.resizeTimeoutId_&&clearTimeout(this.resizeTimeoutId_),this.resizeTimeoutId_=setTimeout(function(){E(),this.resizeTimeoutId_=null}.bind(this),this.Constant_.RESIZE_TIMEOUT)}.bind(this);window.addEventListener("resize",m),this.tabBar_.classList.contains(this.CssClasses_.JS_RIPPLE_EFFECT)&&this.tabBar_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);for(var L=this.tabBar_.querySelectorAll("."+this.CssClasses_.TAB),I=this.content_.querySelectorAll("."+this.CssClasses_.PANEL),f=0;f<L.length;f++)new t(L[f],L,I,this)}this.element_.classList.add(this.CssClasses_.IS_UPGRADED)}},window.MaterialLayoutTab=t,s.register({constructor:f,classAsString:"MaterialLayout",cssClass:"mdl-js-layout"});var b=function(e){this.element_=e,this.init()};window.MaterialDataTable=b,b.prototype.Constant_={},b.prototype.CssClasses_={DATA_TABLE:"mdl-data-table",SELECTABLE:"mdl-data-table--selectable",SELECT_ELEMENT:"mdl-data-table__select",IS_SELECTED:"is-selected",IS_UPGRADED:"is-upgraded"},b.prototype.selectRow_=function(e,t,s){return t?function(){e.checked?t.classList.add(this.CssClasses_.IS_SELECTED):t.classList.remove(this.CssClasses_.IS_SELECTED)}.bind(this):s?function(){var t,i;if(e.checked)for(t=0;t<s.length;t++)i=s[t].querySelector("td").querySelector(".mdl-checkbox"),i.MaterialCheckbox.check(),s[t].classList.add(this.CssClasses_.IS_SELECTED);else for(t=0;t<s.length;t++)i=s[t].querySelector("td").querySelector(".mdl-checkbox"),i.MaterialCheckbox.uncheck(),s[t].classList.remove(this.CssClasses_.IS_SELECTED)}.bind(this):void 0},b.prototype.createCheckbox_=function(e,t){var i=document.createElement("label"),n=["mdl-checkbox","mdl-js-checkbox","mdl-js-ripple-effect",this.CssClasses_.SELECT_ELEMENT];i.className=n.join(" ");var a=document.createElement("input");return a.type="checkbox",a.classList.add("mdl-checkbox__input"),e?(a.checked=e.classList.contains(this.CssClasses_.IS_SELECTED),a.addEventListener("change",this.selectRow_(a,e))):t&&a.addEventListener("change",this.selectRow_(a,null,t)),i.appendChild(a),s.upgradeElement(i,"MaterialCheckbox"),i},b.prototype.init=function(){if(this.element_){var e=this.element_.querySelector("th"),t=Array.prototype.slice.call(this.element_.querySelectorAll("tbody tr")),s=Array.prototype.slice.call(this.element_.querySelectorAll("tfoot tr")),i=t.concat(s);if(this.element_.classList.contains(this.CssClasses_.SELECTABLE)){var n=document.createElement("th"),a=this.createCheckbox_(null,i);n.appendChild(a),e.parentElement.insertBefore(n,e);for(var l=0;l<i.length;l++){var o=i[l].querySelector("td");if(o){var r=document.createElement("td");if("TBODY"===i[l].parentNode.nodeName.toUpperCase()){var _=this.createCheckbox_(i[l]);r.appendChild(_)}i[l].insertBefore(r,o)}}this.element_.classList.add(this.CssClasses_.IS_UPGRADED)}}},s.register({constructor:b,classAsString:"MaterialDataTable",cssClass:"mdl-js-data-table"});var y=function(e){this.element_=e,this.init()};window.MaterialRipple=y,y.prototype.Constant_={INITIAL_SCALE:"scale(0.0001, 0.0001)",INITIAL_SIZE:"1px",INITIAL_OPACITY:"0.4",FINAL_OPACITY:"0",FINAL_SCALE:""},y.prototype.CssClasses_={RIPPLE_CENTER:"mdl-ripple--center",RIPPLE_EFFECT_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE:"mdl-ripple",IS_ANIMATING:"is-animating",IS_VISIBLE:"is-visible"},y.prototype.downHandler_=function(e){if(!this.rippleElement_.style.width&&!this.rippleElement_.style.height){var t=this.element_.getBoundingClientRect();this.boundHeight=t.height,this.boundWidth=t.width,this.rippleSize_=2*Math.sqrt(t.width*t.width+t.height*t.height)+2,this.rippleElement_.style.width=this.rippleSize_+"px",this.rippleElement_.style.height=this.rippleSize_+"px"}if(this.rippleElement_.classList.add(this.CssClasses_.IS_VISIBLE),"mousedown"===e.type&&this.ignoringMouseDown_)this.ignoringMouseDown_=!1;else{"touchstart"===e.type&&(this.ignoringMouseDown_=!0);var s=this.getFrameCount();if(s>0)return;this.setFrameCount(1);var i,n,a=e.currentTarget.getBoundingClientRect();if(0===e.clientX&&0===e.clientY)i=Math.round(a.width/2),n=Math.round(a.height/2);else{var l=e.clientX?e.clientX:e.touches[0].clientX,o=e.clientY?e.clientY:e.touches[0].clientY;i=Math.round(l-a.left),n=Math.round(o-a.top)}this.setRippleXY(i,n),this.setRippleStyles(!0),window.requestAnimationFrame(this.animFrameHandler.bind(this))}},y.prototype.upHandler_=function(e){e&&2!==e.detail&&window.setTimeout(function(){this.rippleElement_.classList.remove(this.CssClasses_.IS_VISIBLE)}.bind(this),0)},y.prototype.init=function(){if(this.element_){var e=this.element_.classList.contains(this.CssClasses_.RIPPLE_CENTER);this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT_IGNORE_EVENTS)||(this.rippleElement_=this.element_.querySelector("."+this.CssClasses_.RIPPLE),this.frameCount_=0,this.rippleSize_=0,this.x_=0,this.y_=0,this.ignoringMouseDown_=!1,this.boundDownHandler=this.downHandler_.bind(this),this.element_.addEventListener("mousedown",this.boundDownHandler),this.element_.addEventListener("touchstart",this.boundDownHandler),this.boundUpHandler=this.upHandler_.bind(this),this.element_.addEventListener("mouseup",this.boundUpHandler),this.element_.addEventListener("mouseleave",this.boundUpHandler),this.element_.addEventListener("touchend",this.boundUpHandler),this.element_.addEventListener("blur",this.boundUpHandler),this.getFrameCount=function(){return this.frameCount_},this.setFrameCount=function(e){this.frameCount_=e},this.getRippleElement=function(){return this.rippleElement_},this.setRippleXY=function(e,t){this.x_=e,this.y_=t},this.setRippleStyles=function(t){if(null!==this.rippleElement_){var s,i,n,a="translate("+this.x_+"px, "+this.y_+"px)";t?(i=this.Constant_.INITIAL_SCALE,n=this.Constant_.INITIAL_SIZE):(i=this.Constant_.FINAL_SCALE,n=this.rippleSize_+"px",e&&(a="translate("+this.boundWidth/2+"px, "+this.boundHeight/2+"px)")),s="translate(-50%, -50%) "+a+i,this.rippleElement_.style.webkitTransform=s,this.rippleElement_.style.msTransform=s,this.rippleElement_.style.transform=s,t?this.rippleElement_.classList.remove(this.CssClasses_.IS_ANIMATING):this.rippleElement_.classList.add(this.CssClasses_.IS_ANIMATING)}},this.animFrameHandler=function(){this.frameCount_-- >0?window.requestAnimationFrame(this.animFrameHandler.bind(this)):this.setRippleStyles(!1)})}},s.register({constructor:y,classAsString:"MaterialRipple",cssClass:"mdl-js-ripple-effect",widget:!1})}();
//# sourceMappingURL=material.min.js.map

/**
 * BxSlider v4.1.2 - Fully loaded, responsive content slider
 * http://bxslider.com
 *
 * Copyright 2014, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com
 * Written while drinking Belgian ales and listening to jazz
 *
 * Released under the MIT license - http://opensource.org/licenses/MIT
 */

;(function($){

	var plugin = {};

	var defaults = {

		// GENERAL
		mode: 'horizontal',
		slideSelector: '',
		infiniteLoop: true,
		hideControlOnEnd: false,
		speed: 500,
		easing: null,
		slideMargin: 0,
		startSlide: 0,
		randomStart: false,
		captions: false,
		ticker: false,
		tickerHover: false,
		adaptiveHeight: false,
		adaptiveHeightSpeed: 500,
		video: false,
		useCSS: true,
		preloadImages: 'visible',
		responsive: true,
		slideZIndex: 50,
		wrapperClass: 'bx-wrapper',

		// TOUCH
		touchEnabled: true,
		swipeThreshold: 50,
		oneToOneTouch: true,
		preventDefaultSwipeX: true,
		preventDefaultSwipeY: false,

		// PAGER
		pager: true,
		pagerType: 'full',
		pagerShortSeparator: ' / ',
		pagerSelector: null,
		buildPager: null,
		pagerCustom: null,

		// CONTROLS
		controls: true,
		nextText: 'Next',
		prevText: 'Prev',
		nextSelector: null,
		prevSelector: null,
		autoControls: false,
		startText: 'Start',
		stopText: 'Stop',
		autoControlsCombine: false,
		autoControlsSelector: null,

		// AUTO
		auto: false,
		pause: 4000,
		autoStart: true,
		autoDirection: 'next',
		autoHover: false,
		autoDelay: 0,
		autoSlideForOnePage: false,

		// CAROUSEL
		minSlides: 1,
		maxSlides: 1,
		moveSlides: 0,
		slideWidth: 0,

		// CALLBACKS
		onSliderLoad: function() {},
		onSlideBefore: function() {},
		onSlideAfter: function() {},
		onSlideNext: function() {},
		onSlidePrev: function() {},
		onSliderResize: function() {}
	}

	$.fn.bxSlider = function(options){

		if(this.length == 0) return this;

		// support mutltiple elements
		if(this.length > 1){
			this.each(function(){$(this).bxSlider(options)});
			return this;
		}

		// create a namespace to be used throughout the plugin
		var slider = {};
		// set a reference to our slider element
		var el = this;
		plugin.el = this;

		/**
		 * Makes slideshow responsive
		 */
		// first get the original window dimens (thanks alot IE)
		var windowWidth = $(window).width();
		var windowHeight = $(window).height();



		/**
		 * ===================================================================================
		 * = PRIVATE FUNCTIONS
		 * ===================================================================================
		 */

		/**
		 * Initializes namespace settings to be used throughout plugin
		 */
		var init = function(){
			// merge user-supplied options with the defaults
			slider.settings = $.extend({}, defaults, options);
			// parse slideWidth setting
			slider.settings.slideWidth = parseInt(slider.settings.slideWidth);
			// store the original children
			slider.children = el.children(slider.settings.slideSelector);
			// check if actual number of slides is less than minSlides / maxSlides
			if(slider.children.length < slider.settings.minSlides) slider.settings.minSlides = slider.children.length;
			if(slider.children.length < slider.settings.maxSlides) slider.settings.maxSlides = slider.children.length;
			// if random start, set the startSlide setting to random number
			if(slider.settings.randomStart) slider.settings.startSlide = Math.floor(Math.random() * slider.children.length);
			// store active slide information
			slider.active = { index: slider.settings.startSlide }
			// store if the slider is in carousel mode (displaying / moving multiple slides)
			slider.carousel = slider.settings.minSlides > 1 || slider.settings.maxSlides > 1;
			// if carousel, force preloadImages = 'all'
			if(slider.carousel) slider.settings.preloadImages = 'all';
			// calculate the min / max width thresholds based on min / max number of slides
			// used to setup and update carousel slides dimensions
			slider.minThreshold = (slider.settings.minSlides * slider.settings.slideWidth) + ((slider.settings.minSlides - 1) * slider.settings.slideMargin);
			slider.maxThreshold = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
			// store the current state of the slider (if currently animating, working is true)
			slider.working = false;
			// initialize the controls object
			slider.controls = {};
			// initialize an auto interval
			slider.interval = null;
			// determine which property to use for transitions
			slider.animProp = slider.settings.mode == 'vertical' ? 'top' : 'left';
			// determine if hardware acceleration can be used
			slider.usingCSS = slider.settings.useCSS && slider.settings.mode != 'fade' && (function(){
				// create our test div element
				var div = document.createElement('div');
				// css transition properties
				var props = ['WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
				// test for each property
				for(var i in props){
					if(div.style[props[i]] !== undefined){
						slider.cssPrefix = props[i].replace('Perspective', '').toLowerCase();
						slider.animProp = '-' + slider.cssPrefix + '-transform';
						return true;
					}
				}
				return false;
			}());
			// if vertical mode always make maxSlides and minSlides equal
			if(slider.settings.mode == 'vertical') slider.settings.maxSlides = slider.settings.minSlides;
			// save original style data
			el.data("origStyle", el.attr("style"));
			el.children(slider.settings.slideSelector).each(function() {
			  $(this).data("origStyle", $(this).attr("style"));
			});
			// perform all DOM / CSS modifications
			setup();
		}

		/**
		 * Performs all DOM and CSS modifications
		 */
		var setup = function(){
			// wrap el in a wrapper
			el.wrap('<div class="' + slider.settings.wrapperClass + '"><div class="bx-viewport"></div></div>');
			// store a namspace reference to .bx-viewport
			slider.viewport = el.parent();
			// add a loading div to display while images are loading
			slider.loader = $('<div class="bx-loading" />');
			slider.viewport.prepend(slider.loader);
			// set el to a massive width, to hold any needed slides
			// also strip any margin and padding from el
			el.css({
				width: slider.settings.mode == 'horizontal' ? (slider.children.length * 100 + 215) + '%' : 'auto',
				position: 'relative'
			});
			// if using CSS, add the easing property
			if(slider.usingCSS && slider.settings.easing){
				el.css('-' + slider.cssPrefix + '-transition-timing-function', slider.settings.easing);
			// if not using CSS and no easing value was supplied, use the default JS animation easing (swing)
			}else if(!slider.settings.easing){
				slider.settings.easing = 'swing';
			}
			var slidesShowing = getNumberSlidesShowing();
			// make modifications to the viewport (.bx-viewport)
			slider.viewport.css({
				width: '100%',
				overflow: 'hidden',
				position: 'relative'
			});
			slider.viewport.parent().css({
				maxWidth: getViewportMaxWidth()
			});
			// make modification to the wrapper (.bx-wrapper)
			if(!slider.settings.pager) {
				slider.viewport.parent().css({
				margin: '0 auto 0px'
				});
			}
			// apply css to all slider children
			slider.children.css({
				'float': slider.settings.mode == 'horizontal' ? 'left' : 'none',
				listStyle: 'none',
				position: 'relative'
			});
			// apply the calculated width after the float is applied to prevent scrollbar interference
			slider.children.css('width', getSlideWidth());
			// if slideMargin is supplied, add the css
			if(slider.settings.mode == 'horizontal' && slider.settings.slideMargin > 0) slider.children.css('marginRight', slider.settings.slideMargin);
			if(slider.settings.mode == 'vertical' && slider.settings.slideMargin > 0) slider.children.css('marginBottom', slider.settings.slideMargin);
			// if "fade" mode, add positioning and z-index CSS
			if(slider.settings.mode == 'fade'){
				slider.children.css({
					position: 'absolute',
					zIndex: 0,
					display: 'none'
				});
				// prepare the z-index on the showing element
				slider.children.eq(slider.settings.startSlide).css({zIndex: slider.settings.slideZIndex, display: 'block'});
			}
			// create an element to contain all slider controls (pager, start / stop, etc)
			slider.controls.el = $('<div class="bx-controls" />');
			// if captions are requested, add them
			if(slider.settings.captions) appendCaptions();
			// check if startSlide is last slide
			slider.active.last = slider.settings.startSlide == getPagerQty() - 1;
			// if video is true, set up the fitVids plugin
			if(slider.settings.video) el.fitVids();
			// set the default preload selector (visible)
			var preloadSelector = slider.children.eq(slider.settings.startSlide);
			if (slider.settings.preloadImages == "all") preloadSelector = slider.children;
			// only check for control addition if not in "ticker" mode
			if(!slider.settings.ticker){
				// if pager is requested, add it
				if(slider.settings.pager) appendPager();
				// if controls are requested, add them
				if(slider.settings.controls) appendControls();
				// if auto is true, and auto controls are requested, add them
				if(slider.settings.auto && slider.settings.autoControls) appendControlsAuto();
				// if any control option is requested, add the controls wrapper
				if(slider.settings.controls || slider.settings.autoControls || slider.settings.pager) slider.viewport.after(slider.controls.el);
			// if ticker mode, do not allow a pager
			}else{
				slider.settings.pager = false;
			}
			// preload all images, then perform final DOM / CSS modifications that depend on images being loaded
			loadElements(preloadSelector, start);
		}

		var loadElements = function(selector, callback){
			var total = selector.find('img, iframe').length;
			if (total == 0){
				callback();
				return;
			}
			var count = 0;
			selector.find('img, iframe').each(function(){
				$(this).one('load', function() {
				  if(++count == total) callback();
				}).each(function() {
				  if(this.complete) $(this).load();
				});
			});
		}

		/**
		 * Start the slider
		 */
		var start = function(){
			// if infinite loop, prepare additional slides
			if(slider.settings.infiniteLoop && slider.settings.mode != 'fade' && !slider.settings.ticker){
				var slice = slider.settings.mode == 'vertical' ? slider.settings.minSlides : slider.settings.maxSlides;
				var sliceAppend = slider.children.slice(0, slice).clone().addClass('bx-clone');
				var slicePrepend = slider.children.slice(-slice).clone().addClass('bx-clone');
				el.append(sliceAppend).prepend(slicePrepend);
			}
			// remove the loading DOM element
			slider.loader.remove();
			// set the left / top position of "el"
			setSlidePosition();
			// if "vertical" mode, always use adaptiveHeight to prevent odd behavior
			if (slider.settings.mode == 'vertical') slider.settings.adaptiveHeight = true;
			// set the viewport height
			slider.viewport.height(getViewportHeight());
			// make sure everything is positioned just right (same as a window resize)
			el.redrawSlider();
			// onSliderLoad callback
			slider.settings.onSliderLoad(slider.active.index);
			// slider has been fully initialized
			slider.initialized = true;
			// bind the resize call to the window
			if (slider.settings.responsive) $(window).bind('resize', resizeWindow);
			// if auto is true and has more than 1 page, start the show
			if (slider.settings.auto && slider.settings.autoStart && (getPagerQty() > 1 || slider.settings.autoSlideForOnePage)) initAuto();
			// if ticker is true, start the ticker
			if (slider.settings.ticker) initTicker();
			// if pager is requested, make the appropriate pager link active
			if (slider.settings.pager) updatePagerActive(slider.settings.startSlide);
			// check for any updates to the controls (like hideControlOnEnd updates)
			if (slider.settings.controls) updateDirectionControls();
			// if touchEnabled is true, setup the touch events
			if (slider.settings.touchEnabled && !slider.settings.ticker) initTouch();
		}

		/**
		 * Returns the calculated height of the viewport, used to determine either adaptiveHeight or the maxHeight value
		 */
		var getViewportHeight = function(){
			var height = 0;
			// first determine which children (slides) should be used in our height calculation
			var children = $();
			// if mode is not "vertical" and adaptiveHeight is false, include all children
			if(slider.settings.mode != 'vertical' && !slider.settings.adaptiveHeight){
				children = slider.children;
			}else{
				// if not carousel, return the single active child
				if(!slider.carousel){
					children = slider.children.eq(slider.active.index);
				// if carousel, return a slice of children
				}else{
					// get the individual slide index
					var currentIndex = slider.settings.moveSlides == 1 ? slider.active.index : slider.active.index * getMoveBy();
					// add the current slide to the children
					children = slider.children.eq(currentIndex);
					// cycle through the remaining "showing" slides
					for (i = 1; i <= slider.settings.maxSlides - 1; i++){
						// if looped back to the start
						if(currentIndex + i >= slider.children.length){
							children = children.add(slider.children.eq(i - 1));
						}else{
							children = children.add(slider.children.eq(currentIndex + i));
						}
					}
				}
			}
			// if "vertical" mode, calculate the sum of the heights of the children
			if(slider.settings.mode == 'vertical'){
				children.each(function(index) {
				  height += $(this).outerHeight();
				});
				// add user-supplied margins
				if(slider.settings.slideMargin > 0){
					height += slider.settings.slideMargin * (slider.settings.minSlides - 1);
				}
			// if not "vertical" mode, calculate the max height of the children
			}else{
				height = Math.max.apply(Math, children.map(function(){
					return $(this).outerHeight(false);
				}).get());
			}

			if(slider.viewport.css('box-sizing') == 'border-box'){
				height +=	parseFloat(slider.viewport.css('padding-top')) + parseFloat(slider.viewport.css('padding-bottom')) +
							parseFloat(slider.viewport.css('border-top-width')) + parseFloat(slider.viewport.css('border-bottom-width'));
			}else if(slider.viewport.css('box-sizing') == 'padding-box'){
				height +=	parseFloat(slider.viewport.css('padding-top')) + parseFloat(slider.viewport.css('padding-bottom'));
			}

			return height;
		}

		/**
		 * Returns the calculated width to be used for the outer wrapper / viewport
		 */
		var getViewportMaxWidth = function(){
			var width = '100%';
			if(slider.settings.slideWidth > 0){
				if(slider.settings.mode == 'horizontal'){
					width = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
				}else{
					width = slider.settings.slideWidth;
				}
			}
			return width;
		}

		/**
		 * Returns the calculated width to be applied to each slide
		 */
		var getSlideWidth = function(){
			// start with any user-supplied slide width
			var newElWidth = slider.settings.slideWidth;
			// get the current viewport width
			var wrapWidth = slider.viewport.width();
			// if slide width was not supplied, or is larger than the viewport use the viewport width
			if(slider.settings.slideWidth == 0 ||
				(slider.settings.slideWidth > wrapWidth && !slider.carousel) ||
				slider.settings.mode == 'vertical'){
				newElWidth = wrapWidth;
			// if carousel, use the thresholds to determine the width
			}else if(slider.settings.maxSlides > 1 && slider.settings.mode == 'horizontal'){
				if(wrapWidth > slider.maxThreshold){
					// newElWidth = (wrapWidth - (slider.settings.slideMargin * (slider.settings.maxSlides - 1))) / slider.settings.maxSlides;
				}else if(wrapWidth < slider.minThreshold){
					newElWidth = (wrapWidth - (slider.settings.slideMargin * (slider.settings.minSlides - 1))) / slider.settings.minSlides;
				}
			}
			return newElWidth;
		}

		/**
		 * Returns the number of slides currently visible in the viewport (includes partially visible slides)
		 */
		var getNumberSlidesShowing = function(){
			var slidesShowing = 1;
			if(slider.settings.mode == 'horizontal' && slider.settings.slideWidth > 0){
				// if viewport is smaller than minThreshold, return minSlides
				if(slider.viewport.width() < slider.minThreshold){
					slidesShowing = slider.settings.minSlides;
				// if viewport is larger than minThreshold, return maxSlides
				}else if(slider.viewport.width() > slider.maxThreshold){
					slidesShowing = slider.settings.maxSlides;
				// if viewport is between min / max thresholds, divide viewport width by first child width
				}else{
					var childWidth = slider.children.first().width() + slider.settings.slideMargin;
					slidesShowing = Math.floor((slider.viewport.width() +
						slider.settings.slideMargin) / childWidth);
				}
			// if "vertical" mode, slides showing will always be minSlides
			}else if(slider.settings.mode == 'vertical'){
				slidesShowing = slider.settings.minSlides;
			}
			return slidesShowing;
		}

		/**
		 * Returns the number of pages (one full viewport of slides is one "page")
		 */
		var getPagerQty = function(){
			var pagerQty = 0;
			// if moveSlides is specified by the user
			if(slider.settings.moveSlides > 0){
				if(slider.settings.infiniteLoop){
					pagerQty = Math.ceil(slider.children.length / getMoveBy());
				}else{
					// use a while loop to determine pages
					var breakPoint = 0;
					var counter = 0
					// when breakpoint goes above children length, counter is the number of pages
					while (breakPoint < slider.children.length){
						++pagerQty;
						breakPoint = counter + getNumberSlidesShowing();
						counter += slider.settings.moveSlides <= getNumberSlidesShowing() ? slider.settings.moveSlides : getNumberSlidesShowing();
					}
				}
			// if moveSlides is 0 (auto) divide children length by sides showing, then round up
			}else{
				pagerQty = Math.ceil(slider.children.length / getNumberSlidesShowing());
			}
			return pagerQty;
		}

		/**
		 * Returns the number of indivual slides by which to shift the slider
		 */
		var getMoveBy = function(){
			// if moveSlides was set by the user and moveSlides is less than number of slides showing
			if(slider.settings.moveSlides > 0 && slider.settings.moveSlides <= getNumberSlidesShowing()){
				return slider.settings.moveSlides;
			}
			// if moveSlides is 0 (auto)
			return getNumberSlidesShowing();
		}

		/**
		 * Sets the slider's (el) left or top position
		 */
		var setSlidePosition = function(){
			// if last slide, not infinite loop, and number of children is larger than specified maxSlides
			if(slider.children.length > slider.settings.maxSlides && slider.active.last && !slider.settings.infiniteLoop){
				if (slider.settings.mode == 'horizontal'){
					// get the last child's position
					var lastChild = slider.children.last();
					var position = lastChild.position();
					// set the left position
					setPositionProperty(-(position.left - (slider.viewport.width() - lastChild.outerWidth())), 'reset', 0);
				}else if(slider.settings.mode == 'vertical'){
					// get the last showing index's position
					var lastShowingIndex = slider.children.length - slider.settings.minSlides;
					var position = slider.children.eq(lastShowingIndex).position();
					// set the top position
					setPositionProperty(-position.top, 'reset', 0);
				}
			// if not last slide
			}else{
				// get the position of the first showing slide
				var position = slider.children.eq(slider.active.index * getMoveBy()).position();
				// check for last slide
				if (slider.active.index == getPagerQty() - 1) slider.active.last = true;
				// set the repective position
				if (position != undefined){
					if (slider.settings.mode == 'horizontal') setPositionProperty(-position.left, 'reset', 0);
					else if (slider.settings.mode == 'vertical') setPositionProperty(-position.top, 'reset', 0);
				}
			}
		}

		/**
		 * Sets the el's animating property position (which in turn will sometimes animate el).
		 * If using CSS, sets the transform property. If not using CSS, sets the top / left property.
		 *
		 * @param value (int)
		 *  - the animating property's value
		 *
		 * @param type (string) 'slider', 'reset', 'ticker'
		 *  - the type of instance for which the function is being
		 *
		 * @param duration (int)
		 *  - the amount of time (in ms) the transition should occupy
		 *
		 * @param params (array) optional
		 *  - an optional parameter containing any variables that need to be passed in
		 */
		var setPositionProperty = function(value, type, duration, params){
			// use CSS transform
			if(slider.usingCSS){
				// determine the translate3d value
				var propValue = slider.settings.mode == 'vertical' ? 'translate3d(0, ' + value + 'px, 0)' : 'translate3d(' + value + 'px, 0, 0)';
				// add the CSS transition-duration
				el.css('-' + slider.cssPrefix + '-transition-duration', duration / 1000 + 's');
				if(type == 'slide'){
					// set the property value
					el.css(slider.animProp, propValue);
					// bind a callback method - executes when CSS transition completes
					el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(){
						// unbind the callback
						el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
						updateAfterSlideTransition();
					});
				}else if(type == 'reset'){
					el.css(slider.animProp, propValue);
				}else if(type == 'ticker'){
					// make the transition use 'linear'
					el.css('-' + slider.cssPrefix + '-transition-timing-function', 'linear');
					el.css(slider.animProp, propValue);
					// bind a callback method - executes when CSS transition completes
					el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(){
						// unbind the callback
						el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
						// reset the position
						setPositionProperty(params['resetValue'], 'reset', 0);
						// start the loop again
						tickerLoop();
					});
				}
			// use JS animate
			}else{
				var animateObj = {};
				animateObj[slider.animProp] = value;
				if(type == 'slide'){
					el.animate(animateObj, duration, slider.settings.easing, function(){
						updateAfterSlideTransition();
					});
				}else if(type == 'reset'){
					el.css(slider.animProp, value)
				}else if(type == 'ticker'){
					el.animate(animateObj, speed, 'linear', function(){
						setPositionProperty(params['resetValue'], 'reset', 0);
						// run the recursive loop after animation
						tickerLoop();
					});
				}
			}
		}

		/**
		 * Populates the pager with proper amount of pages
		 */
		var populatePager = function(){
			var pagerHtml = '';
			var pagerQty = getPagerQty();
			// loop through each pager item
			for(var i=0; i < pagerQty; i++){
				var linkContent = '';
				// if a buildPager function is supplied, use it to get pager link value, else use index + 1
				if(slider.settings.buildPager && $.isFunction(slider.settings.buildPager)){
					linkContent = slider.settings.buildPager(i);
					slider.pagerEl.addClass('bx-custom-pager');
				}else{
					linkContent = i + 1;
					slider.pagerEl.addClass('bx-default-pager');
				}
				// var linkContent = slider.settings.buildPager && $.isFunction(slider.settings.buildPager) ? slider.settings.buildPager(i) : i + 1;
				// add the markup to the string
				pagerHtml += '<div class="bx-pager-item"><a href="" data-slide-index="' + i + '" class="bx-pager-link">' + linkContent + '</a></div>';
			};
			// populate the pager element with pager links
			slider.pagerEl.html(pagerHtml);
		}

		/**
		 * Appends the pager to the controls element
		 */
		var appendPager = function(){
			if(!slider.settings.pagerCustom){
				// create the pager DOM element
				slider.pagerEl = $('<div class="bx-pager" />');
				// if a pager selector was supplied, populate it with the pager
				if(slider.settings.pagerSelector){
					$(slider.settings.pagerSelector).html(slider.pagerEl);
				// if no pager selector was supplied, add it after the wrapper
				}else{
					slider.controls.el.addClass('bx-has-pager').append(slider.pagerEl);
				}
				// populate the pager
				populatePager();
			}else{
				slider.pagerEl = $(slider.settings.pagerCustom);
			}
			// assign the pager click binding
			slider.pagerEl.on('click', 'a', clickPagerBind);
		}

		/**
		 * Appends prev / next controls to the controls element
		 */
		var appendControls = function(){
			slider.controls.next = $('<a class="bx-next" href="">' + slider.settings.nextText + '</a>');
			slider.controls.prev = $('<a class="bx-prev" href="">' + slider.settings.prevText + '</a>');
			// bind click actions to the controls
			slider.controls.next.bind('click', clickNextBind);
			slider.controls.prev.bind('click', clickPrevBind);
			// if nextSlector was supplied, populate it
			if(slider.settings.nextSelector){
				$(slider.settings.nextSelector).append(slider.controls.next);
			}
			// if prevSlector was supplied, populate it
			if(slider.settings.prevSelector){
				$(slider.settings.prevSelector).append(slider.controls.prev);
			}
			// if no custom selectors were supplied
			if(!slider.settings.nextSelector && !slider.settings.prevSelector){
				// add the controls to the DOM
				slider.controls.directionEl = $('<div class="bx-controls-direction" />');
				// add the control elements to the directionEl
				slider.controls.directionEl.append(slider.controls.prev).append(slider.controls.next);
				// slider.viewport.append(slider.controls.directionEl);
				slider.controls.el.addClass('bx-has-controls-direction').append(slider.controls.directionEl);
			}
		}

		/**
		 * Appends start / stop auto controls to the controls element
		 */
		var appendControlsAuto = function(){
			slider.controls.start = $('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + slider.settings.startText + '</a></div>');
			slider.controls.stop = $('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + slider.settings.stopText + '</a></div>');
			// add the controls to the DOM
			slider.controls.autoEl = $('<div class="bx-controls-auto" />');
			// bind click actions to the controls
			slider.controls.autoEl.on('click', '.bx-start', clickStartBind);
			slider.controls.autoEl.on('click', '.bx-stop', clickStopBind);
			// if autoControlsCombine, insert only the "start" control
			if(slider.settings.autoControlsCombine){
				slider.controls.autoEl.append(slider.controls.start);
			// if autoControlsCombine is false, insert both controls
			}else{
				slider.controls.autoEl.append(slider.controls.start).append(slider.controls.stop);
			}
			// if auto controls selector was supplied, populate it with the controls
			if(slider.settings.autoControlsSelector){
				$(slider.settings.autoControlsSelector).html(slider.controls.autoEl);
			// if auto controls selector was not supplied, add it after the wrapper
			}else{
				slider.controls.el.addClass('bx-has-controls-auto').append(slider.controls.autoEl);
			}
			// update the auto controls
			updateAutoControls(slider.settings.autoStart ? 'stop' : 'start');
		}

		/**
		 * Appends image captions to the DOM
		 */
		var appendCaptions = function(){
			// cycle through each child
			slider.children.each(function(index){
				// get the image title attribute
				var title = $(this).find('img:first').attr('title');
				// append the caption
				if (title != undefined && ('' + title).length) {
                    $(this).append('<div class="bx-caption"><span>' + title + '</span></div>');
                }
			});
		}

		/**
		 * Click next binding
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var clickNextBind = function(e){
			// if auto show is running, stop it
			if (slider.settings.auto) el.stopAuto();
			el.goToNextSlide();
			e.preventDefault();
		}

		/**
		 * Click prev binding
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var clickPrevBind = function(e){
			// if auto show is running, stop it
			if (slider.settings.auto) el.stopAuto();
			el.goToPrevSlide();
			e.preventDefault();
		}

		/**
		 * Click start binding
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var clickStartBind = function(e){
			el.startAuto();
			e.preventDefault();
		}

		/**
		 * Click stop binding
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var clickStopBind = function(e){
			el.stopAuto();
			e.preventDefault();
		}

		/**
		 * Click pager binding
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var clickPagerBind = function(e){
			// if auto show is running, stop it
			if (slider.settings.auto) el.stopAuto();
			var pagerLink = $(e.currentTarget);
			if(pagerLink.attr('data-slide-index') !== undefined){
				var pagerIndex = parseInt(pagerLink.attr('data-slide-index'));
				// if clicked pager link is not active, continue with the goToSlide call
				if(pagerIndex != slider.active.index) el.goToSlide(pagerIndex);
				e.preventDefault();
			}
		}

		/**
		 * Updates the pager links with an active class
		 *
		 * @param slideIndex (int)
		 *  - index of slide to make active
		 */
		var updatePagerActive = function(slideIndex){
			// if "short" pager type
			var len = slider.children.length; // nb of children
			if(slider.settings.pagerType == 'short'){
				if(slider.settings.maxSlides > 1) {
					len = Math.ceil(slider.children.length/slider.settings.maxSlides);
				}
				slider.pagerEl.html( (slideIndex + 1) + slider.settings.pagerShortSeparator + len);
				return;
			}
			// remove all pager active classes
			slider.pagerEl.find('a').removeClass('active');
			// apply the active class for all pagers
			slider.pagerEl.each(function(i, el) { $(el).find('a').eq(slideIndex).addClass('active'); });
		}

		/**
		 * Performs needed actions after a slide transition
		 */
		var updateAfterSlideTransition = function(){
			// if infinte loop is true
			if(slider.settings.infiniteLoop){
				var position = '';
				// first slide
				if(slider.active.index == 0){
					// set the new position
					position = slider.children.eq(0).position();
				// carousel, last slide
				}else if(slider.active.index == getPagerQty() - 1 && slider.carousel){
					position = slider.children.eq((getPagerQty() - 1) * getMoveBy()).position();
				// last slide
				}else if(slider.active.index == slider.children.length - 1){
					position = slider.children.eq(slider.children.length - 1).position();
				}
				if(position){
					if (slider.settings.mode == 'horizontal') { setPositionProperty(-position.left, 'reset', 0); }
					else if (slider.settings.mode == 'vertical') { setPositionProperty(-position.top, 'reset', 0); }
				}
			}
			// declare that the transition is complete
			slider.working = false;
			// onSlideAfter callback
			slider.settings.onSlideAfter(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
		}

		/**
		 * Updates the auto controls state (either active, or combined switch)
		 *
		 * @param state (string) "start", "stop"
		 *  - the new state of the auto show
		 */
		var updateAutoControls = function(state){
			// if autoControlsCombine is true, replace the current control with the new state
			if(slider.settings.autoControlsCombine){
				slider.controls.autoEl.html(slider.controls[state]);
			// if autoControlsCombine is false, apply the "active" class to the appropriate control
			}else{
				slider.controls.autoEl.find('a').removeClass('active');
				slider.controls.autoEl.find('a:not(.bx-' + state + ')').addClass('active');
			}
		}

		/**
		 * Updates the direction controls (checks if either should be hidden)
		 */
		var updateDirectionControls = function(){
			if(getPagerQty() == 1){
				slider.controls.prev.addClass('disabled');
				slider.controls.next.addClass('disabled');
			}else if(!slider.settings.infiniteLoop && slider.settings.hideControlOnEnd){
				// if first slide
				if (slider.active.index == 0){
					slider.controls.prev.addClass('disabled');
					slider.controls.next.removeClass('disabled');
				// if last slide
				}else if(slider.active.index == getPagerQty() - 1){
					slider.controls.next.addClass('disabled');
					slider.controls.prev.removeClass('disabled');
				// if any slide in the middle
				}else{
					slider.controls.prev.removeClass('disabled');
					slider.controls.next.removeClass('disabled');
				}
			}
		}

		/**
		 * Initialzes the auto process
		 */
		var initAuto = function(){
			// if autoDelay was supplied, launch the auto show using a setTimeout() call
			if(slider.settings.autoDelay > 0){
				var timeout = setTimeout(el.startAuto, slider.settings.autoDelay);
			// if autoDelay was not supplied, start the auto show normally
			}else{
				el.startAuto();
			}
			// if autoHover is requested
			if(slider.settings.autoHover){
				// on el hover
				el.hover(function(){
					// if the auto show is currently playing (has an active interval)
					if(slider.interval){
						// stop the auto show and pass true agument which will prevent control update
						el.stopAuto(true);
						// create a new autoPaused value which will be used by the relative "mouseout" event
						slider.autoPaused = true;
					}
				}, function(){
					// if the autoPaused value was created be the prior "mouseover" event
					if(slider.autoPaused){
						// start the auto show and pass true agument which will prevent control update
						el.startAuto(true);
						// reset the autoPaused value
						slider.autoPaused = null;
					}
				});
			}
		}

		/**
		 * Initialzes the ticker process
		 */
		var initTicker = function(){
			var startPosition = 0;
			// if autoDirection is "next", append a clone of the entire slider
			if(slider.settings.autoDirection == 'next'){
				el.append(slider.children.clone().addClass('bx-clone'));
			// if autoDirection is "prev", prepend a clone of the entire slider, and set the left position
			}else{
				el.prepend(slider.children.clone().addClass('bx-clone'));
				var position = slider.children.first().position();
				startPosition = slider.settings.mode == 'horizontal' ? -position.left : -position.top;
			}
			setPositionProperty(startPosition, 'reset', 0);
			// do not allow controls in ticker mode
			slider.settings.pager = false;
			slider.settings.controls = false;
			slider.settings.autoControls = false;
			// if autoHover is requested
			if(slider.settings.tickerHover && !slider.usingCSS){
				// on el hover
				slider.viewport.hover(function(){
					el.stop();
				}, function(){
					// calculate the total width of children (used to calculate the speed ratio)
					var totalDimens = 0;
					slider.children.each(function(index){
					  totalDimens += slider.settings.mode == 'horizontal' ? $(this).outerWidth(true) : $(this).outerHeight(true);
					});
					// calculate the speed ratio (used to determine the new speed to finish the paused animation)
					var ratio = slider.settings.speed / totalDimens;
					// determine which property to use
					var property = slider.settings.mode == 'horizontal' ? 'left' : 'top';
					// calculate the new speed
					var newSpeed = ratio * (totalDimens - (Math.abs(parseInt(el.css(property)))));
					tickerLoop(newSpeed);
				});
			}
			// start the ticker loop
			tickerLoop();
		}

		/**
		 * Runs a continuous loop, news ticker-style
		 */
		var tickerLoop = function(resumeSpeed){
			speed = resumeSpeed ? resumeSpeed : slider.settings.speed;
			var position = {left: 0, top: 0};
			var reset = {left: 0, top: 0};
			// if "next" animate left position to last child, then reset left to 0
			if(slider.settings.autoDirection == 'next'){
				position = el.find('.bx-clone').first().position();
			// if "prev" animate left position to 0, then reset left to first non-clone child
			}else{
				reset = slider.children.first().position();
			}
			var animateProperty = slider.settings.mode == 'horizontal' ? -position.left : -position.top;
			var resetValue = slider.settings.mode == 'horizontal' ? -reset.left : -reset.top;
			var params = {resetValue: resetValue};
			setPositionProperty(animateProperty, 'ticker', speed, params);
		}

		/**
		 * Initializes touch events
		 */
		var initTouch = function(){
			// initialize object to contain all touch values
			slider.touch = {
				start: {x: 0, y: 0},
				end: {x: 0, y: 0}
			}
			slider.viewport.bind('touchstart', onTouchStart);
		}

		/**
		 * Event handler for "touchstart"
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var onTouchStart = function(e){
			if(slider.working){
				e.preventDefault();
			}else{
				// record the original position when touch starts
				slider.touch.originalPos = el.position();
				var orig = e.originalEvent;
				// record the starting touch x, y coordinates
				slider.touch.start.x = orig.changedTouches[0].pageX;
				slider.touch.start.y = orig.changedTouches[0].pageY;
				// bind a "touchmove" event to the viewport
				slider.viewport.bind('touchmove', onTouchMove);
				// bind a "touchend" event to the viewport
				slider.viewport.bind('touchend', onTouchEnd);
			}
		}

		/**
		 * Event handler for "touchmove"
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var onTouchMove = function(e){
			var orig = e.originalEvent;
			// if scrolling on y axis, do not prevent default
			var xMovement = Math.abs(orig.changedTouches[0].pageX - slider.touch.start.x);
			var yMovement = Math.abs(orig.changedTouches[0].pageY - slider.touch.start.y);
			// x axis swipe
			if((xMovement * 3) > yMovement && slider.settings.preventDefaultSwipeX){
				e.preventDefault();
			// y axis swipe
			}else if((yMovement * 3) > xMovement && slider.settings.preventDefaultSwipeY){
				e.preventDefault();
			}
			if(slider.settings.mode != 'fade' && slider.settings.oneToOneTouch){
				var value = 0;
				// if horizontal, drag along x axis
				if(slider.settings.mode == 'horizontal'){
					var change = orig.changedTouches[0].pageX - slider.touch.start.x;
					value = slider.touch.originalPos.left + change;
				// if vertical, drag along y axis
				}else{
					var change = orig.changedTouches[0].pageY - slider.touch.start.y;
					value = slider.touch.originalPos.top + change;
				}
				setPositionProperty(value, 'reset', 0);
			}
		}

		/**
		 * Event handler for "touchend"
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var onTouchEnd = function(e){
			slider.viewport.unbind('touchmove', onTouchMove);
			var orig = e.originalEvent;
			var value = 0;
			// record end x, y positions
			slider.touch.end.x = orig.changedTouches[0].pageX;
			slider.touch.end.y = orig.changedTouches[0].pageY;
			// if fade mode, check if absolute x distance clears the threshold
			if(slider.settings.mode == 'fade'){
				var distance = Math.abs(slider.touch.start.x - slider.touch.end.x);
				if(distance >= slider.settings.swipeThreshold){
					slider.touch.start.x > slider.touch.end.x ? el.goToNextSlide() : el.goToPrevSlide();
					el.stopAuto();
				}
			// not fade mode
			}else{
				var distance = 0;
				// calculate distance and el's animate property
				if(slider.settings.mode == 'horizontal'){
					distance = slider.touch.end.x - slider.touch.start.x;
					value = slider.touch.originalPos.left;
				}else{
					distance = slider.touch.end.y - slider.touch.start.y;
					value = slider.touch.originalPos.top;
				}
				// if not infinite loop and first / last slide, do not attempt a slide transition
				if(!slider.settings.infiniteLoop && ((slider.active.index == 0 && distance > 0) || (slider.active.last && distance < 0))){
					setPositionProperty(value, 'reset', 200);
				}else{
					// check if distance clears threshold
					if(Math.abs(distance) >= slider.settings.swipeThreshold){
						distance < 0 ? el.goToNextSlide() : el.goToPrevSlide();
						el.stopAuto();
					}else{
						// el.animate(property, 200);
						setPositionProperty(value, 'reset', 200);
					}
				}
			}
			slider.viewport.unbind('touchend', onTouchEnd);
		}

		/**
		 * Window resize event callback
		 */
		var resizeWindow = function(e){
			// don't do anything if slider isn't initialized.
			if(!slider.initialized) return;
			// get the new window dimens (again, thank you IE)
			var windowWidthNew = $(window).width();
			var windowHeightNew = $(window).height();
			// make sure that it is a true window resize
			// *we must check this because our dinosaur friend IE fires a window resize event when certain DOM elements
			// are resized. Can you just die already?*
			if(windowWidth != windowWidthNew || windowHeight != windowHeightNew){
				// set the new window dimens
				windowWidth = windowWidthNew;
				windowHeight = windowHeightNew;
				// update all dynamic elements
				el.redrawSlider();
				// Call user resize handler
				slider.settings.onSliderResize.call(el, slider.active.index);
			}
		}

		/**
		 * ===================================================================================
		 * = PUBLIC FUNCTIONS
		 * ===================================================================================
		 */

		/**
		 * Performs slide transition to the specified slide
		 *
		 * @param slideIndex (int)
		 *  - the destination slide's index (zero-based)
		 *
		 * @param direction (string)
		 *  - INTERNAL USE ONLY - the direction of travel ("prev" / "next")
		 */
		el.goToSlide = function(slideIndex, direction){
			// if plugin is currently in motion, ignore request
			if(slider.working || slider.active.index == slideIndex) return;
			// declare that plugin is in motion
			slider.working = true;
			// store the old index
			slider.oldIndex = slider.active.index;
			// if slideIndex is less than zero, set active index to last child (this happens during infinite loop)
			if(slideIndex < 0){
				slider.active.index = getPagerQty() - 1;
			// if slideIndex is greater than children length, set active index to 0 (this happens during infinite loop)
			}else if(slideIndex >= getPagerQty()){
				slider.active.index = 0;
			// set active index to requested slide
			}else{
				slider.active.index = slideIndex;
			}
			// onSlideBefore, onSlideNext, onSlidePrev callbacks
			slider.settings.onSlideBefore(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
			if(direction == 'next'){
				slider.settings.onSlideNext(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
			}else if(direction == 'prev'){
				slider.settings.onSlidePrev(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
			}
			// check if last slide
			slider.active.last = slider.active.index >= getPagerQty() - 1;
			// update the pager with active class
			if(slider.settings.pager) updatePagerActive(slider.active.index);
			// // check for direction control update
			if(slider.settings.controls) updateDirectionControls();
			// if slider is set to mode: "fade"
			if(slider.settings.mode == 'fade'){
				// if adaptiveHeight is true and next height is different from current height, animate to the new height
				if(slider.settings.adaptiveHeight && slider.viewport.height() != getViewportHeight()){
					slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
				}
				// fade out the visible child and reset its z-index value
				slider.children.filter(':visible').fadeOut(slider.settings.speed).css({zIndex: 0});
				// fade in the newly requested slide
				slider.children.eq(slider.active.index).css('zIndex', slider.settings.slideZIndex+1).fadeIn(slider.settings.speed, function(){
					$(this).css('zIndex', slider.settings.slideZIndex);
					updateAfterSlideTransition();
				});
			// slider mode is not "fade"
			}else{
				// if adaptiveHeight is true and next height is different from current height, animate to the new height
				if(slider.settings.adaptiveHeight && slider.viewport.height() != getViewportHeight()){
					slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
				}
				var moveBy = 0;
				var position = {left: 0, top: 0};
				// if carousel and not infinite loop
				if(!slider.settings.infiniteLoop && slider.carousel && slider.active.last){
					if(slider.settings.mode == 'horizontal'){
						// get the last child position
						var lastChild = slider.children.eq(slider.children.length - 1);
						position = lastChild.position();
						// calculate the position of the last slide
						moveBy = slider.viewport.width() - lastChild.outerWidth();
					}else{
						// get last showing index position
						var lastShowingIndex = slider.children.length - slider.settings.minSlides;
						position = slider.children.eq(lastShowingIndex).position();
					}
					// horizontal carousel, going previous while on first slide (infiniteLoop mode)
				}else if(slider.carousel && slider.active.last && direction == 'prev'){
					// get the last child position
					var eq = slider.settings.moveSlides == 1 ? slider.settings.maxSlides - getMoveBy() : ((getPagerQty() - 1) * getMoveBy()) - (slider.children.length - slider.settings.maxSlides);
					var lastChild = el.children('.bx-clone').eq(eq);
					position = lastChild.position();
				// if infinite loop and "Next" is clicked on the last slide
				}else if(direction == 'next' && slider.active.index == 0){
					// get the last clone position
					position = el.find('> .bx-clone').eq(slider.settings.maxSlides).position();
					slider.active.last = false;
				// normal non-zero requests
				}else if(slideIndex >= 0){
					var requestEl = slideIndex * getMoveBy();
					position = slider.children.eq(requestEl).position();
				}

				/* If the position doesn't exist
				 * (e.g. if you destroy the slider on a next click),
				 * it doesn't throw an error.
				 */
				if ("undefined" !== typeof(position)) {
					var value = slider.settings.mode == 'horizontal' ? -(position.left - moveBy) : -position.top;
					// plugin values to be animated
					setPositionProperty(value, 'slide', slider.settings.speed);
				}
			}
		}

		/**
		 * Transitions to the next slide in the show
		 */
		el.goToNextSlide = function(){
			// if infiniteLoop is false and last page is showing, disregard call
			if (!slider.settings.infiniteLoop && slider.active.last) return;
			var pagerIndex = parseInt(slider.active.index) + 1;
			el.goToSlide(pagerIndex, 'next');
		}

		/**
		 * Transitions to the prev slide in the show
		 */
		el.goToPrevSlide = function(){
			// if infiniteLoop is false and last page is showing, disregard call
			if (!slider.settings.infiniteLoop && slider.active.index == 0) return;
			var pagerIndex = parseInt(slider.active.index) - 1;
			el.goToSlide(pagerIndex, 'prev');
		}

		/**
		 * Starts the auto show
		 *
		 * @param preventControlUpdate (boolean)
		 *  - if true, auto controls state will not be updated
		 */
		el.startAuto = function(preventControlUpdate){
			// if an interval already exists, disregard call
			if(slider.interval) return;
			// create an interval
			slider.interval = setInterval(function(){
				slider.settings.autoDirection == 'next' ? el.goToNextSlide() : el.goToPrevSlide();
			}, slider.settings.pause);
			// if auto controls are displayed and preventControlUpdate is not true
			if (slider.settings.autoControls && preventControlUpdate != true) updateAutoControls('stop');
		}

		/**
		 * Stops the auto show
		 *
		 * @param preventControlUpdate (boolean)
		 *  - if true, auto controls state will not be updated
		 */
		el.stopAuto = function(preventControlUpdate){
			// if no interval exists, disregard call
			if(!slider.interval) return;
			// clear the interval
			clearInterval(slider.interval);
			slider.interval = null;
			// if auto controls are displayed and preventControlUpdate is not true
			if (slider.settings.autoControls && preventControlUpdate != true) updateAutoControls('start');
		}

		/**
		 * Returns current slide index (zero-based)
		 */
		el.getCurrentSlide = function(){
			return slider.active.index;
		}

		/**
		 * Returns current slide element
		 */
		el.getCurrentSlideElement = function(){
			return slider.children.eq(slider.active.index);
		}

		/**
		 * Returns number of slides in show
		 */
		el.getSlideCount = function(){
			return slider.children.length;
		}

		/**
		 * Update all dynamic slider elements
		 */
		el.redrawSlider = function(){
			// resize all children in ratio to new screen size
			slider.children.add(el.find('.bx-clone')).width(getSlideWidth());
			// adjust the height
			slider.viewport.css('height', getViewportHeight());
			// update the slide position
			if(!slider.settings.ticker) setSlidePosition();
			// if active.last was true before the screen resize, we want
			// to keep it last no matter what screen size we end on
			if (slider.active.last) slider.active.index = getPagerQty() - 1;
			// if the active index (page) no longer exists due to the resize, simply set the index as last
			if (slider.active.index >= getPagerQty()) slider.active.last = true;
			// if a pager is being displayed and a custom pager is not being used, update it
			if(slider.settings.pager && !slider.settings.pagerCustom){
				populatePager();
				updatePagerActive(slider.active.index);
			}
		}

		/**
		 * Destroy the current instance of the slider (revert everything back to original state)
		 */
		el.destroySlider = function(){
			// don't do anything if slider has already been destroyed
			if(!slider.initialized) return;
			slider.initialized = false;
			$('.bx-clone', this).remove();
			slider.children.each(function() {
				$(this).data("origStyle") != undefined ? $(this).attr("style", $(this).data("origStyle")) : $(this).removeAttr('style');
			});
			$(this).data("origStyle") != undefined ? this.attr("style", $(this).data("origStyle")) : $(this).removeAttr('style');
			$(this).unwrap().unwrap();
			if(slider.controls.el) slider.controls.el.remove();
			if(slider.controls.next) slider.controls.next.remove();
			if(slider.controls.prev) slider.controls.prev.remove();
			if(slider.pagerEl && slider.settings.controls) slider.pagerEl.remove();
			$('.bx-caption', this).remove();
			if(slider.controls.autoEl) slider.controls.autoEl.remove();
			clearInterval(slider.interval);
			if(slider.settings.responsive) $(window).unbind('resize', resizeWindow);
		}

		/**
		 * Reload the slider (revert all DOM changes, and re-initialize)
		 */
		el.reloadSlider = function(settings){
			if (settings != undefined) options = settings;
			el.destroySlider();
			init();
		}

		init();

		// returns the current jQuery object
		return this;
	}

})(jQuery);

/*
 * File:        jquery.dataTables.min.js
 * Version:     1.9.0
 * Author:      Allan Jardine (www.sprymedia.co.uk)
 * Info:        www.datatables.net
 *
 * Copyright 2008-2012 Allan Jardine, all rights reserved.
 *
 * This source file is free software, under either the GPL v2 license or a
 * BSD style license, available at:
 *   http://datatables.net/license_gpl2
 *   http://datatables.net/license_bsd
 *
 * This source file is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.
 */
(function(i,aa,k,l){var j=function(e){function o(a,b){var c=j.defaults.columns,d=a.aoColumns.length,c=i.extend({},j.models.oColumn,c,{sSortingClass:a.oClasses.sSortable,sSortingClassJUI:a.oClasses.sSortJUI,nTh:b?b:k.createElement("th"),sTitle:c.sTitle?c.sTitle:b?b.innerHTML:"",aDataSort:c.aDataSort?c.aDataSort:[d],mDataProp:c.mDataProp?c.oDefaults:d});a.aoColumns.push(c);if(a.aoPreSearchCols[d]===l||null===a.aoPreSearchCols[d])a.aoPreSearchCols[d]=i.extend({},j.models.oSearch);else{c=a.aoPreSearchCols[d];
    if(c.bRegex===l)c.bRegex=!0;if(c.bSmart===l)c.bSmart=!0;if(c.bCaseInsensitive===l)c.bCaseInsensitive=!0}E(a,d,null)}function E(a,b,c){b=a.aoColumns[b];if(c!==l&&null!==c){if(c.sType!==l)b.sType=c.sType,b._bAutoType=!1;i.extend(b,c);n(b,c,"sWidth","sWidthOrig");if(c.iDataSort!==l)b.aDataSort=[c.iDataSort];n(b,c,"aDataSort")}b.fnGetData=V(b.mDataProp);b.fnSetData=sa(b.mDataProp);if(!a.oFeatures.bSort)b.bSortable=!1;if(!b.bSortable||-1==i.inArray("asc",b.asSorting)&&-1==i.inArray("desc",b.asSorting))b.sSortingClass=
    a.oClasses.sSortableNone,b.sSortingClassJUI="";else if(b.bSortable||-1==i.inArray("asc",b.asSorting)&&-1==i.inArray("desc",b.asSorting))b.sSortingClass=a.oClasses.sSortable,b.sSortingClassJUI=a.oClasses.sSortJUI;else if(-1!=i.inArray("asc",b.asSorting)&&-1==i.inArray("desc",b.asSorting))b.sSortingClass=a.oClasses.sSortableAsc,b.sSortingClassJUI=a.oClasses.sSortJUIAscAllowed;else if(-1==i.inArray("asc",b.asSorting)&&-1!=i.inArray("desc",b.asSorting))b.sSortingClass=a.oClasses.sSortableDesc,b.sSortingClassJUI=
    a.oClasses.sSortJUIDescAllowed}function r(a){if(!1===a.oFeatures.bAutoWidth)return!1;ba(a);for(var b=0,c=a.aoColumns.length;b<c;b++)a.aoColumns[b].nTh.style.width=a.aoColumns[b].sWidth}function s(a,b){for(var c=-1,d=0;d<a.aoColumns.length;d++)if(!0===a.aoColumns[d].bVisible&&c++,c==b)return d;return null}function t(a,b){for(var c=-1,d=0;d<a.aoColumns.length;d++)if(!0===a.aoColumns[d].bVisible&&c++,d==b)return!0===a.aoColumns[d].bVisible?c:null;return null}function v(a){for(var b=0,c=0;c<a.aoColumns.length;c++)!0===
a.aoColumns[c].bVisible&&b++;return b}function B(a){for(var b=j.ext.aTypes,c=b.length,d=0;d<c;d++){var f=b[d](a);if(null!==f)return f}return"string"}function D(a,b){for(var c=b.split(","),d=[],f=0,h=a.aoColumns.length;f<h;f++)for(var g=0;g<h;g++)if(a.aoColumns[f].sName==c[g]){d.push(g);break}return d}function x(a){for(var b="",c=0,d=a.aoColumns.length;c<d;c++)b+=a.aoColumns[c].sName+",";return b.length==d?"":b.slice(0,-1)}function I(a,b,c,d){var f,h,g,e,q;if(b)for(f=b.length-1;0<=f;f--){var m=b[f].aTargets;
    i.isArray(m)||F(a,1,"aTargets must be an array of targets, not a "+typeof m);for(h=0,g=m.length;h<g;h++)if("number"===typeof m[h]&&0<=m[h]){for(;a.aoColumns.length<=m[h];)o(a);d(m[h],b[f])}else if("number"===typeof m[h]&&0>m[h])d(a.aoColumns.length+m[h],b[f]);else if("string"===typeof m[h])for(e=0,q=a.aoColumns.length;e<q;e++)("_all"==m[h]||i(a.aoColumns[e].nTh).hasClass(m[h]))&&d(e,b[f])}if(c)for(f=0,a=c.length;f<a;f++)d(f,c[f])}function G(a,b){var c;c=i.isArray(b)?b.slice():i.extend(!0,{},b);var d=
    a.aoData.length;c=i.extend(!0,{},j.models.oRow,{_aData:c});a.aoData.push(c);for(var f,h=0,g=a.aoColumns.length;h<g;h++)if(c=a.aoColumns[h],"function"===typeof c.fnRender&&c.bUseRendered&&null!==c.mDataProp&&J(a,d,h,R(a,d,h)),c._bAutoType&&"string"!=c.sType&&(f=w(a,d,h,"type"),null!==f&&""!==f))if(f=B(f),null===c.sType)c.sType=f;else if(c.sType!=f&&"html"!=c.sType)c.sType="string";a.aiDisplayMaster.push(d);a.oFeatures.bDeferRender||ca(a,d);return d}function ta(a){var b,c,d,f,h,g,e,q,m;if(a.bDeferLoading||
    null===a.sAjaxSource){e=a.nTBody.childNodes;for(b=0,c=e.length;b<c;b++)if("TR"==e[b].nodeName.toUpperCase()){q=a.aoData.length;e[b]._DT_RowIndex=q;a.aoData.push(i.extend(!0,{},j.models.oRow,{nTr:e[b]}));a.aiDisplayMaster.push(q);g=e[b].childNodes;h=0;for(d=0,f=g.length;d<f;d++)if(m=g[d].nodeName.toUpperCase(),"TD"==m||"TH"==m)J(a,q,h,i.trim(g[d].innerHTML)),h++}}e=S(a);g=[];for(b=0,c=e.length;b<c;b++)for(d=0,f=e[b].childNodes.length;d<f;d++)h=e[b].childNodes[d],m=h.nodeName.toUpperCase(),("TD"==m||
"TH"==m)&&g.push(h);for(f=0,e=a.aoColumns.length;f<e;f++){m=a.aoColumns[f];if(null===m.sTitle)m.sTitle=m.nTh.innerHTML;h=m._bAutoType;q="function"===typeof m.fnRender;var o=null!==m.sClass,r=m.bVisible,l,n;if(h||q||o||!r)for(b=0,c=a.aoData.length;b<c;b++){d=a.aoData[b];l=g[b*e+f];if(h&&"string"!=m.sType&&(n=w(a,b,f,"type"),""!==n))if(n=B(n),null===m.sType)m.sType=n;else if(m.sType!=n&&"html"!=m.sType)m.sType="string";if("function"===typeof m.mDataProp)l.innerHTML=w(a,b,f,"display");if(q)n=R(a,b,f),
    l.innerHTML=n,m.bUseRendered&&J(a,b,f,n);o&&(l.className+=" "+m.sClass);r?d._anHidden[f]=null:(d._anHidden[f]=l,l.parentNode.removeChild(l));m.fnCreatedCell&&m.fnCreatedCell.call(a.oInstance,l,w(a,b,f,"display"),d._aData,b,f)}}if(0!==a.aoRowCreatedCallback.length)for(b=0,c=a.aoData.length;b<c;b++)d=a.aoData[b],C(a,"aoRowCreatedCallback",null,[d.nTr,d._aData,b])}function K(a,b){return b._DT_RowIndex!==l?b._DT_RowIndex:null}function da(a,b,c){for(var b=L(a,b),d=0,a=a.aoColumns.length;d<a;d++)if(b[d]===
    c)return d;return-1}function W(a,b,c){for(var d=[],f=0,h=a.aoColumns.length;f<h;f++)d.push(w(a,b,f,c));return d}function w(a,b,c,d){var f=a.aoColumns[c];if((c=f.fnGetData(a.aoData[b]._aData,d))===l){if(a.iDrawError!=a.iDraw&&null===f.sDefaultContent)F(a,0,"Requested unknown parameter '"+f.mDataProp+"' from the data source for row "+b),a.iDrawError=a.iDraw;return f.sDefaultContent}if(null===c&&null!==f.sDefaultContent)c=f.sDefaultContent;else if("function"===typeof c)return c();return"display"==d&&
null===c?"":c}function J(a,b,c,d){a.aoColumns[c].fnSetData(a.aoData[b]._aData,d)}function V(a){if(null===a)return function(){return null};if("function"===typeof a)return function(b,d){return a(b,d)};if("string"===typeof a&&-1!=a.indexOf(".")){var b=a.split(".");return function(a){for(var d=0,f=b.length;d<f;d++)if(a=a[b[d]],a===l)return l;return a}}return function(b){return b[a]}}function sa(a){if(null===a)return function(){};if("function"===typeof a)return function(b,d){a(b,"set",d)};if("string"===
    typeof a&&-1!=a.indexOf(".")){var b=a.split(".");return function(a,d){for(var f=0,h=b.length-1;f<h;f++)a=a[b[f]];a[b[b.length-1]]=d}}return function(b,d){b[a]=d}}function X(a){for(var b=[],c=a.aoData.length,d=0;d<c;d++)b.push(a.aoData[d]._aData);return b}function ea(a){a.aoData.splice(0,a.aoData.length);a.aiDisplayMaster.splice(0,a.aiDisplayMaster.length);a.aiDisplay.splice(0,a.aiDisplay.length);z(a)}function fa(a,b){for(var c=-1,d=0,f=a.length;d<f;d++)a[d]==b?c=d:a[d]>b&&a[d]--; -1!=c&&a.splice(c,
    1)}function R(a,b,c){var d=a.aoColumns[c];return d.fnRender({iDataRow:b,iDataColumn:c,oSettings:a,aData:a.aoData[b]._aData,mDataProp:d.mDataProp},w(a,b,c,"display"))}function ca(a,b){var c=a.aoData[b],d;if(null===c.nTr){c.nTr=k.createElement("tr");c.nTr._DT_RowIndex=b;if(c._aData.DT_RowId)c.nTr.id=c._aData.DT_RowId;c._aData.DT_RowClass&&i(c.nTr).addClass(c._aData.DT_RowClass);for(var f=0,h=a.aoColumns.length;f<h;f++){var g=a.aoColumns[f];d=k.createElement("td");d.innerHTML="function"===typeof g.fnRender&&
(!g.bUseRendered||null===g.mDataProp)?R(a,b,f):w(a,b,f,"display");if(null!==g.sClass)d.className=g.sClass;g.bVisible?(c.nTr.appendChild(d),c._anHidden[f]=null):c._anHidden[f]=d;g.fnCreatedCell&&g.fnCreatedCell.call(a.oInstance,d,w(a,b,f,"display"),c._aData,b,f)}C(a,"aoRowCreatedCallback",null,[c.nTr,c._aData,b])}}function ua(a){var b,c,d;if(0!==a.nTHead.getElementsByTagName("th").length)for(b=0,d=a.aoColumns.length;b<d;b++){if(c=a.aoColumns[b].nTh,c.setAttribute("role","columnheader"),a.aoColumns[b].bSortable&&
    (c.setAttribute("tabindex",a.iTabIndex),c.setAttribute("aria-controls",a.sTableId)),null!==a.aoColumns[b].sClass&&i(c).addClass(a.aoColumns[b].sClass),a.aoColumns[b].sTitle!=c.innerHTML)c.innerHTML=a.aoColumns[b].sTitle}else{var f=k.createElement("tr");for(b=0,d=a.aoColumns.length;b<d;b++)c=a.aoColumns[b].nTh,c.innerHTML=a.aoColumns[b].sTitle,c.setAttribute("tabindex","0"),null!==a.aoColumns[b].sClass&&i(c).addClass(a.aoColumns[b].sClass),f.appendChild(c);i(a.nTHead).html("")[0].appendChild(f);T(a.aoHeader,
    a.nTHead)}i(a.nTHead).children("tr").attr("role","row");if(a.bJUI)for(b=0,d=a.aoColumns.length;b<d;b++){c=a.aoColumns[b].nTh;f=k.createElement("div");f.className=a.oClasses.sSortJUIWrapper;i(c).contents().appendTo(f);var h=k.createElement("span");h.className=a.oClasses.sSortIcon;f.appendChild(h);c.appendChild(f)}if(a.oFeatures.bSort)for(b=0;b<a.aoColumns.length;b++)!1!==a.aoColumns[b].bSortable?ga(a,a.aoColumns[b].nTh,b):i(a.aoColumns[b].nTh).addClass(a.oClasses.sSortableNone);""!==a.oClasses.sFooterTH&&
i(a.nTFoot).children("tr").children("th").addClass(a.oClasses.sFooterTH);if(null!==a.nTFoot){c=O(a,null,a.aoFooter);for(b=0,d=a.aoColumns.length;b<d;b++)if(c[b])a.aoColumns[b].nTf=c[b],a.aoColumns[b].sClass&&i(c[b]).addClass(a.aoColumns[b].sClass)}}function U(a,b,c){var d,f,h,g=[],e=[],i=a.aoColumns.length,m;c===l&&(c=!1);for(d=0,f=b.length;d<f;d++){g[d]=b[d].slice();g[d].nTr=b[d].nTr;for(h=i-1;0<=h;h--)!a.aoColumns[h].bVisible&&!c&&g[d].splice(h,1);e.push([])}for(d=0,f=g.length;d<f;d++){if(a=g[d].nTr)for(;h=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    a.firstChild;)a.removeChild(h);for(h=0,b=g[d].length;h<b;h++)if(m=i=1,e[d][h]===l){a.appendChild(g[d][h].cell);for(e[d][h]=1;g[d+i]!==l&&g[d][h].cell==g[d+i][h].cell;)e[d+i][h]=1,i++;for(;g[d][h+m]!==l&&g[d][h].cell==g[d][h+m].cell;){for(c=0;c<i;c++)e[d+c][h+m]=1;m++}g[d][h].cell.rowSpan=i;g[d][h].cell.colSpan=m}}}function y(a){var b,c,d=[],f=0,h=a.asStripeClasses.length;b=a.aoOpenRows.length;c=C(a,"aoPreDrawCallback","preDraw",[a]);if(-1===i.inArray(!1,c)){a.bDrawing=!0;if(a.iInitDisplayStart!==
    l&&-1!=a.iInitDisplayStart)a._iDisplayStart=a.oFeatures.bServerSide?a.iInitDisplayStart:a.iInitDisplayStart>=a.fnRecordsDisplay()?0:a.iInitDisplayStart,a.iInitDisplayStart=-1,z(a);if(a.bDeferLoading)a.bDeferLoading=!1,a.iDraw++;else if(a.oFeatures.bServerSide){if(!a.bDestroying&&!va(a))return}else a.iDraw++;if(0!==a.aiDisplay.length){var g=a._iDisplayStart;c=a._iDisplayEnd;if(a.oFeatures.bServerSide)g=0,c=a.aoData.length;for(;g<c;g++){var e=a.aoData[a.aiDisplay[g]];null===e.nTr&&ca(a,a.aiDisplay[g]);
    var q=e.nTr;if(0!==h){var m=a.asStripeClasses[f%h];if(e._sRowStripe!=m)i(q).removeClass(e._sRowStripe).addClass(m),e._sRowStripe=m}C(a,"aoRowCallback",null,[q,a.aoData[a.aiDisplay[g]]._aData,f,g]);d.push(q);f++;if(0!==b)for(e=0;e<b;e++)if(q==a.aoOpenRows[e].nParent){d.push(a.aoOpenRows[e].nTr);break}}}else{d[0]=k.createElement("tr");if(a.asStripeClasses[0])d[0].className=a.asStripeClasses[0];h=a.oLanguage.sZeroRecords.replace("_MAX_",a.fnFormatNumber(a.fnRecordsTotal()));if(1==a.iDraw&&null!==a.sAjaxSource&&
    !a.oFeatures.bServerSide)h=a.oLanguage.sLoadingRecords;else if(a.oLanguage.sEmptyTable&&0===a.fnRecordsTotal())h=a.oLanguage.sEmptyTable;b=k.createElement("td");b.setAttribute("valign","top");b.colSpan=v(a);b.className=a.oClasses.sRowEmpty;b.innerHTML=h;d[f].appendChild(b)}C(a,"aoHeaderCallback","header",[i(a.nTHead).children("tr")[0],X(a),a._iDisplayStart,a.fnDisplayEnd(),a.aiDisplay]);C(a,"aoFooterCallback","footer",[i(a.nTFoot).children("tr")[0],X(a),a._iDisplayStart,a.fnDisplayEnd(),a.aiDisplay]);
    f=k.createDocumentFragment();b=k.createDocumentFragment();if(a.nTBody){h=a.nTBody.parentNode;b.appendChild(a.nTBody);if(!a.oScroll.bInfinite||!a._bInitComplete||a.bSorted||a.bFiltered)for(;b=a.nTBody.firstChild;)a.nTBody.removeChild(b);for(b=0,c=d.length;b<c;b++)f.appendChild(d[b]);a.nTBody.appendChild(f);null!==h&&h.appendChild(a.nTBody)}C(a,"aoDrawCallback","draw",[a]);a.bSorted=!1;a.bFiltered=!1;a.bDrawing=!1;a.oFeatures.bServerSide&&(H(a,!1),a._bInitComplete||Y(a))}}function Z(a){a.oFeatures.bSort?
    P(a,a.oPreviousSearch):a.oFeatures.bFilter?M(a,a.oPreviousSearch):(z(a),y(a))}function wa(a){var b=i("<div></div>")[0];a.nTable.parentNode.insertBefore(b,a.nTable);a.nTableWrapper=i('<div id="'+a.sTableId+'_wrapper" class="'+a.oClasses.sWrapper+'" role="grid"></div>')[0];a.nTableReinsertBefore=a.nTable.nextSibling;for(var c=a.nTableWrapper,d=a.sDom.split(""),f,h,g,e,q,m,o,l=0;l<d.length;l++){h=0;g=d[l];if("<"==g){e=i("<div></div>")[0];q=d[l+1];if("'"==q||'"'==q){m="";for(o=2;d[l+o]!=q;)m+=d[l+o],
    o++;"H"==m?m="fg-toolbar ui-toolbar ui-widget-header ui-corner-tl ui-corner-tr ui-helper-clearfix":"F"==m&&(m="fg-toolbar ui-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix");-1!=m.indexOf(".")?(q=m.split("."),e.id=q[0].substr(1,q[0].length-1),e.className=q[1]):"#"==m.charAt(0)?e.id=m.substr(1,m.length-1):e.className=m;l+=o}c.appendChild(e);c=e}else if(">"==g)c=c.parentNode;else if("l"==g&&a.oFeatures.bPaginate&&a.oFeatures.bLengthChange)f=xa(a),h=1;else if("f"==g&&a.oFeatures.bFilter)f=
    ya(a),h=1;else if("r"==g&&a.oFeatures.bProcessing)f=za(a),h=1;else if("t"==g)f=Aa(a),h=1;else if("i"==g&&a.oFeatures.bInfo)f=Ba(a),h=1;else if("p"==g&&a.oFeatures.bPaginate)f=Ca(a),h=1;else if(0!==j.ext.aoFeatures.length){e=j.ext.aoFeatures;o=0;for(q=e.length;o<q;o++)if(g==e[o].cFeature){(f=e[o].fnInit(a))&&(h=1);break}}1==h&&null!==f&&("object"!==typeof a.aanFeatures[g]&&(a.aanFeatures[g]=[]),a.aanFeatures[g].push(f),c.appendChild(f))}b.parentNode.replaceChild(a.nTableWrapper,b)}function T(a,b){var c=
    i(b).children("tr"),d,f,h,g,e,q,m,j;a.splice(0,a.length);for(f=0,q=c.length;f<q;f++)a.push([]);for(f=0,q=c.length;f<q;f++)for(h=0,m=c[f].childNodes.length;h<m;h++)if(d=c[f].childNodes[h],"TD"==d.nodeName.toUpperCase()||"TH"==d.nodeName.toUpperCase()){var o=1*d.getAttribute("colspan"),l=1*d.getAttribute("rowspan"),o=!o||0===o||1===o?1:o,l=!l||0===l||1===l?1:l;for(g=0;a[f][g];)g++;j=g;for(e=0;e<o;e++)for(g=0;g<l;g++)a[f+g][j+e]={cell:d,unique:1==o?!0:!1},a[f+g].nTr=c[f]}}function O(a,b,c){var d=[];
    if(!c)c=a.aoHeader,b&&(c=[],T(c,b));for(var b=0,f=c.length;b<f;b++)for(var h=0,g=c[b].length;h<g;h++)if(c[b][h].unique&&(!d[h]||!a.bSortCellsTop))d[h]=c[b][h].cell;return d}function va(a){if(a.bAjaxDataGet){a.iDraw++;H(a,!0);var b=Da(a);ha(a,b);a.fnServerData.call(a.oInstance,a.sAjaxSource,b,function(b){Ea(a,b)},a);return!1}return!0}function Da(a){var b=a.aoColumns.length,c=[],d,f;c.push({name:"sEcho",value:a.iDraw});c.push({name:"iColumns",value:b});c.push({name:"sColumns",value:x(a)});c.push({name:"iDisplayStart",
    value:a._iDisplayStart});c.push({name:"iDisplayLength",value:!1!==a.oFeatures.bPaginate?a._iDisplayLength:-1});for(f=0;f<b;f++)d=a.aoColumns[f].mDataProp,c.push({name:"mDataProp_"+f,value:"function"===typeof d?"function":d});if(!1!==a.oFeatures.bFilter){c.push({name:"sSearch",value:a.oPreviousSearch.sSearch});c.push({name:"bRegex",value:a.oPreviousSearch.bRegex});for(f=0;f<b;f++)c.push({name:"sSearch_"+f,value:a.aoPreSearchCols[f].sSearch}),c.push({name:"bRegex_"+f,value:a.aoPreSearchCols[f].bRegex}),
    c.push({name:"bSearchable_"+f,value:a.aoColumns[f].bSearchable})}if(!1!==a.oFeatures.bSort){d=null!==a.aaSortingFixed?a.aaSortingFixed.length:0;var h=a.aaSorting.length;c.push({name:"iSortingCols",value:d+h});for(f=0;f<d;f++)c.push({name:"iSortCol_"+f,value:a.aaSortingFixed[f][0]}),c.push({name:"sSortDir_"+f,value:a.aaSortingFixed[f][1]});for(f=0;f<h;f++)c.push({name:"iSortCol_"+(f+d),value:a.aaSorting[f][0]}),c.push({name:"sSortDir_"+(f+d),value:a.aaSorting[f][1]});for(f=0;f<b;f++)c.push({name:"bSortable_"+
f,value:a.aoColumns[f].bSortable})}return c}function ha(a,b){C(a,"aoServerParams","serverParams",[b])}function Ea(a,b){if(b.sEcho!==l){if(1*b.sEcho<a.iDraw)return;a.iDraw=1*b.sEcho}(!a.oScroll.bInfinite||a.oScroll.bInfinite&&(a.bSorted||a.bFiltered))&&ea(a);a._iRecordsTotal=parseInt(b.iTotalRecords,10);a._iRecordsDisplay=parseInt(b.iTotalDisplayRecords,10);var c=x(a),c=b.sColumns!==l&&""!==c&&b.sColumns!=c,d;c&&(d=D(a,b.sColumns));for(var f=V(a.sAjaxDataProp)(b),h=0,g=f.length;h<g;h++)if(c){for(var e=
    [],i=0,m=a.aoColumns.length;i<m;i++)e.push(f[h][d[i]]);G(a,e)}else G(a,f[h]);a.aiDisplay=a.aiDisplayMaster.slice();a.bAjaxDataGet=!1;y(a);a.bAjaxDataGet=!0;H(a,!1)}function ya(a){var b=a.oPreviousSearch,c=a.oLanguage.sSearch,c=-1!==c.indexOf("_INPUT_")?c.replace("_INPUT_",'<input type="text" />'):""===c?'<input type="text" />':c+' <input type="text" />',d=k.createElement("div");d.className=a.oClasses.sFilter;d.innerHTML="<label>"+c+"</label>";if(!a.aanFeatures.f)d.id=a.sTableId+"_filter";c=i("input",
    d);c.val(b.sSearch.replace('"',"&quot;"));c.bind("keyup.DT",function(){for(var c=a.aanFeatures.f,d=0,g=c.length;d<g;d++)c[d]!=i(this).parents("div.dataTables_filter")[0]&&i("input",c[d]).val(this.value);this.value!=b.sSearch&&M(a,{sSearch:this.value,bRegex:b.bRegex,bSmart:b.bSmart,bCaseInsensitive:b.bCaseInsensitive})});c.attr("aria-controls",a.sTableId).bind("keypress.DT",function(a){if(13==a.keyCode)return!1});return d}function M(a,b,c){var d=a.oPreviousSearch,f=a.aoPreSearchCols,h=function(a){d.sSearch=
    a.sSearch;d.bRegex=a.bRegex;d.bSmart=a.bSmart;d.bCaseInsensitive=a.bCaseInsensitive};if(a.oFeatures.bServerSide)h(b);else{Fa(a,b.sSearch,c,b.bRegex,b.bSmart,b.bCaseInsensitive);h(b);for(b=0;b<a.aoPreSearchCols.length;b++)Ga(a,f[b].sSearch,b,f[b].bRegex,f[b].bSmart,f[b].bCaseInsensitive);Ha(a)}a.bFiltered=!0;i(a.oInstance).trigger("filter",a);a._iDisplayStart=0;z(a);y(a);ia(a,0)}function Ha(a){for(var b=j.ext.afnFiltering,c=0,d=b.length;c<d;c++)for(var f=0,h=0,g=a.aiDisplay.length;h<g;h++){var e=a.aiDisplay[h-
f];b[c](a,W(a,e,"filter"),e)||(a.aiDisplay.splice(h-f,1),f++)}}function Ga(a,b,c,d,f,h){if(""!==b)for(var g=0,b=ja(b,d,f,h),d=a.aiDisplay.length-1;0<=d;d--)f=ka(w(a,a.aiDisplay[d],c,"filter"),a.aoColumns[c].sType),b.test(f)||(a.aiDisplay.splice(d,1),g++)}function Fa(a,b,c,d,f,h){d=ja(b,d,f,h);f=a.oPreviousSearch;c||(c=0);0!==j.ext.afnFiltering.length&&(c=1);if(0>=b.length)a.aiDisplay.splice(0,a.aiDisplay.length),a.aiDisplay=a.aiDisplayMaster.slice();else if(a.aiDisplay.length==a.aiDisplayMaster.length||
    f.sSearch.length>b.length||1==c||0!==b.indexOf(f.sSearch)){a.aiDisplay.splice(0,a.aiDisplay.length);ia(a,1);for(b=0;b<a.aiDisplayMaster.length;b++)d.test(a.asDataSearch[b])&&a.aiDisplay.push(a.aiDisplayMaster[b])}else for(b=c=0;b<a.asDataSearch.length;b++)d.test(a.asDataSearch[b])||(a.aiDisplay.splice(b-c,1),c++)}function ia(a,b){if(!a.oFeatures.bServerSide){a.asDataSearch.splice(0,a.asDataSearch.length);for(var c=b&&1===b?a.aiDisplayMaster:a.aiDisplay,d=0,f=c.length;d<f;d++)a.asDataSearch[d]=la(a,
    W(a,c[d],"filter"))}}function la(a,b){var c="";if(a.__nTmpFilter===l)a.__nTmpFilter=k.createElement("div");for(var d=a.__nTmpFilter,f=0,h=a.aoColumns.length;f<h;f++)a.aoColumns[f].bSearchable&&(c+=ka(b[f],a.aoColumns[f].sType)+"  ");if(-1!==c.indexOf("&"))d.innerHTML=c,c=d.textContent?d.textContent:d.innerText,c=c.replace(/\n/g," ").replace(/\r/g,"");return c}function ja(a,b,c,d){if(c)return a=b?a.split(" "):ma(a).split(" "),a="^(?=.*?"+a.join(")(?=.*?")+").*$",RegExp(a,d?"i":"");a=b?a:ma(a);return RegExp(a,
    d?"i":"")}function ka(a,b){return"function"===typeof j.ext.ofnSearch[b]?j.ext.ofnSearch[b](a):"html"==b?a.replace(/[\r\n]/g," ").replace(/<.*?>/g,""):"string"===typeof a?a.replace(/[\r\n]/g," "):null===a?"":a}function ma(a){return a.replace(RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^)","g"),"\\$1")}function Ba(a){var b=k.createElement("div");b.className=a.oClasses.sInfo;if(!a.aanFeatures.i)a.aoDrawCallback.push({fn:Ia,sName:"information"}),b.id=a.sTableId+"_info";a.nTable.setAttribute("aria-describedby",
    a.sTableId+"_info");return b}function Ia(a){if(a.oFeatures.bInfo&&0!==a.aanFeatures.i.length){var b=a._iDisplayStart+1,c=a.fnDisplayEnd(),d=a.fnRecordsTotal(),f=a.fnRecordsDisplay(),h=a.fnFormatNumber(b),g=a.fnFormatNumber(c),e=a.fnFormatNumber(d),q=a.fnFormatNumber(f);a.oScroll.bInfinite&&(h=a.fnFormatNumber(1));h=0===a.fnRecordsDisplay()&&a.fnRecordsDisplay()==a.fnRecordsTotal()?a.oLanguage.sInfoEmpty+a.oLanguage.sInfoPostFix:0===a.fnRecordsDisplay()?a.oLanguage.sInfoEmpty+" "+a.oLanguage.sInfoFiltered.replace("_MAX_",
    e)+a.oLanguage.sInfoPostFix:a.fnRecordsDisplay()==a.fnRecordsTotal()?a.oLanguage.sInfo.replace("_START_",h).replace("_END_",g).replace("_TOTAL_",q)+a.oLanguage.sInfoPostFix:a.oLanguage.sInfo.replace("_START_",h).replace("_END_",g).replace("_TOTAL_",q)+" "+a.oLanguage.sInfoFiltered.replace("_MAX_",a.fnFormatNumber(a.fnRecordsTotal()))+a.oLanguage.sInfoPostFix;null!==a.oLanguage.fnInfoCallback&&(h=a.oLanguage.fnInfoCallback.call(a.oInstance,a,b,c,d,f,h));a=a.aanFeatures.i;b=0;for(c=a.length;b<c;b++)i(a[b]).html(h)}}
    function $(a){var b,c,d=a.iInitDisplayStart;if(!1===a.bInitialised)setTimeout(function(){$(a)},200);else{wa(a);ua(a);U(a,a.aoHeader);a.nTFoot&&U(a,a.aoFooter);H(a,!0);a.oFeatures.bAutoWidth&&ba(a);for(b=0,c=a.aoColumns.length;b<c;b++)if(null!==a.aoColumns[b].sWidth)a.aoColumns[b].nTh.style.width=p(a.aoColumns[b].sWidth);a.oFeatures.bSort?P(a):a.oFeatures.bFilter?M(a,a.oPreviousSearch):(a.aiDisplay=a.aiDisplayMaster.slice(),z(a),y(a));null!==a.sAjaxSource&&!a.oFeatures.bServerSide?(c=[],ha(a,c),a.fnServerData.call(a.oInstance,
        a.sAjaxSource,c,function(c){var h=""!==a.sAjaxDataProp?V(a.sAjaxDataProp)(c):c;for(b=0;b<h.length;b++)G(a,h[b]);a.iInitDisplayStart=d;a.oFeatures.bSort?P(a):(a.aiDisplay=a.aiDisplayMaster.slice(),z(a),y(a));H(a,!1);Y(a,c)},a)):a.oFeatures.bServerSide||(H(a,!1),Y(a))}}function Y(a,b){a._bInitComplete=!0;C(a,"aoInitComplete","init",[a,b])}function na(a){!a.sEmptyTable&&a.sZeroRecords&&n(a,a,"sZeroRecords","sEmptyTable");!a.sLoadingRecords&&a.sZeroRecords&&n(a,a,"sZeroRecords","sLoadingRecords")}function xa(a){if(a.oScroll.bInfinite)return null;
        var b='<select size="1" '+('name="'+a.sTableId+'_length"')+">",c,d,f=a.aLengthMenu;if(2==f.length&&"object"===typeof f[0]&&"object"===typeof f[1])for(c=0,d=f[0].length;c<d;c++)b+='<option value="'+f[0][c]+'">'+f[1][c]+"</option>";else for(c=0,d=f.length;c<d;c++)b+='<option value="'+f[c]+'">'+f[c]+"</option>";b+="</select>";f=k.createElement("div");if(!a.aanFeatures.l)f.id=a.sTableId+"_length";f.className=a.oClasses.sLength;f.innerHTML="<label>"+a.oLanguage.sLengthMenu.replace("_MENU_",b)+"</label>";
        i('select option[value="'+a._iDisplayLength+'"]',f).attr("selected",!0);i("select",f).bind("change.DT",function(){var b=i(this).val(),f=a.aanFeatures.l;for(c=0,d=f.length;c<d;c++)f[c]!=this.parentNode&&i("select",f[c]).val(b);a._iDisplayLength=parseInt(b,10);z(a);if(a.fnDisplayEnd()==a.fnRecordsDisplay()&&(a._iDisplayStart=a.fnDisplayEnd()-a._iDisplayLength,0>a._iDisplayStart))a._iDisplayStart=0;if(-1==a._iDisplayLength)a._iDisplayStart=0;y(a)});i("select",f).attr("aria-controls",a.sTableId);return f}
    function z(a){a._iDisplayEnd=!1===a.oFeatures.bPaginate?a.aiDisplay.length:a._iDisplayStart+a._iDisplayLength>a.aiDisplay.length||-1==a._iDisplayLength?a.aiDisplay.length:a._iDisplayStart+a._iDisplayLength}function Ca(a){if(a.oScroll.bInfinite)return null;var b=k.createElement("div");b.className=a.oClasses.sPaging+a.sPaginationType;j.ext.oPagination[a.sPaginationType].fnInit(a,b,function(a){z(a);y(a)});a.aanFeatures.p||a.aoDrawCallback.push({fn:function(a){j.ext.oPagination[a.sPaginationType].fnUpdate(a,
        function(a){z(a);y(a)})},sName:"pagination"});return b}function oa(a,b){var c=a._iDisplayStart;if("number"===typeof b){if(a._iDisplayStart=b*a._iDisplayLength,a._iDisplayStart>a.fnRecordsDisplay())a._iDisplayStart=0}else if("first"==b)a._iDisplayStart=0;else if("previous"==b){if(a._iDisplayStart=0<=a._iDisplayLength?a._iDisplayStart-a._iDisplayLength:0,0>a._iDisplayStart)a._iDisplayStart=0}else if("next"==b)0<=a._iDisplayLength?a._iDisplayStart+a._iDisplayLength<a.fnRecordsDisplay()&&(a._iDisplayStart+=
        a._iDisplayLength):a._iDisplayStart=0;else if("last"==b)if(0<=a._iDisplayLength){var d=parseInt((a.fnRecordsDisplay()-1)/a._iDisplayLength,10)+1;a._iDisplayStart=(d-1)*a._iDisplayLength}else a._iDisplayStart=0;else F(a,0,"Unknown paging action: "+b);i(a.oInstance).trigger("page",a);return c!=a._iDisplayStart}function za(a){var b=k.createElement("div");if(!a.aanFeatures.r)b.id=a.sTableId+"_processing";b.innerHTML=a.oLanguage.sProcessing;b.className=a.oClasses.sProcessing;a.nTable.parentNode.insertBefore(b,
        a.nTable);return b}function H(a,b){if(a.oFeatures.bProcessing)for(var c=a.aanFeatures.r,d=0,f=c.length;d<f;d++)c[d].style.visibility=b?"visible":"hidden";i(a.oInstance).trigger("processing",[a,b])}function Aa(a){if(""===a.oScroll.sX&&""===a.oScroll.sY)return a.nTable;var b=k.createElement("div"),c=k.createElement("div"),d=k.createElement("div"),f=k.createElement("div"),h=k.createElement("div"),g=k.createElement("div"),e=a.nTable.cloneNode(!1),q=a.nTable.cloneNode(!1),m=a.nTable.getElementsByTagName("thead")[0],
        j=0===a.nTable.getElementsByTagName("tfoot").length?null:a.nTable.getElementsByTagName("tfoot")[0],o=a.oClasses;c.appendChild(d);h.appendChild(g);f.appendChild(a.nTable);b.appendChild(c);b.appendChild(f);d.appendChild(e);e.appendChild(m);null!==j&&(b.appendChild(h),g.appendChild(q),q.appendChild(j));b.className=o.sScrollWrapper;c.className=o.sScrollHead;d.className=o.sScrollHeadInner;f.className=o.sScrollBody;h.className=o.sScrollFoot;g.className=o.sScrollFootInner;if(a.oScroll.bAutoCss)c.style.overflow=
        "hidden",c.style.position="relative",h.style.overflow="hidden",f.style.overflow="auto";c.style.border="0";c.style.width="100%";h.style.border="0";d.style.width="150%";e.removeAttribute("id");e.style.marginLeft="0";a.nTable.style.marginLeft="0";if(null!==j)q.removeAttribute("id"),q.style.marginLeft="0";d=i(a.nTable).children("caption");g=0;for(q=d.length;g<q;g++)e.appendChild(d[g]);if(""!==a.oScroll.sX){c.style.width=p(a.oScroll.sX);f.style.width=p(a.oScroll.sX);if(null!==j)h.style.width=p(a.oScroll.sX);
        i(f).scroll(function(){c.scrollLeft=this.scrollLeft;if(null!==j)h.scrollLeft=this.scrollLeft})}if(""!==a.oScroll.sY)f.style.height=p(a.oScroll.sY);a.aoDrawCallback.push({fn:Ja,sName:"scrolling"});a.oScroll.bInfinite&&i(f).scroll(function(){!a.bDrawing&&0!==i(this).scrollTop()&&i(this).scrollTop()+i(this).height()>i(a.nTable).height()-a.oScroll.iLoadGap&&a.fnDisplayEnd()<a.fnRecordsDisplay()&&(oa(a,"next"),z(a),y(a))});a.nScrollHead=c;a.nScrollFoot=h;return b}function Ja(a){var b=a.nScrollHead.getElementsByTagName("div")[0],
        c=b.getElementsByTagName("table")[0],d=a.nTable.parentNode,f,h,g,e,j,m,o,l,r=[],n=null!==a.nTFoot?a.nScrollFoot.getElementsByTagName("div")[0]:null,E=null!==a.nTFoot?n.getElementsByTagName("table")[0]:null,k=i.browser.msie&&7>=i.browser.version;g=a.nTable.getElementsByTagName("thead");0<g.length&&a.nTable.removeChild(g[0]);null!==a.nTFoot&&(j=a.nTable.getElementsByTagName("tfoot"),0<j.length&&a.nTable.removeChild(j[0]));g=a.nTHead.cloneNode(!0);a.nTable.insertBefore(g,a.nTable.childNodes[0]);null!==
    a.nTFoot&&(j=a.nTFoot.cloneNode(!0),a.nTable.insertBefore(j,a.nTable.childNodes[1]));if(""===a.oScroll.sX)d.style.width="100%",b.parentNode.style.width="100%";var t=O(a,g);for(f=0,h=t.length;f<h;f++)o=s(a,f),t[f].style.width=a.aoColumns[o].sWidth;null!==a.nTFoot&&N(function(a){a.style.width=""},j.getElementsByTagName("tr"));f=i(a.nTable).outerWidth();if(""===a.oScroll.sX){if(a.nTable.style.width="100%",k&&(i("tbody",d).height()>d.offsetHeight||"scroll"==i(d).css("overflow-y")))a.nTable.style.width=
        p(i(a.nTable).outerWidth()-a.oScroll.iBarWidth)}else if(""!==a.oScroll.sXInner)a.nTable.style.width=p(a.oScroll.sXInner);else if(f==i(d).width()&&i(d).height()<i(a.nTable).height()){if(a.nTable.style.width=p(f-a.oScroll.iBarWidth),i(a.nTable).outerWidth()>f-a.oScroll.iBarWidth)a.nTable.style.width=p(f)}else a.nTable.style.width=p(f);f=i(a.nTable).outerWidth();h=a.nTHead.getElementsByTagName("tr");g=g.getElementsByTagName("tr");N(function(a,b){m=a.style;m.paddingTop="0";m.paddingBottom="0";m.borderTopWidth=
        "0";m.borderBottomWidth="0";m.height=0;l=i(a).width();b.style.width=p(l);r.push(l)},g,h);i(g).height(0);null!==a.nTFoot&&(e=j.getElementsByTagName("tr"),j=a.nTFoot.getElementsByTagName("tr"),N(function(a,b){m=a.style;m.paddingTop="0";m.paddingBottom="0";m.borderTopWidth="0";m.borderBottomWidth="0";m.height=0;l=i(a).width();b.style.width=p(l);r.push(l)},e,j),i(e).height(0));N(function(a){a.innerHTML="";a.style.width=p(r.shift())},g);null!==a.nTFoot&&N(function(a){a.innerHTML="";a.style.width=p(r.shift())},
        e);if(i(a.nTable).outerWidth()<f){e=d.scrollHeight>d.offsetHeight||"scroll"==i(d).css("overflow-y")?f+a.oScroll.iBarWidth:f;if(k&&(d.scrollHeight>d.offsetHeight||"scroll"==i(d).css("overflow-y")))a.nTable.style.width=p(e-a.oScroll.iBarWidth);d.style.width=p(e);b.parentNode.style.width=p(e);if(null!==a.nTFoot)n.parentNode.style.width=p(e);""===a.oScroll.sX?F(a,1,"The table cannot fit into the current element which will cause column misalignment. The table has been drawn at its minimum possible width."):
    ""!==a.oScroll.sXInner&&F(a,1,"The table cannot fit into the current element which will cause column misalignment. Increase the sScrollXInner value or remove it to allow automatic calculation")}else if(d.style.width=p("100%"),b.parentNode.style.width=p("100%"),null!==a.nTFoot)n.parentNode.style.width=p("100%");if(""===a.oScroll.sY&&k)d.style.height=p(a.nTable.offsetHeight+a.oScroll.iBarWidth);if(""!==a.oScroll.sY&&a.oScroll.bCollapse&&(d.style.height=p(a.oScroll.sY),k=""!==a.oScroll.sX&&a.nTable.offsetWidth>
        d.offsetWidth?a.oScroll.iBarWidth:0,a.nTable.offsetHeight<d.offsetHeight))d.style.height=p(i(a.nTable).height()+k);k=i(a.nTable).outerWidth();c.style.width=p(k);b.style.width=p(k);if(null!==a.nTFoot)n.style.width=p(a.nTable.offsetWidth),E.style.width=p(a.nTable.offsetWidth);if(a.bSorted||a.bFiltered)d.scrollTop=0}function N(a,b,c){for(var d=0,f=b.length;d<f;d++)for(var h=0,g=b[d].childNodes.length;h<g;h++)1==b[d].childNodes[h].nodeType&&(c?a(b[d].childNodes[h],c[d].childNodes[h]):a(b[d].childNodes[h]))}
    function Ka(a,b){if(!a||null===a||""===a)return 0;b||(b=k.getElementsByTagName("body")[0]);var c,d=k.createElement("div");d.style.width=p(a);b.appendChild(d);c=d.offsetWidth;b.removeChild(d);return c}function ba(a){var b=0,c,d=0,f=a.aoColumns.length,h,g=i("th",a.nTHead),e=a.nTable.getAttribute("width");for(h=0;h<f;h++)if(a.aoColumns[h].bVisible&&(d++,null!==a.aoColumns[h].sWidth)){c=Ka(a.aoColumns[h].sWidthOrig,a.nTable.parentNode);if(null!==c)a.aoColumns[h].sWidth=p(c);b++}if(f==g.length&&0===b&&
        d==f&&""===a.oScroll.sX&&""===a.oScroll.sY)for(h=0;h<a.aoColumns.length;h++){if(c=i(g[h]).width(),null!==c)a.aoColumns[h].sWidth=p(c)}else{b=a.nTable.cloneNode(!1);h=a.nTHead.cloneNode(!0);d=k.createElement("tbody");c=k.createElement("tr");b.removeAttribute("id");b.appendChild(h);null!==a.nTFoot&&(b.appendChild(a.nTFoot.cloneNode(!0)),N(function(a){a.style.width=""},b.getElementsByTagName("tr")));b.appendChild(d);d.appendChild(c);d=i("thead th",b);0===d.length&&(d=i("tbody tr:eq(0)>td",b));g=O(a,
        h);for(h=d=0;h<f;h++){var j=a.aoColumns[h];j.bVisible&&null!==j.sWidthOrig&&""!==j.sWidthOrig?g[h-d].style.width=p(j.sWidthOrig):j.bVisible?g[h-d].style.width="":d++}for(h=0;h<f;h++)a.aoColumns[h].bVisible&&(d=La(a,h),null!==d&&(d=d.cloneNode(!0),""!==a.aoColumns[h].sContentPadding&&(d.innerHTML+=a.aoColumns[h].sContentPadding),c.appendChild(d)));f=a.nTable.parentNode;f.appendChild(b);if(""!==a.oScroll.sX&&""!==a.oScroll.sXInner)b.style.width=p(a.oScroll.sXInner);else if(""!==a.oScroll.sX){if(b.style.width=
            "",i(b).width()<f.offsetWidth)b.style.width=p(f.offsetWidth)}else if(""!==a.oScroll.sY)b.style.width=p(f.offsetWidth);else if(e)b.style.width=p(e);b.style.visibility="hidden";Ma(a,b);f=i("tbody tr:eq(0)",b).children();0===f.length&&(f=O(a,i("thead",b)[0]));if(""!==a.oScroll.sX){for(h=d=c=0;h<a.aoColumns.length;h++)a.aoColumns[h].bVisible&&(c=null===a.aoColumns[h].sWidthOrig?c+i(f[d]).outerWidth():c+(parseInt(a.aoColumns[h].sWidth.replace("px",""),10)+(i(f[d]).outerWidth()-i(f[d]).width())),d++);b.style.width=
        p(c);a.nTable.style.width=p(c)}for(h=d=0;h<a.aoColumns.length;h++)if(a.aoColumns[h].bVisible){c=i(f[d]).width();if(null!==c&&0<c)a.aoColumns[h].sWidth=p(c);d++}f=i(b).css("width");a.nTable.style.width=-1!==f.indexOf("%")?f:p(i(b).outerWidth());b.parentNode.removeChild(b)}if(e)a.nTable.style.width=p(e)}function Ma(a,b){if(""===a.oScroll.sX&&""!==a.oScroll.sY)i(b).width(),b.style.width=p(i(b).outerWidth()-a.oScroll.iBarWidth);else if(""!==a.oScroll.sX)b.style.width=p(i(b).outerWidth())}function La(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             b){var c=Na(a,b);if(0>c)return null;if(null===a.aoData[c].nTr){var d=k.createElement("td");d.innerHTML=w(a,c,b,"");return d}return L(a,c)[b]}function Na(a,b){for(var c=-1,d=-1,f=0;f<a.aoData.length;f++){var h=w(a,f,b,"display")+"",h=h.replace(/<.*?>/g,"");if(h.length>c)c=h.length,d=f}return d}function p(a){if(null===a)return"0px";if("number"==typeof a)return 0>a?"0px":a+"px";var b=a.charCodeAt(a.length-1);return 48>b||57<b?a:a+"px"}function Oa(){var a=k.createElement("p"),b=a.style;b.width="100%";
        b.height="200px";b.padding="0px";var c=k.createElement("div"),b=c.style;b.position="absolute";b.top="0px";b.left="0px";b.visibility="hidden";b.width="200px";b.height="150px";b.padding="0px";b.overflow="hidden";c.appendChild(a);k.body.appendChild(c);b=a.offsetWidth;c.style.overflow="scroll";a=a.offsetWidth;if(b==a)a=c.clientWidth;k.body.removeChild(c);return b-a}function P(a,b){var c,d,f,h,g,e,o=[],m=[],r=j.ext.oSort,n=a.aoData,k=a.aoColumns,E=a.oLanguage.oAria;if(!a.oFeatures.bServerSide&&(0!==a.aaSorting.length||
        null!==a.aaSortingFixed)){o=null!==a.aaSortingFixed?a.aaSortingFixed.concat(a.aaSorting):a.aaSorting.slice();for(c=0;c<o.length;c++)if(d=o[c][0],f=t(a,d),h=a.aoColumns[d].sSortDataType,j.ext.afnSortData[h]){g=j.ext.afnSortData[h](a,d,f);for(f=0,h=n.length;f<h;f++)J(a,f,d,g[f])}for(c=0,d=a.aiDisplayMaster.length;c<d;c++)m[a.aiDisplayMaster[c]]=c;var p=o.length,s;for(c=0,d=n.length;c<d;c++)for(f=0;f<p;f++){s=k[o[f][0]].aDataSort;for(g=0,e=s.length;g<e;g++)h=k[s[g]].sType,h=r[(h?h:"string")+"-pre"],
        n[c]._aSortData[s[g]]=h?h(w(a,c,s[g],"sort")):w(a,c,s[g],"sort")}a.aiDisplayMaster.sort(function(a,b){var c,d,f,h,g;for(c=0;c<p;c++){g=k[o[c][0]].aDataSort;for(d=0,f=g.length;d<f;d++)if(h=k[g[d]].sType,h=r[(h?h:"string")+"-"+o[c][1]](n[a]._aSortData[g[d]],n[b]._aSortData[g[d]]),0!==h)return h}return r["numeric-asc"](m[a],m[b])})}(b===l||b)&&!a.oFeatures.bDeferRender&&Q(a);for(c=0,d=a.aoColumns.length;c<d;c++)f=k[c].nTh,f.removeAttribute("aria-sort"),f.removeAttribute("aria-label"),k[c].bSortable?
        0<o.length&&o[0][0]==c?(f.setAttribute("aria-sort","asc"==o[0][1]?"ascending":"descending"),f.setAttribute("aria-label",k[c].sTitle+("asc"==(k[c].asSorting[o[0][2]+1]?k[c].asSorting[o[0][2]+1]:k[c].asSorting[0])?E.sSortAscending:E.sSortDescending))):f.setAttribute("aria-label",k[c].sTitle+("asc"==k[c].asSorting[0]?E.sSortAscending:E.sSortDescending)):f.setAttribute("aria-label",k[c].sTitle);a.bSorted=!0;i(a.oInstance).trigger("sort",a);a.oFeatures.bFilter?M(a,a.oPreviousSearch,1):(a.aiDisplay=a.aiDisplayMaster.slice(),
        a._iDisplayStart=0,z(a),y(a))}function ga(a,b,c,d){Pa(b,{},function(b){if(!1!==a.aoColumns[c].bSortable){var h=function(){var d,h;if(b.shiftKey){for(var e=!1,i=0;i<a.aaSorting.length;i++)if(a.aaSorting[i][0]==c){e=!0;d=a.aaSorting[i][0];h=a.aaSorting[i][2]+1;a.aoColumns[d].asSorting[h]?(a.aaSorting[i][1]=a.aoColumns[d].asSorting[h],a.aaSorting[i][2]=h):a.aaSorting.splice(i,1);break}!1===e&&a.aaSorting.push([c,a.aoColumns[c].asSorting[0],0])}else 1==a.aaSorting.length&&a.aaSorting[0][0]==c?(d=a.aaSorting[0][0],
        h=a.aaSorting[0][2]+1,a.aoColumns[d].asSorting[h]||(h=0),a.aaSorting[0][1]=a.aoColumns[d].asSorting[h],a.aaSorting[0][2]=h):(a.aaSorting.splice(0,a.aaSorting.length),a.aaSorting.push([c,a.aoColumns[c].asSorting[0],0]));P(a)};a.oFeatures.bProcessing?(H(a,!0),setTimeout(function(){h();a.oFeatures.bServerSide||H(a,!1)},0)):h();"function"==typeof d&&d(a)}})}function Q(a){var b,c,d,f,h,g=a.aoColumns.length,e=a.oClasses;for(b=0;b<g;b++)a.aoColumns[b].bSortable&&i(a.aoColumns[b].nTh).removeClass(e.sSortAsc+
        " "+e.sSortDesc+" "+a.aoColumns[b].sSortingClass);f=null!==a.aaSortingFixed?a.aaSortingFixed.concat(a.aaSorting):a.aaSorting.slice();for(b=0;b<a.aoColumns.length;b++)if(a.aoColumns[b].bSortable){h=a.aoColumns[b].sSortingClass;d=-1;for(c=0;c<f.length;c++)if(f[c][0]==b){h="asc"==f[c][1]?e.sSortAsc:e.sSortDesc;d=c;break}i(a.aoColumns[b].nTh).addClass(h);a.bJUI&&(c=i("span."+e.sSortIcon,a.aoColumns[b].nTh),c.removeClass(e.sSortJUIAsc+" "+e.sSortJUIDesc+" "+e.sSortJUI+" "+e.sSortJUIAscAllowed+" "+e.sSortJUIDescAllowed),
        c.addClass(-1==d?a.aoColumns[b].sSortingClassJUI:"asc"==f[d][1]?e.sSortJUIAsc:e.sSortJUIDesc))}else i(a.aoColumns[b].nTh).addClass(a.aoColumns[b].sSortingClass);h=e.sSortColumn;if(a.oFeatures.bSort&&a.oFeatures.bSortClasses){d=L(a);if(a.oFeatures.bDeferRender)i(d).removeClass(h+"1 "+h+"2 "+h+"3");else if(d.length>=g)for(b=0;b<g;b++)if(-1!=d[b].className.indexOf(h+"1"))for(c=0,a=d.length/g;c<a;c++)d[g*c+b].className=i.trim(d[g*c+b].className.replace(h+"1",""));else if(-1!=d[b].className.indexOf(h+
            "2"))for(c=0,a=d.length/g;c<a;c++)d[g*c+b].className=i.trim(d[g*c+b].className.replace(h+"2",""));else if(-1!=d[b].className.indexOf(h+"3"))for(c=0,a=d.length/g;c<a;c++)d[g*c+b].className=i.trim(d[g*c+b].className.replace(" "+h+"3",""));var e=1,j;for(b=0;b<f.length;b++){j=parseInt(f[b][0],10);for(c=0,a=d.length/g;c<a;c++)d[g*c+j].className+=" "+h+e;3>e&&e++}}}function pa(a){if(a.oFeatures.bStateSave&&!a.bDestroying){var b,c;b=a.oScroll.bInfinite;var d={iCreate:(new Date).getTime(),iStart:b?0:a._iDisplayStart,
        iEnd:b?a._iDisplayLength:a._iDisplayEnd,iLength:a._iDisplayLength,aaSorting:i.extend(!0,[],a.aaSorting),oSearch:i.extend(!0,{},a.oPreviousSearch),aoSearchCols:i.extend(!0,[],a.aoPreSearchCols),abVisCols:[]};for(b=0,c=a.aoColumns.length;b<c;b++)d.abVisCols.push(a.aoColumns[b].bVisible);C(a,"aoStateSaveParams","stateSaveParams",[a,d]);a.fnStateSave.call(a.oInstance,a,d)}}function Qa(a,b){if(a.oFeatures.bStateSave){var c=a.fnStateLoad.call(a.oInstance,a);if(c){var d=C(a,"aoStateLoadParams","stateLoadParams",
        [a,c]);if(-1===i.inArray(!1,d)){a.oLoadedState=i.extend(!0,{},c);a._iDisplayStart=c.iStart;a.iInitDisplayStart=c.iStart;a._iDisplayEnd=c.iEnd;a._iDisplayLength=c.iLength;a.aaSorting=c.aaSorting.slice();a.saved_aaSorting=c.aaSorting.slice();i.extend(a.oPreviousSearch,c.oSearch);i.extend(!0,a.aoPreSearchCols,c.aoSearchCols);b.saved_aoColumns=[];for(d=0;d<c.abVisCols.length;d++)b.saved_aoColumns[d]={},b.saved_aoColumns[d].bVisible=c.abVisCols[d];C(a,"aoStateLoaded","stateLoaded",[a,c])}}}}function Ra(a){for(var b=
        aa.location.pathname.split("/"),a=a+"_"+b[b.length-1].replace(/[\/:]/g,"").toLowerCase()+"=",b=k.cookie.split(";"),c=0;c<b.length;c++){for(var d=b[c];" "==d.charAt(0);)d=d.substring(1,d.length);if(0===d.indexOf(a))return decodeURIComponent(d.substring(a.length,d.length))}return null}function u(a){for(var b=0;b<j.settings.length;b++)if(j.settings[b].nTable===a)return j.settings[b];return null}function S(a){for(var b=[],a=a.aoData,c=0,d=a.length;c<d;c++)null!==a[c].nTr&&b.push(a[c].nTr);return b}function L(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      b){var c=[],d,f,h,e,i,j;f=0;var o=a.aoData.length;b!==l&&(f=b,o=b+1);for(h=f;h<o;h++)if(j=a.aoData[h],null!==j.nTr){f=[];for(e=0,i=j.nTr.childNodes.length;e<i;e++)d=j.nTr.childNodes[e].nodeName.toLowerCase(),("td"==d||"th"==d)&&f.push(j.nTr.childNodes[e]);d=0;for(e=0,i=a.aoColumns.length;e<i;e++)a.aoColumns[e].bVisible?c.push(f[e-d]):(c.push(j._anHidden[e]),d++)}return c}function F(a,b,c){a=null===a?"DataTables warning: "+c:"DataTables warning (table id = '"+a.sTableId+"'): "+c;if(0===b)if("alert"==
        j.ext.sErrMode)alert(a);else throw a;else console!==l&&console.log&&console.log(a)}function n(a,b,c,d){d===l&&(d=c);b[c]!==l&&(a[d]=b[c])}function Sa(a,b){for(var c in a)a.hasOwnProperty(c)&&b[c]!==l&&("object"===typeof e[c]&&!1===i.isArray(b[c])?i.extend(!0,a[c],b[c]):a[c]=b[c]);return a}function Pa(a,b,c){i(a).bind("click.DT",b,function(b){c(b);a.blur()}).bind("keypress.DT",b,function(a){13===a.which&&c(a)}).bind("selectstart.DT",function(){return!1})}function A(a,b,c,d){c&&a[b].push({fn:c,sName:d})}
    function C(a,b,c,d){for(var b=a[b],f=[],h=b.length-1;0<=h;h--)f.push(b[h].fn.apply(a.oInstance,d));null!==c&&i(a.oInstance).trigger(c,d);return f}function Ta(a){return function(){var b=[u(this[j.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));return j.ext.oApi[a].apply(this,b)}}var Ua=aa.JSON?JSON.stringify:function(a){var b=typeof a;if("object"!==b||null===a)return"string"===b&&(a='"'+a+'"'),a+"";var c,d,f=[],h=i.isArray(a);for(c in a)d=a[c],b=typeof d,"string"===b?d='"'+d+'"':"object"===
    b&&null!==d&&(d=Ua(d)),f.push((h?"":'"'+c+'":')+d);return(h?"[":"{")+f+(h?"]":"}")};this.$=function(a,b){var c,d,f=[],h=u(this[j.ext.iApiIndex]);b||(b={});b=i.extend({},{filter:"none",order:"current",page:"all"},b);if("current"==b.page)for(c=h._iDisplayStart,d=h.fnDisplayEnd();c<d;c++)f.push(h.aoData[h.aiDisplay[c]].nTr);else if("current"==b.order&&"none"==b.filter)for(c=0,d=h.aiDisplayMaster.length;c<d;c++)f.push(h.aoData[h.aiDisplayMaster[c]].nTr);else if("current"==b.order&&"applied"==b.filter)for(c=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  0,d=h.aiDisplay.length;c<d;c++)f.push(h.aoData[h.aiDisplay[c]].nTr);else if("original"==b.order&&"none"==b.filter)for(c=0,d=h.aoData.length;c<d;c++)f.push(h.aoData[c].nTr);else if("original"==b.order&&"applied"==b.filter)for(c=0,d=h.aoData.length;c<d;c++)-1!==i.inArray(c,h.aiDisplay)&&f.push(h.aoData[c].nTr);else F(h,1,"Unknown selection options");d=i(f);c=d.filter(a);d=d.find(a);return i([].concat(i.makeArray(c),i.makeArray(d)))};this._=function(a,b){var c=[],d,f,h=this.$(a,b);for(d=0,f=h.length;d<
    f;d++)c.push(this.fnGetData(h[d]));return c};this.fnAddData=function(a,b){if(0===a.length)return[];var c=[],d,f=u(this[j.ext.iApiIndex]);if("object"===typeof a[0]&&null!==a[0])for(var h=0;h<a.length;h++){d=G(f,a[h]);if(-1==d)return c;c.push(d)}else{d=G(f,a);if(-1==d)return c;c.push(d)}f.aiDisplay=f.aiDisplayMaster.slice();(b===l||b)&&Z(f);return c};this.fnAdjustColumnSizing=function(a){var b=u(this[j.ext.iApiIndex]);r(b);a===l||a?this.fnDraw(!1):(""!==b.oScroll.sX||""!==b.oScroll.sY)&&this.oApi._fnScrollDraw(b)};
    this.fnClearTable=function(a){var b=u(this[j.ext.iApiIndex]);ea(b);(a===l||a)&&y(b)};this.fnClose=function(a){for(var b=u(this[j.ext.iApiIndex]),c=0;c<b.aoOpenRows.length;c++)if(b.aoOpenRows[c].nParent==a)return(a=b.aoOpenRows[c].nTr.parentNode)&&a.removeChild(b.aoOpenRows[c].nTr),b.aoOpenRows.splice(c,1),0;return 1};this.fnDeleteRow=function(a,b,c){var d=u(this[j.ext.iApiIndex]),f,h,a="object"===typeof a?K(d,a):a,e=d.aoData.splice(a,1);for(f=0,h=d.aoData.length;f<h;f++)if(null!==d.aoData[f].nTr)d.aoData[f].nTr._DT_RowIndex=
        f;f=i.inArray(a,d.aiDisplay);d.asDataSearch.splice(f,1);fa(d.aiDisplayMaster,a);fa(d.aiDisplay,a);"function"===typeof b&&b.call(this,d,e);if(d._iDisplayStart>=d.aiDisplay.length&&(d._iDisplayStart-=d._iDisplayLength,0>d._iDisplayStart))d._iDisplayStart=0;if(c===l||c)z(d),y(d);return e};this.fnDestroy=function(a){var b=u(this[j.ext.iApiIndex]),c=b.nTableWrapper.parentNode,d=b.nTBody,f,e,a=a===l?!1:!0;b.bDestroying=!0;for(f=0,e=b.aoDestroyCallback.length;f<e;f++)b.aoDestroyCallback[f].fn();for(f=0,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             e=b.aoColumns.length;f<e;f++)!1===b.aoColumns[f].bVisible&&this.fnSetColumnVis(f,!0);i(b.nTableWrapper).find("*").andSelf().unbind(".DT");i("tbody>tr>td."+b.oClasses.sRowEmpty,b.nTable).parent().remove();b.nTable!=b.nTHead.parentNode&&(i(b.nTable).children("thead").remove(),b.nTable.appendChild(b.nTHead));b.nTFoot&&b.nTable!=b.nTFoot.parentNode&&(i(b.nTable).children("tfoot").remove(),b.nTable.appendChild(b.nTFoot));b.nTable.parentNode.removeChild(b.nTable);i(b.nTableWrapper).remove();b.aaSorting=
        [];b.aaSortingFixed=[];Q(b);i(S(b)).removeClass(b.asStripeClasses.join(" "));i("th, td",b.nTHead).removeClass([b.oClasses.sSortable,b.oClasses.sSortableAsc,b.oClasses.sSortableDesc,b.oClasses.sSortableNone].join(" "));b.bJUI&&(i("th span."+b.oClasses.sSortIcon+", td span."+b.oClasses.sSortIcon,b.nTHead).remove(),i("th, td",b.nTHead).each(function(){var a=i("div."+b.oClasses.sSortJUIWrapper,this),c=a.contents();i(this).append(c);a.remove()}));!a&&b.nTableReinsertBefore?c.insertBefore(b.nTable,b.nTableReinsertBefore):
    a||c.appendChild(b.nTable);for(f=0,e=b.aoData.length;f<e;f++)null!==b.aoData[f].nTr&&d.appendChild(b.aoData[f].nTr);if(!0===b.oFeatures.bAutoWidth)b.nTable.style.width=p(b.sDestroyWidth);i(d).children("tr:even").addClass(b.asDestroyStripes[0]);i(d).children("tr:odd").addClass(b.asDestroyStripes[1]);for(f=0,e=j.settings.length;f<e;f++)j.settings[f]==b&&j.settings.splice(f,1);b=null};this.fnDraw=function(a){var b=u(this[j.ext.iApiIndex]);a?(z(b),y(b)):Z(b)};this.fnFilter=function(a,b,c,d,f,e){var g=
        u(this[j.ext.iApiIndex]);if(g.oFeatures.bFilter){if(c===l||null===c)c=!1;if(d===l||null===d)d=!0;if(f===l||null===f)f=!0;if(e===l||null===e)e=!0;if(b===l||null===b){if(M(g,{sSearch:a+"",bRegex:c,bSmart:d,bCaseInsensitive:e},1),f&&g.aanFeatures.f){b=g.aanFeatures.f;c=0;for(d=b.length;c<d;c++)i("input",b[c]).val(a)}}else i.extend(g.aoPreSearchCols[b],{sSearch:a+"",bRegex:c,bSmart:d,bCaseInsensitive:e}),M(g,g.oPreviousSearch,1)}};this.fnGetData=function(a,b){var c=u(this[j.ext.iApiIndex]);if(a!==l){var d=
        a;if("object"===typeof a){var f=a.nodeName.toLowerCase();"tr"===f?d=K(c,a):"td"===f&&(d=K(c,a.parentNode),b=da(c,d,a))}return b!==l?w(c,d,b,""):c.aoData[d]!==l?c.aoData[d]._aData:null}return X(c)};this.fnGetNodes=function(a){var b=u(this[j.ext.iApiIndex]);return a!==l?b.aoData[a]!==l?b.aoData[a].nTr:null:S(b)};this.fnGetPosition=function(a){var b=u(this[j.ext.iApiIndex]),c=a.nodeName.toUpperCase();if("TR"==c)return K(b,a);return"TD"==c||"TH"==c?(c=K(b,a.parentNode),a=da(b,c,a),[c,t(b,a),a]):null};
    this.fnIsOpen=function(a){for(var b=u(this[j.ext.iApiIndex]),c=0;c<b.aoOpenRows.length;c++)if(b.aoOpenRows[c].nParent==a)return!0;return!1};this.fnOpen=function(a,b,c){var d=u(this[j.ext.iApiIndex]),f=S(d);if(-1!==i.inArray(a,f)){this.fnClose(a);var f=k.createElement("tr"),e=k.createElement("td");f.appendChild(e);e.className=c;e.colSpan=v(d);"string"===typeof b?e.innerHTML=b:i(e).html(b);b=i("tr",d.nTBody);-1!=i.inArray(a,b)&&i(f).insertAfter(a);d.aoOpenRows.push({nTr:f,nParent:a});return f}};this.fnPageChange=
        function(a,b){var c=u(this[j.ext.iApiIndex]);oa(c,a);z(c);(b===l||b)&&y(c)};this.fnSetColumnVis=function(a,b,c){var d=u(this[j.ext.iApiIndex]),f,e,g=d.aoColumns,i=d.aoData,o,m;if(g[a].bVisible!=b){if(b){for(f=e=0;f<a;f++)g[f].bVisible&&e++;m=e>=v(d);if(!m)for(f=a;f<g.length;f++)if(g[f].bVisible){o=f;break}for(f=0,e=i.length;f<e;f++)null!==i[f].nTr&&(m?i[f].nTr.appendChild(i[f]._anHidden[a]):i[f].nTr.insertBefore(i[f]._anHidden[a],L(d,f)[o]))}else for(f=0,e=i.length;f<e;f++)null!==i[f].nTr&&(o=L(d,
        f)[a],i[f]._anHidden[a]=o,o.parentNode.removeChild(o));g[a].bVisible=b;U(d,d.aoHeader);d.nTFoot&&U(d,d.aoFooter);for(f=0,e=d.aoOpenRows.length;f<e;f++)d.aoOpenRows[f].nTr.colSpan=v(d);if(c===l||c)r(d),y(d);pa(d)}};this.fnSettings=function(){return u(this[j.ext.iApiIndex])};this.fnSort=function(a){var b=u(this[j.ext.iApiIndex]);b.aaSorting=a;P(b)};this.fnSortListener=function(a,b,c){ga(u(this[j.ext.iApiIndex]),a,b,c)};this.fnUpdate=function(a,b,c,d,f){var e=u(this[j.ext.iApiIndex]),b="object"===typeof b?
        K(e,b):b;if(e.__fnUpdateDeep===l&&i.isArray(a)&&"object"===typeof a){e.aoData[b]._aData=a.slice();e.__fnUpdateDeep=!0;for(c=0;c<e.aoColumns.length;c++)this.fnUpdate(w(e,b,c),b,c,!1,!1);e.__fnUpdateDeep=l}else if(e.__fnUpdateDeep===l&&null!==a&&"object"===typeof a){e.aoData[b]._aData=i.extend(!0,{},a);e.__fnUpdateDeep=!0;for(c=0;c<e.aoColumns.length;c++)this.fnUpdate(w(e,b,c),b,c,!1,!1);e.__fnUpdateDeep=l}else{J(e,b,c,a);var a=w(e,b,c,"display"),g=e.aoColumns[c];null!==g.fnRender&&(a=R(e,b,c),g.bUseRendered&&
    J(e,b,c,a));if(null!==e.aoData[b].nTr)L(e,b)[c].innerHTML=a}c=i.inArray(b,e.aiDisplay);e.asDataSearch[c]=la(e,W(e,b,"filter"));(f===l||f)&&r(e);(d===l||d)&&Z(e);return 0};this.fnVersionCheck=j.ext.fnVersionCheck;this.oApi={_fnExternApiFunc:Ta,_fnInitialise:$,_fnInitComplete:Y,_fnLanguageCompat:na,_fnAddColumn:o,_fnColumnOptions:E,_fnAddData:G,_fnCreateTr:ca,_fnGatherData:ta,_fnBuildHead:ua,_fnDrawHead:U,_fnDraw:y,_fnReDraw:Z,_fnAjaxUpdate:va,_fnAjaxParameters:Da,_fnAjaxUpdateDraw:Ea,_fnServerParams:ha,
        _fnAddOptionsHtml:wa,_fnFeatureHtmlTable:Aa,_fnScrollDraw:Ja,_fnAdjustColumnSizing:r,_fnFeatureHtmlFilter:ya,_fnFilterComplete:M,_fnFilterCustom:Ha,_fnFilterColumn:Ga,_fnFilter:Fa,_fnBuildSearchArray:ia,_fnBuildSearchRow:la,_fnFilterCreateSearch:ja,_fnDataToSearch:ka,_fnSort:P,_fnSortAttachListener:ga,_fnSortingClasses:Q,_fnFeatureHtmlPaginate:Ca,_fnPageChange:oa,_fnFeatureHtmlInfo:Ba,_fnUpdateInfo:Ia,_fnFeatureHtmlLength:xa,_fnFeatureHtmlProcessing:za,_fnProcessingDisplay:H,_fnVisibleToColumnIndex:s,
        _fnColumnIndexToVisible:t,_fnNodeToDataIndex:K,_fnVisbleColumns:v,_fnCalculateEnd:z,_fnConvertToWidth:Ka,_fnCalculateColumnWidths:ba,_fnScrollingWidthAdjust:Ma,_fnGetWidestNode:La,_fnGetMaxLenString:Na,_fnStringToCss:p,_fnDetectType:B,_fnSettingsFromNode:u,_fnGetDataMaster:X,_fnGetTrNodes:S,_fnGetTdNodes:L,_fnEscapeRegex:ma,_fnDeleteIndex:fa,_fnReOrderIndex:D,_fnColumnOrdering:x,_fnLog:F,_fnClearTable:ea,_fnSaveState:pa,_fnLoadState:Qa,_fnCreateCookie:function(a,b,c,d,e){var h=new Date;h.setTime(h.getTime()+
            1E3*c);var c=aa.location.pathname.split("/"),a=a+"_"+c.pop().replace(/[\/:]/g,"").toLowerCase(),g;null!==e?(g="function"===typeof i.parseJSON?i.parseJSON(b):eval("("+b+")"),b=e(a,g,h.toGMTString(),c.join("/")+"/")):b=a+"="+encodeURIComponent(b)+"; expires="+h.toGMTString()+"; path="+c.join("/")+"/";e="";h=9999999999999;if(4096<(null!==Ra(a)?k.cookie.length:b.length+k.cookie.length)+10){for(var a=k.cookie.split(";"),j=0,o=a.length;j<o;j++)if(-1!=a[j].indexOf(d)){var m=a[j].split("=");try{g=eval("("+
            decodeURIComponent(m[1])+")")}catch(l){continue}if(g.iCreate&&g.iCreate<h)e=m[0],h=g.iCreate}if(""!==e)k.cookie=e+"=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path="+c.join("/")+"/"}k.cookie=b},_fnReadCookie:Ra,_fnDetectHeader:T,_fnGetUniqueThs:O,_fnScrollBarWidth:Oa,_fnApplyToChildren:N,_fnMap:n,_fnGetRowData:W,_fnGetCellData:w,_fnSetCellData:J,_fnGetObjectDataFn:V,_fnSetObjectDataFn:sa,_fnApplyColumnDefs:I,_fnBindAction:Pa,_fnExtend:Sa,_fnCallbackReg:A,_fnCallbackFire:C,_fnJsonString:Ua,_fnRender:R,
        _fnNodeToColumnIndex:da};i.extend(j.ext.oApi,this.oApi);for(var qa in j.ext.oApi)qa&&(this[qa]=Ta(qa));var ra=this;return this.each(function(){var a=0,b,c,d;c=this.getAttribute("id");var f=!1,h=!1;if("table"!=this.nodeName.toLowerCase())F(null,0,"Attempted to initialise DataTables on a node which is not a table: "+this.nodeName);else{for(a=0,b=j.settings.length;a<b;a++){if(j.settings[a].nTable==this){if(e===l||e.bRetrieve)return j.settings[a].oInstance;if(e.bDestroy){j.settings[a].oInstance.fnDestroy();
        break}else{F(j.settings[a],0,"Cannot reinitialise DataTable.\n\nTo retrieve the DataTables object for this table, pass no arguments or see the docs for bRetrieve and bDestroy");return}}if(j.settings[a].sTableId==this.id){j.settings.splice(a,1);break}}if(null===c)this.id=c="DataTables_Table_"+j.ext._oExternConfig.iNextUnique++;var g=i.extend(!0,{},j.models.oSettings,{nTable:this,oApi:ra.oApi,oInit:e,sDestroyWidth:i(this).width(),sInstance:c,sTableId:c});j.settings.push(g);g.oInstance=1===ra.length?
        ra:i(this).dataTable();e||(e={});e.oLanguage&&na(e.oLanguage);e=Sa(i.extend(!0,{},j.defaults),e);n(g.oFeatures,e,"bPaginate");n(g.oFeatures,e,"bLengthChange");n(g.oFeatures,e,"bFilter");n(g.oFeatures,e,"bSort");n(g.oFeatures,e,"bInfo");n(g.oFeatures,e,"bProcessing");n(g.oFeatures,e,"bAutoWidth");n(g.oFeatures,e,"bSortClasses");n(g.oFeatures,e,"bServerSide");n(g.oFeatures,e,"bDeferRender");n(g.oScroll,e,"sScrollX","sX");n(g.oScroll,e,"sScrollXInner","sXInner");n(g.oScroll,e,"sScrollY","sY");n(g.oScroll,
        e,"bScrollCollapse","bCollapse");n(g.oScroll,e,"bScrollInfinite","bInfinite");n(g.oScroll,e,"iScrollLoadGap","iLoadGap");n(g.oScroll,e,"bScrollAutoCss","bAutoCss");n(g,e,"asStripClasses","asStripeClasses");n(g,e,"asStripeClasses");n(g,e,"fnServerData");n(g,e,"fnFormatNumber");n(g,e,"sServerMethod");n(g,e,"aaSorting");n(g,e,"aaSortingFixed");n(g,e,"aLengthMenu");n(g,e,"sPaginationType");n(g,e,"sAjaxSource");n(g,e,"sAjaxDataProp");n(g,e,"iCookieDuration");n(g,e,"sCookiePrefix");n(g,e,"sDom");n(g,e,
        "bSortCellsTop");n(g,e,"iTabIndex");n(g,e,"oSearch","oPreviousSearch");n(g,e,"aoSearchCols","aoPreSearchCols");n(g,e,"iDisplayLength","_iDisplayLength");n(g,e,"bJQueryUI","bJUI");n(g,e,"fnCookieCallback");n(g,e,"fnStateLoad");n(g,e,"fnStateSave");n(g.oLanguage,e,"fnInfoCallback");A(g,"aoDrawCallback",e.fnDrawCallback,"user");A(g,"aoServerParams",e.fnServerParams,"user");A(g,"aoStateSaveParams",e.fnStateSaveParams,"user");A(g,"aoStateLoadParams",e.fnStateLoadParams,"user");A(g,"aoStateLoaded",e.fnStateLoaded,
        "user");A(g,"aoRowCallback",e.fnRowCallback,"user");A(g,"aoRowCreatedCallback",e.fnCreatedRow,"user");A(g,"aoHeaderCallback",e.fnHeaderCallback,"user");A(g,"aoFooterCallback",e.fnFooterCallback,"user");A(g,"aoInitComplete",e.fnInitComplete,"user");A(g,"aoPreDrawCallback",e.fnPreDrawCallback,"user");g.oFeatures.bServerSide&&g.oFeatures.bSort&&g.oFeatures.bSortClasses?A(g,"aoDrawCallback",Q,"server_side_sort_classes"):g.oFeatures.bDeferRender&&A(g,"aoDrawCallback",Q,"defer_sort_classes");if(e.bJQueryUI){if(i.extend(g.oClasses,
            j.ext.oJUIClasses),e.sDom===j.defaults.sDom&&"lfrtip"===j.defaults.sDom)g.sDom='<"H"lfr>t<"F"ip>'}else i.extend(g.oClasses,j.ext.oStdClasses);i(this).addClass(g.oClasses.sTable);if(""!==g.oScroll.sX||""!==g.oScroll.sY)g.oScroll.iBarWidth=Oa();if(g.iInitDisplayStart===l)g.iInitDisplayStart=e.iDisplayStart,g._iDisplayStart=e.iDisplayStart;if(e.bStateSave)g.oFeatures.bStateSave=!0,Qa(g,e),A(g,"aoDrawCallback",pa,"state_save");if(null!==e.iDeferLoading)g.bDeferLoading=!0,g._iRecordsTotal=e.iDeferLoading,
        g._iRecordsDisplay=e.iDeferLoading;null!==e.aaData&&(h=!0);""!==e.oLanguage.sUrl?(g.oLanguage.sUrl=e.oLanguage.sUrl,i.getJSON(g.oLanguage.sUrl,null,function(a){na(a);i.extend(!0,g.oLanguage,e.oLanguage,a);$(g)}),f=!0):i.extend(!0,g.oLanguage,e.oLanguage);c=!1;d=i(this).children("tbody").children("tr");for(a=0,b=g.asStripeClasses.length;a<b;a++)if(d.filter(":lt(2)").hasClass(g.asStripeClasses[a])){c=!0;break}if(c)g.asDestroyStripes=["",""],i(d[0]).hasClass(g.oClasses.sStripeOdd)&&(g.asDestroyStripes[0]+=
        g.oClasses.sStripeOdd+" "),i(d[0]).hasClass(g.oClasses.sStripeEven)&&(g.asDestroyStripes[0]+=g.oClasses.sStripeEven),i(d[1]).hasClass(g.oClasses.sStripeOdd)&&(g.asDestroyStripes[1]+=g.oClasses.sStripeOdd+" "),i(d[1]).hasClass(g.oClasses.sStripeEven)&&(g.asDestroyStripes[1]+=g.oClasses.sStripeEven),d.removeClass(g.asStripeClasses.join(" "));c=[];a=this.getElementsByTagName("thead");0!==a.length&&(T(g.aoHeader,a[0]),c=O(g));if(null===e.aoColumns){d=[];for(a=0,b=c.length;a<b;a++)d.push(null)}else d=
        e.aoColumns;for(a=0,b=d.length;a<b;a++){if(e.saved_aoColumns!==l&&e.saved_aoColumns.length==b)null===d[a]&&(d[a]={}),d[a].bVisible=e.saved_aoColumns[a].bVisible;o(g,c?c[a]:null)}I(g,e.aoColumnDefs,d,function(a,b){E(g,a,b)});for(a=0,b=g.aaSorting.length;a<b;a++){g.aaSorting[a][0]>=g.aoColumns.length&&(g.aaSorting[a][0]=0);var r=g.aoColumns[g.aaSorting[a][0]];g.aaSorting[a][2]===l&&(g.aaSorting[a][2]=0);e.aaSorting===l&&g.saved_aaSorting===l&&(g.aaSorting[a][1]=r.asSorting[0]);for(c=0,d=r.asSorting.length;c<
    d;c++)if(g.aaSorting[a][1]==r.asSorting[c]){g.aaSorting[a][2]=c;break}}Q(g);a=i(this).children("thead");0===a.length&&(a=[k.createElement("thead")],this.appendChild(a[0]));g.nTHead=a[0];a=i(this).children("tbody");0===a.length&&(a=[k.createElement("tbody")],this.appendChild(a[0]));g.nTBody=a[0];g.nTBody.setAttribute("role","alert");g.nTBody.setAttribute("aria-live","polite");g.nTBody.setAttribute("aria-relevant","all");a=i(this).children("tfoot");if(0<a.length)g.nTFoot=a[0],T(g.aoFooter,g.nTFoot);
        if(h)for(a=0;a<e.aaData.length;a++)G(g,e.aaData[a]);else ta(g);g.aiDisplay=g.aiDisplayMaster.slice();g.bInitialised=!0;!1===f&&$(g)}})};j.version="1.9.0";j.settings=[];j.models={};j.models.ext={afnFiltering:[],afnSortData:[],aoFeatures:[],aTypes:[],fnVersionCheck:function(e){for(var i=function(e,i){for(;e.length<i;)e+="0";return e},l=j.ext.sVersion.split("."),e=e.split("."),r="",k="",t=0,v=e.length;t<v;t++)r+=i(l[t],3),k+=i(e[t],3);return parseInt(r,10)>=parseInt(k,10)},iApiIndex:0,ofnSearch:{},oApi:{},
    oStdClasses:{},oJUIClasses:{},oPagination:{},oSort:{},sVersion:j.version,sErrMode:"alert",_oExternConfig:{iNextUnique:0}};j.models.oSearch={bCaseInsensitive:!0,sSearch:"",bRegex:!1,bSmart:!0};j.models.oRow={nTr:null,_aData:[],_aSortData:[],_anHidden:[],_sRowStripe:""};j.models.oColumn={aDataSort:null,asSorting:null,bSearchable:null,bSortable:null,bUseRendered:null,bVisible:null,_bAutoType:!0,fnCreatedCell:null,fnGetData:null,fnRender:null,fnSetData:null,mDataProp:null,nTh:null,nTf:null,sClass:null,
    sContentPadding:null,sDefaultContent:null,sName:null,sSortDataType:"std",sSortingClass:null,sSortingClassJUI:null,sTitle:null,sType:null,sWidth:null,sWidthOrig:null};j.defaults={aaData:null,aaSorting:[[0,"asc"]],aaSortingFixed:null,aLengthMenu:[10,25,50,100],aoColumns:null,aoColumnDefs:null,aoSearchCols:[],asStripeClasses:["odd","even"],bAutoWidth:!0,bDeferRender:!1,bDestroy:!1,bFilter:!0,bInfo:!0,bJQueryUI:!1,bLengthChange:!0,bPaginate:!0,bProcessing:!1,bRetrieve:!1,bScrollAutoCss:!0,bScrollCollapse:!1,
    bScrollInfinite:!1,bServerSide:!1,bSort:!0,bSortCellsTop:!1,bSortClasses:!0,bStateSave:!1,fnCookieCallback:null,fnCreatedRow:null,fnDrawCallback:null,fnFooterCallback:null,fnFormatNumber:function(e){if(1E3>e)return e;for(var i=e+"",e=i.split(""),j="",i=i.length,l=0;l<i;l++)0===l%3&&0!==l&&(j=this.oLanguage.sInfoThousands+j),j=e[i-l-1]+j;return j},fnHeaderCallback:null,fnInfoCallback:null,fnInitComplete:null,fnPreDrawCallback:null,fnRowCallback:null,fnServerData:function(e,j,l,k){k.jqXHR=i.ajax({url:e,
        data:j,success:function(e){i(k.oInstance).trigger("xhr",k);l(e)},dataType:"json",cache:!1,type:k.sServerMethod,error:function(e,i){"parsererror"==i&&alert("DataTables warning: JSON data from server could not be parsed. This is caused by a JSON formatting error.")}})},fnServerParams:null,fnStateLoad:function(e){var e=this.oApi._fnReadCookie(e.sCookiePrefix+e.sInstance),j;try{j="function"===typeof i.parseJSON?i.parseJSON(e):eval("("+e+")")}catch(l){j=null}return j},fnStateLoadParams:null,fnStateLoaded:null,
    fnStateSave:function(e,i){this.oApi._fnCreateCookie(e.sCookiePrefix+e.sInstance,this.oApi._fnJsonString(i),e.iCookieDuration,e.sCookiePrefix,e.fnCookieCallback)},fnStateSaveParams:null,iCookieDuration:7200,iDeferLoading:null,iDisplayLength:10,iDisplayStart:0,iScrollLoadGap:100,iTabIndex:0,oLanguage:{oAria:{sSortAscending:": activate to sort column ascending",sSortDescending:": activate to sort column descending"},oPaginate:{sFirst:"First",sLast:"Last",sNext:"Next",sPrevious:"Previous"},sEmptyTable:"No data available in table",
        sInfo:"Showing _START_ to _END_ of _TOTAL_ entries",sInfoEmpty:"Showing 0 to 0 of 0 entries",sInfoFiltered:"(filtered from _MAX_ total entries)",sInfoPostFix:"",sInfoThousands:",",sLengthMenu:"Show _MENU_ entries",sLoadingRecords:"Loading...",sProcessing:"Processing...",sSearch:"Search:",sUrl:"",sZeroRecords:"No matching records found"},oSearch:i.extend({},j.models.oSearch),sAjaxDataProp:"aaData",sAjaxSource:null,sCookiePrefix:"SpryMedia_DataTables_",sDom:"lfrtip",sPaginationType:"two_button",sScrollX:"",
    sScrollXInner:"",sScrollY:"",sServerMethod:"GET"};j.defaults.columns={aDataSort:null,asSorting:["asc","desc"],bSearchable:!0,bSortable:!0,bUseRendered:!0,bVisible:!0,fnCreatedCell:null,fnRender:null,iDataSort:-1,mDataProp:null,sClass:"",sContentPadding:"",sDefaultContent:null,sName:"",sSortDataType:"std",sTitle:null,sType:null,sWidth:null};j.models.oSettings={oFeatures:{bAutoWidth:null,bDeferRender:null,bFilter:null,bInfo:null,bLengthChange:null,bPaginate:null,bProcessing:null,bServerSide:null,bSort:null,
    bSortClasses:null,bStateSave:null},oScroll:{bAutoCss:null,bCollapse:null,bInfinite:null,iBarWidth:0,iLoadGap:null,sX:null,sXInner:null,sY:null},oLanguage:{fnInfoCallback:null},aanFeatures:[],aoData:[],aiDisplay:[],aiDisplayMaster:[],aoColumns:[],aoHeader:[],aoFooter:[],asDataSearch:[],oPreviousSearch:{},aoPreSearchCols:[],aaSorting:null,aaSortingFixed:null,asStripeClasses:null,asDestroyStripes:[],sDestroyWidth:0,aoRowCallback:[],aoHeaderCallback:[],aoFooterCallback:[],aoDrawCallback:[],aoRowCreatedCallback:[],
    aoPreDrawCallback:[],aoInitComplete:[],aoStateSaveParams:[],aoStateLoadParams:[],aoStateLoaded:[],sTableId:"",nTable:null,nTHead:null,nTFoot:null,nTBody:null,nTableWrapper:null,bDeferLoading:!1,bInitialised:!1,aoOpenRows:[],sDom:null,sPaginationType:"two_button",iCookieDuration:0,sCookiePrefix:"",fnCookieCallback:null,aoStateSave:[],aoStateLoad:[],oLoadedState:null,sAjaxSource:null,sAjaxDataProp:null,bAjaxDataGet:!0,jqXHR:null,fnServerData:null,aoServerParams:[],sServerMethod:null,fnFormatNumber:null,
    aLengthMenu:null,iDraw:0,bDrawing:!1,iDrawError:-1,_iDisplayLength:10,_iDisplayStart:0,_iDisplayEnd:10,_iRecordsTotal:0,_iRecordsDisplay:0,bJUI:null,oClasses:{},bFiltered:!1,bSorted:!1,bSortCellsTop:null,oInit:null,aoDestroyCallback:[],fnRecordsTotal:function(){return this.oFeatures.bServerSide?parseInt(this._iRecordsTotal,10):this.aiDisplayMaster.length},fnRecordsDisplay:function(){return this.oFeatures.bServerSide?parseInt(this._iRecordsDisplay,10):this.aiDisplay.length},fnDisplayEnd:function(){return this.oFeatures.bServerSide?
        !1===this.oFeatures.bPaginate||-1==this._iDisplayLength?this._iDisplayStart+this.aiDisplay.length:Math.min(this._iDisplayStart+this._iDisplayLength,this._iRecordsDisplay):this._iDisplayEnd},oInstance:null,sInstance:null,iTabIndex:0};j.ext=i.extend(!0,{},j.models.ext);i.extend(j.ext.oStdClasses,{sTable:"dataTable",sPagePrevEnabled:"paginate_enabled_previous",sPagePrevDisabled:"paginate_disabled_previous",sPageNextEnabled:"paginate_enabled_next",sPageNextDisabled:"paginate_disabled_next",sPageJUINext:"",
    sPageJUIPrev:"",sPageButton:"paginate_button",sPageButtonActive:"paginate_active",sPageButtonStaticDisabled:"paginate_button paginate_button_disabled",sPageFirst:"first",sPagePrevious:"previous",sPageNext:"next",sPageLast:"last",sStripeOdd:"odd",sStripeEven:"even",sRowEmpty:"dataTables_empty",sWrapper:"dataTables_wrapper",sFilter:"dataTables_filter",sInfo:"dataTables_info",sPaging:"dataTables_paginate paging_",sLength:"dataTables_length",sProcessing:"dataTables_processing",sSortAsc:"sorting_asc",
    sSortDesc:"sorting_desc",sSortable:"sorting",sSortableAsc:"sorting_asc_disabled",sSortableDesc:"sorting_desc_disabled",sSortableNone:"sorting_disabled",sSortColumn:"sorting_",sSortJUIAsc:"",sSortJUIDesc:"",sSortJUI:"",sSortJUIAscAllowed:"",sSortJUIDescAllowed:"",sSortJUIWrapper:"",sSortIcon:"",sScrollWrapper:"dataTables_scroll",sScrollHead:"dataTables_scrollHead",sScrollHeadInner:"dataTables_scrollHeadInner",sScrollBody:"dataTables_scrollBody",sScrollFoot:"dataTables_scrollFoot",sScrollFootInner:"dataTables_scrollFootInner",
    sFooterTH:""});i.extend(j.ext.oJUIClasses,j.ext.oStdClasses,{sPagePrevEnabled:"fg-button ui-button ui-state-default ui-corner-left",sPagePrevDisabled:"fg-button ui-button ui-state-default ui-corner-left ui-state-disabled",sPageNextEnabled:"fg-button ui-button ui-state-default ui-corner-right",sPageNextDisabled:"fg-button ui-button ui-state-default ui-corner-right ui-state-disabled",sPageJUINext:"ui-icon ui-icon-circle-arrow-e",sPageJUIPrev:"ui-icon ui-icon-circle-arrow-w",sPageButton:"fg-button ui-button ui-state-default",
    sPageButtonActive:"fg-button ui-button ui-state-default ui-state-disabled",sPageButtonStaticDisabled:"fg-button ui-button ui-state-default ui-state-disabled",sPageFirst:"first ui-corner-tl ui-corner-bl",sPageLast:"last ui-corner-tr ui-corner-br",sPaging:"dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",sSortAsc:"ui-state-default",sSortDesc:"ui-state-default",sSortable:"ui-state-default",sSortableAsc:"ui-state-default",sSortableDesc:"ui-state-default",sSortableNone:"ui-state-default",
    sSortJUIAsc:"css_right ui-icon ui-icon-triangle-1-n",sSortJUIDesc:"css_right ui-icon ui-icon-triangle-1-s",sSortJUI:"css_right ui-icon ui-icon-carat-2-n-s",sSortJUIAscAllowed:"css_right ui-icon ui-icon-carat-1-n",sSortJUIDescAllowed:"css_right ui-icon ui-icon-carat-1-s",sSortJUIWrapper:"DataTables_sort_wrapper",sSortIcon:"DataTables_sort_icon",sScrollHead:"dataTables_scrollHead ui-state-default",sScrollFoot:"dataTables_scrollFoot ui-state-default",sFooterTH:"ui-state-default"});i.extend(j.ext.oPagination,
    {two_button:{fnInit:function(e,j,l){var k=e.oLanguage.oPaginate,s=function(i){e.oApi._fnPageChange(e,i.data.action)&&l(e)},k=!e.bJUI?'<a class="'+e.oClasses.sPagePrevDisabled+'" tabindex="'+e.iTabIndex+'" role="button">'+k.sPrevious+'</a><a class="'+e.oClasses.sPageNextDisabled+'" tabindex="'+e.iTabIndex+'" role="button">'+k.sNext+"</a>":'<a class="'+e.oClasses.sPagePrevDisabled+'" tabindex="'+e.iTabIndex+'" role="button"><span class="'+e.oClasses.sPageJUIPrev+'"></span></a><a class="'+e.oClasses.sPageNextDisabled+
    '" tabindex="'+e.iTabIndex+'" role="button"><span class="'+e.oClasses.sPageJUINext+'"></span></a>';i(j).append(k);var t=i("a",j),k=t[0],t=t[1];e.oApi._fnBindAction(k,{action:"previous"},s);e.oApi._fnBindAction(t,{action:"next"},s);if(!e.aanFeatures.p)j.id=e.sTableId+"_paginate",k.id=e.sTableId+"_previous",t.id=e.sTableId+"_next",k.setAttribute("aria-controls",e.sTableId),t.setAttribute("aria-controls",e.sTableId)},fnUpdate:function(e){if(e.aanFeatures.p)for(var i=e.oClasses,j=e.aanFeatures.p,l=0,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      k=j.length;l<k;l++)if(0!==j[l].childNodes.length)j[l].childNodes[0].className=0===e._iDisplayStart?i.sPagePrevDisabled:i.sPagePrevEnabled,j[l].childNodes[1].className=e.fnDisplayEnd()==e.fnRecordsDisplay()?i.sPageNextDisabled:i.sPageNextEnabled}},iFullNumbersShowPages:5,full_numbers:{fnInit:function(e,j,l){var k=e.oLanguage.oPaginate,s=e.oClasses,t=function(i){e.oApi._fnPageChange(e,i.data.action)&&l(e)};i(j).append('<a  tabindex="'+e.iTabIndex+'" class="'+s.sPageButton+" "+s.sPageFirst+'">'+k.sFirst+
        '</a><a  tabindex="'+e.iTabIndex+'" class="'+s.sPageButton+" "+s.sPagePrevious+'">'+k.sPrevious+'</a><span></span><a tabindex="'+e.iTabIndex+'" class="'+s.sPageButton+" "+s.sPageNext+'">'+k.sNext+'</a><a tabindex="'+e.iTabIndex+'" class="'+s.sPageButton+" "+s.sPageLast+'">'+k.sLast+"</a>");var v=i("a",j),k=v[0],s=v[1],B=v[2],v=v[3];e.oApi._fnBindAction(k,{action:"first"},t);e.oApi._fnBindAction(s,{action:"previous"},t);e.oApi._fnBindAction(B,{action:"next"},t);e.oApi._fnBindAction(v,{action:"last"},
        t);if(!e.aanFeatures.p)j.id=e.sTableId+"_paginate",k.id=e.sTableId+"_first",s.id=e.sTableId+"_previous",B.id=e.sTableId+"_next",v.id=e.sTableId+"_last"},fnUpdate:function(e,l){if(e.aanFeatures.p){var k=j.ext.oPagination.iFullNumbersShowPages,r=Math.floor(k/2),s=Math.ceil(e.fnRecordsDisplay()/e._iDisplayLength),t=Math.ceil(e._iDisplayStart/e._iDisplayLength)+1,v="",B,D=e.oClasses,x,I=e.aanFeatures.p,G=function(i){e.oApi._fnBindAction(this,{page:i+B-1},function(i){e.oApi._fnPageChange(e,i.data.page);
        l(e);i.preventDefault()})};s<k?(B=1,r=s):t<=r?(B=1,r=k):t>=s-r?(B=s-k+1,r=s):(B=t-Math.ceil(k/2)+1,r=B+k-1);for(k=B;k<=r;k++)v+=t!==k?'<a tabindex="'+e.iTabIndex+'" class="'+D.sPageButton+'">'+e.fnFormatNumber(k)+"</a>":'<a tabindex="'+e.iTabIndex+'" class="'+D.sPageButtonActive+'">'+e.fnFormatNumber(k)+"</a>";for(k=0,r=I.length;k<r;k++)0!==I[k].childNodes.length&&(i("span:eq(0)",I[k]).html(v).children("a").each(G),x=I[k].getElementsByTagName("a"),x=[x[0],x[1],x[x.length-2],x[x.length-1]],i(x).removeClass(D.sPageButton+
        " "+D.sPageButtonActive+" "+D.sPageButtonStaticDisabled),i([x[0],x[1]]).addClass(1==t?D.sPageButtonStaticDisabled:D.sPageButton),i([x[2],x[3]]).addClass(0===s||t===s||-1===e._iDisplayLength?D.sPageButtonStaticDisabled:D.sPageButton))}}}});i.extend(j.ext.oSort,{"string-pre":function(e){"string"!=typeof e&&(e="");return e.toLowerCase()},"string-asc":function(e,i){return e<i?-1:e>i?1:0},"string-desc":function(e,i){return e<i?1:e>i?-1:0},"html-pre":function(e){return e.replace(/<.*?>/g,"").toLowerCase()},
    "html-asc":function(e,i){return e<i?-1:e>i?1:0},"html-desc":function(e,i){return e<i?1:e>i?-1:0},"date-pre":function(e){e=Date.parse(e);if(isNaN(e)||""===e)e=Date.parse("01/01/1970 00:00:00");return e},"date-asc":function(e,i){return e-i},"date-desc":function(e,i){return i-e},"numeric-pre":function(e){return"-"==e||""===e?0:1*e},"numeric-asc":function(e,i){return e-i},"numeric-desc":function(e,i){return i-e}});i.extend(j.ext.aTypes,[function(e){if("number"===typeof e)return"numeric";if("string"!==
    typeof e)return null;var i,j=!1;i=e.charAt(0);if(-1=="0123456789-".indexOf(i))return null;for(var k=1;k<e.length;k++){i=e.charAt(k);if(-1=="0123456789.".indexOf(i))return null;if("."==i){if(j)return null;j=!0}}return"numeric"},function(e){var i=Date.parse(e);return null!==i&&!isNaN(i)||"string"===typeof e&&0===e.length?"date":null},function(e){return"string"===typeof e&&-1!=e.indexOf("<")&&-1!=e.indexOf(">")?"html":null}]);i.fn.DataTable=j;i.fn.dataTable=j;i.fn.dataTableSettings=j.settings;i.fn.dataTableExt=
    j.ext})(jQuery,window,document,void 0);
/**
 * Created by Kais NEFFATI on 8/19/2016.
 */
$(document).ready(function(){
    $('.bxslider').bxSlider({
        minSlides: 4,
        maxSlides: 4,
        auto: true,
        speed: 5000,
        autoHover:true,
        slideWidth: 700,
        slideMargin: 10,
        adaptiveHeight: true
    });

    size_li = $("#myList li").size();
    x=3;
    $('#myList li:lt('+x+')').show();
    $('#loadMore').click(function () {
        x= (x+5 <= size_li) ? x+5 : size_li;
        $('#myList li:lt('+x+')').show();
        $('#showLess').show();
        if(x == size_li){
            $('#loadMore').hide();
        }
    });
    $('#showLess').click(function () {
        x=(x-5<0) ? 3 : x-5;
        $('#myList li').not(':lt('+x+')').hide();
        $('#loadMore').show();
        $('#showLess').show();
        if(x == 3){
            $('#showLess').hide();
        }
    });
});