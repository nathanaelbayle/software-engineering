(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1662:function(t,e,n){"use strict";n.r(e),n.d(e,"PageTracker",(function(){return p}));var a=n(366),c=n(393),s=n(382),o=n(412),r=n(1663),i=n(545),u=n(15),d=n(0),l=n(385);class p extends a.Component{constructor(){super(...arguments),this.state={},this.trackPage=()=>{const{location:t,trackingIdGTM:e}=this.props,{lastLocation:n}=this.state,{dataLayer:a}=window,c=t.pathname!==n,s=Object(u.b)();s&&c?(this.setState({lastLocation:t.pathname}),setTimeout(()=>s(t.pathname),500)):a&&a.push&&e&&"/"!==t.pathname&&(this.setState({lastLocation:t.pathname}),setTimeout(()=>a.push({event:"render-end"}),500))}}componentDidMount(){const{trackingIdGTM:t,webAnalytics:e}=this.props;e&&!Object(u.b)()&&Object(i.b)(e,"head"),t&&Object(r.gtm)(t)}render(){const{trackingIdGTM:t,webAnalytics:e}=this.props;return a.createElement(c.a,{defaultTitle:Object(d.getInstance)(),defer:!1,onChangeClientState:t||e?this.trackPage:void 0},this.props.children)}}e.default=Object(o.a)(Object(s.b)(t=>{const e=Object(l.getGlobalSettingValue)(t,"sonar.analytics.gtm.trackingId");return{trackingIdGTM:e&&e.value,webAnalytics:Object(l.getAppState)(t).webAnalyticsJsPath}})(p))},1663:function(t,e,n){"use strict";t.exports={gtm:t=>function(t,e,n,a,c){t[a]=t[a]||[],t[a].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});const s=e.getElementsByTagName(n)[0],o=e.createElement(n);o.async=!0,o.src="https://www.googletagmanager.com/gtm.js?id="+c,s.parentNode.insertBefore(o,s)}(window,document,"script","dataLayer",t)}},545:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return r}));var a=n(0),c=n(15);let s=!1;function o(t,e="body"){return new Promise(n=>{const c=document.createElement("script");c.src="".concat(Object(a.getBaseUrl)()).concat(t),c.onload=n,document.getElementsByTagName(e)[0].appendChild(c)})}async function r(t){const e=Object(c.a)(t);if(e)return Promise.resolve(e);if(!s){s=!0,(0,(await Promise.all([n.e(0),n.e(349),n.e(16),n.e(288)]).then(n.bind(null,687))).default)()}await o("/static/".concat(t,".js"));const a=Object(c.a)(t);return a||Promise.reject()}}}]);
//# sourceMappingURL=21.m.3816c070.chunk.js.map