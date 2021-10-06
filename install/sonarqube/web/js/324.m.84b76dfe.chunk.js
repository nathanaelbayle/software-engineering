(window.webpackJsonp=window.webpackJsonp||[]).push([[324],{1351:function(e,t,a){var n=a(369),l=a(1352);"string"==typeof(l=l.__esModule?l.default:l)&&(l=[[e.i,l,""]]);var s={insert:"head",singleton:!1},r=(n(l,s),l.locals?l.locals:{});e.exports=r},1352:function(e,t,a){(t=a(370)(!1)).push([e.i,".about-page{font-size:14px}.about-page .boxed-group{border:none}.about-page .boxed-group h2{padding-left:0;padding-right:0;font-size:18px}.about-page .boxed-group>h2{padding-top:25px}.about-page .boxed-group h3{font-weight:400;font-size:16px;padding-bottom:12px}.about-page .boxed-group-inner{padding-left:0;padding-right:0;padding-bottom:25px}.about-page-entry{display:flex;justify-content:space-between;align-items:center;margin-bottom:45px;padding:65px 0;border-bottom:1px solid #e6e6e6}.about-page-intro{padding-right:65px;border-right:1px solid #e6e6e6}.about-page-intro>h1{line-height:40px;font-size:26px;font-weight:300}.about-page-intro>.button{height:32px;line-height:30px;padding-left:15px;padding-right:15px;border-radius:3px;font-size:13px;font-weight:400}.about-page-instance{display:flex;align-items:center}.about-page-projects{margin-left:65px;line-height:1.4;font-size:16px;text-align:center;min-width:128px}.about-page-projects-link{display:inline-block;line-height:1;margin-bottom:12px;font-size:32px}.about-page-issue-types{text-align:left}.about-page-issue-types tr+tr td{padding-top:12px}.about-page-issue-types svg{vertical-align:middle;transform:translateY(-1px)}.about-page-issue-type-number{padding-right:16px;text-align:right}.about-page-issue-type-link{font-size:16px;font-weight:700}.about-page-section{padding-top:20px;padding-bottom:10px}.about-page-text{line-height:1.4}.about-page-link-more{border:none}.about-page-link-more>span{border-bottom:1px solid #cae3f2}.about-page-languages{display:flex;justify-content:space-between;margin-top:10px}.about-page-languages>li{line-height:2}.about-quality-model .flex-column+.flex-column{margin-left:30px;padding-left:30px;border-left:1px solid #e6e6e6}.about-quality-model svg{transform:translateY(2px)}.about-page-analyzers{display:flex;justify-content:space-between;margin-top:15px}.about-page-analyzer-box{border:none}.about-page-group-boxes{display:flex;flex-direction:column}.about-page-group-boxes>.boxed-group{flex-grow:1}",""]),e.exports=t},1780:function(e,t,a){"use strict";a.r(t),a.d(t,"AboutApp",(function(){return B}));var n=a(517),l=a.n(n),s=a(366),r=a(382),c=a(373),o=a(425),i=a(415),u=a(419),m=a(822),p=a(6),g=a(472),d=a(467),b=a(385),E=a(468),h=a(756);a(1351);function f({link:e}){return s.createElement("div",{className:"big-spacer-top"},s.createElement(c.c,{className:"about-page-link-more",to:e,target:"_blank"},s.createElement("span",null,Object(p.k)("about_page.read_more"))))}function x(){return s.createElement("div",{className:"boxed-group"},s.createElement("h2",null,Object(p.k)("about_page.clean_code")),s.createElement("div",{className:"boxed-group-inner"},s.createElement("p",{className:"about-page-text"},Object(p.k)("about_page.clean_code.text")),s.createElement(f,{link:"/documentation/user-guide/issues/"})))}const y=[{name:"Java",url:"https://redirect.sonarsource.com/plugins/java.html"},{name:"C/C++",url:"https://redirect.sonarsource.com/plugins/cpp.html"},{name:"C#",url:"https://redirect.sonarsource.com/plugins/csharp.html"},{name:"COBOL",url:"https://redirect.sonarsource.com/plugins/cobol.html"},{name:"ABAP",url:"https://redirect.sonarsource.com/plugins/abap.html"},{name:"HTML",url:"https://redirect.sonarsource.com/plugins/web.html"},{name:"RPG",url:"https://redirect.sonarsource.com/plugins/rpg.html"},{name:"JavaScript",url:"https://redirect.sonarsource.com/plugins/javascript.html"},{name:"TypeScript",url:"https://redirect.sonarsource.com/plugins/typescript.html"},{name:"Objective C",url:"https://redirect.sonarsource.com/plugins/objectivec.html"},{name:"XML",url:"https://redirect.sonarsource.com/plugins/xml.html"},{name:"VB.NET",url:"https://redirect.sonarsource.com/plugins/vbnet.html"},{name:"PL/SQL",url:"https://redirect.sonarsource.com/plugins/plsql.html"},{name:"T-SQL",url:"https://redirect.sonarsource.com/plugins/tsql.html"},{name:"Flex",url:"https://redirect.sonarsource.com/plugins/flex.html"},{name:"Python",url:"https://redirect.sonarsource.com/plugins/python.html"},{name:"Groovy",url:"https://redirect.sonarsource.com/plugins/groovy.html"},{name:"PHP",url:"https://redirect.sonarsource.com/plugins/php.html"},{name:"Swift",url:"https://redirect.sonarsource.com/plugins/swift.html"},{name:"Visual Basic",url:"https://redirect.sonarsource.com/plugins/vb.html"},{name:"PL/I",url:"https://redirect.sonarsource.com/plugins/pli.html"}],k=(y.length+1)/2;function O(){return s.createElement("div",{className:"boxed-group"},s.createElement("h2",null,Object(p.k)("about_page.languages")),s.createElement("div",{className:"boxed-group-inner"},s.createElement("p",{className:"about-page-text"},Object(p.k)("about_page.languages.text")),s.createElement("ul",{className:"about-page-languages"},y.slice(0,k).map((e,t)=>s.createElement("li",{key:t},s.createElement("a",{href:e.url},e.name),s.createElement("br",null),t+k<y.length&&s.createElement("a",{href:y[t+k].url},y[t+k].name))))))}function j(){return s.createElement("div",{className:"boxed-group"},s.createElement("h2",null,Object(p.k)("about_page.fix_the_leak")),s.createElement("div",{className:"boxed-group-inner"},s.createElement("p",{className:"about-page-text"},Object(p.k)("about_page.fix_the_leak_on_new_code.text")),s.createElement(f,{link:"/documentation/user-guide/clean-as-you-code/"})))}var v=a(377);function N({count:e,loading:t}){return s.createElement("div",{className:"about-page-projects"},t?s.createElement("i",{className:"spinner"}):s.createElement("div",null,s.createElement("div",null,s.createElement(c.c,{className:"about-page-projects-link",to:"/projects"},Object(v.formatMeasure)(e,"INT"))),s.createElement("div",null,Object(p.k)("about_page.projects_analyzed"))))}function _(){return s.createElement("div",{className:"boxed-group"},s.createElement("h2",null,Object(p.k)("about_page.quality_gates")),s.createElement("div",{className:"boxed-group-inner"},s.createElement("p",{className:"about-page-text"},Object(p.k)("about_page.quality_gates.text")),s.createElement(f,{link:"/documentation/user-guide/quality-gates/"})))}var L=a(557),w=a(558),S=a(540),T=a(541);function A(){return s.createElement("div",{className:"boxed-group about-quality-model"},s.createElement("h2",null,Object(p.k)("about_page.quality_model")),s.createElement("div",{className:"boxed-group-inner clearfix"},s.createElement("div",{className:"flex-columns"},s.createElement("div",{className:"flex-column flex-column-third"},s.createElement("h3",null,Object(p.k)("metric_domain.Reliability")),s.createElement("div",{className:"pull-left little-spacer-right"},s.createElement(L.a,null)),s.createElement("p",{className:"about-page-text overflow-hidden"},s.createElement("strong",null,Object(p.k)("issue.type.BUG.plural"))," ",Object(p.k)("about_page.quality_model.bugs"))),s.createElement("div",{className:"flex-column flex-column-third"},s.createElement("h3",null,Object(p.k)("metric_domain.Security")),s.createElement("div",{className:"pull-left little-spacer-right"},s.createElement(T.a,null)),s.createElement("p",{className:"about-page-text overflow-hidden"},s.createElement("strong",null,Object(p.k)("issue.type.VULNERABILITY.plural"))," ",Object(p.k)("about_page.quality_model.vulnerabilities")),s.createElement("br",null),s.createElement("div",{className:"pull-left little-spacer-right"},s.createElement(S.a,null)),s.createElement("p",{className:"about-page-text overflow-hidden"},s.createElement("strong",null,Object(p.k)("issue.type.SECURITY_HOTSPOT.plural"))," ",Object(p.k)("about_page.quality_model.security_hotspots"))),s.createElement("div",{className:"flex-column flex-column-third"},s.createElement("h3",null,Object(p.k)("metric_domain.Maintainability")),s.createElement("div",{className:"pull-left little-spacer-right"},s.createElement(w.a,null)),s.createElement("p",{className:"about-page-text overflow-hidden"},s.createElement("strong",null,Object(p.k)("issue.type.CODE_SMELL.plural"))," ",Object(p.k)("about_page.quality_model.code_smells"))))))}var C=a(0);const I=[{key:"sonarqube",link:"/documentation/analysis/scan/sonarscanner/"},{key:"msbuild",link:"/documentation/analysis/scan/sonarscanner-for-msbuild/"},{key:"maven",link:"/documentation/analysis/scan/sonarscanner-for-maven/"},{key:"gradle",link:"/documentation/analysis/scan/sonarscanner-for-gradle/"},{key:"jenkins",link:"/documentation/analysis/scan/sonarscanner-for-jenkins/"},{key:"ant",link:"/documentation/analysis/scan/sonarscanner-for-ant/"}];function P(){return s.createElement("div",{className:"boxed-group"},s.createElement("h2",null,Object(p.k)("about_page.scanners")),s.createElement("div",{className:"boxed-group-inner"},s.createElement("p",{className:"about-page-text"},Object(p.k)("about_page.scanners.text")),s.createElement("div",{className:"about-page-analyzers"},I.map(e=>s.createElement(c.c,{className:"about-page-analyzer-box",key:e.key,to:e.link,target:"_blank"},s.createElement("img",{alt:Object(p.k)("about_page.scanners",e.key),height:60,src:"".concat(Object(C.getBaseUrl)(),"/images/scanner-logos/").concat(e.key,".svg")}))))))}var R=a(503),z=a(378);function M(){return s.createElement("div",{className:"boxed-group"},s.createElement("h2",null,Object(p.k)("about_page.standards")),s.createElement("div",{className:"boxed-group-inner"},s.createElement("p",{className:"about-page-text"},Object(p.k)("about_page.standards.text")),s.createElement("div",{className:"spacer-top"},s.createElement("ul",{className:"list-inline"},s.createElement("li",null,s.createElement(c.c,{className:"link-with-icon",to:Object(z.H)({tags:"misra"})},s.createElement(R.a,null),s.createElement("span",{className:"little-spacer-left"},"MISRA"))),s.createElement("li",null,s.createElement(c.c,{className:"link-with-icon",to:Object(z.H)({tags:"cert"})},s.createElement(R.a,null),s.createElement("span",{className:"little-spacer-left"},"CERT"))),s.createElement("li",null,s.createElement(c.c,{className:"link-with-icon",to:Object(z.H)({tags:"cwe"})},s.createElement(R.a,null),s.createElement("span",{className:"little-spacer-left"},"CWE"))),s.createElement("li",null,s.createElement(c.c,{className:"link-with-icon",to:Object(z.H)({tags:"owasp-a1,owasp-a2,owasp-a3,owasp-a4,owasp-a5,owasp-a6,owasp-a7,owasp-a8,owasp-a9,owasp-a10"})},s.createElement(R.a,null),s.createElement("span",{className:"little-spacer-left"},"OWASP Top 10"))),s.createElement("li",null,s.createElement(c.c,{className:"link-with-icon",to:Object(z.H)({tags:"sans-top25-porous,sans-top25-risky,sans-top25-insecure"})},s.createElement(R.a,null),s.createElement("span",{className:"little-spacer-left"},"SANS Top 25"))))),s.createElement(f,{link:"/documentation/user-guide/rules/"})))}function U({bugs:e,codeSmells:t,loading:a,vulnerabilities:n}){return s.createElement("div",{className:"about-page-projects"},a?s.createElement("i",{className:"spinner"}):s.createElement("table",{className:"about-page-issue-types"},s.createElement("tbody",null,s.createElement("tr",null,s.createElement("td",{className:"about-page-issue-type-number"},s.createElement(c.c,{className:"about-page-issue-type-link",to:Object(z.t)({resolved:"false",types:"BUG",s:"CREATION_DATE"})},Object(v.formatMeasure)(e,"SHORT_INT"))),s.createElement("td",null,s.createElement("span",{className:"little-spacer-right"},s.createElement(L.a,null)),Object(p.k)("issue.type.BUG.plural"))),s.createElement("tr",null,s.createElement("td",{className:"about-page-issue-type-number"},s.createElement(c.c,{className:"about-page-issue-type-link",to:Object(z.t)({resolved:"false",types:"VULNERABILITY",s:"CREATION_DATE"})},Object(v.formatMeasure)(n,"SHORT_INT"))),s.createElement("td",null,s.createElement("span",{className:"little-spacer-right"},s.createElement(T.a,null)),Object(p.k)("issue.type.VULNERABILITY.plural"))),s.createElement("tr",null,s.createElement("td",{className:"about-page-issue-type-number"},s.createElement(c.c,{className:"about-page-issue-type-link",to:Object(z.t)({resolved:"false",types:"CODE_SMELL",s:"CREATION_DATE"})},Object(v.formatMeasure)(t,"SHORT_INT"))),s.createElement("td",null,s.createElement("span",{className:"little-spacer-right"},s.createElement(w.a,null)),Object(p.k)("issue.type.CODE_SMELL.plural"))))))}class B extends s.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:!0,projectsCount:0}}componentDidMount(){this.mounted=!0,this.loadData(),Object(g.b)()}componentWillUnmount(){this.mounted=!1,Object(g.d)()}loadProjects(){return Object(o.y)({ps:1}).then(e=>e.paging.total)}loadIssues(){return Object(i.e)({resolved:!1},"types")}loadCustomText(){return this.props.fetchAboutPageSettings()}loadData(){Promise.all([this.loadProjects(),this.props.indexationContext.status.isCompleted?this.loadIssues().catch(()=>{}):Promise.resolve(void 0),this.loadCustomText()]).then(e=>{if(this.mounted){const[t=0,a]=e,n=a&&l()(a.facet,"val");this.setState({projectsCount:t,issueTypes:n,loading:!1})}},()=>{this.mounted&&this.setState({loading:!1})})}render(){const{customText:e}=this.props,{loading:t,issueTypes:a,projectsCount:n}=this.state;let l,r,o;return!t&&a&&(l=a.BUG&&a.BUG.count,r=a.VULNERABILITY&&a.VULNERABILITY.count,o=a.CODE_SMELL&&a.CODE_SMELL.count),s.createElement("div",{className:"page page-limited about-page",id:"about-page"},s.createElement(u.a,{anchor:"about_main"}),s.createElement("div",{className:"about-page-entry"},s.createElement("div",{className:"about-page-intro"},s.createElement("h1",{className:"big-spacer-bottom"},Object(p.k)("layout.sonar.slogan")),!this.props.currentUser.isLoggedIn&&s.createElement(c.c,{className:"button button-active big-spacer-right",to:"/sessions/new"},Object(p.k)("layout.login")),s.createElement(c.c,{className:"button",to:"/documentation"},Object(p.k)("about_page.read_documentation"))),s.createElement("div",{className:"about-page-instance"},s.createElement(N,{count:n,loading:t}),a&&s.createElement(U,{bugs:l,codeSmells:o,loading:t,vulnerabilities:r}))),e&&s.createElement("div",{className:"about-page-section",dangerouslySetInnerHTML:{__html:Object(d.a)(e)}}),s.createElement(O,null),s.createElement(A,null),s.createElement("div",{className:"flex-columns"},s.createElement("div",{className:"flex-column flex-column-half about-page-group-boxes"},s.createElement(x,null)),s.createElement("div",{className:"flex-column flex-column-half about-page-group-boxes"},s.createElement(j,null))),s.createElement("div",{className:"flex-columns"},s.createElement("div",{className:"flex-column flex-column-half about-page-group-boxes"},s.createElement(_,null)),s.createElement("div",{className:"flex-column flex-column-half about-page-group-boxes"},s.createElement(M,null))),s.createElement(P,null))}}const q={fetchAboutPageSettings:function(){return e=>{const t=["sonar.lf.aboutText"];return Object(E.e)({keys:t.join()}).then(a=>{e(Object(h.c)(t,a))})}}};t.default=Object(m.a)(Object(r.b)(e=>{const t=Object(b.getGlobalSettingValue)(e,"sonar.lf.aboutText");return{appState:Object(b.getAppState)(e),currentUser:Object(b.getCurrentUser)(e),customText:t&&t.value}},q)(B))},419:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(366),l=a(6),s=a(476);function r(e){return n.createElement(s.a.Consumer,null,({addA11ySkipLink:t,removeA11ySkipLink:a})=>n.createElement(c,Object.assign({addA11ySkipLink:t,removeA11ySkipLink:a},e)))}class c extends n.PureComponent{constructor(){super(...arguments),this.getLink=()=>{const{anchor:e,label:t=Object(l.k)("skip_to_content"),weight:a}=this.props;return{key:e,label:t,weight:a}}}componentDidMount(){this.props.addA11ySkipLink(this.getLink())}componentWillUnmount(){this.props.removeA11ySkipLink(this.getLink())}render(){const{anchor:e}=this.props;return n.createElement("span",{id:"a11y_target__".concat(e)})}}},467:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return s}));var n=a(668);function l(e){return Object(n.sanitize)(e,{ALLOWED_TAGS:["b","br","code","i","li","p","strong","ul","a"],ALLOWED_ATTR:["target","href"]})}function s(e){return Object(n.sanitize)(e,{USE_PROFILES:{html:!0}})}},468:function(e,t,a){"use strict";a.d(t,"d",(function(){return o})),a.d(t,"e",(function(){return i})),a.d(t,"h",(function(){return u})),a.d(t,"i",(function(){return m})),a.d(t,"f",(function(){return p})),a.d(t,"g",(function(){return g})),a.d(t,"a",(function(){return d})),a.d(t,"c",(function(){return b})),a.d(t,"b",(function(){return E}));var n=a(24),l=a.n(n),s=a(381),r=a(451),c=a(4);function o(e){return Object(c.d)("/api/settings/list_definitions",{component:e}).then(e=>e.definitions,s.a)}function i(e){return Object(c.d)("/api/settings/values",e).then(e=>[...e.settings,...e.setSecuredSettings.map(e=>({key:e}))])}function u(e,t,a){const{key:n}=e,s={key:n,component:a};return Object(r.m)(e)&&e.multiValues?s.values=t:"PROPERTY_SET"===e.type?s.fieldValues=t.map(e=>l()(e,e=>null==e)).map(JSON.stringify):s.value=t,Object(c.i)("/api/settings/set",s)}function m(e){return Object(c.i)("/api/settings/set",e).catch(s.a)}function p(e){return Object(c.i)("/api/settings/reset",e)}function g(e,t,a){return Object(c.i)("/api/emails/send",{to:e,subject:t,message:a})}function d(){return Object(c.d)("/api/settings/check_secret_key").catch(s.a)}function b(){return Object(c.j)("/api/settings/generate_secret_key").catch(s.a)}function E(e){return Object(c.j)("/api/settings/encrypt",{value:e}).catch(s.a)}},472:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return l})),a.d(t,"c",(function(){return s})),a.d(t,"d",(function(){return r}));function n(){c("sidebar-page",!0)}function l(){c("white-page",!0)}function s(){c("sidebar-page",!1)}function r(){c("white-page",!1)}function c(e,t){document.body.classList.toggle(e,t),document.documentElement&&document.documentElement.classList.toggle(e,t)}},503:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(366),l=a(372);function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}function r(e){let{fill:t="currentColor"}=e,a=s(e,["fill"]);return n.createElement(l.a,Object.assign({},a),n.createElement("path",{d:"M4.303 5.36a.94.94 0 0 0-.944-.945.94.94 0 0 0-.944.944c0 .524.42.944.944.944a.94.94 0 0 0 .944-.944zm7.866 4.246a.95.95 0 0 1-.273.663l-3.62 3.627a.95.95 0 0 1-1.334 0L1.671 8.618C1.295 8.249 1 7.534 1 7.01V3.944A.95.95 0 0 1 1.944 3H5.01c.523 0 1.238.295 1.614.67l5.271 5.265a.98.98 0 0 1 .273.67zm2.831 0a.95.95 0 0 1-.273.663l-3.62 3.627a.98.98 0 0 1-.67.273c-.384 0-.575-.177-.826-.435l3.465-3.465a.95.95 0 0 0 0-1.334L7.805 3.67C7.429 3.295 6.714 3 6.19 3h1.651c.524 0 1.239.295 1.615.67l5.271 5.265a.98.98 0 0 1 .273.67z",style:{fill:t}}))}}}]);
//# sourceMappingURL=324.m.84b76dfe.chunk.js.map