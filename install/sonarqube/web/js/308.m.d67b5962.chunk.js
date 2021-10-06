(window.webpackJsonp=window.webpackJsonp||[]).push([[308],{1811:function(e,t,n){"use strict";n.r(t),n.d(t,"Security",(function(){return m}));var r=n(366),o=n(393),s=n(382),a=n(856),i=n(6),c=n(385),l=n(509),u=n(944);function d({login:e}){return r.createElement("div",{className:"boxed-group"},r.createElement("h2",null,Object(i.k)("users.tokens")),r.createElement("div",{className:"boxed-group-inner"},r.createElement("div",{className:"big-spacer-bottom big-spacer-right markdown"},r.createElement(l.a,{message:Object(i.k)("my_account.tokens_description")})),r.createElement(u.a,{deleteConfirmation:"modal",login:e})))}function m({user:e}){return r.createElement("div",{className:"account-body account-container"},r.createElement(o.a,{defer:!1,title:Object(i.k)("my_account.security")}),r.createElement(d,{login:e.login}),e.local&&r.createElement("section",{className:"boxed-group"},r.createElement("h2",{className:"spacer-bottom"},Object(i.k)("my_profile.password.title")),r.createElement(a.a,{className:"boxed-group-inner",user:e})))}t.default=Object(s.b)(e=>({user:Object(c.getCurrentUser)(e)}))(m)},391:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(366),o=n(389);function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}class a extends r.Component{constructor(){super(...arguments),this.mounted=!1,this.state={submitting:!1},this.stopSubmitting=()=>{this.mounted&&this.setState({submitting:!1})},this.handleCloseClick=e=>{e&&(e.preventDefault(),e.currentTarget.blur()),this.props.onClose()},this.handleFormSubmit=e=>{e.preventDefault(),this.submit()},this.handleSubmitClick=e=>{e&&(e.preventDefault(),e.currentTarget.blur()),this.submit()},this.submit=()=>{const e=this.props.onSubmit();e&&(this.setState({submitting:!0}),e.then(this.stopSubmitting,this.stopSubmitting))}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const e=this.props,{children:t,header:n,onClose:a,onSubmit:i}=e,c=s(e,["children","header","onClose","onSubmit"]);return r.createElement(o.a,Object.assign({contentLabel:n,onRequestClose:a},c),t({onCloseClick:this.handleCloseClick,onFormSubmit:this.handleFormSubmit,onSubmitClick:this.handleSubmitClick,submitting:this.state.submitting}))}}},392:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return h})),n.d(t,"c",(function(){return p}));var r=n(367),o=n(421),s=n(366),a=n(6),i=n(372);function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function l(e){let{fill:t="currentColor"}=e,n=c(e,["fill"]);return s.createElement(i.a,Object.assign({},n),s.createElement("g",{fill:t,fillRule:"nonzero"},s.createElement("path",{d:"M2.931 15.005V3H2v13h9v-.995z"}),s.createElement("path",{d:"M10 4.015h3V14H4V1h6v3.015zM9 8V6H8v2H6v1h2v2h1V9h2V8H9z"}),s.createElement("path",{d:"M11 1v2h2a2.151 2.151 0 0 0-2-2z"})))}var u=n(368),d=n(374);class m extends s.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={copySuccess:!1},this.setCopyButton=e=>{this.copyButton=e},this.handleSuccessCopy=()=>{this.mounted&&(this.setState({copySuccess:!0}),setTimeout(()=>{this.mounted&&this.setState({copySuccess:!1})},1e3))}}componentDidMount(){this.mounted=!0,this.copyButton&&(this.clipboard=new o(this.copyButton),this.clipboard.on("success",this.handleSuccessCopy))}componentDidUpdate(){this.clipboard&&this.clipboard.destroy(),this.copyButton&&(this.clipboard=new o(this.copyButton),this.clipboard.on("success",this.handleSuccessCopy))}componentWillUnmount(){this.mounted=!1,this.clipboard&&this.clipboard.destroy()}render(){return this.props.children({setCopyButton:this.setCopyButton,copySuccess:this.state.copySuccess})}}function h({className:e,children:t,copyValue:n}){return s.createElement(m,null,({setCopyButton:o,copySuccess:i})=>s.createElement(d.a,{overlay:Object(a.k)("copied_action"),visible:i},s.createElement(u.a,{className:r("no-select",e),"data-clipboard-text":n,innerRef:o},t||s.createElement(s.Fragment,null,s.createElement(l,{className:"little-spacer-right"}),Object(a.k)("copy")))))}function p(e){const{className:t,copyValue:n}=e;return s.createElement(m,null,({setCopyButton:o,copySuccess:i})=>{var c;return s.createElement(u.b,{"aria-label":null!==(c=e["aria-label"])&&void 0!==c?c:Object(a.k)("copy_to_clipboard"),className:r("no-select",t),"data-clipboard-text":n,innerRef:o,tooltip:Object(a.k)(i?"copied_action":"copy_to_clipboard"),tooltipProps:i?{visible:i}:void 0},s.createElement(l,null))})}},397:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(367),o=n(366),s=n(6);function a({className:e}){return o.createElement("em",{"aria-label":Object(s.k)("field_required"),className:r("mandatory little-spacer-left",e)},"*")}},398:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var r=n(366),o=n(371),s=n(21);const a={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"};function i({children:e,date:t}){return r.createElement(o.FormattedDate,Object.assign({value:Object(s.b)(t)},a),e)}},399:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(367),o=n(366),s=n(371),a=n(6);function i({className:e}){return o.createElement("div",{"aria-hidden":!0,className:r("text-muted",e)},o.createElement(s.FormattedMessage,{id:"fields_marked_with_x_required",defaultMessage:Object(a.k)("fields_marked_with_x_required"),values:{star:o.createElement("em",{className:"mandatory"},"*")}}))}},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(366),o=n(6),s=n(376),a=n(368),i=n(482),c=n(391);class l extends r.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.handleSubmit=()=>{const e=this.props.onConfirm(this.props.confirmData);if(e)return e.then(this.props.onClose,()=>{});this.props.onClose()},this.renderModalContent=({onCloseClick:e,onFormSubmit:t,submitting:n})=>{const{children:c,confirmButtonText:l,confirmDisable:u,header:d,headerDescription:m,isDestructive:h,cancelButtonText:p=Object(o.k)("cancel")}=this.props;return r.createElement(i.a,null,r.createElement("form",{onSubmit:t},r.createElement("header",{className:"modal-head"},r.createElement("h2",null,d),m),r.createElement("div",{className:"modal-body"},c),r.createElement("footer",{className:"modal-foot"},r.createElement(s.a,{className:"spacer-right",loading:n}),r.createElement(a.h,{autoFocus:!0,className:h?"button-red":void 0,disabled:n||u},l),r.createElement(a.g,{disabled:n,onClick:e},p))))}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const{header:e,onClose:t,noBackdrop:n,size:o}=this.props,s={header:e,onClose:t,noBackdrop:n,size:o};return r.createElement(c.a,Object.assign({onSubmit:this.handleSubmit},s),this.renderModalContent)}}},416:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(463),o=n(366),s=n(371),a=n(21),i=n(6),c=n(398);function l(e){const{children:t=(e=>e),date:n,hourPrecision:l}=e;let u=t;if(!n)return o.createElement(o.Fragment,null,t(Object(i.k)("never")));n&&l&&Object(r.differenceInHours)(Date.now(),n)<1&&(u=()=>t(Object(i.k)("less_than_1_hour_ago")));const d=Object(a.b)(n);return o.createElement(c.a,{date:d},e=>o.createElement("span",{title:e},o.createElement(s.FormattedRelative,{value:d},u)))}},421:function(e,t,n){
/*!
 * clipboard.js v2.0.6
 * https://clipboardjs.com/
 * 
 * Licensed MIT © Zeno Rocha
 */
var r;r=function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t){e.exports=function(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var r=window.getSelection(),o=document.createRange();o.selectNodeContents(e),r.removeAllRanges(),r.addRange(o),t=r.toString()}return t}},function(e,t){function n(){}n.prototype={on:function(e,t,n){var r=this.e||(this.e={});return(r[e]||(r[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var r=this;function o(){r.off(e,o),t.apply(n,arguments)}return o._=t,this.on(e,o,n)},emit:function(e){for(var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),r=0,o=n.length;r<o;r++)n[r].fn.apply(n[r].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),r=n[e],o=[];if(r&&t)for(var s=0,a=r.length;s<a;s++)r[s].fn!==t&&r[s].fn._!==t&&o.push(r[s]);return o.length?n[e]=o:delete n[e],this}},e.exports=n,e.exports.TinyEmitter=n},function(e,t,n){var r=n(3),o=n(4);e.exports=function(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!r.string(t))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(e))return function(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}(e,t,n);if(r.nodeList(e))return function(e,t,n){return Array.prototype.forEach.call(e,(function(e){e.addEventListener(t,n)})),{destroy:function(){Array.prototype.forEach.call(e,(function(e){e.removeEventListener(t,n)}))}}}(e,t,n);if(r.string(e))return function(e,t,n){return o(document.body,e,t,n)}(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"==typeof e||e instanceof String},t.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},function(e,t,n){var r=n(5);function o(e,t,n,r,o){var a=s.apply(this,arguments);return e.addEventListener(n,a,o),{destroy:function(){e.removeEventListener(n,a,o)}}}function s(e,t,n,o){return function(n){n.delegateTarget=r(n.target,t),n.delegateTarget&&o.call(e,n)}}e.exports=function(e,t,n,r,s){return"function"==typeof e.addEventListener?o.apply(null,arguments):"function"==typeof n?o.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,(function(e){return o(e,t,n,r,s)})))}},function(e,t){if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}e.exports=function(e,t){for(;e&&9!==e.nodeType;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.resolveOptions(t),this.initSelection()}return a(e,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var e=this,t="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=o()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=o()(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==(void 0===e?"undefined":s(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function(){return this._target}}]),e}(),c=n(1),l=n.n(c),u=n(2),d=n.n(u),m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r.resolveOptions(n),r.listenClick(e),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),h(t,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===m(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=d()(e,"click",(function(e){return t.onClick(e)}))}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new i({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(e){return f("action",e)}},{key:"defaultTarget",value:function(e){var t=f("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return f("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof e?[e]:e,n=!!document.queryCommandSupported;return t.forEach((function(e){n=n&&!!document.queryCommandSupported(e)})),n}}]),t}(l.a);function f(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}t.default=p}]).default},e.exports=r()},424:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c}));var r=n(366),o=n(371),s=n(21);const a={year:"numeric",month:"short",day:"2-digit"},i={year:"numeric",month:"long",day:"numeric"};function c({children:e,date:t,long:n}){return r.createElement(o.FormattedDate,Object.assign({value:Object(s.b)(t)},n?i:a),e)}},442:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(366),o=n(410),s=n(443);function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}class i extends r.PureComponent{constructor(){super(...arguments),this.renderConfirmModal=({onClose:e})=>{const t=this.props,{children:n,modalBody:s,modalHeader:i,modalHeaderDescription:c}=t,l=a(t,["children","modalBody","modalHeader","modalHeaderDescription"]);return r.createElement(o.a,Object.assign({header:i,headerDescription:c,onClose:e},l),s)}}render(){return r.createElement(s.a,{modal:this.renderConfirmModal},this.props.children)}}},443:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(366);class o extends r.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={modal:!1},this.handleButtonClick=()=>{this.setState({modal:!0})},this.handleFormSubmit=e=>{e&&e.preventDefault(),this.setState({modal:!0})},this.handleCloseModal=()=>{this.mounted&&this.setState({modal:!1})}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){return r.createElement(r.Fragment,null,this.props.children({onClick:this.handleButtonClick,onFormSubmit:this.handleFormSubmit}),this.state.modal&&this.props.modal({onClose:this.handleCloseModal}))}}},621:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return i}));var r=n(381),o=n(4);function s(e){return Object(o.d)("/api/user_tokens/search",{login:e}).then(e=>e.userTokens,r.a)}function a(e){return Object(o.j)("/api/user_tokens/generate",e).catch(r.a)}function i(e){return Object(o.i)("/api/user_tokens/revoke",e).catch(r.a)}},856:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(366),o=n(495),s=n(368),a=n(379),i=n(397),c=n(399),l=n(6);class u extends r.Component{constructor(){super(...arguments),this.oldPassword=null,this.password=null,this.passwordConfirmation=null,this.state={success:!1},this.handleSuccessfulChange=()=>{this.oldPassword&&this.password&&this.passwordConfirmation&&(this.oldPassword.value="",this.password.value="",this.passwordConfirmation.value="",this.setState({success:!0,errors:void 0}),this.props.onPasswordChange&&this.props.onPasswordChange())},this.setErrors=e=>{this.setState({success:!1,errors:e})},this.handleChangePassword=e=>{if(e.preventDefault(),!this.oldPassword||!this.password||!this.passwordConfirmation)return;const{user:t}=this.props,n=this.oldPassword.value,r=this.password.value;r!==this.passwordConfirmation.value?(this.password.focus(),this.setErrors([Object(l.k)("user.password_doesnt_match_confirmation")])):Object(o.a)({login:t.login,password:r,previousPassword:n}).then(this.handleSuccessfulChange,()=>{})}}render(){const{className:e}=this.props,{success:t,errors:n}=this.state;return r.createElement("form",{className:e,onSubmit:this.handleChangePassword},t&&r.createElement(a.a,{variant:"success"},Object(l.k)("my_profile.password.changed")),n&&n.map((e,t)=>r.createElement(a.a,{key:t,variant:"error"},e)),r.createElement(c.a,{className:"form-field"}),r.createElement("div",{className:"form-field"},r.createElement("label",{htmlFor:"old_password"},Object(l.k)("my_profile.password.old"),r.createElement(i.a,null)),r.createElement("input",{autoComplete:"off",id:"old_password",name:"old_password",ref:e=>this.oldPassword=e,required:!0,type:"password"})),r.createElement("div",{className:"form-field"},r.createElement("label",{htmlFor:"password"},Object(l.k)("my_profile.password.new"),r.createElement(i.a,null)),r.createElement("input",{autoComplete:"off",id:"password",name:"password",ref:e=>this.password=e,required:!0,type:"password"})),r.createElement("div",{className:"form-field"},r.createElement("label",{htmlFor:"password_confirmation"},Object(l.k)("my_profile.password.confirm"),r.createElement(i.a,null)),r.createElement("input",{autoComplete:"off",id:"password_confirmation",name:"password_confirmation",ref:e=>this.passwordConfirmation=e,required:!0,type:"password"})),r.createElement("div",{className:"form-field"},r.createElement(s.h,{id:"change-password"},Object(l.k)("update_verb"))))}}},944:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var r=n(366),o=n(621),s=n(368),a=n(376),i=n(6),c=n(371),l=n(442),u=n(374),d=n(424),m=n(416),h=n(453);class p extends r.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:!1,showConfirmation:!1},this.handleClick=()=>{this.state.showConfirmation?this.handleRevoke().then(()=>{this.mounted&&this.setState({showConfirmation:!1})}):this.setState({showConfirmation:!0})},this.handleRevoke=()=>(this.setState({loading:!0}),Object(o.c)({login:this.props.login,name:this.props.token.name}).then(()=>this.props.onRevokeToken(this.props.token),()=>{this.mounted&&this.setState({loading:!1})}))}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const{deleteConfirmation:e,token:t}=this.props,{loading:n,showConfirmation:o}=this.state;return r.createElement("tr",null,r.createElement("td",null,r.createElement(u.a,{overlay:t.name},r.createElement("span",null,Object(h.e)(t.name,20)))),r.createElement("td",{className:"nowrap"},r.createElement(m.a,{date:t.lastConnectionDate,hourPrecision:!0})),r.createElement("td",{className:"thin nowrap text-right"},r.createElement(d.a,{date:t.createdAt,long:!0})),r.createElement("td",{className:"thin nowrap text-right"},r.createElement(a.a,{loading:n},r.createElement("i",{className:"deferred-spinner-placeholder"})),"modal"===e?r.createElement(l.a,{confirmButtonText:Object(i.k)("users.tokens.revoke_token"),isDestructive:!0,modalBody:r.createElement(c.FormattedMessage,{defaultMessage:Object(i.k)("users.tokens.sure_X"),id:"users.tokens.sure_X",values:{token:r.createElement("strong",null,t.name)}}),modalHeader:Object(i.k)("users.tokens.revoke_token"),onConfirm:this.handleRevoke},({onClick:e})=>r.createElement(s.a,{className:"spacer-left button-red input-small",disabled:n,onClick:e,title:Object(i.k)("users.tokens.revoke_token")},Object(i.k)("users.tokens.revoke"))):r.createElement(s.a,{className:"button-red input-small spacer-left",disabled:n,onClick:this.handleClick},o?Object(i.k)("users.tokens.sure"):Object(i.k)("users.tokens.revoke"))))}}var f=n(392),b=n(379);function y({token:e}){return r.createElement("div",{className:"panel panel-white big-spacer-top"},r.createElement(b.a,{variant:"warning"},Object(i.l)("users.tokens.new_token_created",e.name)),r.createElement(f.b,{copyValue:e.token}),r.createElement("code",{className:"big-spacer-left text-success"},e.token))}class g extends r.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={generating:!1,loading:!0,newTokenName:"",tokens:[]},this.fetchTokens=()=>{this.setState({loading:!0}),Object(o.b)(this.props.login).then(e=>{this.mounted&&this.setState({loading:!1,tokens:e})},()=>{this.mounted&&this.setState({loading:!1})})},this.updateTokensCount=()=>{this.props.updateTokensCount&&this.props.updateTokensCount(this.props.login,this.state.tokens.length)},this.handleGenerateToken=e=>{e.preventDefault(),this.state.newTokenName.length>0&&(this.setState({generating:!0}),Object(o.a)({name:this.state.newTokenName,login:this.props.login}).then(e=>{this.mounted&&this.setState(t=>{const n=[...t.tokens,{name:e.name,createdAt:e.createdAt}];return{generating:!1,newToken:e,newTokenName:"",tokens:n}},this.updateTokensCount)},()=>{this.mounted&&this.setState({generating:!1})}))},this.handleRevokeToken=e=>{this.setState(t=>({tokens:t.tokens.filter(t=>t.name!==e.name)}),this.updateTokensCount)},this.handleNewTokenChange=e=>this.setState({newTokenName:e.currentTarget.value})}componentDidMount(){this.mounted=!0,this.fetchTokens()}componentWillUnmount(){this.mounted=!1}renderItems(){const{tokens:e}=this.state;return e.length<=0?r.createElement("tr",null,r.createElement("td",{className:"note",colSpan:3},Object(i.k)("users.no_tokens"))):e.map(e=>r.createElement(p,{deleteConfirmation:this.props.deleteConfirmation,key:e.name,login:this.props.login,onRevokeToken:this.handleRevokeToken,token:e}))}render(){const{generating:e,loading:t,newToken:n,newTokenName:o,tokens:c}=this.state,l=r.createElement("tr",null,r.createElement("td",null,r.createElement("i",{className:"spinner"})));return r.createElement(r.Fragment,null,r.createElement("h3",{className:"spacer-bottom"},Object(i.k)("users.generate_tokens")),r.createElement("form",{autoComplete:"off",className:"display-flex-center",id:"generate-token-form",onSubmit:this.handleGenerateToken},r.createElement("input",{className:"input-large spacer-right",maxLength:100,onChange:this.handleNewTokenChange,placeholder:Object(i.k)("users.enter_token_name"),required:!0,type:"text",value:o}),r.createElement(s.h,{className:"js-generate-token",disabled:e||o.length<=0},Object(i.k)("users.generate"))),n&&r.createElement(y,{token:n}),r.createElement("table",{className:"data zebra big-spacer-top"},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,Object(i.k)("name")),r.createElement("th",null,Object(i.k)("my_account.tokens_last_usage")),r.createElement("th",{className:"text-right"},Object(i.k)("created")),r.createElement("th",null))),r.createElement("tbody",null,r.createElement(a.a,{customSpinner:l,loading:t&&c.length<=0},this.renderItems()))))}}}}]);
//# sourceMappingURL=308.m.d67b5962.chunk.js.map