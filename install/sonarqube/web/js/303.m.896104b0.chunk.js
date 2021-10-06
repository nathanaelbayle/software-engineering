(window.webpackJsonp=window.webpackJsonp||[]).push([[303],{1793:function(e,t,o){"use strict";o.r(t);var i=o(382),s=o(385),r=o(405),n=o.n(r),l=o(366),a=o(393),c=o(538),p=o(920),d=o(6),u=(o(918),o(404)),m=o(941),h=o(919),b=o(629);class g extends l.PureComponent{constructor(){super(...arguments),this.handleToggleUser=(e,t)=>e.permissions.includes(t)?this.props.revokePermissionFromUser(e.login,t):this.props.grantPermissionToUser(e.login,t),this.handleToggleGroup=(e,t)=>e.permissions.includes(t)?this.props.revokePermissionFromGroup(e.name,t):this.props.grantPermissionToGroup(e.name,t),this.handleSelectPermission=e=>{this.props.onPermissionSelect(e)}}render(){const{filter:e,groups:t,groupsPaging:o,users:i,usersPaging:s}=this.props;let r=b.a[this.props.component.qualifier];"public"===this.props.visibility&&(r=n()(r,"user","codeviewer"));const a=Object(b.d)(r,"projects_role");let c=0,p=0;return"users"!==e&&(c+=t.length,p+=o?o.total:t.length),"groups"!==e&&(c+=i.length,p+=s?s.total:i.length),l.createElement(l.Fragment,null,l.createElement(m.a,{filter:this.props.filter,groups:this.props.groups,onSelectPermission:this.handleSelectPermission,onToggleGroup:this.handleToggleGroup,onToggleUser:this.handleToggleUser,permissions:a,query:this.props.query,selectedPermission:this.props.selectedPermission,users:this.props.users},l.createElement(h.a,{filter:this.props.filter,onFilter:this.props.onFilterChange,onSearch:this.props.onQueryChange,query:this.props.query})),l.createElement(u.a,{count:c,loadMore:this.props.onLoadMore,total:p}))}}var f=o(368),S=o(390),v=o(921);class x extends l.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={applyTemplateModal:!1},this.handleApplyTemplate=()=>{this.setState({applyTemplateModal:!0})},this.handleApplyTemplateClose=()=>{this.mounted&&this.setState({applyTemplateModal:!1})}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const{component:e}=this.props,{configuration:t}=e,o=null!=t&&t.canApplyPermissionTemplate;let i=Object(d.k)("roles.page.description2");Object(S.e)(e.qualifier)?i=Object(d.k)("roles.page.description_portfolio"):Object(S.d)(e.qualifier)&&(i=Object(d.k)("roles.page.description_application"));const s="TRK"===e.qualifier&&e.visibility?Object(d.k)("visibility",e.visibility,"description",e.qualifier):void 0;return l.createElement("header",{className:"page-header"},l.createElement("h1",{className:"page-title"},Object(d.k)("permissions.page")),this.props.loading&&l.createElement("i",{className:"spinner"}),o&&l.createElement("div",{className:"page-actions"},l.createElement(f.a,{className:"js-apply-template",onClick:this.handleApplyTemplate},Object(d.k)("projects_role.apply_template")),this.state.applyTemplateModal&&l.createElement(v.a,{onApply:this.props.loadHolders,onClose:this.handleApplyTemplateClose,project:e})),l.createElement("div",{className:"page-description"},l.createElement("p",null,i),s&&l.createElement("p",null,s)))}}var y=o(410),k=o(379);function j({component:e,onClose:t,onConfirm:o}){const{qualifier:i}=e;return l.createElement(y.a,{confirmButtonText:Object(d.k)("projects_role.turn_project_to_public",i),header:Object(d.l)("projects_role.turn_x_to_public",e.name),onClose:t,onConfirm:o},l.createElement(k.a,{variant:"warning"},Object(d.k)("projects_role.are_you_sure_to_turn_project_to_public.warning",i)),l.createElement("p",null,Object(d.k)("projects_role.are_you_sure_to_turn_project_to_public",i)))}function P(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function T(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?P(Object(o),!0).forEach((function(t){w(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):P(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function w(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}class O extends l.PureComponent{constructor(e){super(e),this.mounted=!1,this.stopLoading=()=>{this.mounted&&this.setState({loading:!1})},this.loadUsersAndGroups=(e,t)=>{const{component:o}=this.props,{filter:i,query:s,selectedPermission:r}=this.state,n="groups"!==i?c.n({projectKey:o.key,q:s||void 0,permission:r,p:e}):Promise.resolve({paging:void 0,users:[]}),l="users"!==i?c.m({projectKey:o.key,q:s||void 0,permission:r,p:t}):Promise.resolve({paging:void 0,groups:[]});return Promise.all([n,l])},this.loadHolders=()=>(this.setState({loading:!0}),this.loadUsersAndGroups().then(([e,t])=>{this.mounted&&this.setState({groups:t.groups,groupsPaging:t.paging,loading:!1,users:e.users,usersPaging:e.paging})},this.stopLoading)),this.onLoadMore=()=>{const{usersPaging:e,groupsPaging:t}=this.state;return this.setState({loading:!0}),this.loadUsersAndGroups(e?e.pageIndex+1:1,t?t.pageIndex+1:1).then(([e,t])=>{this.mounted&&this.setState(({groups:o,users:i})=>({groups:[...o,...t.groups],groupsPaging:t.paging,loading:!1,users:[...i,...e.users],usersPaging:e.paging}))},this.stopLoading)},this.handleFilterChange=e=>{this.mounted&&this.setState({filter:e},this.loadHolders)},this.handleQueryChange=e=>{this.mounted&&this.setState({query:e},this.loadHolders)},this.handlePermissionSelect=e=>{this.mounted&&this.setState(t=>({selectedPermission:t.selectedPermission===e?void 0:e}),this.loadHolders)},this.addPermissionToGroup=(e,t)=>this.state.groups.map(o=>o.name===e?T({},o,{permissions:[...o.permissions,t]}):o),this.addPermissionToUser=(e,t)=>this.state.users.map(o=>o.login===e?T({},o,{permissions:[...o.permissions,t]}):o),this.removePermissionFromGroup=(e,t)=>this.state.groups.map(o=>o.name===e?T({},o,{permissions:n()(o.permissions,t)}):o),this.removePermissionFromUser=(e,t)=>this.state.users.map(o=>o.login===e?T({},o,{permissions:n()(o.permissions,t)}):o),this.grantPermissionToGroup=(e,t)=>this.mounted?(this.setState({loading:!0,groups:this.addPermissionToGroup(e,t)}),c.o({projectKey:this.props.component.key,groupName:e,permission:t}).then(this.stopLoading,()=>{this.mounted&&this.setState({loading:!1,groups:this.removePermissionFromGroup(e,t)})})):Promise.resolve(),this.grantPermissionToUser=(e,t)=>this.mounted?(this.setState({loading:!0,users:this.addPermissionToUser(e,t)}),c.p({projectKey:this.props.component.key,login:e,permission:t}).then(this.stopLoading,()=>{this.mounted&&this.setState({loading:!1,users:this.removePermissionFromUser(e,t)})})):Promise.resolve(),this.revokePermissionFromGroup=(e,t)=>this.mounted?(this.setState({loading:!0,groups:this.removePermissionFromGroup(e,t)}),c.t({projectKey:this.props.component.key,groupName:e,permission:t}).then(this.stopLoading,()=>{this.mounted&&this.setState({loading:!1,groups:this.addPermissionToGroup(e,t)})})):Promise.resolve(),this.revokePermissionFromUser=(e,t)=>this.mounted?(this.setState({loading:!0,users:this.removePermissionFromUser(e,t)}),c.u({projectKey:this.props.component.key,login:e,permission:t}).then(this.stopLoading,()=>{this.mounted&&this.setState({loading:!1,users:this.addPermissionToUser(e,t)})})):Promise.resolve(),this.handleVisibilityChange=e=>{"public"===e?this.openDisclaimer():this.turnProjectToPrivate()},this.turnProjectToPublic=()=>{this.props.onComponentChange({visibility:"public"}),c.e(this.props.component.key,"public").then(()=>{this.loadHolders()},()=>{this.props.onComponentChange({visibility:"private"})})},this.turnProjectToPrivate=()=>{this.props.onComponentChange({visibility:"private"}),c.e(this.props.component.key,"private").then(()=>{this.loadHolders()},()=>{this.props.onComponentChange({visibility:"public"})})},this.openDisclaimer=()=>{this.mounted&&this.setState({disclaimer:!0})},this.closeDisclaimer=()=>{this.mounted&&this.setState({disclaimer:!1})},this.state={disclaimer:!1,filter:"all",groups:[],loading:!0,query:"",users:[]}}componentDidMount(){this.mounted=!0,this.loadHolders()}componentWillUnmount(){this.mounted=!1}render(){const{component:e}=this.props,t=e.configuration&&e.configuration.canUpdateProjectVisibilityToPrivate;return l.createElement("div",{className:"page page-limited",id:"project-permissions-page"},l.createElement(a.a,{defer:!1,title:Object(d.k)("permissions.page")}),l.createElement(x,{component:e,loadHolders:this.loadHolders,loading:this.state.loading}),l.createElement("div",null,l.createElement(p.a,{canTurnToPrivate:t,className:"big-spacer-top big-spacer-bottom",onChange:this.handleVisibilityChange,visibility:e.visibility}),this.state.disclaimer&&l.createElement(j,{component:e,onClose:this.closeDisclaimer,onConfirm:this.turnProjectToPublic})),l.createElement(g,{component:e,filter:this.state.filter,grantPermissionToGroup:this.grantPermissionToGroup,grantPermissionToUser:this.grantPermissionToUser,groups:this.state.groups,groupsPaging:this.state.groupsPaging,onFilterChange:this.handleFilterChange,onLoadMore:this.onLoadMore,onPermissionSelect:this.handlePermissionSelect,onQueryChange:this.handleQueryChange,query:this.state.query,revokePermissionFromGroup:this.revokePermissionFromGroup,revokePermissionFromUser:this.revokePermissionFromUser,selectedPermission:this.state.selectedPermission,users:this.state.users,usersPaging:this.state.usersPaging,visibility:e.visibility}))}}t.default=Object(i.b)(e=>({currentUser:Object(s.getCurrentUser)(e)}))(O)},388:function(e,t,o){"use strict";o.d(t,"b",(function(){return d})),o.d(t,"a",(function(){return u}));var i=o(366),s=o(380),r=o(368);o(407);function n(e,t){if(null==e)return{};var o,i,s=function(e,t){if(null==e)return{};var o,i,s={},r=Object.keys(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||(s[o]=e[o]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}const l=o.e(354).then(o.bind(null,469)),a=Object(s.a)(()=>l),c=Object(s.a)(()=>l.then(e=>({default:e.Creatable})));Object(s.a)(()=>l.then(e=>({default:e.Async})));function p(){return i.createElement(r.d,{className:"button-tiny spacer-left text-middle",iconProps:{size:12}})}function d(e){let{innerRef:t}=e,o=n(e,["innerRef"]);const s=!!o.clearable&&Boolean(o.value);return i.createElement(a,Object.assign({},o,{clearable:s,clearRenderer:p,ref:t}))}function u(e){return i.createElement(c,Object.assign({},e,{clearRenderer:p}))}},391:function(e,t,o){"use strict";o.d(t,"a",(function(){return n}));var i=o(366),s=o(389);function r(e,t){if(null==e)return{};var o,i,s=function(e,t){if(null==e)return{};var o,i,s={},r=Object.keys(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||(s[o]=e[o]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}class n extends i.Component{constructor(){super(...arguments),this.mounted=!1,this.state={submitting:!1},this.stopSubmitting=()=>{this.mounted&&this.setState({submitting:!1})},this.handleCloseClick=e=>{e&&(e.preventDefault(),e.currentTarget.blur()),this.props.onClose()},this.handleFormSubmit=e=>{e.preventDefault(),this.submit()},this.handleSubmitClick=e=>{e&&(e.preventDefault(),e.currentTarget.blur()),this.submit()},this.submit=()=>{const e=this.props.onSubmit();e&&(this.setState({submitting:!0}),e.then(this.stopSubmitting,this.stopSubmitting))}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const e=this.props,{children:t,header:o,onClose:n,onSubmit:l}=e,a=r(e,["children","header","onClose","onSubmit"]);return i.createElement(s.a,Object.assign({contentLabel:o,onRequestClose:n},a),t({onCloseClick:this.handleCloseClick,onFormSubmit:this.handleFormSubmit,onSubmitClick:this.handleSubmitClick,submitting:this.state.submitting}))}}},397:function(e,t,o){"use strict";o.d(t,"a",(function(){return n}));var i=o(367),s=o(366),r=o(6);function n({className:e}){return s.createElement("em",{"aria-label":Object(r.k)("field_required"),className:i("mandatory little-spacer-left",e)},"*")}},399:function(e,t,o){"use strict";o.d(t,"a",(function(){return l}));var i=o(367),s=o(366),r=o(371),n=o(6);function l({className:e}){return s.createElement("div",{"aria-hidden":!0,className:i("text-muted",e)},s.createElement(r.FormattedMessage,{id:"fields_marked_with_x_required",defaultMessage:Object(n.k)("fields_marked_with_x_required"),values:{star:s.createElement("em",{className:"mandatory"},"*")}}))}},404:function(e,t,o){"use strict";o.d(t,"a",(function(){return c}));var i=o(367),s=o(366),r=o(6),n=o(377),l=o(376),a=o(368);function c(e){const{className:t,count:o,loading:c,needReload:p,total:d,ready:u=!0}=e,m=d&&d>o;let h;return p&&e.reload?h=s.createElement(a.a,{className:"spacer-left","data-test":"reload",disabled:c,onClick:e.reload},Object(r.k)("reload")):m&&e.loadMore&&(h=s.createElement(a.a,{className:"spacer-left",disabled:c,"data-test":"show-more",onClick:e.loadMore},Object(r.k)("show_more"))),s.createElement("footer",{className:i("spacer-top note text-center",{"new-loading":!u},t)},Object(r.l)("x_of_y_shown",Object(n.formatMeasure)(o,"INT",null),Object(n.formatMeasure)(d,"INT",null)),h,c&&s.createElement(l.a,{className:"text-bottom spacer-left position-absolute"}))}},405:function(e,t,o){var i=o(420),s=o(450),r=o(413),n=s((function(e,t){return r(e)?i(e,t):[]}));e.exports=n},407:function(e,t,o){var i=o(369),s=o(408);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[e.i,s,""]]);var r={insert:"head",singleton:!1},n=(i(s,r),s.locals?s.locals:{});e.exports=n},408:function(e,t,o){(t=o(370)(!1)).push([e.i,".Select{position:relative;display:inline-block;vertical-align:middle;font-size:12px;text-align:left}.Select,.Select div,.Select input,.Select span{box-sizing:border-box}.Select.is-disabled>.Select-control{background-color:#ebebeb!important;border-color:#ddd!important}.Select.is-disabled>.Select-control:hover{box-shadow:none!important}.Select.is-disabled .Select-arrow-zone{cursor:not-allowed!important;pointer-events:none!important}.Select.is-disabled .Select-placeholder,.Select.is-disabled .Select-value{color:#bbb!important}.Select-control{position:relative;display:table;width:100%;height:24px;line-height:22px;border:1px solid #cdcdcd;border-collapse:separate;border-radius:2px;background-color:#fff;color:#333;cursor:default;outline:none;overflow:hidden}.is-searchable.is-open>.Select-control{cursor:text}.is-open>.Select-control{border-bottom-right-radius:0;border-bottom-left-radius:0;background:#fff}.is-open>.Select-control>.Select-arrow{border-color:transparent transparent #999;border-width:0 5px 5px}.is-searchable.is-focused:not(.is-open)>.Select-control{cursor:text}.is-focused:not(.is-open)>.Select-control{border-color:#4b9fd5}.Select-placeholder{color:#666}.Select-placeholder,:not(.Select--multi)>.Select-control .Select-value{bottom:0;left:0;line-height:23px;padding-left:8px;padding-right:24px;position:absolute;right:0;top:0;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.Select-value [class^=icon-]{padding-top:5px}.Select-value img,.Select-value svg{padding-top:3px}.Select-option [class^=icon-],.Select-option img,.Select-option svg{padding-top:2px}.has-value.is-pseudo-focused:not(.Select--multi)>.Select-control>.Select-value .Select-value-label,.has-value:not(.Select--multi)>.Select-control>.Select-value .Select-value-label{color:#333}.has-value.is-pseudo-focused:not(.Select--multi)>.Select-control>.Select-value a.Select-value-label,.has-value:not(.Select--multi)>.Select-control>.Select-value a.Select-value-label{cursor:pointer;text-decoration:none}.has-value.is-pseudo-focused:not(.Select--multi)>.Select-control>.Select-value a.Select-value-label:focus,.has-value.is-pseudo-focused:not(.Select--multi)>.Select-control>.Select-value a.Select-value-label:hover,.has-value:not(.Select--multi)>.Select-control>.Select-value a.Select-value-label:focus,.has-value:not(.Select--multi)>.Select-control>.Select-value a.Select-value-label:hover{color:#007eff;outline:none;text-decoration:underline}.Select-input{vertical-align:top;height:22px;padding-left:8px;padding-right:8px;outline:none}.Select-input>input{background:none transparent;border:0;cursor:default;display:inline-block;font-family:inherit;font-size:12px;height:22px;margin:0;outline:none;padding:0;box-shadow:none;-webkit-appearance:none}.is-focused .Select-input>input{cursor:text}.has-value.is-pseudo-focused .Select-input{opacity:0}.Select-control:not(.is-searchable)>.Select-input{outline:none}.Select-loading-zone{cursor:pointer;display:table-cell;position:relative;text-align:center;vertical-align:middle;width:16px}.Select-loading{animation:Select-animation-spin .4s linear infinite;box-sizing:border-box;border-radius:50%;border:2px solid #ccc;border-right-color:#333;display:inline-block}.Select-clear-zone,.Select-loading{width:16px;height:16px;position:relative;vertical-align:middle}.Select-clear-zone{animation:Select-animation-fadeIn .2s;color:#999;cursor:pointer;display:table-cell;text-align:center;padding-right:4px}.Select-clear-zone:hover .Select-clear{background-image:url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTQgMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxLjQxNCI+PHBhdGggZD0iTTEzLjk2OSAxLjQwNkw4LjM5IDYuOTg0bDUuNTc4IDUuNTc5LTEuNDA2IDEuNDA2TDYuOTg0IDguMzlsLTUuNTc4IDUuNTc4TDAgMTIuNTYzbDUuNTc4LTUuNTc5TDAgMS40MDYgMS40MDYgMGw1LjU3OCA1LjU3OEwxMi41NjMgMGwxLjQwNiAxLjQwNnoiIGZpbGw9IiNlNzE0MzgiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvc3ZnPg==)}.Select-clear{display:block;width:9px;height:9px;background-image:url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTQgMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxLjQxNCI+PHBhdGggZD0iTTEzLjk2OSAxLjQwNkw4LjM5IDYuOTg0bDUuNTc4IDUuNTc5LTEuNDA2IDEuNDA2TDYuOTg0IDguMzlsLTUuNTc4IDUuNTc4TDAgMTIuNTYzbDUuNTc4LTUuNTc5TDAgMS40MDYgMS40MDYgMGw1LjU3OCA1LjU3OEwxMi41NjMgMGwxLjQwNiAxLjQwNnoiIGZpbGw9IiM5OTkiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvc3ZnPg==);background-size:9px 9px;text-indent:-9999px}.Select--multi .Select-clear-zone{width:17px}.Select-arrow-zone{cursor:pointer;display:table-cell;position:relative;text-align:center;vertical-align:middle;width:20px;padding-right:5px}.Select-arrow{border-color:#999 transparent transparent;border-style:solid;border-width:4px 4px 2px;display:inline-block;height:0;width:0}.is-open .Select-arrow,.Select-arrow-zone:hover>.Select-arrow{border-top-color:#666}@keyframes Select-animation-fadeIn{0%{opacity:0}to{opacity:1}}.Select-menu-outer{border-bottom-right-radius:4px;border-bottom-left-radius:4px;background-color:#fff;border:1px solid #ccc;border-top-color:#e6e6e6;box-sizing:border-box;margin-top:-1px;max-height:200px;position:absolute;top:100%;width:100%;z-index:7500;-webkit-overflow-scrolling:touch;box-shadow:0 6px 12px rgba(0,0,0,.175)}.Select-menu{max-height:198px;padding:5px 0;overflow-y:auto}.Select-option{display:block;line-height:20px;padding:0 8px;box-sizing:border-box;color:#333;font-size:12px;cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.Select-option:last-child{border-bottom-right-radius:2px;border-bottom-left-radius:2px}.Select-option.is-focused{background-color:#f3f3f3}.Select-option.is-disabled{cursor:default;opacity:.4;font-style:italic}.Select-noresults{box-sizing:border-box;color:#999;cursor:default;display:block;padding:8px 10px}.Select--multi .Select-value{background-color:rgba(0,126,255,.08);border-radius:2px;border:1px solid rgba(0,126,255,.24);color:#333;display:inline-block;font-size:12px;line-height:14px;margin:1px 4px 1px 1px;vertical-align:top}.Select-value-label{font-size:12px}.is-searchable.is-open .Select-value-label{opacity:.5}.Select-big .Select-control{padding-top:4px;padding-bottom:4px}.Select-big .Select-placeholder{margin-top:4px;margin-bottom:4px}.Select-big .Select-value-label{display:inline-block;margin-top:7px;line-height:16px}.Select-big .Select-option{padding:7px 8px;line-height:16px}.Select-big img,.Select-big svg{padding-top:0}.Select--multi .Select-value-icon,.Select--multi .Select-value-label{display:inline-block;vertical-align:middle}.Select--multi .Select-value-label{display:inline-block;max-width:200px;border-bottom-right-radius:2px;border-top-right-radius:2px;cursor:default;padding:2px 5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.Select--multi a.Select-value-label{color:#007eff;cursor:pointer;text-decoration:none}.Select--multi a.Select-value-label:hover{text-decoration:underline}.Select--multi .Select-value-icon{cursor:pointer;border-bottom-left-radius:2px;border-top-left-radius:2px;border-right:1px solid rgba(0,126,255,.24);padding:1px 5px}.Select--multi .Select-value-icon:focus,.Select--multi .Select-value-icon:hover{background-color:rgba(0,113,230,.08);color:#0071e6}.Select--multi .Select-value-icon:active{background-color:rgba(0,126,255,.24)}.Select--multi.is-disabled .Select-value{background-color:#fcfcfc;border:1px solid #e3e3e3;color:#333}.Select--multi.is-disabled .Select-value-icon{cursor:not-allowed;border-right:1px solid #e3e3e3}.Select--multi.is-disabled .Select-value-icon:active,.Select--multi.is-disabled .Select-value-icon:focus,.Select--multi.is-disabled .Select-value-icon:hover{background-color:#fcfcfc}.Select-aria-only{display:none}@keyframes Select-animation-spin{to{transform:rotate(1turn)}}",""]),e.exports=t},410:function(e,t,o){"use strict";o.d(t,"a",(function(){return c}));var i=o(366),s=o(6),r=o(376),n=o(368),l=o(482),a=o(391);class c extends i.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.handleSubmit=()=>{const e=this.props.onConfirm(this.props.confirmData);if(e)return e.then(this.props.onClose,()=>{});this.props.onClose()},this.renderModalContent=({onCloseClick:e,onFormSubmit:t,submitting:o})=>{const{children:a,confirmButtonText:c,confirmDisable:p,header:d,headerDescription:u,isDestructive:m,cancelButtonText:h=Object(s.k)("cancel")}=this.props;return i.createElement(l.a,null,i.createElement("form",{onSubmit:t},i.createElement("header",{className:"modal-head"},i.createElement("h2",null,d),u),i.createElement("div",{className:"modal-body"},a),i.createElement("footer",{className:"modal-foot"},i.createElement(r.a,{className:"spacer-right",loading:o}),i.createElement(n.h,{autoFocus:!0,className:m?"button-red":void 0,disabled:o||p},c),i.createElement(n.g,{disabled:o,onClick:e},h))))}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const{header:e,onClose:t,noBackdrop:o,size:s}=this.props,r={header:e,onClose:t,noBackdrop:o,size:s};return i.createElement(a.a,Object.assign({onSubmit:this.handleSubmit},r),this.renderModalContent)}}},413:function(e,t,o){var i=o(449),s=o(7);e.exports=function(e){return s(e)&&i(e)}},420:function(e,t,o){var i=o(49),s=o(486),r=o(487),n=o(23),l=o(51),a=o(50);e.exports=function(e,t,o,c){var p=-1,d=s,u=!0,m=e.length,h=[],b=t.length;if(!m)return h;o&&(t=n(t,l(o))),c?(d=r,u=!1):t.length>=200&&(d=a,u=!1,t=new i(t));e:for(;++p<m;){var g=e[p],f=null==o?g:o(g);if(g=c||0!==g?g:0,u&&f==f){for(var S=b;S--;)if(t[S]===f)continue e;h.push(g)}else d(t,f,c)||h.push(g)}return h}},433:function(e,t,o){"use strict";o.d(t,"a",(function(){return r}));var i=o(367),s=o(366);o(439);class r extends s.PureComponent{constructor(){super(...arguments),this.handleClick=e=>{e.preventDefault(),this.props.disabled||this.props.onCheck(this.props.value)}}render(){const{className:e,checked:t,children:o,disabled:r}=this.props;return s.createElement("a",{"aria-checked":t,className:i("display-inline-flex-center link-radio",e,{disabled:r}),href:"#",onClick:this.handleClick,role:"radio"},s.createElement("i",{className:i("icon-radio","spacer-right",{"is-checked":t})}),o)}}},439:function(e,t,o){var i=o(369),s=o(446);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[e.i,s,""]]);var r={insert:"head",singleton:!1},n=(i(s,r),s.locals?s.locals:{});e.exports=n},446:function(e,t,o){(t=o(370)(!1)).push([e.i,'.icon-radio{position:relative;display:inline-block;vertical-align:top;width:14px;height:14px;margin:1px;border:1px solid #cdcdcd;border-radius:12px;box-sizing:border-box;transition:border-color .3s ease;flex-shrink:0}.icon-radio:after{position:absolute;top:2px;left:2px;display:block;width:8px;height:8px;border-radius:8px;background-color:#236a97;content:"";opacity:0;transition:opacity .3s ease}.link-radio .icon-radio.is-checked:after{opacity:1}.link-radio{border-bottom:none}.link-radio,.link-radio:not(.disabled):active,.link-radio:not(.disabled):focus,.link-radio:not(.disabled):hover{color:inherit}.link-radio:not(.disabled):hover>.icon-radio{border-color:#4b9fd5}.link-radio.disabled,.link-radio.disabled:hover,.link-radio.disabled label{color:#bbb;cursor:not-allowed}.link-radio.disabled .icon-radio:after{background-color:#ebebeb}',""]),e.exports=t},544:function(e,t,o){var i=o(481)((function(e,t,o){e[o?0:1].push(t)}),(function(){return[[],[]]}));e.exports=i},920:function(e,t,o){"use strict";o.d(t,"a",(function(){return l}));var i=o(367),s=o(366),r=o(433),n=o(6);class l extends s.PureComponent{render(){return s.createElement("div",{className:i(this.props.className)},["public","private"].map(e=>s.createElement(r.a,{className:"huge-spacer-right visibility-".concat(e),key:e,value:e,checked:this.props.visibility===e,onCheck:this.props.onChange,disabled:"private"===e&&!this.props.canTurnToPrivate},s.createElement("div",null,Object(n.k)("visibility",e),this.props.showDetails&&s.createElement("p",{className:"note"},Object(n.k)("visibility",e,"description.long"))))))}}},921:function(e,t,o){"use strict";o.d(t,"a",(function(){return m}));var i=o(366),s=o(538),r=o(368),n=o(388),l=o(391),a=o(379),c=o(376),p=o(397),d=o(399),u=o(6);class m extends i.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={done:!1,loading:!0},this.fetchPermissionTemplates=()=>{Object(s.l)().then(({permissionTemplates:e})=>{this.mounted&&this.setState({loading:!1,permissionTemplates:e})},()=>{this.mounted&&this.setState({loading:!1})})},this.handleSubmit=()=>this.state.permissionTemplate?Object(s.b)({projectKey:this.props.project.key,templateId:this.state.permissionTemplate}).then(()=>{this.mounted&&(this.props.onApply&&this.props.onApply(),this.setState({done:!0}))}):Promise.reject(void 0),this.handlePermissionTemplateChange=({value:e})=>{this.setState({permissionTemplate:e})}}componentDidMount(){this.mounted=!0,this.fetchPermissionTemplates()}componentWillUnmount(){this.mounted=!1}render(){const e=Object(u.l)("projects_role.apply_template_to_xxx",this.props.project.name);return i.createElement(l.a,{header:e,onClose:this.props.onClose,onSubmit:this.handleSubmit,size:"small"},({onCloseClick:t,onFormSubmit:o,submitting:s})=>i.createElement("form",{id:"project-permissions-apply-template-form",onSubmit:o},i.createElement("header",{className:"modal-head"},i.createElement("h2",null,e)),i.createElement("div",{className:"modal-body"},this.state.done&&i.createElement(a.a,{variant:"success"},Object(u.k)("projects_role.apply_template.success")),this.state.loading&&i.createElement("i",{className:"spinner"}),!this.state.done&&!this.state.loading&&i.createElement(i.Fragment,null,i.createElement(d.a,{className:"modal-field"}),i.createElement("div",{className:"modal-field"},i.createElement("label",{htmlFor:"project-permissions-template"},Object(u.k)("template"),i.createElement(p.a,null)),this.state.permissionTemplates&&i.createElement(n.b,{clearable:!1,id:"project-permissions-template",onChange:this.handlePermissionTemplateChange,options:this.state.permissionTemplates.map(e=>({label:e.name,value:e.id})),value:this.state.permissionTemplate})))),i.createElement("footer",{className:"modal-foot"},i.createElement(c.a,{className:"spacer-right",loading:s}),!this.state.done&&i.createElement(r.h,{disabled:s||!this.state.permissionTemplate},Object(u.k)("apply")),i.createElement(r.g,{onClick:t},Object(u.k)(this.state.done?"close":"cancel")))))}}}}]);
//# sourceMappingURL=303.m.896104b0.chunk.js.map