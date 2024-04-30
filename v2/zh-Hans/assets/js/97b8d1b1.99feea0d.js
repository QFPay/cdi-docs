"use strict";(self.webpackChunkqfpay_sdk=self.webpackChunkqfpay_sdk||[]).push([[4891],{58464:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>o});var r=t(74848),a=t(28453);t(11470),t(19365),t(28774);const s={},l="Visa / Mastercard \u7ebf\u4e0a\u652f\u4ed8",i={id:"online-shop/visa-master-online-payment",title:"Visa / Mastercard \u7ebf\u4e0a\u652f\u4ed8",description:"\u6211\u4eec\u76ee\u524d\u652f\u6301\u5728\u9999\u6e2f\u73af\u5883 \u4e2d\u4f7f\u7528\u4fe1\u7528\u5361\u4ed8\u6b3e\u3002 \u652f\u6301\u6240\u6709\u4e3b\u8981\u4fe1\u7528\u5361\u53d1\u5361\u673a\u6784\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/03-online-shop/01-visa-master-online-payment.md",sourceDirName:"03-online-shop",slug:"/online-shop/visa-master-online-payment",permalink:"/docs/v2/zh-Hans/docs/online-shop/visa-master-online-payment",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"qfpaySidebar",previous:{title:"QFPay\u8ba2\u9605\u652f\u4ed8API",permalink:"/docs/v2/zh-Hans/docs/online-shop/qfpay-recurring-payment"},next:{title:"WAP\u652f\u4ed8",permalink:"/docs/v2/zh-Hans/docs/online-shop/wap-payment"}},c={},o=[{value:"\u652f\u4ed8\u6574\u5408\u6d41\u7a0b",id:"\u652f\u4ed8\u6574\u5408\u6d41\u7a0b",level:2},{value:"\u5f02\u6b65\u901a\u77e5",id:"\u5f02\u6b65\u901a\u77e5",level:2},{value:"\u6d4b\u8bd5\u5361\u53f7",id:"\u6d4b\u8bd5\u5361\u53f7",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"visa--mastercard-\u7ebf\u4e0a\u652f\u4ed8",children:"Visa / Mastercard \u7ebf\u4e0a\u652f\u4ed8"}),"\n",(0,r.jsxs)(n.p,{children:["\u6211\u4eec\u76ee\u524d\u652f\u6301\u5728",(0,r.jsx)(n.a,{href:"/docs/preparation/introduction#%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83",children:"\u9999\u6e2f\u73af\u5883"})," \u4e2d\u4f7f\u7528\u4fe1\u7528\u5361\u4ed8\u6b3e\u3002 \u652f\u6301\u6240\u6709\u4e3b\u8981\u4fe1\u7528\u5361\u53d1\u5361\u673a\u6784\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u652f\u4ed8\u6574\u5408\u6d41\u7a0b",children:"\u652f\u4ed8\u6574\u5408\u6d41\u7a0b"}),"\n",(0,r.jsx)(n.p,{children:"\u5bf9\u4e8e\u4fe1\u7528\u5361\u5728\u7ebf\u652f\u4ed8\u96c6\u6210\uff0c\u5546\u6237\u53ef\u4ee5\u9009\u62e9\u4ee5\u4e0b\u96c6\u6210\u65b9\u5f0f\u4e4b\u4e00"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/online-shop/checkout",children:"QFPay Checkout Services"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/online-shop/paymentelement",children:"QFPay Element SDK"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5f02\u6b65\u901a\u77e5",children:"\u5f02\u6b65\u901a\u77e5"}),"\n",(0,r.jsx)(n.p,{children:"QFPay\u4e5f\u4f1a\u53d1\u9001\u4ea4\u6613\u72b6\u6001\u66f4\u65b0\u7684\u5f02\u6b65\u652f\u4ed8\u901a\u77e5"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u901a\u77e5\u8303\u4f8b"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "cardtp": "5",\n    "cancel": "0",\n    "pay_type": "802801",\n    "order_type": "payment",\n    "clisn": "054256",\n    "txdtm": "2021-12-08 07:04:15",\n    "goods_detail": "",\n    "out_trade_no": "354267281",\n    "syssn": "20211208180500020000001637",\n    "sysdtm": "2021-12-08 15:04:16",\n    "paydtm": "2021-12-08 15:06:51",\n    "goods_name": "",\n    "txcurrcd": "HKD",\n    "chnlsn2": "",\n    "cardcd": "",\n    "udid": "qiantai2",\n    "userid": "1130000355",\n    "txamt": "1",\n    "chnlsn": "",\n    "respcd": "0000",\n    "goods_info": "",\n    "errmsg": "success"\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u6d4b\u8bd5\u5361\u53f7",children:"\u6d4b\u8bd5\u5361\u53f7"}),"\n",(0,r.jsx)(n.p,{children:"\u6d4b\u8bd5\u5361\u53f7\u53ef\u7528\u4e8e\u6c99\u76d2\u73af\u5883\u4ee5\u8fdb\u884c\u7ed3\u679c\u6a21\u62df\u3002"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5361\u7c7b\u578b"}),(0,r.jsx)(n.th,{children:"\u5361\u53f7"}),(0,r.jsx)(n.th,{children:"\u9884\u671f\u7ed3\u679c"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"card - MasterCard"}),(0,r.jsx)(n.td,{children:"5200000000001096"}),(0,r.jsx)(n.td,{children:"\u6210\u529f"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"card - Visa"}),(0,r.jsx)(n.td,{children:"4000000000001091"}),(0,r.jsx)(n.td,{children:"\u6210\u529f"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"card - MasterCard"}),(0,r.jsx)(n.td,{children:"5200000000001005"}),(0,r.jsx)(n.td,{children:"\u6210\u529f (\u65e0\u6469\u64e6\u8ba4\u8bc1\u6d41\u7a0b)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"card - Visa"}),(0,r.jsx)(n.td,{children:"4000000000001000"}),(0,r.jsx)(n.td,{children:"\u6210\u529f (\u65e0\u6469\u64e6\u8ba4\u8bc1\u6d41\u7a0b)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"card - MasterCard"}),(0,r.jsx)(n.td,{children:"5200000000001120"}),(0,r.jsx)(n.td,{children:"\u5931\u8d25 (\u8ba4\u8bc1\u6d41\u7a0b)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"card - Visa"}),(0,r.jsx)(n.td,{children:"4000000000001125"}),(0,r.jsx)(n.td,{children:"\u5931\u8d25 (\u8ba4\u8bc1\u6d41\u7a0b)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"card - MasterCard"}),(0,r.jsx)(n.td,{children:"5200000000001013"}),(0,r.jsx)(n.td,{children:"\u5931\u8d25 (\u65e0\u6469\u64e6\u8ba4\u8bc1\u6d41\u7a0b)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"card - Visa"}),(0,r.jsx)(n.td,{children:"4000000000001018"}),(0,r.jsx)(n.td,{children:"\u5931\u8d25 (\u65e0\u6469\u64e6\u8ba4\u8bc1\u6d41\u7a0b)"})]})]})]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var r=t(34164);const a={tabItem:"tabItem_Ymn6"};var s=t(74848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>V});var r=t(96540),a=t(34164),s=t(23104),l=t(56347),i=t(205),c=t(57485),o=t(31682),d=t(89466);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,o.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=h(e),[l,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[o,u]=m({queryString:t,groupId:a}),[x,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,d.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),b=(()=>{const e=o??x;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{b&&c(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),f(e)}),[u,f,s]),tabValues:s}}var f=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(74848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),a=i[t].value;a!==r&&(o(n),l(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...s,className:(0,a.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function g(e){const n=x(e);return(0,j.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,j.jsx)(v,{...e,...n}),(0,j.jsx)(y,{...e,...n})]})}function V(e){const n=(0,f.A)();return(0,j.jsx)(g,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var r=t(96540);const a={},s=r.createContext(a);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);