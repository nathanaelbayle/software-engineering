(window.webpackJsonp=window.webpackJsonp||[]).push([[294],{1794:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return T}));var l=a(696),n=a.n(l),o=a(366),i=a(434),r=a(473),c=a(646),s=a(6),u=a(452),d=a(608),p=a.n(d),m=a(445),f=a.n(m),b=a(393),g=a(373),h=a(419),v=a(396),y=a(368),S=a(384),j=a(823),x=a(638),k=a(378),O=a(598),w=a(477),_=a.n(w),E=a(382),N=a(796),P=a(388),q=a(391);var M=Object(E.b)((function({languages:e}){return{languages:e}}))((function(e){const{languages:t,profilesByLanguage:a,unavailableLanguages:l}=e,[{language:n,key:i},r]=o.useState({language:void 0,key:void 0}),c=Object(s.k)("project_quality_profile.add_language_modal.title"),u=_()(Object.keys(a),l).map(e=>({value:e,label:t[e].name})),d=void 0!==n?a[n].map(e=>({value:e.key,label:e.name,disabled:0===e.activeRuleCount})):[];return o.createElement(q.a,{header:c,onClose:e.onClose,onSubmit:()=>{n&&i&&e.onSubmit(i)}},({onCloseClick:e,onFormSubmit:t,submitting:a})=>o.createElement(o.Fragment,null,o.createElement("div",{className:"modal-head"},o.createElement("h2",null,c)),o.createElement("form",{onSubmit:t},o.createElement("div",{className:"modal-body"},o.createElement("div",{className:"big-spacer-bottom"},o.createElement("div",{className:"little-spacer-bottom"},o.createElement("label",{className:"text-bold",htmlFor:"language"},Object(s.k)("project_quality_profile.add_language_modal.choose_language"))),o.createElement(P.b,{className:"abs-width-300",clearable:!1,disabled:a,id:"language",onChange:({value:e})=>r({language:e}),options:u,value:n})),o.createElement("div",{className:"big-spacer-bottom"},o.createElement("div",{className:"little-spacer-bottom"},o.createElement("label",{className:"text-bold",htmlFor:"profiles"},Object(s.k)("project_quality_profile.add_language_modal.choose_profile"))),o.createElement(P.b,{className:"abs-width-300",clearable:!1,disabled:a||!n,id:"profiles",onChange:({value:e})=>r({language:n,key:e}),options:d,optionRenderer:e=>o.createElement(N.a,{option:e,disabledReason:Object(s.k)("project_quality_profile.add_language_modal.no_active_rules"),disableTooltipOverlay:()=>o.createElement(o.Fragment,null,o.createElement("p",null,Object(s.k)("project_quality_profile.add_language_modal.profile_unavailable_no_active_rules")),e.label&&n&&o.createElement(g.c,{to:Object(k.E)(e.label,n)},Object(s.k)("project_quality_profile.add_language_modal.go_to_profile")))}),value:i}))),o.createElement("div",{className:"modal-foot"},a&&o.createElement("i",{className:"spinner spacer-right"}),o.createElement(y.h,{disabled:a||!n||!i},Object(s.k)("save")),o.createElement(y.c,{disabled:a,onClick:e},Object(s.k)("cancel"))))))})),C=a(433),L=a(379);function I(e){var t;const{availableProfiles:a,component:l,currentProfile:n,usesDefault:i}=e,[r,c]=o.useState(i?"-1":n.key),u=a.find(e=>e.isDefault);if(void 0===u)return null;const d=Object(s.l)("project_quality_profile.change_lang_X_profile",n.languageName),p=a.map(e=>({value:e.key,label:e.name,disabled:0===e.activeRuleCount})),m="-1"===r,f=i?!m:r!==n.key,b=!(null===(t=l.qualityProfiles)||void 0===t?void 0:t.some(e=>m?e.key===u.key:e.key===r));return o.createElement(q.a,{header:d,onClose:e.onClose,onSubmit:()=>e.onSubmit(m?void 0:r,n.key)},({onCloseClick:e,onFormSubmit:t,submitting:a})=>o.createElement(o.Fragment,null,o.createElement("div",{className:"modal-head"},o.createElement("h2",null,d)),o.createElement("form",{onSubmit:t},o.createElement("div",{className:"modal-body"},o.createElement("div",{className:"big-spacer-bottom"},o.createElement(C.a,{className:"display-flex-start",checked:m,disabled:a,onCheck:()=>c("-1"),value:"-1"},o.createElement("div",{className:"spacer-left"},o.createElement("div",{className:"little-spacer-bottom"},Object(s.k)("project_quality_profile.always_use_default")),o.createElement("div",{className:"display-flex-center"},o.createElement("span",{className:"text-muted spacer-right"},Object(s.k)("current_noun"),":"),u.name,u.isBuiltIn&&o.createElement(O.a,{className:"spacer-left"}))))),o.createElement("div",{className:"big-spacer-bottom"},o.createElement(C.a,{className:"display-flex-start",checked:!m,disabled:a,onCheck:()=>c(m?n.key:r),value:n.key},o.createElement("div",{className:"spacer-left"},o.createElement("div",{className:"little-spacer-bottom"},Object(s.k)("project_quality_profile.always_use_specific")),o.createElement("div",{className:"display-flex-center"},o.createElement(P.b,{className:"abs-width-300",clearable:!1,disabled:a||m,onChange:({value:e})=>c(e),options:p,optionRenderer:e=>o.createElement(N.a,{option:e,disabledReason:Object(s.k)("project_quality_profile.add_language_modal.no_active_rules"),disableTooltipOverlay:()=>o.createElement(o.Fragment,null,o.createElement("p",null,Object(s.k)("project_quality_profile.add_language_modal.profile_unavailable_no_active_rules")),e.label&&o.createElement(g.c,{to:Object(k.E)(e.label,n.language)},Object(s.k)("project_quality_profile.add_language_modal.go_to_profile")))}),value:m?n.key:r}))))),b&&o.createElement(L.a,{variant:"warning"},Object(s.k)("project_quality_profile.requires_new_analysis"))),o.createElement("div",{className:"modal-foot"},a&&o.createElement("i",{className:"spinner spacer-right"}),o.createElement(y.h,{disabled:a||!f},Object(s.k)("save")),o.createElement(y.c,{disabled:a,onClick:e},Object(s.k)("cancel"))))))}function D(e){const{allProfiles:t,component:a,loading:l,showProjectProfileInModal:n,projectProfiles:i,showAddLanguageModal:r}=e,c=f()(t,"language"),u=p()(i,e=>e.profile.languageName);return o.createElement("div",{className:"page page-limited",id:"project-quality-profiles"},o.createElement(v.a,{suggestions:"project_quality_profiles"}),o.createElement(b.a,{defer:!1,title:Object(s.k)("project_quality_profiles.page")}),o.createElement(h.a,{anchor:"profiles_main"}),o.createElement("header",{className:"page-header"},o.createElement("div",{className:"page-title display-flex-center"},o.createElement("h1",null,Object(s.k)("project_quality_profiles.page")," "),o.createElement(S.a,{className:"spacer-left",overlay:o.createElement("div",{className:"big-padded-top big-padded-bottom"},Object(s.k)("quality_profiles.list.projects.help"))}))),o.createElement("div",{className:"boxed-group"},o.createElement("h2",{className:"boxed-group-header"},Object(s.k)("project_quality_profile.subtitle")),o.createElement("div",{className:"boxed-group-inner"},o.createElement("p",{className:"big-spacer-bottom"},Object(s.k)("project_quality_profiles.page.description")),l&&o.createElement("i",{className:"spinner spacer-left"}),!l&&u.length>0&&o.createElement("table",{className:"data zebra"},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,Object(s.k)("language")),o.createElement("th",{className:"thin nowrap"},Object(s.k)("project_quality_profile.current")),o.createElement("th",{className:"thin nowrap text-right"},Object(s.k)("coding_rules.filters.activation.active_rules")),o.createElement("th",{"aria-label":Object(s.k)("actions")}))),o.createElement("tbody",null,u.map(t=>{const{profile:a,selected:l}=t;return o.createElement("tr",{key:a.language},o.createElement("td",null,a.languageName),o.createElement("td",{className:"thin nowrap"},o.createElement("span",{className:"display-inline-flex-center"},!l&&a.isDefault?o.createElement("em",null,Object(s.k)("project_quality_profile.instance_default")):o.createElement(o.Fragment,null,a.name,a.isBuiltIn&&o.createElement(O.a,{className:"spacer-left"})))),o.createElement("td",{className:"nowrap text-right"},o.createElement(g.c,{to:Object(k.H)({activation:"true",qprofile:a.key})},a.activeRuleCount)),o.createElement("td",{className:"text-right"},o.createElement(y.a,{onClick:()=>{e.onOpenSetProfileModal(t)}},o.createElement(j.a,{className:"spacer-right"}),Object(s.k)("project_quality_profile.change_profile"))))}))),o.createElement("div",{className:"big-spacer-top"},o.createElement("h2",null,Object(s.k)("project_quality_profile.add_language.title")),o.createElement("p",{className:"spacer-top big-spacer-bottom"},Object(s.k)("project_quality_profile.add_language.description")),o.createElement(y.a,{disabled:l,onClick:e.onOpenAddLanguageModal},o.createElement(x.a,{className:"little-spacer-right"}),Object(s.k)("project_quality_profile.add_language.action"))),n&&o.createElement(I,{availableProfiles:c[n.profile.language],component:a,currentProfile:n.profile,onClose:e.onCloseModal,onSubmit:e.onSetProfile,usesDefault:!n.selected}),r&&i&&o.createElement(M,{profilesByLanguage:c,onClose:e.onCloseModal,onSubmit:e.onAddLanguage,unavailableLanguages:i.map(e=>e.profile.language)}))))}class T extends o.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:!0},this.fetchProfiles=async()=>{const{component:e}=this.props,t=await Object(i.A)().then(({profiles:e})=>e).catch(()=>[]),a=(await Promise.all(t.map(t=>Object(i.r)({key:t.key,q:e.name,selected:"selected"}).then(({results:a})=>{var l;return{selected:Boolean(null===(l=a.find(t=>t.key===e.key))||void 0===l?void 0:l.selected),profile:t}}).catch(()=>({selected:!1,profile:t}))))).filter(({selected:e})=>e).map(({profile:e})=>({profile:e,selected:!0})),l=n()(e.qualityProfiles,a.map(e=>e.profile),"key").filter(({language:e})=>!a.some(t=>t.profile.language===e)).map(({key:e})=>{const a=t.find(t=>t.key===e);if(a){if(a.isDefault)return{profile:a,selected:!1};{const e=t.find(e=>e.isDefault&&e.language===a.language);return e&&{profile:e,selected:!1}}}}).filter(u.a);this.mounted&&this.setState({allProfiles:t,projectProfiles:[...a,...l],loading:!1})},this.handleOpenSetProfileModal=e=>{this.setState({showProjectProfileInModal:e})},this.handleOpenAddLanguageModal=()=>{this.setState({showAddLanguageModal:!0})},this.handleCloseModal=()=>{this.setState({showAddLanguageModal:!1,showProjectProfileInModal:void 0})},this.handleAddLanguage=async e=>{const{component:t}=this.props,{allProfiles:a=[]}=this.state,l=a.find(t=>t.key===e);if(l)try{await Object(i.d)(l,t.key),this.mounted&&(this.setState(({projectProfiles:e=[]})=>({projectProfiles:[...e,{profile:l,selected:!0}],showAddLanguageModal:!1})),Object(r.a)(Object(s.l)("project_quality_profile.successfully_updated",l.languageName)))}catch(e){this.mounted&&this.setState({showAddLanguageModal:!1})}},this.handleSetProfile=async(e,t)=>{const{component:a}=this.props,{allProfiles:l=[],projectProfiles:n=[]}=this.state,o=e&&l.find(t=>t.key===e),c=n.find(e=>e.profile.key===t),d=l.find(e=>e.isDefault&&e.language===(null==c?void 0:c.profile.language));if(void 0===d||void 0===c)return;let p;if(o){p=o;try{await Object(i.d)(o,a.key)}catch(e){p=c.profile}}else if(void 0===e&&(p=d,c.selected))try{await Object(i.m)(c.profile,a.key)}catch(e){p=c.profile}if(this.mounted){const a=[...n.filter(e=>e.profile.key!==t),p&&{profile:p,selected:void 0!==e}].filter(u.a);this.setState({projectProfiles:a,showProjectProfileInModal:void 0}),Object(r.a)(Object(s.l)("project_quality_profile.successfully_updated",d.languageName))}}}componentDidMount(){this.mounted=!0,this.checkPermissions()?this.fetchProfiles():Object(c.a)()}componentWillUnmount(){this.mounted=!1}checkPermissions(){const{configuration:e}=this.props.component;return!!(e&&e.showQualityProfiles)}render(){if(!this.checkPermissions())return null;const{allProfiles:e,loading:t,showProjectProfileInModal:a,projectProfiles:l,showAddLanguageModal:n}=this.state;return o.createElement(D,{allProfiles:e,component:this.props.component,loading:t,onAddLanguage:this.handleAddLanguage,onCloseModal:this.handleCloseModal,onOpenAddLanguageModal:this.handleOpenAddLanguageModal,onOpenSetProfileModal:this.handleOpenSetProfileModal,onSetProfile:this.handleSetProfile,projectProfiles:l,showAddLanguageModal:n,showProjectProfileInModal:a})}}},384:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var l=a(367),n=a(366),o=a(375),i=a(438),r=(a(400),a(374));function c(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},o=Object.keys(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function s(e){let{size:t=12}=e,a=c(e,["size"]);return n.createElement("div",{className:l("help-tooltip",a.className)},n.createElement(r.a,{mouseLeaveDelay:.25,onShow:a.onShow,overlay:a.overlay,placement:a.placement},n.createElement("span",{className:"display-inline-flex-center"},a.children||n.createElement(i.a,{fill:o.colors.gray71,size:t}))))}},388:function(e,t,a){"use strict";a.d(t,"b",(function(){return d})),a.d(t,"a",(function(){return p}));var l=a(366),n=a(380),o=a(368);a(407);function i(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},o=Object.keys(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const r=a.e(354).then(a.bind(null,469)),c=Object(n.a)(()=>r),s=Object(n.a)(()=>r.then(e=>({default:e.Creatable})));Object(n.a)(()=>r.then(e=>({default:e.Async})));function u(){return l.createElement(o.d,{className:"button-tiny spacer-left text-middle",iconProps:{size:12}})}function d(e){let{innerRef:t}=e,a=i(e,["innerRef"]);const n=!!a.clearable&&Boolean(a.value);return l.createElement(c,Object.assign({},a,{clearable:n,clearRenderer:u,ref:t}))}function p(e){return l.createElement(s,Object.assign({},e,{clearRenderer:u}))}},391:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var l=a(366),n=a(389);function o(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},o=Object.keys(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}class i extends l.Component{constructor(){super(...arguments),this.mounted=!1,this.state={submitting:!1},this.stopSubmitting=()=>{this.mounted&&this.setState({submitting:!1})},this.handleCloseClick=e=>{e&&(e.preventDefault(),e.currentTarget.blur()),this.props.onClose()},this.handleFormSubmit=e=>{e.preventDefault(),this.submit()},this.handleSubmitClick=e=>{e&&(e.preventDefault(),e.currentTarget.blur()),this.submit()},this.submit=()=>{const e=this.props.onSubmit();e&&(this.setState({submitting:!0}),e.then(this.stopSubmitting,this.stopSubmitting))}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const e=this.props,{children:t,header:a,onClose:i,onSubmit:r}=e,c=o(e,["children","header","onClose","onSubmit"]);return l.createElement(n.a,Object.assign({contentLabel:a,onRequestClose:i},c),t({onCloseClick:this.handleCloseClick,onFormSubmit:this.handleFormSubmit,onSubmitClick:this.handleSubmitClick,submitting:this.state.submitting}))}}},396:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var l=a(366),n=a(435);function o({suggestions:e}){return l.createElement(n.a.Consumer,null,({addSuggestions:t,removeSuggestions:a})=>l.createElement(i,{addSuggestions:t,removeSuggestions:a,suggestions:e}))}class i extends l.PureComponent{componentDidMount(){this.props.addSuggestions(this.props.suggestions)}componentDidUpdate(e){e.suggestions!==this.props.suggestions&&(this.props.removeSuggestions(this.props.suggestions),this.props.addSuggestions(e.suggestions))}componentWillUnmount(){this.props.removeSuggestions(this.props.suggestions)}render(){return null}}},400:function(e,t,a){var l=a(369),n=a(401);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var o={insert:"head",singleton:!1},i=(l(n,o),n.locals?n.locals:{});e.exports=i},401:function(e,t,a){(t=a(370)(!1)).push([e.i,".help-tooltip{display:inline-flex;align-items:center;vertical-align:middle}.help-toolip-link{display:block;width:12px;height:12px;border:none}",""]),e.exports=t},407:function(e,t,a){var l=a(369),n=a(408);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var o={insert:"head",singleton:!1},i=(l(n,o),n.locals?n.locals:{});e.exports=i},408:function(e,t,a){(t=a(370)(!1)).push([e.i,".Select{position:relative;display:inline-block;vertical-align:middle;font-size:12px;text-align:left}.Select,.Select div,.Select input,.Select span{box-sizing:border-box}.Select.is-disabled>.Select-control{background-color:#ebebeb!important;border-color:#ddd!important}.Select.is-disabled>.Select-control:hover{box-shadow:none!important}.Select.is-disabled .Select-arrow-zone{cursor:not-allowed!important;pointer-events:none!important}.Select.is-disabled .Select-placeholder,.Select.is-disabled .Select-value{color:#bbb!important}.Select-control{position:relative;display:table;width:100%;height:24px;line-height:22px;border:1px solid #cdcdcd;border-collapse:separate;border-radius:2px;background-color:#fff;color:#333;cursor:default;outline:none;overflow:hidden}.is-searchable.is-open>.Select-control{cursor:text}.is-open>.Select-control{border-bottom-right-radius:0;border-bottom-left-radius:0;background:#fff}.is-open>.Select-control>.Select-arrow{border-color:transparent transparent #999;border-width:0 5px 5px}.is-searchable.is-focused:not(.is-open)>.Select-control{cursor:text}.is-focused:not(.is-open)>.Select-control{border-color:#4b9fd5}.Select-placeholder{color:#666}.Select-placeholder,:not(.Select--multi)>.Select-control .Select-value{bottom:0;left:0;line-height:23px;padding-left:8px;padding-right:24px;position:absolute;right:0;top:0;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.Select-value [class^=icon-]{padding-top:5px}.Select-value img,.Select-value svg{padding-top:3px}.Select-option [class^=icon-],.Select-option img,.Select-option svg{padding-top:2px}.has-value.is-pseudo-focused:not(.Select--multi)>.Select-control>.Select-value .Select-value-label,.has-value:not(.Select--multi)>.Select-control>.Select-value .Select-value-label{color:#333}.has-value.is-pseudo-focused:not(.Select--multi)>.Select-control>.Select-value a.Select-value-label,.has-value:not(.Select--multi)>.Select-control>.Select-value a.Select-value-label{cursor:pointer;text-decoration:none}.has-value.is-pseudo-focused:not(.Select--multi)>.Select-control>.Select-value a.Select-value-label:focus,.has-value.is-pseudo-focused:not(.Select--multi)>.Select-control>.Select-value a.Select-value-label:hover,.has-value:not(.Select--multi)>.Select-control>.Select-value a.Select-value-label:focus,.has-value:not(.Select--multi)>.Select-control>.Select-value a.Select-value-label:hover{color:#007eff;outline:none;text-decoration:underline}.Select-input{vertical-align:top;height:22px;padding-left:8px;padding-right:8px;outline:none}.Select-input>input{background:none transparent;border:0;cursor:default;display:inline-block;font-family:inherit;font-size:12px;height:22px;margin:0;outline:none;padding:0;box-shadow:none;-webkit-appearance:none}.is-focused .Select-input>input{cursor:text}.has-value.is-pseudo-focused .Select-input{opacity:0}.Select-control:not(.is-searchable)>.Select-input{outline:none}.Select-loading-zone{cursor:pointer;display:table-cell;position:relative;text-align:center;vertical-align:middle;width:16px}.Select-loading{animation:Select-animation-spin .4s linear infinite;box-sizing:border-box;border-radius:50%;border:2px solid #ccc;border-right-color:#333;display:inline-block}.Select-clear-zone,.Select-loading{width:16px;height:16px;position:relative;vertical-align:middle}.Select-clear-zone{animation:Select-animation-fadeIn .2s;color:#999;cursor:pointer;display:table-cell;text-align:center;padding-right:4px}.Select-clear-zone:hover .Select-clear{background-image:url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTQgMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxLjQxNCI+PHBhdGggZD0iTTEzLjk2OSAxLjQwNkw4LjM5IDYuOTg0bDUuNTc4IDUuNTc5LTEuNDA2IDEuNDA2TDYuOTg0IDguMzlsLTUuNTc4IDUuNTc4TDAgMTIuNTYzbDUuNTc4LTUuNTc5TDAgMS40MDYgMS40MDYgMGw1LjU3OCA1LjU3OEwxMi41NjMgMGwxLjQwNiAxLjQwNnoiIGZpbGw9IiNlNzE0MzgiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvc3ZnPg==)}.Select-clear{display:block;width:9px;height:9px;background-image:url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTQgMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxLjQxNCI+PHBhdGggZD0iTTEzLjk2OSAxLjQwNkw4LjM5IDYuOTg0bDUuNTc4IDUuNTc5LTEuNDA2IDEuNDA2TDYuOTg0IDguMzlsLTUuNTc4IDUuNTc4TDAgMTIuNTYzbDUuNTc4LTUuNTc5TDAgMS40MDYgMS40MDYgMGw1LjU3OCA1LjU3OEwxMi41NjMgMGwxLjQwNiAxLjQwNnoiIGZpbGw9IiM5OTkiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvc3ZnPg==);background-size:9px 9px;text-indent:-9999px}.Select--multi .Select-clear-zone{width:17px}.Select-arrow-zone{cursor:pointer;display:table-cell;position:relative;text-align:center;vertical-align:middle;width:20px;padding-right:5px}.Select-arrow{border-color:#999 transparent transparent;border-style:solid;border-width:4px 4px 2px;display:inline-block;height:0;width:0}.is-open .Select-arrow,.Select-arrow-zone:hover>.Select-arrow{border-top-color:#666}@keyframes Select-animation-fadeIn{0%{opacity:0}to{opacity:1}}.Select-menu-outer{border-bottom-right-radius:4px;border-bottom-left-radius:4px;background-color:#fff;border:1px solid #ccc;border-top-color:#e6e6e6;box-sizing:border-box;margin-top:-1px;max-height:200px;position:absolute;top:100%;width:100%;z-index:7500;-webkit-overflow-scrolling:touch;box-shadow:0 6px 12px rgba(0,0,0,.175)}.Select-menu{max-height:198px;padding:5px 0;overflow-y:auto}.Select-option{display:block;line-height:20px;padding:0 8px;box-sizing:border-box;color:#333;font-size:12px;cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.Select-option:last-child{border-bottom-right-radius:2px;border-bottom-left-radius:2px}.Select-option.is-focused{background-color:#f3f3f3}.Select-option.is-disabled{cursor:default;opacity:.4;font-style:italic}.Select-noresults{box-sizing:border-box;color:#999;cursor:default;display:block;padding:8px 10px}.Select--multi .Select-value{background-color:rgba(0,126,255,.08);border-radius:2px;border:1px solid rgba(0,126,255,.24);color:#333;display:inline-block;font-size:12px;line-height:14px;margin:1px 4px 1px 1px;vertical-align:top}.Select-value-label{font-size:12px}.is-searchable.is-open .Select-value-label{opacity:.5}.Select-big .Select-control{padding-top:4px;padding-bottom:4px}.Select-big .Select-placeholder{margin-top:4px;margin-bottom:4px}.Select-big .Select-value-label{display:inline-block;margin-top:7px;line-height:16px}.Select-big .Select-option{padding:7px 8px;line-height:16px}.Select-big img,.Select-big svg{padding-top:0}.Select--multi .Select-value-icon,.Select--multi .Select-value-label{display:inline-block;vertical-align:middle}.Select--multi .Select-value-label{display:inline-block;max-width:200px;border-bottom-right-radius:2px;border-top-right-radius:2px;cursor:default;padding:2px 5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.Select--multi a.Select-value-label{color:#007eff;cursor:pointer;text-decoration:none}.Select--multi a.Select-value-label:hover{text-decoration:underline}.Select--multi .Select-value-icon{cursor:pointer;border-bottom-left-radius:2px;border-top-left-radius:2px;border-right:1px solid rgba(0,126,255,.24);padding:1px 5px}.Select--multi .Select-value-icon:focus,.Select--multi .Select-value-icon:hover{background-color:rgba(0,113,230,.08);color:#0071e6}.Select--multi .Select-value-icon:active{background-color:rgba(0,126,255,.24)}.Select--multi.is-disabled .Select-value{background-color:#fcfcfc;border:1px solid #e3e3e3;color:#333}.Select--multi.is-disabled .Select-value-icon{cursor:not-allowed;border-right:1px solid #e3e3e3}.Select--multi.is-disabled .Select-value-icon:active,.Select--multi.is-disabled .Select-value-icon:focus,.Select--multi.is-disabled .Select-value-icon:hover{background-color:#fcfcfc}.Select-aria-only{display:none}@keyframes Select-animation-spin{to{transform:rotate(1turn)}}",""]),e.exports=t},413:function(e,t,a){var l=a(449),n=a(7);e.exports=function(e){return n(e)&&l(e)}},418:function(e,t,a){var l=a(23),n=a(22),o=a(488),i=a(1);e.exports=function(e,t){return(i(e)?l:o)(e,n(t,3))}},419:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var l=a(366),n=a(6),o=a(476);function i(e){return l.createElement(o.a.Consumer,null,({addA11ySkipLink:t,removeA11ySkipLink:a})=>l.createElement(r,Object.assign({addA11ySkipLink:t,removeA11ySkipLink:a},e)))}class r extends l.PureComponent{constructor(){super(...arguments),this.getLink=()=>{const{anchor:e,label:t=Object(n.k)("skip_to_content"),weight:a}=this.props;return{key:e,label:t,weight:a}}}componentDidMount(){this.props.addA11ySkipLink(this.getLink())}componentWillUnmount(){this.props.removeA11ySkipLink(this.getLink())}render(){const{anchor:e}=this.props;return l.createElement("span",{id:"a11y_target__".concat(e)})}}},420:function(e,t,a){var l=a(49),n=a(486),o=a(487),i=a(23),r=a(51),c=a(50);e.exports=function(e,t,a,s){var u=-1,d=n,p=!0,m=e.length,f=[],b=t.length;if(!m)return f;a&&(t=i(t,r(a))),s?(d=o,p=!1):t.length>=200&&(d=c,p=!1,t=new l(t));e:for(;++u<m;){var g=e[u],h=null==a?g:a(g);if(g=s||0!==g?g:0,p&&h==h){for(var v=b;v--;)if(t[v]===h)continue e;f.push(g)}else d(t,h,s)||f.push(g)}return f}},433:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var l=a(367),n=a(366);a(439);class o extends n.PureComponent{constructor(){super(...arguments),this.handleClick=e=>{e.preventDefault(),this.props.disabled||this.props.onCheck(this.props.value)}}render(){const{className:e,checked:t,children:a,disabled:o}=this.props;return n.createElement("a",{"aria-checked":t,className:l("display-inline-flex-center link-radio",e,{disabled:o}),href:"#",onClick:this.handleClick,role:"radio"},n.createElement("i",{className:l("icon-radio","spacer-right",{"is-checked":t})}),a)}}},434:function(e,t,a){"use strict";a.d(t,"A",(function(){return u})),a.d(t,"s",(function(){return d})),a.d(t,"j",(function(){return p})),a.d(t,"y",(function(){return m})),a.d(t,"r",(function(){return f})),a.d(t,"q",(function(){return b})),a.d(t,"C",(function(){return g})),a.d(t,"x",(function(){return h})),a.d(t,"i",(function(){return v})),a.d(t,"l",(function(){return y})),a.d(t,"g",(function(){return S})),a.d(t,"t",(function(){return j})),a.d(t,"u",(function(){return x})),a.d(t,"o",(function(){return k})),a.d(t,"n",(function(){return O})),a.d(t,"p",(function(){return w})),a.d(t,"h",(function(){return _})),a.d(t,"d",(function(){return E})),a.d(t,"m",(function(){return N})),a.d(t,"B",(function(){return P})),a.d(t,"z",(function(){return q})),a.d(t,"c",(function(){return M})),a.d(t,"w",(function(){return C})),a.d(t,"b",(function(){return L})),a.d(t,"v",(function(){return I})),a.d(t,"e",(function(){return D})),a.d(t,"f",(function(){return T})),a.d(t,"a",(function(){return A})),a.d(t,"k",(function(){return z}));var l=a(418),n=a.n(l),o=a(381),i=a(512),r=a(4);function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function u(e){return Object(r.d)("/api/qualityprofiles/search",e).catch(o.a)}function d({compareToSonarWay:e,profile:{key:t}}){return Object(r.d)("/api/qualityprofiles/show",{compareToSonarWay:e,key:t})}function p(e){return Object(r.j)("/api/qualityprofiles/create",e).catch(o.a)}function m(e){return Object(r.j)("/api/qualityprofiles/restore",e).catch(o.a)}function f(e){return Object(r.d)("/api/qualityprofiles/projects",e).catch(o.a)}function b({language:e,name:t}){return Object(r.d)("/api/qualityprofiles/inheritance",{language:e,qualityProfile:t}).catch(o.a)}function g({language:e,name:t}){return Object(r.i)("/api/qualityprofiles/set_default",{language:e,qualityProfile:t})}function h(e,t){return Object(r.i)("/api/qualityprofiles/rename",{key:e,name:t}).catch(o.a)}function v(e,t){return Object(r.j)("/api/qualityprofiles/copy",{fromKey:e,toName:t}).catch(o.a)}function y({language:e,name:t}){return Object(r.i)("/api/qualityprofiles/delete",{language:e,qualityProfile:t}).catch(o.a)}function S({language:e,name:t},a){return Object(r.i)("/api/qualityprofiles/change_parent",{language:e,qualityProfile:t,parentQualityProfile:a?a.name:void 0}).catch(o.a)}function j({language:e,name:t}){const a=Object.entries({language:e,qualityProfile:t}).map(([e,t])=>"".concat(e,"=").concat(encodeURIComponent(t))).join("&");return"/api/qualityprofiles/backup?".concat(a)}function x({key:e},{language:t,name:a}){const l=Object.entries({exporterKey:e,language:t,qualityProfile:a}).map(([e,t])=>"".concat(e,"=").concat(encodeURIComponent(t))).join("&");return"/api/qualityprofiles/export?".concat(l)}function k(){return Object(r.d)("/api/qualityprofiles/importers").then(e=>e.importers,o.a)}function O(){return Object(r.d)("/api/qualityprofiles/exporters").then(e=>e.exporters)}function w(e,t,{language:a,name:l},n){return Object(r.d)("/api/qualityprofiles/changelog",{since:e,to:t,language:a,qualityProfile:l,p:n})}function _(e,t){return Object(r.d)("/api/qualityprofiles/compare",{leftKey:e,rightKey:t})}function E({language:e,name:t},a){return Object(r.i)("/api/qualityprofiles/add_project",{language:e,qualityProfile:t,project:a}).catch(o.a)}function N({language:e,name:t},a){return Object(r.i)("/api/qualityprofiles/remove_project",{language:e,qualityProfile:t,project:a}).catch(o.a)}function P(e){return Object(r.d)("/api/qualityprofiles/search_users",e).catch(o.a)}function q(e){return Object(r.d)("/api/qualityprofiles/search_groups",e).catch(o.a)}function M(e){return Object(r.i)("/api/qualityprofiles/add_user",e).catch(o.a)}function C(e){return Object(r.i)("/api/qualityprofiles/remove_user",e).catch(o.a)}function L(e){return Object(r.i)("/api/qualityprofiles/add_group",e).catch(o.a)}function I(e){return Object(r.i)("/api/qualityprofiles/remove_group",e).catch(o.a)}function D(e){return Object(r.j)("/api/qualityprofiles/activate_rules",e)}function T(e){return Object(r.j)("/api/qualityprofiles/deactivate_rules",e)}function A(e){const t=e.params&&n()(e.params,(e,t)=>"".concat(t,"=").concat(Object(i.a)(e))).join(";");return Object(r.i)("/api/qualityprofiles/activate_rule",function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{params:t})).catch(o.a)}function z(e){return Object(r.i)("/api/qualityprofiles/deactivate_rule",e).catch(o.a)}},439:function(e,t,a){var l=a(369),n=a(446);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var o={insert:"head",singleton:!1},i=(l(n,o),n.locals?n.locals:{});e.exports=i},445:function(e,t,a){var l=a(52),n=a(481),o=Object.prototype.hasOwnProperty,i=n((function(e,t,a){o.call(e,a)?e[a].push(t):l(e,a,[t])}));e.exports=i},446:function(e,t,a){(t=a(370)(!1)).push([e.i,'.icon-radio{position:relative;display:inline-block;vertical-align:top;width:14px;height:14px;margin:1px;border:1px solid #cdcdcd;border-radius:12px;box-sizing:border-box;transition:border-color .3s ease;flex-shrink:0}.icon-radio:after{position:absolute;top:2px;left:2px;display:block;width:8px;height:8px;border-radius:8px;background-color:#236a97;content:"";opacity:0;transition:opacity .3s ease}.link-radio .icon-radio.is-checked:after{opacity:1}.link-radio{border-bottom:none}.link-radio,.link-radio:not(.disabled):active,.link-radio:not(.disabled):focus,.link-radio:not(.disabled):hover{color:inherit}.link-radio:not(.disabled):hover>.icon-radio{border-color:#4b9fd5}.link-radio.disabled,.link-radio.disabled:hover,.link-radio.disabled label{color:#bbb;cursor:not-allowed}.link-radio.disabled .icon-radio:after{background-color:#ebebeb}',""]),e.exports=t},473:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var l=a(448),n=a(455);function o(e){Object(n.default)().dispatch(l.b(e))}},477:function(e,t,a){var l=a(420),n=a(485),o=a(450),i=a(413),r=o((function(e,t){return i(e)?l(e,n(t,1,i,!0)):[]}));e.exports=r},512:function(e,t,a){"use strict";function l(e){const t=e.replace(/"/g,'\\"');return'"'.concat(t,'"')}a.d(t,"a",(function(){return l}))},598:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var l=a(367),n=a(366),o=a(374),i=a(6);function r({className:e,tooltip:t=!0}){const a=n.createElement("div",{className:l("badge badge-info",e)},Object(i.k)("quality_profiles.built_in"));return t?n.createElement(o.a,{overlay:Object(i.k)("quality_profiles.built_in.description")},a):a}},638:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var l=a(366),n=a(372);function o(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},o=Object.keys(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function i(e){let{fill:t="currentColor"}=e,a=o(e,["fill"]);return l.createElement(n.a,Object.assign({},a),l.createElement("path",{d:"M8 1c3.863 0 7 3.137 7 7s-3.137 7-7 7-7-3.137-7-7 3.137-7 7-7zm3.726 7.985A.274.274 0 0 0 12 8.711V7.289a.274.274 0 0 0-.274-.274H8.985V4.274A.274.274 0 0 0 8.711 4H7.289a.274.274 0 0 0-.274.274v2.741H4.274A.274.274 0 0 0 4 7.289v1.422c0 .152.123.274.274.274h2.741v2.741c0 .151.122.274.274.274h1.422a.274.274 0 0 0 .274-.274V8.985h2.741z",style:{fill:t}}))}},646:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var l=a(496),n=a(575),o=a(455);function i(){const e=Object(o.default)(),t=Object(l.a)(),a=window.location.pathname+window.location.search+window.location.hash;e.dispatch(Object(n.c)()),t.replace({pathname:"/sessions/new",query:{return_to:a}})}},696:function(e,t,a){var l=a(420),n=a(485),o=a(22),i=a(450),r=a(413),c=a(665),s=i((function(e,t){var a=c(t);return r(a)&&(a=void 0),r(e)?l(e,n(t,1,r,!0),o(a,2)):[]}));e.exports=s},796:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var l=a(366),n=a(374);function o(e){const{option:t,disableTooltipOverlay:a,disabledReason:o,className:i=""}=e,r=t.label||t.value;return t.disabled?l.createElement(n.a,{overlay:a(),placement:"left"},l.createElement("span",{className:i},r,void 0!==o&&l.createElement("em",{className:"small little-spacer-left"},"(",o,")"))):l.createElement("span",{className:i},r)}}}]);
//# sourceMappingURL=294.m.b8d15636.chunk.js.map