(window.webpackJsonp=window.webpackJsonp||[]).push([[318],{1778:function(e,t,s){"use strict";s.r(t),s.d(t,"UsersApp",(function(){return ce}));var n=s(366),a=s(393),r=s(495),o=s(396),l=s(404),i=s(441),c=s(412),m=s(6),d=s(368),h=s(376),u=s(470),p=s.n(u),g=s(381),E=s(391),b=s(379),k=s(397),f=s(399),C=s(4);class v extends n.PureComponent{constructor(){super(...arguments),this.handleChange=e=>this.props.onChange(this.props.idx,e.currentTarget.value),this.handleRemove=()=>this.props.onRemove(this.props.idx)}render(){return n.createElement("div",{className:"js-scm-account display-flex-row spacer-bottom"},n.createElement("input",{maxLength:255,onChange:this.handleChange,type:"text",value:this.props.scmAccount}),n.createElement(d.e,{onClick:this.handleRemove}))}}class w extends n.PureComponent{constructor(e){super(e),this.mounted=!1,this.handleError=e=>this.mounted&&[400,500].includes(e.status)?Object(C.g)(e).then(e=>this.setState({error:e}),g.a):Object(g.a)(e),this.handleEmailChange=e=>this.setState({email:e.currentTarget.value}),this.handleLoginChange=e=>this.setState({login:e.currentTarget.value}),this.handleNameChange=e=>this.setState({name:e.currentTarget.value}),this.handlePasswordChange=e=>this.setState({password:e.currentTarget.value}),this.handleCreateUser=()=>Object(r.b)({email:this.state.email||void 0,login:this.state.login,name:this.state.name,password:this.state.password,scmAccount:p()(this.state.scmAccounts)}).then(()=>{this.props.onUpdateUsers(),this.props.onClose()},this.handleError),this.handleUpdateUser=()=>{const{user:e}=this.props;return Object(r.i)({email:e.local?this.state.email:void 0,login:this.state.login,name:e.local?this.state.name:void 0,scmAccount:p()(this.state.scmAccounts)}).then(()=>{this.props.onUpdateUsers(),this.props.onClose()},this.handleError)},this.handleAddScmAccount=()=>{this.setState(({scmAccounts:e})=>({scmAccounts:e.concat("")}))},this.handleUpdateScmAccount=(e,t)=>this.setState(({scmAccounts:s})=>{const n=s.slice();return n[e]=t,{scmAccounts:n}}),this.handleRemoveScmAccount=e=>this.setState(({scmAccounts:t})=>({scmAccounts:t.slice(0,e).concat(t.slice(e+1))}));const{user:t}=e;this.state=t?{email:t.email||"",login:t.login,name:t.name||"",password:"",scmAccounts:t.scmAccounts||[]}:{email:"",login:"",name:"",password:"",scmAccounts:[]}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const{user:e}=this.props,{error:t}=this.state,s=e?Object(m.k)("users.update_user"):Object(m.k)("users.create_user");return n.createElement(E.a,{header:s,onClose:this.props.onClose,onSubmit:e?this.handleUpdateUser:this.handleCreateUser,size:"small"},({onCloseClick:a,onFormSubmit:r,submitting:o})=>n.createElement("form",{autoComplete:"off",id:"user-form",onSubmit:r},n.createElement("header",{className:"modal-head"},n.createElement("h2",null,s)),n.createElement("div",{className:"modal-body modal-container"},t&&n.createElement(b.a,{variant:"error"},t),!t&&e&&!e.local&&n.createElement(b.a,{variant:"warning"},Object(m.k)("users.cannot_update_delegated_user")),n.createElement(f.a,{className:"modal-field"}),!e&&n.createElement("div",{className:"modal-field"},n.createElement("label",{htmlFor:"create-user-login"},Object(m.k)("login"),n.createElement(k.a,null)),n.createElement("input",{className:"hidden",name:"login-fake",type:"text"}),n.createElement("input",{autoFocus:!0,id:"create-user-login",maxLength:255,minLength:3,name:"login",onChange:this.handleLoginChange,required:!0,type:"text",value:this.state.login}),n.createElement("p",{className:"note"},Object(m.l)("users.minimum_x_characters",3))),n.createElement("div",{className:"modal-field"},n.createElement("label",{htmlFor:"create-user-name"},Object(m.k)("name"),n.createElement(k.a,null)),n.createElement("input",{className:"hidden",name:"name-fake",type:"text"}),n.createElement("input",{autoFocus:!!e,disabled:e&&!e.local,id:"create-user-name",maxLength:200,name:"name",onChange:this.handleNameChange,required:!0,type:"text",value:this.state.name})),n.createElement("div",{className:"modal-field"},n.createElement("label",{htmlFor:"create-user-email"},Object(m.k)("users.email")),n.createElement("input",{className:"hidden",name:"email-fake",type:"email"}),n.createElement("input",{disabled:e&&!e.local,id:"create-user-email",maxLength:100,name:"email",onChange:this.handleEmailChange,type:"email",value:this.state.email})),!e&&n.createElement("div",{className:"modal-field"},n.createElement("label",{htmlFor:"create-user-password"},Object(m.k)("password"),n.createElement(k.a,null)),n.createElement("input",{className:"hidden",name:"password-fake",type:"password"}),n.createElement("input",{id:"create-user-password",name:"password",onChange:this.handlePasswordChange,required:!0,type:"password",value:this.state.password})),n.createElement("div",{className:"modal-field"},n.createElement("label",null,Object(m.k)("my_profile.scm_accounts")),this.state.scmAccounts.map((e,t)=>n.createElement(v,{idx:t,key:t,onChange:this.handleUpdateScmAccount,onRemove:this.handleRemoveScmAccount,scmAccount:e})),n.createElement("div",{className:"spacer-bottom"},n.createElement(d.a,{className:"js-scm-account-add",onClick:this.handleAddScmAccount},Object(m.k)("add_verb"))),n.createElement("p",{className:"note"},Object(m.k)("user.login_or_email_used_as_scm_account")))),n.createElement("footer",{className:"modal-foot"},o&&n.createElement("i",{className:"spinner spacer-right"}),n.createElement(d.h,{disabled:o},e?Object(m.k)("update_verb"):Object(m.k)("create")),n.createElement(d.g,{onClick:a},Object(m.k)("cancel")))))}}class O extends n.PureComponent{constructor(){super(...arguments),this.state={openUserForm:!1},this.handleOpenUserForm=()=>{this.setState({openUserForm:!0})},this.handleCloseUserForm=()=>{this.setState({openUserForm:!1})}}render(){return n.createElement("header",{className:"page-header",id:"users-header"},n.createElement("h1",{className:"page-title"},Object(m.k)("users.page")),n.createElement(h.a,{loading:this.props.loading}),n.createElement("div",{className:"page-actions"},n.createElement(d.a,{id:"users-create",onClick:this.handleOpenUserForm},Object(m.k)("users.create_user"))),n.createElement("p",{className:"page-description"},Object(m.k)("users.page.description")),this.state.openUserForm&&n.createElement(w,{onClose:this.handleCloseUserForm,onUpdateUsers:this.props.onUpdateUsers}))}}var j=s(414);class N extends n.PureComponent{constructor(){super(...arguments),this.handleSearch=e=>{this.props.updateQuery({search:e})}}render(){const{query:e}=this.props;return n.createElement("div",{className:"panel panel-vertical bordered-bottom spacer-bottom",id:"users-search"},n.createElement(j.a,{minLength:2,onChange:this.handleSearch,placeholder:Object(m.k)("search.search_by_login_or_name"),value:e.search}))}}var y=s(639),S=s(416),U=s(447),P=s(371),_=s(389),F=s(944);function T(e){return n.createElement(_.a,{contentLabel:Object(m.k)("users.tokens"),onRequestClose:e.onClose},n.createElement("header",{className:"modal-head"},n.createElement("h2",null,n.createElement(P.FormattedMessage,{defaultMessage:Object(m.k)("users.user_X_tokens"),id:"users.user_X_tokens",values:{user:n.createElement("em",null,e.user.name)}}))),n.createElement("div",{className:"modal-body modal-container"},n.createElement(F.a,{deleteConfirmation:"inline",login:e.user.login,updateTokensCount:e.updateTokensCount})),n.createElement("footer",{className:"modal-foot"},n.createElement(d.g,{onClick:e.onClose},Object(m.k)("Done"))))}var x=s(437),D=s(402);class M extends n.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={submitting:!1},this.handleDeactivate=e=>{e.preventDefault(),this.setState({submitting:!0}),Object(r.c)({login:this.props.user.login}).then(()=>{this.props.onUpdateUsers(),this.props.onClose()},()=>{this.mounted&&this.setState({submitting:!1})})}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const{user:e}=this.props,{submitting:t}=this.state,s=Object(m.k)("users.deactivate_user");return n.createElement(_.a,{contentLabel:s,onRequestClose:this.props.onClose},n.createElement("form",{autoComplete:"off",id:"deactivate-user-form",onSubmit:this.handleDeactivate},n.createElement("header",{className:"modal-head"},n.createElement("h2",null,s)),n.createElement("div",{className:"modal-body"},Object(m.l)("users.deactivate_user.confirmation",e.name,e.login)),n.createElement("footer",{className:"modal-foot"},t&&n.createElement("i",{className:"spinner spacer-right"}),n.createElement(d.h,{className:"js-confirm button-red",disabled:t},Object(m.k)("users.deactivate")),n.createElement(d.g,{className:"js-modal-close",onClick:this.props.onClose},Object(m.k)("cancel")))))}}var A=s(473);class q extends n.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={confirmPassword:"",newPassword:"",oldPassword:"",submitting:!1},this.handleError=e=>this.mounted&&400===e.status?Object(C.g)(e).then(e=>this.setState({error:e,submitting:!1}),g.a):Object(g.a)(e),this.handleConfirmPasswordChange=e=>this.setState({confirmPassword:e.currentTarget.value}),this.handleNewPasswordChange=e=>this.setState({newPassword:e.currentTarget.value}),this.handleOldPasswordChange=e=>this.setState({oldPassword:e.currentTarget.value}),this.handleChangePassword=e=>{e.preventDefault(),this.state.newPassword.length>0&&this.state.newPassword===this.state.confirmPassword&&(this.setState({submitting:!0}),Object(r.a)({login:this.props.user.login,password:this.state.newPassword,previousPassword:this.state.oldPassword}).then(()=>{Object(A.a)(Object(m.k)("my_profile.password.changed")),this.props.onClose()},this.handleError))}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const{error:e,submitting:t,newPassword:s,confirmPassword:a}=this.state,r=Object(m.k)("my_profile.password.title");return n.createElement(_.a,{contentLabel:r,onRequestClose:this.props.onClose,size:"small"},n.createElement("form",{autoComplete:"off",id:"user-password-form",onSubmit:this.handleChangePassword},n.createElement("header",{className:"modal-head"},n.createElement("h2",null,r)),n.createElement("div",{className:"modal-body"},e&&n.createElement(b.a,{variant:"error"},e),n.createElement(f.a,{className:"modal-field"}),this.props.isCurrentUser&&n.createElement("div",{className:"modal-field"},n.createElement("label",{htmlFor:"old-user-password"},Object(m.k)("my_profile.password.old"),n.createElement(k.a,null)),n.createElement("input",{className:"hidden",name:"old-password-fake",type:"password"}),n.createElement("input",{id:"old-user-password",name:"old-password",onChange:this.handleOldPasswordChange,required:!0,type:"password",value:this.state.oldPassword})),n.createElement("div",{className:"modal-field"},n.createElement("label",{htmlFor:"user-password"},Object(m.k)("my_profile.password.new"),n.createElement(k.a,null)),n.createElement("input",{className:"hidden",name:"password-fake",type:"password"}),n.createElement("input",{id:"user-password",name:"password",onChange:this.handleNewPasswordChange,required:!0,type:"password",value:this.state.newPassword})),n.createElement("div",{className:"modal-field"},n.createElement("label",{htmlFor:"confirm-user-password"},Object(m.k)("my_profile.password.confirm"),n.createElement(k.a,null)),n.createElement("input",{className:"hidden",name:"confirm-password-fake",type:"password"}),n.createElement("input",{id:"confirm-user-password",name:"confirm-password",onChange:this.handleConfirmPasswordChange,required:!0,type:"password",value:this.state.confirmPassword}))),n.createElement("footer",{className:"modal-foot"},t&&n.createElement("i",{className:"spinner spacer-right"}),n.createElement(d.h,{disabled:t||!s||s!==a},Object(m.k)("change_verb")),n.createElement(d.g,{onClick:this.props.onClose},Object(m.k)("cancel")))))}}class R extends n.PureComponent{constructor(){super(...arguments),this.state={},this.handleOpenDeactivateForm=()=>{this.setState({openForm:"deactivate"})},this.handleOpenPasswordForm=()=>{this.setState({openForm:"password"})},this.handleOpenUpdateForm=()=>{this.setState({openForm:"update"})},this.handleCloseForm=()=>{this.setState({openForm:void 0})},this.renderActions=()=>{const{user:e}=this.props;return n.createElement(x.c,null,n.createElement(x.b,{className:"js-user-update",onClick:this.handleOpenUpdateForm},Object(m.k)("update_details")),e.local&&n.createElement(x.b,{className:"js-user-change-password",onClick:this.handleOpenPasswordForm},Object(m.k)("my_profile.password.title")),n.createElement(x.a,null),Object(D.c)(e)&&n.createElement(x.b,{className:"js-user-deactivate",destructive:!0,onClick:this.handleOpenDeactivateForm},Object(m.k)("users.deactivate")))}}render(){const{openForm:e}=this.state,{isCurrentUser:t,onUpdateUsers:s,user:a}=this.props;return n.createElement(n.Fragment,null,this.renderActions(),"deactivate"===e&&Object(D.c)(a)&&n.createElement(M,{onClose:this.handleCloseForm,onUpdateUsers:s,user:a}),"password"===e&&n.createElement(q,{isCurrentUser:t,onClose:this.handleCloseForm,user:a}),"update"===e&&n.createElement(w,{onClose:this.handleCloseForm,onUpdateUsers:s,user:a}))}}var L=s(405),B=s.n(L),G=s(521),I=s.n(G),W=s(903),z=s(571);class H extends n.PureComponent{constructor(e){super(e),this.mounted=!1,this.fetchUsers=e=>Object(r.e)({login:this.props.user.login,p:e.page,ps:e.pageSize,q:""!==e.query?e.query:void 0,selected:e.filter}).then(t=>{this.mounted&&this.setState(s=>{const n=null!=e.page&&e.page>1,a=n?[...s.groups,...t.groups]:t.groups,r=t.groups.filter(e=>e.selected).map(e=>e.name),o=n?[...s.selectedGroups,...r]:r;return{lastSearchParams:e,needToReload:!1,groups:a,groupsTotalCount:t.paging.total,selectedGroups:o}})}),this.handleSelect=e=>Object(W.a)({name:e,login:this.props.user.login}).then(()=>{this.mounted&&this.setState(t=>({needToReload:!0,selectedGroups:[...t.selectedGroups,e]}))}),this.handleUnselect=e=>Object(W.e)({name:e,login:this.props.user.login}).then(()=>{this.mounted&&this.setState(t=>({needToReload:!0,selectedGroups:B()(t.selectedGroups,e)}))}),this.handleCloseClick=e=>{e.preventDefault(),this.handleClose()},this.handleClose=()=>{this.props.onUpdateUsers(),this.props.onClose()},this.renderElement=e=>{const t=I()(this.state.groups,{name:e});return n.createElement("div",{className:"select-list-list-item"},void 0===t?e:n.createElement(n.Fragment,null,t.name,n.createElement("br",null),n.createElement("span",{className:"note"},t.description)))},this.state={needToReload:!1,groups:[],selectedGroups:[]}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const e=Object(m.k)("users.update_groups");return n.createElement(_.a,{contentLabel:e,onRequestClose:this.handleClose},n.createElement("div",{className:"modal-head"},n.createElement("h2",null,e)),n.createElement("div",{className:"modal-body modal-container"},n.createElement(z.b,{elements:this.state.groups.map(e=>e.name),elementsTotalCount:this.state.groupsTotalCount,needToReload:this.state.needToReload&&this.state.lastSearchParams&&this.state.lastSearchParams.filter!==z.a.All,onSearch:this.fetchUsers,onSelect:this.handleSelect,onUnselect:this.handleUnselect,renderElement:this.renderElement,selectedElements:this.state.selectedGroups,withPaging:!0})),n.createElement("footer",{className:"modal-foot"},n.createElement("a",{className:"js-modal-close",href:"#",onClick:this.handleCloseClick},Object(m.k)("Done"))))}}class Q extends n.PureComponent{constructor(){super(...arguments),this.state={openForm:!1,showMore:!1},this.handleOpenForm=()=>this.setState({openForm:!0}),this.handleCloseForm=()=>this.setState({openForm:!1}),this.toggleShowMore=e=>{e.preventDefault(),this.setState(e=>({showMore:!e.showMore}))}}render(){const{groups:e}=this.props,t=e.length>3?2:3;return n.createElement("ul",null,e.slice(0,t).map(e=>n.createElement("li",{className:"little-spacer-bottom",key:e},e)),e.length>3&&this.state.showMore&&e.slice(t).map(e=>n.createElement("li",{className:"little-spacer-bottom",key:e},e)),n.createElement("li",{className:"little-spacer-bottom"},e.length>3&&!this.state.showMore&&n.createElement("a",{className:"js-user-more-groups spacer-right",href:"#",onClick:this.toggleShowMore},Object(m.l)("more_x",e.length-t)),n.createElement(d.b,{className:"js-user-groups button-small",onClick:this.handleOpenForm,tooltip:Object(m.k)("users.update_groups")},n.createElement(y.a,null))),this.state.openForm&&n.createElement(H,{onClose:this.handleCloseForm,onUpdateUsers:this.props.onUpdateUsers,user:this.props.user}))}}var X=s(375),J=s(762),V=s(0);function K({identityProvider:e,user:t}){return n.createElement("td",{className:"text-middle"},n.createElement("div",null,n.createElement("strong",{className:"js-user-name"},t.name),n.createElement("span",{className:"js-user-login note little-spacer-left"},t.login)),t.email&&n.createElement("div",{className:"js-user-email little-spacer-top"},t.email),!t.local&&"sonarqube"!==t.externalProvider&&n.createElement(Y,{identityProvider:e,user:t}))}function Y({identityProvider:e,user:t}){return e?n.createElement("div",{className:"js-user-identity-provider little-spacer-top"},n.createElement("div",{className:"identity-provider",style:{backgroundColor:e.backgroundColor,color:Object(J.a)(e.backgroundColor,X.colors.secondFontColor)}},n.createElement("img",{alt:e.name,className:"little-spacer-right",height:"14",src:Object(V.getBaseUrl)()+e.iconPath,width:"14"}),t.externalIdentity)):n.createElement("div",{className:"js-user-identity-provider little-spacer-top"},n.createElement("span",null,t.externalProvider,": ",t.externalIdentity))}class Z extends n.PureComponent{constructor(){super(...arguments),this.state={showMore:!1},this.toggleShowMore=e=>{e.preventDefault(),this.setState(e=>({showMore:!e.showMore}))}}render(){const{scmAccounts:e}=this.props,t=e.length>3?2:3;return n.createElement("ul",{className:"js-scm-accounts"},e.slice(0,t).map((e,t)=>n.createElement("li",{className:"little-spacer-bottom",key:t},e)),e.length>3&&(this.state.showMore?e.slice(t).map((e,s)=>n.createElement("li",{className:"little-spacer-bottom",key:s+t},e)):n.createElement("li",{className:"little-spacer-bottom"},n.createElement("a",{className:"js-user-more-scm",href:"#",onClick:this.toggleShowMore},Object(m.l)("more_x",e.length-t)))))}}class $ extends n.PureComponent{constructor(){super(...arguments),this.state={openTokenForm:!1},this.handleOpenTokensForm=()=>this.setState({openTokenForm:!0}),this.handleCloseTokensForm=()=>this.setState({openTokenForm:!1})}render(){const{identityProvider:e,onUpdateUsers:t,user:s}=this.props;return n.createElement("tr",null,n.createElement("td",{className:"thin nowrap text-middle"},n.createElement(U.a,{hash:s.avatar,name:s.name,size:36})),n.createElement(K,{identityProvider:e,user:s}),n.createElement("td",{className:"thin nowrap text-middle"},n.createElement(Z,{scmAccounts:s.scmAccounts||[]})),n.createElement("td",{className:"thin nowrap text-middle"},n.createElement(S.a,{date:s.lastConnectionDate,hourPrecision:!0})),n.createElement("td",{className:"thin nowrap text-middle"},n.createElement(Q,{groups:s.groups||[],onUpdateUsers:t,user:s})),n.createElement("td",{className:"thin nowrap text-middle"},s.tokensCount,n.createElement(d.b,{className:"js-user-tokens spacer-left button-small",onClick:this.handleOpenTokensForm,tooltip:Object(m.k)("users.update_tokens")},n.createElement(y.a,null))),n.createElement("td",{className:"thin nowrap text-right text-middle"},n.createElement(R,{isCurrentUser:this.props.isCurrentUser,onUpdateUsers:t,user:s})),this.state.openTokenForm&&n.createElement(T,{onClose:this.handleCloseTokensForm,updateTokensCount:this.props.updateTokensCount,user:s}))}}function ee({currentUser:e,identityProviders:t,onUpdateUsers:s,updateTokensCount:a,users:r}){return n.createElement("div",{className:"boxed-group boxed-group-inner"},n.createElement("table",{className:"data zebra",id:"users-list"},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null),n.createElement("th",{className:"nowrap"}),n.createElement("th",{className:"nowrap"},Object(m.k)("my_profile.scm_accounts")),n.createElement("th",{className:"nowrap"},Object(m.k)("users.last_connection")),n.createElement("th",{className:"nowrap"},Object(m.k)("my_profile.groups")),n.createElement("th",{className:"nowrap"},Object(m.k)("users.tokens")),n.createElement("th",{className:"nowrap"}," "))),n.createElement("tbody",null,r.map(r=>n.createElement($,{identityProvider:t.find(e=>r.externalProvider===e.key),isCurrentUser:e.isLoggedIn&&e.login===r.login,key:r.login,onUpdateUsers:s,updateTokensCount:a,user:r})))))}var te=s(14),se=s.n(te),ne=s(507);const ae=se()(e=>({search:Object(ne.g)(e.search)})),re=se()(e=>Object(ne.a)({search:e.search?Object(ne.l)(e.search):void 0}));function oe(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function le(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(s),!0).forEach((function(t){ie(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):oe(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function ie(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class ce extends n.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={identityProviders:[],loading:!0,users:[]},this.finishLoading=()=>{this.mounted&&this.setState({loading:!1})},this.fetchIdentityProviders=()=>Object(r.d)().then(({identityProviders:e})=>{this.mounted&&this.setState({identityProviders:e})}),this.fetchUsers=({location:e}=this.props)=>{this.setState({loading:!0}),Object(r.f)({q:ae(e.query).search}).then(({paging:e,users:t})=>{this.mounted&&this.setState({loading:!1,paging:e,users:t})},this.finishLoading)},this.fetchMoreUsers=()=>{const{paging:e}=this.state;e&&(this.setState({loading:!0}),Object(r.f)({p:e.pageIndex+1,q:ae(this.props.location.query).search}).then(({paging:e,users:t})=>{this.mounted&&this.setState(s=>({loading:!1,users:[...s.users,...t],paging:e}))},this.finishLoading))},this.updateQuery=e=>{const t=re(le({},ae(this.props.location.query),{},e));this.props.router.push(le({},this.props.location,{query:t}))},this.updateTokensCount=(e,t)=>{this.setState(s=>({users:s.users.map(s=>s.login===e?le({},s,{tokensCount:t}):s)}))}}componentDidMount(){this.mounted=!0,this.fetchIdentityProviders(),this.fetchUsers()}componentWillReceiveProps(e){e.location.query.search!==this.props.location.query.search&&this.fetchUsers(e)}componentWillUnmount(){this.mounted=!1}render(){const e=ae(this.props.location.query),{loading:t,paging:s,users:r}=this.state;return n.createElement("div",{className:"page page-limited",id:"users-page"},n.createElement(o.a,{suggestions:"users"}),n.createElement(a.a,{defer:!1,title:Object(m.k)("users.page")}),n.createElement(O,{loading:t,onUpdateUsers:this.fetchUsers}),n.createElement(N,{query:e,updateQuery:this.updateQuery}),n.createElement(ee,{currentUser:this.props.currentUser,identityProviders:this.state.identityProviders,onUpdateUsers:this.fetchUsers,updateTokensCount:this.updateTokensCount,users:r}),void 0!==s&&n.createElement(l.a,{count:r.length,loadMore:this.fetchMoreUsers,ready:!t,total:s.total}))}}t.default=Object(c.a)(Object(i.a)(ce))},398:function(e,t,s){"use strict";s.d(t,"b",(function(){return o})),s.d(t,"a",(function(){return l}));var n=s(366),a=s(371),r=s(21);const o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"};function l({children:e,date:t}){return n.createElement(a.FormattedDate,Object.assign({value:Object(r.b)(t)},o),e)}},410:function(e,t,s){"use strict";s.d(t,"a",(function(){return c}));var n=s(366),a=s(6),r=s(376),o=s(368),l=s(482),i=s(391);class c extends n.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.handleSubmit=()=>{const e=this.props.onConfirm(this.props.confirmData);if(e)return e.then(this.props.onClose,()=>{});this.props.onClose()},this.renderModalContent=({onCloseClick:e,onFormSubmit:t,submitting:s})=>{const{children:i,confirmButtonText:c,confirmDisable:m,header:d,headerDescription:h,isDestructive:u,cancelButtonText:p=Object(a.k)("cancel")}=this.props;return n.createElement(l.a,null,n.createElement("form",{onSubmit:t},n.createElement("header",{className:"modal-head"},n.createElement("h2",null,d),h),n.createElement("div",{className:"modal-body"},i),n.createElement("footer",{className:"modal-foot"},n.createElement(r.a,{className:"spacer-right",loading:s}),n.createElement(o.h,{autoFocus:!0,className:u?"button-red":void 0,disabled:s||m},c),n.createElement(o.g,{disabled:s,onClick:e},p))))}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const{header:e,onClose:t,noBackdrop:s,size:a}=this.props,r={header:e,onClose:t,noBackdrop:s,size:a};return n.createElement(i.a,Object.assign({onSubmit:this.handleSubmit},r),this.renderModalContent)}}},416:function(e,t,s){"use strict";s.d(t,"a",(function(){return c}));var n=s(463),a=s(366),r=s(371),o=s(21),l=s(6),i=s(398);function c(e){const{children:t=(e=>e),date:s,hourPrecision:c}=e;let m=t;if(!s)return a.createElement(a.Fragment,null,t(Object(l.k)("never")));s&&c&&Object(n.differenceInHours)(Date.now(),s)<1&&(m=()=>t(Object(l.k)("less_than_1_hour_ago")));const d=Object(o.b)(s);return a.createElement(i.a,{date:d},e=>a.createElement("span",{title:e},a.createElement(r.FormattedRelative,{value:d},m)))}},424:function(e,t,s){"use strict";s.d(t,"b",(function(){return l})),s.d(t,"a",(function(){return i}));var n=s(366),a=s(371),r=s(21);const o={year:"numeric",month:"short",day:"2-digit"},l={year:"numeric",month:"long",day:"numeric"};function i({children:e,date:t,long:s}){return n.createElement(a.FormattedDate,Object.assign({value:Object(r.b)(t)},s?l:o),e)}},442:function(e,t,s){"use strict";s.d(t,"a",(function(){return l}));var n=s(366),a=s(410),r=s(443);function o(e,t){if(null==e)return{};var s,n,a=function(e,t){if(null==e)return{};var s,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||(a[s]=e[s]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}class l extends n.PureComponent{constructor(){super(...arguments),this.renderConfirmModal=({onClose:e})=>{const t=this.props,{children:s,modalBody:r,modalHeader:l,modalHeaderDescription:i}=t,c=o(t,["children","modalBody","modalHeader","modalHeaderDescription"]);return n.createElement(a.a,Object.assign({header:l,headerDescription:i,onClose:e},c),r)}}render(){return n.createElement(r.a,{modal:this.renderConfirmModal},this.props.children)}}},443:function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));var n=s(366);class a extends n.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={modal:!1},this.handleButtonClick=()=>{this.setState({modal:!0})},this.handleFormSubmit=e=>{e&&e.preventDefault(),this.setState({modal:!0})},this.handleCloseModal=()=>{this.mounted&&this.setState({modal:!1})}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){return n.createElement(n.Fragment,null,this.props.children({onClick:this.handleButtonClick,onFormSubmit:this.handleFormSubmit}),this.state.modal&&this.props.modal({onClose:this.handleCloseModal}))}}},473:function(e,t,s){"use strict";s.d(t,"a",(function(){return r}));var n=s(448),a=s(455);function r(e){Object(a.default)().dispatch(n.b(e))}},621:function(e,t,s){"use strict";s.d(t,"b",(function(){return r})),s.d(t,"a",(function(){return o})),s.d(t,"c",(function(){return l}));var n=s(381),a=s(4);function r(e){return Object(a.d)("/api/user_tokens/search",{login:e}).then(e=>e.userTokens,n.a)}function o(e){return Object(a.j)("/api/user_tokens/generate",e).catch(n.a)}function l(e){return Object(a.i)("/api/user_tokens/revoke",e).catch(n.a)}},944:function(e,t,s){"use strict";s.d(t,"a",(function(){return k}));var n=s(366),a=s(621),r=s(368),o=s(376),l=s(6),i=s(371),c=s(442),m=s(374),d=s(424),h=s(416),u=s(453);class p extends n.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:!1,showConfirmation:!1},this.handleClick=()=>{this.state.showConfirmation?this.handleRevoke().then(()=>{this.mounted&&this.setState({showConfirmation:!1})}):this.setState({showConfirmation:!0})},this.handleRevoke=()=>(this.setState({loading:!0}),Object(a.c)({login:this.props.login,name:this.props.token.name}).then(()=>this.props.onRevokeToken(this.props.token),()=>{this.mounted&&this.setState({loading:!1})}))}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const{deleteConfirmation:e,token:t}=this.props,{loading:s,showConfirmation:a}=this.state;return n.createElement("tr",null,n.createElement("td",null,n.createElement(m.a,{overlay:t.name},n.createElement("span",null,Object(u.e)(t.name,20)))),n.createElement("td",{className:"nowrap"},n.createElement(h.a,{date:t.lastConnectionDate,hourPrecision:!0})),n.createElement("td",{className:"thin nowrap text-right"},n.createElement(d.a,{date:t.createdAt,long:!0})),n.createElement("td",{className:"thin nowrap text-right"},n.createElement(o.a,{loading:s},n.createElement("i",{className:"deferred-spinner-placeholder"})),"modal"===e?n.createElement(c.a,{confirmButtonText:Object(l.k)("users.tokens.revoke_token"),isDestructive:!0,modalBody:n.createElement(i.FormattedMessage,{defaultMessage:Object(l.k)("users.tokens.sure_X"),id:"users.tokens.sure_X",values:{token:n.createElement("strong",null,t.name)}}),modalHeader:Object(l.k)("users.tokens.revoke_token"),onConfirm:this.handleRevoke},({onClick:e})=>n.createElement(r.a,{className:"spacer-left button-red input-small",disabled:s,onClick:e,title:Object(l.k)("users.tokens.revoke_token")},Object(l.k)("users.tokens.revoke"))):n.createElement(r.a,{className:"button-red input-small spacer-left",disabled:s,onClick:this.handleClick},a?Object(l.k)("users.tokens.sure"):Object(l.k)("users.tokens.revoke"))))}}var g=s(392),E=s(379);function b({token:e}){return n.createElement("div",{className:"panel panel-white big-spacer-top"},n.createElement(E.a,{variant:"warning"},Object(l.l)("users.tokens.new_token_created",e.name)),n.createElement(g.b,{copyValue:e.token}),n.createElement("code",{className:"big-spacer-left text-success"},e.token))}class k extends n.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={generating:!1,loading:!0,newTokenName:"",tokens:[]},this.fetchTokens=()=>{this.setState({loading:!0}),Object(a.b)(this.props.login).then(e=>{this.mounted&&this.setState({loading:!1,tokens:e})},()=>{this.mounted&&this.setState({loading:!1})})},this.updateTokensCount=()=>{this.props.updateTokensCount&&this.props.updateTokensCount(this.props.login,this.state.tokens.length)},this.handleGenerateToken=e=>{e.preventDefault(),this.state.newTokenName.length>0&&(this.setState({generating:!0}),Object(a.a)({name:this.state.newTokenName,login:this.props.login}).then(e=>{this.mounted&&this.setState(t=>{const s=[...t.tokens,{name:e.name,createdAt:e.createdAt}];return{generating:!1,newToken:e,newTokenName:"",tokens:s}},this.updateTokensCount)},()=>{this.mounted&&this.setState({generating:!1})}))},this.handleRevokeToken=e=>{this.setState(t=>({tokens:t.tokens.filter(t=>t.name!==e.name)}),this.updateTokensCount)},this.handleNewTokenChange=e=>this.setState({newTokenName:e.currentTarget.value})}componentDidMount(){this.mounted=!0,this.fetchTokens()}componentWillUnmount(){this.mounted=!1}renderItems(){const{tokens:e}=this.state;return e.length<=0?n.createElement("tr",null,n.createElement("td",{className:"note",colSpan:3},Object(l.k)("users.no_tokens"))):e.map(e=>n.createElement(p,{deleteConfirmation:this.props.deleteConfirmation,key:e.name,login:this.props.login,onRevokeToken:this.handleRevokeToken,token:e}))}render(){const{generating:e,loading:t,newToken:s,newTokenName:a,tokens:i}=this.state,c=n.createElement("tr",null,n.createElement("td",null,n.createElement("i",{className:"spinner"})));return n.createElement(n.Fragment,null,n.createElement("h3",{className:"spacer-bottom"},Object(l.k)("users.generate_tokens")),n.createElement("form",{autoComplete:"off",className:"display-flex-center",id:"generate-token-form",onSubmit:this.handleGenerateToken},n.createElement("input",{className:"input-large spacer-right",maxLength:100,onChange:this.handleNewTokenChange,placeholder:Object(l.k)("users.enter_token_name"),required:!0,type:"text",value:a}),n.createElement(r.h,{className:"js-generate-token",disabled:e||a.length<=0},Object(l.k)("users.generate"))),s&&n.createElement(b,{token:s}),n.createElement("table",{className:"data zebra big-spacer-top"},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,Object(l.k)("name")),n.createElement("th",null,Object(l.k)("my_account.tokens_last_usage")),n.createElement("th",{className:"text-right"},Object(l.k)("created")),n.createElement("th",null))),n.createElement("tbody",null,n.createElement(o.a,{customSpinner:c,loading:t&&i.length<=0},this.renderItems()))))}}}}]);
//# sourceMappingURL=318.m.686122d4.chunk.js.map