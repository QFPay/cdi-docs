"use strict";(self.webpackChunkqfpay_sdk=self.webpackChunkqfpay_sdk||[]).push([[6340],{79358:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>o,frontMatter:()=>d,metadata:()=>l,toc:()=>a});var s=r(74848),t=r(28453);r(11470),r(19365),r(28774);const d={},i="ECR integration technical specification",l={id:"in-store/pos-api/ECR",title:"ECR integration technical specification",description:"1. POS-KEY",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/02-in-store/04-pos-api/02-ECR.md",sourceDirName:"02-in-store/04-pos-api",slug:"/in-store/pos-api/ECR",permalink:"/docs/v2/zh/docs/in-store/pos-api/ECR",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"qfpaySidebar",previous:{title:"POS API",permalink:"/docs/v2/zh/docs/category/pos-api"},next:{title:"App call App Android SDK",permalink:"/docs/v2/zh/docs/in-store/pos-api/app-call-app"}},c={},a=[{value:"1. POS-KEY",id:"1-pos-key",level:2},{value:"2. Encryption",id:"2-encryption",level:2},{value:"3. \u53c2\u6570\u683c\u5f0f",id:"3-\u53c2\u6570\u683c\u5f0f",level:2},{value:"3.1 \u4ea4\u6613",id:"31-\u4ea4\u6613",level:3},{value:"3.2 \u9000\u6b3e/\u64a4\u9500",id:"32-\u9000\u6b3e\u64a4\u9500",level:3},{value:"3.3 \u6253\u5370\u5c0f\u7968",id:"33-\u6253\u5370\u5c0f\u7968",level:3},{value:"3.4 \u6253\u5370\u4ea4\u6613\u6c47\u603b",id:"34-\u6253\u5370\u4ea4\u6613\u6c47\u603b",level:3},{value:"3.5 \u6839\u636e\u8ba2\u5355id \u67e5\u8be2\u4ea4\u6613\u4fe1\u606f",id:"35-\u6839\u636e\u8ba2\u5355id-\u67e5\u8be2\u4ea4\u6613\u4fe1\u606f",level:3},{value:"3.6 \u53d6\u6d88\u4ea4\u6613\u6216\u8005\u9000\u6b3e\u8bf7\u6c42",id:"36-\u53d6\u6d88\u4ea4\u6613\u6216\u8005\u9000\u6b3e\u8bf7\u6c42",level:3},{value:"\u751f\u6210\u7b7e\u540d",id:"\u751f\u6210\u7b7e\u540d",level:2},{value:"4. \u5b57\u6bb5\u63cf\u8ff0",id:"4-\u5b57\u6bb5\u63cf\u8ff0",level:2},{value:"5. Response format",id:"5-response-format",level:2},{value:"6. USB \u7684\u6570\u636e\u4f20\u8f93\u65b9\u5f0f",id:"6-usb-\u7684\u6570\u636e\u4f20\u8f93\u65b9\u5f0f",level:2},{value:"7. HTTP \u6570\u636e\u4f20\u8f93\u65b9\u5f0f",id:"7-http-\u6570\u636e\u4f20\u8f93\u65b9\u5f0f",level:2},{value:"8. TCP \u6570\u636e\u4f20\u8f93\u65b9\u5f0f",id:"8-tcp-\u6570\u636e\u4f20\u8f93\u65b9\u5f0f",level:2},{value:"9. \u6536\u94f6\u673a&amp; Pos \u901a\u4fe1\u534f\u8bae\uff08USB\uff09",id:"9-\u6536\u94f6\u673a-pos-\u901a\u4fe1\u534f\u8baeusb",level:2},{value:"9.1 \u4ea7\u54c1\u5e94\u7528\u573a\u666f",id:"91-\u4ea7\u54c1\u5e94\u7528\u573a\u666f",level:3},{value:"9.2 \u901a\u4fe1\u65b9\u5f0f",id:"92-\u901a\u4fe1\u65b9\u5f0f",level:3},{value:"9.3 \u62a5\u6587\u683c\u5f0f",id:"93-\u62a5\u6587\u683c\u5f0f",level:3},{value:"9.4 \u8be6\u7ec6\u8bf4\u660e",id:"94-\u8be6\u7ec6\u8bf4\u660e",level:3},{value:"\u62a5\u6587\u5f00\u59cb\u7ed3\u675f\u5b57\u7b26",id:"\u62a5\u6587\u5f00\u59cb\u7ed3\u675f\u5b57\u7b26",level:4},{value:"\u62a5\u6587\u9519\u8bef\u7c7b\u578b",id:"\u62a5\u6587\u9519\u8bef\u7c7b\u578b",level:4},{value:"\u8bf7\u6c42\u548c\u5e94\u7b54",id:"\u8bf7\u6c42\u548c\u5e94\u7b54",level:4},{value:"\u54cd\u5e94\u8d85\u65f6",id:"\u54cd\u5e94\u8d85\u65f6",level:4},{value:"\u62a5\u6587\u957f\u5ea6",id:"\u62a5\u6587\u957f\u5ea6",level:4},{value:"\u6570\u636e\u5305\u62c6\u5206\u4e0e\u5408\u5e76",id:"\u6570\u636e\u5305\u62c6\u5206\u4e0e\u5408\u5e76",level:5},{value:"\u6570\u636e\u52a0\u5bc6",id:"\u6570\u636e\u52a0\u5bc6",level:4},{value:"\u4e32\u53e3\u82af\u7247\u8bbe\u7f6e",id:"\u4e32\u53e3\u82af\u7247\u8bbe\u7f6e",level:4},{value:"\u652f\u6301\u7684USB\u8f6c\u4e32\u53e3\u7ebf\u82af\u7247\u7c7b\u578b",id:"\u652f\u6301\u7684usb\u8f6c\u4e32\u53e3\u7ebf\u82af\u7247\u7c7b\u578b",level:5},{value:"\u793a\u4f8b\u6570\u636e",id:"\u793a\u4f8b\u6570\u636e",level:4}];function h(n){const e={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"ecr-integration-technical-specification",children:"ECR integration technical specification"}),"\n",(0,s.jsx)(e.h2,{id:"1-pos-key",children:"1. POS-KEY"}),"\n",(0,s.jsxs)(e.p,{children:["\u5728haojin app \u8bbe\u7f6e\u4e2d\uff0c\u6709\u4e2a\u8bbe\u7f6e\u8c03\u7528\u79d8\u94a5\u9009\u9879\u3002\u70b9\u51fb\u8fdb\u5165\u53ef\u4ee5\u91cd\u65b0\u751f\u6210\u79d8\u94a5\u3002\u9ed8\u8ba4\u79d8\u94a5\u662f\uff1a ",(0,s.jsx)(e.code,{children:"f46b1f08bec1f39104792cc79ec9aacd"})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(e.p,{children:"\u9ed8\u8ba4\u52a0\u5bc6\u5904\u4e8e\u6253\u5f00\u72b6\u6001\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u6709\u4e00\u4e2a\u5237\u65b0 POS-KEY \u7684\u9009\u9879\u3002 \u5e76\u4e14Haojin App\u9700\u8981\u5237\u65b0\u624d\u6709\u6548"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u5237\u65b0 POS-KEY \u7684\u6b65\u9aa4"}),"\n\u767b\u5165 Haojin App -> \u6211\u7684 \u9009\u9879 -> \u8bbe\u7f6e -> \u8bbe\u5907\u8c03\u7528\u79d8\u94a5 -> \u91cd\u7f6e\u79d8\u94a5"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u68c0\u67e5 POS-KEY \u7684\u6b65\u9aa4"}),"\n\u767b\u5165\u5546\u6237\u7ba1\u7406\u5e73\u53f0-> \u8bbe\u7f6e -> \u8bbe\u5907\u8bbe\u7f6e -> POS\u79d8\u94a5\u7ba1\u7406"]}),"\n",(0,s.jsx)(e.h2,{id:"2-encryption",children:"2. Encryption"}),"\n",(0,s.jsxs)(e.p,{children:["\u6240\u6709\u7684\u6570\u636e\u4fe1\u606f\u90fd\u9700\u8981AES\u52a0\u5bc6\uff0c\u52a0\u5bc6AES_Key\u4e3a\u4e0a\u4e00\u6b65\u9aa4\u4e2d\u751f\u6210\u7684\u79d8\u94a5\uff0c\u52a0\u5bc6\u7528\u5230\u7684IV\u4e3a\uff1a",(0,s.jsx)(e.code,{children:"qfpay202306_hjsh"})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(e.p,{children:"\u6570\u636e\u7ecf\u8fc7\u52a0\u5bc6\u540e\u91c7\u7528Base64\u7f16\u7801\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"3-\u53c2\u6570\u683c\u5f0f",children:"3. \u53c2\u6570\u683c\u5f0f"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u53c2\u6570\u540d\u79f0"}),(0,s.jsx)(e.th,{children:"\u662f\u5426\u5fc5\u586b"}),(0,s.jsx)(e.th,{children:"\u53c2\u6570\u7c7b\u578b"}),(0,s.jsx)(e.th,{children:"\u63cf\u8ff0"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"amt"}),(0,s.jsx)(e.td,{children:"\u662f"}),(0,s.jsx)(e.td,{children:"Integer"}),(0,s.jsx)(e.td,{children:"\u91d1\u989d, e.g. $10.1 => 10.1"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"func_type"}),(0,s.jsx)(e.td,{children:"\u662f"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{children:"\u6307\u4ee4\u4ee3\u7801"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"channel"}),(0,s.jsx)(e.td,{children:"\u662f"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{children:"\u94b1\u5305\u540d\u79f0\uff0c\u53c2\u89c1\u901a\u9053\u5217\u8868"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"out_trade_no"}),(0,s.jsx)(e.td,{children:"\u5426"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsxs)(e.td,{children:["\u5546\u6237\u53c2\u8003\u3002 ",(0,s.jsx)("br",{})," \u5982\u679c\u4e0d\u901a\u8fc7\uff0c\u5219out_trade_no\u4e0d\u4f1a\u901a\u8fc7"]})]})]})]}),"\n",(0,s.jsx)(e.h3,{id:"31-\u4ea4\u6613",children:"3.1 \u4ea4\u6613"}),"\n",(0,s.jsxs)(e.admonition,{type:"note",children:[(0,s.jsx)(e.p,{children:"\u5bf9\u4e8e\u4e8c\u7ef4\u7801\u652f\u4ed8\uff0c\u6839\u636e\u4e0a\u6b21\u4f7f\u7528\u60c5\u51b5\u81ea\u52a8\u9009\u62e9 MPM/CPM \u6a21\u5f0f\u3002"}),(0,s.jsx)(e.p,{children:"camera_id:\u6b63\u626b\u652f\u4ed8\u7684\u65f6\u5019\u53ef\u4ee5\u5207\u6362\u524d\u540e\u6444\u50cf\u5934,\u53ef\u4ee5\u4e0d\u4f20\u8fd9\u4e2a\u5b57\u6bb5\uff0c\u9ed8\u8ba4\u662f\u540e\u7f6e\u6444\u50cf\u5934"}),(0,s.jsx)(e.p,{children:"0\uff1aCAMERA_PARAM_BACK  \u540e\u7f6e\u6444\u50cf\u5934\n1\uff1aCAMERA_PARAM_FROT  \u524d\u7f6e\u6444\u50cf\u5934"}),(0,s.jsx)(e.p,{children:"wait_card_timeout :\uff0c\u7b49\u5f85\u5237\u5361\u8d85\u65f6\u65f6\u95f4\uff0c\u53ef\u4ee5\u4e0d\u8bbe\u7f6e\uff0c\u9ed8\u8ba4120s, \u7c7b\u578bint\uff0c\u503c\u5927\u4e8e0"})]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n  "content": {\n    "amt": 100,\n    "camera_id": 0,\n    "channel": "card_payment",\n    "func_type": 1001,\n    "out_trade_no": "456799999999",\n    "wait_card_timeout": 120\n  },\n  "digest": "76b9186077cdc2bc5d78ae921309811d"\n}\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u5982\u9700\u540e\u7aef\u67e5\u8be2\u4ea4\u6613\u7ed3\u679c\uff0c\u8bf7\u4f7f\u7528\u67e5\u8be2\u63a5\u53e3\uff1a",(0,s.jsx)(e.a,{href:"https://sdk.qfapi.com/?python#transaction-enquiry",children:"https://sdk.qfapi.com/?python#transaction-enquiry"})]}),"\n",(0,s.jsx)(e.h3,{id:"32-\u9000\u6b3e\u64a4\u9500",children:"3.2 \u9000\u6b3e/\u64a4\u9500"}),"\n",(0,s.jsx)(e.p,{children:"\u521d\u59cb\u5316\u9000\u6b3e\u8bf7\u6c42\u65f6\uff0c\u5e94\u7528\u7a0b\u5e8f\u4e2d\u65e0\u9700\u8f93\u5165\u5bc6\u7801"}),"\n",(0,s.jsx)(e.p,{children:"specific parameters"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u53c2\u6570\u540d\u79f0"}),(0,s.jsx)(e.th,{children:"\u662f\u5426\u5fc5\u586b"}),(0,s.jsx)(e.th,{children:"\u53c2\u6570\u7c7b\u578b"}),(0,s.jsx)(e.th,{children:"\u63cf\u8ff0"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"orderId"}),(0,s.jsx)(e.td,{children:"\u662f"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{children:"QFPay\u4ea4\u6613\u7f16\u53f7"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"refund_amount"}),(0,s.jsx)(e.td,{children:"\u5426"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsxs)(e.td,{children:["\u9ed8\u8ba4\u9000\u6b3e\u91d1\u989d\u4e3a\u8ba2\u5355\u53ef\u9000\u6b3e\u91d1\u989d\uff0c",(0,s.jsx)("br",{}),"\u652f\u6301\u90e8\u5206\u9000\u6b3e"]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"allow_modify_flag"}),(0,s.jsx)(e.td,{children:"\u5426"}),(0,s.jsx)(e.td,{children:"Integer"}),(0,s.jsxs)(e.td,{children:["0\uff1a\u4e0d\u5141\u8bb8\u4fee\u6539\u9000\u6b3e\u91d1\u989d\uff08\u9ed8\u8ba4\u503c\uff09",(0,s.jsx)("br",{})," 1\uff1a\u5141\u8bb8\u4fee\u6539\u9000\u6b3e\u91d1\u989d"]})]})]})]}),"\n",(0,s.jsx)(e.admonition,{type:"note",children:(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"\u5bf9\u4e8e\u5361\u652f\u4ed8\u3001\u94f6\u8054\u5361\u3001\u8fd0\u901a\u5361\uff0c\u5f53\u65e5\u9000\u6b3e\u91d1\u989d\u5fc5\u987b\u4e3a\u201c\u5168\u989d\u201d"}),"\n"]})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n  "content": {\n    "allow_modify_flag": 1,\n    "func_type": 1002,\n    "orderId": "order_id",\n    "refund_amount": "0.05"\n  },\n  "digest": "9C8E9FB05C7C24B6CA04EBFA1263EF41"\n}\n\n'})}),"\n",(0,s.jsx)(e.h3,{id:"33-\u6253\u5370\u5c0f\u7968",children:"3.3 \u6253\u5370\u5c0f\u7968"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n    "content": {"orderId": "12345678","func_type": 3001},\n    "digest":"79fd145311d54d03e4e685d50f15dd7f"\n}\n'})}),"\n",(0,s.jsx)(e.h3,{id:"34-\u6253\u5370\u4ea4\u6613\u6c47\u603b",children:"3.4 \u6253\u5370\u4ea4\u6613\u6c47\u603b"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n    "content": {"func_type": 3002},\n    "digest":"79fd145311d54d03e4e685d50f15dd7f"\n}\n'})}),"\n",(0,s.jsx)(e.h3,{id:"35-\u6839\u636e\u8ba2\u5355id-\u67e5\u8be2\u4ea4\u6613\u4fe1\u606f",children:"3.5 \u6839\u636e\u8ba2\u5355id \u67e5\u8be2\u4ea4\u6613\u4fe1\u606f"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n     "content": {"orderId": "12345678","func_type": 4001},\n     "digest":"99CE8BF9C7304AC964522D10F51660B4"\n}\n'})}),"\n",(0,s.jsx)(e.h3,{id:"36-\u53d6\u6d88\u4ea4\u6613\u6216\u8005\u9000\u6b3e\u8bf7\u6c42",children:"3.6 \u53d6\u6d88\u4ea4\u6613\u6216\u8005\u9000\u6b3e\u8bf7\u6c42"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n     "content": {"func_type": 5001},\n     "digest":"99CE8BF9C7304AC964522D10F51660B4"\n}\n'})}),"\n",(0,s.jsxs)(e.p,{children:["content\uff1a\u8bf7\u6c42\u7684\u6570\u636e\u4fe1\u606f\ndigest",":content"," \u6570\u636e\u7684\u7b7e\u540d,\u6309\u7167\u5b57\u6bb5\u987a\u5e8f\u62fc\u63a5\u6210 \u5b57\u6bb5=\u503c \u7684\u5f62\u5f0f\uff0c\u7b97\u7b7e\u540d,"]}),"\n",(0,s.jsx)(e.h2,{id:"\u751f\u6210\u7b7e\u540d",children:"\u751f\u6210\u7b7e\u540d"}),"\n",(0,s.jsx)(e.p,{children:"\u751f\u6210\u7b7e\u540d\u793a\u4f8b"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'// original payload\ncontent={"amt":100,"channel": "card_payment","func_type":1001,"out_trade_no":"456799999999"} \n\n// sorted keys in alphabetical ascending order\nformat_content={amt=100,channel=\'card_payment\',func_type=1001,out_trade_no=\'456799999999\'} \u8fd9\u79cd\u683c\u5f0f\n\n// encryption\n// !! if the value is empty, pass \'\' (empty string) instead\ndigest=md5(format_content + pos_key)\ndigest=(\n  md5(\n    {amt=100,channel=\'card_payment\',func_type=1001,out_trade_no=\'456799999999\'}f46b1f08bec1f39104792cc79ec9aacd\n  ) \n)\n\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u5982\u679c\u542f\u7528\u52a0\u5bc6\uff0c\u5219\u4e0a\u8ff0\u6709\u6548\u8d1f\u8f7d\u5c06\u5728\u201ccontent\u201d\u5904\u901a\u8fc7 AES \u8fdb\u884c\u52a0\u5bc6\uff0c\u5e76\u4e14\u201cdigest\u201d\u5c06\u6839\u636e\u52a0\u5bc6\u7684\u6709\u6548\u8d1f\u8f7d\u8ba1\u7b97\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n    "content": "{func_type: 3002}",\n    "digest":"79fd145311d54d03e4e685d50f15dd7f"\n}\n'})}),"\n",(0,s.jsx)(e.h2,{id:"4-\u5b57\u6bb5\u63cf\u8ff0",children:"4. \u5b57\u6bb5\u63cf\u8ff0"}),"\n",(0,s.jsx)(e.p,{children:"1\u3001 func_type : :\u4e1a\u52a1\u7c7b\u578b\n\uff081\uff091001 \u4ea4\u6613\n\uff082\uff091002 \u9000\u6b3e\n\uff083\uff093001 \u6253\u5370\u5c0f\u7968\n\uff084\uff093002 \u6253\u5370\u4ea4\u6613\u6c47\u603b\n\uff085\uff094001 \u67e5\u8be2\u4ea4\u6613\u4fe1\u606f\n\uff086\uff095001 \u53d6\u6d88\u4ea4\u6613\u6216\u8005\u9000\u6b3e\u8bf7\u6c42"}),"\n",(0,s.jsx)(e.p,{children:"2\u3001channel: payment method\n\uff081\uff09\u3001card_payment  \u5237\u5361\u4ea4\u6613\n\uff082\uff09\u3001wx            \u5fae\u4fe1\u652f\u4ed8\n\uff083\uff09\u3001alipay        \u652f\u4ed8\u5b9d\u652f\u4ed8\n\uff084\uff09\u3001payme         payme\u652f\u4ed8\n\uff085\uff09\u3001union         \u94f6\u8054\u652f\u4ed8\n\uff086\uff09\u3001fps           FPS\u652f\u4ed8\n\uff087\uff09\u3001octopus       \u516b\u8fbe\u901a\u652f\u4ed8\n\uff088\uff09\u3001unionpay_card     \u94f6\u8054\u5361\u652f\u4ed8\n\uff089\uff09\u3001amex_card     \u7f8e\u56fd\u8fd0\u901a\u5361"}),"\n",(0,s.jsx)(e.p,{children:"3\u3001amt: \u4ea4\u6613\u91d1\u989d"}),"\n",(0,s.jsxs)(e.p,{children:["4\u3001orderId: \u4ea4\u6613\u8ba2\u5355\u53f7\u548c ",(0,s.jsx)(e.code,{children:"out_trade_no"})," \u76f8\u540c"]}),"\n",(0,s.jsx)(e.h2,{id:"5-response-format",children:"5. Response format"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\\"respcd\\": \\"6000\\",\\"data\\": \\"{"aaaaaa"}\\",\\"respmsg\\": \\"xxxxxxxxxx\\",\\"resperr\\":\\"xxxxxxxxxx\\"}\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-plaintext",children:'1. respcd: response code\n    \uff081\uff09\u3001"4003"\uff0c\u8bf7\u6c42\u62d2\u7edd\uff0cpos-key \u4e0d\u5339\u914d\n    \uff082\uff09\u3001"4004"\uff0c\u8bf7\u6c42\u65b9\u5f0f\u4e0d\u5bf9\uff0c\u9700\u8981\u65f6post\u8bf7\u6c42\n    \uff083\uff09\u3001"4005"\uff0c\u5176\u4ed6\u62a5\u9519\n    \uff084\uff09\u3001"4006"\uff0c\u8bf7\u6c42\u53c2\u6570\u4e0d\u6b63\u786e  \n    \uff085\uff09\u3001"4007"\uff0c\u7528\u6237\u672a\u767b\u5f55\n    \uff086\uff09\u3001"5001"\uff0c\u89e3\u5bc6\u5931\u8d25\n    \uff087\uff09\u3001"6000"  \u8bf7\u6c42\u6210\u529f\n    \uff088\uff09\u3001"6001"  \u7528\u6237\u53d6\u6d88  \n    \uff089\uff09\u3001"6002"  \u8bf7\u6c42\u9519\u8bef\n\n2. respmsg\uff1a\u54cd\u5e94\u7684\u4fe1\u606f\n3. resperr\uff1a\u54cd\u5e94\u7684\u9519\u8bef\u4fe1\u606f\n4. data:\u4ea4\u6613\u6216\u8005\u9000\u6b3e\u8fd4\u56de\u7684\u6570\u636e\uff0c\n    \uff081\uff09\u4ea4\u6613\u8fd4\u56de\u6570\u636e\u5b57\u6bb5\uff1a\n            respcd;\u8bf7\u6c42\u54cd\u5e94\u7801\n            resmsg;\u8bf7\u6c42\u4fe1\u606f\n            reserr;\u9519\u8bef\u4fe1\u606f\n            mchntnm;\u5546\u6237\u540d\u79f0\n            sysdtm;\u7cfb\u7edf\u65f6\u95f4\n            userid;userid\n            busicd;\u4e1a\u52a1\u4ee3\u7801\n            txamt;\u91d1\u989d\n            txcurrcd;\u8ca8\u5e63\n            chnlsn;\u901a\u9053\u5e8f\u5217\u865f\n            paydtm;\u652f\u4ed8\u65f6\u95f4\n            udid;\u7528\u6237id\n            syssn;\u6d41\u6c34\u53f7\n            clisn;\u5ba2\u6236\u7aef\u5e8f\u5217\u865f\n            out_trade_no\uff1b\u5916\u90e8\u8ba2\u5355\u53f7\n            cardscheme\uff1b\u5361\u7ec4\u7ec7\uff0c\u4f8b\u5982\uff1aVISA\n    \uff082\uff09\u9000\u6b3e\u8fd4\u56de\u6570\u636e\u5b57\u6bb5\uff1a\n            respcd;\u8bf7\u6c42\u54cd\u5e94\u7801\n            resmsg;\u8bf7\u6c42\u4fe1\u606f\n            reserr;\u9519\u8bef\u4fe1\u606f\n            sysdtm;\u7cfb\u7edf\u65f6\u95f4\n            paydtm;\u652f\u4ed8\u65f6\u95f4\n            txcurrcd;\u8ca8\u5e63\n            txdtm;\u65f6\u95f4\n            orig_syssn;\u539f\u751f\u8ba2\u5355\u53f7\n            out_trade_no;\u5916\u90e8\u8ba2\u5355\u53f7\n            syssn;\u7cfb\u7edf\u6d41\u6c34\u53f7\n            chnlsn;\u901a\u9053\u5e8f\u5217\u865f\n            txamt;\u9000\u6b3e\u91d1\u989d\n            originTxamt;\u539f\u8ba2\u5355\u91d1\u989d\n\n    \uff083\uff09\u67e5\u8be2\u4ea4\u6613\u4fe1\u606f\u8fd4\u56de\u5b57\u6bb5\uff1a\n            server_time;\u670d\u52a1\u5668\u65f6\u95f4\n            cancel;cancel\u72b6\u6001\n            clisn;\u5ba2\u6236\u7aef\u5e8f\u5217\u865f\n            opuid; \u64cd\u4f5c\u5458id\n            prepay_amt;\u652f\u4ed8\u91d1\u989d\n            syssn;\u7cfb\u7edf\u6d41\u6c34\u53f7\n            tradetp;\u4ea4\u6613\u65b9\u5f0f\n            sysdtm;\u7cfb\u7edf\u65f6\u95f4\n            txcurrcd;\u8ca8\u5e63\n            origssn;\u539f\u59cb\u6d41\u6c34\u53f7\n            customer_source;\u6d88\u8d39\u8005\u6765\u6e90\n            opuser;\u64cd\u4f5c\u5458\n            nickname;\u7528\u6237\u540d\n            allow_refund_amt;\u5141\u8bb8\u9000\u6b3e\u91d1\u989d\n            desc;\u63cf\u8ff0\u4fe1\u606f\n            txamt;\u4ea4\u6613\u91d1\u989d\n            busicd;\u4e1a\u52a1\u4ee3\u7801\n            respcd;\u54cd\u5e94\u7f16\u7801\n            origbusicd;\u539f\u4e1a\u52a1\u4ee3\u7801\n            chnlsn;\u901a\u9053\u5e8f\u5217\u865f\n            cardscheme\uff1b\u5361\u7ec4\u7ec7\uff0c\u4f8b\u5982\uff1aVISA\n'})}),"\n",(0,s.jsx)(e.h2,{id:"6-usb-\u7684\u6570\u636e\u4f20\u8f93\u65b9\u5f0f",children:"6. USB \u7684\u6570\u636e\u4f20\u8f93\u65b9\u5f0f"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"\u901a\u8fc7USB\u63a5\u53e3\u8fde\u63a5POS\u8bbe\u5907."}),"\n",(0,s.jsx)(e.li,{children:'\u6309\u7167USB \u901a\u4fe1\u534f\u8bae\u6784\u9020\u6570\u636e\u3002\u8be6\u60c5\u89c1\u7b2c\u4e5d\u6761\uff1a"\u6536\u94f6\u673a& Pos \u901a\u4fe1\u534f\u8bae"\u3002'}),"\n",(0,s.jsx)(e.li,{children:"\u6570\u636e\u54cd\u5e94, \u6536\u5230\u7684\u6570\u636e\u9700\u8981\u6309\u7167\u901a\u4fe1\u534f\u8bae\u89e3\u6790\uff0c\u7136\u540e\u83b7\u53d6\u5230\u6570\u636e\u62a5\u6587\uff0c\u901a\u8fc7AES\u89e3\u5bc6, \u5f97\u5230\u54cd\u5e94\u7684\u6570\u636e."}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"7-http-\u6570\u636e\u4f20\u8f93\u65b9\u5f0f",children:"7. HTTP \u6570\u636e\u4f20\u8f93\u65b9\u5f0f"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"Http \u6570\u636e\u4f20\u8f93\u65b9\u5f0f\u9700\u8981\u5148\u67e5\u770bPOS \u7684ip ,http \u65b9\u5f0f\u7684\u7aef\u53e3\u9ed8\u8ba4\u4e3a 9001."}),"\n",(0,s.jsx)(e.li,{children:"\u6570\u636e\u62a5\u6587\u683c\u5f0f:\n(1) \u5c06\u6570\u636e\u62a5\u6587\u901a\u8fc7 AES \u52a0\u5bc6\n(2) \u901a\u8fc7http Post\u8bf7\u6c42 \u53d1\u8d77\u8bf7\u6c42"}),"\n",(0,s.jsx)(e.li,{children:"\u8bf7\u6c42\u7684api\n(1) \u4ea4\u6613: /api/pos/trade\n(2) \u9000\u6b3e: /api/pos/cancel\n(3) \u6253\u5370\u5c0f\u7968: /api/pos/print_receipt\n(4) \u6253\u5370\u4ea4\u6613\u6c47\u603b: /api/pos/transaction_info\n(4) \u67e5\u8be2\u4ea4\u6613\u4fe1\u606f: /api/pos/query_transaction\n(5) \u53d6\u6d88\u4ea4\u6613\u6216\u8005\u9000\u6b3e\u8bf7\u6c42\uff1a/api/pos/cancel_request"}),"\n",(0,s.jsx)(e.li,{children:"\u8bf7\u6c42\u5934\u9700\u8981\u8bbe\u7f6e \u8bf7\u6c42\u7684Content-type\u683c\u5f0f\u4e3a\uff1aapplication/json"}),"\n",(0,s.jsx)(e.li,{children:"\u8bf7\u6c42\u7684\u7ed3\u679c\u9700\u8981 AES \u89e3\u5bc6\u5f97\u5230\u54cd\u5e94\u7684\u62a5\u6587\u6570\u636e"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"8-tcp-\u6570\u636e\u4f20\u8f93\u65b9\u5f0f",children:"8. TCP \u6570\u636e\u4f20\u8f93\u65b9\u5f0f"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"Http \u6570\u636e\u4f20\u8f93\u65b9\u5f0f\u9700\u8981\u5148\u67e5\u770bPOS \u7684ip ,http \u65b9\u5f0f\u7684\u7aef\u53e3\u9ed8\u8ba4\u4e3a 9002."}),"\n",(0,s.jsx)(e.li,{children:"\u6536\u94f6\u673a \u901a\u8fc7socket\u8fde\u63a5 \u5230POS"}),"\n",(0,s.jsx)(e.li,{children:"\u901a\u8fc7socket\n\u4f20\u8f93\u6570\u636e\uff0c\u6570\u636e\u683c\u5f0f\u4e3a\u6570\u636e\u62a5\u6587 AES \u52a0\u5bc6\u540e\u7684\u52a0\u5bc6\u6570\u636e\uff0c"}),"\n",(0,s.jsx)(e.li,{children:"\u8bf7\u6c42\u7684\u7ed3\u679c\u9700\u8981AES \u89e3\u5bc6\u5f97\u5230\u54cd\u5e94\u7684\u62a5\u6587\u6570\u636e"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"9-\u6536\u94f6\u673a-pos-\u901a\u4fe1\u534f\u8baeusb",children:"9. \u6536\u94f6\u673a& Pos \u901a\u4fe1\u534f\u8bae\uff08USB\uff09"}),"\n",(0,s.jsx)(e.h3,{id:"91-\u4ea7\u54c1\u5e94\u7528\u573a\u666f",children:"9.1 \u4ea7\u54c1\u5e94\u7528\u573a\u666f"}),"\n",(0,s.jsx)(e.p,{children:"\u6536\u94f6\u673a\u4e0e\u667a\u80fdPos\u8bbe\u5907\u901a\u8fc7\u4e32\u53e3\u6216\u84dd\u7259\u8fde\u63a5\u8fdb\u884c\u901a\u4fe1\uff0c\u5b9e\u73b0\u6536\u94f6\u673a\u901a\u8fc7\u667a\u80fdPos\u4e0a\u7684\u597d\u8fd1\u5546\u6237App\u8fdb\u884c\u6536\u6b3e\u3001\u64a4\u9500\u4ea4\u6613\u64cd\u4f5c\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"92-\u901a\u4fe1\u65b9\u5f0f",children:"9.2 \u901a\u4fe1\u65b9\u5f0f"}),"\n",(0,s.jsx)(e.p,{children:"\u4e32\u53e3"}),"\n",(0,s.jsx)(e.p,{children:"\u901a\u8fc7\u667a\u80fdPos\u8bbe\u5907\u4e0aMicor USB\u63a5\u53e3\u6216\u501f\u7528\u5e95\u5ea7\u8f6c\u6210USB Host\u6a21\u5f0f\uff0c\u7531USB\u8f6c\u4e32\u53e3\u7ebf\u8fde\u63a5\u5230\u6536\u94f6\u673a\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u901a\u4fe1\u8981\u6c42, \u7a33\u5b9a, \u5b89\u5168, \u53ef\u6269\u5c55"}),"\n",(0,s.jsx)(e.h3,{id:"93-\u62a5\u6587\u683c\u5f0f",children:"9.3 \u62a5\u6587\u683c\u5f0f"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u5b57\u6bb5"}),(0,s.jsx)(e.th,{children:"\u5185\u5bb9"}),(0,s.jsx)(e.th,{children:"\u8bf4\u660e"}),(0,s.jsx)(e.th,{children:"\u957f\u5ea6"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u5f00\u59cb\u5b57\u7b26"}),(0,s.jsx)(e.td,{children:"0x2f6e"}),(0,s.jsx)(e.td,{children:"\u6807\u8bc6\u4e00\u4e2a\u62a5\u6587\u7684\u5f00\u59cb"}),(0,s.jsx)(e.td,{children:"2\u5b57\u8282"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u534f\u8bae\u7248\u672c"}),(0,s.jsx)(e.td,{children:"0x01"}),(0,s.jsx)(e.td,{children:"\u534f\u8bae\u7248\u672c\u53f7(\u56fa\u5b9a)"}),(0,s.jsx)(e.td,{children:"1\u5b57\u8282"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u62a5\u6587\u7c7b\u578b"}),(0,s.jsxs)(e.td,{children:["0x10",(0,s.jsx)("br",{}),"0x20",(0,s.jsx)("br",{}),"0x30"]}),(0,s.jsx)(e.td,{children:"\u8bf7\u6c42\u62a5\u6587/\u54cd\u5e94\u6b63\u5e38\u62a5\u6587/\u54cd\u5e94\u9519\u8bef\u62a5\u6587"}),(0,s.jsx)(e.td,{children:"1\u5b57\u8282"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u62a5\u6587\u7f16\u53f7"}),(0,s.jsx)(e.td,{children:"0x01 ~ 0x7f"}),(0,s.jsxs)(e.td,{children:["\u5bf9\u62a5\u6587\u7684\u7f16\u53f7\uff0c\u7528\u4e8e\u62a5\u6587\u5e94\u7b54\u6216\u5206\u5305\u5408\u5e76\u3002",(0,s.jsx)("br",{}),"\u6bcf\u6b21\u52a01\uff0c\u5faa\u73af\u4f7f\u7528"]}),(0,s.jsx)(e.td,{children:"1\u5b57\u8282"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u62a5\u6587\u603b\u957f\u5ea6"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"\u62a5\u6587\u4e2d\u5404\u4e2a\u5b57\u6bb5\u5185\u5bb9(\u5f00\u59cb\u5b57\u7b26 ~ \u7ed3\u675f\u5b57\u7b26)\u7684\u5b57\u8282\u957f\u5ea6\u7684\u603b\u548c"}),(0,s.jsx)(e.td,{children:"2\u5b57\u8282"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u62a5\u6587\u6570\u636e\u57df\u957f\u5ea6"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"\u62a5\u6587\u5305\u542b\u7684\u6709\u6548\u6570\u636e\u7684\u957f\u5ea6\uff0c\u4e0d\u5305\u542b\u62a5\u6587\u5176\u4ed6\u90e8\u5206"}),(0,s.jsx)(e.td,{children:"2\u5b57\u8282"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u6570\u636e\u57df"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"\u6709\u6548\u901a\u4fe1\u6570\u636e\uff0cutf-8\u7f16\u7801"}),(0,s.jsx)(e.td,{children:"\u4e0d\u56fa\u5b9a"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"\u7ed3\u675f\u5b57\u7b26"}),(0,s.jsx)(e.td,{children:"0x2f6e"}),(0,s.jsx)(e.td,{children:"\u6807\u8bc6\u4e00\u4e2a\u62a5\u6587\u7684\u7ed3\u675f"}),(0,s.jsx)(e.td,{children:"2\u5b57\u8282"})]})]})]}),"\n",(0,s.jsx)(e.h3,{id:"94-\u8be6\u7ec6\u8bf4\u660e",children:"9.4 \u8be6\u7ec6\u8bf4\u660e"}),"\n",(0,s.jsx)(e.h4,{id:"\u62a5\u6587\u5f00\u59cb\u7ed3\u675f\u5b57\u7b26",children:"\u62a5\u6587\u5f00\u59cb\u7ed3\u675f\u5b57\u7b26"}),"\n",(0,s.jsx)(e.p,{children:"\u4e3a\u4e86\u907f\u514d\u5728\u901a\u4fe1\u8fc7\u7a0b\u4e2d\uff0c\u7531\u4e8e\u786c\u4ef6\u539f\u56e0\u53d1\u751f\u4e00\u4e2a\u6570\u636e\u62a5\u6587\u88ab\u62c6\u5206\u6210\u591a\u4e2a\u6570\u636e\u5757\u7684\u60c5\u51b5\uff0c\u5bfc\u81f4\u65e0\u6cd5\u6b63\u5e38\u83b7\u53d6\u62a5\u6587\u5185\u5bb9\u3002\u53d1\u9001\u65b9\u5728\u53d1\u9001\u62a5\u6587\u65f6\uff0c\u4e3a\u6bcf\u4e2a\u62a5\u6587\u6dfb\u52a0\u5f00\u59cb\u548c\u7ed3\u675f\u5b57\u7b26(0x2f6e)\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u63a5\u6536\u65b9\u6536\u5230\u62a5\u6587\u540e\uff0c\u4f1a\u68c0\u67e5\u62a5\u6587\u7684\u524d\u4e24\u4e2a\u5b57\u8282\u662f\u5426\u4e3a\u5f00\u59cb\u5b57\u7b26(0x2f6e)\uff0c\u5982\u679c\u4e0d\u662f\u5219\u54cd\u5e94\u9519\u8bef\u62a5\u6587(0x31)\u3002\u5426\u5219\u7ee7\u7eed\u904d\u5386\u540e\u7eed\u5b57\u8282\uff0c\u76f4\u81f3\u7ed3\u675f\u5b57\u7b26\u3002"}),"\n",(0,s.jsx)(e.admonition,{type:"warning",children:(0,s.jsx)(e.p,{children:(0,s.jsxs)(e.em,{children:["0x2f6e\u4ee3\u8868ASCII\u7f16\u7801\u7684 ",(0,s.jsx)(e.code,{children:"/n"})," \u7684\u5341\u516d\u8fdb\u5236\u8868\u793a"]})})}),"\n",(0,s.jsx)(e.h4,{id:"\u62a5\u6587\u9519\u8bef\u7c7b\u578b",children:"\u62a5\u6587\u9519\u8bef\u7c7b\u578b"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u9519\u8bef\u62a5\u6587\u7c7b\u578b"}),(0,s.jsx)(e.th,{children:"\u9519\u8bef\u8bf4\u660e"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"0x30"}),(0,s.jsx)(e.td,{children:"\u672a\u77e5\u9519\u8bef\u7c7b\u578b"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"0x31"}),(0,s.jsx)(e.td,{children:"\u62a5\u6587\u683c\u5f0f\u9519\u8bef"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"0x32"}),(0,s.jsx)(e.td,{children:"\u62a5\u6587\u6821\u9a8c\u9519\u8bef"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"0x33"}),(0,s.jsx)(e.td,{children:"\u6570\u636e\u57df\u89e3\u5bc6\u9519\u8bef"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"0x34"}),(0,s.jsx)(e.td,{children:"\u6570\u636e\u57df\u683c\u5f0f\u9519\u8bef"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"0x35"}),(0,s.jsx)(e.td,{children:"\u6570\u636e\u5206\u5305\u9519\u8bef"})]})]})]}),"\n",(0,s.jsx)(e.h4,{id:"\u8bf7\u6c42\u548c\u5e94\u7b54",children:"\u8bf7\u6c42\u548c\u5e94\u7b54"}),"\n",(0,s.jsx)(e.p,{children:"\u5f53\u63a5\u6536\u65b9\u6536\u5230\u8bf7\u6c42\u62a5\u6587(\u62a5\u6587\u7c7b\u578b\u4e3a0x10)\u540e\uff0c\u9700\u8981\u56de\u9001\u54cd\u5e94\u62a5\u6587\uff0c\u6765\u544a\u77e5\u8bf7\u6c42\u65b9\u62a5\u6587\u7684\u63a5\u6536\u7ed3\u679c\u3002\u5982\u679c\u6821\u9a8c\u6210\u529f\u54cd\u5e94\u62a5\u6587\u7c7b\u578b\u4e3a0x20\uff0c\u5982\u679c\u6821\u9a8c\u5931\u8d25\u54cd\u5e94\u62a5\u6587\u7c7b\u578b\u4e3a0x32\uff0c\u54cd\u5e94\u62a5\u6587\u7f16\u53f7\u4e0e\u8bf7\u6c42\u62a5\u6587\u7f16\u53f7\u76f8\u540c\u3002"}),"\n",(0,s.jsx)(e.h4,{id:"\u54cd\u5e94\u8d85\u65f6",children:"\u54cd\u5e94\u8d85\u65f6"}),"\n",(0,s.jsxs)(e.p,{children:["\u5e94\u7b54\u62a5\u6587\u8d85\u65f6\u65f6\u95f4\u4e3a",(0,s.jsx)(e.em,{children:"1000"}),"ms\uff0c\u8d85\u65f6\u540e\u8ba4\u4e3a\u8bf7\u6c42\u62a5\u6587\u53d1\u9001\u5931\u8d25\uff0c\u8bbe\u5907\u8fde\u63a5\u65ad\u5f00\u3002"]}),"\n",(0,s.jsx)(e.h4,{id:"\u62a5\u6587\u957f\u5ea6",children:"\u62a5\u6587\u957f\u5ea6"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"\u62a5\u6587\u603b\u957f\u5ea6 :\u4ece\u5f00\u59cb\u5b57\u7b26\u5230\u7ed3\u675f\u5b57\u7b26\uff0c\u6240\u6709\u62a5\u6587\u5b57\u6bb5\u5b57\u8282\u957f\u5ea6\u7684\u603b\u548c\uff0c\u4fbf\u4e8e\u591a\u4e2a\u5305\u6570\u636e\u63d0\u53d6\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u62a5\u6587\u201d\u6570\u636e\u57df\u201c\u5b57\u6bb5\u7684\u5b57\u8282\u957f\u5ea6\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u7531\u4e8e\u62a5\u6587\u6570\u636e\u957f\u5ea6\u5b57\u6bb5\u53602\u5b57\u8282\uff0c\u6240\u4ee5\u62a5\u6587\u4e2d\u6709\u6548\u6570\u636e\u957f\u5ea6\u4e0d\u5f97\u8d85\u8fc765536\u5b57\u8282\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u5355\u4e2a\u62a5\u6587\u6709\u6548\u6570\u636e\u957f\u5ea6\u5efa\u8bae\u4e0d\u8d85\u8fc71024\u5b57\u8282\uff0c\u6570\u636e\u8fc7\u5927\u5e94\u5206\u5305\u53d1\u9001\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.h5,{id:"\u6570\u636e\u5305\u62c6\u5206\u4e0e\u5408\u5e76",children:"\u6570\u636e\u5305\u62c6\u5206\u4e0e\u5408\u5e76"}),"\n",(0,s.jsx)(e.p,{children:"\u53d1\u9001\u65b9\u5206\u5305\u53d1\u9001\u65f6\uff0c\u591a\u4e2a\u5305\u7684\u62a5\u6587\u7f16\u53f7\u76f8\u540c\uff0c\u62a5\u6587\u6570\u636e\u957f\u5ea6\u4e3a\u603b\u957f\u5ea6\u3002\n\u63a5\u6536\u65b9\u63a5\u6536\u5230\u62a5\u6587\u6570\u636e\u957f\u5ea6\u5927\u4e8e\u5b9e\u9645\u6570\u636e\u957f\u5ea6\u65f6\uff0c\u9700\u7b49\u5f85\u7ee7\u7eed\u63a5\u6536\u540e\u7eed\u76f8\u540c\u62a5\u6587\u7f16\u53f7\u7684\u62a5\u6587\uff0c\u76f4\u5230\u62a5\u6587\u6570\u636e\u957f\u5ea6\u7b49\u4e8e\u5b9e\u9645\u6570\u636e\u957f\u5ea6\uff0c\u7136\u540e\u518d\u53d1\u9001\u54cd\u5e94\u62a5\u6587\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u63a5\u6536\u65b9\u7b49\u5f85\u63a5\u6536\u591a\u4e2a\u5305\u7684\u8d85\u65f6\u65f6\u95f4\u4e3a",(0,s.jsx)(e.em,{children:"500"}),"ms\uff0c\u8d85\u65f6\u540e\u5219\u4e22\u5f03\u4e4b\u524d\u63a5\u6536\u7684\u62a5\u6587\u3002\u5982\u679c\u540e\u7eed\u53c8\u63a5\u6536\u5230\u76f8\u540c\u7f16\u53f7\u7684\u62a5\u6587\uff0c\u5219\u53d1\u9001\u9519\u8bef(0x35)\u54cd\u5e94\u62a5\u6587\u3002"]}),"\n",(0,s.jsx)(e.h4,{id:"\u6570\u636e\u52a0\u5bc6",children:"\u6570\u636e\u52a0\u5bc6"}),"\n",(0,s.jsx)(e.p,{children:"\u62a5\u6587\u53d1\u9001\u65b9\u548c\u63a5\u6536\u65b9\u8981\u5bf9\u6709\u6548\u6570\u636e\u91c7\u7528AES\u7b97\u6cd5\u8fdb\u884c\u52a0\u89e3\u5bc6\uff0c\u79d8\u94a5\u7531\u670d\u52a1\u63d0\u4f9b\u65b9\u5206\u914d\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u79d8\u94a5\u957f\u5ea616\u5b57\u8282128\u4f4d"}),"\n",(0,s.jsx)(e.p,{children:"\u79d8\u94a5\u504f\u79fb\u91cf *****"}),"\n",(0,s.jsx)(e.p,{children:"\u7b97\u6cd5\u6a21\u5f0f CBC(Cipher Block Chaining) \u52a0\u5bc6\u5757\u94fe"}),"\n",(0,s.jsx)(e.p,{children:"\u8865\u7801\u65b9\u5f0f PKCS5Padding"}),"\n",(0,s.jsx)(e.h4,{id:"\u4e32\u53e3\u82af\u7247\u8bbe\u7f6e",children:"\u4e32\u53e3\u82af\u7247\u8bbe\u7f6e"}),"\n",(0,s.jsx)(e.p,{children:"\u6ce2\u7279\u7387\uff1a9600\n\u505c\u6b62\u4f4d\uff1a1\n\u6821\u9a8c\u4f4d\uff1a0\n\u6570\u636e\u4f4d\uff1a8\n\u6d41\u63a7\uff1a\u5173\u95ed"}),"\n",(0,s.jsx)(e.h5,{id:"\u652f\u6301\u7684usb\u8f6c\u4e32\u53e3\u7ebf\u82af\u7247\u7c7b\u578b",children:"\u652f\u6301\u7684USB\u8f6c\u4e32\u53e3\u7ebf\u82af\u7247\u7c7b\u578b"}),"\n",(0,s.jsx)(e.p,{children:"PL2303HXD  \u652f\u6301\nCH340       \u672a\u652f\u6301\nFT232       \u672a\u652f\u6301"}),"\n",(0,s.jsx)(e.p,{children:"\u4e09\u4e2a\u5e38\u7528\u7684\u82af\u7247\u7a33\u5b9a\u7a0b\u5ea6\u548c\u4ef7\u683c\u662f\u4e00\u81f4\u7684\uff0cFT232>CH340>PL2303"}),"\n",(0,s.jsx)(e.h4,{id:"\u793a\u4f8b\u6570\u636e",children:"\u793a\u4f8b\u6570\u636e"}),"\n",(0,s.jsx)(e.p,{children:"\u5047\u8bbe\u6570\u636e\u57df\u4e3a\uff1a"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:'{\\"content\\":\\"{\\\\\\"amt\\\\\\":100,\\\\\\"channel\\\\\\":\\\\\\"wx\\\\\\",\\\\\\"funcType\\\\\\":1,\\\\\\"mode\\\\\\":1}\\",\\"digest\\":\\"2f0c4683e25a7b9407265033070e9034\\"}'})}),"\n",(0,s.jsxs)(e.p,{children:["\u5b8c\u6574\u6570\u636e\u62a5\u6587\uff0816\u8fdb\u5236\uff09\u4e3a\uff1a\n",(0,s.jsx)(e.code,{children:"2f6e011001007f00747b22636f6e74656e74223a227b5c22616d745c223a3130302c5c226368616e6e656c5c223a5c2277785c222c5c2266756e63547970655c223a312c5c226d6f64655c223a317d222c22646967657374223a223266306334363833653235613762393430373236353033333037306539303334227d2f6e"})]})]})}function o(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},19365:(n,e,r)=>{r.d(e,{A:()=>i});r(96540);var s=r(34164);const t={tabItem:"tabItem_Ymn6"};var d=r(74848);function i(n){let{children:e,hidden:r,className:i}=n;return(0,d.jsx)("div",{role:"tabpanel",className:(0,s.A)(t.tabItem,i),hidden:r,children:e})}},11470:(n,e,r)=>{r.d(e,{A:()=>_});var s=r(96540),t=r(34164),d=r(23104),i=r(56347),l=r(205),c=r(57485),a=r(31682),h=r(89466);function o(n){return s.Children.toArray(n).filter((n=>"\n"!==n)).map((n=>{if(!n||(0,s.isValidElement)(n)&&function(n){const{props:e}=n;return!!e&&"object"==typeof e&&"value"in e}(n))return n;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof n.type?n.type:n.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function x(n){const{values:e,children:r}=n;return(0,s.useMemo)((()=>{const n=e??function(n){return o(n).map((n=>{let{props:{value:e,label:r,attributes:s,default:t}}=n;return{value:e,label:r,attributes:s,default:t}}))}(r);return function(n){const e=(0,a.X)(n,((n,e)=>n.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((n=>n.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(n),n}),[e,r])}function u(n){let{value:e,tabValues:r}=n;return r.some((n=>n.value===e))}function j(n){let{queryString:e=!1,groupId:r}=n;const t=(0,i.W6)(),d=function(n){let{queryString:e=!1,groupId:r}=n;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:e,groupId:r});return[(0,c.aZ)(d),(0,s.useCallback)((n=>{if(!d)return;const e=new URLSearchParams(t.location.search);e.set(d,n),t.replace({...t.location,search:e.toString()})}),[d,t])]}function p(n){const{defaultValue:e,queryString:r=!1,groupId:t}=n,d=x(n),[i,c]=(0,s.useState)((()=>function(n){let{defaultValue:e,tabValues:r}=n;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!u({value:e,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${r.map((n=>n.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const s=r.find((n=>n.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:e,tabValues:d}))),[a,o]=j({queryString:r,groupId:t}),[p,m]=function(n){let{groupId:e}=n;const r=function(n){return n?`docusaurus.tab.${n}`:null}(e),[t,d]=(0,h.Dv)(r);return[t,(0,s.useCallback)((n=>{r&&d.set(n)}),[r,d])]}({groupId:t}),f=(()=>{const n=a??p;return u({value:n,tabValues:d})?n:null})();(0,l.A)((()=>{f&&c(f)}),[f]);return{selectedValue:i,selectValue:(0,s.useCallback)((n=>{if(!u({value:n,tabValues:d}))throw new Error(`Can't select invalid tab value=${n}`);c(n),o(n),m(n)}),[o,m,d]),tabValues:d}}var m=r(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(74848);function b(n){let{className:e,block:r,selectedValue:s,selectValue:i,tabValues:l}=n;const c=[],{blockElementScrollPositionUntilNextRender:a}=(0,d.a_)(),h=n=>{const e=n.currentTarget,r=c.indexOf(e),t=l[r].value;t!==s&&(a(e),i(t))},o=n=>{let e=null;switch(n.key){case"Enter":h(n);break;case"ArrowRight":{const r=c.indexOf(n.currentTarget)+1;e=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(n.currentTarget)-1;e=c[r]??c[c.length-1];break}}e?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},e),children:l.map((n=>{let{value:e,label:r,attributes:d}=n;return(0,v.jsx)("li",{role:"tab",tabIndex:s===e?0:-1,"aria-selected":s===e,ref:n=>c.push(n),onKeyDown:o,onClick:h,...d,className:(0,t.A)("tabs__item",f.tabItem,d?.className,{"tabs__item--active":s===e}),children:r??e},e)}))})}function g(n){let{lazy:e,children:r,selectedValue:t}=n;const d=(Array.isArray(r)?r:[r]).filter(Boolean);if(e){const n=d.find((n=>n.props.value===t));return n?(0,s.cloneElement)(n,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:d.map(((n,e)=>(0,s.cloneElement)(n,{key:e,hidden:n.props.value!==t})))})}function y(n){const e=p(n);return(0,v.jsxs)("div",{className:(0,t.A)("tabs-container",f.tabList),children:[(0,v.jsx)(b,{...n,...e}),(0,v.jsx)(g,{...n,...e})]})}function _(n){const e=(0,m.A)();return(0,v.jsx)(y,{...n,children:o(n.children)},String(e))}},28453:(n,e,r)=>{r.d(e,{R:()=>i,x:()=>l});var s=r(96540);const t={},d=s.createContext(t);function i(n){const e=s.useContext(d);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:i(n.components),s.createElement(d.Provider,{value:e},n.children)}}}]);