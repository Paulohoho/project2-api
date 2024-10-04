"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["ui_packages_analytics-provider_analytics-provider_ts-ui_packages_deferred_deferred_ts-ui_pack-65f632"],{21605:(e,t,a)=>{a.d(t,{y:()=>r});var n=a(74848),s=a(96540),i=a(31481);function r({children:e,appName:t,category:a,metadata:r}){let o=(0,s.useMemo)(()=>({appName:t,category:a,metadata:r}),[t,a,r]);return(0,n.jsx)(i.I.Provider,{value:o,children:e})}try{r.displayName||(r.displayName="AnalyticsProvider")}catch{}},31481:(e,t,a)=>{a.d(t,{I:()=>n});let n=(0,a(96540).createContext)(null)},45816:(e,t,a)=>{let n;function s(e,t,a){if(!t.has(e))throw TypeError("attempted to "+a+" private field on non-instance");return t.get(e)}function i(e,t){var a=s(e,t,"get");return a.get?a.get.call(e):a.value}a.d(t,{c:()=>Deferred});var r=new WeakMap;let Deferred=class Deferred{constructor(){!function(e,t,a){(function(e,t){if(t.has(e))throw TypeError("Cannot initialize the same private elements twice on an object")})(e,t),t.set(e,a)}(this,r,{writable:!0,value:void 0}),this[n]="Deferred",function(e,t,a){var n=s(e,t,"set");!function(e,t,a){if(t.set)t.set.call(e,a);else{if(!t.writable)throw TypeError("attempted to set read only private field");t.value=a}}(e,n,a)}(this,r,new Promise((e,t)=>{this.resolve=e,this.reject=t})),this.then=i(this,r).then.bind(i(this,r)),this.catch=i(this,r).catch.bind(i(this,r)),this.finally=i(this,r).finally.bind(i(this,r))}};n=Symbol.toStringTag},51848:(e,t,a)=>{let n;a.d(t,{BI:()=>p,Ti:()=>_,lA:()=>m});var s=a(70837),i=a(18679),r=a(74572),o=a(51528);let{getItem:l}=(0,r.A)("localStorage"),c="dimension_",d=["utm_source","utm_medium","utm_campaign","utm_term","utm_content","scid"];try{let e=(0,s.O)("octolytics");delete e.baseContext,n=new i.s(e)}catch(e){}function u(e){let t=(0,s.O)("octolytics").baseContext||{};if(t)for(let[e,a]of(delete t.app_id,delete t.event_url,delete t.host,Object.entries(t)))e.startsWith(c)&&(t[e.replace(c,"")]=a,delete t[e]);let a=document.querySelector("meta[name=visitor-payload]");for(let[e,n]of(a&&Object.assign(t,JSON.parse(atob(a.content))),new URLSearchParams(window.location.search)))d.includes(e.toLowerCase())&&(t[e]=n);return t.staff=(0,o.X)().toString(),Object.assign(t,e)}function m(e){n?.sendPageView(u(e))}function p(e,t={}){let a=document.head?.querySelector('meta[name="current-catalog-service"]')?.content,s=a?{service:a}:{};for(let[e,a]of Object.entries(t))null!=a&&(s[e]=`${a}`);n&&(u(s),n.sendEvent(e||"unknown",u(s)))}function _(e){return Object.fromEntries(Object.entries(e).map(([e,t])=>[e,JSON.stringify(t)]))}},67726:(e,t,a)=>{a.d(t,{l:()=>n});let n=()=>void 0},23581:(e,t,a)=>{a.d(t,{A:()=>o});let{getItem:n,setItem:s,removeItem:i}=(0,a(74572).A)("localStorage"),r="REACT_PROFILING_ENABLED",o={enable:()=>s(r,"true"),disable:()=>i(r),isEnabled:()=>!!n(r)}},71312:(e,t,a)=>{a.d(t,{S:()=>o,s:()=>r});var n=a(96540),s=a(51848),i=a(31481);function r(){let e=(0,n.useContext)(i.I);if(!e)throw Error("useAnalytics must be used within an AnalyticsContext");let{appName:t,category:a,metadata:r}=e;return{sendAnalyticsEvent:(0,n.useCallback)((e,n,i={})=>{let o={react:!0,app_name:t,category:a,...r};(0,s.BI)(e,{...o,...i,target:n})},[t,a,r])}}function o(){let{sendAnalyticsEvent:e}=r();return{sendClickAnalyticsEvent:(0,n.useCallback)((t={})=>{e("analytics.click",void 0,t)},[e])}}},59840:(e,t,a)=>{a.d(t,{m:()=>i});var n=a(96540),s=a(97156);function i(e,t){s.KJ&&(0,n.useLayoutEffect)(e,t)}},73272:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(59840),s=a(96540);function i(){let e=(0,s.useRef)(!1),t=(0,s.useCallback)(()=>e.current,[]);return(0,n.m)(()=>(e.current=!0,()=>{e.current=!1}),[]),t}},83784:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(73272),s=a(96540);let i=function(e){let t=(0,n.A)(),[a,i]=(0,s.useState)(e);return[a,(0,s.useCallback)(e=>{t()&&i(e)},[t])]}},22629:(e,t,a)=>{a.d(t,{O:()=>v,r:()=>g});var n=a(74848),s=a(71312),i=a(16823),r=a(38553),o=a(89323),l=a(80577),c=a(38621),d=a(96540),u=a(75014);let m=(0,d.lazy)(()=>Promise.all([a.e("primer-react"),a.e("react-core"),a.e("react-lib"),a.e("vendors-node_modules_dompurify_dist_purify_js"),a.e("vendors-node_modules_github_relative-time-element_dist_index_js"),a.e("vendors-node_modules_react-relay_index_js"),a.e("vendors-node_modules_braintree_browser-detection_dist_browser-detection_js-node_modules_githu-bb80ec"),a.e("vendors-node_modules_date-fns_format_mjs"),a.e("vendors-node_modules_date-fns_addWeeks_mjs-node_modules_date-fns_addYears_mjs-node_modules_da-827f4f"),a.e("vendors-node_modules_focus-visible_dist_focus-visible_js-node_modules_fzy_js_index_js-node_mo-c4d1d6"),a.e("vendors-node_modules_github_hotkey_dist_index_js-node_modules_date-fns_getDaysInMonth_mjs-nod-70c11b"),a.e("vendors-node_modules_github_combobox-nav_dist_index_js-node_modules_github_g-emoji-element_di-6ce195"),a.e("vendors-node_modules_react-relay_hooks_js-node_modules_github_paste-markdown_dist_index_js-no-da0d56"),a.e("ui_packages_paths_index_ts"),a.e("ui_packages_ui-commands_ui-commands_ts"),a.e("ui_packages_relay-environment_relay-environment_ts"),a.e("ui_packages_date-picker_date-picker_ts-ui_packages_github-avatar_GitHubAvatar_tsx"),a.e("ui_packages_item-picker_components_RepositoryPicker_tsx"),a.e("ui_packages_issue-create_dialog_CreateIssueDialogEntry_tsx"),a.e("ui_packages_aria-live_aria-live_ts-ui_packages_test-id-props_test-id-props_ts-ui_packages_use-085703")]).then(a.bind(a,36860)));function p({label:e,analyticsLabel:t}){return{category:"SiteHeaderComponent",action:"add_dropdown",label:t||e.toLowerCase()}}function _({label:e,href:t,LeadingVisual:a,analyticsLabel:r}){let{sendClickAnalyticsEvent:o}=(0,s.S)(),l=(0,d.useCallback)(()=>{o(p({label:e,analyticsLabel:r}))},[e,r,o]);return(0,n.jsxs)(i.l.LinkItem,{href:t,onClick:l,children:[(0,n.jsx)(i.l.LeadingVisual,{children:(0,n.jsx)(a,{})}),e]})}function h({label:e,onClick:t,LeadingVisual:a,analyticsLabel:r}){let{sendClickAnalyticsEvent:o}=(0,s.S)(),l=(0,d.useCallback)(()=>{o(p({label:e,analyticsLabel:r})),t()},[e,r,o,t]);return(0,n.jsxs)(i.l.Item,{onSelect:l,children:[(0,n.jsx)(i.l.LeadingVisual,{children:(0,n.jsx)(a,{})}),e]})}function y(){return(0,n.jsx)(r.A,{size:"small"})}function f({side:e="outside-bottom",createRepo:t,importRepo:a,createOrg:s,createProject:r,createProjectUrl:l,createLegacyProject:u,createIssue:p,codespaces:f,gist:j,org:x,owner:g,repo:b,isOpen:v=!1,setIsOpen:C=()=>{},environment:N}){let[w,I]=(0,d.useState)(!1),[k,S]=(0,d.useState)(!1),[L,P]=(0,d.useState)(v);(0,d.useEffect)(()=>{v&&P(!0)},[v]);let O=w&&!k;return(0,n.jsxs)(n.Fragment,{children:[p&&L&&(0,n.jsx)(d.Suspense,{children:(0,n.jsx)(m,{isVisible:w,setIsVisible:I,setIsLoaded:S,setIsParentMenuOpen:C,owner:g,repo:b,environment:N})}),(0,n.jsx)(o.W.Overlay,{side:e,children:(0,n.jsxs)(i.l,{children:[p&&(0,n.jsx)(h,{label:"New issue",onClick:()=>(I(!0),!1),LeadingVisual:O?y:c.IssueOpenedIcon}),!1!==t&&(0,n.jsx)(_,{label:"New repository",href:"/new",LeadingVisual:c.RepoIcon}),a&&(0,n.jsx)(_,{label:"Import repository",href:"/new/import",LeadingVisual:c.RepoPushIcon}),(f||j)&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.l.Divider,{}),f&&(0,n.jsx)(_,{label:"New codespace",href:"/codespaces/new",LeadingVisual:c.CodespacesIcon}),j&&(0,n.jsx)(_,{label:"New gist",href:"/gist",LeadingVisual:c.CodeIcon})]}),(s||r||u)&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.l.Divider,{}),s&&(0,n.jsx)(_,{label:"New organization",href:"/account/organizations/new",LeadingVisual:c.OrganizationIcon}),r&&(0,n.jsx)(_,{label:"New project",analyticsLabel:"new project",href:l,LeadingVisual:c.ProjectIcon}),!r&&u&&(0,n.jsx)(_,{label:"New project",analyticsLabel:"new legacy project",href:"/new/project",LeadingVisual:c.ProjectIcon})]}),x&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.l.Divider,{}),(0,n.jsx)(_,{label:`${x.addWord} someone to ${x.login}`,analyticsLabel:"invite someone",href:`/orgs/${x.login}/people#invite-member`,LeadingVisual:c.PersonAddIcon}),(0,n.jsx)(_,{label:`New team in ${x.login}`,analyticsLabel:"new team",href:`/orgs/${x.login}/new-team`,LeadingVisual:c.PeopleIcon}),(0,n.jsx)(_,{label:`New repository in ${x.login}`,analyticsLabel:"organization - new repository",href:`/organizations/${x.login}/repositories/new`,LeadingVisual:c.RepoIcon})]})]})})]})}function j(e){let{ref:t,open:a,setOpen:s}=(0,u.Mm)(e.reactPartialAnchor);return(0,n.jsx)(o.W,{anchorRef:t,open:a,onOpenChange:s,children:(0,n.jsx)(f,{...e,isOpen:a,setIsOpen:s})})}function x(e){let t=`global-create-menu-tooltip-${(0,d.useId)()}`,[a,s]=(0,d.useState)(!1);return(0,n.jsxs)(o.W,{open:a,onOpenChange:s,children:[(0,n.jsx)(l.m,{text:"Create New...",type:"label",id:t,children:(0,n.jsx)(o.W.Button,{leadingVisual:c.PlusIcon,children:""})}),(0,n.jsx)(f,{...e,isOpen:a,setIsOpen:s})]})}function g(e){return e.reactPartialAnchor?(0,n.jsx)(j,{...e,reactPartialAnchor:e.reactPartialAnchor}):(0,n.jsx)(x,{...e})}let b={"@media (min-width: 48rem)":{display:"none"}};function v(e){let[t,a]=(0,d.useState)(!1);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.W,{open:t,onOpenChange:a,children:[(0,n.jsx)(o.W.Anchor,{children:(0,n.jsxs)(i.l.Item,{sx:b,onSelect:()=>{a(e=>!e)},children:[(0,n.jsx)(i.l.LeadingVisual,{children:(0,n.jsx)(c.PlusIcon,{})}),"Create new"]})}),(0,n.jsx)(f,{...e,isOpen:t,setIsOpen:a,side:"outside-top"})]}),(0,n.jsx)(i.l.Divider,{sx:b})]})}try{m.displayName||(m.displayName="LazyCreateIssueDialog")}catch{}try{_.displayName||(_.displayName="CreateMenuLinkItem")}catch{}try{h.displayName||(h.displayName="CreateMenuItem")}catch{}try{y.displayName||(y.displayName="MenuItemSpinner")}catch{}try{f.displayName||(f.displayName="GlobalCreateMenuOverlay")}catch{}try{j.displayName||(j.displayName="ExternallyAnchoredGlobalCreateMenu")}catch{}try{x.displayName||(x.displayName="GlobalCreateMenuWithAnchor")}catch{}try{g.displayName||(g.displayName="GlobalCreateMenu")}catch{}try{v.displayName||(v.displayName="GlobalCreateMenuItem")}catch{}},47831:(e,t,a)=>{a.d(t,{D3:()=>c,O8:()=>n,xd:()=>l});var n,s=a(74848),i=a(96540),r=a(97156),o=a(59840);!function(e){e.ServerRender="ServerRender",e.ClientHydrate="ClientHydrate",e.ClientRender="ClientRender"}(n||(n={}));let l=(0,i.createContext)("ClientRender");function c({wasServerRendered:e,children:t}){let[a,n]=(0,i.useState)(()=>r.X3?"ServerRender":e?"ClientHydrate":"ClientRender");return(0,o.m)(()=>{"ClientRender"!==a&&n("ClientRender")},[a]),(0,s.jsx)(l.Provider,{value:a,children:t})}try{l.displayName||(l.displayName="RenderPhaseContext")}catch{}try{c.displayName||(c.displayName="RenderPhaseProvider")}catch{}},54156:(e,t,a)=>{a.d(t,{Qn:()=>l,T8:()=>d,Y6:()=>m,k6:()=>u});var n=a(74848),s=a(65556),i=a(96540),r=a(67726),o=a(83784);let l=5e3,c=(0,i.createContext)({addToast:r.l,addPersistedToast:r.l,clearPersistedToast:r.l}),d=(0,i.createContext)({toasts:[],persistedToast:null});function u({children:e}){let[t,a]=(0,o.A)([]),[r,u]=(0,i.useState)(null),{safeSetTimeout:m}=(0,s.A)(),p=(0,i.useCallback)(function(e){a([...t,e]),m(()=>a(t.slice(1)),l)},[t,m,a]),_=(0,i.useCallback)(function(e){u(e)},[u]),h=(0,i.useCallback)(function(){u(null)},[u]),y=(0,i.useMemo)(()=>({addToast:p,addPersistedToast:_,clearPersistedToast:h}),[_,p,h]),f=(0,i.useMemo)(()=>({toasts:t,persistedToast:r}),[t,r]);return(0,n.jsx)(c.Provider,{value:y,children:(0,n.jsx)(d.Provider,{value:f,children:e})})}function m(){return(0,i.useContext)(c)}try{c.displayName||(c.displayName="ToastContext")}catch{}try{d.displayName||(d.displayName="InternalToastsContext")}catch{}try{u.displayName||(u.displayName="ToastContextProvider")}catch{}},67870:(e,t,a)=>{a.d(t,{V:()=>m});var n=a(74848),s=a(96540),i=a(54156),r=a(38621),o=a(65556),l=a(16255);let c={info:"",success:"Toast--success",error:"Toast--error"},d={info:(0,n.jsx)(r.InfoIcon,{}),success:(0,n.jsx)(r.CheckIcon,{}),error:(0,n.jsx)(r.StopIcon,{})},u=({message:e,timeToLive:t,icon:a,type:i="info",role:r="log"})=>{let[u,m]=s.useState(!0),{safeSetTimeout:p}=(0,o.A)();return(0,s.useEffect)(()=>{t&&p(()=>m(!1),t-300)},[p,t]),(0,n.jsx)(l.Z,{children:(0,n.jsx)("div",{className:"p-1 position-fixed bottom-0 left-0 mb-3 ml-3",children:(0,n.jsxs)("div",{className:`Toast ${c[i]} ${u?"Toast--animateIn":"Toast--animateOut"}`,id:"ui-app-toast","data-testid":`ui-app-toast-${i}`,role:r,children:[(0,n.jsx)("span",{className:"Toast-icon",children:a||d[i]}),(0,n.jsx)("span",{className:"Toast-content",children:e})]})})})};try{u.displayName||(u.displayName="Toast")}catch{}function m(){let{toasts:e,persistedToast:t}=(0,s.useContext)(i.T8);return(0,n.jsxs)(n.Fragment,{children:[e.map((e,t)=>(0,n.jsx)(u,{message:e.message,icon:e.icon,timeToLive:i.Qn,type:e.type,role:e.role},t)),t&&(0,n.jsx)(u,{message:t.message,icon:t.icon,type:t.type,role:t.role})]})}try{m.displayName||(m.displayName="Toasts")}catch{}}}]);
//# sourceMappingURL=ui_packages_analytics-provider_analytics-provider_ts-ui_packages_deferred_deferred_ts-ui_pack-65f632-6d8d11adf673.js.map