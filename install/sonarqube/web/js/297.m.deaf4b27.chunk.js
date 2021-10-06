(window.webpackJsonp=window.webpackJsonp||[]).push([[297],{1601:function(e,t,n){var a=n(369),r=n(1602);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},l=(a(r,i),r.locals?r.locals:{});e.exports=l},1602:function(e,t,n){(t=n(370)(!1)).push([e.i,".marketplace-editions{display:flex;flex-direction:row;margin-left:-8px;margin-right:-8px}.marketplace-edition{position:relative;flex:1;display:flex;flex-direction:column;justify-content:space-between;margin-left:8px;margin-right:8px;max-width:50%}.marketplace-edition .markdown img{width:16px}.marketplace-edition .markdown h3{font-size:14px;margin-top:0}.marketplace-edition-badge{position:absolute;right:-1px;top:16px;padding:4px 8px;border-radius:2px 0 0 2px;height:inherit;line-height:inherit}.marketplace-edition-action{display:flex;align-items:baseline;justify-content:space-between}.marketplace-plugin-table{table-layout:fixed;width:100%}.marketplace-plugin-license{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",""]),e.exports=t},1768:function(e,t,n){"use strict";n.r(t);var a=n(366),r=n(382),i=n(724),l=n(385),s=n(555),c=n.n(s),o=n(387),u=n.n(o),p=n(393),d=n(371),m=n(373),g=n(647),h=n(468),b=n(396),f=n(412),k=n(379),E=n(376),v=n(6),O=n(609),y=n(531),j=n(520),x=n(368);function P(e){const{currentEdition:t,riskConsent:n}=e;return n===y.b.Accepted?null:a.createElement("div",{className:"boxed-group it__plugin_risk_consent_box"},a.createElement("h2",null,Object(v.k)("marketplace.risk_consent.title")),a.createElement("div",{className:"boxed-group-inner"},a.createElement("p",null,Object(v.k)("marketplace.risk_consent.description")),t===O.a.community&&a.createElement("p",{className:"spacer-top"},Object(v.k)("marketplace.risk_consent.installation")),a.createElement(x.a,{className:"display-block big-spacer-top button-primary",onClick:e.acknowledgeRisk},Object(v.k)("marketplace.risk_consent.action"))))}var N=n(581),w=n(666),C=n(380);const _=Object(C.a)(()=>Promise.all([n.e(8),n.e(339)]).then(n.bind(null,1124)),"DocMarkdownBlock");function S({edition:e,ncloc:t,serverId:n,currentEdition:r}){return a.createElement("div",{className:"boxed-group boxed-group-inner marketplace-edition"},"datacenter"===e.key&&a.createElement(_,{content:"### ![SonarQube logo](/images/sonarqube-icon.png) Data Center Edition\n\n*Designed for High Availability and Scalability*\n\nEnterprise Edition functionality plus:\n\n* Component redundancy\n* Data resiliency\n* Horizontal scalability\n"}),"developer"===e.key&&a.createElement(_,{content:"### ![SonarQube logo](/images/sonarqube-icon.png) Developer Edition\n\n*Built for Developers by Developers*\n\nCommunity Edition functionality plus:\n\n* PR / MR decoration & Quality Gate ![GitHub](/images/alm/github.svg) ![GitLab](/images/alm/gitlab.svg) ![Azure DevOps](/images/alm/azure.svg) ![Bitbucket](/images/alm/bitbucket.svg)\n* Taint analysis / Injection flaw detection for Java, C#, PHP, Python, JS & TS\n* Branch analysis\n* Project aggregation\n* Additional languages: C, C++, Obj-C, PS/SQL, ABAP, TSQL & Swift\n"}),"enterprise"===e.key&&a.createElement(_,{content:"### ![SonarQube logo](/images/sonarqube-icon.png) Enterprise Edition\n\n*Designed to Meet Enterprise Requirements*\n\nDeveloper Edition functionality plus:\n\n* Faster analysis with parallel processing\n* OWASP/CWE security reports\n* Portfolio management\n* Executive reporting\n* Project transfer\n* Additional languages: Apex, COBOL, PL/I, RPG & VB6\n"}),a.createElement("div",{className:"marketplace-edition-action spacer-top"},a.createElement("a",{href:Object(w.e)(e,{ncloc:t,serverId:n,sourceEdition:r}),rel:"noopener noreferrer",target:"_blank"},Object(v.k)("marketplace.request_free_trial"))))}function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class T extends a.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={},this.fetchData=()=>{Object(N.b)().then(e=>{this.mounted&&this.setState(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){D(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e))},()=>{})}}componentDidMount(){this.mounted=!0,this.fetchData()}componentWillUnmount(){this.mounted=!1}render(){const{currentEdition:e}=this.props,{serverId:t,ncloc:n}=this.state,r=Object(w.a)(e);return r.length<=0?null:a.createElement("div",{className:"spacer-bottom marketplace-editions"},r.map(r=>a.createElement(S,{currentEdition:e,edition:r,key:r.key,ncloc:n,serverId:t})))}}function R({total:e}){return a.createElement("footer",{className:"spacer-top note text-center"},Object(v.l)("x_show",e))}function U({currentEdition:e}){return a.createElement("header",{className:"page-header",id:"marketplace-header"},a.createElement("h1",{className:"page-title"},Object(v.k)("marketplace.page")),e&&a.createElement("h3",{className:"page-description"},Object(v.k)("marketplace.page.you_are_running",e)),a.createElement("p",{className:"page-description"},"datacenter"===e?Object(v.k)("marketplace.page.description_best_edition"):Object(v.k)("marketplace.page.description")))}var L=n(383),M=n(741),B=n(374),I=n(424);function q({release:e,update:t}){return a.createElement("li",{className:"big-spacer-bottom"},a.createElement("div",{className:"little-spacer-bottom"},"COMPATIBLE"!==t.status&&t.status?a.createElement(B.a,{overlay:Object(v.k)("marketplace.update_status",t.status)},a.createElement("span",{className:"js-plugin-changelog-version badge badge-warning spacer-right"},e.version)):a.createElement("span",{className:"js-plugin-changelog-version badge badge-success spacer-right"},e.version),a.createElement("span",{className:"js-plugin-changelog-date note spacer-right"},a.createElement(I.a,{date:e.date})),e.changeLogUrl&&a.createElement("a",{className:"js-plugin-changelog-link",href:e.changeLogUrl,target:"_blank",rel:"noopener noreferrer"},Object(v.k)("marketplace.release_notes"))),a.createElement("div",{className:"js-plugin-changelog-description"},e.description))}function z({release:e,update:t}){return a.createElement("div",{className:"abs-width-300"},a.createElement("h6",null,Object(v.k)("changelog")),a.createElement("ul",{className:"js-plugin-changelog-list"},t.previousUpdates&&u()(t.previousUpdates,e=>{var t;return null===(t=e.release)||void 0===t?void 0:t.date}).map(e=>e.release?a.createElement(q,{key:e.release.version,release:e.release,update:e}):null),a.createElement(q,{release:e,update:t})))}function Q({release:e,update:t}){return a.createElement(L.b,{className:"display-inline-block little-spacer-left",overlay:a.createElement(z,{release:e,update:t})},a.createElement(x.c,{className:"js-changelog"},a.createElement(M.a,null)))}var G=e=>a.createElement("td",{className:"text-top width-25 big-spacer-right"},a.createElement("div",null,a.createElement("strong",{className:"js-plugin-name"},e.plugin.name),e.plugin.category&&a.createElement("span",{className:"js-plugin-category badge spacer-left"},e.plugin.category)),a.createElement("div",{className:"js-plugin-description little-spacer-top"},e.plugin.description));function F({license:e}){return e?a.createElement(B.a,{overlay:e},a.createElement("li",{className:"little-spacer-bottom marketplace-plugin-license"},a.createElement(d.FormattedMessage,{defaultMessage:Object(v.k)("marketplace.licensed_under_x"),id:"marketplace.licensed_under_x",values:{license:a.createElement("span",{className:"js-plugin-license"},e)}}))):null}function V({plugin:e}){return e.organizationName?a.createElement("li",{className:"little-spacer-bottom"},a.createElement(d.FormattedMessage,{defaultMessage:Object(v.k)("marketplace.developed_by_x"),id:"marketplace.developed_by_x",values:{organization:e.organizationUrl?a.createElement("a",{className:"js-plugin-organization",href:e.organizationUrl,target:"_blank",rel:"noopener noreferrer"},e.organizationName):a.createElement("span",{className:"js-plugin-organization"},e.organizationName)}})):null}var W=n(403),H=n(537);class J extends a.PureComponent{constructor(){super(...arguments),this.handleClick=()=>{this.props.onClick(this.props.update)}}render(){const{disabled:e,update:t}=this.props;return"COMPATIBLE"===t.status&&t.release?a.createElement(B.a,{overlay:Object(v.k)("marketplace.requires_restart")},a.createElement(x.a,{className:"js-update little-spacer-bottom",disabled:e,onClick:this.handleClick},Object(v.l)("marketplace.update_to_x",t.release.version))):null}}class Y extends a.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={acceptTerms:!1,loading:!1},this.doPluginAction=e=>{this.setState({loading:!0}),e({key:this.props.plugin.key}).then(()=>{this.props.refreshPending(),this.mounted&&this.setState({loading:!1})},()=>{this.mounted&&this.setState({loading:!1})})},this.handleInstall=()=>this.doPluginAction(g.g),this.handleUpdate=()=>this.doPluginAction(g.i),this.handleUninstall=()=>this.doPluginAction(g.h),this.handleTermsCheck=e=>this.setState({acceptTerms:e})}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}renderBundled(){const{plugin:e}=this.props;return a.createElement("div",{className:"js-actions"},Object(y.c)(e)&&a.createElement("div",null,a.createElement("p",{className:"little-spacer-bottom"},Object(v.k)("marketplace.available_under_commercial_license")),a.createElement("a",{href:e.homepageUrl,target:"_blank",rel:"noopener noreferrer"},Object(v.k)("marketplace.learn_more"))),Object(y.d)(e)&&a.createElement("p",null,a.createElement(H.a,{className:"little-spacer-right"}),Object(v.k)("marketplace.installed")),Object(y.d)(e)&&e.updates&&e.updates.length>0&&a.createElement("div",{className:"spacer-top"},e.updates.map((e,t)=>a.createElement(J,{disabled:this.state.loading,key:t,onClick:this.handleUpdate,update:e}))))}render(){const{plugin:e}=this.props;if(e.editionBundled)return this.renderBundled();const{loading:t}=this.state;return a.createElement("div",{className:"js-actions"},Object(y.c)(e)&&e.termsAndConditionsUrl&&a.createElement("p",{className:"little-spacer-bottom"},a.createElement(W.a,{checked:this.state.acceptTerms,className:"js-terms",id:"plugin-terms-"+e.key,onCheck:this.handleTermsCheck},a.createElement("label",{className:"little-spacer-left",htmlFor:"plugin-terms-"+e.key},Object(v.k)("marketplace.i_accept_the"))),a.createElement("a",{className:"js-plugin-terms nowrap little-spacer-left",href:e.termsAndConditionsUrl,target:"_blank",rel:"noopener noreferrer"},Object(v.k)("marketplace.terms_and_conditions"))),t&&a.createElement("i",{className:"spinner spacer-right little-spacer-top little-spacer-bottom"}),Object(y.d)(e)&&a.createElement(a.Fragment,null,e.updates&&e.updates.map((e,n)=>a.createElement(J,{disabled:t,key:n,onClick:this.handleUpdate,update:e})),a.createElement(B.a,{overlay:Object(v.k)("marketplace.requires_restart")},a.createElement(x.a,{className:"js-uninstall button-red little-spacer-left",disabled:t,onClick:this.handleUninstall},Object(v.k)("marketplace.uninstall")))),Object(y.c)(e)&&a.createElement(B.a,{overlay:Object(v.k)("marketplace.requires_restart")},a.createElement(x.a,{className:"js-install",disabled:t||null!=e.termsAndConditionsUrl&&!this.state.acceptTerms,onClick:this.handleInstall},Object(v.k)("marketplace.install"))))}}function X({plugin:e,refreshPending:t,status:n}){return a.createElement("td",{className:"text-top text-right width-20 little-spacer-left"},"installing"===n&&a.createElement("p",{className:"text-success"},Object(v.k)("marketplace.install_pending")),"updating"===n&&a.createElement("p",{className:"text-success"},Object(v.k)("marketplace.update_pending")),"removing"===n&&a.createElement("p",{className:"text-danger"},Object(v.k)("marketplace.uninstall_pending")),null==n&&a.createElement(Y,{plugin:e,refreshPending:t}))}function K({plugin:e}){return e.homepageUrl||e.issueTrackerUrl?a.createElement("li",{className:"little-spacer-bottom"},a.createElement("ul",{className:"list-inline"},e.homepageUrl&&a.createElement("li",null,a.createElement("a",{className:"js-plugin-homepage",href:e.homepageUrl,target:"_blank",rel:"noopener noreferrer"},Object(v.k)("marketplace.homepage"))),e.issueTrackerUrl&&a.createElement("li",null,a.createElement("a",{className:"js-plugin-issues",href:e.issueTrackerUrl,target:"_blank",rel:"noopener noreferrer"},Object(v.k)("marketplace.issue_tracker"))))):null}function Z(e){const{installedPlugins:t,plugin:n,readOnly:r,status:i}=e,l=t.map(({key:e})=>e);return a.createElement("tr",null,a.createElement(G,{plugin:n}),a.createElement("td",{className:"text-top big-spacer-right"},a.createElement("ul",null,a.createElement("li",{className:"display-flex-row little-spacer-bottom"},a.createElement("div",{className:"pull-left spacer-right"},a.createElement("span",{className:"badge badge-success"},n.release.version)),a.createElement("div",null,n.release.description,a.createElement(Q,{release:n.release,update:n.update}),n.update.requires.length>0&&a.createElement("p",{className:"little-spacer-top"},a.createElement("strong",null,Object(v.l)("marketplace.installing_this_plugin_will_also_install_x",n.update.requires.filter(({key:e})=>!l.includes(e)).map(e=>e.name).join(", ")))))))),a.createElement("td",{className:"text-top width-20"},a.createElement("ul",null,a.createElement(K,{plugin:n}),a.createElement(F,{license:n.license}),a.createElement(V,{plugin:n}))),!r&&a.createElement(X,{plugin:n,refreshPending:e.refreshPending,status:i}))}class $ extends a.PureComponent{constructor(){super(...arguments),this.state={changelogOpen:!1},this.handleChangelogClick=e=>{e.preventDefault(),e.stopPropagation(),this.toggleChangelog()},this.toggleChangelog=e=>{void 0!==e?this.setState({changelogOpen:e}):this.setState(e=>({changelogOpen:!e.changelogOpen}))}}render(){const{release:e,update:t}=this.props;return a.createElement("li",{className:"display-flex-row little-spacer-bottom",key:e.version},a.createElement("div",{className:"pull-left spacer-right"},"COMPATIBLE"===t.status?a.createElement("span",{className:"js-update-version badge badge-success"},e.version):a.createElement(B.a,{overlay:Object(v.k)("marketplace.update_status",t.status)},a.createElement("span",{className:"js-update-version badge badge-warning"},e.version))),a.createElement("div",null,e.description,a.createElement(Q,{release:e,update:t})))}}function ee({updates:e}){return!e||e.length<=0?null:a.createElement("li",{className:"spacer-top"},a.createElement("strong",null,Object(v.k)("marketplace.updates"),":"),a.createElement("ul",{className:"little-spacer-top"},e.map(e=>e.release?a.createElement($,{key:e.release.version,release:e.release,update:e}):null)))}function te({plugin:e,readOnly:t,refreshPending:n,status:r}){return a.createElement("tr",null,a.createElement(G,{plugin:e}),a.createElement("td",{className:"text-top big-spacer-right"},a.createElement("ul",null,a.createElement("li",{className:"little-spacer-bottom"},a.createElement("strong",{className:"js-plugin-installed-version little-spacer-right"},e.version),Object(v.k)("marketplace._installed")),a.createElement(ee,{updates:e.updates}))),a.createElement("td",{className:"text-top width-20"},a.createElement("ul",null,a.createElement(K,{plugin:e}),a.createElement(F,{license:e.license}),a.createElement(V,{plugin:e}))),!t&&a.createElement(X,{plugin:e,refreshPending:n,status:r}))}function ne(e,t){const{installing:n,updating:a,removing:r}=t;return n.find(t=>t.key===e.key)?"installing":a.find(t=>t.key===e.key)?"updating":r.find(t=>t.key===e.key)?"removing":void 0}function ae(e){const{pending:t,plugins:n,readOnly:r}=e,i=n.filter(y.d);return a.createElement("div",{className:"boxed-group boxed-group-inner",id:"marketplace-plugins"},a.createElement("ul",null,u()(n,({name:e})=>e).map(n=>a.createElement("li",{className:"panel panel-vertical",key:n.key},a.createElement("table",{className:"marketplace-plugin-table"},a.createElement("tbody",null,Object(y.d)(n)&&a.createElement(te,{plugin:n,readOnly:r,refreshPending:e.refreshPending,status:ne(n,t)}),Object(y.c)(n)&&a.createElement(Z,{installedPlugins:i,plugin:n,readOnly:r,refreshPending:e.refreshPending,status:ne(n,t)})))))))}var re=n(462),ie=n(414);class le extends a.PureComponent{constructor(){super(...arguments),this.handleSearch=e=>{this.props.updateQuery({search:e})},this.handleFilterChange=e=>this.props.updateQuery({filter:e})}render(){const{query:e,updateCenterActive:t}=this.props,n=[{label:Object(v.k)("marketplace.all"),value:"all"},{label:Object(v.k)("marketplace.installed"),value:"installed"},{disabled:!t,label:Object(v.k)("marketplace.updates_only"),tooltip:t?void 0:Object(v.k)("marketplace.not_activated"),value:"updates"}];return a.createElement("div",{className:"big-spacer-bottom",id:"marketplace-search"},a.createElement("div",{className:"display-inline-block text-top nowrap abs-width-240 spacer-right"},a.createElement(re.a,{name:"marketplace-filter",onCheck:this.handleFilterChange,options:n,value:e.filter})),a.createElement(ie.a,{onChange:this.handleSearch,placeholder:Object(v.k)("marketplace.search"),value:e.search}))}}n(1601);var se=n(14),ce=n.n(se),oe=n(507);const ue=["license"];const pe=ce()(e=>({filter:Object(oe.g)(e.filter)||"all",search:Object(oe.g)(e.search)})),de=ce()(e=>Object(oe.a)({filter:"all"===e.filter?void 0:Object(oe.l)(e.filter),search:e.search?Object(oe.l)(e.search):void 0}));function me(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ge(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class he extends a.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loadingPlugins:!0,plugins:[]},this.fetchQueryPlugins=()=>{const e=pe(this.props.location.query);let t=this.fetchAllPlugins;"updates"===e.filter?t=g.f:"installed"===e.filter&&(t=g.c),this.setState({loadingPlugins:!0}),t().then(e=>{this.mounted&&this.setState({loadingPlugins:!1,plugins:u()(e,"name")})},this.stopLoadingPlugins)},this.fetchAllPlugins=()=>Promise.all([Object(g.d)(),Object(g.b)()]).then(([e,t])=>c()([...e,...t.plugins],"key"),this.stopLoadingPlugins),this.fetchRiskConsent=async()=>{const e=await Object(h.e)({keys:j.b.PluginRiskConsent});if(!e||e.length<1)return;const[t]=e;this.setState({riskConsent:t.value})},this.acknowledgeRisk=async()=>{await Object(h.i)({key:j.b.PluginRiskConsent,value:y.b.Accepted}),await this.fetchRiskConsent()},this.updateQuery=e=>{const t=de(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?me(Object(n),!0).forEach((function(t){ge(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):me(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},pe(this.props.location.query),{},e));this.props.router.push({pathname:this.props.location.pathname,query:t})},this.stopLoadingPlugins=()=>{this.mounted&&this.setState({loadingPlugins:!1})}}componentDidMount(){this.mounted=!0,this.fetchQueryPlugins(),this.fetchRiskConsent()}componentDidUpdate(e){e.location.query.filter!==this.props.location.query.filter&&this.fetchQueryPlugins()}componentWillUnmount(){this.mounted=!1}render(){const{currentEdition:e,standaloneMode:t,pendingPlugins:n}=this.props,{loadingPlugins:r,plugins:i,riskConsent:l}=this.state,s=pe(this.props.location.query),c=function(e,t){if(!t)return e.filter(e=>!ue.includes(e.key));const n=t.toLowerCase();return e.filter(e=>!ue.includes(e.key)&&(e.name.toLowerCase().includes(n)||(e.description||"").toLowerCase().includes(n)||(e.category||"").toLowerCase().includes(n)))}(i,s.search),o=e===O.a.community&&Boolean(t)&&l===y.b.Accepted;return a.createElement("div",{className:"page page-limited",id:"marketplace-page"},a.createElement(b.a,{suggestions:"marketplace"}),a.createElement(p.a,{title:Object(v.k)("marketplace.page")}),a.createElement(U,{currentEdition:e}),a.createElement(T,{currentEdition:e}),a.createElement("header",{className:"page-header"},a.createElement("h1",{className:"page-title"},Object(v.k)("marketplace.page.plugins")),a.createElement("div",{className:"page-description"},a.createElement("p",null,Object(v.k)("marketplace.page.plugins.description")),e!==O.a.community&&a.createElement(k.a,{className:"spacer-top",variant:"info"},a.createElement(d.FormattedMessage,{id:"marketplace.page.plugins.description2",defaultMessage:Object(v.k)("marketplace.page.plugins.description2"),values:{link:a.createElement(m.c,{to:"/documentation/instance-administration/marketplace/",target:"_blank"},Object(v.k)("marketplace.page.plugins.description2.link"))}})))),a.createElement(P,{acknowledgeRisk:this.acknowledgeRisk,currentEdition:e,riskConsent:l}),a.createElement(le,{query:s,updateCenterActive:this.props.updateCenterActive,updateQuery:this.updateQuery}),a.createElement(E.a,{loading:r},0===c.length&&Object(v.k)("marketplace.plugin_list.no_plugins",s.filter),c.length>0&&a.createElement(a.Fragment,null,a.createElement(ae,{pending:n,plugins:c,readOnly:!o,refreshPending:this.props.fetchPendingPlugins}),a.createElement(R,{total:c.length}))))}}var be=Object(f.a)(he);t.default=Object(r.b)(e=>{const t=Object(l.getGlobalSettingValue)(e,"sonar.updatecenter.activate");return{currentEdition:Object(l.getAppState)(e).edition,standaloneMode:Object(l.getAppState)(e).standalone,updateCenterActive:Boolean(t&&"true"===t.value)}})((function(e){return a.createElement(i.a.Consumer,null,({fetchPendingPlugins:t,pendingPlugins:n})=>a.createElement(be,Object.assign({fetchPendingPlugins:t,pendingPlugins:n},e)))}))},396:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(366),r=n(435);function i({suggestions:e}){return a.createElement(r.a.Consumer,null,({addSuggestions:t,removeSuggestions:n})=>a.createElement(l,{addSuggestions:t,removeSuggestions:n,suggestions:e}))}class l extends a.PureComponent{componentDidMount(){this.props.addSuggestions(this.props.suggestions)}componentDidUpdate(e){e.suggestions!==this.props.suggestions&&(this.props.removeSuggestions(this.props.suggestions),this.props.addSuggestions(e.suggestions))}componentWillUnmount(){this.props.removeSuggestions(this.props.suggestions)}render(){return null}}},403:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(367),r=n(366),i=n(376);n(426);class l extends r.PureComponent{constructor(){super(...arguments),this.handleClick=e=>{e.preventDefault(),e.currentTarget.blur(),this.props.disabled||this.props.onCheck(!this.props.checked,this.props.id)}}render(){const{checked:e,children:t,disabled:n,id:l,loading:s,right:c,thirdState:o,title:u}=this.props,p=a("icon-checkbox",{"icon-checkbox-checked":e,"icon-checkbox-single":o,"icon-checkbox-disabled":n});return t?r.createElement("a",{"aria-checked":e,className:a("link-checkbox",this.props.className,{note:n,disabled:n}),href:"#",id:l,onClick:this.handleClick,role:"checkbox",title:u},c&&t,r.createElement(i.a,{loading:Boolean(s)},r.createElement("i",{className:p})),!c&&t):s?r.createElement(i.a,null):r.createElement("a",{"aria-checked":e,className:a(p,this.props.className),href:"#",id:l,onClick:this.handleClick,role:"checkbox",title:u})}}l.defaultProps={thirdState:!1}},409:function(e,t,n){var a=n(440);e.exports=function(e){return e?(e=a(e))===1/0||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}},424:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return c}));var a=n(366),r=n(371),i=n(21);const l={year:"numeric",month:"short",day:"2-digit"},s={year:"numeric",month:"long",day:"numeric"};function c({children:e,date:t,long:n}){return a.createElement(r.FormattedDate,Object.assign({value:Object(i.b)(t)},n?s:l),e)}},426:function(e,t,n){var a=n(369),r=n(427);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},l=(a(r,i),r.locals?r.locals:{});e.exports=l},427:function(e,t,n){(t=n(370)(!1)).push([e.i,".icon-checkbox{display:inline-block;line-height:1;vertical-align:top;padding:1px 2px;box-sizing:border-box}a.icon-checkbox{border-bottom:none}.icon-checkbox:focus{outline:none}.icon-checkbox:before{content:\" \";display:inline-block;width:10px;height:10px;border:1px solid #236a97;border-radius:2px;transition:border-color .2s ease,background-color .2s ease,background-image .2s ease,box-shadow .4s ease}.icon-checkbox:not(.icon-checkbox-disabled):focus:before,.link-checkbox:not(.disabled):focus:focus .icon-checkbox:before{box-shadow:0 0 0 3px rgba(35,106,151,.25)}.icon-checkbox-checked:before{background-color:#4b9fd5;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 14 14' xmlns='http://www.w3.org/2000/svg' fill-rule='evenodd' clip-rule='evenodd' stroke-linejoin='round' stroke-miterlimit='1.414'%3E%3Cpath d='M12 4.665c0 .172-.06.318-.18.438l-5.55 5.55c-.12.12-.266.18-.438.18s-.318-.06-.438-.18L2.18 7.438C2.06 7.317 2 7.17 2 7s.06-.318.18-.44l.878-.876c.12-.12.267-.18.44-.18.17 0 .317.06.437.18l1.897 1.903 4.233-4.24c.12-.12.266-.18.438-.18s.32.06.44.18l.876.88c.12.12.18.265.18.438z' fill='%23fff' fill-rule='nonzero'/%3E%3C/svg%3E\");border-color:#4b9fd5}.icon-checkbox-checked.icon-checkbox-single:before{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 14 14' xmlns='http://www.w3.org/2000/svg' fill-rule='evenodd' clip-rule='evenodd' stroke-linejoin='round' stroke-miterlimit='1.414'%3E%3Cpath d='M10 4.698A.697.697 0 0 0 9.302 4H4.698A.697.697 0 0 0 4 4.698v4.604c0 .386.312.698.698.698h4.604A.697.697 0 0 0 10 9.302V4.698z' fill='%23fff'/%3E%3C/svg%3E\")}.icon-checkbox-disabled:before{border:1px solid #bbb;cursor:not-allowed}.icon-checkbox-disabled.icon-checkbox-checked:before{background-color:#bbb}.icon-checkbox-invisible{visibility:hidden}.link-checkbox{color:inherit;border-bottom:none}.link-checkbox.disabled,.link-checkbox.disabled:hover,.link-checkbox.disabled label{color:#666;cursor:not-allowed}.link-checkbox:active,.link-checkbox:focus,.link-checkbox:hover{color:inherit}",""]),e.exports=t},454:function(e,t,n){var a=n(409);e.exports=function(e){var t=a(e),n=t%1;return t==t?n?t-n:t:0}},462:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(367),r=n(366),i=(n(478),n(374));class l extends r.PureComponent{constructor(){super(...arguments),this.renderOption=e=>{const t=e.value===this.props.value,n="".concat(this.props.name,"__").concat(e.value);return r.createElement("li",{key:e.value.toString()},r.createElement("input",{checked:t,disabled:e.disabled,id:n,name:this.props.name,onChange:()=>this.props.onCheck(e.value),type:"radio"}),r.createElement(i.a,{overlay:e.tooltip||void 0},r.createElement("label",{htmlFor:n},e.label)))}}render(){return r.createElement("ul",{className:a("radio-toggle",this.props.className)},this.props.options.map(this.renderOption))}}l.defaultProps={disabled:!1,value:null}},468:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return o})),n.d(t,"h",(function(){return u})),n.d(t,"i",(function(){return p})),n.d(t,"f",(function(){return d})),n.d(t,"g",(function(){return m})),n.d(t,"a",(function(){return g})),n.d(t,"c",(function(){return h})),n.d(t,"b",(function(){return b}));var a=n(24),r=n.n(a),i=n(381),l=n(451),s=n(4);function c(e){return Object(s.d)("/api/settings/list_definitions",{component:e}).then(e=>e.definitions,i.a)}function o(e){return Object(s.d)("/api/settings/values",e).then(e=>[...e.settings,...e.setSecuredSettings.map(e=>({key:e}))])}function u(e,t,n){const{key:a}=e,i={key:a,component:n};return Object(l.m)(e)&&e.multiValues?i.values=t:"PROPERTY_SET"===e.type?i.fieldValues=t.map(e=>r()(e,e=>null==e)).map(JSON.stringify):i.value=t,Object(s.i)("/api/settings/set",i)}function p(e){return Object(s.i)("/api/settings/set",e).catch(i.a)}function d(e){return Object(s.i)("/api/settings/reset",e)}function m(e,t,n){return Object(s.i)("/api/emails/send",{to:e,subject:t,message:n})}function g(){return Object(s.d)("/api/settings/check_secret_key").catch(i.a)}function h(){return Object(s.j)("/api/settings/generate_secret_key").catch(i.a)}function b(e){return Object(s.j)("/api/settings/encrypt",{value:e}).catch(i.a)}},478:function(e,t,n){var a=n(369),r=n(479);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},l=(a(r,i),r.locals?r.locals:{});e.exports=l},479:function(e,t,n){(t=n(370)(!1)).push([e.i,".radio-toggle{font-size:0;white-space:nowrap}.radio-toggle,.radio-toggle>li{display:inline-block;vertical-align:middle}.radio-toggle>li{font-size:12px}.radio-toggle>li:first-child>label{border-top-left-radius:2px;border-bottom-left-radius:2px}.radio-toggle>li:last-child>label{border-top-right-radius:2px;border-bottom-right-radius:2px}.radio-toggle>li+li>label{border-left:none}.radio-toggle>li>label{display:inline-block;padding:0 12px;margin:0;border:1px solid #236a97;color:#236a97;height:22px;line-height:22px;cursor:pointer;font-weight:600}.radio-toggle input[type=radio]{display:none}.radio-toggle input[type=radio]:checked+label{background-color:#236a97;color:#fff}.radio-toggle input[type=radio]:disabled+label{color:#bbb;border-color:#ddd;background:#ebebeb;cursor:not-allowed}",""]),e.exports=t},480:function(e,t){e.exports=function(e,t,n,a){for(var r=e.length,i=n+(a?1:-1);a?i--:++i<r;)if(t(e[i],i,e))return i;return-1}},520:function(e,t,n){"use strict";var a,r;n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r})),function(e){e.DaysBeforeDeletingInactiveBranchesAndPRs="sonar.dbcleaner.daysBeforeDeletingInactiveBranchesAndPRs",e.DefaultProjectVisibility="projects.default.visibility",e.ServerBaseUrl="sonar.core.serverBaseURL",e.PluginRiskConsent="sonar.plugins.risk.consent",e.ProjectReportFrequency="sonar.governance.report.project.branch.frequency"}(a||(a={})),function(e){e.STRING="STRING",e.TEXT="TEXT",e.JSON="JSON",e.PASSWORD="PASSWORD",e.BOOLEAN="BOOLEAN",e.FLOAT="FLOAT",e.INTEGER="INTEGER",e.LICENSE="LICENSE",e.LONG="LONG",e.SINGLE_SELECT_LIST="SINGLE_SELECT_LIST",e.PROPERTY_SET="PROPERTY_SET"}(r||(r={}))},531:function(e,t,n){"use strict";var a,r;function i(e){return void 0!==e.release}function l(e){return function(e){return void 0!==e.version}(e)&&void 0!==e.updatedAt}n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return l})),function(e){e.Bundled="BUNDLED",e.External="EXTERNAL"}(a||(a={})),function(e){e.Accepted="ACCEPTED",e.NotAccepted="NOT_ACCEPTED",e.Required="REQUIRED"}(r||(r={}))},537:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(366),r=n(372);function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function l(e){let{fill:t="currentColor"}=e,n=i(e,["fill"]);return a.createElement(r.a,Object.assign({},n),a.createElement("path",{d:"M14.92 4.804q0 0.357-0.25 0.607l-7.679 7.679q-0.25 0.25-0.607 0.25t-0.607-0.25l-4.446-4.446q-0.25-0.25-0.25-0.607t0.25-0.607l1.214-1.214q0.25-0.25 0.607-0.25t0.607 0.25l2.625 2.634 5.857-5.866q0.25-0.25 0.607-0.25t0.607 0.25l1.214 1.214q0.25 0.25 0.25 0.607z",style:{fill:t}}))}},581:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return s}));var a=n(381),r=n(4);function i(e){return Object(r.d)("/api/navigation/component",e).catch(a.a)}function l(){return Object(r.d)("/api/navigation/marketplace").catch(a.a)}function s(){return Object(r.d)("/api/navigation/settings").catch(a.a)}},588:function(e,t,n){var a=n(480),r=n(22),i=n(454),l=Math.max,s=Math.min;e.exports=function(e,t,n){var c=null==e?0:e.length;if(!c)return-1;var o=c-1;return void 0!==n&&(o=i(n),o=n<0?l(c+o,0):s(o,c-1)),a(e,r(t,3),o,!0)}},647:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"e",(function(){return m})),n.d(t,"c",(function(){return k})),n.d(t,"d",(function(){return E})),n.d(t,"f",(function(){return v})),n.d(t,"g",(function(){return O})),n.d(t,"h",(function(){return y})),n.d(t,"i",(function(){return j})),n.d(t,"a",(function(){return x}));var a=n(588),r=n.n(a),i=n(381),l=n(4),s=n(452),c=n(531);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(){return Object(l.d)("/api/plugins/available").catch(i.a)}function m(){return Object(l.d)("/api/plugins/pending").catch(i.a)}function g(e){if(!e)return[];return["COMPATIBLE","REQUIRES_SYSTEM_UPGRADE","DEPS_REQUIRE_SYSTEM_UPGRADE"].map(t=>{const n=r()(e,e=>e.status===t);return n>-1?e[n]:void 0}).filter(s.a)}function h(e,t){if(!t)return e;const n=t.indexOf(e);return u({},e,{previousUpdates:n>0?t.slice(0,n):[]})}function b(e=c.a.External){return Object(l.d)("/api/plugins/installed",{f:"category",type:e})}function f(){return Object(l.d)("/api/plugins/updates")}function k(e=c.a.External){return b(e).then(({plugins:e})=>e,i.a)}function E(){return Promise.all([b(),f()]).then(([e,t])=>e.plugins.map(e=>{const n=t.plugins.find(t=>t.key===e.key);return n?u({},n,{},e,{updates:g(n.updates).map(e=>h(e,n.updates))}):e})).catch(i.a)}function v(){return Promise.all([f(),b()]).then(([e,t])=>e.plugins.map(e=>{const n=g(e.updates).map(t=>h(t,e.updates)),a=t.plugins.find(t=>t.key===e.key);return a?u({},a,{},e,{updates:n}):u({},e,{updates:n})})).catch(i.a)}function O(e){return Object(l.i)("/api/plugins/install",e).catch(i.a)}function y(e){return Object(l.i)("/api/plugins/uninstall",e).catch(i.a)}function j(e){return Object(l.i)("/api/plugins/update",e).catch(i.a)}function x(){return Object(l.i)("/api/plugins/cancel_all").catch(i.a)}},724:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i}));var a=n(366);const r={installing:[],removing:[],updating:[]},i="UP",l=a.createContext({fetchSystemStatus:()=>{},fetchPendingPlugins:()=>{},pendingPlugins:r,systemStatus:i});t.a=l},741:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(366),r=n(372);function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function l(e){let{fill:t="currentColor"}=e,n=i(e,["fill"]);return a.createElement(r.a,Object.assign({},n),a.createElement("path",{d:"M5.273 7.182v1.636a.818.818 0 0 1-.818.818H2.818A.818.818 0 0 1 2 8.818V7.182c0-.452.366-.818.818-.818h1.637c.451 0 .818.366.818.818zm4.363 0v1.636a.818.818 0 0 1-.818.818H7.182a.818.818 0 0 1-.818-.818V7.182c0-.452.366-.818.818-.818h1.636c.452 0 .818.366.818.818zm4.364 0v1.636a.818.818 0 0 1-.818.818h-1.637a.818.818 0 0 1-.818-.818V7.182c0-.452.367-.818.818-.818h1.637c.452 0 .818.366.818.818z",style:{fill:t}}))}}}]);
//# sourceMappingURL=297.m.deaf4b27.chunk.js.map