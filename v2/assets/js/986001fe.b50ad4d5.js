"use strict";(self.webpackChunkqfpay_sdk=self.webpackChunkqfpay_sdk||[]).push([[780],{11002:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=t(74848),a=t(28453);t(11470),t(19365),t(28774);const s={},i="Visa / Mastercard Online Payments",l={id:"online-shop/visa-master-online-payment",title:"Visa / Mastercard Online Payments",description:"We currently support credit card payments in the Hong Kong environment. All major credit card issuers are supported.",source:"@site/docs/03-online-shop/01-visa-master-online-payment.md",sourceDirName:"03-online-shop",slug:"/online-shop/visa-master-online-payment",permalink:"/docs/v2/docs/online-shop/visa-master-online-payment",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"qfpaySidebar",previous:{title:"Recurring Payment",permalink:"/docs/v2/docs/online-shop/qfpay-recurring-payment"},next:{title:"WAP Payment",permalink:"/docs/v2/docs/online-shop/wap-payment"}},o={},c=[{value:"Payment Steps",id:"payment-steps",level:2},{value:"Asynchronous Notification",id:"asynchronous-notification",level:2},{value:"Test cards",id:"test-cards",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"visa--mastercard-online-payments",children:"Visa / Mastercard Online Payments"}),"\n",(0,r.jsxs)(n.p,{children:["We currently support credit card payments in the ",(0,r.jsx)(n.a,{href:"../preparation/introduction#environments",children:"Hong Kong environment"}),". All major credit card issuers are supported."]}),"\n",(0,r.jsx)(n.h2,{id:"payment-steps",children:"Payment Steps"}),"\n",(0,r.jsx)(n.p,{children:"For credit card online payment integration, merchant can select one the the following integration methods"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./checkout",children:"QFPay Checkout Services"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./paymentelement",children:"QFPay Element SDK"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"asynchronous-notification",children:"Asynchronous Notification"}),"\n",(0,r.jsx)(n.p,{children:"QFPay will also send the asynchronous payment notification for the transaction status update"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Sample notification payload"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "cardtp": "5",\n    "cancel": "0",\n    "pay_type": "802801",\n    "order_type": "payment",\n    "clisn": "054256",\n    "txdtm": "2021-12-08 07:04:15",\n    "goods_detail": "",\n    "out_trade_no": "354267281",\n    "syssn": "20211208180500020000001637",\n    "sysdtm": "2021-12-08 15:04:16",\n    "paydtm": "2021-12-08 15:06:51",\n    "goods_name": "",\n    "txcurrcd": "HKD",\n    "chnlsn2": "",\n    "cardcd": "",\n    "udid": "qiantai2",\n    "userid": "1130000355",\n    "txamt": "1",\n    "chnlsn": "",\n    "respcd": "0000",\n    "goods_info": "",\n    "errmsg": "success"\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"test-cards",children:"Test cards"}),"\n",(0,r.jsx)(n.p,{children:"Test cards are available for the Sandbox environment for result simulation."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Value"}),(0,r.jsx)(n.th,{children:"Expected Result"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"card - MasterCard"}),(0,r.jsx)(n.td,{children:"5200000000001096"}),(0,r.jsx)(n.td,{children:"valid"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"card - Visa"}),(0,r.jsx)(n.td,{children:"4000000000001091"}),(0,r.jsx)(n.td,{children:"valid"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"card - MasterCard"}),(0,r.jsx)(n.td,{children:"5200000000001005"}),(0,r.jsx)(n.td,{children:"valid (3DS frictionless)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"card - Visa"}),(0,r.jsx)(n.td,{children:"4000000000001000"}),(0,r.jsx)(n.td,{children:"valid (3DS frictionless)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"card - MasterCard"}),(0,r.jsx)(n.td,{children:"5200000000001120"}),(0,r.jsx)(n.td,{children:"failed (at verification)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"card - Visa"}),(0,r.jsx)(n.td,{children:"4000000000001125"}),(0,r.jsx)(n.td,{children:"failed (at verification)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"card - MasterCard"}),(0,r.jsx)(n.td,{children:"5200000000001013"}),(0,r.jsx)(n.td,{children:"failed (at  3DS frictionless)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"card - Visa"}),(0,r.jsx)(n.td,{children:"4000000000001018"}),(0,r.jsx)(n.td,{children:"failed (at  3DS frictionless)"})]})]})]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(34164);const a={tabItem:"tabItem_Ymn6"};var s=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>V});var r=t(96540),a=t(34164),s=t(23104),i=t(56347),l=t(205),o=t(57485),c=t(31682),d=t(89466);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=h(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,u]=m({queryString:t,groupId:a}),[f,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,d.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),b=(()=>{const e=c??f;return p({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),x(e)}),[u,x,s]),tabValues:s}}var x=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(74848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),a=l[t].value;a!==r&&(c(n),i(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...s,className:(0,a.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function g(e){const n=f(e);return(0,j.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,j.jsx)(v,{...e,...n}),(0,j.jsx)(y,{...e,...n})]})}function V(e){const n=(0,x.A)();return(0,j.jsx)(g,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var r=t(96540);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);